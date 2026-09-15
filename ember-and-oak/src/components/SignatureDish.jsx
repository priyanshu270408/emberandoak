import React from 'react'
import Frame from './Frame'
import Reveal from './Reveal'

export default function SignatureDish() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 bg-beige/15">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="section-marker mb-5"><span className="section-marker-line" /><p className="label-caps text-terracotta">The Signature / 01</p></div>
        </Reveal>

        <div className="grid md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-7">
            <Frame
              src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=1400&q=80"
              alt="Charred butter garlic ravioli, plated"
              className="aspect-[5/4] w-full"
            />
          </Reveal>

          <Reveal
            delay={150}
            className="md:col-span-6 md:-ml-16 relative z-10 bg-charcoal text-offwhite p-9 md:p-12 mt-[-2.5rem] md:mt-0 mx-4 md:mx-0"
          >
            <span className="label-caps inline-block border border-beige/40 text-beige px-3 py-1.5 mb-6">
              Chef&apos;s Favorite
            </span>

            <h3 className="font-display text-3xl md:text-4xl leading-tight">
              Charred Butter Garlic Ravioli
            </h3>

            <p className="mt-5 text-offwhite/75 leading-relaxed max-w-sm">
              Hand-folded ravioli, roasted garlic butter, parmesan, herbs and a touch of smoked
              chilli.
            </p>

            <div className="relative mt-9 inline-flex items-center justify-center w-24 h-24">
              <span className="absolute inset-0 rounded-full border border-terracotta/50" />
              <span className="font-display text-2xl text-clay">&#8377;495</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
