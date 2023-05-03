import Image from "next/image"
import Link from "next/link"

import Button from "./Button"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Navbar(){
    const router = useRouter()
    const isActive = (pathname) => (router.pathname === pathname)
    const [sidebarActive, setSidebarActice] = useState(false)

    const toggleSidebar = () => {
        setSidebarActice(!sidebarActive)
    }
    
    const links = [
        {label: "Home", url: "/"},
        {label: "About", url: "/about"},
        {label: "Contact", url: "/contact"},
        {label: "Blog", url: "/blog"},
        {label: "Careers", url: "/careers"},
    ]

    return(
        <nav className="container max-w-none fixed top-0 left-0 flex justify-between items-center bg-white shadow-md h-20 z-fixed">
            <Link href={"/"}>
                <Image src={"/logo.svg"} width={139} height={20}/>
            </Link>
            <ul className={`absolute top-0 right-0 ${sidebarActive ? "translate-x-0" : "translate-x-full md:translate-x-0"} md:transition-none md:relative flex flex-col md:flex-row items-center gap-4 h-screen bg-white md:bg-transparent md:h-full px-6 pt-20 pb-6 md:pb-0 md:pt-0 md:px-0 transition-transform duration-500`}>
                {links.map(link => (
                    <li className={`h-16 w-full md:h-full hover:text-dark-blue relative after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:h-1 after:bg-gradient-to-r after:from-lime-green after:to-bright-cyan hover:after:scale-x-100 transition-all after:transition-all after:duration-300 duration-300 ${isActive(link.url) ? "after:scale-x-100 text-dark-blue" : "text-grayish-blue"}`} key={link.label}>
                        <Link href={link.url} className="h-full flex justify-center items-center">
                            {link.label}
                        </Link>
                    </li>
                ))}
                <Link href={"#invite"} className="block md:hidden mt-auto">
                    <Button>Request Invite</Button>
                </Link>
            </ul>
            <div class="md:hidden block space-y-2 z-10 cursor-pointer" onClick={toggleSidebar}>
                <span class="block w-8 h-0.5 bg-gray-600"></span>
                <span class="block w-8 h-0.5 bg-gray-600"></span>
                <span class="block w-5 h-0.5 bg-gray-600"></span>
            </div>
            <Link href={"#invite"} className="hidden md:block">
                <Button>Request Invite</Button>
            </Link>
        </nav>
    )
}