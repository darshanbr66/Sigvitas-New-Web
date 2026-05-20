import { motion } from "framer-motion"

import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"

const industries = [
  "Healthcare & Life Sciences",
  "Artificial Intelligence",
  "Manufacturing",
  "Energy & Sustainability",
  "Enterprise Software",
  "Research & Innovation",
]

const IndustriesSection = () => {
  return (
    <section className="
      section-padding
      bg-white
      text-slate-900
    ">

      <Container>

        <SectionTitle
          subtitle="INDUSTRY EXPERTISE"
          title="Delivering Innovation Across Diverse Industry Domains"
        />

        <p className="
          mt-6
          max-w-3xl
          text-slate-600
          text-lg
          leading-relaxed
        ">
          We help organizations across multiple industries
          solve complex business challenges through
          research-driven strategies and modern technology solutions.
        </p>

        <div className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        ">

          {
            industries.map((item, index) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-8
                  hover:border-cyan-400
                  hover:bg-white
                  transition-all
                  duration-300
                "
              >

                <h3 className="
                  text-2xl
                  font-semibold
                  leading-snug
                ">
                  {item}
                </h3>

                <div className="
                  mt-8
                  flex
                  items-center
                  justify-between
                ">

                  <span className="
                    text-slate-500
                  ">
                    Explore Domain
                  </span>

                  <span className="
                    text-cyan-500
                    text-2xl
                    group-hover:translate-x-2
                    transition-transform
                  ">
                    →
                  </span>

                </div>

              </motion.div>

            ))
          }

        </div>

      </Container>

    </section>
  )
}

export default IndustriesSection