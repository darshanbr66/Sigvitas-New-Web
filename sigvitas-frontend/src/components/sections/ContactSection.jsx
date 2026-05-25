import { motion } from "framer-motion"

import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"

const inquiryOptions = [
  "Innovation Strategy",
  "Enterprise Technology",
  "Research Intelligence",
  "AI & Automation",
  "Digital Transformation",
  "Strategic Consultation",
]

const ContactSection = () => {
  return (
    <section className="
      section-padding
      bg-[#f8fafc]
      text-slate-900
    ">

      <Container>

        <div className="
          grid
          lg:grid-cols-2
          gap-16
        ">

          {/* LEFT SIDE */}
          <div>

            <SectionTitle
              subtitle="ENTERPRISE CONSULTATION"
              title="Let’s Discuss Your Strategic Innovation Goals"
            />

            <p className="
              mt-8
              max-w-2xl
              text-slate-600
              text-lg
              leading-relaxed
            ">
              Connect with our enterprise strategy and
              technology specialists to explore research-driven
              innovation, digital transformation, and scalable
              enterprise solutions.
            </p>

            {/* Consultation Areas */}
            <div className="
              mt-12
              flex
              flex-wrap
              gap-4
            ">

              {
                inquiryOptions.map((item) => (

                  <div
                    key={item}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-slate-700
                    "
                  >
                    {item}
                  </div>

                ))
              }

            </div>

            {/* Contact Details */}
            <div className="
              mt-16
              grid
              sm:grid-cols-2
              gap-8
            ">

              <div>

                <p className="
                  uppercase
                  tracking-[0.2em]
                  text-sm
                  text-slate-500
                ">
                  Email
                </p>

                <h4 className="
                  mt-3
                  text-xl
                  font-semibold
                ">
                  contact@sigvitas.com
                </h4>

              </div>

              <div>

                <p className="
                  uppercase
                  tracking-[0.2em]
                  text-sm
                  text-slate-500
                ">
                  Location
                </p>

                <h4 className="
                  mt-3
                  text-xl
                  font-semibold
                ">
                  Mysore, Karnataka
                </h4>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-10
            "
          >

            {/* Form */}
            <form className="
              flex
              flex-col
              gap-6
            ">

              {/* Name */}
              <div>

                <label className="
                  text-sm
                  font-medium
                  text-slate-600
                ">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="
                    mt-3
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-5
                    py-4
                    outline-none
                    focus:border-cyan-500
                    transition
                  "
                />

              </div>

              {/* Email */}
              <div>

                <label className="
                  text-sm
                  font-medium
                  text-slate-600
                ">
                  Enterprise Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    mt-3
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-5
                    py-4
                    outline-none
                    focus:border-cyan-500
                    transition
                  "
                />

              </div>

              {/* Company */}
              <div>

                <label className="
                  text-sm
                  font-medium
                  text-slate-600
                ">
                  Organization
                </label>

                <input
                  type="text"
                  placeholder="Enter organization name"
                  className="
                    mt-3
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-5
                    py-4
                    outline-none
                    focus:border-cyan-500
                    transition
                  "
                />

              </div>

              {/* Message */}
              <div>

                <label className="
                  text-sm
                  font-medium
                  text-slate-600
                ">
                  Strategic Inquiry
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your enterprise goals, challenges, or innovation requirements..."
                  className="
                    mt-3
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-5
                    py-4
                    outline-none
                    resize-none
                    focus:border-cyan-500
                    transition
                  "
                />

              </div>

              {/* Button */}
              <button
                className="
                  mt-4
                  rounded-2xl
                  bg-cyan-500
                  px-6
                  py-4
                  text-white
                  font-medium
                  hover:bg-cyan-400
                  transition-all
                  duration-300
                "
              >
                Request Strategic Consultation
              </button>

            </form>

          </motion.div>

        </div>

      </Container>

    </section>
  )
}

export default ContactSection