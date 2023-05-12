export default function Button({startIcon = null, fullWidth = false, text, buttonType = "primary", type = "fill", handleClick}){
    switch(buttonType){
        case 'primary':
            return(
                <button 
                    className={`
                        flex justify-center items-center gap-2 rounded-md transition-colors duration-300
                        ${fullWidth ? " w-full" : ""} 
                        ${type === "fill" ? ` bg-moderate-blue hover:bg-light-grayish-blue text-white px-4 py-2` : type === "text" ? ` text-moderate-blue fill-moderate-blue hover:text-light-grayish-blue hover:fill-light-grayish-blue` : ""}`}
                    onClick={handleClick}
                >
                    {startIcon}
                    <p className="font-medium text-sm md:text-base">{text}</p>
                </button>
            )
        case 'secondary':
            return(
                <button 
                    className={`
                        flex justify-center items-center gap-2 rounded-md transition-colors duration-300
                        ${fullWidth ? " w-full" : ""} 
                        ${type === "fill" ? ` bg-grayish-blue hover:bg-opacity-70 text-white px-4 py-2` : type === "text" ? ` text-grayish-blue fill-grayish-blue hover:text-opacity-70 hover:fill-opacity-70` : ""}`}
                    onClick={handleClick}
                >
                    {startIcon}
                    <p className="font-medium text-sm md:text-base">{text}</p>
                </button>
            )
        case 'delete':
            return(
                <button 
                    className={`
                        flex justify-center items-center gap-2 rounded-md transition-colors duration-300
                        ${fullWidth ? " w-full" : ""} 
                        ${type === "fill" ? ` bg-soft-red hover:bg-pale-red text-white px-4 py-2` : type === "text" ? ` text-soft-red fill-soft-red hover:text-pale-red hover:fill-pale-red` : ""}`}
                    onClick={handleClick}
                >
                    {startIcon}
                    <p className="font-medium text-sm md:text-base">{text}</p>
                </button>
            )
        default:
            return <></>
    }
}