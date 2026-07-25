export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold text-primary-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-ink-400">{subtitle}</p>}
    </div>
  )
}
