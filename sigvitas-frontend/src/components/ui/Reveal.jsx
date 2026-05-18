import { motion } from "framer-motion"

import { fadeUp } from "../../animations/motion"

const Reveal = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Reveal