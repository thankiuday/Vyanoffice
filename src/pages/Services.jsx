import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Vyan Office Solution - Printing, Binding, Lamination</title>
        <meta name="description" content="Xerox, color print, B&W print, scanning, lamination, spiral binding, rubber stamps, bulk and student printing in Bengaluru." />
      </Helmet>

      <section className="pt-24 pb-12 bg-gradient-to-b from-primary-100 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-black mb-3"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Fast printing, photocopy, binding, and more. Quality machines and affordable prices for students, offices, and schools.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.id} icon={s.icon} title={s.title} description={s.description} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
