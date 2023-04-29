import { motion } from "framer-motion"


interface SkillAvatarProps {
  image: string
}

export default function SkillAvatar({ image }: SkillAvatarProps) {
  return (
    <motion.div whileHover={{ scale: 1.2 }}
      className="h-14 w-14 flex justify-center items-center rounded-full bg-white"
    >
      <img src={image} alt="skill set" className="h-8" />
    </motion.div>
  )
}