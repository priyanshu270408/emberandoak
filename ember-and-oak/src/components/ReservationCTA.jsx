import React from 'react'
import Frame from './Frame'
import Reveal from './Reveal'
import { useReservation } from '../context/ReservationContext'

export default function ReservationCTA() {
  const { open } = useReservation()

  return (
    <section className="relative py-32 md:py-44 px-6 md:px-10 overflow-hidden">
      <Frame
        src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1800&q=80"
        alt="Candlelit table set for an evening reservation"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-charcoal/85" />

      <Reveal className="relative max-w-content mx-auto text-center flex flex-col items-center">
        <h2 className="font-display uppercase text-offwhite text-5xl md:text-7xl leading-[1.02]">
          Your table
          <br />
          is waiting.
        </h2>
        <p className="text-offwhite/70 mt-6 text-lg">Come hungry. Stay awhile.</p>
        <button
          onClick={open}
          className="label-caps mt-10 px-9 py-4 bg-terracotta text-offwhite hover:bg-clay transition-colors duration-300"
        >
          Book a Table
        </button>
      </Reveal>
    </section>
  )
}
