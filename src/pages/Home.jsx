import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Printer, MapPin } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import ProductCard from '../components/ProductCard'
import { services } from '../data/services'
import { productCategories } from '../data/products'

const PHONE = '+919845177702'
const WHATSAPP_URL = 'https://wa.me/919845177702'
const MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=22+Kithaganur+Main+Rd+Bhattarahalli+Bengaluru+Karnataka+560049'

const testimonials = [
  { name: 'Rahul S.', role: 'Student', text: 'Best place for project printing and binding. Very affordable and fast.' },
  { name: 'Priya M.', role: 'Office Manager', text: 'We get all our office stationery and bulk printing done here. Reliable and quick.' },
  { name: 'Kiran K.', role: 'Teacher', text: 'Quality service and student-friendly prices. Our school orders chart papers and supplies regularly.' },
]

export default function Home() {
  const previewServices = services.slice(0, 6)
  const previewProducts = productCategories.slice(0, 6)

  return (
    <>
      <Helmet>
        <title>Vyan Office Solution | Your One Stop Printing & Stationery - Bengaluru</title>
        <meta name="description" content="Printing, photocopy, binding, lamination & stationery near Garden City College, Bhattarahalli, Bengaluru. Fast, affordable, student-friendly. Call 9845177702." />
      </Helmet>

      {/* Hero – Vyan Office Solution shop image */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-400 via-primary-300 to-primary-100 pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-shop.png')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-primary-100/40" aria-hidden />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-black mb-4"
          >
            Vyan Office Solution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-black/80 font-medium mb-6"
          >
            Your One Stop Printing & Stationery Solution
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-black text-primary-400 px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
            >
              <Phone size={22} />
              Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={22} />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black mb-2">Our Services</h2>
            <p className="text-gray-600">Fast printing, binding, and more at affordable prices.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewServices.map((s, i) => (
              <ServiceCard key={s.id} icon={s.icon} title={s.title} description={s.description} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-block bg-primary-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-primary-500 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Product categories preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black mb-2">Stationery & Supplies</h2>
            <p className="text-gray-600">Pens, notebooks, paper, files, and everything you need.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewProducts.map((p, i) => (
              <ProductCard key={p.id} name={p.name} shortDescription={p.shortDescription} image={p.image} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-block bg-primary-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-primary-500 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black mb-2">Our Equipment</h2>
            <p className="text-gray-600">Professional machines for quality and speed.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="grid grid-cols-2 gap-4">
              {['Konica Minolta Bizhub High-Speed Printers', 'Industrial Photocopy Machines', 'Laser Printers', 'Lamination Machine', 'Binding Machine', 'Computer Print Setup'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-primary-50 border border-primary-100">
                  <Printer size={20} className="text-primary-600 shrink-0" />
                  <span className="text-sm font-medium text-black">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-primary-100/50 border border-primary-200 p-6">
              <h3 className="font-semibold text-black mb-3">Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">• Fast printing</li>
                <li className="flex items-center gap-2">• High quality color prints</li>
                <li className="flex items-center gap-2">• Bulk printing support</li>
                <li className="flex items-center gap-2">• Affordable price</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student discount banner */}
      <section className="py-6 bg-primary-400">
        <div className="container mx-auto px-4 text-center">
          <p className="text-black font-semibold">Student discounts available – ask us for special rates on printing and stationery!</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black mb-2">What Our Customers Say</h2>
            <p className="text-gray-600">Trusted by students, offices, and schools.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white/80 backdrop-blur border border-white/50 shadow p-6"
              >
                <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                <p className="font-semibold text-black">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-black mb-2">Find Us</h2>
            <p className="text-gray-600 mb-4">22, Kithaganur Main Rd, next to Garden City College, Bhattarahalli, Bengaluru, Karnataka 560049</p>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:underline"
            >
              <MapPin size={20} />
              Open in Google Maps
            </a>
          </motion.div>
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-video max-h-[400px] bg-gray-200">
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
        </div>
      </section>
    </>
  )
}
