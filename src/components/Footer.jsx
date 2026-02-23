import { Link } from 'react-router-dom'
import { MapPin, Phone, MessageCircle, Facebook, Instagram } from 'lucide-react'

const ADDRESS = '22, Kithaganur Main Rd, next to Garden City College, Bhattarahalli, Bengaluru, Karnataka 560049'
const PHONE = '9845177702'
const WHATSAPP_URL = 'https://wa.me/919845177702'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & tagline */}
          <div>
            <Link to="/" className="text-xl font-bold">
              <span className="text-primary-400">Vyan</span> Office Solution
            </Link>
            <p className="mt-2 text-primary-400 font-medium">Your One Stop Printing & Stationery Solution</p>
            <p className="mt-2 text-gray-400 text-sm">
              Fast printing, affordable prices, trusted local shop. Student-friendly. Bulk orders welcome.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-primary-400 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-primary-400 mb-3">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary-400" />
                <span className="text-sm">{ADDRESS}</span>
              </li>
              <li>
                <a href={`tel:+91${PHONE}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={18} className="text-primary-400 shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Vyan Office Solution. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
