import Image from "next/image"
import Mockups from "@/public/images/image-mockups.png"
import DesktopBackground from "@/public/images/bg-intro-desktop.svg"
import MobileBackground from "@/public/images/bg-intro-mobile.svg"

import Button from "./common/Button"
import Link from "next/link"

export default function HeroSection(){
    return(
        <section id="hero-section" className="container max-w-none min-h-[80vh] relative flex flex-col md:flex-row justify-between items-center py-8 md:py-12 bg-light-gray">
            <div className="relative block md:hidden w-screen aspect-square">
                <Image src={MobileBackground} fill className="object-cover" alt=""/>
                <Image src={Mockups} className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] object-cover z-10"/>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-2/5 items-center md:items-start">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-left text-dark-blue">Next generation digital banking</h1>
                <p className="text-base md:text-lg text-grayish-blue mb-2 font-light text-center md:text-left">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <Link href={"#invite"}>
                    <Button>Request Invite</Button>
                </Link>
            </div>
            <Image src={Mockups} className="hidden md:block absolute w-3/5 min-w-[560px] max-w-3xl -right-36 z-10" quality={90} priority/>
            <div className="absolute right-0 hidden md:flex items-center max-h-[80vh] translate-x-[35%] overflow-hidden">
                <Image src={DesktopBackground} style={{objectFit: 'cover'}}/>
            </div>
        </section>
    )
}