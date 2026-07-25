import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { IconArrowRight, IconBook, IconCap, IconShield, IconSpark, IconUsers } from '../components/icons'
import { HOLISTIC_PROGRAMS, INFRASTRUCTURE, WHY_US } from '../data/content'

import safeImg     from '../assets/images/Safe-and-Secure-Campus.png'
import sportsImg   from '../assets/images/Sports-and-Physical-Education.png'
import transportImg from '../assets/images/Transportation-Facility.png'
import artsImg     from '../assets/images/Visual-and-Performing-Arts.png'
import personalityImg from '../assets/images/Personality-Development-and-Life-Skills.png'
import streamImg   from '../assets/images/STREAM-Education.png'


const SMART_FEATURES = [
  'Interactive digital whiteboards in every classroom',
  'Audio-visual learning tools for concept clarity',
  'Structured daily lesson plans with visual aids',
  'Regular assessments and progress tracking',
  'Dedicated doubt-clearing sessions',
]

const SAFETY_FEATURES = [
  'CCTV surveillance across all campus areas',
  'Supervised entry and exit for all students',
  'Trained and responsible staff on duty',
  'Clear discipline and conduct policies',
  'Clean, hygienic, and well-maintained premises',
]

const SPORTS_FEATURES = [
  'Dedicated outdoor sports ground',
  'Indoor games and activity area',
  'Annual sports day and inter-school events',
  'Yoga and wellness sessions',
  'Trained physical education instructors',
]

const TRANSPORT_FEATURES = [
  'Well-maintained fleet of school buses',
  'Experienced and verified drivers',
  'Fixed and mapped routes for safety',
  'Supervised student boarding and drop-off',
  'GPS-enabled vehicles for parent visibility',
]

const ARTS_FEATURES = [
  'Music classes with trained instructors',
  'Dance and performing arts sessions',
  'Drawing, painting, and craft workshops',
  'Annual school cultural events',
  'Stage and public speaking opportunities',
]

const PERSONALITY_FEATURES = [
  'Leadership workshops and group activities',
  'Public speaking and debate programs',
  'Value-based moral education',
  'Teamwork and communication skill building',
  'Community awareness and social responsibility',
]

export default function Facilities() {
  return (
    <>

      {/* ── Infrastructure Grid ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Modern Infrastructure</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Facilities Built for Effective Learning</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">A well-planned campus environment that supports both academic excellence and extracurricular development.</p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INFRASTRUCTURE.map((item, i) => {
              const icons = [IconBook, IconSpark, IconUsers, IconCap, IconShield, IconArrowRight]
              const Icon = icons[i % icons.length]
              return (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="flex h-44 items-center justify-center overflow-hidden bg-primary-50/60 p-6">
                      <img src={item.image} alt={item.title} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="font-semibold text-primary-900">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-ink-500">{item.description}</p>
                    </div>
                    <div className="h-0.5 w-0 bg-gold-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Smart Classrooms Feature ────────────────────────────────────── */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Academic Environment</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Smart Classrooms & Learning Tools</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Classrooms at Excellence International School are designed to make learning engaging, interactive, and effective. Modern teaching tools ensure students grasp concepts clearly and stay motivated.</p>
              <ul className="mt-4 space-y-3">
                {SMART_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">✓</span>
                    <span className="text-sm leading-relaxed text-ink-600 sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src="https://senseselec.com/wp-content/uploads/2024/01/Smart-classroom-equipments1-1.jpg" alt="Smart Classrooms" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Safe Campus ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={safeImg} alt="Safe and Secure Campus" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Student Safety</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Safe and Secure Campus</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">A safe and structured campus is the foundation of effective learning. Every measure is taken to ensure that students feel secure, respected, and comfortable throughout the school day.</p>
              <ul className="mt-4 space-y-3">
                {SAFETY_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">✓</span>
                    <span className="text-sm leading-relaxed text-ink-600 sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Holistic Programs ───────────────────────────────────────────── */}
      <section className="bg-primary-900 py-16 sm:py-20 text-white">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">Beyond the Classroom</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">Holistic Development Programs</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400/50" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-200 sm:text-base">Excellence International School believes in nurturing every dimension of a student — academic, physical, creative, and emotional.</p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOLISTIC_PROGRAMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:bg-white/10">
                  <div className="overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-44 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-200">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sports ──────────────────────────────────────────────────────── */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Physical Development</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Sports and Physical Education</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Regular physical activity is an essential part of student life at Excellence International School. Sports not only keep students fit but also instill discipline, teamwork, and a healthy competitive spirit.</p>
              <ul className="mt-4 space-y-3">
                {SPORTS_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">✓</span>
                    <span className="text-sm leading-relaxed text-ink-600 sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={sportsImg} alt="Sports and Physical Education" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Visual & Performing Arts ────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src="https://cloud9.shauryasoft.com/media/blogPage_213_33.jpg" alt="Visual and Performing Arts" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Creative Expression</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Visual and Performing Arts</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Creativity and self-expression are celebrated at Excellence International School. Students are given dedicated time and resources to explore their artistic and performance talents in a supportive setting.</p>
              <ul className="mt-4 space-y-3">
                {ARTS_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">✓</span>
                    <span className="text-sm leading-relaxed text-ink-600 sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Personality Development ─────────────────────────────────────── */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Life Skills</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Personality Development and Life Skills</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Academic knowledge alone is not enough. Excellence International School equips students with the confidence, communication skills, and values needed to succeed in life beyond the classroom.</p>
              <ul className="mt-4 space-y-3">
                {PERSONALITY_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">✓</span>
                    <span className="text-sm leading-relaxed text-ink-600 sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={personalityImg} alt="Personality Development" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Transportation ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={transportImg} alt="Transportation Facility" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Student Commute</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Safe Transportation Facility</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Excellence International School provides a reliable and safe transportation facility to ensure students travel comfortably and securely every day. Parents can trust that their children are in safe hands from home to school and back.</p>
              <ul className="mt-4 space-y-3">
                {TRANSPORT_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">✓</span>
                    <span className="text-sm leading-relaxed text-ink-600 sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Enroll Today</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Experience These Facilities First-Hand</h2>
            <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-500 sm:text-base">Visit Excellence International School and see our campus, classrooms, sports facilities, and more. Admissions are open for the 2026-2027 academic session.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-primary-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-800">
                Apply for Admission <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-900/20 px-6 py-3 text-sm font-bold text-primary-900 transition hover:bg-primary-50">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
