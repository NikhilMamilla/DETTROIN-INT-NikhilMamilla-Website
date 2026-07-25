import { Link } from 'react-router-dom'

export default function PageHero({ title, crumb }) {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-20 text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-700/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
      <div className="container-page relative">
        <p className="mb-3 flex items-center gap-2 text-sm text-primary-200">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-gold-300">{crumb}</span>
        </p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
      </div>
    </section>
  )
}
