import { motion } from "framer-motion"

import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"

const stats = [
  {
    number: "10+",
    label: "Projects Delivered",
  },
  {
    number: "5+",
    label: "Technology Domains",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    number: "24/7",
    label: "Technical Support",
  },
]

const AboutSection = () => {
  return (
    <section id="about" className="
      section-padding
      relative
      overflow-hidden
    ">

      {/* Background Glow */}
      <div className="
        absolute
        right-[-200px]
        top-[100px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-violet-500/10
        blur-[140px]
      " />

      <Container>

        <div className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
        ">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <SectionTitle
              subtitle="ABOUT SIGVITAS"
              title="Transforming Enterprises Through Modern Technology"
            />

            <p className="
              mt-8
              text-slate-400
              text-lg
              leading-relaxed
            ">
              Sigvitas empowers organizations with modern
              enterprise solutions, innovative consulting,
              and scalable digital transformation strategies.
              We combine technology, creativity, and business
              expertise to build future-ready systems.
            </p>

            <p className="
              mt-6
              text-slate-400
              text-lg
              leading-relaxed
            ">
              Our mission is to help enterprises innovate
              faster, optimize operations, and create
              impactful digital experiences with confidence.
            </p>

            {/* Features */}
            <div className="
              mt-10
              grid
              sm:grid-cols-2
              gap-6
            ">

              {
                [
                  "Enterprise Architecture",
                  "Cloud-Native Solutions",
                  "AI & Automation",
                  "Innovation Strategy",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <div className="
                      w-3
                      h-3
                      rounded-full
                      bg-cyan-400
                    " />

                    <span className="text-slate-300">
                      {item}
                    </span>

                  </div>

                ))
              }

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Main Card */}
            <div className="
              relative
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-10
              overflow-hidden
            ">

              {/* Glow */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-br
                from-cyan-500/10
                to-violet-500/10
              " />

              <div className="relative z-10">

                <h3 className="
                  text-3xl
                  font-bold
                  leading-tight
                ">
                  Delivering scalable solutions for modern enterprises.
                </h3>

                <p className="
                  mt-6
                  text-slate-400
                  leading-relaxed
                ">
                  We focus on building future-proof systems
                  with innovation, performance, and user
                  experience at the core.
                </p>

                {/* Stats Grid */}
                <div className="
                  mt-12
                  grid
                  grid-cols-2
                  gap-6
                ">

                  {
                    stats.map((item) => (

                      <div
                        key={item.label}
                        className="
                          rounded-2xl
                          border
                          border-white/10
                          bg-black/20
                          p-6
                        "
                      >

                        <h4 className="
                          text-4xl
                          font-bold
                          gradient-text
                        ">
                          {item.number}
                        </h4>

                        <p className="
                          mt-3
                          text-slate-400
                        ">
                          {item.label}
                        </p>

                      </div>

                    ))
                  }

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  )
}

export default AboutSection