import React from 'react'
import Frame from './Frame'
import Reveal from './Reveal'
import { galleryImages } from '../data/gallery'

const spanClass = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  small: '',
}

function GalleryTile({ image, delay }) {
  return (
    <Reveal delay={delay} className={`group relative overflow-hidden ${spanClass[image.span]}`}>
      <Frame
        src={image.src}
        alt={image.alt}
        className="h-full w-full min-h-[220px]"
        imgClassName="transition-transform duration-700 ease-editorial group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/0 to-charcoal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="absolute bottom-4 left-4 label-caps text-offwhite opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        {image.alt}
      </span>
    </Reveal>
  )
}

export default function Gallery() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <Reveal className="max-w-lg mb-14">
          <p className="label-caps text-terracotta mb-5">The Space</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1]">
            A room worth lingering in.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-[220px] sm:auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {galleryImages.map((image, i) => (
            <GalleryTile key={image.alt} image={image} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}
