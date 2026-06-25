import content from '@/data/content.sr'
import { AboutSplit } from '@/components/sections/AboutSplit'

export default function AboutPage() {
  return (
    <section className="pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            {content.nav.about}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Upoznajte tim koji stoji iza vrhunskih solucija za zaštitu od sunca.
          </p>
        </div>

        <AboutSplit />
      </div>
    </section>
  )
}
