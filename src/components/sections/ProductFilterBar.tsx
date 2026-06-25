import { Search } from 'lucide-react'

import { cn } from '@/lib/cn'
import type { ProductFilter, ProductCategory } from '@/types'
import content from '@/data/content.sr'

const categories: { id: ProductCategory | 'all'; label: string }[] = [
  { id: 'all', label: content.products.categories.all },
  { id: 'tende', label: content.products.categories.tende },
  { id: 'suncobrani', label: content.products.categories.suncobrani },
  { id: 'zatvaranje-terasa', label: content.products.categories['zatvaranje-terasa'] },
  { id: 'roletne', label: content.products.categories.roletne },
  { id: 'pergole', label: content.products.categories.pergole },
  { id: 'zavese', label: content.products.categories.zavese },
  { id: 'komarnici', label: content.products.categories.komarnici },
]

const materials = [
  { id: 'all', label: 'Svi materijali' },
  { id: 'Sauleda', label: 'Sauleda' },
  { id: 'Dickson', label: 'Dickson' },
  { id: 'Irisgiovanardi', label: 'Irisgiovanardi' },
]

const sortOptions: { id: ProductFilter['sort']; label: string }[] = [
  { id: 'popular', label: content.products.filters.popular },
  { id: 'newest', label: content.products.filters.newest },
]

interface ProductFilterBarProps {
  filter: ProductFilter
  onFilterChange: (filter: ProductFilter) => void
}

export function ProductFilterBar({ filter, onFilterChange }: ProductFilterBarProps) {
  return (
    <div className="sticky top-[76px] z-30 bg-[var(--bg-primary)]/90 py-4 backdrop-blur-sm">
      <div className="space-y-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-secondary)]" />
          <input
            type="text"
            value={filter.search}
            onChange={(e) => onFilterChange({ ...filter, search: e.target.value })}
            placeholder={content.products.filters.search}
            className={cn(
              'w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-card)] py-2.5 pl-10 pr-4 text-sm text-white placeholder-[var(--text-tertiary)]',
              'transition-all duration-200 focus:border-[var(--accent-primary)] focus:outline-none focus:shadow-[0_0_0_3px_var(--accent-glow)]',
            )}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onFilterChange({ ...filter, category: cat.id })}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200',
                filter.category === cat.id
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-accent)]',
              )}
            >
              {cat.label}
            </button>
          ))}

          <span className="mx-1 h-5 w-px bg-[var(--border-subtle)]" />

          <select
            value={filter.material ?? 'all'}
            onChange={(e) =>
              onFilterChange({
                ...filter,
                material: e.target.value === 'all' ? undefined : e.target.value,
              })
            }
            className={cn(
              'rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-card)] px-3 py-1.5 text-xs text-[var(--text-secondary)]',
              'transition-all duration-200 focus:border-[var(--accent-primary)] focus:outline-none focus:shadow-[0_0_0_3px_var(--accent-glow)]',
            )}
          >
            {materials.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>

          <select
            value={filter.sort}
            onChange={(e) =>
              onFilterChange({
                ...filter,
                sort: e.target.value as ProductFilter['sort'],
              })
            }
            className={cn(
              'ml-auto rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-card)] px-3 py-1.5 text-xs text-[var(--text-secondary)]',
              'transition-all duration-200 focus:border-[var(--accent-primary)] focus:outline-none focus:shadow-[0_0_0_3px_var(--accent-glow)]',
            )}
          >
            {sortOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
