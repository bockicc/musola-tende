import { useEffect, useCallback } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import content from '@/data/content.sr'
import { X } from 'lucide-react'
import logoSrc from '@/assets/logopng.png'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const links = [
  { label: content.nav.home, href: '/' },
  { label: content.nav.products, href: '/proizvodi' },
  { label: content.nav.gallery, href: '/galerija' },
  { label: content.nav.about, href: '/o-nama' },
  { label: content.nav.contact, href: '/kontakt' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useLockBodyScroll(isOpen)
  const focusTrapRef = useFocusTrap(isOpen)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[var(--bg-primary)]"
        >
          <div
            ref={focusTrapRef}
            className="flex h-full flex-col px-6 py-8"
          >
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={onClose}
                className="block shrink-0"
              >
                <img
                  src={logoSrc}
                  alt="Musola Tende"
                  className="h-[42px] w-auto brightness-[1.2] contrast-[1.1]"
                />
              </Link>
              <button
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-all duration-200 hover:rotate-90 hover:text-white"
                aria-label="Zatvori meni"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-16 flex flex-col gap-2"
            >
              {links.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    to={link.href}
                    onClick={onClose}
                    className="block py-3 font-display text-[28px] font-semibold text-[var(--text-secondary)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
              className="mt-auto space-y-3 pb-8"
            >
              <div className="h-px bg-[var(--border-subtle)]" />
              <p className="text-sm text-[var(--text-secondary)]">
                {content.contact.info.address}
              </p>
              <div className="flex gap-4 text-sm">
                <a
                  href={`tel:${content.contact.info.phone1.replace(/\s/g, '')}`}
                  className="text-[var(--accent-primary)] hover:underline"
                >
                  {content.contact.info.phone1}
                </a>
                <span className="text-[var(--text-tertiary)]">·</span>
                <a
                  href={`mailto:${content.contact.info.email}`}
                  className="text-[var(--accent-primary)] hover:underline"
                >
                  {content.contact.info.email}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
