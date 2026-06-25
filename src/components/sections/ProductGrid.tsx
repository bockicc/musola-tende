import { AnimatePresence, motion } from 'framer-motion'

import type { Product } from '@/types'
import content from '@/data/content.sr'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-base text-[var(--text-secondary)]">
          {content.products.empty}
        </p>
      </div>
    )
  }

  return (
    <AnimatePresence mode="popLayout">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  )
}
