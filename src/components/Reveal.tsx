import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'span' | 'li'
}) {
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-[1100ms] ease-out motion-reduce:transition-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
