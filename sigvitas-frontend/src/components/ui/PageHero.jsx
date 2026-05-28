import { motion } from "framer-motion"

import Container from "./Container"

const PageHero = ({
  badge,
  title,
  description,
}) => {

  return (
    <section className="
      relative
      overflow-hidden
      pt-40
      pb-28
    ">

      {/* Glow */}
      <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_40%)]
      " />

      <Container>

        <div className="
          relative
          z-10
          max-w-4xl
        ">

          {/* Badge */}
          {
            badge && (

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.5,
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
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
              delay: 0.1,
            }}

            className="
              mt-8
              text-5xl
              md:text-7xl
              font-bold
              leading-[1.1]
              tracking-tight
            "
          >

            {title}

          </motion.h1>

          {/* Description */}
          {
            description && (

              <motion.p
                initial={{
                  opacity: 0,
                  y: 40,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}

                className="
                  mt-8
                  max-w-3xl
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

      </Container>

    </section>
  )
}

export default PageHero