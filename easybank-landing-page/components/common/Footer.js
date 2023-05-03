import Link from "next/link"
import Image from "next/image"
import Button from "./Button"

export default function Footer(){
    const socialLinks = [
        {url: "#facebook", icon: "/images/icon-facebook.svg"},
        {url: "#youtube", icon: "/images/icon-youtube.svg"},
        {url: "#twitter", icon: "/images/icon-twitter.svg"},
        {url: "#pinterest", icon: "/images/icon-pinterest.svg"},
        {url: "#instagram", icon: "/images/icon-instagram.svg"}
    ]
    
    const footerLinks = [
        {url: "#about-us", label: "About Us"},
        {url: "#contact", label: "Contact"},
        {url: "#blog", label: "Blog"},
        {url: "#careers", label: "Careers"},
        {url: "#support", label: "Support"},
        {url: "#privacy-policy", label: "Privacy Policy"},
    ]
    const FOOTER_SLICE_LENGTH = Math.floor(footerLinks.length / 2)
    return(
        <footer className="bg-dark-blue grid grid-cols-1 md:grid-cols-12 container max-w-none py-8 md:py-12">
            <div className="md:col-span-3 flex flex-col items-center md:items-start mb-4 md:mb-0">
                <Image src="/logo-white.svg" alt="" className="mb-4 md:mb-12" width={139} height={20}/>
                <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                        <Link href={social.url} key={index}>
                            <Image src={social.icon} alt="" width={18} height={18}/>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
                {footerLinks.slice(0, FOOTER_SLICE_LENGTH).map(link => (
                    <Link href={link.url} key={link.label} className="text-white mb-2 hover:text-lime-green">{link.label}</Link>
                ))}
            </div>
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
                {footerLinks.slice(FOOTER_SLICE_LENGTH).map(link => (
                    <Link href={link.url} key={link.label} className="text-white mb-2 hover:text-lime-green">{link.label}</Link>
                ))}
            </div>
            <div className="md:col-span-5 flex flex-col items-center md:items-end mt-4 md:mt-0">
                <Link href={"#invite"} className="mb-4 md:mb-8">
                    <Button>Request Invite</Button>
                </Link>
                <p className="text-grayish-blue">© Easybank. All Rights Reserved</p>
            </div>
        </footer>
    )
}