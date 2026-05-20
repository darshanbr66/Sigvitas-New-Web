import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import TeamCard from "../ui/TeamCard"

import { team } from "../../data/team"

const LeadershipSection = () => {
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
              subtitle="LEADERSHIP & EXPERTISE"
              title="Enterprise Leaders Driving Innovation & Strategic Growth"
            />

          </div>

          <p className="
            max-w-xl
            text-slate-600
            leading-relaxed
          ">
            Our multidisciplinary leadership team combines
            research expertise, enterprise technology,
            innovation strategy, and digital transformation experience.
          </p>

        </div>

        {/* Grid */}
        <div className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
        ">

          {
            team.map((item, index) => (

              <TeamCard
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

export default LeadershipSection