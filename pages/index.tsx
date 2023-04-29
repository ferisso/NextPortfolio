import Head from 'next/head'
import { Aboutme } from './Aboutme/Aboutme'
import { Header } from '../components/Header/Header'
import { Main } from './Main/Main'
import { Project } from './Projects/Projects'
import { Skills } from './Skills/Skills'
import { motion, useScroll } from 'framer-motion'
import { Contact } from './Contact/Contact'
import { BackToTopButton } from '../components/BackToTopButton/BackToTopButton'
import { Footer } from '../components/Footer/Footer'
import { SideBarIcons } from '../components/SideBarIcons/SideBarIcons'
import Waves from '../components/Waves/Waves'

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
      {/* <SideBarIcons /> */}
      <Main />
      <Aboutme />
      <Skills />
      <Project />
      <Contact />
      {/* <BackToTopButton /> */}
      <Footer />
    </div>
  )
}
