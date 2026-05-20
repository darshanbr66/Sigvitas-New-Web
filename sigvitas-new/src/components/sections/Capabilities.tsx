import SectionHeading from '../common/SectionHeading';
import { motion } from 'framer-motion';
import { Zap, Code2, Lightbulb, TrendingUp, Users } from 'lucide-react';

const capabilities = [
  {
    icon: Zap,
    title: "Six Sigma & Operational Excellence",
    desc: "End-to-end DMAIC projects, Lean Implementation, Process Optimization, Cost Reduction, Quality Improvement and Black Belt consulting.",
    highlight: "Average 40%+ improvement in process efficiency"
  },
  {
    icon: Code2,
    title: "Custom Software Engineering",
    desc: "Bespoke software development, ERP implementation, AI/ML integration, Automation solutions and full-stack digital transformation.",
    highlight: "Modern tech stack with scalable architecture"
  },
  {
    icon: Lightbulb,
    title: "Innovation & Product Management",
    desc: "New Product Development, Technology Roadmapping, IP Strategy, Agile Product Lifecycle Management and Innovation workshops.",
    highlight: "From idea to market-ready solutions"
  },
  {
    icon: TrendingUp,
    title: "Strategic Procurement & SCM",
    desc: "Strategic Sourcing, Vendor Development, Global Procurement, Supply Chain Optimization and Cost Management programs.",
    highlight: "Average 18-25% savings delivered"
  },
  {
    icon: Users,
    title: "Training & Capability Building",
    desc: "Lean Six Sigma Green & Black Belt Training, Change Management, Leadership Development and Organizational Excellence programs.",
    highlight: "Hands-on practical training"
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="OUR EXPERTISE"
          title="Core Capabilities"
          subtitle="We deliver measurable business impact through specialized consulting and execution excellence."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-10 rounded-3xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-50 text-primary-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <cap.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-semibold text-dark mb-4">
                {cap.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {cap.desc}
              </p>

              <div className="inline-block bg-teal-50 text-teal-700 text-sm px-5 py-2.5 rounded-2xl font-medium">
                {cap.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}