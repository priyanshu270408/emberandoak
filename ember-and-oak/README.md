# Ember & Oak

A premium, single-page cafe/restaurant website concept for a fictional brand, **Ember & Oak** —
"Slow mornings. Warm plates. Good company."

Frontend-only demo built with React + Vite + Tailwind CSS. No backend, database, or auth —
the reservation flow is a fully validated, client-side modal.

## Tech stack

- **React 18** + **Vite 5** — component architecture and dev/build tooling
- **Tailwind CSS 3** — utility-first styling, themed with the brand's 5-color palette
- Hand-rolled inline SVG icon set (no icon library dependency)
- A small `IntersectionObserver` hook powers the on-scroll reveal animations — no animation
  library required

## Project structure

```
src/
  components/       Navbar, Hero, Story, SignatureDish, Menu, Experience,
                     Gallery, Reviews, Location, ReservationCTA,
                     ReservationModal, Footer, Reveal, Frame, Icons
  context/          ReservationContext — shared modal open/close state
  hooks/            useReveal — scroll-triggered reveal animation hook
  data/             menu.js, reviews.js, gallery.js — content kept out of the UI layer
  index.css         Tailwind layers + custom keyframes/utilities
  App.jsx           Composes all sections
```

## Main features

- Sticky navbar that solidifies on scroll, with an animated mobile menu
- Full-viewport cinematic hero with a staged load-in sequence
- Editorial brand-story section with an offset image frame and stat row
- Overlapping split layout for the signature dish
- Filterable menu presented as a numbered, printed-menu-style list (not generic cards),
  with a smooth fade transition between categories
- Dark-mode "Experience" band with four line-icon feature blocks
- Masonry-style gallery with hover captions
- Testimonial section with large editorial pull-quotes
- Location + hours section with a stylised "Find Us" card (frontend-only — no map API — with a
  working "Get Directions" link out to Google Maps)
- Full-width reservation CTA that opens a modal with real client-side validation and a success state
- Scroll-reveal animations throughout, all disabled automatically for users with
  `prefers-reduced-motion` set

## Running locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To produce a production build:

```bash
npm run build
npm run preview   # optional local check of the production build
```

## Deploying to Vercel

The repo includes a `vercel.json` and needs no further configuration:

1. Push this project to a GitHub/GitLab/Bitbucket repo (or run `vercel` from the CLI inside this folder).
2. Import the repo in the [Vercel dashboard](https://vercel.com/new), or run `vercel --prod` from the CLI.
3. Vercel will detect the Vite framework, run `npm run build`, and serve the `dist` folder automatically.

## Notes

- All imagery is sourced from Unsplash via direct CDN URLs. Each image is wrapped in a small
  fallback component that swaps to a branded placeholder if a URL ever fails to resolve, so the
  layout never shows a broken-image icon.
- Every dish, review, and gallery caption lives in `src/data/` — update the arrays there to
  change content without touching any component markup.
