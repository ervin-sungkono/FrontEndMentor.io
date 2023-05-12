import dynamic from "next/dynamic"
import useLocalStorage from "@/lib/use-local-storage"
import { MutatingDots } from "react-loader-spinner"
import { useEffect, useState } from "react"

const CommentInput = dynamic(() => import("./CommentInput"))
const CommentBox = dynamic(() => import("./CommentBox"))
const Modal = dynamic(() => import("./Modal"))

export default function CommentSection() {
    const [currentUser, setCurrentUser] = useState(null)
    const [userComments, setUserComments] = useLocalStorage("comments", null)
    const [replyingFocus, setReplyingFocus] = useState("")
    const [modalVisibility, setModalVisibility] = useState(false)
    const [deleteFocus, setDeleteFocus] = useState({})

    const initData = async() => {
        await fetch('/data.json')
        .then(res => res.json())
        .then(({currentUser, comments}) => {
            setCurrentUser(currentUser)
            if(!userComments)
            setUserComments(comments)
        })
      }

      useEffect(() => {
        initData()
      },[userComments])

    const updateComment = (commentId, newComment) => {
        const newComments = userComments.map(comment => {
            if(comment.id === commentId) return newComment
            return comment
        }).sort((a, b) => b.score - a.score)
        setUserComments(newComments)
    }

    const updateReply = (commentId, newReply) => {
        const newComments = userComments.map(comment => {
            if(comment.id === commentId) return {
                ...comment,
                replies: comment.replies.map(reply => {
                    if(reply.id === newReply.id) return newReply
                    return reply
                }).sort((a,b) => b.score - a.score)
            }
            return comment
        })
        setUserComments(newComments)
    }

    const addComment = (content) => {
        const newComment = {
            id: new Date().getTime(),
            content: content.trim(),
            createdAt: "just now",
            score: 0,
            user: currentUser,
            replies: []
        }
        setUserComments([...userComments, newComment])
    }

    const addReply = (commentId, reply) => {
        setReplyingFocus("")
        const newComments = userComments.map(comment => {
            if(comment.id === commentId) return {
                ...comment,
                replies: [...comment.replies, reply].sort((a,b) => b.score - a.score)
            }
            return comment
        })
        setUserComments(newComments)
    }

    const deleteComment = (commentId) => {
        const newComments = userComments.filter(comment => comment.id !== commentId)
        setUserComments(newComments)
    }

    const deleteReply = (commentId, replyId) => {
        const newComments = userComments.map(comment => {
            if(comment.id === commentId) return {
                ...comment,
                replies: comment.replies.filter(reply => reply.id !== replyId)
            }
            return comment
        })
        setUserComments(newComments)
    }

    const handleReplyChange = (commentId) => {
        setReplyingFocus(commentId)
    }

    if(!currentUser || !userComments) return (
        <MutatingDots 
            height="100"
            width="100"
            color="#5457b6"
            secondaryColor= '#5457b6'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            wrapperClass="div"
            visible={true}
        />
    )
    
    return(
        <section id="comment-section" className="flex flex-col items-center">
            <Modal 
                isVisible={modalVisibility} 
                handleModal={setModalVisibility} 
                handleSubmit={deleteFocus.replyId ? () => deleteReply(deleteFocus.replyId, deleteFocus.commentId) : () => deleteComment(deleteFocus.commentId)}
            />
            <div className="mb-6 flex flex-col gap-6">
                {userComments.map(comment => (
                    <div className="max-w-3xl flex flex-col gap-6" key={comment.id}>
                        <CommentBox 
                            currentUser={currentUser}
                            isReplying={comment.id === replyingFocus}
                            comment={comment}
                            handleReplyChange={handleReplyChange}
                            handleUpdate={updateComment}
                            handleReplySubmit={addReply}
                            handleModal={setModalVisibility}
                            handleDelete={setDeleteFocus}
                        />
                        {comment.replies.length > 0 && 
                            <div className="flex">
                                <hr className="border-l-2 border-l-light-gray ml-0 md:ml-8 mr-4 md:mr-8 h-auto"></hr>
                                <div className="flex flex-grow flex-col gap-3">
                                    {comment.replies.map(reply => (
                                        <CommentBox 
                                            currentUser={currentUser}
                                            isReplying={reply.id === replyingFocus}
                                            comment={reply}
                                            handleReplyChange={handleReplyChange}
                                            handleUpdate={updateReply}
                                            handleReplySubmit={addReply}
                                            handleModal={setModalVisibility}
                                            handleDelete={setDeleteFocus}
                                            replyId={comment.id}
                                            key={reply.id}
                                        />
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                ))}
            </div>
            <CommentInput currentUser={currentUser} handleSubmit={addComment}/>
        </section>
    )
}