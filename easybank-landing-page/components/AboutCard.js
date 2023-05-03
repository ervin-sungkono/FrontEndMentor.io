import Image from "next/image"

export default function AboutCard({ content }){
    return (
        <div className="max-w-none md:max-w-[288px] flex-grow flex flex-col items-center md:items-start gap-4 md:gap-8">
            <Image src={content.icon} alt="" width={64} height={64}/>
            <div className="flex flex-col gap-2 md:gap-4 text-center md:text-left">
                <h5 className="text-xl md:text-2xl text-dark-blue">{content.title}</h5>
                <p className="text-[14.4px] text-grayish-blue font-light">{content.description}</p>
            </div>
        </div>
    )
}