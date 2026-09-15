import React from 'react'
import Frame from './Frame'
import Reveal from './Reveal'

const stats = [
  { value: '2026', label: 'Founded' },
  { value: '12+', label: 'Seasonal dishes' },
  { value: '7 AM', label: 'Doors open' },
]

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-content mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <Reveal className="order-2 md:order-1">
          <p className="label-caps text-terracotta mb-5">Our Story</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] max-w-md">
            Made for the moments between.
          </h2>
          <p className="mt-7 max-w-md text-charcoal/75 leading-relaxed">
            Ember &amp; Oak was created around a simple idea — good food doesn&apos;t need to be
            complicated. We bring seasonal ingredients, thoughtful cooking and genuine hospitality
            together under one warm roof.
          </p>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className={i !== 0 ? 'pl-10 border-l border-charcoal/15' : ''}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl text-charcoal">{stat.value}</dd>
                <dd className="label-caps text-charcoal/50 mt-1">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="order-1 md:order-2 relative">
          <div className="absolute -top-5 -right-5 md:-top-8 md:-right-8 w-full h-full border border-beige" />
          <Frame
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
            alt="Morning light across the Ember & Oak dining counter"
            className="relative aspect-[4/5] w-[92%]"
          />
        </Reveal>
      </div>
    </section>
  )
}
