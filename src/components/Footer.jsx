import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/site'
import logo from '../assets/images/Logo2.png'
import { IconFacebook, IconInstagram, IconMail, IconPhone, IconPin, IconYoutube } from './icons'

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

const ChevronRight = () => (
  <svg className="h-3 w-3 shrink-0 text-gold-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-page py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr]">

          {/* Brand */}
          <div>
            <Link to="/">
              <img src={logo} alt={SITE.name} className="h-16 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-200 max-w-xs">
              Excellence International School is one of the leading schools in Aligarh, Uttar Pradesh, committed to nurturing young minds through academic excellence and holistic development.
            </p>
            <div className="mt-4 inline-block rounded-full bg-gold-400 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-ink-900">
              Admissions Open {SITE.admissionSession}
            </div>
            <div className="mt-5 flex items-center gap-2">
              <span className="text-xs font-bold text-primary-200">Follow Us:</span>
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold-400 hover:text-ink-900">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-gold-400">Our Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to} className="flex items-center gap-2">
                  <ChevronRight />
                  <Link to={l.to} className="text-sm text-primary-200 transition hover:text-gold-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-gold-400">Our Academics</h4>
            <ul className="space-y-2.5 mb-5">
              {ACADEMIC_LINKS.map((l) => (
                <li key={l.label} className="flex items-center gap-2">
                  <ChevronRight />
                  <Link to={l.to} className="text-sm text-primary-200 transition hover:text-gold-300">{l.label}</Link>
                </li>
              ))}
            </ul>
            <Link to="/admissions" className="inline-block rounded-full bg-gold-400 px-4 py-2 text-xs font-bold text-ink-900 transition hover:bg-gold-500">
              Quick Links
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-gold-400">Contact Us</h4>
            <ul className="space-y-4 text-sm text-primary-200">
              <li>
                <p className="text-xs font-bold uppercase tracking-wide text-white mb-1">Address</p>
                <div className="flex gap-2">
                  <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <span>{SITE.address}</span>
                </div>
              </li>
              <li>
                <p className="text-xs font-bold uppercase tracking-wide text-white mb-1">Phone no.</p>
                <div className="flex gap-2">
                  <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <a href={SITE.phoneHref} className="transition hover:text-gold-300">{SITE.phone}</a>
                </div>
              </li>
              <li>
                <p className="text-xs font-bold uppercase tracking-wide text-white mb-1">Email</p>
                <div className="flex flex-col gap-1">
                  {SITE.emails.map((email) => (
                    <div key={email} className="flex gap-2">
                      <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                      <a href={`mailto:${email}`} className="text-gold-300 transition hover:text-gold-200 text-xs">{email}</a>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/20 py-4 text-center text-xs text-primary-300">
        © {new Date().getFullYear()} Excellence International School. All Rights Reserved.
      </div>
    </footer>
  )
}
