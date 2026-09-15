import React from 'react'
import { PinIcon, ClockIcon, PhoneIcon, MailIcon, DirectionsIcon } from './Icons'
import Reveal from './Reveal'

export default function Location() {
  return (
    <section id="visit" className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-content mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
        <Reveal>
          <p className="label-caps text-terracotta mb-5">Visit</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-12">
            Find us in the hills.
          </h2>

          <div className="space-y-9">
            <div className="flex gap-4">
              <PinIcon className="text-clay shrink-0 mt-1" />
              <div>
                <p className="label-caps text-charcoal/50 mb-1.5">Address</p>
                <p className="text-charcoal/85 leading-relaxed">
                  Ember &amp; Oak
                  <br />
                  Bhimtal
                  <br />
                  Uttarakhand 263136
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ClockIcon className="text-clay shrink-0 mt-1" />
              <div>
                <p className="label-caps text-charcoal/50 mb-1.5">Hours</p>
                <p className="text-charcoal/85 leading-relaxed">
                  Mon &mdash; Thu &nbsp; 8:00 AM &mdash; 10:00 PM
                  <br />
                  Fri &mdash; Sun &nbsp; 8:00 AM &mdash; 11:30 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <PhoneIcon className="text-clay shrink-0 mt-1" />
              <div>
                <p className="label-caps text-charcoal/50 mb-1.5">Contact</p>
                <p className="text-charcoal/85">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MailIcon className="text-clay shrink-0 mt-1" />
              <div>
                <p className="label-caps text-charcoal/50 mb-1.5">Email</p>
                <p className="text-charcoal/85">hello@emberandoak.com</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative aspect-[4/5] md:aspect-auto md:h-full bg-charcoal overflow-hidden flex items-center justify-center">
            <span className="absolute w-56 h-56 rounded-full border border-offwhite/10" />
            <span className="absolute w-80 h-80 rounded-full border border-offwhite/10" />
            <span className="absolute w-[26rem] h-[26rem] rounded-full border border-offwhite/10" />

            <div className="relative flex flex-col items-center text-center px-8">
              <PinIcon className="text-terracotta" width="30" height="30" />
              <p className="label-caps text-offwhite mt-5">Find Us</p>
              <p className="text-offwhite/60 text-sm mt-2">Bhimtal, Uttarakhand</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bhimtal+Uttarakhand+263136"
                target="_blank"
                rel="noreferrer"
                className="label-caps mt-8 inline-flex items-center gap-2 px-6 py-3 border border-offwhite/50 text-offwhite hover:bg-offwhite hover:text-charcoal transition-colors duration-300"
              >
                <DirectionsIcon />
                Get Directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
