import { useState } from 'react'
import { SITE } from '../data/site'

const GRADES = [
  'Play Group',
  'Nursery',
  'LKG',
  'UKG',
  'Class I',
  'Class II',
  'Class III',
  'Class IV',
  'Class V',
  'Class VI',
  'Class VII',
  'Class VIII',
]

export default function EnquiryForm({ className = '' }) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className={`rounded-3xl bg-white p-8 text-center shadow-soft ${className}`}>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-600">
          ✓
        </div>
        <h3 className="text-xl font-bold text-primary-900">Thank you!</h3>
        <p className="mt-2 text-sm text-ink-400">
          Your enquiry has been received. Our admissions team will call you shortly, or you can
          reach us directly at{' '}
          <a href={SITE.phoneHref} className="font-semibold text-primary-600">
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_48px_rgba(28,35,84,0.13)] ring-1 ring-ink-100 ${className}`}>

      {/* Decorative top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-gold-400 via-primary-500 to-primary-800" />

      {/* Header */}
      <div className="relative bg-primary-900 px-7 pt-7 pb-6 overflow-hidden">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold-400/10 blur-2xl" />
        <div className="absolute -left-6 bottom-0 h-20 w-20 rounded-full bg-primary-500/20 blur-xl" />
        <p className="relative text-[10px] font-bold uppercase tracking-[0.35em] text-gold-400 mb-1">
          Admissions Open {SITE.admissionSession}
        </p>
        <h3 className="relative font-serif text-3xl font-bold italic text-white leading-tight">
          Quick Enquiry
        </h3>
        <p className="relative mt-1 text-xs text-primary-200/70">Fill in your details — we'll reach out within 24 hrs.</p>
      </div>

      {/* Fields */}
      <div className="space-y-3 px-7 py-6">
        <select
          required
          defaultValue=""
          className="w-full rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-sm text-ink-700 outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
        >
          <option value="" disabled>Session: 2026-2027</option>
          <option value="2026-2027">2026-2027</option>
          <option value="2027-2028">2027-2028</option>
        </select>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input required type="text" placeholder="Your Name"
            className="w-full rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
          <input required type="tel" pattern="[0-9+ ]{10,15}" placeholder="Phone Number"
            className="w-full rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
        </div>

        <input required type="email" placeholder="Your Email"
          className="w-full rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />

        <select required defaultValue=""
          className="w-full rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-sm text-ink-700 outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
        >
          <option value="" disabled>Select a Grade</option>
          {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>

        <textarea rows={3} placeholder="Message (optional)"
          className="w-full resize-none rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />

        <button type="submit"
          className="group relative w-full overflow-hidden rounded-lg bg-gold-400 py-3.5 text-sm font-extrabold tracking-wide text-ink-900 transition hover:bg-gold-500 active:scale-[0.98]"
        >
          <span className="relative z-10">Send Enquiry →</span>
          <span className="absolute inset-0 -translate-x-full bg-gold-300/40 transition-transform duration-300 group-hover:translate-x-0" />
        </button>

        <p className="text-center text-[11px] text-ink-400">
          Or call us directly:{' '}
          <a href={SITE.phoneHref} className="font-semibold text-primary-600 hover:underline">{SITE.phone}</a>
        </p>
      </div>
    </form>
  )
}
