import SectionHeading from '../common/SectionHeading';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="GET IN TOUCH"
          title="Let's Build Excellence Together"
          subtitle="Ready to transform your operations? We'd love to hear from you."
        />

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white/10 backdrop-blur-lg border border-white/20 p-10 md:p-12 rounded-3xl">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">How can we help you? *</label>
                <textarea 
                  rows={5}
                  className="w-full bg-white/10 border border-white/30 rounded-3xl px-6 py-5 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 resize-none"
                  placeholder="Tell us about your project or challenge..."
                ></textarea>
              </div>

              <button 
                type="button"
                onClick={() => alert("Thank you! We'll get back to you within 24 hours. (Form will be connected later)")}
                className="w-full bg-primary-600 hover:bg-primary-500 py-5 rounded-2xl text-lg font-semibold transition-all active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Get in touch directly</h3>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email Us</div>
                    <a href="mailto:info@sigvitas.com" className="text-lg hover:text-primary-400 transition">info@sigvitas.com</a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Call Us</div>
                    <a href="tel:+919876543210" className="text-lg hover:text-primary-400 transition">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Visit Us</div>
                    <div className="text-lg">
                      Bengaluru, Karnataka<br />
                      India
                    </div>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Business Hours</div>
                    <div className="text-lg">Mon - Fri : 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20">
              <p className="text-gray-400">
                We typically respond within <span className="text-white font-medium">4 business hours</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}