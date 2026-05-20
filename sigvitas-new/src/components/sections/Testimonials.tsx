import SectionHeading from '../common/SectionHeading';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Sharma",
    position: "Director - Operations, ABC Manufacturing",
    content: "Sigvitas helped us reduce defects by 68% and saved over ₹2.8 Cr annually through their Six Sigma intervention. Their Black Belt consultants are truly exceptional.",
    company: "ABC Manufacturing",
    rating: 5
  },
  {
    name: "Dr. Meera Nair",
    position: "CEO, Mediline Healthcare",
    content: "The process optimization and digital transformation they delivered exceeded our expectations. Highly professional team with deep domain expertise.",
    company: "Mediline Healthcare",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    position: "VP - Supply Chain, AutoParts India",
    content: "Their strategic sourcing and procurement excellence project delivered 22% cost reduction while improving supplier quality significantly.",
    company: "AutoParts India",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="TESTIMONIALS"
          title="What Our Clients Say"
          subtitle="Real results from real partnerships"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-3xl border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed flex-1 text-[17px]">
                “{testimonial.content}”
              </p>

              {/* Author */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="font-semibold text-dark">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.position}</div>
                <div className="text-xs text-primary-600 mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust logos / certifications row */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-500 mb-8">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-75">
            <div className="text-2xl font-bold text-gray-400">TATA</div>
            <div className="text-2xl font-bold text-gray-400">BOSCH</div>
            <div className="text-2xl font-bold text-gray-400">Dr. Reddy's</div>
            <div className="text-2xl font-bold text-gray-400">L&T</div>
            <div className="text-2xl font-bold text-gray-400">SIEMENS</div>
          </div>
        </div>
      </div>
    </section>
  );
}