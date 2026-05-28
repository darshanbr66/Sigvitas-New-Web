import { motion } from "framer-motion"

const Button = ({
  children,
  className = "",
  variant = "primary",
}) => {

  const variants = {

    primary: `
      bg-cyan-400
      text-black
      hover:bg-cyan-300
    `,

    secondary: `
      border
      border-white/10
      bg-white/[0.04]
      text-white
      hover:bg-white/[0.08]
    `,
  }

  return (
    <motion.button

      whileHover={{
        scale: 1.03,
      }}

      whileTap={{
        scale: 0.98,
      }}

      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}

      className={`
        group
        relative
        overflow-hidden

        inline-flex
        items-center
        justify-center
        gap-3

        px-7
        py-4

        rounded-2xl

        font-semibold
        tracking-wide

        transition-all
        duration-500

        backdrop-blur-xl

        ${variants[variant]}

        ${className}
      `}
    >

      {/* Glow */}
      <span className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]
      " />

      {/* Shine */}
      <span className="
        absolute
        top-0
        left-[-120%]
        w-full
        h-full
        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent
        skew-x-12
        group-hover:left-[120%]
        transition-all
        duration-1000
      " />

      {/* Content */}
      <span className="
        relative
        z-10
      ">

        {children}

      </span>

    </motion.button>
  )
}

export default Button