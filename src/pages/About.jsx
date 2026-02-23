import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle } from 'lucide-react'

const PHONE = '+919845177702'
const WHATSAPP_URL = 'https://wa.me/919845177702'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Vyan Office Solution - Trusted Printing and Stationery</title>
        <meta name="description" content="Vyan Office Solution is a trusted local printing and stationery shop near Garden City College, Bhattarahalli, Bengaluru. Fast service, affordable prices, quality equipment." />
      </Helmet>

      <section className="pt-24 pb-12 bg-gradient-to-b from-primary-100 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-black mb-3"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Your trusted local partner for printing and stationery.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg text-gray-700"
          >
            <p className="leading-relaxed">
              <strong className="text-black">Vyan Office Solution</strong> is a small, trusted printing and stationery shop on Kithaganur Main Rd, next to Garden City College, Bhattarahalli, Bengaluru. We serve students, office workers, nearby companies, schools, and colleges with fast, affordable, and reliable service.
            </p>
            <p className="leading-relaxed mt-4">
              We use quality machines including Konica Minolta Bizhub high-speed printers and industrial photocopy equipment so you get clear prints and quick turnaround. Whether you need a few photocopies, bulk printing, binding, lamination, or everyday stationery, we are your one-stop solution. We keep our prices student-friendly and welcome bulk orders. Visit us or call for any requirement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl bg-primary-50 border border-primary-200 p-6"
          >
            <h3 className="font-semibold text-black mb-3">Visit or get in touch</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-primary-600 shrink-0" />
                22, Kithaganur Main Rd, next to Garden City College, Bhattarahalli, Bengaluru, Karnataka 560049
              </li>
              <li>
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-black font-medium hover:text-primary-600">
                  <Phone size={18} className="text-primary-600 shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 font-medium hover:underline">
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </li>
            </ul>
            <Link to="/contact" className="inline-block mt-4 bg-primary-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
