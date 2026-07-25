import { useState, useEffect } from 'react'
import { TESTIMONIALS } from '../data/content'

const ALL_TESTIMONIALS = [
  { ...TESTIMONIALS[0], name: 'Neha Sharma', role: 'Parent of Aarav Sharma, Class 5', photo: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/5-.png.webp' },
  { ...TESTIMONIALS[1], name: 'Rahul Verma', role: 'Parent of Anaya Verma, Class 3', photo: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/11-.png.webp' },
  { ...TESTIMONIALS[2], name: 'Pooja Gupta', role: 'Parent of Vivaan Gupta, Class 7', photo: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/6-.png.webp' },
  { name: 'Arjun Singh', role: 'Parent of Ishaan Singh, Class 4', quote: 'The teachers here are truly dedicated. My son has improved remarkably in both academics and confidence since joining Excellence International School.', photo: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/12.png.webp' },
  { name: 'Sunita Yadav', role: 'Parent of Riya Yadav, Class 2', quote: 'A wonderful school with a caring environment. The staff ensure every child feels valued and motivated to learn every day.', photo: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/9-.png.webp' },
  { name: 'Priya Agarwal', role: 'Parent of Kabir Agarwal, Nursery', quote: 'Excellent daycare and pre-primary program. My child looks forward to school every morning — that says everything about this institution.', photo: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/18.png.webp' },
  { name: 'Amit Sharma', role: 'Parent of Ananya Sharma, Class 6', quote: 'The balance of academics, sports, and arts is perfect. My daughter has blossomed here in ways I never expected.', photo: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/10.png.webp' },
]

const VISIBLE = 3

export default function Testimonials() {
  const [start, setStart] = useState(0)
  const [fading, setFading] = useState(false)

  const visible = Array.from({ length: VISIBLE }, (_, i) =>
    ALL_TESTIMONIALS[(start + i) % ALL_TESTIMONIALS.length]
  )

  function go(next) {
    setFading(true)
    setTimeout(() => {
      setStart(next)
      setFading(false)
    }, 300)
  }

  function goNext() { go((start + 1) % ALL_TESTIMONIALS.length) }
  function goPrev() { go((start - 1 + ALL_TESTIMONIALS.length) % ALL_TESTIMONIALS.length) }

  useEffect(() => {
    const t = setInterval(goNext, 4500)
    return () => clearInterval(t)
  }, [start])

  return (
    <div>
      <div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.3s ease' }}
      >
        {visible.map((t, i) => (
          <div
            key={t.name + i}
            className="flex flex-col items-center rounded-2xl border border-primary-100/60 bg-white px-6 py-8 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            {/* Photo */}
            <div className="relative mb-5">
              <div className="h-20 w-20 overflow-hidden rounded-full ring-4 ring-gold-200 shadow-card">
                <img src={t.photo} alt={t.name} className="h-full w-full object-cover" />
              </div>
              {/* Gold quote badge */}
              <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold-400 text-xs font-bold text-primary-900 shadow">❝</span>
            </div>

            {/* Quote */}
            <p className="flex-1 text-sm leading-relaxed text-ink-500 italic">
              "{t.quote}"
            </p>

            {/* Divider */}
            <div className="my-5 h-px w-12 rounded-full bg-gold-300" />

            {/* Name */}
            <p className="font-serif text-base font-bold text-primary-900">{t.name}</p>
            <p className="mt-0.5 text-xs text-ink-400">({t.role})</p>

            {/* Stars */}
            <div className="mt-3 flex gap-0.5 text-gold-400 text-sm">★★★★★</div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button onClick={goPrev} className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 shadow-card transition hover:border-primary-400 hover:text-primary-700" aria-label="Previous">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
        </button>
        <div className="flex gap-2">
          {ALL_TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => go(i)} className={`h-2 rounded-full transition-all duration-300 ${i === start ? 'w-5 bg-primary-700' : 'w-2 bg-ink-200'}`} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
        <button onClick={goNext} className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 shadow-card transition hover:border-primary-400 hover:text-primary-700" aria-label="Next">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  )
}
