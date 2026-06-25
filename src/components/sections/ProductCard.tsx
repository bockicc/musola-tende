import { Link } from '@tanstack/react-router'
import { Image } from 'lucide-react'

import { cn } from '@/lib/cn'
import type { Product } from '@/types'
import content from '@/data/content.sr'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to="/proizvodi/$slug"
      params={{ slug: product.id }}
      className={cn(
        'group relative block overflow-hidden rounded-xl border border-[var(--border-subtle)]',
        'transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-accent)]',
      )}
    >
      {product.featured && (
        <span className="absolute right-2 top-2 z-10 rounded-md bg-gradient-to-r from-gold-500 to-gold-400 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black">
          {content.products.featured}
        </span>
      )}

      <div className="aspect-[4/5]">
        <div className="flex h-[55%] items-center justify-center overflow-hidden bg-[var(--surface-hover)]">
          <Image className="h-10 w-10 text-[var(--text-tertiary)]" />
        </div>

        <div className="flex h-[45%] flex-col justify-between p-5">
          <div>
            <h3 className="font-display text-base font-semibold text-white transition-colors group-hover:text-[var(--accent-primary)]">
              {product.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-[var(--text-secondary)]">
              {product.description}
            </p>
          </div>

          {product.material && (
            <span className="mt-2 text-xs font-medium text-[var(--accent-primary)]">
              {product.material}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
