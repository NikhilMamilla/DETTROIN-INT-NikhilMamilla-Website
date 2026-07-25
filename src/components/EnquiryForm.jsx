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
    <form onSubmit={handleSubmit} className={`rounded-3xl bg-white shadow-soft ${className}`}>
      <div className="rounded-t-3xl bg-gradient-to-r from-primary-800 to-primary-600 px-6 py-5 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-300">
          Admissions Open {SITE.admissionSession}
        </p>
        <h3 className="text-lg font-bold">Quick Enquiry Form</h3>
      </div>
      <div className="space-y-3 p-6">
        <input
          required
          type="text"
          placeholder="Your Name"
          className="w-full rounded-xl border border-ink-100 px-4 py-3 text-sm outline-none transition focus:border-primary-400"
        />
        <input
          required
          type="email"
          placeholder="Your Email"
          className="w-full rounded-xl border border-ink-100 px-4 py-3 text-sm outline-none transition focus:border-primary-400"
        />
        <input
          required
          type="tel"
          pattern="[0-9+ ]{10,15}"
          placeholder="Phone Number"
          className="w-full rounded-xl border border-ink-100 px-4 py-3 text-sm outline-none transition focus:border-primary-400"
        />
        <select
          required
          defaultValue=""
          className="w-full rounded-xl border border-ink-100 px-4 py-3 text-sm text-ink-600 outline-none transition focus:border-primary-400"
        >
          <option value="" disabled>
            Select a Grade
          </option>
          {GRADES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <textarea
          rows={3}
          placeholder="Message (optional)"
          className="w-full resize-none rounded-xl border border-ink-100 px-4 py-3 text-sm outline-none transition focus:border-primary-400"
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-gold-400 py-3 text-sm font-bold text-ink-900 transition hover:bg-gold-500"
        >
          Send Enquiry
        </button>
      </div>
    </form>
  )
}
