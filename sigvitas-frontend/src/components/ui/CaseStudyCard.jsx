import { motion } from "framer-motion"

const CaseStudyCard = ({
  industry,
  title,
  description,
  impact,
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
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-[#111827]
        p-10
        hover:border-cyan-400/30
        transition-all
        duration-300
      "
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
        from-cyan-500/5
        to-violet-500/5
      " />

      <div className="relative z-10">

        {/* Industry */}
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
          {industry}
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

        {/* Impact */}
        <div className="
          mt-10
          flex
          items-center
          justify-between
          border-t
          border-white/10
          pt-6
        ">

          <div>

            <p className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-slate-500
            ">
              Impact
            </p>

            <h4 className="
              mt-2
              text-2xl
              font-bold
              text-cyan-400
            ">
              {impact}
            </h4>

          </div>

          <button className="
            text-white
            hover:translate-x-2
            transition-transform
            duration-300
          ">
            View Case →
          </button>

        </div>

      </div>

    </motion.div>
  )
}

export default CaseStudyCard