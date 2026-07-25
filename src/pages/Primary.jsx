import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { IconArrowRight, IconBook, IconCap, IconShield, IconSpark, IconUsers } from '../components/icons'

import primaryImg from '../assets/images/Primary-School.png'
import safeImg from '../assets/images/Safe-and-Secure-Campus.png'
import facultyImg from '../assets/images/Experienced-and-Dedicated-Faculty.png'
import streamImg from '../assets/images/STREAM-Education.png'
import sportsImg from '../assets/images/Sports-and-Physical-Education.png'
import conceptImg from '../assets/images/Concept-Based-Learning.png'
import skillImg from '../assets/images/Skill-Based-Learning.png'
import experientialImg from '../assets/images/Experiential-Learning.png'

const BANNER = 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Best-Primary-School.jpg.jpeg.webp'

// ─── Data ──────────────────────────────────────────────────────────────────

const WHY_POINTS = [
  'Strong academic basics',
  'Reading and writing fluency',
  'Clear mathematical understanding',
  'Confidence in communication',
  'Discipline and responsibility',
  'Activity-based learning',
]

const ACADEMIC_POINTS = [
  'Structured syllabus coverage',
  'Focus on concept understanding',
  'Regular classwork and homework practice',
  'Weekly and monthly assessments',
  'Revision and improvement sessions',
  'Personal attention for each student',
]

const TEACHING_POINTS = [
  'Interactive classroom discussions',
  'Visual and digital learning tools',
  'Activity-based learning',
  'Group participation and collaboration',
  'Practical examples for better understanding',
]

const FACULTY_POINTS = [
  'Individual attention for students',
  'Doubt-clearing sessions',
  'Continuous performance monitoring',
  'Motivation and encouragement',
  'Positive and supportive discipline',
]

const SAFETY_POINTS = [
  'CCTV surveillance',
  'Supervised classrooms and activities',
  'Structured rules and discipline system',
  'Clean and organized learning environment',
]

const VALUES_POINTS = ['Respect', 'Honesty', 'Discipline', 'Responsibility', 'Cooperation']

const TRANSITION_POINTS = [
  'Independent learning habits',
  'Analytical thinking skills',
  'Time management',
  'Exam readiness',
]

const WHY_BEST_POINTS = [
  'Strong academic foundation',
  'Experienced and dedicated teachers',
  'Modern learning facilities',
  'Safe and secure campus',
  'Holistic development programs',
  'Value-based education',
]

const HOLISTIC = [
  {
    title: 'Sports and Physical Activities',
    desc: 'Regular sports and games help improve physical fitness, discipline, and teamwork.',
    img: sportsImg,
    icon: IconUsers,
  },
  {
    title: 'Cultural Programs',
    desc: 'Participation in school events helps students develop stage confidence and communication skills.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLqHcXwUI4yiHxwwmtNC1GlimC2AKfBXHrWFZo1HDI1Pnh07-OqER5DUjn&s=10',
    icon: IconSpark,
  },
  {
    title: 'Creative Activities',
    desc: 'Activities such as art, craft, music, and competitions encourage creativity and talent development.',
    img: 'https://raisingchildren.net.au/__data/assets/image/0027/48069/encouraging-creativity-preschoolersnarrow.jpg',
    icon: IconBook,
  },
]

const FACILITIES = [
  { title: 'Smart Classrooms', desc: 'Interactive digital tools make lessons engaging and easy to understand.' },
  { title: 'Library', desc: 'Reading resources help improve language skills and knowledge.' },
  { title: 'Computer Lab', desc: 'Students receive basic computer knowledge to support digital learning.' },
  { title: 'Activity Rooms', desc: 'Creative spaces support art, music, and skill development.' },
  { title: 'Safe Play Areas', desc: 'Outdoor spaces encourage physical activity and teamwork.' },
]

const SUBJECTS = [
  {
    title: 'English',
    intro: 'The English curriculum focuses on developing strong communication and language skills.',
    points: [
      'Reading abilities',
      'Vocabulary building',
      'Writing skills',
      'Grammar understanding',
      'Communication confidence',
    ],
    footer: 'Language development is given high importance.',
    img: conceptImg,
  },
  {
    title: 'Mathematics',
    intro: 'Mathematics learning focuses on building strong problem-solving and reasoning skills.',
    points: [
      'Number concepts',
      'Logical thinking',
      'Problem-solving techniques',
      'Practical mathematical applications',
      'Activity-based learning',
    ],
    footer: 'Students gradually develop strong calculation and analytical abilities.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJKrsLoPNyQn8JcyW2DFyAzee7pHREmwicodNyjPFReh1xGlxdy0g_h3Z&s=10',
  },
  {
    title: 'Environmental Studies (EVS)',
    intro: 'Environmental Studies helps students understand their surroundings and the world around them.',
    points: [
      'Nature and environment',
      'Social awareness',
      'Basic science concepts',
      'Everyday life learning',
    ],
    footer: 'This subject encourages curiosity and awareness about the environment.',
    img: 'https://bigbooks.in/wp-content/uploads/2024/10/ENVIRONMENTAL-STUDIES-3-front.jpg',
  },
]

const FAQS = [
  {
    q: 'Q1. Why is Excellence International School considered one of the best primary schools in Aligarh?',
    a: 'Because of its strong academic structure, modern teaching methods, safe environment, and balanced development approach.',
  },
  {
    q: 'Q2. Which classes are included in the primary section?',
    a: 'The primary section includes Classes 1st through 5th, providing a complete foundational education.',
  },
  {
    q: 'Q3. Are extracurricular activities available in primary classes?',
    a: 'Yes, sports, cultural programs, art, music, and creative activities are all integral parts of the primary curriculum.',
  },
  {
    q: 'Q4. Is the campus safe for primary students?',
    a: 'Absolutely. The campus has CCTV surveillance, supervised classrooms, structured discipline, and a clean learning environment.',
  },
  {
    q: 'Q5. How can admission be started?',
    a: 'Visit the Admissions page, complete the registration form, submit required documents, and confirm your seat. Early applications are recommended.',
  },
]

// ─── Components ────────────────────────────────────────────────────────────

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-ink-100 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-primary-900 transition hover:bg-primary-50/40"
      >
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

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Primary() {
  return (
    <>
      {/* ── Banner ─────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col overflow-hidden w-full" style={{ minHeight: '75vh' }}>
        <img src={BANNER} alt="Best Primary School in Aligarh" className="absolute inset-0 h-full w-full object-cover" />
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
                <img src={primaryImg} alt="Primary School in Aligarh" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Excellence International School</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Best Primary School in Aligarh</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Excellence International School is recognized as one of the Best Primary Schools in Aligarh, providing a strong academic foundation, disciplined environment, and balanced development for young learners.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
                Primary education is one of the most important stages in a child's learning journey. It builds the base for future academic success, confidence, and personality development.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
                Students are encouraged to learn with curiosity, develop communication skills, and gain confidence in their academic abilities.
              </p>
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
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Why Choose the Best Primary School in Aligarh?</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                A high-quality primary school focuses on building strong learning habits and basic academic skills. The primary education program focuses on:
              </p>
              <ul className="mt-3 space-y-2">
                {WHY_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Excellence International School provides all these essential elements to support students in their early academic journey.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={conceptImg} alt="Why Choose Primary School" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Academic Foundation ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src="https://banyantree.in/chandigarh/blog/wp-content/uploads/2025/10/Building-Strong-Academic-Foundations-Through-Engaged-Teaching.jpg" alt="Strong Academic Foundation" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Academics</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Strong Academic Foundation</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                The primary curriculum is designed to ensure concept clarity and steady academic progress. Key academic features include:
              </p>
              <ul className="mt-3 space-y-2">
                {ACADEMIC_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                The goal is to help students become confident learners who understand what they study.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Modern Teaching ─────────────────────────────────────────────── */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Pedagogy</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Modern Teaching Methods</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                To remain among the top primary schools in Aligarh, the school adopts modern and engaging teaching techniques:
              </p>
              <ul className="mt-3 space-y-2">
                {TEACHING_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Learning becomes enjoyable, engaging, and student-centered.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFN9lXtsDscOfr2coOm_bOyFk_nuGXSkxuMo3myqk7exypHfqSJl_7JAH&s=10" alt="Modern Teaching Methods" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Faculty ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={facultyImg} alt="Experienced and Supportive Faculty" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Our Teachers</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Experienced and Supportive Faculty</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Qualified teachers guide students with dedication, patience, and care. The teaching approach includes:
              </p>
              <ul className="mt-3 space-y-2">
                {FACULTY_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Teachers help students develop confidence and curiosity for learning.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Safety ──────────────────────────────────────────────────────── */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Campus Safety</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Safe and Disciplined Campus</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Safety and discipline are top priorities at Excellence International School. The campus provides:
              </p>
              <ul className="mt-3 space-y-2">
                {SAFETY_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                A secure and supportive environment helps students focus on their studies.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={safeImg} alt="Safe and Disciplined Campus" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────────── */}
      <section className="bg-primary-900 py-16 sm:py-20 text-white">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">Character</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">Building Values from an Early Stage</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400/50" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-200 sm:text-base">
                Excellence International School strongly believes in value-based education. Students are encouraged to develop:
              </p>
            </div>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            {VALUES_POINTS.map((val, i) => {
              const icons = [IconUsers, IconShield, IconCap, IconBook, IconSpark]
              const Icon = icons[i % icons.length]
              return (
                <Reveal key={val} delay={i * 60}>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-5 backdrop-blur-sm transition hover:bg-white/10">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-400 text-primary-900">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-semibold text-white">{val}</span>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal>
            <p className="mt-8 text-center text-sm text-primary-200 sm:text-base">
              These values help in building strong character along with academic success.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Holistic Development ────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Beyond Classroom</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Holistic Development in Primary Classes</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">
                Primary education focuses on both academic and personal growth.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {HOLISTIC.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="overflow-hidden">
                      <img src={item.img} alt={item.title} className="h-48 w-full object-cover transition group-hover:scale-105 duration-500" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="font-semibold text-primary-900">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-ink-500">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Facilities ──────────────────────────────────────────────────── */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Infrastructure</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Modern Infrastructure for Primary Students</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">
                A well-equipped learning environment enhances the overall learning experience.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FACILITIES.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="mb-3 font-serif text-4xl font-bold text-primary-100 group-hover:text-gold-200 transition leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-semibold text-primary-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{f.desc}</p>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Smooth Transition ───────────────────────────────────────────── */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Readiness</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Smooth Transition to Higher Classes</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                The primary section prepares students for middle school by developing:
              </p>
              <ul className="mt-3 space-y-2">
                {TRANSITION_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Students move forward with confidence and academic clarity.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={sportsImg} alt="Smooth Transition to Higher Classes" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
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
                  <h2 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">Admissions Open – Secure a Seat Today</h2>
                  <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400/40" />
                  <p className="mt-4 text-sm leading-relaxed text-primary-200 sm:text-base">
                    Admissions for Primary Classes at Excellence International School are now open. Early applications are recommended as seats are limited.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gold-400">Admission Process</h3>
                  <ul className="mt-3 space-y-2">
                    {[
                      'Step 1: Complete registration',
                      'Step 2: Submit required documents',
                      'Step 3: Attend interaction or assessment (if required)',
                      'Step 4: Confirm admission',
                    ].map((step) => (
                      <li key={step} className="flex items-start gap-2 text-sm text-primary-200">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />{step}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-bold text-ink-900 transition hover:bg-gold-500">
                      Apply for Admission <IconArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why Best ────────────────────────────────────────────────────── */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Summary</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Why Excellence International School is the Best Primary School in Aligarh</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_BEST_POINTS.map((pt, i) => {
              const icons = [IconCap, IconUsers, IconBook, IconShield, IconSpark, IconArrowRight]
              const Icon = icons[i % icons.length]
              return (
                <Reveal key={pt} delay={i * 60}>
                  <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-soft">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-semibold leading-relaxed text-ink-700 sm:text-base">{pt}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal>
            <p className="mt-6 text-center text-sm leading-relaxed text-ink-500 sm:text-base">
              These qualities make Excellence International School one of the best primary schools in Aligarh.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Core Subjects ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Curriculum</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Core Subjects in Primary Section</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
            </div>
          </Reveal>
          <div className="space-y-10">
            {SUBJECTS.map((sub, i) => (
              <Reveal key={sub.title} delay={i * 80}>
                <div className={`grid items-center gap-8 lg:grid-cols-2`}>
                  {i % 2 !== 0 && (
                    <div className="hidden overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)] lg:block">
                      <img src={sub.img} alt={sub.title} className="h-64 w-full object-cover" />
                    </div>
                  )}
                  <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100 sm:p-8">
                    <h3 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">{sub.title}</h3>
                    <div className="mt-1 h-0.5 w-8 rounded-full bg-gold-400" />
                    <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">{sub.intro}</p>
                    <ul className="mt-3 space-y-1.5">
                      {sub.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />{pt}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm leading-relaxed text-ink-400 sm:text-base">{sub.footer}</p>
                  </div>
                  {i % 2 === 0 && (
                    <div className="hidden overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)] lg:block">
                      <img src={sub.img} alt={sub.title} className="h-64 w-full object-cover" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
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
              {FAQS.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
