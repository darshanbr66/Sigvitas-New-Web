import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

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

            {/* Social Links */}
            <div className="flex gap-5 mt-10">
              <a 
                href="https://linkedin.com/company/sigvitas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={26} />
              </a>
              <a 
                href="https://twitter.com/sigvitas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={26} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Six Sigma Consulting</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Innovation &amp; PM</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Procurement Excellence</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6">Get In Touch</h4>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="mt-1 flex-shrink-0" size={20} />
                <a 
                  href="mailto:info@sigvitas.com" 
                  className="hover:text-white transition-colors"
                >
                  info@sigvitas.com
                </a>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 flex-shrink-0" size={20} />
                <a 
                  href="tel:+919876543210" 
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex gap-4">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
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
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>© 2026 Sigvitas Consulting Pvt. Ltd. All Rights Reserved.</p>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <p className="text-xs text-gray-500">Built with ❤️ for Operational Excellence</p>
        </div>
      </div>
    </footer>
  );
}