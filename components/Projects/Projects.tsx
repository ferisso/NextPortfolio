import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Waves from "../../components/Waves/Waves"

export function Project() {

  const [isOpen, setIsOpen] = useState(false)
  const [item, setItem] = useState(5)

  const close = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (item !== 5) {
      const el = document.getElementsByTagName('body')
      el[0].style.overflow = 'hidden'
    }
  })

  return (
    <section id="projects">
      <div className="h-screen bg-black w-full flex justify-center items-center">
        <button className="p-4 bg-[#fd9300]" onClick={close}>
          Open project
        </button>
      </div>
      <Waves openWave={isOpen} closeWave={close} />
    </section>
  )
}