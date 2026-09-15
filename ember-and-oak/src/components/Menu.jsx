import React, { useState } from 'react'
import { categories, menuItems } from '../data/menu'
import Reveal from './Reveal'

export default function Menu() {
  const [active, setActive] = useState(categories[0])
  const items = menuItems.filter((item) => item.category === active)

  return (
    <section id="menu" className="py-20 sm:py-24 md:py-36 px-4 sm:px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <Reveal className="max-w-3xl menu-heading-lockup">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="label-caps text-terracotta mb-5">The Menu / 2026</p>
              <h2 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.88] tracking-[-0.055em]">
                Made to<br /><em className="text-terracotta">linger.</em>
              </h2>
            </div>
            <span className="menu-index hidden sm:block" aria-hidden="true">02</span>
          </div>
          <p className="mt-7 max-w-md text-charcoal/60 text-base md:text-lg leading-relaxed">
            Familiar plates, turned up a little. Pick a mood, then stay for another round.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 sm:mt-14 -mx-4 px-4 sm:mx-0 sm:px-0 flex flex-nowrap sm:flex-wrap gap-x-7 gap-y-3 overflow-x-auto border-b border-charcoal/15 pb-4 sm:pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`label-caps pb-1 transition-colors duration-300 border-b-2 ${
                  active === cat
                    ? 'text-terracotta border-terracotta'
                    : 'text-charcoal/45 border-transparent hover:text-charcoal/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={active} className="menu-fade mt-4 max-w-4xl menu-card-stack">
          <div className="menu-card-stamp">EMBER / OAK<br /><span>EST. 2018</span></div>
          {items.map((item, index) => (
            <div key={item.id} className={`menu-item-card py-6 ${index !== 0 ? 'border-t border-charcoal/10' : ''}`}>
              <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-x-3 sm:gap-x-4 gap-y-1">
                <span className="font-display italic text-clay text-sm shrink-0">
                  {String(item.id).padStart(2, '0')}
                </span>

                <div className="flex items-baseline gap-2">
                  <h3 className="font-display text-xl md:text-2xl text-charcoal">{item.name}</h3>
                  {item.veg && (
                    <span
                      className="inline-flex items-center justify-center w-3.5 h-3.5 border border-green-700 shrink-0"
                      aria-label="Vegetarian"
                      title="Vegetarian"
                    >
                      <span className="block w-1.5 h-1.5 rounded-full bg-green-700" />
                    </span>
                  )}
                </div>

                <span className="hidden md:block flex-1 border-b border-dashed border-charcoal/25 translate-y-[-4px]" />

                <span className="label-caps text-charcoal shrink-0 ml-auto md:ml-0">
                  &#8377;{item.price}
                </span>
              </div>
              <p className="text-charcoal/60 text-sm md:text-base mt-2 pl-9 max-w-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
