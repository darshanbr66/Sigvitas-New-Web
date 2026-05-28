import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"

const ParallaxSection = ({
  children,
  offset = 80,
  className = "",
}) => {

  const { scrollY } = useScroll()

  const y = useTransform(
    scrollY,
    [0, 2000],
    [0, offset]
  )

  return (
    <motion.div
      style={{ y }}
      className={className}
    >

      {children}

    </motion.div>
  )
}

export default ParallaxSection