import React from 'react'
import { LeafIcon, HourglassIcon, CupIcon, ChairIcon } from './Icons'
import Reveal from './Reveal'

const features = [
  {
    icon: LeafIcon,
    title: 'Seasonal',
    text: 'Ingredients that follow the season.',
  },
  {
    icon: HourglassIcon,
    title: 'Small Batch',
    text: 'Thoughtfully prepared, never rushed.',
  },
  {
    icon: CupIcon,
    title: 'Slow Brew',
    text: 'Coffee brewed with patience.',
  },
  {
    icon: ChairIcon,
    title: 'Stay Awhile',
    text: 'A space designed for conversations.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-charcoal text-offwhite py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <Reveal className="max-w-lg mb-16 md:mb-20">
          <p className="label-caps text-clay mb-5">The Experience</p>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.15]">
            Every detail, considered.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={i * 90}>
                <Icon className="text-clay" />
                <h3 className="font-display text-xl mt-6">{feature.title}</h3>
                <p className="text-offwhite/60 mt-2 text-sm leading-relaxed max-w-[20ch]">
                  {feature.text}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
