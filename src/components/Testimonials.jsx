import { TESTIMONIALS } from '../data/content'

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
}

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {TESTIMONIALS.map((t) => (
        <div key={t.name} className="rounded-2xl bg-white p-7 shadow-card">
          <div className="mb-4 text-gold-400" aria-hidden>
            ★★★★★
          </div>
          <p className="text-sm leading-relaxed text-ink-600">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
              {initials(t.name)}
            </div>
            <div>
              <p className="text-sm font-bold text-primary-900">{t.name}</p>
              <p className="text-xs text-ink-400">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
