import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import ServiceCard from "../ui/ServiceCard"

import { services } from "../../data/services"

const ServicesSection = () => {
  return (
    <section id="services" className="
      section-padding
      relative
      overflow-hidden
    ">

      {/* Background Glow */}
      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        bg-cyan-500/10
        blur-[160px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* Title */}
        <SectionTitle
          subtitle="OUR SERVICES"
          title="Enterprise Solutions Built For The Future"
        />

        {/* Description */}
        <p className="
          mt-6
          max-w-3xl
          text-slate-400
          text-lg
          leading-relaxed
        ">
          We deliver cutting-edge technology solutions
          and enterprise consulting services that help
          organizations innovate, scale, and transform digitally.
        </p>

        {/* Cards */}
        <div className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        ">

          {
            services.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                {...service}
              />
            ))
          }

        </div>

      </Container>

    </section>
  )
}

export default ServicesSection