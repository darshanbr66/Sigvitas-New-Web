import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import InsightCard from "../ui/InsightCard"

import { insights } from "../../data/insights"

const InsightsSection = () => {
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
              subtitle="INSIGHTS & RESEARCH"
              title="Research-Driven Perspectives For Modern Enterprises"
            />

          </div>

          <p className="
            max-w-xl
            text-slate-600
            leading-relaxed
          ">
            Explore enterprise insights, innovation
            strategies, and research intelligence shaping
            the future of modern industries.
          </p>

        </div>

        {/* Cards */}
        <div className="
          mt-20
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-8
        ">

          {
            insights.map((item, index) => (

              <InsightCard
                key={item.title}
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

export default InsightsSection