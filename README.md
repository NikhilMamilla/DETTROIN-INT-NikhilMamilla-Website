# Excellence International School — Website Redesign

> **Dettroin Full Stack Developer Internship — Round 1: Website Redesign Challenge**

---

## Candidate Details

| Field | Details |
|---|---|
| **Full Name** | Nikhil |
| **Intern ID** | *(add your Intern ID)* |
| **Email Address** | *(add your email)* |
| **GitHub Username** | *(add your GitHub username)* |
| **Selected Website** | [excellenceinternationalschool.com](https://excellenceinternationalschool.com/) |
| **Live Demo Link** | *(add your Vercel URL after deploying)* |

---

## Project Overview

A complete modern redesign of the **Excellence International School, Aligarh** website. The original site was built on WordPress/Elementor with a heavy, slow, and non-responsive layout. This redesign replaces it with a fast, clean, fully responsive React + Tailwind CSS SPA with smooth animations, proper routing, and a professional design system.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI architecture |
| **Vite** | Fast dev server and production bundler |
| **React Router v6** | Client-side routing with nested routes |
| **Tailwind CSS v3** | Utility-first styling with custom design tokens |
| **IntersectionObserver API** | Scroll-reveal animations (no library dependency) |
| **Vercel** | Deployment and hosting |

---

## Key Improvements Made

### 1. Complete Page Architecture
The original had everything crammed into one long homepage. This redesign has **12 dedicated pages** with clean URLs:

- `/` — Home
- `/about` — About Us
- `/academics` — Academics overview
- `/academics/pre-primary` — Pre Primary School
- `/academics/primary` — Primary School
- `/academics/middle` — Middle School
- `/academics/daycare` — Daycare
- `/admissions` — Admission Enquiry Form + Procedure
- `/facilities` — School Facilities
- `/gallery` — Photo Gallery with lightbox
- `/blog` — Blog listing + 3 full blog post pages
- `/contact` — Contact Us

### 2. Modern Design System
- Custom color palette: deep indigo (`primary-900`) + gold accent
- Typography: `Plus Jakarta Sans` + `Playfair Display` (serif headings)
- Consistent spacing, card shadows, border radii, and hover effects
- Animated wave dividers between sections

### 3. Responsive Navigation
- Desktop: sticky navbar with hover dropdown menus (Academics + Admissions) with hover-bridge fix so dropdowns don't close prematurely
- Mobile: full-screen overlay menu with blur backdrop, accordion sub-menus

### 4. Performance
- Lazy-loaded gallery images
- No heavy animation libraries — pure CSS transitions + IntersectionObserver
- Vite code splitting per route

### 5. Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`)
- `aria-label`, `aria-expanded` on all interactive controls
- Alt text on every image
- Keyboard-navigable gallery lightbox (arrow keys + Escape)
- Custom styled scrollbar

### 6. Gallery
- Masonry column layout (2 → 3 → 4 columns)
- Full lightbox with keyboard navigation and prev/next controls

### 7. Blog
- 3 full blog posts with complete article pages, FAQ accordions, comment forms, and navigation between posts

### 8. Forms
- Admission Enquiry Form with grade/session selector
- Contact "Connect With Us" form
- Smooth hash-scroll to form sections from navbar links

---

## Project Structure

```
nikhil/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   ├── blog/          # blog images
│   │   ├── gallery/       # school gallery photos
│   │   └── images/        # UI images & icons
│   ├── components/
│   │   ├── EnquiryForm.jsx
│   │   ├── FaqAccordion.jsx
│   │   ├── FloatingActions.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroBannerSlider.jsx
│   │   ├── icons.jsx
│   │   ├── ImageCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── Reveal.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionHeading.jsx
│   │   └── ValuesStrip.jsx
│   ├── data/
│   │   ├── content.js     # academic stages, WHY_US, FAQs, testimonials
│   │   └── site.js        # school contact info, nav links, social links
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── Admissions.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost1.jsx
│   │   ├── BlogPost2.jsx
│   │   ├── BlogPost3.jsx
│   │   ├── Contact.jsx
│   │   ├── Daycare.jsx
│   │   ├── Facilities.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── Middle.jsx
│   │   ├── NotFound.jsx
│   │   ├── PrePrimary.jsx
│   │   └── Primary.jsx
│   ├── App.jsx            # route table + shared layout
│   ├── index.css          # Tailwind directives + custom scrollbar
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment (Vercel)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repository
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy — live URL will be generated automatically

---

## Screenshots

> *(Add screenshots of Home, Academics, Gallery, and Contact pages after deployment)*

---

*Built with ❤️ for the Dettroin Full Stack Developer Internship — Round 1*
