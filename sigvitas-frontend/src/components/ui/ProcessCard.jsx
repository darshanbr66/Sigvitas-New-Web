import { motion } from "framer-motion"

const ProcessCard = ({
  step,
  title,
  description,
  icon: Icon,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      className="
        relative
        flex
        flex-col
        items-center
        text-center
      "
    >

      {/* Line Connector */}
      {
        index !== 3 && (
          <div className="
            hidden
            lg:block
            absolute
            top-14
            left-[60%]
            w-full
            h-[2px]
            bg-gradient-to-r
            from-cyan-500/40
            to-transparent
          " />
        )
      }

      {/* Icon */}
      <div className="
        relative
        z-10
        w-28
        h-28
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        flex
        items-center
        justify-center
      ">

        {/* Glow */}
        <div className="
          absolute
          inset-0
          rounded-full
          bg-gradient-to-br
          from-cyan-500/20
          to-violet-500/20
          blur-xl
        " />

        <div className="
          relative
          z-10
          w-16
          h-16
          rounded-2xl
          bg-gradient-to-br
          from-cyan-500
          to-blue-600
          flex
          items-center
          justify-center
          text-3xl
          shadow-lg
          shadow-cyan-500/20
        ">
          <Icon />
        </div>

      </div>

      {/* Step Number */}
      <div className="
        mt-8
        text-cyan-400
        text-sm
        tracking-[0.3em]
        uppercase
      ">
        Step {step}
      </div>

      {/* Title */}
      <h3 className="
        mt-4
        text-2xl
        font-bold
      ">
        {title}
      </h3>

      {/* Description */}
      <p className="
        mt-5
        text-slate-400
        leading-relaxed
        max-w-sm
      ">
        {description}
      </p>

    </motion.div>
  )
}

export default ProcessCard