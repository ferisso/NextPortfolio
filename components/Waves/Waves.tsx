import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { X } from "react-feather"

interface WavesProps {
  openWave: Boolean;
  closeWave: () => void;
}

export default function Waves({ openWave, closeWave }: WavesProps) {

  const waveVariant = {
    open: { height: '100vh', y: '-100vh' },
    closed: { y: '0' },
  }

  const modalVariant = {
    open: { height: '100vh', y: '-100vh' },
    closed: { height: '0', y: '0' }
  }

  const [waveTimed, setWaveTimed] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setWaveTimed(!!openWave);
    }, 1000)
    const el = document.querySelector('body')
    if (el) {
      el.style.overflowY = openWave ? 'hidden' : 'auto'
    }
  }, [openWave])

  return (
    <div>
      <motion.div
        className='w-full absolute mt-[-13rem] max-w-full overflow-hidden'
        animate={openWave ? 'open' : 'closed'}
        variants={waveVariant}
        transition={{ duration: 2 }}
        style={{ zIndex: !waveTimed ? '0' : 999 }}
      >
        <svg width="3625" height="224" viewBox="0 0 3625 224" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={{ scale: [1, 2, 2, 1] }} transition={{ duration: 4, repeat: Infinity }} d="M0 114L86.4563 112.3C172.731 110.7 345.644 107.3 518.012 106.5C690.562 105.7 862.75 107.3 1035.3 100.7C1207.67 94 1380.58 79 1553.31 75.5C1726.04 72 1898.96 80 2071.69 78.5C2244.42 77 2417.33 66 2589.7 66.7C2762.25 67.3 2934.44 79.7 3106.99 78.5C3279.36 77.3 3452.27 62.7 3538.54 55.3L3625 48V224H3538.54C3452.27 224 3279.36 224 3106.99 224C2934.44 224 2762.25 224 2589.7 224C2417.33 224 2244.42 224 2071.69 224C1898.96 224 1726.04 224 1553.31 224C1380.58 224 1207.67 224 1035.3 224C862.75 224 690.562 224 518.012 224C345.644 224 172.731 224 86.4563 224H0V114Z" fill="#3E3313" />
          <motion.path animate={{ scale: [1, 2, 1] }} transition={{ duration: 6, repeat: Infinity }} d="M0 100L86.4563 97C172.731 94 345.644 88 518.012 87.7C690.562 87.3 862.75 92.7 1035.3 97.8C1207.67 103 1380.58 108 1553.31 107C1726.04 106 1898.96 99 2071.69 96.3C2244.42 93.7 2417.33 95.3 2589.7 92.7C2762.25 90 2934.44 83 3106.99 84.8C3279.36 86.7 3452.27 97.3 3538.54 102.7L3625 108V224H3538.54C3452.27 224 3279.36 224 3106.99 224C2934.44 224 2762.25 224 2589.7 224C2417.33 224 2244.42 224 2071.69 224C1898.96 224 1726.04 224 1553.31 224C1380.58 224 1207.67 224 1035.3 224C862.75 224 690.562 224 518.012 224C345.644 224 172.731 224 86.4563 224H0V100Z" fill="#796418" />
          <motion.path animate={{ scale: [1, 2, 1, 2, 1] }} transition={{ duration: 5, repeat: Infinity }} d="M0 145L86.4563 141C172.731 137 345.644 129 518.012 124.7C690.562 120.3 862.75 119.7 1035.3 127C1207.67 134.3 1380.58 149.7 1553.31 155.5C1726.04 161.3 1898.96 157.7 2071.69 155.3C2244.42 153 2417.33 152 2589.7 153.7C2762.25 155.3 2934.44 159.7 3106.99 154.3C3279.36 149 3452.27 134 3538.54 126.5L3625 119V224H3538.54C3452.27 224 3279.36 224 3106.99 224C2934.44 224 2762.25 224 2589.7 224C2417.33 224 2244.42 224 2071.69 224C1898.96 224 1726.04 224 1553.31 224C1380.58 224 1207.67 224 1035.3 224C862.75 224 690.562 224 518.012 224C345.644 224 172.731 224 86.4563 224H0V145Z" fill="#BA9A16" />
          <motion.path animate={{ scale: [1, 2, 1] }} transition={{ duration: 10, repeat: Infinity }} d="M0 195L86.4563 192.2C172.731 189.3 345.644 183.7 518.012 183.2C690.562 182.7 862.75 187.3 1035.3 188.8C1207.67 190.3 1380.58 188.7 1553.31 186C1726.04 183.3 1898.96 179.7 2071.69 180.7C2244.42 181.7 2417.33 187.3 2589.7 188.8C2762.25 190.3 2934.44 187.7 3106.99 186.7C3279.36 185.7 3452.27 186.3 3538.54 186.7L3625 187V224H3538.54C3452.27 224 3279.36 224 3106.99 224C2934.44 224 2762.25 224 2589.7 224C2417.33 224 2244.42 224 2071.69 224C1898.96 224 1726.04 224 1553.31 224C1380.58 224 1207.67 224 1035.3 224C862.75 224 690.562 224 518.012 224C345.644 224 172.731 224 86.4563 224H0V195Z" fill="#FFD300" />
        </svg>

      </motion.div>
      <motion.div
        className="h-8 w-full bg-[#ffd300] absolute"
        animate={openWave ? 'open' : 'closed'}
        variants={modalVariant}
        transition={{ duration: 2 }}
        style={{ zIndex: !waveTimed ? '0' : 999 }}
      >
        {
          openWave &&
          <button onClick={() => closeWave()} className="mt-28 ml-8">
            <X className="h-8 w-16" />
          </button>
        }
      </motion.div>
    </div>
  )
}