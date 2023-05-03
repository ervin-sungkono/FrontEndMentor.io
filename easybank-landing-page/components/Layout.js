import Head from "next/head"
import { Public_Sans } from 'next/font/google'
import dynamic from "next/dynamic"

const publicSans = Public_Sans({ subsets: ['latin'] })

const Navbar = dynamic(() => import("./common/Navbar"))
const Footer = dynamic(() => import("./common/Footer"))

export default function Layout({title, description, children, showNavbar = true, showFooter = true}){
    return(
        <>
            <Head>
                <title>{ title }</title>
                <meta name="description" content={ description }/>
            </Head>
            {showNavbar && <Navbar/>}
            <main className={`${publicSans.className} min-h-screen`}>{children}</main>
            {showFooter && <Footer/>}
            <div class="attribution py-3 container max-w-none text-center bg-dark-blue text-white">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/ervin-sungkono" className="font-semibold text-lime-green hover:underline">Ervin Cahyadinata Sungkono</a>.
            </div>
        </>
    )
}