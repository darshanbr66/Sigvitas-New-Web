import MainLayout from "./components/layout/MainLayout"

import HeroSection from "./components/sections/HeroSection"
import TrustedSection from "./components/sections/TrustedSection"
import ServicesSection from "./components/sections/ServicesSection"
import IndustriesSection from "./components/sections/IndustriesSection"
import InsightsSection from "./components/sections/InsightsSection"
import CaseStudiesSection from "./components/sections/CaseStudiesSection"
import MetricsSection from "./components/sections/MetricsSection"
import CapabilitiesSection from "./components/sections/CapabilitiesSection"
import AboutSection from "./components/sections/AboutSection"
import LeadershipSection from "./components/sections/LeadershipSection"
import WhyChooseSection from "./components/sections/WhyChooseSection"
import ProcessSection from "./components/sections/ProcessSection"
import TestimonialsSection from "./components/sections/TestimonialsSection"
import PublicationsSection from "./components/sections/PublicationsSection"
import CTASection from "./components/sections/CTASection"
import ContactSection from "./components/sections/ContactSection"

import ScrollProgress from "./components/ui/ScrollProgress"

function App() {
  return (
    <MainLayout>

      <ScrollProgress />

      <HeroSection />

      <TrustedSection />

      <ServicesSection />

      <IndustriesSection />

      <InsightsSection />

      <CaseStudiesSection />

      <MetricsSection />

      <CapabilitiesSection />

      <AboutSection />

      <LeadershipSection />

      <WhyChooseSection />

      <ProcessSection />

      <TestimonialsSection />

      <PublicationsSection />

      <ContactSection />

      <CTASection />

    </MainLayout>
  )
}

export default App