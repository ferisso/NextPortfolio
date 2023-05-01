import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'


export default function Main() {
  const [word, setWord] = useState([
    'Creating',
    'Programing',
    'Designing',
    'Managing',
    'Creating',
    'Programing',
    'Designing',
    'Managing',
  ])

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className="h-[100vh] min-h-[950px] bg-[#FFD300] pt-48 sm:pt-96 sm:px-24 px-8 font-medium">
      <div className='uppercase sm:text-7xl text-4xl block max-h-[40px] sm:max-h-[72px] overflow-y-hidden noScrollBar'>
        {word.map((item, i) => {
          return <motion.p animate={{
            y: -scrollPosition / 1.2
          }} key={i}>{item}</motion.p>
        })}
      </div>
      {/* <motion.div style={{ scaleX: scrollYProgress }} className='bg-black h-1 w-full' /> */}
      <div className='flex flex-col'>
        <p className='uppercase sm:text-6xl text-2xl'>
          THE
        </p>
        <p className='uppercase sm:text-9xl text-4xl'>
          Future.
        </p>
      </div>
      <div className='flex text-zinc-800 sm:flex-row flex-col sm:gap-0 gap-4'>
        <p className='mr-16 max-w-[560px]'>
          Hey!! Welcome to my portfolio! I'm excited to have you here and share all my recently work to you. This portfolio is a collection of my projects and experiences as a software engineer, and I hope you'll find it informative and engaging.
        </p>
        <p className='max-w-[560px]'>
          I have more than 5 years of experience in software engineering, and I specialize in web development. I've had the opportunity to work on a variety of projects in my career, and I'am currently working @SAASTEC_NETWORK.
        </p>
      </div>
    </div>
  )
}