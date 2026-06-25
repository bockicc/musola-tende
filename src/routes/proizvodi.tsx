import { useState } from 'react'
import { useSearch } from '@tanstack/react-router'
import content from '@/data/content.sr'
import { products } from '@/data/products'
import type { ProductFilter } from '@/types'
import { ProductFilterBar } from '@/components/sections/ProductFilterBar'
import { ProductGrid } from '@/components/sections/ProductGrid'

export default function ProductsPage() {
  const search = useSearch({ from: '/proizvodi' }) as Record<string, string> | undefined
  const [filter, setFilter] = useState<ProductFilter>({
    category: (search?.kategorija as ProductFilter['category']) || 'all',
    search: '',
    sort: 'popular',
  })

  const filtered = products
    .filter((p) => {
      if (filter.category !== 'all' && p.category !== filter.category) return false
      if (filter.material && filter.material !== 'all' && p.material !== filter.material) return false
      if (
        filter.search &&
        !p.title.toLowerCase().includes(filter.search.toLowerCase()) &&
        !p.description.toLowerCase().includes(filter.search.toLowerCase())
      )
        return false
      return true
    })
    .sort((a, b) => {
      switch (filter.sort) {
        case 'newest':
          return Number(b.id) - Number(a.id)
        default:
          return Number(a.featured ? 0 : 1) - Number(b.featured ? 0 : 1)
      }
    })

  return (
    <section className="px-4 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            {content.products.title}{' '}
            <span className="text-[var(--accent-primary)]">{content.products.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            {content.products.subtitle}
          </p>
        </div>

        <ProductFilterBar filter={filter} onFilterChange={setFilter} />
        <ProductGrid products={filtered} />
      </div>
    </section>
  )
}
