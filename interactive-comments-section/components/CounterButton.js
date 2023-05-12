import PlusIcon from "@/public/images/icon-plus.svg"
import MinusIcon from "@/public/images/icon-minus.svg"

export default function CounterButton({count, handleClick, horizontal = false}){
    return(
        <div className={`flex ${horizontal ? "flex-row" : "flex-col"} justify-center items-center bg-very-light-gray rounded-md`}>
            <div 
                className="cursor-pointer w-8 h-8 md:w-10 md:h-10 flex justify-center items-center fill-light-grayish-blue hover:fill-moderate-blue"
                onClick={() => handleClick(count + 1)}
            >
                <PlusIcon/>
            </div>
            <div className="w-6 md:w-10 text-center font-medium text-moderate-blue text-sm md:text-base">{count}</div>
            <div 
                className="cursor-pointer w-8 h-8 md:w-10 md:h-10 flex justify-center items-center fill-light-grayish-blue hover:fill-moderate-blue"
                onClick={() => handleClick(count - 1)}
            >
                <MinusIcon/>
            </div>
        </div>
        
    )
}