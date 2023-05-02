import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Lock } from "react-feather"
import Waves from "../Waves/Waves"

export default function Project() {

  const [isOpen, setIsOpen] = useState(false)
  const [item, setItem] = useState(5)

  const close = () => {
    setIsOpen(!isOpen);
  }

  const projects = [
    0,
    1,
    2,
    3,
    4
  ]

  useEffect(() => {
    if (item !== 5) {
      const el = document.getElementsByTagName('body')
      el[0].style.overflow = 'hidden'
    }
  })

  return (
    <section id="projects">
      <div className="bg-black w-full px-8 pb-56 pt-16">
        {
          projects.map((item, key) => {
            return (
              <div
                key={key}
                className="flex justify-around gap-4 items-center text-[#f4d300] mb-8"
                style={{ flexDirection: key % 2 ? 'row-reverse' : 'row' }}
              >
                <div>
                  <p className="font-semibold text-lg">
                    Project name -
                    <span className="font-thin"> Front-end</span>
                  </p>
                  <p className="font-thin mb-4 max-w-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab magnam cupiditate cum iure.</p>
                  <button
                    className="py-3 px-6 bg-[#f4d300] rounded-2xl hover:opacity-80 transition-all duration-300 flex gap-2 items-center text-black"
                  >
                    <Lock size={20} /> See more
                  </button>
                </div>
                <div>
                  <img src="/tel.png" />
                </div>
              </div>
            )
          })
        }
      </div>
      <Waves openWave={isOpen} closeWave={close} />
    </section>
  )
}