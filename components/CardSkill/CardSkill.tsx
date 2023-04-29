import { motion } from "framer-motion";
import { useState } from "react";

interface CardSkillProps {
  id: number,
  title?: string,
  subtitle?: string,
  text?: string,
  textColor?: string,
  video?: string
}


export default function CardSkill({ id, title, subtitle, text, textColor = 'white', video }: CardSkillProps) {

  const playVideo = (play: boolean) => {
    const video: HTMLVideoElement | null = document.querySelector(`#video-${id}`)
    if (play && video) {
      video.play();
    }
    if (!play && video) {
      video.pause();
    }
  }

  return (
    <motion.div
      whileHover={{ scaleX: 1.03, boxShadow: '0px 0px 4px 1px #f4d300' }}
      className="w-full h-full rounded-lg p-4 flex flex-col justify-between overflow-hidden relative bg-zinc-900"
      style={{ color: textColor }}
      onMouseEnter={() => playVideo(true)}
      onMouseOut={() => playVideo(false)}
    >
      <div className="z-[1]">
        <p className="text-lg font-semibold">
          {title}
        </p>
        <p className="text-md font-thin mt-[-2px]">
          {subtitle}
        </p>
      </div>
      <video id={`video-${id}`} className="h-full absolute top-0 left-0 scale-[5] opacity-25" controls={false} muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <p className="text-sm font-thin underline cursor-pointer z-[1]">Learn more</p>
    </motion.div>
  )
}