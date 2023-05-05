import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Lock, X } from "react-feather"
import Dialog from "../Dialog/Dialog"
import Waves from "../Waves/Waves"

export default function Project() {

  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(681);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const close = () => {
    setIsOpen(!isOpen);
  }


  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectProject = (project: any) => {
    setSelectedProject(project);
    setIsOpen(true);
  }

  const projects = [
    {
      name: '[LeadsVance]',
      img: '/leadsvance.png',
      type: 'Fullstack | UI/UX',
      text: 'Simply the best plataform to manage your leads!',
      fullText: 'Managing leads can be a time-consuming and tedious process for businesses. However, a new project aims to simplify this process by automating the task of sending WhatsApp messages and SMS to leads. Using this project, businesses would be able to upload their lead list and create customized messages to be sent automatically. The messages could be tailored to specific segments or stages of the lead funnel, allowing for more effective communication and higher conversion rates',
      isLock: false,
      skills: ['next', 'postgre', 'node', 'gcp'],
    },
    {
      name: 'SaveNature',
      img: '/savenature.png',
      type: 'Fullstack | UI/UX',
      text: 'Want report an ambiental crime? You already know where to go!',
      fullText: "The project in question would enable individuals to report environmental crimes by pinpointing the location of the crime on a map. This would make it easier for people to report these crimes and for authorities to take action. Users would simply need to mark the location of the crime on the project's app, along with additional details about the crime. The report would then be forwarded to the appropriate authorities for investigation and enforcement.",
      isLock: false,
      skills: ['react', 'node', 'postgre', 'aws'],
    },
    {
      name: 'E-parking',
      img: '/eparking.png',
      type: 'Fullstack | UI/UX',
      text: 'The plataform that changed the way you park your car!',
      fullText: "With the increasing number of vehicles on the road, finding a parking spot can be a major challenge. However, a new project aims to make this process easier by enabling users to reserve parking spots in advance via a website. Using the website, users would be able to select a parking lot and a specific parking spot that they would like to reserve. They could also specify the date and time they need the spot, and pay for the reservation online.",
      isLock: false,
      skills: ['html', 'css', 'mysql', 'php'],
    },
    {
      name: 'SaaSTec APP',
      img: '/saastec.png',
      type: 'Fullstack | UI/UX',
      text: 'TOP SECRET 🤫',
      isLock: true,
    },
    {
      name: 'SaaSAuto',
      img: '/saasauto.png',
      type: 'Front-end',
      text: 'TOP SECRET 🤫',
      isLock: true,
    },
    {
      name: 'SaaSRetail',
      img: '/saasretail.png',
      type: 'Fullstack',
      text: 'TOP SECRET 🤫',
      isLock: true,
    },
    {
      name: 'SaaSHub',
      img: '/saashub.png',
      type: 'Fullstack',
      text: 'TOP SECRET 🤫',
      isLock: true,
    },
  ]

  return (
    <section id="projects">
      <div className="bg-black w-full px-8 pb-56 sm:pt-16">
        {
          screenWidth > 639 ?
            projects.map((item, key) => {
              return (
                <motion.div
                  key={key}
                  className="flex justify-around gap-4 items-center text-[#ffd300] mb-8"
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
                      className="py-3 px-6 bg-[#ffd300] rounded-2xl hover:opacity-80 transition-all duration-300 flex gap-2 items-center text-black"
                      onClick={() => selectProject(item)}
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
                  className="text-[#ffd300] flex flex-col items-center gap-4"
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
                      className="py-3 px-6 bg-[#ffd300] rounded-2xl hover:opacity-80 transition-all duration-300 flex gap-2 items-center text-black"
                      onClick={() => selectProject(item)}
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
      <Waves />
      <Dialog onClose={close} open={isOpen} project={selectedProject} />
    </section>
  )
}