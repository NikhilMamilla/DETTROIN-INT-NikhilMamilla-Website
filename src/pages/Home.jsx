import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroBannerSlider from '../components/HeroBannerSlider'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import SectionHeading from '../components/SectionHeading'
import Testimonials from '../components/Testimonials'
import ValuesStrip from '../components/ValuesStrip'
import FaqAccordion from '../components/FaqAccordion'
import { IconArrowRight, IconBook, IconBus, IconCap, IconShield, IconSpark, IconUsers } from '../components/icons'
import { ACADEMIC_STAGES, WHY_US, HOLISTIC_PROGRAMS, INFRASTRUCTURE } from '../data/content'
import { SITE } from '../data/site'

import heroImg from '../assets/gallery/27.jpg'
import heroImg2 from '../assets/gallery/21.jpg'
import heroImg3 from '../assets/gallery/22.jpg'
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

const HOLISTIC_DATA = [
  {
    title: 'Sports and Physical Education',
    image: HOLISTIC_PROGRAMS[0].image,
    intro: 'Sports activities help students develop discipline, teamwork, and physical fitness.',
    focusLabel: 'Students participate in:',
    points: ['Outdoor sports','Indoor games','Physical fitness activities','Sports competitions','Yoga and wellness programs'],
    footer: 'Sports improve both physical health and mental strength.',
    isEven: true,
  },
  {
    title: 'Cultural and Creative Activities',
    image: HOLISTIC_PROGRAMS[1].image,
    intro: 'Cultural activities encourage creativity, expression, and confidence.',
    focusLabel: 'Students take part in:',
    points: ['Dance','Music','Drama','Art and craft','Debate competitions','School events and annual functions'],
    footer: 'Participation in such activities builds communication skills and confidence.',
    isEven: false,
  },
  {
    title: 'Personality Development and Life Skills',
    image: HOLISTIC_PROGRAMS[2].image,
    intro: 'The school emphasizes building essential life skills that help students succeed in the future.',
    focusLabel: 'Key focus areas include:',
    points: ['Public speaking skills','Leadership development','Discipline and responsibility','Teamwork and collaboration','Moral and ethical education'],
    footer: 'Students grow into confident individuals ready to face real-life challenges.',
    isEven: true,
  },
  {
    title: 'Transportation Facility',
    image: HOLISTIC_PROGRAMS[3].image,
    intro: 'Excellence International School offers safe and convenient transportation for students.',
    focusLabel: 'Transportation features include:',
    points: ['Well-maintained school buses','Experienced drivers','Fixed routes and schedules','Supervised student travel'],
    footer: 'This ensures safety and convenience for students and parents.',
    isEven: false,
  },
]

function HolisticSection() {
  const [active, setActive] = useState(0)
  const item = HOLISTIC_DATA[active]

  return (
    <section className="bg-slate-50 py-16 sm:py-20 min-h-screen flex flex-col justify-center">
      <div className="container-page">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Holistic Growth</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Holistic Development Approach</h2>
          <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(28,35,84,0.10)] ring-1 ring-ink-100">
          <div className="grid lg:grid-cols-2 lg:min-h-[420px]">
            {/* Image */}
            <div className={`${item.isEven ? 'lg:order-1' : 'lg:order-2'}`}>
              <img
                key={active}
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover sm:h-80 lg:h-full"
              />
            </div>
            {/* Text */}
            <div className={`flex flex-col justify-center gap-3 p-8 sm:p-10 ${item.isEven ? 'lg:order-2' : 'lg:order-1'}`}>
              <span className="inline-block w-fit rounded-full bg-primary-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-400">
                0{active + 1} / 0{HOLISTIC_DATA.length}
              </span>
              <h3 className="font-serif text-2xl font-bold text-primary-900 sm:text-3xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-500 sm:text-base">{item.intro}</p>
              <p className="text-sm font-semibold text-ink-700">{item.focusLabel}</p>
              <ul className="space-y-1.5">
                {item.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                    {pt}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-ink-500 sm:text-base">{item.footer}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {HOLISTIC_DATA.map((d, i) => (
            <button
              key={d.title}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                i === active
                  ? 'bg-primary-900 text-white shadow-card'
                  : 'border border-ink-200 bg-white text-ink-600 hover:border-primary-300 hover:text-primary-800'
              }`}
            >
              {d.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

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
      <section className="relative min-h-screen overflow-hidden bg-primary-900 flex flex-col justify-center py-24">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container-page relative">

          {/* Header */}
          <Reveal>
            <div className="mb-4 text-center">
              <span className="inline-block rounded-full border border-gold-400/20 bg-gold-400/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-gold-400">
                About Excellence International School
              </span>
              <h2 className="mt-5 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Our Vision, Mission <span className="italic text-gold-400">&amp; Promise</span>
              </h2>
              <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gold-400/50" />
            </div>
            <div className="mx-auto mt-6 max-w-3xl space-y-3 text-center text-sm leading-relaxed text-primary-200 sm:text-base">
              <p>
                <span className="font-bold text-white">Excellence International School, Aligarh</span> is dedicated to providing modern education with a balanced approach to academics, co-curricular activities, and character development.
              </p>
              <p>
                The school believes that education should develop knowledge, critical thinking, discipline, and life skills. With a student-focused approach and supportive learning environment, the institution helps children grow into confident and responsible individuals.
              </p>
            </div>
          </Reveal>

          {/* Image + Vision/Mission */}
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-stretch">

            {/* Image */}
            <Reveal delay={100}>
              <div className="group relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <img
                  src={visionMissionImg}
                  alt="Vision and Mission"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400">Student-first approach</span>
                  <p className="mt-2 font-serif text-xl font-bold italic text-white leading-snug">
                    Learning that shapes confident and responsible individuals.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Vision + Mission stacked */}
            <Reveal delay={200}>
              <div className="flex h-full flex-col gap-6">

                {/* Vision */}
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400 text-primary-900 shadow-card">
                      <IconBook className="h-5 w-5" />
                    </span>
                    <h3 className="font-serif text-2xl font-bold italic text-gold-400">Vision</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-primary-100 sm:text-base">
                    To create confident, responsible, and innovative individuals who contribute positively to society and lead with knowledge, compassion, and purpose.
                  </p>
                </div>

                {/* Mission */}
                <div className="flex-[2] rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-700 text-gold-300 shadow-card">
                      <IconSpark className="h-5 w-5" />
                    </span>
                    <h3 className="font-serif text-2xl font-bold italic text-white">Mission</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {MISSION_POINTS.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-primary-100 sm:text-base">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-[10px] font-bold text-gold-400">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm font-semibold text-white sm:text-base">
                    Every learner receives personalized attention and encouragement to achieve their goals.
                  </p>
                  <Link to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300 transition">
                    Learn more about us <IconArrowRight className="h-4 w-4" />
                  </Link>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Academic stages — sticky stack */}
      <section className="bg-white">
        {/* Header */}
        <div className="container-page py-14 text-center sm:py-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Academics</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Academic Stages</h2>
          <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">
            At <span className="font-bold text-ink-800">Excellence International School</span>, the academic journey is structured to support students at every stage of their development. Each stage focuses on age-appropriate learning methods that help children build strong academic skills, confidence, and personal growth.
          </p>
        </div>

        {/* Sticky stack cards */}
        <div className="relative">
          {[
            {
              ...ACADEMIC_STAGES[0],
              intro: 'Early childhood education focuses on nurturing curiosity, creativity, and basic learning abilities in a joyful environment.',
              focusLabel: 'Key focus areas include:',
              points: ['Play-based learning','Language development','Basic numeracy skills','Social interaction','Creative exploration'],
              footer: 'Children learn through activities, storytelling, games, and interactive sessions that make learning enjoyable and engaging.',
            },
            {
              ...ACADEMIC_STAGES[1],
              intro: 'Primary education is designed to strengthen core academic skills while encouraging curiosity and independent learning.',
              focusLabel: 'The primary stage focuses on:',
              points: ['Reading and writing skills','Fundamental mathematics','Basic science concepts','Moral values and good habits','Classroom discipline and responsibility'],
              footer: 'Students gradually develop critical thinking, problem-solving abilities, and better understanding of academic subjects.',
            },
            {
              ...ACADEMIC_STAGES[2],
              intro: 'Middle school prepares students for advanced academic learning while developing analytical thinking and responsibility.',
              focusLabel: 'Key areas of focus include:',
              points: ['Advanced reading and writing skills','Concept-based mathematics','Science exploration and practical understanding','Social studies and general awareness','Communication and presentation skills'],
              footer: 'Students are encouraged to ask questions, explore ideas, and participate actively in classroom discussions.',
            },
            {
              ...ACADEMIC_STAGES[3],
              intro: null,
              introRich: <>The <span className="font-bold text-ink-800">Daycare facility at Excellence International School</span> provides a safe, caring, and supportive environment for young children while their parents are at work.</>,
              focusLabel: 'The daycare program includes:',
              points: ['Safe and supervised environment','Play and activity-based engagement','Rest and relaxation time','Interactive learning activities','Social interaction with peers'],
              footer: 'Children receive proper care, attention, and engaging activities that support their emotional, social, and cognitive development throughout the day.',
            },
          ].map((stage, i) => {
            const isEven = i % 2 === 0
            const colors = ['bg-white', 'bg-ink-50', 'bg-primary-50', 'bg-gold-50']
            const isLast = i === 3
            return (
              <div
                key={stage.id}
                className="sticky"
                style={{ top: `${60 + i * 14}px`, zIndex: 10 + i }}
              >
                <div className={`${colors[i]} border-t border-ink-100 shadow-[0_-6px_30px_rgba(0,0,0,0.07)]`}>
                  <div className="container-page grid items-center gap-8 py-14 sm:gap-10 lg:grid-cols-2 lg:py-20">

                    {/* Image */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                        <img src={stage.image} alt={stage.title} className="h-64 w-full object-cover transition duration-700 hover:scale-105 sm:h-80" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-3`}>
                      <span className="inline-block rounded-full bg-primary-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-400">
                        Stage {i + 1}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-primary-900 sm:text-3xl">{stage.title}</h3>
                      <p className="text-sm leading-relaxed text-ink-500 sm:text-base">
                        {stage.introRich || stage.intro}
                      </p>
                      {stage.focusLabel && (
                        <p className="text-sm font-semibold text-ink-700 sm:text-base">{stage.focusLabel}</p>
                      )}
                      <ul className="space-y-1.5">
                        {stage.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm leading-relaxed text-ink-500 sm:text-base">{stage.footer}</p>

                      {/* Button only on last card */}
                      {isLast && (
                        <div className="pt-4">
                          <Link to="/academics" className="inline-flex items-center gap-2 rounded-full bg-primary-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-800">
                            Explore All Academic Stages <IconArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Learning environment */}
      <section className="relative min-h-screen overflow-hidden bg-primary-900 py-20 flex flex-col justify-center text-white">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-primary-700/40 blur-3xl pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

        <div className="container-page relative">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">Learning Environment</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Positive, Motivating &amp; Built for Growth
              </h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400/50" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-200 sm:text-base">
                The school provides a happy and disciplined atmosphere where students feel motivated to learn, explore, and achieve their full potential.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LEARNING_ENVIRONMENT.map(({ title, text, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-gold-400/20">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400 text-primary-900">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-200">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us — sticky stack same as Academic Stages */}
      <section className="bg-white">
        <div className="container-page py-14 text-center sm:py-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Why Choose Us</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Why Excellence International School is the Best in Aligarh</h2>
          <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
        </div>

        <div className="relative">
          {[
            {
              id: 'strong-academic',
              title: 'Strong Academic System',
              image: WHY_US[0].image,
              intro: 'Excellence International School follows a structured and well-planned academic approach to ensure effective learning.',
              focusLabel: 'The academic framework includes:',
              points: ['Well-planned daily lessons','Concept-focused teaching','Regular revision sessions','Periodic assessments','Doubt-clearing sessions','Continuous performance monitoring'],
              footer: 'Teachers guide students individually to help them improve academically and build confidence in learning.',
            },
            {
              id: 'concept-learning',
              title: 'Concept-Based Learning',
              image: WHY_US[1].image,
              intro: 'Education at Excellence International School focuses on understanding concepts rather than memorizing information.',
              focusLabel: 'Students develop:',
              points: ['Analytical thinking','Problem-solving abilities','Logical reasoning','Practical knowledge'],
              footer: 'This approach prepares students for higher studies and future career paths.',
            },
            {
              id: 'faculty',
              title: 'Experienced and Dedicated Faculty',
              image: WHY_US[2].image,
              intro: 'Teachers play a crucial role in shaping students\' future. The faculty at Excellence International School is qualified, experienced, and committed to providing quality education.',
              focusLabel: 'Teaching methods include:',
              points: ['Interactive classroom discussions','Activity-based learning','Real-life examples','Student participation','Technology-supported learning'],
              footer: 'Teachers regularly monitor student progress and provide guidance whenever needed.',
            },
            {
              id: 'safe-campus',
              title: 'Safe and Secure Campus',
              image: WHY_US[3].image,
              intro: 'A secure learning environment helps students focus on their education and development.',
              focusLabel: 'The school ensures safety through:',
              points: ['CCTV monitoring','Supervised campus areas','Structured discipline policies','Responsible staff supervision','Safe entry and exit systems'],
              footer: 'Students can learn and grow in a safe and supportive environment.',
            },
          ].map((item, i) => {
            const isEven = i % 2 === 0
            const colors = ['bg-white', 'bg-ink-50', 'bg-primary-50', 'bg-gold-50']
            const isLast = i === 3
            return (
              <div key={item.id} className="sticky" style={{ top: `${60 + i * 14}px`, zIndex: 10 + i }}>
                <div className={`${colors[i]} border-t border-ink-100 shadow-[0_-6px_30px_rgba(0,0,0,0.07)]`}>
                  <div className="container-page grid items-center gap-8 py-14 sm:gap-10 lg:grid-cols-2 lg:py-20">

                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(28,35,84,0.12)]">
                        <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition duration-700 hover:scale-105 sm:h-80" />
                      </div>
                    </div>

                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-3`}>
                      <span className="inline-block rounded-full bg-primary-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-400">0{i + 1}</span>
                      <h3 className="font-serif text-2xl font-bold text-primary-900 sm:text-3xl">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-ink-500 sm:text-base">{item.intro}</p>
                      <p className="text-sm font-semibold text-ink-700 sm:text-base">{item.focusLabel}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm leading-relaxed text-ink-500 sm:text-base">{item.footer}</p>
                      {isLast && (
                        <div className="pt-4">
                          <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-primary-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-800">
                            Learn More About Us <IconArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Holistic development */}
      <HolisticSection />

      {/* Modern Infrastructure */}
      <section className="relative overflow-hidden bg-primary-900 py-20 text-white">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

        <div className="container-page relative">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">Infrastructure</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
                Modern Infrastructure for <span className="italic text-gold-400">Effective Learning</span>
              </h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400/50" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-200 sm:text-base">
                A well-planned campus environment enhances the learning experience. Excellence International School provides modern facilities that support both academic and extracurricular development.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Skill Based Learning',
                icon: IconCap,
                texts: [
                  'Skill-based learning helps students think creatively and logically. It encourages them to apply their knowledge practically and develop innovative ideas.',
                  'Students gain skills that support academic success and real-life problem solving.',
                ],
              },
              {
                title: 'Community Service',
                icon: IconUsers,
                texts: [
                  'Community service activities help students understand social responsibility and empathy.',
                  'By interacting with different communities, students develop awareness, compassion, and interpersonal skills.',
                ],
              },
              {
                title: 'Experiential Learning',
                icon: IconBook,
                texts: [
                  'Experiential learning connects classroom knowledge with real-life experiences.',
                  'This method encourages active participation, practical understanding, and deeper engagement with learning.',
                ],
              },
              {
                title: 'STREAM Education',
                icon: IconSpark,
                texts: [
                  'STREAM education integrates science, technology, reading, engineering, arts, and mathematics to build strong analytical and creative thinking abilities.',
                  'Students learn to solve problems, think critically, and innovate.',
                ],
              },
              {
                title: 'Visual & Performing Arts',
                icon: IconSpark,
                texts: [
                  'Artistic activities such as music, dance, drawing, drama, and creative expression help develop imagination and emotional intelligence.',
                  'These activities improve communication, creativity, and overall personality development.',
                ],
              },
              {
                title: 'Physical Development Programs',
                icon: IconShield,
                texts: ['Physical programs and sports activities help build:'],
                points: ['Physical strength', 'Leadership skills', 'Strategic thinking', 'Healthy lifestyle habits'],
                footer: 'Students learn the importance of fitness and teamwork.',
              },
            ].map(({ title, icon: Icon, texts, points, footer }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gold-400/25 hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-800 text-gold-400 ring-1 ring-white/10 transition group-hover:bg-gold-400 group-hover:text-primary-900">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white leading-snug">{title}</h3>
                  </div>
                  <div className="flex-1 space-y-3 text-sm leading-relaxed text-primary-200">
                    {texts.map((t, j) => <p key={j}>{t}</p>)}
                    {points && (
                      <ul className="space-y-1.5 pt-1">
                        {points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                    {footer && <p>{footer}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Value-Based Education</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">
                Character Alongside <span className="italic text-primary-600">Academic Excellence</span>
              </h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">
                Excellence International School strongly believes in developing moral values along with academic excellence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ValuesStrip />
          </Reveal>
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
      <section className="bg-primary-50 py-20">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">FAQs</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary-900 sm:text-4xl">Frequently Asked Questions</h2>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-gold-400" />
            </div>
          </Reveal>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16 pb-24">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gold-400 p-8 text-center shadow-soft sm:flex-row sm:text-left sm:p-10">
          <div className="flex-1">
            <h3 className="text-xl font-extrabold text-ink-900 sm:text-2xl">
              Admissions open for {SITE.admissionSession}
            </h3>
            <p className="mt-1 text-sm font-medium text-ink-800/80">
              Seats are limited — {SITE.admissionRange}. Book a campus visit today.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-primary-900 sm:w-auto"
          >
            Contact Admissions <IconArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
