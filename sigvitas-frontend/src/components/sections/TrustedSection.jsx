import { motion } from "framer-motion"

import Container from "../ui/Container"

const companies = [
  "GOOGLE",
  "MICROSOFT",
  "AMAZON",
  "ORACLE",
  "IBM",
]

const TrustedSection = () => {
  return (
    <section className="
      py-20
      border-t
      border-white/5
      border-b
      border-white/5
      bg-white
    ">

      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="
            text-slate-500
            uppercase
            tracking-[0.3em]
            text-sm
          ">
            Trusted By Innovative Enterprises
          </p>

        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            mt-14
            grid
            grid-cols-2
            md:grid-cols-5
            gap-10
            items-center
          "
        >

          {
            companies.map((company, index) => (

              <motion.div
                key={company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="
                  flex
                  items-center
                  justify-center
                "
              >

                <div className="
                  text-slate-400
                  hover:text-slate-900
                  transition-all
                  duration-300
                  text-xl
                  md:text-2xl
                  font-semibold
                  tracking-wide
                  cursor-pointer
                ">
                  {company}
                </div>

              </motion.div>

            ))
          }

        </motion.div>

      </Container>

    </section>
  )
}

export default TrustedSection