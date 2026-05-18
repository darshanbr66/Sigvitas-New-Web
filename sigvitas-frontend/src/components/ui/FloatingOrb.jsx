import { motion } from "framer-motion"

const FloatingOrb = ({
  className = "",
  duration = 10,
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        rounded-full
        blur-[120px]
        ${className}
      `}
    />
  )
}

export default FloatingOrb