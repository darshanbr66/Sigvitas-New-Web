import { motion } from "framer-motion"

const MetricCard = ({
  number,
  suffix,
  label,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="
        group
        rounded-[32px]
        border
        border-slate-200
        bg-white
        p-10
        hover:border-cyan-400
        transition-all
        duration-300
      "
    >

      {/* Number */}
      <div
        className="
          text-5xl
          md:text-6xl
          font-bold
          tracking-tight
          text-slate-900
        "
      >
        {number.toLocaleString()}
        {suffix}
      </div>

      {/* Divider */}
      <div
        className="
          mt-8
          h-[1px]
          w-full
          bg-slate-200
        "
      />

      {/* Label */}
      <p
        className="
          mt-6
          text-slate-600
          text-lg
          leading-relaxed
        "
      >
        {label}
      </p>

    </motion.div>
  )
}

export default MetricCard