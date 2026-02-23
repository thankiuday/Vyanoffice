import { motion } from 'framer-motion'

/**
 * Reusable card for a service: icon, title, description.
 * Uses glassmorphism style and hover animation.
 */
export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-xl p-6 transition-shadow"
    >
      <div className="w-12 h-12 rounded-xl bg-primary-400/20 text-primary-700 flex items-center justify-center mb-4 group-hover:bg-primary-400/30 transition-colors">
        {Icon && <Icon size={24} />}
      </div>
      <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </motion.article>
  )
}
