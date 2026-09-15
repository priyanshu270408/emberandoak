import React, { useState } from 'react'

/**
 * Drop-in <img> replacement. If the source ever fails to load (offline demo,
 * rotated CDN asset, etc.) it swaps to a soft brand-toned gradient with the
 * alt text, instead of the browser's broken-image icon.
 */
export default function Frame({ src, alt, className = '', imgClassName = '', eager = false }) {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-clay/60 via-beige/50 to-charcoal/20 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="label-caps text-charcoal/60 px-6 text-center">{alt}</span>
      </div>
    )
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        onError={() => setBroken(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}
