import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

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
      <PageHero title="School Gallery" crumb="Gallery" />

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
