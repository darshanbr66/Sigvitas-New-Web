import { motion } from "framer-motion"

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  index,
  large = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-8
        hover:border-cyan-400/30
        transition-all
        duration-500
        ${large ? "md:col-span-2 md:row-span-2" : ""}
      `}
    >

      {/* Glow */}
      <div className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
        bg-gradient-to-br
        from-cyan-500/10
        to-violet-500/10
      " />

      {/* Content */}
      <div className="relative z-10">

        {/* Icon */}
        <div className="
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

        {/* Title */}
        <h3 className="
          mt-8
          text-2xl
          font-bold
          leading-tight
        ">
          {title}
        </h3>

        {/* Description */}
        <p className="
          mt-5
          text-slate-400
          leading-relaxed
        ">
          {description}
        </p>

      </div>

    </motion.div>
  )
}

export default FeatureCard