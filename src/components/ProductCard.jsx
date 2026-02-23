import { useState } from 'react'
import { motion } from 'framer-motion'

// Fallback when image fails to load (reliable placeholder)
const FALLBACK_IMAGE = 'https://picsum.photos/seed/stationery-fallback/600/400'

/**
 * Skeleton placeholder with shimmer animation while image loads.
 */
function ImageSkeleton() {
  return (
    <div className="absolute inset-0 bg-gray-200 animate-pulse overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{ animation: 'shimmer 1.5s infinite' }}
      />
    </div>
  )
}

/**
 * Card for a product category: image, name, short description.
 * Uses lazy loading, skeleton while loading, and fallback on error.
 */
export default function ProductCard({ name, shortDescription, image, index = 0 }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const finalSrc =
    image && (image.startsWith('http') || image.startsWith('//'))
      ? image
      : image || FALLBACK_IMAGE
  const displaySrc = error ? FALLBACK_IMAGE : finalSrc

  const handleLoad = () => setLoaded(true)
  const handleError = () => {
    if (!error) {
      setError(true)
      setLoaded(false) // show skeleton again until fallback image loads
    } else {
      setLoaded(true) // fallback also failed; hide skeleton
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-xl overflow-hidden"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
        {/* Skeleton loader – visible until image loads */}
        {!loaded && <ImageSkeleton />}
        <img
          src={displaySrc}
          alt={name}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-black mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{shortDescription}</p>
      </div>
    </motion.article>
  )
}
