import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"

export function SharkFinDivider({ large = false }: { large?: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const prefersReducedMotion = useReducedMotion()

  const shouldAnimate = isInView && !prefersReducedMotion
  const duration = 2.0

  const popupBaseDelay = duration + 0.8

  return (
    <div className="relative z-20 w-full" aria-hidden="true">
      <div
        ref={ref}
        className={`pointer-events-none absolute bottom-0 left-0 right-0 translate-y-[28%] ${
          large ? "overflow-visible" : "overflow-hidden"
        } ${large ? "h-[100px] sm:h-[140px] lg:h-[200px]" : "h-[80px] sm:h-[100px] lg:h-[140px]"}`}
      >
        <div className="absolute bottom-[28%] left-0 right-0 h-px">
          <div className="absolute inset-0 bg-white/[0.06]" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/90 to-transparent shadow-[0_0_15px_2px_rgba(59,130,246,0.5)]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={shouldAnimate ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: duration * 0.8, ease: "easeOut", delay: 0.1 }}
            style={{ transformOrigin: "center" }}
          />
        </div>

        <motion.div
          className="absolute bottom-[28%] right-0"
          initial={{ x: "10%", opacity: 0 }}
          animate={shouldAnimate ? { x: "calc(-50vw + 20px)", opacity: 1 } : {}}
          transition={{
            x: { duration, ease: [0.25, 0.1, 0.25, 1] },
            opacity: { duration: 0.4, ease: "easeOut" },
          }}
        >
          <motion.div
            className="absolute -bottom-1 left-1/2 h-3 w-8 -translate-x-1/2 rounded-full border border-blue-400/15"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              shouldAnimate
                ? {
                    opacity: [0, 0.4, 0],
                    scale: [0.6, 1.4, 1.8],
                  }
                : {}
            }
            transition={{ duration: 1.8, delay: duration - 0.3, ease: "easeOut" }}
          />

          <motion.div
            className="absolute -bottom-1 left-1/2 h-2.5 w-6 -translate-x-1/2 rounded-full border border-blue-400/10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              shouldAnimate
                ? {
                    opacity: [0, 0.3, 0],
                    scale: [0.5, 1.3, 1.6],
                  }
                : {}
            }
            transition={{ duration: 1.5, delay: duration, ease: "easeOut" }}
          />

          {[
            { x: -6, y: -2, size: 1.5, delay: duration - 0.2 },
            { x: 8, y: -4, size: 1, delay: duration + 0.1 },
            { x: -10, y: -1, size: 1, delay: duration + 0.3 },
          ].map((particle, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 left-1/2 rounded-full bg-blue-400/40"
              style={{
                width: particle.size,
                height: particle.size,
                marginLeft: particle.x,
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={
                shouldAnimate
                  ? {
                      opacity: [0, 0.6, 0],
                      y: [0, particle.y - 8, particle.y - 16],
                    }
                  : {}
              }
              transition={{
                duration: 1.2,
                delay: particle.delay,
                ease: "easeOut",
              }}
            />
          ))}

          <motion.div
            animate={
              shouldAnimate
                ? {
                    y: [0, -1.5, 0, -1, 0],
                    rotate: [0, -0.5, 0, 0.3, 0],
                  }
                : {}
            }
            transition={{
              duration: 3,
              delay: duration + 0.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="relative"
          >
            <img
              src="http://sharkscompany.online/wp-content/uploads/2026/05/SIMBOLO-SHARKS-COMPANY-3D-e1777920291363.png"
              alt="Sharks Fin"
              className={`${
                large ? "h-[64px] sm:h-[80px] lg:h-[120px]" : "h-[48px] sm:h-[64px] lg:h-[80px]"
              } w-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]`}
            />
          </motion.div>


        </motion.div>
      </div>
    </div>
  )
}
