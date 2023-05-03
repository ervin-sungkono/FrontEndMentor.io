import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
const HeroSection = dynamic(() => import("@/components/HeroSection"))
const AboutSection = dynamic(() => import("@/components/AboutSection"))
const ArticleSection = dynamic(() => import("@/components/ArticleSection"))

export default function Home() {
  return (
    <Layout
      title={"Frontend Mentor | Easybank landing page"}
      description={"Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."}
    >
      <HeroSection/>
      <AboutSection/>
      <ArticleSection/>
    </Layout>
  )
}
