import React from 'react'
import Frame from './Frame'
import { useReservation } from '../context/ReservationContext'

export default function Hero() {
  const { open } = useReservation()

  return (
    <section id="hero" className="relative h-screen h-[100svh] min-h-[640px] w-full overflow-hidden">
      <Frame
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
        alt="Warm, dimly lit dining room at Ember & Oak"
        className="absolute inset-0"
        imgClassName="scale-105"
        eager
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/30" />

      <div className="relative h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-28">
        <p className="hero-in label-caps text-beige mb-5" style={{ animationDelay: '150ms' }}>
          Est. 2026 &middot; Agra
        </p>

        <h1 className="font-display uppercase text-offwhite leading-[0.98] text-[15vw] sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="hero-in block" style={{ animationDelay: '300ms' }}>
            Good food.
          </span>
          <span className="hero-in block text-clay" style={{ animationDelay: '450ms' }}>
            Slow moments.
          </span>
        </h1>

        <p
          className="hero-in mt-7 max-w-md text-offwhite/80 text-base md:text-lg leading-relaxed"
          style={{ animationDelay: '650ms' }}
        >
          Seasonal plates, slow-brewed coffee, and warm conversations — served in a space designed
          to make you stay a little longer.
        </p>

        <div className="hero-in mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '800ms' }}>
          <button
            onClick={open}
            className="label-caps px-7 py-3.5 bg-terracotta text-offwhite hover:bg-clay transition-colors duration-300"
          >
            Book a Table
          </button>
          <a
            href="#menu"
            className="label-caps px-7 py-3.5 border border-offwhite/60 text-offwhite hover:bg-offwhite hover:text-charcoal transition-colors duration-300"
          >
            Explore Menu
          </a>
        </div>
      </div>

      <a
        href="#story"
        className="hero-in absolute bottom-8 right-6 md:right-10 flex flex-col items-center gap-2 text-offwhite/70 hover:text-offwhite transition-colors"
        style={{ animationDelay: '950ms' }}
        aria-label="Scroll to explore"
      >
        <span className="label-caps text-[10px] [writing-mode:vertical-rl]">Scroll to explore</span>
        <span className="scroll-cue w-px h-10 bg-current" />
      </a>
    </section>
  )
}
