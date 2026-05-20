import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">
                S
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">Sigvitas</h2>
                <p className="text-xs text-gray-500">Operational Excellence</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-300 max-w-md">
              Transforming organizations through Six Sigma, Digital Transformation, Innovation, and Strategic Procurement.
            </p>

            <div className="flex gap-5 mt-10">
              <a href="#" className="hover:text-white transition"><Linkedin size={22} /></a>
              <a href="#" className="hover:text-white transition"><Twitter size={22} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#capabilities" className="hover:text-white transition">Capabilities</a></li>
              <li><a href="#process" className="hover:text-white transition">Our Process</a></li>
              <li><a href="#industries" className="hover:text-white transition">Industries</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#capabilities" className="hover:text-white transition">Six Sigma Consulting</a></li>
              <li><a href="#capabilities" className="hover:text-white transition">Custom Software</a></li>
              <li><a href="#capabilities" className="hover:text-white transition">Innovation & PM</a></li>
              <li><a href="#capabilities" className="hover:text-white transition">Procurement Excellence</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6">Get In Touch</h4>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="mt-1" size={20} />
                <div>
                  <a href="mailto:info@sigvitas.com" className="hover:text-white transition">info@sigvitas.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1" size={20} />
                <div>
                  <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="mt-1" size={20} />
                <div>
                  Bengaluru, Karnataka<br />
                  India
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest">Available for projects worldwide</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 Sigvitas Consulting Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
          <p className="mt-4 md:mt-0 text-xs">Built with ❤️ for Operational Excellence</p>
        </div>
      </div>
    </footer>
  );
}