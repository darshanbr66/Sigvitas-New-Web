import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import CapabilityCard from "../ui/CapabilityCard"

import { capabilities } from "../../data/capabilities"

const CapabilitiesSection = () => {
  return (
    <section className="
      section-padding
      bg-[#0B1120]
      text-white
    ">

      <Container>

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
              subtitle="CAPABILITY MATRIX"
                title={
                  <span className="text-white">
                    Structured Expertise Across Enterprise Innovation Domains
                  </span>
                }
              // title="Structured Expertise Across Enterprise Innovation Domains"
            />

          </div>

          <p className="
            max-w-xl
            text-slate-400
            leading-relaxed
          ">
            Our multidisciplinary capabilities combine
            research intelligence, enterprise technology,
            innovation strategy, and advanced analytics.
          </p>

        </div>

        {/* Grid */}
        <div className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        ">

          {
            capabilities.map((item, index) => (

              <CapabilityCard
                key={item.category}
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

export default CapabilitiesSection