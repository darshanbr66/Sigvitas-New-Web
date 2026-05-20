import SectionHeading from '../common/SectionHeading';
import { motion } from 'framer-motion';
import { Factory, HeartPulse, Car, Building, Landmark, Cpu } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Automotive Components, Heavy Engineering, FMCG, Precision Engineering & Process Industries",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Pharmaceuticals",
    desc: "Hospitals, Pharmaceutical Manufacturing, Medical Devices, Diagnostics & Biotech",
  },
  {
    icon: Car,
    title: "Automotive & Electric Vehicles",
    desc: "OEMs, Tier-1 & Tier-2 Suppliers, EV Ecosystem & Battery Manufacturing",
  },
  {
    icon: Building,
    title: "Infrastructure & Construction",
    desc: "EPC Companies, Real Estate Developers, Smart Cities & Project Management",
  },
  {
    icon: Landmark,
    title: "BFSI & Financial Services",
    desc: "Banking, Insurance, NBFCs, FinTech and Financial Operations",
  },
  {
    icon: Cpu,
    title: "Technology & ITES",
    desc: "Software Product Companies, SaaS, Digital Services & IT Infrastructure",
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="INDUSTRIES"
          title="Deep Domain Expertise"
          subtitle="Proven track record of delivering results across key sectors in India and globally."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group p-10 border border-gray-100 hover:border-primary-300 rounded-3xl hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-16 h-16 bg-gray-50 group-hover:bg-primary-50 transition-colors rounded-2xl flex items-center justify-center mb-8">
                <industry.icon className="w-9 h-9 text-primary-700" />
              </div>

              <h3 className="text-2xl font-semibold text-dark mb-4">
                {industry.title}
              </h3>

              <p className="text-gray-600 leading-relaxed flex-1">
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16 text-gray-500">
          ...and many more industries. <span className="text-primary-700 font-medium">We adapt quickly.</span>
        </div>
      </div>
    </section>
  );
}