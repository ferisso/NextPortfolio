import { Facebook, GitHub, Instagram, Linkedin, Mail } from "react-feather";

const buttons = [
  { icon: <Mail />, href: 'mailto:fernando.risso@outlook.com.br' },
  { icon: <Linkedin />, href: 'https://www.linkedin.com/in/fernando-risso-11539b19b/' },
  { icon: <GitHub />, href: 'https://www.github.com/ferisso' },
  { icon: <Instagram />, href: 'https://www.instagram.com/ferisso/' },
  { icon: <Facebook />, href: 'https://www.facebook.com/fernando.risso.9022/' },
]

export default function Contact() {
  return (
    <section className="sm:h-[70vh] bg-[#ffd300] w-full flex flex-col justify-around px-8 sm:px-24" id="contact">
      <div className="text-3xl mt-4 sm:text-6xl font-semibold font-sans">
        <p>Whenever, wherever.</p>
        <p>We're meant to work</p>
        <p>together</p>
      </div>
      <div className="flex gap-2 sm:gap-20 text-lg sm:text-2xl mt-4 sm:flex-row flex-col">
        <p className="max-w-xs font-bold">
          Contact me for full-time jobs,
          freelance projects,
          design and tech advices
          or just say hello
        </p>
        <p>I have an inbox zero rule so i'll see your message and I'll reply at least one smiley. I promise.</p>
      </div>
      <div className="w-full bg-black sm:h-24 h-12 sm:py-0 py-8 rounded-xl flex justify-around items-center my-4">
        {
          buttons.map((item, key) => {
            return (
              <a className="text-white cursor-pointer hover:text-[#ffd300] transition-colors duration-300" key={key} href={item.href} target="_blank">
                {item.icon}
              </a>
            )
          })
        }
      </div>
    </section>
  )
}