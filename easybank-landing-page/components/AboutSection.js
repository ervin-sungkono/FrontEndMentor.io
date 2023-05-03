import AboutCard from "./AboutCard"

export default function AboutSection(){
    const aboutContent = [
        {
            icon: "/images/icon-online.svg", 
            title: "Online Banking", 
            description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            icon: "/images/icon-budgeting.svg", 
            title: "Simple Budgeting", 
            description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
        },
        {
            icon: "/images/icon-onboarding.svg", 
            title: "Fast Onboarding", 
            description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
        },
        {
            icon: "/images/icon-api.svg", 
            title: "Open API",
            description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        }
    ]
    return(
        <section id="about-section" className="container max-w-none py-8 md:py-12 bg-light-grayish-blue">
            <div className="max-w-2xl mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl mb-4 text-center md:text-left text-dark-blue">Why choose Easybank?</h2>
                <p className="text-base md:text-lg text-grayish-blue font-light text-center md:text-left">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <div className="flex flex-wrap gap-6">
                {
                    aboutContent.map((content, index) => (
                        <AboutCard content={content} key={index}/>
                    ))
                }
            </div>
        </section>
    )
}