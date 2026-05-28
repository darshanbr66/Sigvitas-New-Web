import { motion } from "framer-motion"

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  y = 40,
  once = true,
}) => {

  return (
    <motion.div

      initial={{
        opacity: 0,
        y,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration,
        delay,
      }}

      viewport={{
        once,
      }}

      className={className}
    >

      {children}

    </motion.div>
  )
}

export default AnimatedSection