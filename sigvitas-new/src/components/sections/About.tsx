import SectionHeading from '../common/SectionHeading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="ABOUT SIGVITAS"
          title="Excellence Through Experience"
          subtitle="We don't just advise — we partner with you to deliver measurable, sustainable results."
        />

        <div className="grid lg:grid-cols-12 gap-20 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl space-y-8 text-lg text-gray-600">
              <p>
                Founded in 2018, Sigvitas Consulting is a specialized firm focused on helping organizations achieve operational excellence and digital transformation.
              </p>
              <p>
                Our team comprises certified Lean Six Sigma Black Belts, experienced software engineers, product strategists, and procurement specialists who have collectively delivered transformative projects across multiple industries.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="text-5xl font-semibold text-primary-700">2018</div>
                <div className="text-sm text-gray-500 mt-2">ESTABLISHED</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-semibold text-primary-700">50+</div>
                <div className="text-sm text-gray-500 mt-2">PROJECTS</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-5xl font-semibold text-primary-700">98%</div>
                <div className="text-sm text-gray-500 mt-2">RETENTION</div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Key Highlights */}
          <div className="lg:col-span-5 bg-gray-50 rounded-3xl p-10">
            <h4 className="font-semibold text-xl mb-8">Why Organizations Choose Sigvitas</h4>
            
            <div className="space-y-8">
              {[
                "Deep domain expertise combined with practical implementation",
                "Certified professionals with proven track records",
                "Focus on sustainable, long-term results",
                "Transparent processes and clear communication",
                "Customized solutions, not one-size-fits-all"
              ].map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-medium">
                    {i+1}
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 