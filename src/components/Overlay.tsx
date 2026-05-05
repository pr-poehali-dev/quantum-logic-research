import { motion } from "framer-motion"

export default function Overlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="font-serif text-3xl md:text-4xl font-bold tracking-wide"
          style={{ color: "#ff3d00", textShadow: "0 0 30px rgba(255,61,0,0.8), 0 0 60px rgba(255,61,0,0.4)" }}
        >
          ⚡ Молния Маккуин
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-sm md:text-base font-light tracking-widest uppercase"
          style={{ color: "#ffd600", textShadow: "0 0 20px rgba(255,214,0,0.6)" }}
        >
          Ka-chow! Фан-галерея
        </motion.p>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-white text-xs tracking-widest uppercase"
        >
          Перетаскивайте или двигайте мышью для навигации
        </motion.p>
      </div>
    </div>
  )
}