import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white pt-20 flex items-center relative">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-6">
              Certified • Results-Driven • Pan India
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-dark leading-none mb-8">
              Operational Excellence.<br />
              Delivered with Precision.
            </h1>

            <p className="text-2xl text-gray-600 max-w-2xl">
              We help manufacturing, healthcare, automotive and technology companies achieve breakthrough performance through Six Sigma, Digital Transformation, Innovation and Strategic Procurement.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-5 mt-12">
            <motion.button
              whileHover={{ scale: 1.03 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-700 hover:bg-primary-800 text-white px-10 py-5 rounded-2xl text-lg font-semibold flex items-center gap-3"
            >
              Start Your Transformation
              <ArrowRight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-dark hover:bg-dark hover:text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all"
            >
              Explore Our Expertise
            </motion.button>
          </div>

          <div className="mt-16 flex items-center gap-12 text-sm">
            <div>
              <div className="font-mono text-4xl font-semibold text-primary-700">50+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="font-mono text-4xl font-semibold text-primary-700">15+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div>
              <div className="font-mono text-4xl font-semibold text-primary-700">98%</div>
              <div className="text-gray-600">Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}