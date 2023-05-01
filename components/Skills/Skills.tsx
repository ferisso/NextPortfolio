import CardSkill from "../CardSkill/CardSkill";

export default function Skills() {
  const skills = [
    {
      title: 'Web development',
      subtitle: 'Creating web apps, websites using the latest tech in the market such as Vue, React, Angular, Next, Nuxt and many more.',
      text: 'AAAAAA',
      video: '/coding.mp4'
    },
    {
      title: 'Mobile developement',
      subtitle: 'Building mobile applications for both iOS and Android platforms. I have a deep understanding of the React Native framework and its associated technologies.',
      text: 'AAAAAA',
      video: '/mobile.mp4'
    },
    {
      title: 'Design, UI/UX',
      subtitle: 'Using Figma to make your ideas into a beautiful design that latelly can be an awesome application.',
      text: 'AAAAAA',
      video: '/design.mp4'
    },
    {
      title: 'Back-end development',
      subtitle: "Creating yours API's to connect your applications and systems, enabling seamless data exchange and automation.",
      text: 'AAAAAA',
      video: '/back.mp4'
    },
  ]
  return (
    <section className="sm:h-[78vh] bg-black w-full pt-16 sm:px-24 px-8" id="skills">
      <p className="font-bold text-4xl text-[#f4d300]">
        What do I work with?
      </p>
      <p className="text-[#f4d300] font-thin text-lg">Here some of my services</p>
      <div
        className="w-full sm:h-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 py-12"
      >
        {
          skills.map((item, key) => {
            return (
              <CardSkill
                id={key}
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                text={item.text}
                video={item.video}
              />
            )
          })
        }
      </div>
    </section>
  )
}