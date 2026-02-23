import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const ADDRESS = '22, Kithaganur Main Rd, next to Garden City College, Bhattarahalli, Bengaluru, Karnataka 560049'
const PHONE = '9845177702'
const WHATSAPP_URL = 'https://wa.me/919845177702'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Vyan Office Solution - Bengaluru</title>
        <meta name="description" content="Contact Vyan Office Solution. Address, phone, WhatsApp. Send enquiry for bulk orders and print upload. Kithaganur Main Rd, Bhattarahalli, Bengaluru." />
      </Helmet>

      <section className="pt-24 pb-12 bg-gradient-to-b from-primary-100 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-black mb-3"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            Visit us, call, or send an enquiry. We respond quickly.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Address & contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-semibold text-black mb-2 flex items-center gap-2">
                  <MapPin size={20} className="text-primary-600" />
                  Address
                </h3>
                <p className="text-gray-700">{ADDRESS}</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=22+Kithaganur+Main+Rd+Bhattarahalli+Bengaluru+Karnataka+560049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 font-medium hover:underline mt-2 inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2 flex items-center gap-2">
                  <Phone size={20} className="text-primary-600" />
                  Phone
                </h3>
                <a href={`tel:+91${PHONE}`} className="text-gray-700 hover:text-primary-600 font-medium text-lg">
                  {PHONE}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2 flex items-center gap-2">
                  <MessageCircle size={20} className="text-green-600" />
                  WhatsApp
                </h3>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-video max-h-[300px] bg-gray-200 mt-8">
                <iframe
                  title="Vyan Office Solution location"
                  src="https://www.google.com/maps?q=22+Kithaganur+Main+Rd+Bhattarahalli+Bengaluru+Karnataka+560049&hl=en&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-white/80 backdrop-blur border border-gray-200 shadow-lg p-6"
            >
              <h3 className="font-semibold text-black mb-4">Send Enquiry</h3>
              <p className="text-sm text-gray-600 mb-4">
                General enquiry, bulk order, or print upload – we will get back to you. For faster response, call or WhatsApp.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
