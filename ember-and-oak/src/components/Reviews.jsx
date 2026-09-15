import React from 'react'
import { reviews } from '../data/reviews'
import Reveal from './Reveal'

export default function Reviews() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 bg-beige/15">
      <div className="max-w-content mx-auto">
        <Reveal className="max-w-2xl mb-16 md:mb-20">
          <p className="label-caps text-terracotta mb-5">Reviews</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.15]">
            People come for the food. They stay for the feeling.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              delay={i * 100}
              className={`md:pl-10 ${i !== 0 ? 'md:border-l md:border-charcoal/15' : ''}`}
            >
              <span className="font-display text-5xl text-terracotta/50 leading-none">&ldquo;</span>
              <p className="font-display text-xl md:text-2xl leading-snug text-charcoal mt-2">
                {review.quote}
              </p>
              <p className="label-caps text-charcoal/50 mt-6">{review.name}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
