import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import { IconClock, IconMail, IconPhone, IconPin } from '../components/icons'
import { SITE } from '../data/site'

const CARDS = [
  { icon: IconPin, title: 'Address', lines: [SITE.address] },
  { icon: IconPhone, title: 'Phone', lines: [SITE.phone] },
  { icon: IconMail, title: 'Email', lines: SITE.emails },
  { icon: IconClock, title: 'Office Hours', lines: ['Mon – Sat: 8:00 AM – 3:30 PM'] },
]

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" crumb="Contact" />

      <section className="container-page py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ icon: Icon, title, lines }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-ink-100 p-6 text-center shadow-card">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-primary-900">{title}</h3>
                {lines.map((l) => (
                  <p key={l} className="mt-1 break-words text-sm text-ink-400">
                    {l}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="h-80 overflow-hidden rounded-3xl shadow-card lg:h-full">
              <iframe
                title="Excellence International School location"
                src={mapSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
