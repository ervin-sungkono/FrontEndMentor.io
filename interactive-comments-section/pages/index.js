import dynamic from 'next/dynamic'
import { Rubik } from 'next/font/google'
import Head from 'next/head'

const CommentSection = dynamic(() => import('@/components/CommentSection'))

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <title>Frontend Mentor | Interactive comments section</title>
      </Head>
      <main className={`${rubik.className} container max-w-none py-12 min-h-screen bg-very-light-gray`}>
        <CommentSection/>
      </main>
    </>
  )
}