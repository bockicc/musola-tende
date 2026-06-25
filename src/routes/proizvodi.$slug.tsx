import { useState, useEffect } from 'react'
import { Link, useParams } from '@tanstack/react-router'
import content from '@/data/content.sr'
import { products, getProductBySlug } from '@/data/products'
import { getCategoryById } from '@/data/categories'
import { ProductLightbox } from '@/components/sections/ProductLightbox'
import { ProductCard } from '@/components/sections/ProductCard'
import { Check, ArrowLeft, Image as ImageIcon } from 'lucide-react'

export default function ProductDetailPage() {
  const { slug } = useParams({ from: '/proizvodi/$slug' })
  const product = getProductBySlug(slug)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    setLightboxOpen(false)
    setLightboxIndex(0)
  }, [slug])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-32">
        <h2 className="mb-4 font-display text-2xl font-bold text-[var(--text-primary)]">
          Proizvod nije pronađen
        </h2>
        <Link to="/proizvodi" className="text-[var(--accent-primary)] hover:underline">
          Nazad na proizvode
        </Link>
      </div>
    )
  }

  const category = getCategoryById(product.category)

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <section className="px-4 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/proizvodi"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Nazad na proizvode
        </Link>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)]"
              onClick={() => {
                setLightboxIndex(0)
                setLightboxOpen(true)
              }}
            >
              <div className="flex h-full items-center justify-center">
                <ImageIcon className="h-16 w-16 text-[var(--text-tertiary)]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                <span className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  Klikni za pregled
                </span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              {product.images.slice(0, 5).map((_img, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setLightboxIndex(i)
                    setLightboxOpen(true)
                  }}
                  className="flex aspect-[4/3] w-20 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-card)] transition-colors hover:border-[var(--border-accent)]"
                >
                  <ImageIcon className="h-6 w-6 text-[var(--text-tertiary)]" />
                </button>
              ))}
            </div>
          </div>

          <div>
            {category && (
              <span className="mb-3 inline-block rounded-full bg-[var(--accent-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--accent-primary)]">
                {category.name}
              </span>
            )}

            <h1 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              {product.title}
            </h1>

            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              {product.longDescription}
            </p>

            <div className="mt-8">
              <h3 className="mb-3 font-display text-lg font-semibold text-[var(--text-primary)]">
                {content.products.details.features}
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[var(--text-secondary)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {product.materials.length > 0 && (
              <div className="mt-8">
                <h3 className="mb-3 font-display text-lg font-semibold text-[var(--text-primary)]">
                  {content.products.details.materials}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material) => (
                    <span
                      key={material}
                      className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-sm text-[var(--text-secondary)]"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8">
              <span className="text-[var(--text-secondary)]">
                Kontaktirajte nas za cenu
              </span>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--accent-primary)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
              >
                {content.products.details.inquiry}
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--border-subtle)] px-6 py-3 text-sm font-medium text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--border-accent)] hover:text-[var(--accent-primary)]"
              >
                {content.nav.contact}
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="mb-8 font-display text-2xl font-bold text-[var(--text-primary)]">
              Slični proizvodi
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <ProductLightbox
        images={product.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </section>
  )
}
