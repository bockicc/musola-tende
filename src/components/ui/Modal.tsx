import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/cn'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function Modal({ isOpen, onClose, children, className, size = 'md' }: ModalProps) {
  const focusTrapRef = useFocusTrap(isOpen)
  useLockBodyScroll(isOpen)

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

  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-[95vw] h-[95vh]',
  }

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={focusTrapRef}
        className={cn(
          'relative z-10 w-full overflow-auto rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl',
          sizeClasses[size],
          className,
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
          aria-label="Zatvori"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  )

  const root = document.getElementById('modal-root')
  if (root) return createPortal(modal, root)
  return modal
}
