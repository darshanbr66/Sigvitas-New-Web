import { motion } from "framer-motion"

import Container from "../components/ui/Container"
import CTASection from "../components/sections/CTASection"

const About = () => {
  return (
    <main className="bg-[#020617] text-white">

      {/* Hero Section */}
      <section className="
        relative
        overflow-hidden
        pt-40
        pb-28
      ">

        {/* Background Glow */}
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

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
              }}
            >

              <span className="
                inline-block
                px-5
                py-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                text-sm
                text-slate-300
              ">

                About Sigvitas

              </span>

            </motion.div>

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
                delay: 0.2,
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

              Building Enterprise
              Innovation Through
              Technology &
              Research Intelligence

            </motion.h1>

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
                delay: 0.4,
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

              Sigvitas empowers enterprises with
              future-ready digital systems,
              research-driven innovation,
              and scalable technology solutions
              designed for modern business transformation.

            </motion.p>

          </div>

        </Container>

      </section>

      {/* Company Story */}
      <section className="
        py-28
      ">

        <Container>

          <div className="
            grid
            lg:grid-cols-2
            gap-20
            items-center
          ">

            {/* Left Content */}
            <div>

              <p className="
                text-cyan-400
                uppercase
                tracking-[0.2em]
                text-sm
              ">
                Our Story
              </p>

              <h2 className="
                mt-5
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
              ">

                A Modern Technology &
                Research Company Built
                For Enterprise Growth

              </h2>

              <p className="
                mt-8
                text-slate-400
                leading-relaxed
                text-lg
              ">

                We combine enterprise consulting,
                research intelligence,
                digital transformation,
                and scalable technology systems
                to help organizations accelerate
                innovation and operational excellence.

              </p>

              <p className="
                mt-6
                text-slate-400
                leading-relaxed
                text-lg
              ">

                Our multidisciplinary approach
                enables enterprises to solve
                complex business challenges
                through strategic thinking,
                modern engineering,
                and data-driven decision making.

              </p>

            </div>

            {/* Right Visual */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}

              whileInView={{
                opacity: 1,
                scale: 1,
              }}

              transition={{
                duration: 0.8,
              }}

              viewport={{
                once: true,
              }}

              className="
                relative
              "
            >

              <div className="
                rounded-3xl
                overflow-hidden
                border
                border-white/10
              ">

                <img
                  src={`${import.meta.env.BASE_URL}images/about-team.png`}
                  alt="Sigvitas Team"
                  className="
                    w-full
                    h-[500px]
                    object-cover
                  "
                />

              </div>

              {/* Floating Card */}
              <div className="
                absolute
                -bottom-10
                -left-10
                p-6
                rounded-2xl
                border
                border-white/10
                bg-[#0B1120]
                backdrop-blur-xl
                shadow-2xl
              ">

                <h3 className="
                  text-4xl
                  font-bold
                ">
                  500+
                </h3>

                <p className="
                  mt-2
                  text-slate-400
                ">
                  Enterprise Innovation Projects
                </p>

              </div>

            </motion.div>

          </div>

        </Container>

      </section>

      {/* CTA */}
      <CTASection />

    </main>
  )
}

export default About