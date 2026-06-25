import content from '@/data/content.sr'
import { ContactForm } from '@/components/sections/ContactForm'
import { ContactCards } from '@/components/sections/ContactCards'

export default function ContactPage() {
  return (
    <section className="px-4 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            {content.contact.title}{' '}
            <span className="text-[var(--accent-primary)]">{content.contact.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            {content.contact.subtitle}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactCards />
          </div>
        </div>
      </div>
    </section>
  )
}
