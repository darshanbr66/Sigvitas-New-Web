import { motion } from "framer-motion"

import Container from "../components/ui/Container"
import CTASection from "../components/sections/CTASection"

import {
  HiOutlineChip,
  HiOutlineGlobe,
  HiOutlineDatabase,
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
} from "react-icons/hi"

const services = [
  {
    icon: <HiOutlineChip />,
    title: "Technology Consulting",
    description:
      "Enterprise-grade digital transformation and scalable technology strategy.",
  },

  {
    icon: <HiOutlineDatabase />,
    title: "Data Intelligence",
    description:
      "Advanced analytics, research insights, and enterprise data systems.",
  },

  {
    icon: <HiOutlineGlobe />,
    title: "Digital Transformation",
    description:
      "Modernizing business infrastructure with scalable digital ecosystems.",
  },

  {
    icon: <HiOutlineLightBulb />,
    title: "Research Innovation",
    description:
      "Research-driven innovation frameworks for enterprise acceleration.",
  },

  {
    icon: <HiOutlineChartBar />,
    title: "Business Strategy",
    description:
      "Strategic planning and operational optimization for modern enterprises.",
  },

  {
    icon: <HiOutlineShieldCheck />,
    title: "Enterprise Solutions",
    description:
      "Secure, scalable, and future-ready enterprise technology solutions.",
  },
]

const Services = () => {
  return (
    <main className="bg-[#020617] text-white">

      {/* Hero */}
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

              Enterprise Services

            </span>

            <h1 className="
              mt-8
              text-5xl
              md:text-7xl
              font-bold
              leading-[1.1]
              tracking-tight
            ">

              Enterprise Solutions
              Built For Innovation
              & Business Growth

            </h1>

            <p className="
              mt-8
              max-w-3xl
              text-lg
              md:text-xl
              leading-relaxed
              text-slate-400
            ">

              We help enterprises accelerate
              transformation through strategic
              consulting, research intelligence,
              scalable technology systems,
              and modern digital innovation.

            </p>

          </div>

        </Container>

      </section>

      {/* Services Grid */}
      <section className="
        py-24
      ">

        <Container>

          <div className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          ">

            {
              services.map((service, index) => (

                <motion.div
                  key={service.title}

                  initial={{
                    opacity: 0,
                    y: 40,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}

                  viewport={{
                    once: true,
                  }}

                  whileHover={{
                    y: -10,
                  }}

                  className="
                    group
                    p-8
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-cyan-400/30
                  "
                >

                  <div className="
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    text-3xl
                    bg-cyan-400/10
                    text-cyan-400
                  ">

                    {service.icon}

                  </div>

                  <h3 className="
                    mt-8
                    text-2xl
                    font-bold
                  ">

                    {service.title}

                  </h3>

                  <p className="
                    mt-5
                    text-slate-400
                    leading-relaxed
                  ">

                    {service.description}

                  </p>

                </motion.div>

              ))
            }

          </div>

        </Container>

      </section>

      {/* Enterprise Metrics */}
      <section className="
        py-24
      ">

        <Container>

          <div className="
            grid
            md:grid-cols-4
            gap-10
            text-center
          ">

            {
              [
                {
                  number: "500+",
                  label: "Projects Delivered",
                },

                {
                  number: "25+",
                  label: "Industry Domains",
                },

                {
                  number: "95%",
                  label: "Client Retention",
                },

                {
                  number: "10+",
                  label: "Research Capabilities",
                },
              ].map((item) => (

                <div key={item.label}>

                  <h3 className="
                    text-5xl
                    font-bold
                  ">

                    {item.number}

                  </h3>

                  <p className="
                    mt-4
                    uppercase
                    tracking-[0.2em]
                    text-sm
                    text-slate-500
                  ">

                    {item.label}

                  </p>

                </div>

              ))
            }

          </div>

        </Container>

      </section>

      {/* CTA */}
      <CTASection />

    </main>
  )
}

export default Services