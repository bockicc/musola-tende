import { useState, useRef } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { cn } from '@/lib/cn'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import content from '@/data/content.sr'
import { MobileMenu } from './MobileMenu'
import { Menu } from 'lucide-react'
import logoSrc from '@/assets/logopng.png'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isScrolled } = useScrollPosition()
  const location = useLocation()

  const links = [
    { label: content.nav.home, href: '/' },
    { label: content.nav.products, href: '/proizvodi' },
    { label: content.nav.gallery, href: '/galerija' },
    { label: content.nav.about, href: '/o-nama' },
    { label: content.nav.contact, href: '/kontakt' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  const navRef = useRef<HTMLElement>(null)

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl shadow-sm'
            : 'bg-transparent',
        )}
        style={{ height: isScrolled ? '60px' : '76px' }}
      >
        <div className="mx-auto flex h-full items-center justify-between px-6 lg:px-10">
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

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors duration-200',
                  isActive(link.href)
                    ? 'text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 transition-transform duration-200 ease-out',
                    isActive(link.href)
                      ? 'w-[calc(100%-16px)] bg-[var(--accent-primary)]'
                      : 'w-0 bg-[var(--accent-secondary)] group-hover:w-[calc(100%-16px)]',
                  )}
                  style={
                    !isActive(link.href)
                      ? { transform: 'scaleX(0)', transformOrigin: 'left' }
                      : undefined
                  }
                  onMouseEnter={(e) => {
                    if (!isActive(link.href)) {
                      e.currentTarget.style.transform = 'scaleX(1)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.href)) {
                      e.currentTarget.style.transform = 'scaleX(0)'
                    }
                  }}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/kontakt"
              className="hidden rounded-lg bg-[var(--accent-primary)] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 md:inline-flex"
            >
              {content.nav.cta}
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] md:hidden"
              aria-label="Otvori meni"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
