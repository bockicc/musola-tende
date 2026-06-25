import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'

import { cn } from '@/lib/cn'
import content from '@/data/content.sr'
import tendaSrc from '@/assets/sl-pocetna/tenda.jpg'
import pergolaSrc from '@/assets/sl-pocetna/pergola.jpg'
import roletneSrc from '@/assets/sl-pocetna/roletne.jpg'
import zatvorenaTerasaSrc from '@/assets/sl-pocetna/zatvorena-terasa.jpg'

const sections = [
  { key: 'tende', imageLeft: true, isNew: false },
  { key: 'pergole', imageLeft: false, isNew: false },
  { key: 'roletne', imageLeft: true, isNew: false },
  { key: 'zatvaranje-terasa', imageLeft: false, isNew: true },
] as const

export function FeaturedCategory() {
  return (
    <>
      {sections.map(({ key, imageLeft, isNew }, index) => {
        const category = content.categories[key as keyof typeof content.categories]

        return (
          <section
            key={key}
            className={cn(
              'py-24',
              index % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-secondary)]',
            )}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: imageLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
                  className={cn(
                    'relative aspect-[4/3] overflow-hidden rounded-xl',
                    imageLeft ? 'md:order-1' : 'md:order-2',
                  )}
                >
                  {key === 'tende' ? (
                    <img
                      src={tendaSrc}
                      alt="Musola Tende - Tende"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : key === 'pergole' ? (
                    <img
                      src={pergolaSrc}
                      alt="Musola Tende - Pergole"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : key === 'roletne' ? (
                    <img
                      src={roletneSrc}
                      alt="Musola Tende - Roletne"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={zatvorenaTerasaSrc}
                      alt="Musola Tende - Zatvaranje terasa"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  {isNew && (
                    <span className="absolute left-4 top-4 z-10 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-medium text-gold-400">
                      Nova usluga
                    </span>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: imageLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={cn(imageLeft ? 'md:order-2' : 'md:order-1')}
                >
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--accent-secondary)]">
                    {category.name}
                  </p>
                  <h2 className="font-display text-3xl text-white">{category.name}</h2>
                  <p className="mt-4 text-[var(--text-secondary)]">{category.longDescription}</p>
                  <Link
                    to="/proizvodi"
                    search={{ kategorija: key }}
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-all duration-300 hover:text-[var(--accent-primary)]"
                  >
                    Istražite
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
