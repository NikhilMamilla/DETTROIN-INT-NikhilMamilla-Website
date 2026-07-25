import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import { Link } from 'react-router-dom'
import { IconArrowRight } from '../components/icons'
import { ACADEMIC_STAGES } from '../data/content'

const BANNER = 'https://thumbs.dreamstime.com/b/academics-gold-text-black-background-d-rendered-royalty-free-stock-picture-image-can-be-used-online-website-banner-87918840.jpg'

const STAGE_LINKS = {
  'pre-primary': '/academics/pre-primary',
  'primary':     '/academics/primary',
  'middle':      '/academics/middle',
  'daycare':     '/academics/daycare',
}

const STAGE_IMAGES = {
  'pre-primary': 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Best-Pre-Primary-School-in-Aligarh.png.webp',
  'primary':     'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Best-Primary-School.jpg.jpeg.webp',
  'middle':      'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Best-Middle-School-in-Aligarh.png.webp',
  'daycare':     'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Best-Daycare-School-in-Aligarh.png.webp',
}

export default function Academics() {
  return (
    <>
      {/* ── Banner ─────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col overflow-hidden w-full" style={{ minHeight: '70vh' }}>
        <img src={BANNER} alt="Academics – Excellence International School" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-primary-900/60" />
        <div className="relative flex flex-1 flex-col items-center justify-center px-5 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
            <Link to="/" className="hover:text-gold-300">Home</Link>
            <span className="mx-2">/</span>
            <span>Academics</span>
          </p>
          <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Our Academic Programs</h1>
          <p className="mt-4 max-w-2xl text-sm text-primary-200 sm:text-base">From Playgroup to Class VIII — a structured, nurturing learning journey at every stage.</p>
        </div>
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

      {/* ── Stage Cards ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Excellence International School</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Academic Stages</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">Each stage is thoughtfully designed to build on the last, ensuring every student grows with confidence, curiosity, and strong foundational skills.</p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {ACADEMIC_STAGES.map((stage, i) => (
              <Reveal key={stage.id} delay={i * 80}>
                <div id={stage.id} className={`group scroll-mt-28 grid items-center gap-0 overflow-hidden rounded-3xl shadow-[0_8px_48px_rgba(28,35,84,0.10)] ring-1 ring-ink-100 lg:grid-cols-2`}>
                  {/* Image — alternates left/right */}
                  <div className={`relative overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img
                      src={STAGE_IMAGES[stage.id]}
                      alt={stage.title}
                      className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80 lg:h-[420px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={`flex h-full flex-col justify-center bg-white p-8 sm:p-10 ${i % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-gold-500">
                      {i === 0 ? 'Early Childhood' : i === 1 ? 'Foundation Years' : i === 2 ? 'Middle Years' : 'Care & Learn'}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-primary-900 sm:text-3xl">{stage.title}</h2>
                    <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
                    <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">{stage.summary}</p>
                    <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {stage.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-ink-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link
                        to={STAGE_LINKS[stage.id]}
                        className="inline-flex items-center gap-2 rounded-full bg-primary-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary-800"
                      >
                        Learn More <IconArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry Form ────────────────────────────────────────────────── */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Admissions Open</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Ready to Join?</h2>
              <div className="mt-3 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Admissions are open for the 2026-2027 academic session across all stages — from Playgroup to Class VIII. Fill in the quick enquiry form and our team will get back to you within 24 hours.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-primary-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-800">
                  Admission Procedure <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-900/20 px-5 py-3 text-sm font-bold text-primary-900 transition hover:bg-primary-50">
                  Contact Us
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
