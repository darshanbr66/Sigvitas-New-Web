import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import CaseStudyCard from "../ui/CaseStudyCard"

import { caseStudies } from "../../data/caseStudies"

const CaseStudiesSection = () => {
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
              subtitle="CASE STUDIES"
              title={
                <span className="text-white">
                  Delivering Measurable Impact Across Industries
                </span>
              }
              // title="Delivering Measurable Impact Across Industries"
            />

          </div>

          <p className="
            max-w-xl
            text-slate-400
            leading-relaxed
          ">
            Explore how Sigvitas helps enterprises
            accelerate innovation, optimize operations,
            and build scalable technology ecosystems.
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
            caseStudies.map((item, index) => (

              <CaseStudyCard
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

export default CaseStudiesSection