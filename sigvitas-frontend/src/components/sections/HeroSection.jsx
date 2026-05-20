import { motion } from "framer-motion"

import Container from "../ui/Container"
import Button from "../ui/Button"
import BackgroundGrid from "../ui/BackgroundGrid"
import FloatingOrb from "../ui/FloatingOrb"

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
      "
    >

      {/* Background Grid */}
      <BackgroundGrid />

      {/* Spotlight Effect */}
      <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.15),transparent_40%)]
      " />

      {/* Floating Orbs */}
      <FloatingOrb
        duration={12}
        className="
          top-[-150px]
          right-[-100px]
          w-[400px]
          h-[400px]
          bg-cyan-500/10
        "
      />

      <FloatingOrb
        duration={16}
        className="
          bottom-[-200px]
          left-[-100px]
          w-[500px]
          h-[500px]
          bg-violet-500/10
        "
      />

      <FloatingOrb
        duration={20}
        className="
          top-[30%]
          left-[40%]
          w-[300px]
          h-[300px]
          bg-blue-500/10
        "
      />

      <Container>

        <div className="
          relative
          z-10
          max-w-5xl
        ">

          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-3
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                text-sm
                text-slate-300
                backdrop-blur-xl
                shadow-lg
                shadow-cyan-500/5
              "
            >

              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-cyan-400
                "
              />

              Enterprise Technology & Consulting

            </motion.div>

          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              mt-8
              text-4xl
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
              font-bold
              leading-[1.1]
              tracking-tight
            "
          >

            Driving Innovation Through

            <span
              className="
                gradient-text
                bg-[length:200%_200%]
                animate-[gradient_6s_ease_infinite]
              "
            >
              {" "}Technology, Research &{" "}
            </span>

            Enterprise Intelligence

          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="
              mt-8
              text-lg
              md:text-xl
              text-slate-400
              leading-relaxed
              max-w-3xl
            "
          >
            Sigvitas helps enterprises accelerate innovation,
            optimize operations, and build future-ready
            digital systems through strategic consulting,
            technology solutions, and research-driven insights.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="
              mt-10
              flex
              items-start
              sm:items-center
              gap-5
            "
          >

            <Button>
              Explore Services
            </Button>

            <button
              className="
                px-6
                py-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                duration-300
              "
            >
              View Projects
            </button>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="
              mt-16
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-8
              md:gap-10
            
            "
          >

            {
              [
                {
                  number: "500+",
                  label: "Innovation Projects",
                },

                {
                  number: "25+",
                  label: "Industry Domains",
                },

                {
                  number: "95%",
                  label: "Enterprise Retention",
                },

                {
                  number: "10+",
                  label: "Research Capabilities",
                },
              ].map((item) => (

                <div key={item.label}>

                  <h3
                    className="
                      text-3xl
                      md:text-4xl
                      font-bold
                    "
                  >
                    {item.number}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-slate-400
                    "
                  >
                    {item.label}
                  </p>

                </div>

              ))
            }

          </motion.div>

        </div>

      </Container>

    </section>
  )
}

export default HeroSection