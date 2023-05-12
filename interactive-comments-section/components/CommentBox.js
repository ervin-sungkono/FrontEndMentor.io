import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"

import DeleteIcon from "@/public/images/icon-delete.svg"
import EditIcon from "@/public/images/icon-edit.svg"
import ReplyIcon from "@/public/images/icon-reply.svg"

const CounterButton = dynamic(() => import("./CounterButton"))
const Button = dynamic(() => import("./Button"))
const CommentInput = dynamic(() => import("./CommentInput"))

export default function CommentBox({currentUser, isReplying, handleReplyChange, comment, handleUpdate, handleReplySubmit, handleModal, handleDelete, replyId = null}) {
    const [content, setContent] = useState("")
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        if(!editMode) setContent(comment.content)
        else setContent(`${comment.replyingTo ? `@${comment.replyingTo}` : ""} ${comment.content}`)
    }, [editMode])

    const updateScore = (newScore) => {
        const commentId = replyId ?? comment.id
        const newComment = {
            ...comment,
            score: newScore
        }
        handleUpdate(commentId, newComment)
    }

    const updateComment = () => {
        const commentId = replyId ?? comment.id
        const newComment = {
            ...comment,
            content: content.replace(`@${comment.replyingTo}`, "").trim()
        }
        handleUpdate(commentId, newComment)
        setEditMode(false)
    }

    const addReply = (content) => {
        const commentId = replyId ?? comment.id
        const newReply = {
            id: new Date().getTime(),
            content: content.trim(),
            createdAt: "just now",
            score: 0,
            replyingTo: comment.user.username,
            user: currentUser
        }
        handleReplySubmit(commentId, newReply)
    }

    const isCurrentUser = currentUser.username === comment.user.username

    return(
        <div className="flex flex-col gap-3">
            <div className="w-full p-4 md:p-6 flex items-start gap-5 rounded-md md:rounded-xl bg-white">
                <div className="hidden md:block">
                    <CounterButton count={comment.score} handleClick={updateScore}/>
                </div>
                <div className="flex flex-col flex-grow gap-2">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-3">
                            <Link href={`#${comment.user.username}`} className="flex items-center gap-3">
                                <div className="relative w-8 h-8 md:w-10 md:h-10">
                                    <Image src={comment.user.image.png} fill alt={comment.user.username}/>
                                </div>
                                <p className="text-dark-blue font-medium text-sm md:text-base">
                                    {comment.user.username}
                                    {isCurrentUser && <span className="ml-2 px-1.5 py-0.5 md:px-2 md:py-1 bg-moderate-blue text-white text-xs md:text-sm rounded-sm">you</span>}
                                </p>
                            </Link>
                            <p className="text-grayish-blue text-sm md:text-base">
                                {comment.createdAt}
                            </p>
                        </div>
                        <div className="hidden md:flex gap-4 items-center">
                            {!isCurrentUser ? 
                                <Button
                                    type="text"
                                    startIcon={<ReplyIcon/>}
                                    text={"Reply"}
                                    handleClick={() => handleReplyChange(comment.id)}
                                /> :
                                <>
                                    <Button
                                        type="text"
                                        startIcon={<DeleteIcon/>}
                                        text={"Delete"}
                                        buttonType="delete"
                                        handleClick={() => {
                                            handleModal(true)
                                            handleDelete({commentId: comment.id, replyId})
                                        }}
                                    />
                                    <Button
                                        type="text"
                                        startIcon={<EditIcon/>}
                                        text={"Edit"}
                                        handleClick={() => setEditMode(!editMode)}
                                    />
                                </>
                            }
                        </div>
                    </div>
                    {editMode ? 
                    <div className="flex flex-col items-end gap-4">
                        <textarea 
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-6 py-3 resize-none rounded-md md:rounded-xl border-2 border-light-gray focus:border-light-grayish-blue outline-none text-sm md:text-base"
                            rows={4}
                            autoFocus
                            onFocus={(e) => e.target.setSelectionRange(content.length, content.length)}
                        >
                        </textarea>
                        <Button
                            text={"UPDATE"}
                            handleClick={updateComment}
                        />
                    </div>
                    : 
                    <p className="text-grayish-blue text-sm md:text-base">
                        {comment.replyingTo ? 
                            <span>
                                <Link href={`#${comment.replyingTo}`} className="font-medium text-moderate-blue hover:underline">@{comment.replyingTo}</Link>&nbsp;
                            </span> : ""}
                        {content.replace(`@${comment.replyingTo}`, "")}
                    </p>
                    }
                    <div className="flex md:hidden justify-between">
                        <CounterButton count={comment.score} handleClick={updateScore} horizontal/>
                        <div className="flex md:hidden gap-4 items-center">
                            {!isCurrentUser ? 
                                <Button
                                    type="text"
                                    startIcon={<ReplyIcon/>}
                                    text={"Reply"}
                                    handleClick={() => handleReplyChange(comment.id)}
                                /> :
                                <>
                                    <Button
                                        type="text"
                                        startIcon={<DeleteIcon/>}
                                        text={"Delete"}
                                        buttonType="delete"
                                        handleClick={() => {
                                            handleModal(true)
                                            handleDelete({commentId: comment.id, replyId})
                                        }}
                                    />
                                    <Button
                                        type="text"
                                        startIcon={<EditIcon/>}
                                        text={"Edit"}
                                        handleClick={() => setEditMode(!editMode)}
                                    />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {isReplying && <CommentInput currentUser={currentUser} handleSubmit={addReply} replyingTo={comment.user.username}/>}
        </div>
    )
}