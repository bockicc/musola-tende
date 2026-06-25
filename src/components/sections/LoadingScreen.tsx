import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('musola-loaded')
    if (hasSeen) {
      setVisible(false)
      return
    }

    const timer = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('musola-loaded', 'true')
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-primary)]"
        >
          <div className="text-center">
            <div className="mb-4">
              <span className="font-display text-3xl font-bold text-white">
                <span className="text-[var(--accent-primary)]">Musola</span>
                <span className="text-[var(--text-secondary)]"> Tende</span>
              </span>
            </div>
            <div className="mx-auto h-1 w-32 overflow-hidden rounded-full bg-[var(--surface-card)]">
              <motion.div
                className="h-full rounded-full bg-[var(--accent-primary)]"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </div>
            <p className="mt-4 text-sm text-[var(--text-tertiary)]">
              Od 1968. godine
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
