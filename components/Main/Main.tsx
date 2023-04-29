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
    <div className="h-[100vh] min-h-[950px] bg-[#FFD300] pt-96 px-24 font-medium">
      <div className='uppercase text-8xl block max-h-[96px] overflow-y-hidden noScrollBar'>
        {word.map((item, i) => {
          return <motion.p animate={{
            y: -scrollPosition / 1.2
          }} key={i}>{item}</motion.p>
        })}
      </div>
      {/* <motion.div style={{ scaleX: scrollYProgress }} className='bg-black h-1 w-full' /> */}
      <div>
        <p className='uppercase text-7xl'>
          THE
        </p>
        <p className='uppercase text-[160px] mt-[-50px]'>
          Future.
        </p>
      </div>
      <div className='flex text-zinc-800'>
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