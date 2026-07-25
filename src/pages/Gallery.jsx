import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const BANNER = 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/gallery2.jpg.jpeg.webp'

const modules = import.meta.glob('../assets/gallery/*.{jpg,jpeg}', {
  eager: true,
  import: 'default',
})

const photos = Object.values(modules)

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    if (activeIndex === null) return
    function onKey(e) {
      if (e.key === 'Escape') setActiveIndex(null)
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % photos.length)
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  return (
    <>
      {/* ── Banner ─────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col overflow-hidden w-full" style={{ minHeight: '80vh' }}>
        <img src={BANNER} alt="Gallery – Excellence International School" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary-900/40" />
        <div className="relative flex flex-1" />
        <div className="relative w-full overflow-hidden leading-none" style={{ height: '80px' }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-[200%]" preserveAspectRatio="none" style={{ height: '80px', animation: 'wavePan 6s linear infinite' }}>
            <path d="M0,40 C120,70 240,10 360,40 C480,70 600,10 720,40 C840,70 960,10 1080,40 C1200,70 1320,10 1440,40 C1560,70 1680,10 1800,40 C1920,70 2040,10 2160,40 C2280,70 2400,10 2520,40 C2640,70 2760,10 2880,40 L2880,80 L0,80 Z" fill="white" />
          </svg>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-[200%]" preserveAspectRatio="none" style={{ height: '80px', opacity: 0.4, animation: 'wavePan 9s linear infinite reverse' }}>
            <path d="M0,55 C90,30 180,65 360,50 C540,35 720,65 900,48 C1080,30 1260,65 1440,50 C1620,35 1800,65 1980,50 C2160,30 2340,65 2520,50 C2700,35 2820,60 2880,55 L2880,80 L0,80 Z" fill="white" />
          </svg>
          <style>{`@keyframes wavePan { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        </div>
      </section>

      {/* ── Photos ─────────────────────────────────────────────────────── */}
      <section className="container-page py-20">
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {photos.map((src, i) => (
            <Reveal key={src} delay={(i % 8) * 60} className="break-inside-avoid">
              <button
                onClick={() => setActiveIndex(i)}
                className="block w-full overflow-hidden rounded-xl shadow-card"
              >
                <img
                  src={src}
                  alt={`Excellence International School gallery photo ${i + 1}`}
                  loading="lazy"
                  className="w-full transition duration-300 hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/90 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
          >
            ×
          </button>
          <button
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((i) => (i - 1 + photos.length) % photos.length)
            }}
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white hover:bg-white/20 sm:left-6"
          >
            ‹
          </button>
          <img
            src={photos[activeIndex]}
            alt="Enlarged gallery photo"
            className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-soft"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((i) => (i + 1) % photos.length)
            }}
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white hover:bg-white/20 sm:right-6"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
