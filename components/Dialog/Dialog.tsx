import { AnimatePresence, motion } from "framer-motion"
import { ClassAttributes, InputHTMLAttributes, useEffect, useState } from "react";
import OtpInput from 'react-otp-input';
import { X } from "react-feather"
import SkillsUsed from "../SkillsUsed/SkillsUsed";

interface DialogProps {
  open: Boolean
  onClose: () => void
  project: any
}

export default function Dialog({ open = false, onClose, project }: DialogProps) {

  const [openTimed, setOpenTimed] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setOpenTimed(!!open);
    }, open ? 0 : 1000)
    const el = document.querySelector('body')
    if (el) {
      el.style.overflowY = open ? 'hidden' : 'auto'
    }
  }, [open])


  const modalVariant = {
    open: { height: '100vh', y: '0' },
    closed: { y: '100vh' }
  }

  return (
    <AnimatePresence>
      {
        open && (
          <motion.div
            role="alertdialog"
            className="fixed z-50 h-screen w-full top-0 left-0 bg-[#ffd300] overflow-y-auto"
            transition={{ duration: 0.65 }}
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '100vh' }}
            aria-modal="true"
          >
            <div className="w-full p-8 overflow-y-auto">
              <div className="flex justify-end">
                <button onClick={onClose}>
                  <X size={42} />
                </button>
              </div>
              {
                project?.isLock ? (
                  <div className="flex flex-col items-center gap-6 mt-8">
                    <p className="font-thin text-xl">
                      Insert the code to go on!
                    </p>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={5}
                      inputStyle={{
                        width: '3rem',
                        height: '3rem',
                        opacity: '50%',
                        borderRadius: '.55rem',
                        background: 'black',
                        color: 'white',
                      }}
                      renderSeparator={<span className="mx-1"></span>}
                      renderInput={
                        (props: any) => <input {...props} />
                      }
                    />
                    <p className="font-thin text-sm">
                      Don't you hava a code?
                      <a
                        href="mailto:fernando.risso@outlook.com.br"
                        className="font-medium underline cursor-pointer ml-1"
                        onClick={onClose}
                      >
                        Send me a message
                      </a>
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center flex-col mt-2 text-center gap-2">
                    <p className="text-4xl font-thin">
                      {project?.name}
                    </p>
                    <p className="text-xl font-thin max-w-lg">
                      {project?.text}
                    </p>
                    <img src={project?.img} className="max-w-xs" />
                    <SkillsUsed skills={project?.skills} />
                    <div className="text-lg font-medium text-justify max-w-lg">
                      {project?.fullText}
                    </div>
                  </div>
                )
              }
            </div>
          </motion.div>
        )
      }
    </AnimatePresence>
  )
}