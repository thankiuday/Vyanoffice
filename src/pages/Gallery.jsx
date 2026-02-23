import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import GalleryCarousel from '../components/Gallery'

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery | Vyan Office Solution - Our Shop</title>
        <meta name="description" content="Photos of Vyan Office Solution - printing, stationery, and equipment at Kithaganur Main Rd, Bhattarahalli, Bengaluru." />
      </Helmet>

      <section className="pt-24 pb-12 bg-gradient-to-b from-primary-100 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-black mb-3"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            A look at our shop and services. Replace these with your real photos.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <GalleryCarousel />
        </div>
      </section>
    </>
  )
}
