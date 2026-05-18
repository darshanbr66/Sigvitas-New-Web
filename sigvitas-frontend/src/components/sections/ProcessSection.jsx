import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import ProcessCard from "../ui/ProcessCard"

import { processSteps } from "../../data/process"

const ProcessSection = () => {
  return (
    <section id="process" className="
      section-padding
      relative
      overflow-hidden
    ">

      {/* Background Glow */}
      <div className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        h-[700px]
        rounded-full
        bg-violet-500/10
        blur-[180px]
      " />

      <Container className="relative z-10">

        {/* Title */}
        <div className="text-center">

          <SectionTitle
            subtitle="OUR PROCESS"
            title="A Structured Workflow For Digital Excellence"
            center
          />

          <p className="
            mt-6
            max-w-3xl
            mx-auto
            text-slate-400
            text-lg
            leading-relaxed
          ">
            We follow a streamlined and collaborative
            workflow to deliver scalable enterprise solutions
            with precision, performance, and innovation.
          </p>

        </div>

        {/* Timeline */}
        <div className="
          mt-24
          grid
          grid-cols-1
          lg:grid-cols-4
          gap-16
          relative
        ">

          {
            processSteps.map((item, index) => (

              <ProcessCard
                key={item.title}
                step={index + 1}
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

export default ProcessSection