import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import TestimonialCard from "../ui/TestimonialCard"

import { testimonials } from "../../data/testimonials"

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="
      section-padding
      relative
      overflow-hidden
    ">

      {/* Background Glow */}
      <div className="
        absolute
        right-[-200px]
        bottom-[-200px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-cyan-500/10
        blur-[160px]
      " />

      <Container className="relative z-10">

        {/* Header */}
        <div className="
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-10
          items-end
        ">

          <div className="max-w-3xl">

            <SectionTitle
              subtitle="CLIENT SUCCESS"
              title={
                <span className="text-white">
                  Trusted By Enterprises Worldwide
                </span>
              }
              // title="Trusted By Enterprises Worldwide"
            />

          </div>

          <p className="
            max-w-xl
            text-slate-400
            leading-relaxed
          ">
            We partner with forward-thinking organizations
            to build scalable systems, optimize operations,
            and drive digital transformation successfully.
          </p>

        </div>

        {/* Testimonials */}
        <div className="
          mt-20
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
        ">

          {
            testimonials.map((item, index) => (

              <TestimonialCard
                key={item.name}
                index={index}
                {...item}
              />

            ))
          }

        </div>

      </Container>

    </section>
  )
}

export default TestimonialsSection