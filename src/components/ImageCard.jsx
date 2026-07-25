export default function ImageCard({ image, title, description, points }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex h-40 items-center justify-center bg-primary-50/60 p-6">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-primary-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-400">{description}</p>
        {points && (
          <ul className="mt-3 space-y-1.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-ink-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
