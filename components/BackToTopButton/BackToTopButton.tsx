import { useEffect, useState } from 'react';
import { ChevronUp } from 'react-feather';
import { motion } from 'framer-motion';

export default function BackToTopButton() {

  const scroll = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  const [scrollValue, setScrollValue] = useState<Number>(0)

  useEffect(() => {
    window.addEventListener("scroll", isVisible)
  }, [])

  const isVisible = () => {
    setScrollValue(window.scrollY)
  }

  return (
    scrollValue > 300 ?
      <motion.div
        className="fixed right-4 bottom-4 w-12 h-12 rounded-full cursor-pointer backdrop-blur-md bg-[#ffd300] flex justify-center items-center shadow-xl border border-black"
        onClick={scroll}
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
        }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1 }}
      >
        <ChevronUp color='black' />
      </motion.div>
      :
      null
  )
}
