import { motion } from "framer-motion"

import Container from "../components/ui/Container"
import CTASection from "../components/sections/CTASection"

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi"

const contactInfo = [
  {
    icon: <HiOutlineMail />,
    title: "Email",
    value: "contact@sigvitas.com",
  },

  {
    icon: <HiOutlinePhone />,
    title: "Phone",
    value: "+91 9008854199",
  },

  {
    icon: <HiOutlineLocationMarker />,
    title: "Location",
    value: "Mysore, Karnataka, India",
  },
]

const Contact = () => {
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

              Contact Sigvitas

            </span>

            <h1 className="
              mt-8
              text-5xl
              md:text-7xl
              font-bold
              leading-[1.1]
              tracking-tight
            ">

              Let’s Build The
              Future Together

            </h1>

            <p className="
              mt-8
              max-w-3xl
              text-lg
              md:text-xl
              leading-relaxed
              text-slate-400
            ">

              Connect with our team to discuss
              enterprise transformation,
              digital innovation,
              research intelligence,
              and scalable technology solutions.

            </p>

          </div>

        </Container>

      </section>

      {/* Contact Cards */}
      <section className="
        pb-24
      ">

        <Container>

          <div className="
            grid
            md:grid-cols-3
            gap-8
          ">

            {
              contactInfo.map((item, index) => (

                <motion.div
                  key={item.title}

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
                    p-8
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
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

                    {item.icon}

                  </div>

                  <h3 className="
                    mt-8
                    text-2xl
                    font-bold
                  ">

                    {item.title}

                  </h3>

                  <p className="
                    mt-4
                    text-slate-400
                  ">

                    {item.value}

                  </p>

                </motion.div>

              ))
            }

          </div>

        </Container>

      </section>

      {/* Contact Form */}
      <section className="
        pb-28
      ">

        <Container>

          <div className="
            max-w-4xl
            mx-auto
            p-10
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
          ">

            <h2 className="
              text-4xl
              font-bold
            ">

              Schedule A Consultation

            </h2>

            <p className="
              mt-5
              text-slate-400
              leading-relaxed
            ">

              Our team will connect with you
              to understand your business goals
              and explore strategic opportunities.

            </p>

            <form className="
              mt-10
              grid
              md:grid-cols-2
              gap-6
            ">

              <input
                type="text"
                placeholder="Full Name"
                className="
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  outline-none
                "
              />

              <input
                type="text"
                placeholder="Company Name"
                className="
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  outline-none
                "
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  outline-none
                "
              />

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="
                  md:col-span-2
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  outline-none
                  resize-none
                "
              />

              <button
                className="
                  md:col-span-2
                  py-4
                  rounded-2xl
                  bg-cyan-400
                  text-black
                  font-semibold
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >

                Send Inquiry

              </button>

            </form>

          </div>

        </Container>

      </section>

      {/* CTA */}
      <CTASection />

    </main>
  )
}

export default Contact