import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ImageCard from '../components/ImageCard'
import { HOLISTIC_PROGRAMS, INFRASTRUCTURE, WHY_US } from '../data/content'

const safeCampus = WHY_US.find((w) => w.title.includes('Safe'))

export default function Facilities() {
  return (
    <>
      <PageHero title="School Facilities" crumb="Facilities" />

      <section className="container-page py-20">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Modern Infrastructure"
            title="Facilities Built for Effective Learning"
            subtitle="A well-planned campus environment that supports both academic and extracurricular development."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INFRASTRUCTURE.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <ImageCard image={item.image} title={item.title} description={item.description} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary-900 py-20 text-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Beyond the Classroom"
              title="Holistic Development Programs"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOLISTIC_PROGRAMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
                  <img src={item.image} alt={item.title} className="mx-auto h-24 w-24 object-contain" />
                  <h3 className="mt-4 text-center text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-center text-sm text-primary-100">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {safeCampus && (
        <section className="container-page py-20">
          <Reveal className="grid gap-10 rounded-3xl bg-ink-50 p-10 lg:grid-cols-[220px_1fr] lg:items-center">
            <img src={safeCampus.image} alt={safeCampus.title} className="mx-auto h-32 w-32 object-contain" />
            <div>
              <h3 className="text-2xl font-extrabold text-primary-900">{safeCampus.title}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-400">{safeCampus.description}</p>
            </div>
          </Reveal>
        </section>
      )}
    </>
  )
}
