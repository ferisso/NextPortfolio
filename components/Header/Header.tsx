import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Header() {

  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: "start",
      inline: "nearest"
    });
    history.pushState(null, '', '#' + id)
  }

  const changeButtons = (i: number, scroll: boolean = true) => {
    const newButtons = buttons.map((item, index) => {
      return {
        ...item,
        isSelected: i == index,
      }
    })
    setButtons(newButtons);
    scroll && scrollTo(buttons[i].id)
  }

  useEffect(() => {
    if (!!window.location.hash) {
      const id = window.location.hash.split('#')[1]
      const index = buttons.findIndex(f => f.id == id)
      changeButtons(index)
    }
  }, [])

  const [buttons, setButtons] = useState([
    { text: 'ABOUT ME', id: 'about', isSelected: false },
    { text: 'SKILLS', id: 'skills', isSelected: false },
    { text: 'PROJECTS', id: 'projects', isSelected: false },
    { text: 'CONTACT', id: 'contact', isSelected: false },
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

  useEffect(() => {
    const sections: any = document.querySelectorAll('section')
    sections.forEach((el: any, index: number) => {
      let top = window.scrollY
      let offset = el.offsetTop
      let height = el.offsetHeight
      if (top >= offset && top < offset + height) {
        changeButtons(index, false)
      }
    });
  }, [scrollPosition]);


  return (
    <div className="w-full h-16 fixed flex justify-center top-0 z-20 mt-6 px-4">
      <motion.div
        className="w-[500px] flex justify-evenly items-center bg-[#2d2d2dcc] rounded-lg text-white font-thin text-sm backdrop-blur-md p-2"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {
          buttons.map((item, index) => {
            return (
              <button
                className="tracking-widest p-3 rounded-lg hover:bg-[#3b3b3b] transition-colors duration-500 text-xs"
                key={item.id}
                onClick={() => changeButtons(index)}
                style={{ background: item.isSelected ? '#3b3b3b' : 'none' }}
              >
                {item.text}
              </button>
            )
          })
        }
      </motion.div>
    </div>
  )
}