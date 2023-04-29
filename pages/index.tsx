import Head from 'next/head'
import Aboutme from '../components/Aboutme/Aboutme'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Project from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import { motion, useScroll } from 'framer-motion'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {

  const { scrollYProgress } = useScroll()
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='*' />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100;0,300;0,400;0,600;0,700;0,900;1,400&family=Inter:wght@400;800;900&display=swap" rel="stylesheet" />
        <title>
          Fernando's portifolio
        </title>
      </Head>
      <motion.div style={{ scaleX: scrollYProgress }} className='bg-black h-1 fixed w-full z-30' />
      <Header />
      <Main />
      <Aboutme />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}
