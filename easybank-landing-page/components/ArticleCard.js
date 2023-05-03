import Image from "next/image"
import Link from "next/link"

export default function ArticleCard({ article }){
    return (
        <Link href="#read" className="group">
            <div className="max-w-none md:max-w-[300px] flex-grow flex flex-col items-center md:items-start rounded-lg overflow-hidden shadow-md">
                <div className="relative w-full" style={{aspectRatio: '4 / 3'}}>
                    <Image src={article.image} alt="" fill/>
                </div>
                <div className="flex flex-col gap-2 bg-white p-4">
                    <p className="text-sm text-grayish-blue">By {article.author}</p>
                    <h5 className="text-lg md:text-xl group-hover:text-lime-green transition-colors">{article.title}</h5>
                    <p className="text-sm md:text-base text-grayish-blue font-light">{article.description}</p>
                </div>
            </div>
        </Link>
        
    )
}