import { Link } from '@tanstack/react-router'
import content from '@/data/content.sr'

interface ErrorPageProps {
  title?: string
  message?: string
  status?: number
}

export function ErrorPage({
  title = 'Došlo je do greške',
  message = 'Molimo pokušajte ponovo ili nas kontaktirajte.',
  status,
}: ErrorPageProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      {status && (
        <span className="mb-4 font-display text-8xl font-bold text-[var(--accent-primary)]">
          {status}
        </span>
      )}
      <h1 className="mb-4 font-display text-3xl font-bold text-white">
        {title}
      </h1>
      <p className="mb-8 max-w-md text-neutral-400">{message}</p>
      <Link
        to="/"
        className="rounded-lg bg-[var(--accent-primary)] px-6 py-3 font-medium text-white transition-colors hover:opacity-90"
      >
        {content.nav.home}
      </Link>
    </div>
  )
}

export function NotFoundPage() {
  return (
    <ErrorPage
      status={404}
      title="Stranica nije pronađena"
      message="Izgleda da stranica koju tražite ne postoji ili je uklonjena."
    />
  )
}
