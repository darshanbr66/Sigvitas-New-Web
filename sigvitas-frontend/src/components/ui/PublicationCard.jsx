import { motion } from "framer-motion"

const PublicationCard = ({
  type,
  title,
  description,
  year,
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
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        p-10
        hover:border-cyan-400/30
        transition-all
        duration-300
      "
    >

      {/* Top */}
      <div className="
        flex
        items-center
        justify-between
      ">

        <div className="
          inline-flex
          rounded-full
          border
          border-white/10
          px-4
          py-2
          text-sm
          text-slate-300
          bg-white/[0.04]
        ">
          {type}
        </div>

        <span className="
          text-slate-500
          text-sm
        ">
          {year}
        </span>

      </div>

      {/* Title */}
      <h3 className="
        mt-8
        text-3xl
        font-bold
        leading-snug
        text-white
      ">
        {title}
      </h3>

      {/* Description */}
      <p className="
        mt-6
        text-slate-400
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
        border-t
        border-white/10
        pt-6
      ">

        <span className="
          text-slate-300
          font-medium
        ">
          Download Report
        </span>

        <span className="
          text-cyan-400
          text-2xl
          group-hover:translate-x-2
          transition-transform
        ">
          →
        </span>

      </div>

    </motion.div>
  )
}

export default PublicationCard