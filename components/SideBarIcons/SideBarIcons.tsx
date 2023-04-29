import { useEffect, useState } from "react"
import { motion } from 'framer-motion';
import { Facebook, Linkedin, GitHub, Instagram } from "react-feather";


export default function SideBarIcons() {

  const [scrollValue, setScrollValue] = useState<Number>(0)

  useEffect(() => {
    window.addEventListener("scroll", isVisible)
  }, [])

  const isVisible = () => {
    setScrollValue(window.scrollY)
  }

  const animation = {
    on: { opacity: 1, left: 0 },
    off: { opacity: 0, left: "-12px" },
  }

  return (
    <motion.div
      className="w-12 bg-[#0000008f] h-[28vh] fixed mt-[36vh] backdrop-blur-lg flex flex-col text-white justify-evenly px-3 rounded-tr-lg rounded-br-lg items-center"
      animate={scrollValue < 2250 ? "off" : "on"}
      initial={{ opacity: 0 }}
      variants={animation}
      transition={{
        duration: 0.3,
      }}
    >
      <Linkedin className="cursor-pointer hover:h-8 hover:w-8 transition-all" />
      <GitHub className="cursor-pointer hover:h-8 hover:w-8 transition-all" />
      <Facebook className="cursor-pointer hover:h-8 hover:w-8 transition-all" />
      <Instagram className="cursor-pointer hover:h-8 hover:w-8 transition-all" />
    </motion.div>
  )
}