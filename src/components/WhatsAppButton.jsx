import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/919845177702'

/**
 * Floating WhatsApp button - fixed bottom-right, pulse effect.
 */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-30" aria-hidden />
      <MessageCircle size={28} className="relative" />
    </motion.a>
  )
}
