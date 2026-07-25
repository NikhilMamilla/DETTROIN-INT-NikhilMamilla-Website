import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import SectionHeading from '../components/SectionHeading'
import FaqAccordion from '../components/FaqAccordion'
import { SITE } from '../data/site'

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

export default function Admissions() {
  return (
    <>
      <PageHero title="Admissions" crumb="Admissions" />

      <section className="container-page py-20">
        <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Reveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold-500">
                {SITE.admissionSession} Session
              </p>
              <h2 className="text-3xl font-extrabold text-primary-900 sm:text-4xl">
                Admissions Open — {SITE.admissionRange}
              </h2>
              <p className="mt-5 leading-relaxed text-ink-400">
                We welcome applications for {SITE.admissionRange} for the {SITE.admissionSession}{' '}
                academic session. Seats are limited and allotted on a first-come, first-served
                basis subject to availability.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {STEPS.map((s, i) => (
                <Reveal key={s.step} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-ink-100 p-6 shadow-card">
                    <span className="font-display text-3xl font-extrabold text-primary-100">
                      {s.step}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-primary-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">{s.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-12 rounded-2xl bg-ink-50 p-8">
                <h3 className="text-lg font-bold text-primary-900">Documents Required</h3>
                <ul className="mt-4 space-y-2">
                  {DOCUMENTS.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm font-medium text-ink-600">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                        ✓
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <EnquiryForm />
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-ink-50 py-20">
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
