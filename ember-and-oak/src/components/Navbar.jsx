import React, { useEffect, useState } from 'react'
import { MenuIcon, CloseIcon } from './Icons'
import { useReservation } from '../context/ReservationContext'

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Experience', href: '#experience' },
  { label: 'Visit', href: '#visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { open } = useReservation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const solid = scrolled || mobileOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
        solid ? 'bg-offwhite/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(74,65,60,0.12)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 h-16 sm:h-20">
        <a
          href="#hero"
          className={`font-display text-lg tracking-[0.08em] transition-colors duration-500 ${
            solid ? 'text-charcoal' : 'text-offwhite'
          }`}
        >
          Ember &amp; Oak
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`label-caps transition-colors duration-300 hover:text-terracotta ${
                solid ? 'text-charcoal/80' : 'text-offwhite/85'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={open}
            className={`hidden md:inline-flex label-caps px-5 py-2.5 border transition-colors duration-300 ${
              solid
                ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-offwhite'
                : 'border-offwhite/70 text-offwhite hover:bg-offwhite hover:text-charcoal'
            }`}
          >
            Book a Table
          </button>

          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden p-1 transition-colors duration-300 ${solid ? 'text-charcoal' : 'text-offwhite'}`}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`lg:hidden overflow-hidden bg-offwhite transition-[max-height,opacity] duration-500 ease-editorial ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 pb-8 pt-2 gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="label-caps text-charcoal/85 py-3 border-b border-charcoal/10"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false)
              open()
            }}
            className="label-caps mt-5 px-5 py-3 bg-terracotta text-offwhite text-center"
          >
            Book a Table
          </button>
        </nav>
      </div>
    </header>
  )
}
