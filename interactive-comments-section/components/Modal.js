import Button from "./Button"

export default function Modal({isVisible, handleModal, handleSubmit}){
    return(
        <div className={`${isVisible ? "flex" : "hidden"} fixed justify-center items-center top-0 left-0 z-50 w-full h-screen bg-black bg-opacity-50 p-4`}>
            <div className="w-full max-w-sm flex flex-col gap-6 bg-white p-4 md:p-6 rounded-md md:rounded-xl">
                <h3 className="text-dark-blue text-lg md:text-xl font-medium">Delete Comment</h3>
                <p className="text-grayish-blue text-sm md:text-base">
                    Are you sure you want to delete this comment? This will remove the comment and can&apos;t be undone
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Button 
                        text="NO, CANCEL"
                        fullWidth
                        buttonType="secondary"
                        handleClick={() => handleModal(false)}
                    />
                    <Button 
                        text="YES, DELETE"
                        fullWidth
                        buttonType="delete"
                        handleClick={() => {
                            handleModal(false)
                            handleSubmit()
                        }}
                    />
                </div>
            </div>
        </div>
    )
}