import { CORE_VALUES } from '../data/content'

const HUES = [
  'bg-rose-100 text-rose-700',
  'bg-amber-100 text-amber-700',
  'bg-emerald-100 text-emerald-700',
  'bg-sky-100 text-sky-700',
  'bg-violet-100 text-violet-700',
  'bg-orange-100 text-orange-700',
]

export default function ValuesStrip() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {CORE_VALUES.map((value, i) => (
        <div
          key={value}
          className={`flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-2xl text-center font-display font-bold shadow-card transition hover:-translate-y-1 sm:h-32 sm:w-32 ${HUES[i % HUES.length]}`}
        >
          <span className="text-sm sm:text-base">{value}</span>
        </div>
      ))}
    </div>
  )
}
