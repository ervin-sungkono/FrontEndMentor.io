import Image from "next/image"
import Button from "./Button"
import { useState } from "react"

export default function CommentInput({currentUser, handleSubmit, replyingTo = null}) {
    const [comment, setComment] = useState(replyingTo ? `@${replyingTo}` : "")

    return(
        <div className="w-full max-w-3xl p-4 md:p-6 grid grid-cols-12 gap-5 rounded-md md:rounded-xl bg-white">
            <Image src={currentUser.image.png} width={48} height={48} alt="" className="col-span-8 md:col-span-1 row-start-2 md:row-start-1"/>
            <textarea 
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onFocus={(e) => e.target.setSelectionRange(comment.length, comment.length)}
                className="col-span-12 md:col-span-9 px-4 py-2 md:px-6 md:py-3 resize-none rounded md:rounded-lg border-2 border-light-gray focus:border-light-grayish-blue outline-none text-sm md:text-base"
                rows={4}
                autoFocus
            >
            </textarea>
            <div className="col-span-4 md:col-span-2">
                <Button 
                    text={replyingTo ? "REPLY" : "SEND"}
                    fullWidth
                    handleClick={() => handleSubmit(comment.replace(`@${replyingTo}`, ""))}
                />
            </div>
        </div>
    )
}