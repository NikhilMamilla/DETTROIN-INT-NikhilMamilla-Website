import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/site'
import logo from '../assets/images/Logo2.png'

const ACADEMIC_LINKS = [
  { label: 'Pre-Primary School', to: '/academics#pre-primary' },
  { label: 'Primary School', to: '/academics#primary' },
  { label: 'Middle School', to: '/academics#middle' },
  { label: 'Daycare', to: '/academics#daycare' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-100">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="mb-4 flex items-center gap-3">
            <img src={logo} alt={SITE.name} className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-base font-bold text-white">{SITE.name}</span>
          </Link>
          <p className="text-sm leading-relaxed text-ink-400">
            One of the leading schools in Aligarh, Uttar Pradesh, committed to nurturing young
            minds through academic excellence, modern learning methods, and holistic development.
          </p>
          <div className="mt-5 flex gap-3">
            {Object.entries(SITE.social).map(([key, href]) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={key}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-gold-400 hover:text-ink-900"
              >
                {key === 'facebook' ? 'f' : key === 'instagram' ? '◎' : '▶'}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-gold-400">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-ink-400">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-gold-400">
            Academics
          </h4>
          <ul className="space-y-2 text-sm text-ink-400">
            {ACADEMIC_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-gold-400">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm text-ink-400">
            <li>{SITE.address}</li>
            <li>
              <a href={SITE.phoneHref} className="transition hover:text-white">
                {SITE.phone}
              </a>
            </li>
            {SITE.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`} className="break-all transition hover:text-white">
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
      </div>
    </footer>
  )
}
