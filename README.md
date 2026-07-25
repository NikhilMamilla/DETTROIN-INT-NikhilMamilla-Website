# Excellence International School — Website Redesign

> **Dettroin Web Development Internship — Round 1: Website Redesign Challenge**
> [www.dettroin.com](https://www.dettroin.com) | request@dettroin.com

---

## Candidate Details

| Field | Details |
|---|---|
| **Full Name** | Nikhil Mamilla |
| **Email** | 23211a05m7@bvrit.ac.in |
| **Current Organisation & Role** | Student — Web Development Intern Applicant |
| **Selected Website** | [excellenceinternationalschool.com](https://excellenceinternationalschool.com/) |
| **GitHub Profile** | *(add your GitHub profile URL)* |
| **Repository Link** | *(add your GitHub repo URL)* |
| **Live Demo (Vercel)** | *(add your Vercel URL after deploying)* |
| **LinkedIn** | *(add your LinkedIn URL)* |

---

## Project Overview

A complete modern redesign of the **Excellence International School, Aligarh** website. The original site was built on WordPress/Elementor — heavy, slow, and non-responsive. This redesign replaces it with a fast, clean, fully responsive **React + Tailwind CSS SPA** with smooth animations, proper routing, and a professional design system.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI architecture |
| **Vite** | Fast dev server and production bundler |
| **React Router v6** | Client-side routing with 12 dedicated pages |
| **Tailwind CSS v3** | Utility-first styling with custom design tokens |
| **IntersectionObserver API** | Scroll-reveal animations (zero library overhead) |
| **Vercel** | Deployment and hosting |

---

## Pages Built

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/academics` | Academics Overview |
| `/academics/pre-primary` | Pre Primary School |
| `/academics/primary` | Primary School |
| `/academics/middle` | Middle School |
| `/academics/daycare` | Daycare |
| `/admissions` | Admission Enquiry + Procedure |
| `/facilities` | School Facilities |
| `/gallery` | Photo Gallery with Lightbox |
| `/blog` | Blog Listing + 3 Full Post Pages |
| `/contact` | Contact Us |

---

## Key Improvements Made

1. **12 dedicated pages** — original had everything crammed into one long homepage; every section now has its own clean URL
2. **Modern design system** — deep indigo + gold palette, `Plus Jakarta Sans` + `Playfair Display` typography, soft shadows, and animated wave section dividers
3. **Responsive navigation** — sticky navbar with hover-bridge dropdown fix, mobile full-screen overlay menu with blur backdrop
4. **Scroll-reveal animations** — `IntersectionObserver`-based `Reveal` component, no animation library needed
5. **Masonry gallery + lightbox** — keyboard navigable (arrow keys + Escape), lazy-loaded images
6. **3 full blog posts** — complete article pages with FAQ accordions, comment forms, and post navigation
7. **Working forms** — Admission Enquiry Form with grade selector, Contact "Connect With Us" form, smooth hash-scroll from navbar links
8. **Custom scrollbar** — styled to match brand colors (primary navy + gold on hover)
9. **Clean SVG floating action buttons** — WhatsApp + Phone, crisp at all resolutions
10. **Fully accessible** — semantic HTML, `aria-label`/`aria-expanded`, alt text on all images

---

## Project Structure

```
src/
├── assets/
│   ├── blog/          # blog post images
│   ├── gallery/       # school gallery photos
│   └── images/        # UI images
├── components/        # Navbar, Footer, EnquiryForm, Reveal, FloatingActions, icons…
├── data/
│   ├── content.js     # academic stages, FAQs, testimonials
│   └── site.js        # school info, nav links, social links
├── pages/             # one file per route (16 pages)
└── App.jsx            # route table + shared layout
```

---

## Getting Started

```bash
npm install       # install dependencies
npm run dev       # start local dev server at localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

## Deployment (Vercel)

1. Push repo to GitHub
2. Import on [vercel.com](https://vercel.com) → Framework: **Vite** → Build: `npm run build` → Output: `dist`
3. Deploy — live URL generated automatically

---

## Self Declaration

I confirm that this project is my own work. I have not copied another candidate's project. I understand that plagiarism or submitting someone else's work may result in immediate disqualification.

---

*Built for the Dettroin Web Development Internship — Round 1 | Team Dettroin*
