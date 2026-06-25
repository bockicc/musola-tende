import { motion } from 'framer-motion'

import content from '@/data/content.sr'

export function AboutSplit() {
  return (
    <section className="bg-[var(--bg-primary)] py-20 pb-64">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="relative lg:sticky lg:top-32 lg:h-screen lg:w-[45vw] lg:self-start">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-[var(--surface-card)] to-[var(--bg-secondary)]">
              <img
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80&auto=format&fit=crop"
                alt="Premium pergola detalj - Musola Tende"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-16 lg:pl-16">
            {content.about.sections.map((section, index) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="font-mono text-5xl font-bold text-[var(--accent-secondary)] sm:text-6xl">
                  {section.number}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {section.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text-secondary)]">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
