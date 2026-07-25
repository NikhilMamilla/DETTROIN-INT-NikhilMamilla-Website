import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { IconArrowRight, IconBook, IconCap, IconShield, IconSpark, IconUsers } from '../components/icons'

import daycareImg from '../assets/images/day-care.png'
import safeImg from '../assets/images/Safe-and-Secure-Campus.png'
import facultyImg from '../assets/images/Experienced-and-Dedicated-Faculty.png'
import activityImg from '../assets/images/Cultural-and-Creative-Activities.png'
import communityImg from '../assets/images/Community-Service.png'
import prePrimaryImg from '../assets/images/Pre-Primary-School.png'
import compassionImg from '../assets/images/Compassion01.png'

const BANNER = 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Best-Daycare-School-in-Aligarh.png.webp'

const WHY_POINTS = [
  'Safe and secure environment',
  'Play-based learning activities',
  'Social interaction and communication skills',
  'Emotional and cognitive development',
  'Proper care and supervision',
  'Balanced routine of play, learning, and rest',
]

const SAFETY_POINTS = [
  'CCTV monitoring',
  'Supervised indoor and outdoor areas',
  'Responsible and caring staff',
  'Safe play spaces for children',
  'Clean and hygienic surroundings',
]

const ACTIVITY_POINTS = [
  'Storytelling sessions',
  'Creative play activities',
  'Music and rhymes',
  'Art and craft',
  'Interactive games',
]

const SOCIAL_POINTS = [
  'Communication skills',
  'Social confidence',
  'Emotional understanding',
  'Teamwork and cooperation',
]

const ROUTINE_POINTS = [
  'Play and learning activities',
  'Storytelling and creative sessions',
  'Snack and rest time',
  'Group interaction and games',
  'Supervised indoor and outdoor play',
]

const STAFF_POINTS = [
  'Individual attention for each child',
  'Friendly and supportive interaction',
  'Safe supervision during activities',
  'Encouragement for learning and creativity',
]

const FACILITIES = [
  { title: 'Safe Indoor Play Areas', desc: 'Secure and fun indoor spaces designed for young explorers.' },
  { title: 'Activity Rooms', desc: 'Creative rooms dedicated to art, music, and hands-on learning.' },
  { title: 'Child-Friendly Furniture', desc: 'Age-appropriate furniture and learning tools for comfort and safety.' },
  { title: 'Hygienic Environment', desc: 'Clean and sanitized spaces maintained to the highest standards.' },
  { title: 'Outdoor Play Areas', desc: 'Supervised outdoor spaces that promote physical activity and fun.' },
]

const EARLY_ED_POINTS = [
  'Basic communication skills',
  'Social interaction abilities',
  'Listening and concentration skills',
  'Creative thinking and curiosity',
]

const WHY_BEST_POINTS = [
  'Safe and supervised environment',
  'Play-based learning approach',
  'Caring and experienced staff',
  'Structured daily routine',
  'Modern child-friendly facilities',
  'Focus on emotional and social development',
]

const FAQS = [
  { q: 'Q1. Why is Excellence International School considered the best daycare school in Aligarh?', a: 'Excellence International School provides a safe environment, play-based learning, caring staff, and structured activities that support early childhood development.' },
  { q: 'Q2. What age group is suitable for the daycare program?', a: 'The daycare program is suitable for toddlers and young children, typically from age 1.5 to 5 years, covering the crucial early childhood development stage.' },
  { q: 'Q3. What activities are included in the daycare program?', a: 'Storytelling, creative play, music and rhymes, art and craft, interactive games, and structured group activities are all part of the daily daycare program.' },
  { q: 'Q4. Is the daycare environment safe for children?', a: 'Yes. The facility has CCTV monitoring, supervised indoor and outdoor areas, trained staff, safe play spaces, and a clean hygienic environment.' },
  { q: 'Q5. How can parents apply for daycare admission?', a: 'Parents can visit the Admissions page, fill out the registration form, submit required documents, and confirm enrollment. Early registration is recommended.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-ink-100 last:border-0">
      <button onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-primary-900 transition hover:bg-primary-50/40">
        <span>{q}</span>
        <span className={`shrink-0 text-xl text-gold-500 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-ink-400">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Daycare() {
  return (
    <>
      {/* ── Banner ─────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col overflow-hidden w-full" style={{ minHeight: '75vh' }}>
        <img src={BANNER} alt="Best Daycare School in Aligarh" className="absolute inset-0 h-full w-full object-cover" />
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

      {/* ── Intro ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={daycareImg} alt="Daycare School in Aligarh" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Excellence International School</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Best Daycare School in Aligarh</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Excellence International School is recognized as one of the best daycare schools in Aligarh, providing a safe, caring, and engaging environment for young children.</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">The daycare program is designed to support early childhood development while offering parents a reliable and secure place where their children can learn, play, and grow.</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">Children experience a joyful environment where they can explore, interact, and develop essential life skills.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Why Choose ─────────────────────────────────────────────────── */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Why Choose Us</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Why Choose the Best Daycare School in Aligarh?</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">A high-quality daycare center provides safety, learning opportunities, and emotional support for young children. The daycare program focuses on:</p>
              <ul className="mt-3 space-y-2">
                {WHY_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">These elements ensure that children feel comfortable, happy, and engaged throughout the day.</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTHCde_-5XbXsY3wnK5g31v9HEZZFvk1pys27PnUdcp4qYpJDDlWef-bA&s=10" alt="Why Choose Daycare" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Safety ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={safeImg} alt="Safe Daycare Environment" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Campus Safety</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Safe and Secure Daycare Environment</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Safety is a top priority at Excellence International School. The daycare facility ensures:</p>
              <ul className="mt-3 space-y-2">
                {SAFETY_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">A safe environment allows children to learn and play freely while giving parents peace of mind.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Play-Based Learning ─────────────────────────────────────────── */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Learning Approach</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Play-Based Learning Approach</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Young children learn best through play and exploration. The daycare program includes fun and interactive activities that promote learning naturally:</p>
              <ul className="mt-3 space-y-2">
                {ACTIVITY_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Play-based learning helps develop imagination, creativity, and social skills.</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={activityImg} alt="Play-Based Learning" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Social & Emotional Development ─────────────────────────────── */}
      <section className="bg-primary-900 py-16 sm:py-20 text-white">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">Growth</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">Social and Emotional Development</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400/50" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-200 sm:text-base">Children are encouraged to interact with peers and build healthy relationships. The daycare program helps children develop:</p>
            </div>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_POINTS.map((pt, i) => {
              const icons = [IconUsers, IconSpark, IconBook, IconShield]
              const Icon = icons[i % icons.length]
              return (
                <Reveal key={pt} delay={i * 70}>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-5 backdrop-blur-sm transition hover:bg-white/10">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-400 text-primary-900"><Icon className="h-5 w-5" /></span>
                    <span className="font-semibold text-white">{pt}</span>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal><p className="mt-8 text-center text-sm text-primary-200 sm:text-base">These early experiences support positive personality development.</p></Reveal>
        </div>
      </section>

      {/* ── Daily Routine ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={prePrimaryImg} alt="Daily Routine Daycare" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Structure</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Daily Routine and Structured Activities</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">A balanced daily routine helps children feel comfortable and secure. The daycare schedule includes:</p>
              <ul className="mt-3 space-y-2">
                {ROUTINE_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">This structured routine supports healthy development and engagement.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Staff ───────────────────────────────────────────────────────── */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Our Team</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Caring and Experienced Staff</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">The daycare staff at Excellence International School are trained to provide attentive care and support to every child. The team ensures:</p>
              <ul className="mt-3 space-y-2">
                {STAFF_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Children receive guidance and care in a warm and nurturing environment.</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={facultyImg} alt="Caring Daycare Staff" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Facilities ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Infrastructure</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Modern Facilities for Daycare Students</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">Excellence International School provides facilities designed especially for young children.</p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FACILITIES.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="mb-3 font-serif text-4xl font-bold text-primary-100 group-hover:text-gold-200 transition leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-semibold text-primary-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{f.desc}</p>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Preparing for Early Education ───────────────────────────────── */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src="https://lsb.edu.in/wp-content/uploads/2024/11/Montessori-schools-in-Hennur-scaled.jpg" alt="Preparing for Early Education" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">School Readiness</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Preparing Children for Early Education</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">The daycare program helps children gradually prepare for formal schooling by developing essential early learning skills. Children begin to develop:</p>
              <ul className="mt-3 space-y-2">
                {EARLY_ED_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">This preparation helps children transition smoothly into pre-primary education.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Why Best ────────────────────────────────────────────────────── */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Summary</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Why Excellence International School is the Best Daycare School in Aligarh</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">Parents trust Excellence International School because of its commitment to safety, care, and early childhood development.</p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_BEST_POINTS.map((pt, i) => {
              const icons = [IconShield, IconSpark, IconUsers, IconCap, IconBook, IconArrowRight]
              const Icon = icons[i % icons.length]
              return (
                <Reveal key={pt} delay={i * 60}>
                  <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-soft">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-900 text-gold-400"><Icon className="h-5 w-5" /></span>
                    <p className="text-sm font-semibold leading-relaxed text-ink-700 sm:text-base">{pt}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal><p className="mt-6 text-center text-sm leading-relaxed text-ink-500 sm:text-base">These features make Excellence International School one of the best daycare schools in Aligarh.</p></Reveal>
        </div>
      </section>

      {/* ── Admissions CTA ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="overflow-hidden rounded-2xl bg-primary-900 p-8 text-white shadow-soft sm:p-10">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">Enroll Now</span>
                  <h2 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">Admissions Open for Daycare</h2>
                  <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400/40" />
                  <p className="mt-4 text-sm leading-relaxed text-primary-200 sm:text-base">Admissions for the daycare program are now open. Parents searching for the best daycare school in Aligarh can enroll their children at Excellence International School.</p>
                  <p className="mt-3 text-sm leading-relaxed text-primary-200 sm:text-base">Early registration is recommended as seats are limited.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-bold text-ink-900 transition hover:bg-gold-500">Apply for Admission <IconArrowRight className="h-4 w-4" /></Link>
                    <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">Contact Us</Link>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img src={daycareImg} alt="Daycare Admissions" className="h-64 w-full object-cover opacity-80" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQs ────────────────────────────────────────────────────────── */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">FAQs</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Frequently Asked Questions</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto max-w-3xl divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
              {FAQS.map((item) => <FaqItem key={item.q} q={item.q} a={item.a} />)}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
