import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/site'
import logo from '../assets/images/Logo2.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? 'bg-white/95 shadow-card backdrop-blur' : 'bg-white'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt={SITE.name} className="h-11 w-11 rounded-full object-cover" />
          <span className="font-display text-lg font-bold leading-tight text-primary-900">
            Excellence
            <span className="block text-xs font-medium tracking-wide text-ink-400">
              INTERNATIONAL SCHOOL
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-ink-600 hover:bg-ink-50 hover:text-primary-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/admissions"
            className="rounded-full bg-gold-400 px-5 py-2.5 text-sm font-bold text-ink-900 shadow-soft transition hover:bg-gold-500"
          >
            Apply Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-100 lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-ink-800 transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-ink-800 transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-ink-800 transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <nav className="container-page flex flex-col gap-1 pb-5">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-semibold ${
                  isActive ? 'bg-primary-50 text-primary-700' : 'text-ink-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="/admissions"
            className="mt-2 rounded-xl bg-gold-400 px-4 py-3 text-center text-sm font-bold text-ink-900"
          >
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  )
}
