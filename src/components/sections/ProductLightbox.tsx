import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Image } from 'lucide-react'

import { cn } from '@/lib/cn'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import type { Product } from '@/types'
import content from '@/data/content.sr'

interface ProductLightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
  product?: Product
}

export function ProductLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  product,
}: ProductLightboxProps) {
  useLockBodyScroll(isOpen)
  const focusTrapRef = useFocusTrap(isOpen)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
          break
        case 'ArrowRight':
          onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
          break
      }
    },
    [currentIndex, images.length, onClose, onNavigate],
  )

  useEffect(() => {
    if (!isOpen) return
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleKeyDown])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            ref={focusTrapRef}
            initial={{ scale: 0.96, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 12, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-[min(92vw,960px)] flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] sm:flex-row"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white transition-all duration-200 hover:rotate-90 hover:bg-black/60"
              aria-label="Zatvori"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[var(--bg-secondary)] sm:aspect-auto sm:w-[70%] sm:min-h-[400px]">
              <Image className="h-16 w-16 text-[var(--text-tertiary)] opacity-40" />

              <button
                type="button"
                onClick={() =>
                  onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
                }
                className={cn(
                  'absolute left-3 top-1/2 z-10 -translate-y-1/2',
                  'flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60',
                )}
                aria-label="Prethodna"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() =>
                  onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
                }
                className={cn(
                  'absolute right-3 top-1/2 z-10 -translate-y-1/2',
                  'flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60',
                )}
                aria-label="Sledeća"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {product && (
              <div className="flex w-full flex-col justify-center space-y-4 p-6 sm:w-[30%]">
                <h3 className="font-display text-lg font-semibold text-white">
                  {product.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {product.description}
                </p>

                {product.material && (
                  <span className="inline-block w-fit rounded-full border border-[var(--border-accent)] px-3 py-1 text-xs font-medium text-[var(--accent-primary)]">
                    {product.material}
                  </span>
                )}

                <a
                  href="/kontakt"
                  className="mt-auto inline-flex h-11 items-center justify-center rounded-lg bg-[var(--accent-primary)] px-6 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                >
                  {content.products.details.inquiry}
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('modal-root')!,
  )
}
