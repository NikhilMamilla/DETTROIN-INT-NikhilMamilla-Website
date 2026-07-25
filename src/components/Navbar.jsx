import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/site'
import logo from '../assets/images/Excellence-Logo.png'
import { IconFacebook, IconInstagram, IconMail, IconPhone, IconYoutube } from './icons'

const SOCIAL_LINKS = [
  { label: 'Facebook', href: SITE.social.facebook, icon: IconFacebook },
  { label: 'Instagram', href: SITE.social.instagram, icon: IconInstagram },
  { label: 'YouTube', href: SITE.social.youtube, icon: IconYoutube },
]

const ACADEMICS_MENU = [
  { label: 'Pre Primary School', to: '/academics/pre-primary' },
  { label: 'Primary School', to: '/academics/primary' },
  { label: 'Middle School', to: '/academics/middle' },
  { label: 'Daycare', to: '/academics/daycare' },
]

const ADMISSIONS_MENU = [
  { label: 'Admission Enquiry Form', to: '/admissions#enquiry-form' },
  { label: 'Admission Procedure', to: '/admissions#admission-procedure' },
]

const MAIN_LINKS = NAV_LINKS.filter((link) => !['/academics', '/admissions'].includes(link.to))

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="relative z-40 bg-white shadow-card">
        {/* Top bar — hidden on mobile */}
        <div className="hidden md:block relative overflow-hidden bg-gradient-to-r from-amber-400 via-gold-400 to-orange-400 text-ink-900">
          <div className="absolute inset-y-0 left-10 w-48 -skew-x-12 bg-white/25 blur-xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/60" />
          <div className="container-page relative flex min-h-10 flex-row items-center justify-between py-2 text-sm font-bold">
            <div className="flex items-center gap-4">
              <a
                href={SITE.phoneHref}
                className="group inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/40 px-3 py-1.5 text-xs shadow-sm backdrop-blur transition hover:bg-white/65"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-900 text-gold-300 transition group-hover:scale-110">
                  <IconPhone className="h-3 w-3" />
                </span>
                <span>{SITE.phone}</span>
              </a>
              {SITE.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/40 px-3 py-1.5 text-xs shadow-sm backdrop-blur transition hover:bg-white/65"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-900 text-gold-300 transition group-hover:scale-110">
                    <IconMail className="h-3 w-3" />
                  </span>
                  <span className="max-w-[15rem] truncate">{email}</span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-ink-900">Follow Us:</span>
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-900 text-gold-300 ring-1 ring-white/50 transition hover:bg-white hover:text-ink-900"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div className="flex h-16 w-full items-center justify-between gap-4 px-5 sm:px-8">
          <NavLink to="/" className="group flex min-w-0 flex-1 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-50 p-1 shadow-card ring-1 ring-gold-100 transition group-hover:scale-105">
              <img src={logo} alt={SITE.name} className="h-full w-full object-contain" />
            </span>
            <span className="font-display text-base font-extrabold leading-tight text-primary-900">
              Excellence International
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-gold-600">School</span>
            </span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden flex-[1.7] items-center justify-center gap-3 lg:flex xl:gap-4">
            <NavLink to="/" end className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-extrabold transition ${isActive ? 'bg-primary-900 text-white shadow-card' : 'text-ink-700 hover:bg-primary-50 hover:text-primary-800'}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `whitespace-nowrap rounded-full px-4 py-2 text-sm font-extrabold transition ${isActive ? 'bg-primary-900 text-white shadow-card' : 'text-ink-700 hover:bg-primary-50 hover:text-primary-800'}`}>
              About Us
            </NavLink>

            <div className="group relative">
              <NavLink to="/academics" className={({ isActive }) => `inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-extrabold transition ${isActive ? 'bg-primary-900 text-white shadow-card' : 'text-ink-700 hover:bg-primary-50 hover:text-primary-800'}`}>
                Academics <span className="text-xs transition group-hover:rotate-180">▾</span>
              </NavLink>
              {/* pt-2 bridge prevents gap from closing the dropdown */}
              <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-xl border border-primary-100/60 bg-white py-1.5 shadow-lg">
                  {ACADEMICS_MENU.map((item) => (
                    <NavLink key={item.to} to={item.to} className="block px-4 py-2.5 text-sm font-semibold text-ink-700 transition hover:bg-gold-50 hover:text-primary-900">{item.label}</NavLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <NavLink to="/admissions" className={({ isActive }) => `inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-extrabold transition ${isActive ? 'bg-primary-900 text-white shadow-card' : 'text-ink-700 hover:bg-primary-50 hover:text-primary-800'}`}>
                Admissions <span className="text-xs transition group-hover:rotate-180">▾</span>
              </NavLink>
              {/* pt-2 bridge prevents gap from closing the dropdown */}
              <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-xl border border-primary-100/60 bg-white py-1.5 shadow-lg">
                  {ADMISSIONS_MENU.map((item) => (
                    <NavLink key={item.to} to={item.to} className="block px-4 py-2.5 text-sm font-semibold text-ink-700 transition hover:bg-gold-50 hover:text-primary-900">{item.label}</NavLink>
                  ))}
                </div>
              </div>
            </div>

            {MAIN_LINKS.filter((link) => !['/', '/about'].includes(link.to)).map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-extrabold transition ${isActive ? 'bg-primary-900 text-white shadow-card' : 'text-ink-700 hover:bg-primary-50 hover:text-primary-800'}`}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden flex-1 justify-end lg:flex">
            <a href="/admissions" className="rounded-full bg-gold-400 px-5 py-2 text-sm font-bold text-ink-900 shadow-soft transition hover:bg-gold-500">
              Apply Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-100 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-ink-800 transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-ink-800 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-ink-800 transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${open ? 'visible' : 'invisible'}`}
        onClick={() => setOpen(false)}
      >
        {/* Blur backdrop */}
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />

        {/* Full-screen centered menu */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-8 transition-all duration-300 ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo */}
          <div className="mb-8 flex items-center gap-3">
            <img src={logo} alt={SITE.name} className="h-10 w-10 rounded-xl object-contain bg-white/10 p-1" />
            <span className="font-display text-sm font-extrabold leading-tight text-white">
              Excellence International<span className="block text-xs font-bold uppercase tracking-widest text-gold-400">School</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex w-full max-w-xs flex-col items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.to} className="w-full">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block w-full rounded-2xl px-6 py-3.5 text-center text-base font-bold transition ${isActive ? 'bg-white text-primary-900' : 'text-white hover:bg-white/10'}`
                  }
                >
                  {link.label}
                </NavLink>
                {link.to === '/academics' && (
                  <div className="mb-1 flex flex-col items-center gap-0.5">
                    {ACADEMICS_MENU.map((item) => (
                      <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="block w-full rounded-xl px-6 py-2 text-center text-sm font-semibold text-white/70 hover:text-white">
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
                {link.to === '/admissions' && (
                  <div className="mb-1 flex flex-col items-center gap-0.5">
                    {ADMISSIONS_MENU.map((item) => (
                      <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="block w-full rounded-xl px-6 py-2 text-center text-sm font-semibold text-white/70 hover:text-white">
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <a href="/admissions" onClick={() => setOpen(false)} className="mt-6 block w-full max-w-xs rounded-2xl bg-gold-400 px-6 py-3.5 text-center text-base font-bold text-ink-900 transition hover:bg-gold-500">
            Apply Now
          </a>
        </div>
      </div>
    </>
  )
}
