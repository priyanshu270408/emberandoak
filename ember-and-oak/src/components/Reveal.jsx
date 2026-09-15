import React from 'react'
import { useReveal } from '../hooks/useReveal'

/**
 * Wraps children in a div that fades/slides into place the first time it
 * enters the viewport. `delay` accepts a Tailwind-friendly ms value.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
