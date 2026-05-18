import { motion } from "framer-motion"

import Container from "../ui/Container"
import Button from "../ui/Button"

const CTASection = () => {
  return (
    <section className="
      section-padding
      relative
      overflow-hidden
    ">

      {/* Massive Background Glow */}
      <div className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-cyan-500/10
        blur-[200px]
      " />

      <Container className="relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            px-8
            py-20
            md:px-16
            text-center
          "
        >

          {/* Inner Glow */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-500/10
            via-transparent
            to-violet-500/10
          " />

          {/* Floating Blur */}
          <div className="
            absolute
            top-[-100px]
            right-[-100px]
            w-[300px]
            h-[300px]
            rounded-full
            bg-cyan-500/20
            blur-[120px]
          " />

          <div className="relative z-10">

            {/* Small Label */}
            <p className="
              uppercase
              tracking-[0.3em]
              text-cyan-400
              text-sm
            ">
              LET’S BUILD THE FUTURE
            </p>

            {/* Heading */}
            <h2 className="
              mt-8
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
              max-w-5xl
              mx-auto
            ">

              Transform Your Business
              With Modern Enterprise
              Solutions

            </h2>

            {/* Description */}
            <p className="
              mt-8
              max-w-3xl
              mx-auto
              text-slate-400
              text-lg
              leading-relaxed
            ">
              Partner with Sigvitas to build scalable
              digital systems, accelerate innovation,
              and create future-ready enterprise experiences.
            </p>

            {/* Buttons */}
            <div className="
              mt-12
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-6
            ">

              <Button>
                Start Your Project
              </Button>

              <button className="
                px-6
                py-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                hover:bg-white/[0.08]
                transition-all
                duration-300
              ">
                Schedule Consultation
              </button>

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  )
}

export default CTASection