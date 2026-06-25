import * as React from 'react'
import { GripVertical } from 'lucide-react'
import { cn } from '@/lib/cn'

const ResizablePanelGroup = ({
  className,
  direction = 'horizontal',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  direction?: 'horizontal' | 'vertical'
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isResizing, setIsResizing] = React.useState(false)
  const activeHandleRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    if (!isResizing) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || activeHandleRef.current === null) return

      const container = containerRef.current
      const children = Array.from(
        container.children,
      ) as HTMLElement[]
      const handleIndex = activeHandleRef.current
      const prevPanel = children[handleIndex - 1]
      const nextPanel = children[handleIndex + 1]

      if (!prevPanel || !nextPanel) return

      const rect = container.getBoundingClientRect()

      if (direction === 'horizontal') {
        const totalWidth = rect.width
        const mouseX = e.clientX - rect.left
        const prevWidth = (mouseX / totalWidth) * 100
        const nextWidth = 100 - prevWidth

        if (prevWidth > 10 && nextWidth > 10) {
          prevPanel.style.width = `${prevWidth}%`
          nextPanel.style.width = `${nextWidth}%`
        }
      } else {
        const totalHeight = rect.height
        const mouseY = e.clientY - rect.top
        const prevHeight = (mouseY / totalHeight) * 100
        const nextHeight = 100 - prevHeight

        if (prevHeight > 10 && nextHeight > 10) {
          prevPanel.style.height = `${prevHeight}%`
          nextPanel.style.height = `${nextHeight}%`
        }
      }
    }

    const handleMouseUp = () => {
      setIsResizing(false)
      activeHandleRef.current = null
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing, direction])

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex',
        direction === 'horizontal' ? 'flex-row' : 'flex-col',
        className,
      )}
      {...props}
    />
  )
}
ResizablePanelGroup.displayName = 'ResizablePanelGroup'

const ResizablePanel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('overflow-auto', className)}
    {...props}
  />
))
ResizablePanel.displayName = 'ResizablePanel'

const ResizableHandle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    withHandle?: boolean
  }
>(({ className, withHandle, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative flex w-px items-center justify-center bg-neutral-700 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90',
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-neutral-700 bg-neutral-800">
        <GripVertical className="h-2.5 w-2.5 text-white" />
      </div>
    )}
  </div>
))
ResizableHandle.displayName = 'ResizableHandle'

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
