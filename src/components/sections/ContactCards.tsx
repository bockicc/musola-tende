import { MapPin, Phone, Mail, Clock } from 'lucide-react'

import { cn } from '@/lib/cn'
import content from '@/data/content.sr'

interface CardData {
  icon: typeof MapPin
  title: string
  primary: string
  secondary?: string
  href?: string
}

const cards: CardData[] = [
  {
    icon: MapPin,
    title: content.contact.cards.address,
    primary: content.contact.info.address,
    href: content.contact.info.mapsLink,
  },
  {
    icon: Phone,
    title: content.contact.cards.phone,
    primary: content.contact.info.phone1,
    secondary: content.contact.info.phone2,
    href: `tel:${content.contact.info.phone1}`,
  },
  {
    icon: Mail,
    title: content.contact.cards.email,
    primary: content.contact.info.email,
    href: `mailto:${content.contact.info.email}`,
  },
  {
    icon: Clock,
    title: content.contact.cards.hours,
    primary: content.contact.info.workingHours,
  },
]

export function ContactCards() {
  return (
    <div className="space-y-4">
      {cards.map((card, index) => {
        const Icon = card.icon
        const Wrapper = card.href ? 'a' : 'div'

        return (
          <Wrapper
            key={index}
            {...(card.href ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={cn(
              'flex items-start gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5',
              'transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-accent)]',
              card.href && 'cursor-pointer',
            )}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent-primary)]/10">
              <Icon className="h-5 w-5 text-[var(--accent-primary)]" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                {card.title}
              </p>
              <p className="mt-1 text-sm text-white">{card.primary}</p>
              {card.secondary && (
                <p className="mt-0.5 text-sm text-white">{card.secondary}</p>
              )}
            </div>
          </Wrapper>
        )
      })}
    </div>
  )
}
