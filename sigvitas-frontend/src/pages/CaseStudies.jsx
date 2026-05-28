import PageTransition from "../components/ui/PageTransition"
import PageHero from "../components/ui/PageHero"

import Container from "../components/ui/Container"
import GlassCard from "../components/ui/GlassCard"
import Reveal from "../components/ui/Reveal"

import CTASection from "../components/sections/CTASection"

const caseStudies = [
  {
    industry: "Enterprise Technology",

    title:
      "AI-Assisted Enterprise Intelligence Platform",

    description:
      "Developed a scalable AI-assisted enterprise intelligence system for automating research workflows and strategic decision-making.",

    results: [
      "65% workflow automation",
      "40% faster research cycles",
      "Enterprise-scale architecture",
    ],
  },

  {
    industry: "Digital Transformation",

    title:
      "Modern Research & Analytics Infrastructure",

    description:
      "Designed and implemented a modern analytics ecosystem for large-scale enterprise transformation initiatives.",

    results: [
      "Real-time analytics",
      "Scalable cloud architecture",
      "Cross-functional integration",
    ],
  },

  {
    industry: "Innovation Strategy",

    title:
      "Research Intelligence Automation System",

    description:
      "Built an AI-powered research intelligence platform to streamline innovation tracking and enterprise insights.",

    results: [
      "80% faster reporting",
      "Reduced manual operations",
      "Improved strategic visibility",
    ],
  },

  {
    industry: "Enterprise Consulting",

    title:
      "Business Intelligence Optimization Framework",

    description:
      "Created a business intelligence framework enabling enterprises to improve operational visibility and decision-making.",

    results: [
      "Advanced reporting systems",
      "Enterprise dashboard architecture",
      "Operational optimization",
    ],
  },

  {
    industry: "Technology Infrastructure",

    title:
      "Scalable MERN Enterprise Platform",

    description:
      "Developed a highly scalable MERN-based enterprise platform with modular frontend architecture and optimized workflows.",

    results: [
      "Enterprise-grade frontend",
      "Reusable UI architecture",
      "Future-ready scalability",
    ],
  },

  {
    industry: "Research & Innovation",

    title:
      "Innovation Lifecycle Management System",

    description:
      "Built a centralized innovation lifecycle system supporting enterprise R&D initiatives and collaboration.",

    results: [
      "Centralized innovation tracking",
      "Collaborative workflows",
      "Improved enterprise agility",
    ],
  },
]

const CaseStudies = () => {

  return (
    <PageTransition>

      <main className="bg-[#020617] text-white">

        {/* Hero */}
        <PageHero
          badge="Enterprise Case Studies"
          title="Real Enterprise Impact Through Innovation & Technology"
          description="Explore how Sigvitas delivers enterprise transformation through research intelligence, scalable digital systems, and innovation-driven consulting solutions."
        />

        {/* Case Studies */}
        <section className="pb-28">

          <Container>

            <div className="
              grid
              md:grid-cols-2
              gap-8
            ">

              {
                caseStudies.map((item, index) => (

                  <Reveal
                    key={item.title}
                    delay={index * 0.08}
                  >

                    <GlassCard className="p-10 h-full">

                      {/* Industry */}
                      <span className="
                        inline-block
                        px-4
                        py-2
                        rounded-full
                        bg-cyan-400/10
                        text-cyan-400
                        text-sm
                      ">

                        {item.industry}

                      </span>

                      {/* Title */}
                      <h2 className="
                        mt-6
                        text-3xl
                        font-bold
                        leading-snug
                      ">

                        {item.title}

                      </h2>

                      {/* Description */}
                      <p className="
                        mt-6
                        text-slate-400
                        leading-relaxed
                      ">

                        {item.description}

                      </p>

                      {/* Results */}
                      <div className="
                        mt-8
                        flex
                        flex-wrap
                        gap-4
                      ">

                        {
                          item.results.map((result) => (

                            <div
                              key={result}
                              className="
                                px-4
                                py-2
                                rounded-xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                text-sm
                                text-slate-300
                              "
                            >

                              {result}

                            </div>

                          ))
                        }

                      </div>

                      {/* CTA */}
                      <button className="
                        mt-10
                        text-cyan-400
                        hover:text-cyan-300
                        transition
                      ">

                        View Full Case Study →

                      </button>

                    </GlassCard>

                  </Reveal>

                ))
              }

            </div>

          </Container>

        </section>

        {/* CTA */}
        <CTASection />

      </main>

    </PageTransition>
  )
}

export default CaseStudies