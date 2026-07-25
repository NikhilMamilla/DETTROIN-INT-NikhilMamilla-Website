import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import { ACADEMIC_STAGES } from '../data/content'

export default function Academics() {
  return (
    <>
      <PageHero title="Academic Stages" crumb="Academics" />

      <section className="container-page py-20">
        <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-20">
            {ACADEMIC_STAGES.map((stage) => (
              <div id={stage.id} key={stage.id} className="scroll-mt-28">
                <Reveal>
                  <div className="grid gap-8 sm:grid-cols-[220px_1fr] sm:items-center">
                    <div className="flex justify-center rounded-2xl bg-primary-50/60 p-8">
                      <img src={stage.image} alt={stage.title} className="h-32 w-32 object-contain" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold text-primary-900">{stage.title}</h2>
                      <p className="mt-3 leading-relaxed text-ink-400">{stage.summary}</p>
                      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {stage.points.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm font-medium text-ink-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <EnquiryForm />
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  )
}
