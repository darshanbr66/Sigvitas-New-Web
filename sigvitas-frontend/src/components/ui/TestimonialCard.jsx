import { motion } from "framer-motion"
import { HiStar } from "react-icons/hi"

const TestimonialCard = ({
  name,
  role,
  company,
  review,
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
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-8
        hover:border-cyan-400/30
        transition-all
        duration-500
      "
    >

      {/* Glow */}
      <div className="
        absolute
        inset-0
        opacity-0
        hover:opacity-100
        transition-opacity
        duration-500
        bg-gradient-to-br
        from-cyan-500/10
        to-violet-500/10
      " />

      <div className="relative z-10">

        {/* Stars */}
        <div className="
          flex
          items-center
          gap-1
          text-cyan-400
        ">
          {
            Array.from({ length: 5 }).map((_, i) => (
              <HiStar key={i} />
            ))
          }
        </div>

        {/* Review */}
        <p className="
          mt-8
          text-slate-300
          leading-relaxed
          text-lg
        ">
          “{review}”
        </p>

        {/* User */}
        <div className="
          mt-10
          flex
          items-center
          gap-4
        ">

          {/* Avatar */}
          <div className="
            w-14
            h-14
            rounded-full
            bg-gradient-to-br
            from-cyan-500
            to-blue-600
            flex
            items-center
            justify-center
            font-bold
            text-lg
          ">
            {name.charAt(0)}
          </div>

          {/* Info */}
          <div>

            <h4 className="
              font-semibold
              text-lg
            ">
              {name}
            </h4>

            <p className="
              text-slate-400
              text-sm
            ">
              {role} • {company}
            </p>

          </div>

        </div>

      </div>

    </motion.div>
  )
}

export default TestimonialCard