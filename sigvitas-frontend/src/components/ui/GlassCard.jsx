import { motion } from "framer-motion"

const GlassCard = ({
  children,
  className = "",
  hover = true,
  delay = 0,
}) => {

  return (
    <motion.div

      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.6,
        delay,
      }}

      viewport={{
        once: true,
      }}

      whileHover={
        hover
          ? {
              y: -10,
            }
          : {}
      }

      className={`
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-white/[0.03]

        backdrop-blur-xl

        transition-all
        duration-500

        hover:border-cyan-400/20

        ${className}
      `}
    >

      {/* Glow */}
      <div className="
        absolute
        inset-0
        opacity-0
        hover:opacity-100
        transition-opacity
        duration-500
        bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_50%)]
      " />

      {/* Content */}
      <div className="
        relative
        z-10
      ">

        {children}

      </div>

    </motion.div>
  )
}

export default GlassCard