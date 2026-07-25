import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/site'
import logo from '../assets/images/Logo2.png'
import { IconArrowRight, IconFacebook, IconInstagram, IconMail, IconPhone, IconPin, IconYoutube } from './icons'

const SOCIAL_LINKS = [
  { label: 'Facebook', href: SITE.social.facebook, icon: IconFacebook },
  { label: 'Instagram', href: SITE.social.instagram, icon: IconInstagram },
  { label: 'YouTube', href: SITE.social.youtube, icon: IconYoutube },
]

const ACADEMIC_LINKS = [
  { label: 'Pre-Primary School', to: '/academics#pre-primary' },
  { label: 'Primary School', to: '/academics#primary' },
  { label: 'Middle School', to: '/academics#middle' },
  { label: 'Daycare', to: '/academics#daycare' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-900 text-white">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/70 to-transparent" />

      <div className="container-page relative py-16">
        <div className="mb-12 grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-soft backdrop-blur md:grid-cols-3">
          <a href={SITE.phoneHref} className="group flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4 transition hover:bg-white/[0.1]">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-400 text-ink-900 shadow-card transition group-hover:scale-110">
              <IconPhone className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-widest text-gold-200">Call Us</span>
              <span className="mt-1 block text-sm font-bold">{SITE.phone}</span>
            </span>
          </a>

          <a href={`mailto:${SITE.emails[0]}`} className="group flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4 transition hover:bg-white/[0.1]">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-400 text-ink-900 shadow-card transition group-hover:scale-110">
              <IconMail className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-widest text-gold-200">Email</span>
              <span className="mt-1 block truncate text-sm font-bold">{SITE.emails[0]}</span>
            </span>
          </a>

          <div className="flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-400 text-ink-900 shadow-card">
              <IconPin className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-widest text-gold-200">Visit Us</span>
              <span className="mt-1 block text-sm font-bold">{SITE.city}</span>
            </span>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.8fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-soft backdrop-blur">
            <Link to="/" className="block rounded-2xl bg-white p-4 shadow-card transition hover:-translate-y-1">
              <img src={logo} alt={SITE.name} className="h-auto w-full max-w-sm object-contain" />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-primary-100">
              Excellence International School is one of the leading schools in Aligarh, Uttar
              Pradesh, committed to nurturing young minds through academic excellence, modern
              learning methods, and holistic development.
            </p>

            <div className="mt-6 inline-flex rounded-full bg-gold-400 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-ink-900 shadow-card">
              Admissions Open {SITE.admissionSession}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="text-base font-extrabold text-white">Follow Us:</span>
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-900 shadow-card ring-1 ring-white/40 transition hover:-translate-y-1 hover:bg-gold-400 hover:text-ink-900"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-extrabold uppercase tracking-[0.25em] text-gold-300">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-primary-100">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="group inline-flex items-center gap-2 transition hover:text-gold-300">
                    <IconArrowRight className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-extrabold uppercase tracking-[0.25em] text-gold-300">
              Academics
            </h4>
            <ul className="space-y-3 text-sm text-primary-100">
              {ACADEMIC_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="group inline-flex items-center gap-2 transition hover:text-gold-300">
                    <IconArrowRight className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-extrabold uppercase tracking-[0.25em] text-gold-300">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-primary-100">
              <li className="flex gap-3">
                <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                <a href={SITE.phoneHref} className="transition hover:text-gold-300">
                  {SITE.phone}
                </a>
              </li>
              {SITE.emails.map((email) => (
                <li key={email} className="flex gap-3">
                  <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                  <a href={`mailto:${email}`} className="break-all transition hover:text-gold-300">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/10 py-6 text-center text-xs font-medium text-primary-100">
        © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
      </div>
    </footer>
  )
}
