
interface SkillsUsedProps {
  skills: Array<string>;
}

export default function SkillsUsed({ skills }: SkillsUsedProps) {
  return (
    <div className="w-full bg-black h-16 flex px-4 justify-around max-w-lg rounded-xl mb-8 items-center">
      {
        skills.map((item, index) => {
          return (
            <div key={index} className="rounded-full h-12 w-12 flex justify-center items-center bg-slate-100">
              <img className="h-8" src={`/${item}.png`}></img>
            </div>
          )
        })
      }
    </div>
  )
}