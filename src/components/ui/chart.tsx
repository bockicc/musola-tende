import * as React from 'react'
import { cn } from '@/lib/cn'

const ChartContext = React.createContext<{ config: Record<string, { label: string; color?: string }> }>({
  config: {},
})

export function useChart() {
  return React.useContext(ChartContext)
}

export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { config?: Record<string, { label: string; color?: string }> }
>(({ className, config = {}, children, ...props }, ref) => {
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        className={cn('w-full', className)}
        {...props}
      >
        {children}
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = 'ChartContainer'

export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: 'line' | 'dot' | 'dashed'
  }
>(({ className, hideLabel, hideIndicator, indicator = 'dot', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border border-neutral-800 bg-neutral-900/90 px-3 py-2 text-sm shadow-xl backdrop-blur-sm',
        className,
      )}
      {...props}
    />
  )
})
ChartTooltipContent.displayName = 'ChartTooltipContent'

export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { hideIcon?: boolean; nameKey?: string }
>(({ className, hideIcon, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center gap-4 text-sm text-neutral-400', className)}
      {...props}
    />
  )
})
ChartLegendContent.displayName = 'ChartLegendContent'

export const ChartTooltip = ChartTooltipContent

export const ChartLegend = ChartLegendContent

export const ChartStyle = (_: { config: Record<string, { label: string; color?: string }> }) => null

export type ChartConfig = Record<string, { label: string; color?: string }>
