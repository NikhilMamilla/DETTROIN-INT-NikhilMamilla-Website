import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-7xl font-extrabold text-primary-100">404</p>
      <h1 className="mt-4 text-2xl font-extrabold text-primary-900">Page not found</h1>
      <p className="mt-2 text-ink-400">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-primary-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-800"
      >
        Back to Home
      </Link>
    </div>
  )
}
