import { useState, useEffect, useCallback } from 'react'

const BANNERS = [
  'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Home-Banner-02.jpg.jpeg.webp',
  'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Home-Banner-1.png.webp',
  'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Home-Banner-4-1.png.webp',
  'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Home-Banner-002.jpg.jpeg.webp',
  'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Home-Banner-003-scaled.png.webp',
  'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Home-Banner-5-1-scaled.png.webp',
]

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

export default function HeroBannerSlider() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = useCallback((index) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTransitioning(false)
    }, 600)
  }, [transitioning])

  const prev = () => goTo((current - 1 + BANNERS.length) % BANNERS.length)
  const next = () => goTo((current + 1) % BANNERS.length)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % BANNERS.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(180px, 40vw, calc(100vh - 160px))' }}
    >
      {BANNERS.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Banner ${i + 1}`}
            className="h-full w-full object-cover object-center"
            style={{
              transform: i === current ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 4s ease-out',
            }}
          />
        </div>
      ))}

      <button onClick={prev} aria-label="Previous banner" className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50">
        <ChevronLeft />
      </button>
      <button onClick={next} aria-label="Next banner" className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50">
        <ChevronRight />
      </button>

      <div className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 flex gap-1.5">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to banner ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  )
}
