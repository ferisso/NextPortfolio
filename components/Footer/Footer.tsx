

export default function Footer() {
  return (
    <div className="w-full h-8 bg-black flex justify-center items-center text-center">
      <span className="text-white text-xs font-thin">
        Developed by
        <a href="https://github.com/ferisso" target="_blank" className="ml-1 underline hover:text-[#f4d300] transition-colors">
          Fernando Nogueira Risso
        </a>
      </span>
    </div>
  )
}