import React from 'react'
import { InstagramIcon, FacebookIcon } from './Icons'

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Experience', href: '#experience' },
  { label: 'Visit', href: '#visit' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 pb-14 border-b border-offwhite/15">
          <div className="max-w-xs">
            <p className="font-display text-2xl tracking-[0.06em]">Ember &amp; Oak</p>
            <p className="text-offwhite/60 mt-4 leading-relaxed">
              Slow mornings. Warm plates. Good company.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Ember & Oak on Instagram"
                className="text-offwhite/70 hover:text-clay transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Ember & Oak on Facebook"
                className="text-offwhite/70 hover:text-clay transition-colors"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="label-caps text-offwhite/50 mb-5">Explore</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-offwhite/80 hover:text-clay transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-caps text-offwhite/50 mb-5">Visit</p>
              <ul className="space-y-3 text-offwhite/80">
                <li>18 Taj East Gate Road</li>
                <li>Agra, Uttar Pradesh</li>
                <li>+91 98765 43210</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-offwhite/45 text-sm pt-8">&copy; 2026 Ember &amp; Oak</p>
      </div>
    </footer>
  )
}
