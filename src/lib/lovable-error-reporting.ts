export function reportLovableError(error: unknown, info?: string): void {
  if (typeof window !== 'undefined' && 'lovable' in window) {
    try {
      const detail = {
        error: error instanceof Error ? error.message : String(error),
        info,
        url: window.location.href,
        timestamp: new Date().toISOString(),
      }
      window.dispatchEvent(
        new CustomEvent('lovable:error', { detail }),
      )
    } catch {
      console.error('Failed to report error to Lovable:', error)
    }
  }
}
