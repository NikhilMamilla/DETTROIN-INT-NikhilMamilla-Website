import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { IconArrowRight, IconBook, IconCap, IconShield, IconSpark, IconUsers } from '../components/icons'

import prePrimaryImg from '../assets/images/Pre-Primary-School.png'
import daycareImg from '../assets/images/day-care.png'
import safeImg from '../assets/images/Safe-and-Secure-Campus.png'
import facultyImg from '../assets/images/Experienced-and-Dedicated-Faculty.png'
import activityImg from '../assets/images/Cultural-and-Creative-Activities.png'
import sportsImg from '../assets/images/Physical-Development-Programs.png'

const BANNER = 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Best-Pre-Primary-School-in-Aligarh.png.webp'

const IMPORTANCE_POINTS = [
  'Communication and language skills',
  'Social interaction and cooperation',
  'Basic literacy and numeracy skills',
  'Emotional confidence',
  'Curiosity and creativity',
]

const CURRICULUM_POINTS = [
  'Play-based activities',
  'Storytelling and rhymes',
  'Alphabet and number recognition',
  'Drawing, coloring, and crafts',
  'Music and movement sessions',
  'Group activities and interactive games',
]

const SAFETY_POINTS = [
  'CCTV-monitored classrooms',
  'Clean and colorful learning spaces',
  'Child-friendly furniture',
  'Structured daily routines',
  'Caring and attentive staff',
]

const TEACHING_POINTS = [
  'Gentle guidance and encouragement',
  'Individual attention for every child',
  'Positive reinforcement and motivation',
  'Emotional support and care',
  'Interactive and activity-based learning',
]

const TRANSITION_POINTS = [
  'Classroom readiness',
  'Listening and comprehension skills',
  'Early writing readiness',
  'Basic number sense',
  'Independent learning habits',
]

const WHY_POINTS = [
  'Safe and nurturing learning environment',
  'Modern early childhood education approach',
  'Trained and caring teachers',
  'Play-based and activity-oriented learning',
  'Child-friendly facilities and classrooms',
  'Strong foundation for primary education',
]

const PROGRAMS = [
  {
    title: 'Playgroup Program',
    desc: 'For toddlers, our playgroup program emphasizes sensory development and social interaction.',
    points: ['Storytelling and music', 'Movement-based games', 'Hands-on sensory play'],
    icon: IconSpark,
  },
  {
    title: 'Nursery Program',
    desc: 'Designed for children aged 3–4, our nursery program focuses on early literacy, numeracy, and creativity.',
    points: ['Letter and number recognition', 'Art and craft activities', 'Development of communication skills'],
    icon: IconBook,
  },
  {
    title: 'Kindergarten (KG) Program',
    desc: 'For ages 4–6, our kindergarten program prepares children for primary education.',
    points: ['Reading, writing, and arithmetic basics', 'STEM-based learning activities', 'Enhanced critical thinking and problem-solving skills'],
    icon: IconCap,
  },
  {
    title: 'Daycare Program',
    desc: 'Our daycare program provides a safe, nurturing, and engaging environment for children while supporting working parents.',
    points: ['Structured daily routines with play and rest time', 'Supervised indoor and outdoor activities', 'Nutritious meals and hygiene care', 'Emotional support and social skill development'],
    icon: IconShield,
  },
]

const FACILITIES = [
  { title: 'Bright Classrooms', desc: 'Colorful classrooms designed to stimulate imagination, curiosity, and active learning.' },
  { title: 'Activity Areas', desc: 'Dedicated spaces for movement, play, and group activities.' },
  { title: 'Creative Corners', desc: 'Special areas for art, craft, music, storytelling, and creative exploration.' },
  { title: 'Safe Play Zone', desc: 'Supervised play areas that encourage physical activity and healthy development.' },
]

const DEVELOPMENT = [
  { title: 'Language Development', desc: 'Children develop listening, speaking, and early reading skills through stories, rhymes, and conversations.' },
  { title: 'Motor Skills', desc: 'Drawing, coloring, and play activities help improve fine and gross motor skills.' },
  { title: 'Social Skills', desc: 'Group activities encourage sharing, cooperation, and teamwork.' },
  { title: 'Emotional Development', desc: 'Positive interaction with teachers and classmates builds confidence and self-expression.' },
]

const FAQS = [
  {
    q: 'Q1. Why is Excellence International School considered one of the best pre primary schools in Aligarh?',
    a: 'Excellence International School is considered among the best pre primary schools in Aligarh because of its play-based learning approach, safe environment, experienced teachers, and focus on early childhood development.',
  },
  {
    q: 'Q2. What age group is eligible for pre primary classes?',
    a: 'The pre primary program at Excellence International School caters to children from toddler age (Playgroup) through age 6 (KG), covering Playgroup, Nursery, and Kindergarten stages.',
  },
  {
    q: 'Q3. What teaching methods are used in pre primary education?',
    a: 'Teaching methods include play-based learning, storytelling, rhymes, activity-based learning, group interaction, and hands-on creative activities to ensure holistic early development.',
  },
  {
    q: 'Q4. Are extracurricular activities included in the pre primary program?',
    a: 'Yes, music and movement sessions, drawing, coloring, craft activities, and group interactive games are all integral parts of the pre primary curriculum.',
  },
  {
    q: 'Q5. Is the school environment safe for young children?',
    a: 'Absolutely. The campus features CCTV-monitored classrooms, child-friendly furniture, clean learning spaces, structured daily routines, and caring staff to ensure complete safety and comfort.',
  },
]

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

export default function PrePrimary() {
  return (
    <>
      {/* Banner */}
      <section className="relative w-full overflow-hidden flex flex-col" style={{ minHeight: '75vh' }}>
        <img src={BANNER} alt="Best Pre Primary School in Aligarh" className="absolute inset-0 h-full w-full object-cover" />
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

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={prePrimaryImg} alt="Pre Primary School in Aligarh" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Excellence International School</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Pre Primary School in Aligarh</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Excellence International School is a Pre Primary School in Aligarh, designed to support early childhood development through play-based learning, creativity, and guided classroom activities.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
                Being among the Top and Best pre primary schools in Aligarh, the focus is on building strong foundations that prepare children for primary education with confidence and enthusiasm.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Importance of Pre Primary Education */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Why It Matters</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Importance of Pre Primary Education</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Pre primary education plays an important role in shaping early learning habits and social skills. A strong start helps children develop essential abilities such as:
              </p>
              <ul className="mt-3 space-y-2">
                {IMPORTANCE_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                At Excellence International School, children learn in a supportive environment where education begins naturally through fun and interactive experiences.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={activityImg} alt="Importance of Pre Primary Education" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src="https://www.eurokidsindia.com/blog/wp-content/uploads/2022/12/innovative-preschool-teaching.jpg" alt="Modern Pre Primary Learning" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Learning Approach</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Modern Pre Primary Learning Approach</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                The pre primary curriculum is carefully designed to balance learning with fun activities that stimulate curiosity and imagination. The learning program includes:
              </p>
              <ul className="mt-3 space-y-2">
                {CURRICULUM_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Each activity supports the cognitive, emotional, and physical development of children.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Campus Safety</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Safe and Child-Friendly Environment</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Safety and comfort are extremely important for young learners. The campus provides:
              </p>
              <ul className="mt-3 space-y-2">
                {SAFETY_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                A safe environment helps children feel secure, happy, and ready to explore new learning experiences.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={safeImg} alt="Safe and Child-Friendly Environment" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={facultyImg} alt="Experienced and Caring Teachers" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Our Faculty</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Experienced and Caring Teachers</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Pre primary teachers at Excellence International School are trained in early childhood education and child development. Teaching focuses on:
              </p>
              <ul className="mt-3 space-y-2">
                {TEACHING_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                Teachers create a warm and welcoming classroom atmosphere where children enjoy learning every day.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Smooth Transition */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Readiness</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Smooth Transition to Primary School</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                The pre primary program prepares children for a smooth transition to primary education by developing essential early learning skills. Children build:
              </p>
              <ul className="mt-3 space-y-2">
                {TRANSITION_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                This preparation ensures students move confidently into higher classes.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={daycareImg} alt="Smooth Transition to Primary School" className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Excellence */}
      <section className="bg-primary-900 py-16 sm:py-20 text-white">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">Why Choose Us</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">Why Excellence International School is a Leading Pre Primary School in Aligarh</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400/50" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_POINTS.map((pt, i) => {
              const icons = [IconShield, IconBook, IconUsers, IconSpark, IconCap, IconArrowRight]
              const Icon = icons[i % icons.length]
              return (
                <Reveal key={pt} delay={i * 60}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-400 text-primary-900">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm leading-relaxed text-primary-100 sm:text-base">{pt}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="bg-[#fdf6e3] py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Our Offerings</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Programs Offered</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {PROGRAMS.map((prog, i) => {
              const Icon = prog.icon
              return (
                <Reveal key={prog.title} delay={i * 80}>
                  <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-serif text-lg font-bold text-primary-900">{prog.title}</h3>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-ink-500">{prog.desc}</p>
                    <ul className="mt-auto space-y-1.5">
                      {prog.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-ink-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Campus</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Facilities for Pre Primary Students</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">
                Excellence International School offers facilities specially designed for young learners to provide high-quality early education.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FACILITIES.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="mb-4 font-serif text-4xl font-bold text-primary-100 group-hover:text-gold-200 transition leading-none">
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

      {/* Admissions CTA */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="overflow-hidden rounded-2xl bg-primary-900 p-8 text-white shadow-soft sm:p-10">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">Enroll Now</span>
                  <h2 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">Admissions Open – Begin Early Learning Today</h2>
                  <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400/40" />
                  <p className="mt-4 text-sm leading-relaxed text-primary-200 sm:text-base">
                    Admissions for Pre Primary classes are now open. Early application is recommended due to limited seats.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gold-400">Admission Process</h3>
                  <ul className="mt-3 space-y-2">
                    {['Step 1: Complete registration', 'Step 2: Submit required documents', 'Step 3: Student interaction (if applicable)', 'Step 4: Confirm admission'].map((step) => (
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

      {/* Overall Development */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Holistic Growth</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Focus on Overall Development</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">
                The pre primary program focuses on balanced growth across different developmental areas.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DEVELOPMENT.map((d, i) => (
              <Reveal key={d.title} delay={i * 70}>
                <div className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-900 text-gold-400 font-serif text-lg font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-semibold text-primary-900">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
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
