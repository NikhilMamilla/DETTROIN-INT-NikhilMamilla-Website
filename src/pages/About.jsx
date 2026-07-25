import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ValuesStrip from '../components/ValuesStrip'
import { IconArrowRight, IconBook, IconCap, IconShield, IconSpark, IconUsers } from '../components/icons'
import { SITE } from '../data/site'

import facultyImg from '../assets/images/Experienced-and-Dedicated-Faculty.png'
import visionImg from '../assets/images/Vision-Mission.png'
import infrastructureImg from '../assets/images/Strong-Academic-System.png'
import safeImg from '../assets/images/Safe-and-Secure-Campus.png'
import classroomImg from '../assets/gallery/9.jpg'
import sportsImg from '../assets/gallery/3.jpg'

const BANNER = 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/About-US2.png.webp'

const VISION_POINTS = [
  'Think independently',
  'Act responsibly',
  'Respect values and discipline',
  'Contribute positively to society',
  'Excel in academics and life',
]

const MISSION_POINTS = [
  'High academic standards',
  'Value-based education',
  'A modern learning environment',
  'Skill development opportunities',
  'A safe and disciplined campus',
]

const ACADEMIC_POINTS = [
  'Well-planned syllabus coverage',
  'Regular assessments and evaluations',
  'Concept-based teaching methods',
  'Practical and activity-based learning',
  'Continuous performance monitoring',
]

const HOLISTIC_POINTS = [
  'Sports and physical education',
  'Cultural programs and competitions',
  'Music, dance, and creative arts',
  'Leadership and personality development',
  'Public speaking and communication skills',
]

const INFRASTRUCTURE_POINTS = [
  'Smart and interactive classrooms',
  'Science laboratories',
  'Computer laboratory',
  'Mathematics learning spaces',
  'Library with educational resources',
  'Activity and creative learning rooms',
  'Safe and supervised campus environment',
]

const FACULTY_POINTS = [
  'Knowledgeable and professionally trained',
  'Student-focused and supportive',
  'Committed to academic excellence',
  'Dedicated to mentoring and guidance',
]

const SAFETY_POINTS = [
  'CCTV monitoring',
  'Well-defined discipline policies',
  'Supervised activities and classrooms',
  'Secure entry and exit systems',
]

const VALUES_POINTS = ['Honesty', 'Respect', 'Responsibility', 'Discipline', 'Integrity']

const COMMITMENT_POINTS = [
  'Delivering high-quality education',
  'Maintaining strong academic standards',
  'Providing modern learning facilities',
  'Ensuring student safety and discipline',
  "Supporting every student's growth and success",
]

function SectionBlock({ eyebrow, title, intro, focusLabel, points, footer, image, imageAlt, reverse = false, bg = 'bg-white' }) {
  return (
    <section className={`${bg} min-h-screen flex flex-col justify-center py-16 sm:py-20`}>
      <div className="container-page">
        <div className={`grid items-center gap-10 lg:grid-cols-2`}>
          {image && (
            <Reveal delay={100} className={reverse ? 'lg:order-2' : 'lg:order-1'}>
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                <img src={image} alt={imageAlt} className="h-72 w-full object-cover sm:h-80 lg:h-[420px]" />
              </div>
            </Reveal>
          )}
          <Reveal className={image ? (reverse ? 'lg:order-1' : 'lg:order-2') : ''}>
            {eyebrow && <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">{eyebrow}</span>}
            <h2 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">{title}</h2>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
            {intro && <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">{intro}</p>}
            {focusLabel && <p className="mt-4 text-sm font-semibold text-ink-700 sm:text-base">{focusLabel}</p>}
            {points && (
              <ul className="mt-3 space-y-2">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                    {pt}
                  </li>
                ))}
              </ul>
            )}
            {footer && <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">{footer}</p>}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      {/* Banner */}
      <section className="relative w-full overflow-hidden flex flex-col" style={{ minHeight: '75vh' }}>
        <img src={BANNER} alt="About Excellence International School" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary-900/55" />
        <div className="relative flex flex-1 flex-col items-center justify-center text-center px-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
            <Link to="/" className="hover:text-gold-300">Home</Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </p>
          <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            About Excellence International School
          </h1>
        </div>
        {/* Wave */}
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
      <SectionBlock
        eyebrow="Excellence International School"
        title="A Leading School in Aligarh"
        image={classroomImg}
        imageAlt="Students at Excellence International School"
        intro="Excellence International School is a trusted name in education, recognized as one of the leading schools in Aligarh. With a strong commitment to academic excellence, discipline, and holistic development, the school provides a nurturing environment where students grow into confident, responsible, and capable individuals."
        footer="Education at Excellence International School is designed to build strong academic foundations, inspire creativity, and prepare students for a successful future. The institution focuses on developing knowledge, skills, values, and character that help students thrive both academically and personally."
        bg="bg-white"
      />

      {/* Vision + Mission — image left, text right */}
      <section className="bg-[#fdf6e3] min-h-screen flex flex-col justify-center py-16 sm:py-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-card sm:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <Reveal>
                <div className="overflow-hidden rounded-xl shadow-card">
                  <img src={visionImg} alt="Vision and Mission" className="h-64 w-full object-cover sm:h-80" />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary-900">Vision</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
                      To create confident, responsible, and innovative individuals who contribute positively to society.
                    </p>
                  </div>
                  <div className="h-px bg-ink-100" />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary-900">Mission</h3>
                    <ul className="mt-3 space-y-2">
                      {MISSION_POINTS.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-400" />{pt}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                      Every learner receives personalized attention and encouragement to achieve their goals.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <SectionBlock
        eyebrow="Academic Excellence"
        title="Structured Academic System"
        image={infrastructureImg}
        imageAlt="Academic Excellence"
        intro="Excellence International School follows a structured academic system that focuses on concept clarity and strong learning foundations."
        focusLabel="Our academic approach includes:"
        points={ACADEMIC_POINTS}
        footer="Students are guided and supported to achieve consistent academic success and build confidence in their abilities."
        bg="bg-ink-50"
      />

      {/* Holistic Development */}
      <section className="bg-primary-900 min-h-screen flex flex-col justify-center py-16 sm:py-20 text-white">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">Holistic Development</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">Beyond Classroom Learning</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400/50" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-200 sm:text-base">
                Education at Excellence International School goes beyond classroom learning. The school believes in the complete development of every child.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOLISTIC_POINTS.map((pt, i) => {
              const icons = [IconCap, IconSpark, IconBook, IconUsers, IconShield]
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
          <Reveal>
            <p className="mt-8 text-center text-sm text-primary-200 sm:text-base">
              Balanced development helps students become confident, creative, and capable individuals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-[#fdf6e3] min-h-screen flex flex-col justify-center py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Modern Infrastructure</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Modern Learning Facilities</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">
                To maintain high standards of education, Excellence International School provides modern facilities that enhance the learning experience.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INFRASTRUCTURE_POINTS.map((pt, i) => (
              <Reveal key={pt} delay={i * 60}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="mb-4 font-serif text-4xl font-bold text-primary-100 group-hover:text-gold-200 transition leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm font-semibold leading-relaxed text-ink-700 sm:text-base">{pt}</p>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <SectionBlock
        eyebrow="Experienced and Dedicated Faculty"
        title="Experienced and Dedicated Faculty"
        image={facultyImg}
        imageAlt="Teachers at Excellence International School"
        reverse
        intro="Teachers play a vital role in shaping the future of students. The faculty at Excellence International School is experienced, qualified, and dedicated to student success."
        focusLabel="The teaching team is:"
        points={FACULTY_POINTS}
        footer="Teachers encourage students to think creatively, ask questions, and achieve their full potential."
        bg="bg-ink-50"
      />

      {/* Safety */}
      <SectionBlock
        eyebrow="Safe and Disciplined Environment"
        title="Safe and Disciplined Environment"
        image={safeImg}
        imageAlt="Safe campus at Excellence International School"
        intro="A safe and structured environment is essential for effective learning. The school ensures safety through:"
        points={SAFETY_POINTS}
        footer="A safe environment helps students focus on their studies and personal growth with confidence."
        bg="bg-white"
      />

      {/* Values */}
      <section className="bg-ink-50 min-h-screen flex flex-col justify-center py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Values and Ethics</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Values and Ethics</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-500 sm:text-base">
                Excellence International School strongly believes in value-based education. Character development is considered equally important as academic achievement.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}><ValuesStrip /></Reveal>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-[#fdf6e3] min-h-screen flex flex-col justify-center py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Our Commitment</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Our Commitment</h2>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
            <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Excellence International School is committed to:</p>
            <ul className="mt-4 space-y-2">
              {COMMITMENT_POINTS.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-ink-500 sm:text-base">
              The school continues to strive for excellence in education while nurturing responsible future citizens.
            </p>
          </Reveal>

          {/* Join CTA */}
          <Reveal delay={100}>
            <div className="rounded-2xl border border-primary-100 bg-primary-900 p-8 text-white shadow-soft">
              <h3 className="font-serif text-2xl font-bold italic text-gold-400">Join Excellence International School</h3>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400/40" />
              <p className="mt-4 text-sm leading-relaxed text-primary-200 sm:text-base">
                Choosing the right school plays an important role in shaping a child's future. Excellence International School in Aligarh offers the perfect balance of academics, values, discipline, and personal development.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary-200 sm:text-base">
                Admissions are open for multiple classes. Become a part of Excellence International School and begin a journey of learning, growth, and success.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-bold text-ink-900 transition hover:bg-gold-500">
                  Apply for Admission <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

