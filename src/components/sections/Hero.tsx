import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'

import content from '@/data/content.sr'
import heroImg from '@/assets/hero.jpg'

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[var(--bg-primary)] pt-36 pb-24">
      <div className="pointer-events-none absolute inset-0 bg-noise" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-3/5">
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              <motion.span
                variants={itemVariants}
                className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-secondary)]"
              >
                {content.hero.eyebrow}
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-display text-4xl font-bold text-[var(--text-primary)] sm:text-5xl lg:text-display-xl"
              >
                {content.hero.title1}
                <br />
                {content.hero.title2}
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="my-8 h-[2px] w-16 animate-gold-rule-in bg-[var(--accent-secondary)]"
              />

              <motion.p
                variants={itemVariants}
                className="max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
              >
                {content.hero.subtitle}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/kontakt"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-[var(--accent-primary)] px-7 text-base font-semibold text-white shadow-lg shadow-[var(--accent-glow)] transition-all duration-200 hover:opacity-90"
                >
                  {content.hero.ctaPrimary}
                </Link>
                <Link
                  to="/proizvodi"
                  className="ml-2 mt-1 inline-flex h-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-transparent px-5 text-sm font-semibold text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--text-tertiary)]"
                >
                  {content.hero.ctaSecondary}
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs tracking-wide text-[var(--text-tertiary)]"
              >
                <span className="text-[var(--accent-secondary)]/60">1968</span>
                <span className="text-[var(--accent-secondary)]/30">•</span>
                <span><span className="text-[var(--accent-secondary)]/60">56+</span> Godina iskustva</span>
                <span className="text-[var(--accent-secondary)]/30">•</span>
                <span><span className="text-[var(--accent-secondary)]/60">1000+</span> Realizovanih projekata</span>
                <span className="text-[var(--accent-secondary)]/30">•</span>
                <span><span className="text-[var(--accent-secondary)]/60">100%</span> Izrada po meri</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="hidden lg:relative lg:block lg:w-2/5">
            <div className="relative -mr-32 h-[580px] overflow-hidden rounded-l-3xl bg-[var(--bg-secondary)]">
              <img
                src={heroImg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover brightness-[0.4] contrast-[1.1] grayscale-[0.2]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] from-0% via-[var(--bg-primary)/60] via-35% to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] from-5% via-[var(--bg-primary)/50] via-35% to-transparent" />

              <div className="absolute inset-0 bg-noise opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
