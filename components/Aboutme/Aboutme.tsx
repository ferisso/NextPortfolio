import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

export function Aboutme() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [numberOfLines, setNumberOfLines] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const addLines = () => {
    setTimeout(() => {
      setNumberOfLines(old => old + 0.5)
      addLines()
    }, 1900)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    const date = new Date()
    const number = (date.getSeconds() + date.getMilliseconds() + 80000) * 3.14
    setNumberOfLines(number)
    addLines()
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="h-[100vh] bg-black w-full pt-10" id='about'>
      <motion.div className="absolute h-full w-[482px] bg-topo bg-no-repeat" />
      <div className="flex justify-end">
        <div className="text-white uppercase text-end mt-28 mr-24">
          <p className="text-6xl font-thin">MORE THAN</p>
          <p className="text-8xl font-bold">{numberOfLines.toFixed(0)}</p>
          <p className="text-6xl font-thin">LINES OF CODE</p>
        </div>
      </div>
      <div className="flex justify-between ml-24 mt-10">
        <div className="text-white max-w-lg mt-[-5rem]">
          <p className="font-bold">
            My name is Fernando Nogueira risso. I'm passionate about creating innovative solutions to complex problems and enjoy working with cutting-edge technologies to bring those solutions to life.
          </p>
          <p className="font-thin">
            In my free time, I enjoy staying up-to-date with the latest trends in technology and exploring new programming languages and frameworks. I'm also passionate about sharing my knowledge with others and contributing to open-source projects.

            I'm excited about the opportunities that lie ahead and look forward to connecting with others in the software engineering community. If you have any questions or would like to chat further, please don't hesitate to reach out to me!
          </p>
        </div>
        <div className="bg-ferisso w-[500px] h-[500px] bg-contain bg-no-repeat mr-24"></div>
      </div>
    </section>
  )
}