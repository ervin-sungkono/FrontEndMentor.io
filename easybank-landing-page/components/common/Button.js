export default function Button({ children, fullWidth = false }){
    return (
        <div className={fullWidth ? "w-full" : ""}>
            <button className="bg-gradient-to-r from-lime-green to-bright-cyan py-3 px-6 rounded-full font-bold text-white hover:scale-110 transition-transform duration-300 ease-in-out">
                {children}
            </button>
        </div>
        
    )
}