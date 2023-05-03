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

  const [screenWidth, setScreenWidth] = useState<number>(681);

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const projects = [
    {
      name: 'E-parking',
      img: '/eparking.png',
      type: 'Full-stack | UI/UX',
      text: 'The plataform that changed the way you park your car!',
      isLock: false,
    },
    {
      name: '[LeadsVance]',
      img: '/leadsvance.png',
      type: 'Full-stack | UI/UX',
      text: 'Simply the best plataform to manage your leads!',
      isLock: false,
    },
    {
      name: 'SaveNature',
      img: '/savenature.png',
      type: 'Full-stack | UI/UX',
      text: 'Want report an ambiental crime? You already know where to go!',
      isLock: false,
    },
    {
      name: 'SaaSTec APP',
      img: '/saastec.png',
      type: 'Full-stack | UI/UX',
      text: 'TOP SECRET 🤫',
      isLock: true,
    },
  ]

  useEffect(() => {
    if (item !== 5) {
      const el = document.getElementsByTagName('body')
      el[0].style.overflow = 'hidden'
    }
  })

  return (
    <section id="projects">
      <div className="bg-black w-full px-8 pb-56 sm:pt-16">
        {
          screenWidth > 680 ?
            projects.map((item, key) => {
              return (

                <motion.div
                  key={key}
                  className="flex justify-around gap-4 items-center text-[#f4d300] mb-8"
                  style={{ flexDirection: key % 2 ? 'row-reverse' : 'row' }}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <div>
                    <p className="font-semibold text-lg">
                      {item.name} -
                      <span className="font-thin"> {item.type}</span>
                    </p>
                    <p className="font-thin mb-4 max-w-xs">
                      {item.text}
                    </p>
                    <button
                      className="py-3 px-6 bg-[#f4d300] rounded-2xl hover:opacity-80 transition-all duration-300 flex gap-2 items-center text-black"
                    >
                      {item.isLock && <Lock size={20} />}
                      See more
                    </button>
                  </div>
                  <div>
                    <img className="max-h-96" src={item.img} />
                  </div>
                </motion.div>
              )
            })
            :
            projects.map((item, key) => {
              return (
                <motion.div
                  key={key}
                  className="text-[#f4d300] flex flex-col items-center gap-4"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0 }}
                >
                  <div>
                    <img className="max-h-96" src={item.img} />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <p className="font-semibold text-lg">
                      {item.name} -
                      <span className="font-thin"> {item.type}</span>
                    </p>
                    <p className="font-thin mb-4 max-w-xs">
                      {item.text}
                    </p>
                    <button
                      className="py-3 px-6 bg-[#f4d300] rounded-2xl hover:opacity-80 transition-all duration-300 flex gap-2 items-center text-black"
                    >
                      {item.isLock && <Lock size={20} />}
                      See more
                    </button>
                  </div>
                </motion.div>
              )
            })
        }
      </div>
      <Waves openWave={isOpen} closeWave={close} />
    </section>
  )
}