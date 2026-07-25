# Excellence International School — Website Redesign

A modern, responsive redesign of [excellenceinternationalschool.com](https://excellenceinternationalschool.com/), built for the Website Redesign Challenge assignment.

- **Full Name:** _\<your name here>_
- **Intern ID:** _\<your intern ID here>_
- **Email Address:** _\<your email here>_
- **GitHub Username:** _\<your GitHub username here>_
- **Selected Website:** [excellenceinternationalschool.com](https://excellenceinternationalschool.com/) — Excellence International School, Aligarh
- **Live Demo Link:** _\<add your Vercel URL after deploying>_

## Technologies Used

- **React 18 + Vite** — component-based SPA, fast dev/build tooling
- **React Router v6** — client-side routing across 8 real pages (Home, About, Academics, Admissions, Facilities, Gallery, Blog, Contact)
- **Tailwind CSS** — utility-first styling with a custom design token set (colors, fonts, shadows, animations) in `tailwind.config.js`
- **Plain IntersectionObserver** (no animation library) for on-scroll reveal animations
- Deployed on **Vercel**

## Project Structure

```
src/
  assets/          # images scraped/downloaded from the source site
  components/      # reusable UI: Navbar, Footer, EnquiryForm, ImageCard, Reveal, icons, etc.
  data/            # site-wide content & config (site.js, content.js) — single source of truth
  pages/           # one file per route
  App.jsx          # route table + shared layout
```

## Key Improvements Made

1. **Real navigation instead of anchor scrolling** — Academics, Admissions, and Facilities were dropdown menus scrolling within one long homepage on the original; each is now its own dedicated, deep-linkable page.
2. **Componentized, reusable code** — one `EnquiryForm`, `ImageCard`, `PageHero`, and `FaqAccordion` component are shared across every page instead of duplicating markup.
3. **Modern visual design** — a fresh indigo/gold palette, `Plus Jakarta Sans` + `Inter` type pairing, soft shadows, and scroll-reveal animations replace the original dark-green/yellow Elementor theme.
4. **Responsive from the ground up** — mobile nav drawer, fluid grids (1 → 2 → 4 columns), and a masonry gallery with lightbox, verified at 390px / 768px / 1440px widths.
5. **Accessibility & performance basics** — semantic headings, alt text on every image, lazy-loaded gallery images, `aria-label`/`aria-expanded` on interactive controls, and no client-side dependency beyond React Router.
6. **Real content, not placeholder text** — page copy, academic-stage details, testimonials, and blog post titles were sourced from the live site; photography is the school's own gallery/classroom photos (stock human "testimonial avatar" photos from the original were intentionally replaced with initials to avoid misrepresenting real people).

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Deployment

Deployed via Vercel: connect this repository, framework preset **Vite**, build command `npm run build`, output directory `dist`.
