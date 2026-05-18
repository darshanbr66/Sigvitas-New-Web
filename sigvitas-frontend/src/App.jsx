import MainLayout from "./components/layout/MainLayout"

import HeroSection from "./components/sections/HeroSection"
import TrustedSection from "./components/sections/TrustedSection"
import ServicesSection from "./components/sections/ServicesSection"
import AboutSection from "./components/sections/AboutSection"
import WhyChooseSection from "./components/sections/WhyChooseSection"
import ProcessSection from "./components/sections/ProcessSection"
import TestimonialsSection from "./components/sections/TestimonialsSection"
import CTASection from "./components/sections/CTASection"
import ScrollProgress from "./components/ui/ScrollProgress"

function App() {
  return (
    <MainLayout>

      <ScrollProgress />

      <HeroSection />

      <TrustedSection />

      <ServicesSection />

      <AboutSection />

      <WhyChooseSection />

      <ProcessSection />

      <TestimonialsSection />

      <CTASection />

    </MainLayout>
  )
}

export default App