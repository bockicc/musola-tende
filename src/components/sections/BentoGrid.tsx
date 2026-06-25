import { motion } from 'framer-motion'
import { Ruler, Shield, Clock } from 'lucide-react'

const cellVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export function BentoGrid() {
  return (
    <section className="bg-[var(--bg-primary)] bg-noise py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={cellVariants}
            className="group col-span-1 row-span-2 flex flex-col rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-accent)] md:col-span-2"
          >
            <Ruler className="mb-4 h-6 w-6 text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--accent-primary)]" />
            <h3 className="font-display text-xl text-white">Izrada po meri</h3>
            <p className="mt-2 max-w-md text-sm text-[var(--text-secondary)]">
              Svaka tenda, pergola ili roletna izrađuje se prema tačnim dimenzijama i potrebama vašeg prostora.
              Naš tim izlazi na teren, uzima precizne mere i predlaže optimalno rešenje.
            </p>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={cellVariants}
            className="group flex flex-col rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-accent)]"
          >
            <Shield className="mb-4 h-6 w-6 text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--accent-primary)]" />
            <h3 className="font-display text-lg text-white">Materijali vrhunskih proizvođača</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Irisgiovanardi, Sauleda, Dickson — evropska platna koja garantuju dugotrajnost i otpornost na
              vremenske uslove.
            </p>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={cellVariants}
            className="group flex flex-col rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-accent)]"
          >
            <Clock className="mb-4 h-6 w-6 text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--accent-primary)]" />
            <h3 className="font-display text-lg text-white">56 godina iskustva</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Od 1968. godine prenosimo zanat sa generacije na generaciju, garantujući provereni kvalitet.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
