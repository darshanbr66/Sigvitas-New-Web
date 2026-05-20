import SectionHeading from '../common/SectionHeading';
import { motion } from 'framer-motion';
import { Target, Users, BarChart3, Award, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Diagnostic Assessment",
    desc: "Comprehensive analysis of current processes, pain points, and opportunities using data-driven diagnostics.",
    icon: Target
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    desc: "Co-create a customized implementation roadmap with clear KPIs, timelines, and expected outcomes.",
    icon: Users
  },
  {
    number: "03",
    title: "Execution Excellence",
    desc: "Hands-on project execution by our certified experts working alongside your internal team.",
    icon: BarChart3
  },
  {
    number: "04",
    title: "Sustain & Scale",
    desc: "Knowledge transfer, training, system implementation, and continuous improvement framework.",
    icon: Award
  }
];

export default function Process() {
  return (
    <section id="process" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="OUR METHODOLOGY"
          title="A Systematic Approach"
          subtitle="We follow a proven, structured process that ensures consistent, measurable, and sustainable results."
        />

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gray-200"></div>

            <div className="space-y-20">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-3xl p-10 shadow-sm">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-5xl font-bold text-primary-200">{step.number}</div>
                        <step.icon className="w-10 h-10 text-primary-700" />
                      </div>
                      <h3 className="text-3xl font-semibold text-dark mb-4">{step.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block w-12 h-12 bg-white rounded-full border-4 border-primary-700 z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-primary-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-primary-800 transition-all"
          >
            Begin Your Transformation Journey
            <ArrowRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
}