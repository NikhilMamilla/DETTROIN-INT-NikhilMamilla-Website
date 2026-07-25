import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { IconClock, IconMail, IconPhone, IconPin } from '../components/icons'
import { SITE } from '../data/site'

const BANNER = 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Contact-_us.png.webp'

const CARDS = [
  { icon: IconPin,   title: 'Address',      lines: [SITE.address] },
  { icon: IconPhone, title: 'Phone no.',     lines: [SITE.phone] },
  { icon: IconMail,  title: 'Email',         lines: SITE.emails },
  { icon: IconClock, title: 'Office Hours',  lines: ['Mon – Sat: 8:00 AM – 3:30 PM'] },
]

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`

function ConnectForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-[0_8px_48px_rgba(28,35,84,0.13)] ring-1 ring-ink-100">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-600">✓</div>
        <h3 className="text-xl font-bold text-primary-900">Message Sent!</h3>
        <p className="mt-2 text-sm text-ink-400">Thank you for reaching out. We'll get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}
      className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_48px_rgba(28,35,84,0.13)] ring-1 ring-ink-100">
      <div className="h-1 w-full bg-gradient-to-r from-gold-400 via-primary-500 to-primary-800" />
      <div className="relative overflow-hidden bg-primary-900 px-7 pb-6 pt-7">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold-400/10 blur-2xl" />
        <h3 className="relative font-serif text-2xl font-bold italic text-white">Connect With Us</h3>
        <p className="relative mt-1 text-xs text-primary-200/70">We'd love to hear from you.</p>
      </div>
      <div className="space-y-3 px-7 py-6">
        <input required type="text" placeholder="Your Name"
          className="w-full rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
        <input required type="email" placeholder="Your Email"
          className="w-full rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
        <input required type="tel" placeholder="Phone Number"
          className="w-full rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
        <textarea required rows={4} placeholder="Message Type here"
          className="w-full resize-none rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
        <button type="submit"
          className="group relative w-full overflow-hidden rounded-lg bg-primary-900 py-3.5 text-sm font-extrabold tracking-wide text-white transition hover:bg-primary-800 active:scale-[0.98]">
          <span className="relative z-10">Send</span>
          <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
        </button>
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <>
      {/* ── Banner ─────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col overflow-hidden w-full" style={{ minHeight: '80vh' }}>
        <img src={BANNER} alt="Contact Us – Excellence International School" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary-900/40" />
        <div className="relative flex flex-1" />
        <div className="relative w-full overflow-hidden leading-none" style={{ height: '80px' }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-[200%]" preserveAspectRatio="none" style={{ height: '80px', animation: 'wavePan 6s linear infinite' }}>
            <path d="M0,40 C120,70 240,10 360,40 C480,70 600,10 720,40 C840,70 960,10 1080,40 C1200,70 1320,10 1440,40 C1560,70 1680,10 1800,40 C1920,70 2040,10 2160,40 C2280,70 2400,10 2520,40 C2640,70 2760,10 2880,40 L2880,80 L0,80 Z" fill="white" />
          </svg>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-[200%]" preserveAspectRatio="none" style={{ height: '80px', opacity: 0.4, animation: 'wavePan 9s linear infinite reverse' }}>
            <path d="M0,55 C90,30 180,65 360,50 C540,35 720,65 900,48 C1080,30 1260,65 1440,50 C1620,35 1800,65 1980,50 C2160,30 2340,65 2520,50 C2700,35 2820,60 2880,55 L2880,80 L0,80 Z" fill="white" />
          </svg>
          <style>{`@keyframes wavePan { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        </div>
      </section>

      {/* ── Info Cards ─────────────────────────────────────────────────── */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ icon: Icon, title, lines }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-ink-100 p-6 text-center shadow-card">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-primary-900">{title}</h3>
                {lines.map((l) => (
                  <p key={l} className="mt-1 break-words text-sm text-ink-400">{l}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Map + Form ─────────────────────────────────────────────── */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="mb-4 font-serif text-xl font-bold text-primary-900">Reach us</h2>
              <div className="h-80 overflow-hidden rounded-2xl shadow-card lg:h-[420px]">
                <iframe
                  title="Excellence International School location"
                  src={mapSrc}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ConnectForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
