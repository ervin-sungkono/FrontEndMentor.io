import ArticleCard from "./ArticleCard"

export default function ArticleSection(){
    const articleContent = [
        {
            image: "/images/image-currency.jpg",
            author: "Claire Robinson",
            title: "Receive money in any currency with no fees",
            description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        },
        {
            image: "/images/image-restaurant.jpg",
            author: "Wilson Hutton",
            title: "Treat yourself without worrying about money",
            description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        },
        {
            image: "/images/image-plane.jpg",
            author: "Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        },
        {
            image: "/images/image-confetti.jpg",
            author: "Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        }
    ]
    return(
        <section id="article-section" className="container max-w-none py-8 md:py-12 bg-light-gray">
            <h2 className="text-2xl md:text-4xl mb-8 md:mb-12 text-dark-blue">Latest Articles</h2>
            <div className="flex flex-wrap gap-6">
                {articleContent.map((article, index) => (
                    <ArticleCard article={article} key={index}/>
                ))}
            </div>
        </section>
    )
}