import PageHero from "../components/ui/PageHero"
import Container from "../components/ui/Container"
import GlassCard from "../components/ui/GlassCard"
import Reveal from "../components/ui/Reveal"

import CTASection from "../components/sections/CTASection"
import PageTransition from "../components/ui/PageTransition"

const insights = [
  {
    category: "Enterprise Innovation",
    title:
      "How AI & Research Intelligence Are Reshaping Enterprise Strategy",
    description:
      "Exploring how modern enterprises leverage AI systems and research-driven innovation to accelerate transformation.",
  },

  {
    category: "Digital Transformation",
    title:
      "Building Scalable Digital Ecosystems For Future Enterprises",
    description:
      "A strategic approach to enterprise modernization through scalable technology systems.",
  },

  {
    category: "Technology Consulting",
    title:
      "Enterprise Technology Consulting In The Age Of Intelligent Systems",
    description:
      "Understanding how consulting firms evolve through automation, analytics, and AI-assisted infrastructure.",
  },

  {
    category: "Research Intelligence",
    title:
      "Research-Driven Decision Making For High-Growth Organizations",
    description:
      "How enterprises use structured research and intelligence systems to improve business outcomes.",
  },

  {
    category: "Innovation Strategy",
    title:
      "Innovation Frameworks For Modern Enterprise Acceleration",
    description:
      "Creating scalable innovation models that support operational excellence and business growth.",
  },

  {
    category: "Business Intelligence",
    title:
      "Enterprise Analytics & Strategic Intelligence Systems",
    description:
      "Transforming raw enterprise data into actionable strategic intelligence for leadership teams.",
  },
]

const Insights = () => {

  return (
    <PageTransition>

      <main className="bg-[#020617] text-white">

        {/* Hero */}
        <PageHero
          badge="Enterprise Insights"
          title="Research, Intelligence & Industry Perspectives"
          description="Explore enterprise insights, research-driven innovation, digital transformation strategies, and modern technology intelligence shaping the future of business."
        />

        {/* Insights Grid */}
        <section className="pb-28">

          <Container>

            <div className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
            ">

              {
                insights.map((item, index) => (

                  <Reveal
                    key={item.title}
                    delay={index * 0.08}
                  >

                    <GlassCard className="p-8 h-full">

                      <span className="
                        inline-block
                        px-4
                        py-2
                        rounded-full
                        bg-cyan-400/10
                        text-cyan-400
                        text-sm
                      ">

                        {item.category}

                      </span>

                      <h3 className="
                        mt-6
                        text-2xl
                        font-bold
                        leading-snug
                      ">

                        {item.title}

                      </h3>

                      <p className="
                        mt-5
                        text-slate-400
                        leading-relaxed
                      ">

                        {item.description}

                      </p>

                      <button className="
                        mt-8
                        text-cyan-400
                        hover:text-cyan-300
                        transition
                      ">

                        Read More →

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

export default Insights