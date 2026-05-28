import { motion } from "framer-motion"

const SectionHeading = ({
  badge,
  title,
  description,
  center = false,
}) => {

  return (
    <div
      className={`
        max-w-4xl

        ${
          center
            ? "mx-auto text-center"
            : ""
        }
      `}
    >

      {/* Badge */}
      {
        badge && (

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.5,
            }}

            viewport={{
              once: true,
            }}

            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              text-sm
              text-slate-300
              backdrop-blur-xl
            "
          >

            <div className="
              w-2
              h-2
              rounded-full
              bg-cyan-400
            " />

            {badge}

          </motion.div>

        )
      }

      {/* Title */}
      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.7,
          delay: 0.1,
        }}

        viewport={{
          once: true,
        }}

        className="
          mt-6
          text-4xl
          md:text-5xl
          xl:text-6xl
          font-bold
          leading-[1.1]
          tracking-tight
        "
      >

        {title}

      </motion.h2>

      {/* Description */}
      {
        description && (

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
              delay: 0.2,
            }}

            viewport={{
              once: true,
            }}

            className="
              mt-6
              text-lg
              md:text-xl
              leading-relaxed
              text-slate-400
            "
          >

            {description}

          </motion.p>

        )
      }

    </div>
  )
}

export default SectionHeading