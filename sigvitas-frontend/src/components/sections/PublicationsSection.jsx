import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import PublicationCard from "../ui/PublicationCard"

import { publications } from "../../data/publications"

const PublicationsSection = () => {
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
              subtitle="PUBLICATIONS & REPORTS"
              title={
                <span className="text-white">
                  Research Intelligence & Enterprise Publications
                </span>
              }
              // title="Research Intelligence & Enterprise Publications"
            />

          </div>

          <p className="
            max-w-xl
            text-slate-400
            leading-relaxed
          ">
            Access research reports, industry intelligence,
            and strategic publications designed to help
            enterprises navigate innovation and transformation.
          </p>

        </div>

        {/* Grid */}
        <div className="
          mt-20
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-8
        ">

          {
            publications.map((item, index) => (

              <PublicationCard
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

export default PublicationsSection