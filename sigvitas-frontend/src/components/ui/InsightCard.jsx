import { motion } from "framer-motion"

const InsightCard = ({
  category,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
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
        p-8
        hover:border-cyan-400
        transition-all
        duration-300
      "
    >

      {/* Category */}
      <div className="
        inline-flex
        items-center
        rounded-full
        bg-slate-100
        px-4
        py-2
        text-sm
        font-medium
        text-slate-600
      ">
        {category}
      </div>

      {/* Title */}
      <h3 className="
        mt-8
        text-3xl
        font-bold
        leading-snug
        text-slate-900
        group-hover:text-cyan-600
        transition-colors
      ">
        {title}
      </h3>

      {/* Description */}
      <p className="
        mt-6
        text-slate-600
        leading-relaxed
        text-lg
      ">
        {description}
      </p>

      {/* Footer */}
      <div className="
        mt-10
        flex
        items-center
        justify-between
      ">

        <span className="
          text-slate-500
          font-medium
        ">
          Read Insight
        </span>

        <span className="
          text-2xl
          text-cyan-500
          group-hover:translate-x-2
          transition-transform
        ">
          →
        </span>

      </div>

    </motion.div>
  )
}

export default InsightCard