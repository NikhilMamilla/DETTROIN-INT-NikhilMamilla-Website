import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ValuesStrip from '../components/ValuesStrip'
import { IconArrowRight } from '../components/icons'

import facultyImg from '../assets/images/Experienced-and-Dedicated-Faculty.png'
import visionImg from '../assets/images/Vision-Mission.png'
import classroomImg from '../assets/gallery/9.jpg'

const MISSION = [
  'Deliver high-quality education',
  'Encourage curiosity and creativity',
  'Develop strong academic foundations',
  'Promote discipline and ethical values',
  'Prepare students for future opportunities',
]

export default function About() {
  return (
    <>
      <PageHero title="About Excellence International School" crumb="About Us" />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={classroomImg}
              alt="Classroom at Excellence International School"
              className="h-full w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold-500">
              Who We Are
            </p>
            <h2 className="text-3xl font-extrabold text-primary-900 sm:text-4xl">
              Dedicated to Modern, Balanced Education
            </h2>
            <p className="mt-5 leading-relaxed text-ink-400">
              Excellence International School, Aligarh is dedicated to providing modern education
              with a balanced approach to academics, co-curricular activities, and character
              development.
            </p>
            <p className="mt-4 leading-relaxed text-ink-400">
              We believe education should develop knowledge, critical thinking, discipline, and
              life skills. With a student-focused approach and supportive learning environment,
              we help children grow into confident and responsible individuals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-50 py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={visionImg}
              alt="Vision and Mission"
              className="mx-auto w-full max-w-[260px] rounded-2xl sm:max-w-sm"
            />
          </Reveal>
          <Reveal delay={100}>
            <h3 className="text-2xl font-extrabold text-primary-900">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-ink-400">
              To create confident, responsible, and innovative individuals who contribute
              positively to society.
            </p>
            <h3 className="mt-8 text-2xl font-extrabold text-primary-900">Our Mission</h3>
            <ul className="mt-4 space-y-3">
              {MISSION.map((m) => (
                <li key={m} className="flex items-start gap-3 text-sm font-medium text-ink-600">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                    ✓
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold-500">
              Our Faculty
            </p>
            <h2 className="text-3xl font-extrabold text-primary-900 sm:text-4xl">
              Experienced and Dedicated Faculty
            </h2>
            <p className="mt-5 leading-relaxed text-ink-400">
              Teachers play a crucial role in shaping students' futures. Our faculty is qualified,
              experienced, and committed to providing quality education through interactive
              classroom discussions, activity-based learning, real-life examples, and
              technology-supported teaching.
            </p>
            <p className="mt-4 leading-relaxed text-ink-400">
              Teachers regularly monitor student progress and provide individual guidance whenever
              needed — helping every child improve academically and grow in confidence.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={facultyImg}
              alt="Teacher with students at Excellence International School"
              className="h-full w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-50 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Value-Based Education"
              title="The Values We Instill"
              subtitle="Every learner receives personalized attention and encouragement to build character alongside academic success."
            />
          </Reveal>
          <div className="mt-12">
            <ValuesStrip />
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <Reveal>
          <h3 className="text-2xl font-extrabold text-primary-900">Want to know more?</h3>
          <p className="mt-2 text-ink-400">Explore our academics or reach out to our admissions team.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-800"
            >
              View Academics <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-200 px-6 py-3 text-sm font-bold text-primary-700 transition hover:bg-primary-50"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
