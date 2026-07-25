import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import SectionHeading from '../components/SectionHeading'
import FaqAccordion from '../components/FaqAccordion'
import { Link, useLocation } from 'react-router-dom'
import { IconArrowRight, IconBook, IconCap, IconShield, IconSpark, IconUsers } from '../components/icons'
import { SITE } from '../data/site'

const BANNER = 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/admission-enquiry-form.png.webp'
const PROCEDURE_BANNER = 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/admission-enquiry-form-1.png.webp'

const STEPS = [
  {
    step: '01',
    title: 'Submit an Enquiry',
    description: 'Fill out the quick enquiry form with your child\'s details and preferred grade.',
  },
  {
    step: '02',
    title: 'Campus Visit',
    description: 'Our admissions team will schedule a campus tour and interaction session.',
  },
  {
    step: '03',
    title: 'Document Submission',
    description: 'Submit the required documents for verification and seat confirmation.',
  },
  {
    step: '04',
    title: 'Admission Confirmed',
    description: 'Complete the formalities and welcome your child to Excellence International School.',
  },
]

const DOCUMENTS = [
  "Child's birth certificate",
  'Transfer certificate (if applicable)',
  'Address proof of parents/guardian',
  'Passport-size photographs',
  'Previous academic records (if applicable)',
]

const OVERVIEW_POINTS = [
  'Contact the School front desk for the registration.',
  'Take the admission forms and attach the necessary documents of student and parents.',
  'In case of Direct Admission, kindly approach school with your previous school documents.',
  'Admission is taken on first come first basis.',
  'There is a special term in case of single girl child of parents.',
]

const PROCEDURE_CARDS = [
  {
    icon: IconBook,
    title: 'Direct Admission',
    desc: 'Direct admission for class Play Group to VIII is also offered to the meritorious student. For more details please contact us with all the necessary documents.',
  },
  {
    icon: IconCap,
    title: 'Entrance Test',
    desc: 'All the applications undergo a standard procedure of an entrance test to prepare and counsel the parents and student to get a bright future.',
  },
  {
    icon: IconShield,
    title: 'Payment Method',
    desc: 'Payment can be done either in Bank directly or in school office. All modes of payment are accepted.',
  },
  {
    icon: IconUsers,
    title: 'Single Girl Child',
    desc: 'There is a special fee concession term available for single girl child of parents. Contact the front desk for further details.',
  },
  {
    icon: IconSpark,
    title: 'Merit-Based Selection',
    desc: "Admission will be granted on the basis of the child's performance in the entrance test and interview, purely on merit.",
  },
  {
    icon: IconArrowRight,
    title: 'No Test for Nursery',
    desc: 'There will be no written test for admission to the Nursery. Direct interaction with parents and child is conducted.',
  },
]

export default function Admissions() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    // slight delay lets the page render before scrolling
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [hash])
  return (
    <>
      {/* ── Banner ─────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col overflow-hidden w-full" style={{ minHeight: '60vh' }}>
        <img src={BANNER} alt="Admission Enquiry Form – Excellence International School" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary-900/50" />
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

      {/* ── Overview + Enquiry Form ─────────────────────────────────────── */}
      <section id="enquiry-form" className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            {/* Left – Overview + Procedure */}
            <div>
              <Reveal>
                <h2 className="font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Overview</h2>
                <div className="mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
                <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Excellence International School's admissions details are given in this page.</p>
              </Reveal>

              <Reveal delay={80}>
                <h3 id="admission-procedure" className="mt-10 font-serif text-xl font-bold text-primary-900 sm:text-2xl">Admission Information</h3>
                <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-500 sm:text-base">
                  <p>The Academic Session is from April to March. Registration opens in the month of December each year. The registration card is to be filled and submitted in the office.</p>
                  <p>A written test will be conducted on a specific date followed by an interview of the child with his/her parents. Admission will be granted on the basis of the child's performance purely on merit.</p>
                  <p>The Admission Form has to be duly filled with all entries and signature.</p>
                  <p className="font-semibold text-primary-900">There will be no written test for admission to the Nursery.</p>
                  <p className="font-semibold text-gold-600">Registrations open from Dec 1st onwards</p>
                </div>
              </Reveal>

              {/* Steps */}
              <Reveal delay={120}>
                <h3 className="mt-10 font-serif text-xl font-bold text-primary-900 sm:text-2xl">Admission Process</h3>
                <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {STEPS.map((s, i) => (
                    <div key={s.step} className="h-full rounded-2xl border border-ink-100 p-6 shadow-card">
                      <span className="font-serif text-3xl font-extrabold text-primary-100">{s.step}</span>
                      <h4 className="mt-2 text-base font-bold text-primary-900">{s.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink-400">{s.description}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Documents */}
              <Reveal delay={160}>
                <div className="mt-8 rounded-2xl bg-ink-50 p-8">
                  <h3 className="text-lg font-bold text-primary-900">Documents Required</h3>
                  <ul className="mt-4 space-y-2">
                    {DOCUMENTS.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm font-medium text-ink-600">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Right – Sticky form */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <EnquiryForm />
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Admission Procedure ─────────────────────────────────────────── */}
      <section id="admission-procedure" className="relative overflow-hidden">
        {/* Procedure banner */}
        <div className="relative flex flex-col" style={{ minHeight: '45vh' }}>
          <img src={PROCEDURE_BANNER} alt="Admission Procedure – Excellence International School" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary-900/40" />
          <div className="relative flex flex-1" />
        </div>

        {/* Overview steps */}
        <div className="bg-white py-16 sm:py-20">
          <div className="container-page">
            <Reveal>
              <div className="mb-10 text-center">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Step by Step</span>
                <h3 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Admission Overview</h3>
                <div className="mx-auto mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              </div>
            </Reveal>
            <div className="mx-auto max-w-3xl space-y-4">
              {OVERVIEW_POINTS.map((pt, i) => (
                <Reveal key={pt} delay={i * 60}>
                  <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-card">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-900 font-serif text-sm font-bold text-gold-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm leading-relaxed text-ink-700 sm:text-base">{pt}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Procedure cards */}
        <div className="bg-[#fdf6e3] py-16 sm:py-20">
          <div className="container-page">
            <Reveal>
              <div className="mb-10 text-center">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Details</span>
                <h3 className="mt-2 font-serif text-2xl font-bold text-primary-900 sm:text-3xl">Key Admission Information</h3>
                <div className="mx-auto mt-2 h-0.5 w-10 rounded-full bg-gold-400" />
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROCEDURE_CARDS.map((card, i) => {
                const Icon = card.icon
                return (
                  <Reveal key={card.title} delay={i * 70}>
                    <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-soft">
                      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-900 text-gold-400 transition group-hover:bg-gold-400 group-hover:text-primary-900">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h4 className="font-serif text-lg font-bold text-primary-900">{card.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">{card.desc}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary-900 py-14 sm:py-16">
          <div className="container-page text-center">
            <Reveal>
              <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">Have an Admission Query?</h3>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-200 sm:text-base">
                For any admission related query you can reach our school or email us at{' '}
                <a href="mailto:excellenceinternationalschool@gmail.com" className="font-semibold text-gold-400 underline underline-offset-2 hover:text-gold-300">
                  excellenceinternationalschool@gmail.com
                </a>
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href="#enquiry-form" className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-bold text-ink-900 transition hover:bg-gold-500">
                  Fill Enquiry Form <IconArrowRight className="h-4 w-4" />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQs ────────────────────────────────────────────────────────── */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading center eyebrow="Have Questions?" title="Admissions FAQs" />
          </Reveal>
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  )
}
