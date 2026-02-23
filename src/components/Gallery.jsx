import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Carousel for shop images. Uses Picsum for reliable loading; replace with your shop photos when ready.
 */
const GALLERY_IMAGES = [
  { src: 'https://picsum.photos/seed/gallery-shop/1200/600', alt: 'Vyan Office Solution - Shop view' },
  { src: 'https://picsum.photos/seed/gallery-print/1200/600', alt: 'Printing area' },
  { src: 'https://picsum.photos/seed/gallery-stationery/1200/600', alt: 'Stationery section' },
  { src: 'https://picsum.photos/seed/gallery-equipment/1200/600', alt: 'Printing equipment' },
  { src: 'https://picsum.photos/seed/gallery-counter/1200/600', alt: 'Service counter' },
]

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
  }, [current])

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % GALLERY_IMAGES.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const goPrev = () => setCurrent((c) => (c - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
  const goNext = () => setCurrent((c) => (c + 1) % GALLERY_IMAGES.length)

  return (
    <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="aspect-[2/1] max-h-[500px] relative"
        >
          {!loaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse">
              <div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                style={{ animation: 'shimmer 1.5s infinite' }}
              />
            </div>
          )}
          <img
            src={GALLERY_IMAGES[current].src}
            alt={GALLERY_IMAGES[current].alt}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-black hover:bg-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-black hover:bg-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {GALLERY_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
