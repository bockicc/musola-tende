import { useState, useEffect, useRef } from 'react'
import { clamp } from '@/lib/utils'

export function useCountUp(
  end: number,
  duration: number = 2000,
  startOnView: boolean = true,
): { count: number; ref: React.RefObject<HTMLSpanElement | null> } {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(!startOnView)
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (!startOnView || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!started) return

    let startTime: number | null = null
    let raf: number

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = clamp(elapsed / duration, 0, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        raf = requestAnimationFrame(animate)
      }
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [started, end, duration])

  return { count, ref }
}
