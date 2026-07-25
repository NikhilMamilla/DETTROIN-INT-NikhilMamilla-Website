import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroBannerSlider from '../components/HeroBannerSlider'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import SectionHeading from '../components/SectionHeading'
import ImageCard from '../components/ImageCard'
import Testimonials from '../components/Testimonials'
import ValuesStrip from '../components/ValuesStrip'
import FaqAccordion from '../components/FaqAccordion'
import { IconArrowRight, IconBook, IconBus, IconCap, IconShield, IconSpark, IconUsers } from '../components/icons'
import { ACADEMIC_STAGES, WHY_US } from '../data/content'
import { SITE } from '../data/site'

import heroImg from '../assets/gallery/27.jpg'
import heroImg2 from '../assets/gallery/21.jpg'
import heroImg3 from '../assets/gallery/22.jpg'
import aboutImg from '../assets/gallery/20.jpg'
import visionMissionImg from '../assets/images/Vision-Mission.png'

const HIGHLIGHTS = [
  { icon: IconCap, label: 'Play Group to Class VIII' },
  { icon: IconShield, label: 'Safe & Secure Campus' },
  { icon: IconUsers, label: 'Experienced Faculty' },
  { icon: IconBus, label: 'Transport Facility' },
]

const MISSION_POINTS = [
  'Deliver high-quality, value-based education',
  'Encourage curiosity, creativity, and confidence',
  'Build strong academic foundations from early years',
  'Promote discipline, kindness, and ethical values',
  'Prepare students for future opportunities and leadership',
]

const LEARNING_ENVIRONMENT = [
  {
    title: 'Student-focused',
    text: 'Every child receives care, attention, and guidance that supports their individual pace of learning.',
    icon: IconUsers,
  },
  {
    title: 'Encouraging & Supportive',
    text: 'Teachers create a warm classroom culture where students feel confident to ask, explore, and participate.',
    icon: IconCap,
  },
  {
    title: 'Structured & Disciplined',
    text: 'A balanced routine helps learners build responsibility, focus, respect, and strong academic habits.',
    icon: IconShield,
  },
  {
    title: 'Growth-oriented',
    text: 'Students are motivated to improve every day through meaningful activities, feedback, and opportunities.',
    icon: IconBook,
  },
]

const DEVELOPMENT_AREAS = [
  {
    title: 'Skill Based Learning',
    icon: IconCap,
    paragraphs: [
      'Skill-based learning helps students think creatively and logically. It encourages them to apply knowledge practically and develop innovative ideas.',
      'Students gain skills that support academic success and real-life problem solving.',
    ],
  },
  {
    title: 'Community Service',
    icon: IconUsers,
    paragraphs: [
      'Community service activities help students understand social responsibility and empathy.',
      'By interacting with different communities, students develop awareness, compassion, and interpersonal skills.',
    ],
  },
  {
    title: 'Experiential Learning',
    icon: IconBook,
    paragraphs: [
      'Experiential learning connects classroom knowledge with real-life experiences.',
      'This method encourages active participation, practical understanding, and deeper engagement with learning.',
    ],
  },
  {
    title: 'STREAM Education',
    icon: IconSpark,
    paragraphs: [
      'STREAM education integrates science, technology, reading, engineering, arts, and mathematics to build strong analytical and creative thinking abilities.',
      'Students learn to solve problems, think critically, and innovate.',
    ],
  },
  {
    title: 'Visual & Performing Arts',
    icon: IconSpark,
    paragraphs: [
      'Artistic activities such as music, dance, drawing, drama, and creative expression help develop imagination and emotional intelligence.',
      'These activities improve communication, creativity, and overall personality development.',
    ],
  },
  {
    title: 'Physical Development Programs',
    icon: IconShield,
    paragraphs: ['Physical programs and sports activities help build:'],
    points: ['Physical strength', 'Leadership skills', 'Strategic thinking', 'Healthy lifestyle habits'],
    footer: 'Students learn the importance of fitness and teamwork.',
  },
]

function StackedCards() {
  const [hovered, setHovered] = useState(false)

  const card3Style = hovered
    ? { transform: 'rotate(-28deg) translateX(-90px) translateY(20px)', zIndex: 1 }
    : { transform: 'rotate(-8deg) translateX(-28px) translateY(16px)', zIndex: 1 }

  const card2Style = hovered
    ? { transform: 'rotate(-14deg) translateX(-48px) translateY(10px)', zIndex: 2 }
    : { transform: 'rotate(-3deg) translateX(-10px) translateY(6px)', zIndex: 2 }

  const card1Style = hovered
    ? { transform: 'rotate(0deg) translateX(0) translateY(0) scale(1.04)', zIndex: 3 }
    : { transform: 'rotate(0deg) translateX(0) translateY(0) scale(1)', zIndex: 3 }

  return (
    <div
      className="relative h-[300px] w-full cursor-pointer sm:h-[360px] lg:h-[420px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card 3 — back */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[24px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        style={{ ...card3Style, transition: 'transform 0.7s cubic-bezier(0.34,1.56,0.64,1)', transformOrigin: 'bottom right' }}
      >
        <img src={heroImg3} alt="School" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <span className="inline-block rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-300 backdrop-blur-md">Arts & Culture</span>
          <p className="mt-2 text-xl font-extrabold text-white">Creative Expression</p>
        </div>
      </div>

      {/* Card 2 — middle */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[24px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        style={{ ...card2Style, transition: 'transform 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.05s', transformOrigin: 'bottom right' }}
      >
        <img src={heroImg2} alt="School" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <span className="inline-block rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-300 backdrop-blur-md">Sports & Activities</span>
          <p className="mt-2 text-xl font-extrabold text-white">Beyond Academics</p>
        </div>
      </div>

      {/* Card 1 — front */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[24px] border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
        style={{ ...card1Style, transition: 'transform 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.1s' }}
      >
        <img
          src={heroImg}
          alt="Students at Excellence International School"
          className="h-full w-full object-cover"
          style={{ transition: 'transform 1s ease-out', transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-300 backdrop-blur-md">Featured</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Aligarh, UP</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white leading-tight mb-4">Excellence International School</h3>
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">Programs</p>
              <p className="text-lg font-extrabold text-white tracking-wide">PG – VIII</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">Est.</p>
              <p className="text-lg font-extrabold text-gold-400 tracking-wide">2015</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Banner Slider */}
      <HeroBannerSlider />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-900 text-white">
        <div className="container-page grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-20">
          <div className="animate-fade-up text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-300">
              Admissions Open {SITE.admissionSession}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {SITE.tagline}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-primary-100 sm:text-base">
              {SITE.name} is one of the best schools in Aligarh, Uttar Pradesh — known for quality
              learning, discipline, and holistic development from {SITE.admissionRange}.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-bold text-ink-900 shadow-soft transition hover:bg-gold-500">
                Apply for Admission <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Discover More
              </Link>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 lg:items-start">
                  <Icon className="h-6 w-6 text-gold-300" />
                  <dd className="text-xs font-semibold text-primary-100 text-center lg:text-left">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-xs animate-fade-up sm:max-w-sm lg:ml-auto lg:mr-0 lg:max-w-md lg:translate-x-16 lg:translate-y-8" style={{ animationDelay: '150ms' }}>
            <StackedCards />
          </div>
        </div>

        {/* Animated wave */}
        <div className="relative w-full overflow-hidden leading-none" style={{ height: '80px' }}>
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-[200%]"
            preserveAspectRatio="none"
            style={{ height: '80px', animation: 'wavePan 6s linear infinite' }}
          >
            <path
              d="M0,40 C120,70 240,10 360,40 C480,70 600,10 720,40 C840,70 960,10 1080,40 C1200,70 1320,10 1440,40 C1560,70 1680,10 1800,40 C1920,70 2040,10 2160,40 C2280,70 2400,10 2520,40 C2640,70 2760,10 2880,40 L2880,80 L0,80 Z"
              fill="white"
            />
          </svg>
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-[200%]"
            preserveAspectRatio="none"
            style={{ height: '80px', opacity: 0.4, animation: 'wavePan 9s linear infinite reverse' }}
          >
            <path
              d="M0,55 C90,30 180,65 360,50 C540,35 720,65 900,48 C1080,30 1260,65 1440,50 C1620,35 1800,65 1980,50 C2160,30 2340,65 2520,50 C2700,35 2820,60 2880,55 L2880,80 L0,80 Z"
              fill="white"
            />
          </svg>
          <style>{`
            @keyframes wavePan {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </section>

      {/* About teaser + enquiry */}
      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:py-20">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="block h-0.5 w-8 bg-gold-500 rounded-full" />
            <p className="text-xs font-bold tracking-[0.3em] text-gold-500 uppercase">
              Best School in {SITE.city}
            </p>
          </div>

          <h2 className="font-serif font-bold leading-[1.3] text-2xl sm:text-3xl lg:text-5xl">
            <span className="text-primary-900">Excellence International School – </span>
            <span className="italic text-primary-600">Shaping Future Leaders </span>
            <span className="not-italic text-primary-900">Through Quality Education</span>
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-500 sm:text-[0.95rem]">
            <p>
              <span className="font-bold text-ink-800">Excellence International School</span> is one of the{' '}
              <span className="font-semibold text-primary-700 underline decoration-gold-400 underline-offset-2">best schools in Aligarh</span>, Uttar Pradesh, known for quality learning, discipline, and holistic development. The institution is dedicated to nurturing young minds with knowledge, confidence, creativity, and strong ethical values for a bright future.
            </p>
            <p>
              The school focuses on building a strong academic foundation while encouraging innovation, leadership, and personal growth. Every student is guided to explore their potential and develop the skills needed to succeed in life.
            </p>
            <p>
              Education at Excellence International School is not limited to textbooks. It aims to create responsible individuals who are prepared for academic success as well as real-world challenges.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <EnquiryForm />
        </Reveal>
      </section>

      {/* Vision and mission */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gold-50 via-white to-primary-50 py-20">
        <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-gold-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-primary-300/20 blur-3xl" />

        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              center
              eyebrow="About Excellence International School"
              title="Our Vision, Mission & Promise"
              subtitle="A modern learning environment where children grow with knowledge, discipline, creativity, and strong character."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
            <Reveal delay={100}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft ring-1 ring-primary-100/70">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/15 via-transparent to-gold-300/20 opacity-0 transition group-hover:opacity-100" />
                <img
                  src={visionMissionImg}
                  alt="Vision and mission of Excellence International School"
                  className="h-full min-h-[300px] w-full rounded-[1.5rem] object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 shadow-card backdrop-blur">
                  <p className="text-sm font-bold uppercase tracking-widest text-gold-600">Student-first approach</p>
                  <p className="mt-2 text-lg font-extrabold text-primary-900">
                    Learning that shapes confident and responsible individuals.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid h-full gap-6">
                <div className="rounded-[2rem] bg-primary-900 p-8 text-white shadow-soft">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400 text-primary-900 shadow-card">
                    <IconBook className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold">Our Vision</h3>
                  <p className="mt-3 leading-relaxed text-primary-100">
                    To create confident, responsible, and innovative individuals who contribute
                    positively to society and lead with knowledge, compassion, and purpose.
                  </p>
                </div>

                <div className="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-primary-100/70">
                  <h3 className="text-2xl font-extrabold text-primary-900">Our Mission</h3>
                  <ul className="mt-5 grid gap-3">
                    {MISSION_POINTS.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm font-semibold text-ink-600 sm:text-base">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs font-extrabold text-gold-700">
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Academic stages */}
      <section className="bg-ink-50 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Academics"
              title="A Learning Journey for Every Stage"
              subtitle="Age-appropriate learning methods that help children build strong academic skills, confidence, and personal growth."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ACADEMIC_STAGES.map((stage, i) => (
              <Reveal key={stage.id} delay={i * 100}>
                <ImageCard image={stage.image} title={stage.title} description={stage.summary} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 font-bold text-primary-700 hover:text-primary-800"
            >
              Explore all academic stages <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Learning environment */}
      <section className="relative overflow-hidden bg-primary-900 py-20 text-white">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-primary-500/30 blur-3xl" />

        <div className="container-page relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-gold-300">
                Learning Environment
              </p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Positive, Motivating & Built for Growth
              </h2>
              <p className="mt-5 text-primary-100">
                The school provides a happy and disciplined atmosphere where students feel motivated
                to learn, explore, and achieve their full potential.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal delay={100}>
              <div className="relative mx-auto flex aspect-square max-w-sm items-center justify-center rounded-full border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
                <div className="absolute inset-8 rounded-full border border-dashed border-gold-300/40" />
                <div className="absolute inset-16 rounded-full bg-gold-400/10 blur-xl" />
                <div className="relative rounded-[2rem] bg-white p-8 text-center text-primary-900 shadow-card">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-400">
                    <IconCap className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold">Inspired Learners</h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-ink-500">
                    Confidence, curiosity, discipline, and creativity come together in every classroom.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {LEARNING_ENVIRONMENT.map(({ title, text, icon: Icon }, i) => (
                <Reveal key={title} delay={150 + i * 80}>
                  <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.11]">
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-300/10 transition group-hover:bg-gold-300/20" />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary-800 shadow-card">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="relative mt-5 text-xl font-extrabold">{title}</h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-primary-100">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-page py-20">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Why Choose Us"
            title="Why Excellence International School is the Best in Aligarh"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <ImageCard image={item.image} title={item.title} description={item.description} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Holistic development */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary-50/80 to-transparent" />
        <div className="absolute left-8 top-28 h-32 w-32 rounded-full bg-gold-300/20 blur-3xl" />
        <div className="absolute bottom-12 right-8 h-40 w-40 rounded-full bg-primary-300/15 blur-3xl" />

        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Holistic Development Approach"
              title="Modern Infrastructure for Effective Learning"
              subtitle="A well-planned campus environment enhances every learner's experience through programs that support academic, creative, social, and physical growth."
            />
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {DEVELOPMENT_AREAS.map(({ title, icon: Icon, paragraphs, points, footer }, i) => (
              <Reveal key={title} delay={i * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-primary-100 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-soft">
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary-50 transition group-hover:bg-gold-100" />
                  <div className="relative flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-700 text-white shadow-card ring-4 ring-primary-100 transition group-hover:bg-gold-400 group-hover:text-primary-900 group-hover:ring-gold-100">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="text-xl font-extrabold leading-tight text-primary-900">{title}</h3>
                  </div>

                  <div className="relative mt-6 space-y-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                    {paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {points && (
                      <ul className="space-y-2 pt-1">
                        {points.map((point) => (
                          <li key={point} className="flex items-start gap-2 font-semibold text-ink-600">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-700" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {footer && <p>{footer}</p>}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-20">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Value-Based Education"
            title="Character Alongside Academic Excellence"
            subtitle="Excellence International School strongly believes in developing moral values that shape confident, responsible individuals."
          />
        </Reveal>
        <div className="mt-12">
          <ValuesStrip />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink-50 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading center eyebrow="Testimonials" title="What Parents Say About Us" />
          </Reveal>
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-20">
        <Reveal>
          <SectionHeading center eyebrow="FAQs" title="Frequently Asked Questions" />
        </Reveal>
        <div className="mt-12">
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gold-400 p-10 text-center shadow-soft sm:flex-row sm:text-left">
          <div>
            <h3 className="text-2xl font-extrabold text-ink-900">
              Admissions open for {SITE.admissionSession}
            </h3>
            <p className="mt-1 text-sm font-medium text-ink-800/80">
              Seats are limited — {SITE.admissionRange}. Book a campus visit today.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-primary-900"
          >
            Contact Admissions <IconArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
