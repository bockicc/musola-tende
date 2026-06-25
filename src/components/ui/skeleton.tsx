import * as React from 'react'
import { cn } from '@/lib/cn'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-skeleton-pulse rounded-lg',
        'bg-gradient-to-r from-[#161B21] via-[#1C2229] to-[#161B21]',
        'bg-[length:200%_100%]',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
