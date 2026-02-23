import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { productCategories } from '../data/products'
import { GraduationCap } from 'lucide-react'

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Products | Vyan Office Solution - Stationery & Office Supplies</title>
        <meta name="description" content="Pens, notebooks, A4 paper, files, chart papers, glue, scissors, school & office supplies in Bengaluru." />
      </Helmet>

      <section className="pt-24 pb-12 bg-gradient-to-b from-primary-100 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-primary-200/60 border border-primary-300 inline-flex items-center gap-2 px-4 py-2 mb-6"
          >
            <GraduationCap size={20} className="text-primary-800" />
            <span className="font-semibold text-black">Student discounts available – ask us!</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-black mb-3"
          >
            Stationery & Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Pens, notebooks, paper, files, and everything you need for school and office.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productCategories.map((p, i) => (
              <ProductCard key={p.id} name={p.name} shortDescription={p.shortDescription} image={p.image} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
