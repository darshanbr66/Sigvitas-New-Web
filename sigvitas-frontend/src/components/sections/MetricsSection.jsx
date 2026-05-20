import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import MetricCard from "../ui/MetricCard"

import { metrics } from "../../data/metrics"

const MetricsSection = () => {
  return (
    <section className="
      section-padding
      bg-[#f8fafc]
      text-slate-900
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
              subtitle="ENTERPRISE IMPACT"
              title="Driving Measurable Innovation & Strategic Growth"
            />

          </div>

          <p className="
            max-w-xl
            text-slate-600
            leading-relaxed
          ">
            Our enterprise-focused approach combines
            technology, research intelligence, and
            innovation strategy to deliver measurable impact.
          </p>

        </div>

        {/* Metrics Grid */}
        <div className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
        ">

          {
            metrics.map((item, index) => (

              <MetricCard
                key={item.label}
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

export default MetricsSection