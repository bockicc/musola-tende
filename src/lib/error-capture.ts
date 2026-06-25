export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public statusCode?: number,
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export function captureError(error: unknown, context?: string): void {
  const message = error instanceof Error ? error.message : String(error)
  const stack = error instanceof Error ? error.stack : undefined

  console.error(
    JSON.stringify({
      level: 'error',
      message,
      stack,
      context,
      timestamp: new Date().toISOString(),
    }),
  )
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError
}
