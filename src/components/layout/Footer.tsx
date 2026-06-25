import { Link } from '@tanstack/react-router'
import content from '@/data/content.sr'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import logoSrc from '@/assets/logopng.png'

const productLinks = [
  { label: 'Tende', href: '/proizvodi', search: { kategorija: 'tende' as const } },
  { label: 'Pergole', href: '/proizvodi', search: { kategorija: 'pergole' as const } },
  { label: 'Roletne', href: '/proizvodi', search: { kategorija: 'roletne' as const } },
  { label: 'Zavese i venecijaneri', href: '/proizvodi', search: { kategorija: 'zavese' as const } },
  { label: 'Komarnici', href: '/proizvodi', search: { kategorija: 'komarnici' as const } },
  { label: 'Zatvaranje terasa', href: '/proizvodi', search: { kategorija: 'zatvaranje-terasa' as const } },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              to="/"
              className="block shrink-0"
            >
              <img
                src={logoSrc}
                alt="Musola Tende"
                className="h-[42px] w-auto brightness-[1.2] contrast-[1.1]"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              {content.footer.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
              {content.footer.productsTitle}
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    search={link.search}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
              {content.footer.companyTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/o-nama"
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                >
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  to="/galerija"
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                >
                  Galerija
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
              {content.footer.contactTitle}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                {content.contact.info.address}
              </li>
              <li>
                <a
                  href={`tel:${content.contact.info.phone1.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                  {content.contact.info.phone1}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${content.contact.info.phone2.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                  {content.contact.info.phone2}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${content.contact.info.email}`}
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                  {content.contact.info.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                {content.contact.info.workingHours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border-subtle)] px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-[var(--text-tertiary)] md:flex-row">
          <span>{content.footer.copyright}</span>
          <span>
            {content.footer.credit}
          </span>
        </div>
      </div>
    </footer>
  )
}
