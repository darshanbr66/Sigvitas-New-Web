import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import FeatureCard from "../ui/FeatureCard"

import { features } from "../../data/features"

const WhyChooseSection = () => {
  return (
    <section className="
      section-padding
      relative
      overflow-hidden
    ">

      {/* Background Glow */}
      <div className="
        absolute
        left-[-200px]
        bottom-[-200px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-cyan-500/10
        blur-[140px]
      " />

      <Container className="relative z-10">

        {/* Heading */}
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
              subtitle="WHY CHOOSE US"
              title={
                <span className="text-white">
                  Modern Enterprise Solutions Designed For Growth
                </span>
              }
              // title="Modern Enterprise Solutions Designed For Growth"
            />

          </div>

          <p className="
            text-slate-400
            max-w-xl
            leading-relaxed
          ">
            We help enterprises innovate faster,
            scale confidently, and create impactful
            digital systems with future-ready technologies.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          auto-rows-[260px]
        ">

          {
            features.map((feature, index) => (

              <FeatureCard
                key={feature.title}
                index={index}
                large={index === 0}
                {...feature}
              />

            ))
          }

        </div>

      </Container>

    </section>
  )
}

export default WhyChooseSection