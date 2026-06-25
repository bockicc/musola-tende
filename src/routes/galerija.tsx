import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import content from '@/data/content.sr'
import { references } from '@/data/references'
import { Modal } from '@/components/ui/Modal'

export default function GalleryPage() {
  const [selectedRef, setSelectedRef] = useState<string | null>(null)

  return (
    <section className="px-4 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            {content.gallery.title}{' '}
            <span className="text-[var(--accent-primary)]">{content.gallery.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            {content.gallery.subtitle}
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {references.map((ref) => (
            <div
              key={ref.id}
              onClick={() => setSelectedRef(ref.id)}
              className="group mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] transition-all duration-200 hover:border-[var(--border-accent)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[var(--surface-hover)]">
                <img src={ref.image} alt={ref.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-[var(--text-primary)]">{ref.name}</h3>
                <p className="mt-1 text-sm text-[var(--text-tertiary)]">
                  {ref.category} &middot; {ref.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--accent-primary)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
          >
            {content.gallery.cta}
          </Link>
        </div>
      </div>

      <Modal
        isOpen={selectedRef !== null}
        onClose={() => setSelectedRef(null)}
        size="lg"
      >
        {selectedRef && (
          <div className="p-6">
            <div className="aspect-video overflow-hidden rounded-lg bg-[var(--surface-hover)]">
              <img
                src={references.find((r) => r.id === selectedRef)?.image}
                alt={references.find((r) => r.id === selectedRef)?.name ?? ''}
                className="h-full w-full object-cover"
              />
            </div>
            {(() => {
              const ref = references.find((r) => r.id === selectedRef)
              if (!ref) return null
              return (
                <div className="mt-4">
                  <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
                    {ref.name}
                  </h2>
                  <p className="mt-1 text-[var(--text-secondary)]">
                    {ref.category} &middot; {ref.year}
                  </p>
                </div>
              )
            })()}
          </div>
        )}
      </Modal>
    </section>
  )
}
