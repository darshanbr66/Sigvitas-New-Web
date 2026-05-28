import PageTransition from "../components/ui/PageTransition"
import PageHero from "../components/ui/PageHero"

import Container from "../components/ui/Container"
import GlassCard from "../components/ui/GlassCard"
import Reveal from "../components/ui/Reveal"

import CTASection from "../components/sections/CTASection"

const jobs = [
  {
    role: "Frontend Developer",
    type: "Full Time",
    location: "Mysore / Remote",

    description:
      "Build enterprise-grade frontend systems using React, modern UI architecture, and scalable component systems.",
  },

  {
    role: "MERN Stack Developer",
    type: "Full Time",
    location: "Mysore / Hybrid",

    description:
      "Develop scalable MERN applications, enterprise APIs, and modern digital transformation platforms.",
  },

  {
    role: "Research Analyst",
    type: "Full Time",
    location: "Remote",

    description:
      "Work on research intelligence systems, market insights, innovation tracking, and enterprise analytics.",
  },

  {
    role: "UI/UX Designer",
    type: "Contract",

    location: "Remote",

    description:
      "Design premium enterprise experiences, modern interaction systems, and scalable UI architectures.",
  },
]

const Careers = () => {

  return (
    <PageTransition>

      <main className="bg-[#020617] text-white">

        {/* Hero */}
        <PageHero
          badge="Careers At Sigvitas"
          title="Build The Future Of Enterprise Innovation"
          description="Join a team focused on research intelligence, scalable technology systems, enterprise consulting, and future-ready digital transformation."
        />

        {/* Culture */}
        <section className="pb-24">

          <Container>

            <div className="
              grid
              lg:grid-cols-2
              gap-20
              items-center
            ">

              {/* Content */}
              <Reveal>

                <div>

                  <p className="
                    uppercase
                    tracking-[0.2em]
                    text-sm
                    text-cyan-400
                  ">
                    Why Join Us
                  </p>

                  <h2 className="
                    mt-5
                    text-4xl
                    md:text-5xl
                    font-bold
                    leading-tight
                  ">

                    A Modern Innovation
                    Environment Built
                    For Growth

                  </h2>

                  <p className="
                    mt-8
                    text-slate-400
                    leading-relaxed
                    text-lg
                  ">

                    At Sigvitas, we combine
                    research intelligence,
                    enterprise technology,
                    and innovation strategy
                    to solve meaningful business challenges.

                  </p>

                  <p className="
                    mt-6
                    text-slate-400
                    leading-relaxed
                    text-lg
                  ">

                    We believe in continuous learning,
                    modern engineering practices,
                    scalable systems,
                    and building future-ready digital experiences.

                  </p>

                </div>

              </Reveal>

              {/* Stats */}
              <Reveal delay={0.2}>

                <div className="
                  grid
                  grid-cols-2
                  gap-6
                ">

                  {
                    [
                      {
                        number: "20+",
                        label: "Team Members",
                      },

                      {
                        number: "10+",
                        label: "Innovation Domains",
                      },

                      {
                        number: "95%",
                        label: "Growth Focus",
                      },

                      {
                        number: "100%",
                        label: "Learning Culture",
                      },
                    ].map((item) => (

                      <GlassCard
                        key={item.label}
                        className="
                          p-8
                          text-center
                        "
                      >

                        <h3 className="
                          text-4xl
                          font-bold
                        ">

                          {item.number}

                        </h3>

                        <p className="
                          mt-4
                          text-slate-400
                        ">

                          {item.label}

                        </p>

                      </GlassCard>

                    ))
                  }

                </div>

              </Reveal>

            </div>

          </Container>

        </section>

        {/* Open Roles */}
        <section className="pb-28">

          <Container>

            <div className="
              max-w-5xl
              mx-auto
            ">

              <Reveal>

                <h2 className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-center
                ">

                  Open Opportunities

                </h2>

              </Reveal>

              <div className="
                mt-16
                flex
                flex-col
                gap-8
              ">

                {
                  jobs.map((job, index) => (

                    <Reveal
                      key={job.role}
                      delay={index * 0.08}
                    >

                      <GlassCard className="
                        p-8
                        md:p-10
                      ">

                        <div className="
                          flex
                          flex-col
                          lg:flex-row
                          lg:items-center
                          lg:justify-between
                          gap-8
                        ">

                          {/* Left */}
                          <div>

                            <div className="
                              flex
                              flex-wrap
                              gap-4
                            ">

                              <span className="
                                px-4
                                py-2
                                rounded-full
                                bg-cyan-400/10
                                text-cyan-400
                                text-sm
                              ">

                                {job.type}

                              </span>

                              <span className="
                                px-4
                                py-2
                                rounded-full
                                border
                                border-white/10
                                text-sm
                                text-slate-300
                              ">

                                {job.location}

                              </span>

                            </div>

                            <h3 className="
                              mt-6
                              text-3xl
                              font-bold
                            ">

                              {job.role}

                            </h3>

                            <p className="
                              mt-5
                              text-slate-400
                              leading-relaxed
                              max-w-3xl
                            ">

                              {job.description}

                            </p>

                          </div>

                          {/* Right */}
                          <button className="
                            px-7
                            py-4
                            rounded-2xl
                            bg-cyan-400
                            text-black
                            font-semibold
                            hover:scale-[1.03]
                            transition-all
                            duration-300
                          ">

                            Apply Now

                          </button>

                        </div>

                      </GlassCard>

                    </Reveal>

                  ))
                }

              </div>

            </div>

          </Container>

        </section>

        {/* CTA */}
        <CTASection />

      </main>

    </PageTransition>
  )
}

export default Careers