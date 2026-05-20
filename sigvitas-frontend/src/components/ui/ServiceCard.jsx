import { motion } from "framer-motion"

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        hover:border-cyan-400/30
        transition-all
        duration-500
      "
    >

      {/* Glow Effect */}
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

      {/* Icon */}
      <div className="
        relative
        z-10
        w-16
        h-16
        rounded-2xl
        bg-gradient-to-br
        from-blue-500
        to-cyan-400
        flex
        items-center
        justify-center
        text-3xl
        shadow-lg
        shadow-cyan-500/20
      ">
        <Icon />
      </div>

      {/* Content */}
      <div className="relative z-10">

        <h3 className="
          mt-8
          text-2xl
          font-semibold
        ">
          {title}
        </h3>

        <p className="
          mt-5
          text-slate-400
          leading-relaxed
        ">
          {description}
        </p>

        {/* Learn More */}
        <button className="
          mt-8
          text-cyan-400
          font-medium
          hover:translate-x-2
          transition-transform
          duration-300
        ">
          Learn More →
        </button>

      </div>

    </motion.div>
  )
}

export default ServiceCard