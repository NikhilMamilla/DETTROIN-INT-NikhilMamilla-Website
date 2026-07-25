import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import blog2 from '../assets/blog/blog2.jpeg'

const ACADEMIC_POINTS = [
  'Reading and writing skills',
  'Basic mathematics and logical thinking',
  'Vocabulary and communication abilities',
  'Problem-solving skills',
  'Curiosity and interest in learning',
]

const COMMUNICATION_POINTS = [
  'Share ideas and opinions',
  'Communicate effectively',
  'Participate in group learning',
  'Develop public speaking abilities',
]

const HOLISTIC_POINTS = [
  'Physical activities and sports',
  'Cultural events and performances',
  'Art, music, and creative learning',
  'Personality and leadership development',
]

const EXCELLENCE_POINTS = [
  'A structured academic program',
  'Experienced and supportive teachers',
  'Activity-based and interactive learning',
  'Safe and disciplined campus environment',
  'Opportunities for sports and creative development',
]

const FUTURE_POINTS = [
  'Independent learning skills',
  'Analytical thinking abilities',
  'Time management habits',
  'Confidence in academic performance',
]

const FAQS = [
  {
    q: '1. Why is primary education important for a child?',
    a: 'Primary education helps children develop essential skills such as reading, writing, problem-solving, and communication, which form the foundation for future learning.',
  },
  {
    q: '2. What skills do students learn during primary school?',
    a: 'Students develop language skills, basic mathematics understanding, communication abilities, social interaction, and discipline during primary education.',
  },
  {
    q: '3. How does a strong primary education support future academic success?',
    a: 'A strong foundation in primary education helps students understand advanced subjects more easily and develop confidence in learning.',
  },
  {
    q: '4. How does Excellence International School support primary education in Aligarh?',
    a: 'Excellence International School provides structured academics, experienced teachers, modern teaching methods, and a safe learning environment that supports the overall development of primary students.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-ink-100 last:border-0">
      <button onClick={() => setOpen(v => !v)} aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-primary-900 transition hover:bg-primary-50/40">
        <span className="text-sm">{q}</span>
        <span className={`shrink-0 text-lg text-gold-500 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-ink-400">{a}</p>
        </div>
      </div>
    </div>
  )
}

function CommentForm() {
  const [sent, setSent] = useState(false)
  if (sent) return <p className="rounded-xl bg-primary-50 p-4 text-sm font-semibold text-primary-700">Thank you! Your comment has been submitted.</p>
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-4">
      <textarea required rows={4} placeholder="Type here..."
        className="w-full resize-none rounded-xl border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
      <div className="grid gap-4 sm:grid-cols-3">
        <input required type="text" placeholder="Name *"
          className="rounded-xl border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
        <input required type="email" placeholder="Email *"
          className="rounded-xl border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
        <input type="url" placeholder="Website"
          className="rounded-xl border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
      </div>
      <label className="flex items-center gap-2 text-xs text-ink-500">
        <input type="checkbox" className="accent-primary-700" />
        Save my name, email, and website in this browser for the next time I comment.
      </label>
      <button type="submit"
        className="rounded-xl bg-primary-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-800">
        Post Comment
      </button>
    </form>
  )
}

export default function BlogPost2() {
  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '480px' }}>
        <img src={blog2} alt="The Importance of Strong Primary Education" className="h-full w-full object-cover" style={{ maxHeight: '480px' }} />
      </div>

      <div className="container-page py-12 lg:py-16">
        <div className="mx-auto max-w-3xl">

          {/* Breadcrumb */}
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-400">
              <Link to="/" className="hover:text-primary-700">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-primary-700">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-primary-700">Importance of Primary Education</span>
            </p>
          </Reveal>

          {/* Title + Meta */}
          <Reveal>
            <h1 className="font-serif text-2xl font-bold text-primary-900 sm:text-3xl lg:text-4xl">
              The Importance of Strong Primary Education for Student Success
            </h1>
            <p className="mt-3 text-sm text-ink-400">
              <span className="font-semibold text-primary-700">By Excellence</span>
              <span className="mx-2">/</span>
              March 13, 2026
            </p>
            <div className="mt-4 h-0.5 w-14 rounded-full bg-gold-400" />
          </Reveal>

          {/* Intro */}
          <Reveal>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-600 sm:text-base">
              <p>Primary education plays a crucial role in shaping a child's academic journey and overall development. It is during these early years that students build the basic skills required for learning, communication, and problem-solving. A strong primary education helps children develop confidence, curiosity, and the ability to understand the world around them.</p>
              <p>The knowledge and habits students develop during primary school form the foundation for their future academic success. When children receive quality education at this stage, they are better prepared to face higher levels of learning and real-life challenges.</p>
            </div>
          </Reveal>

          {/* Academic Foundation */}
          <Reveal>
            <div className="mt-10 rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h2 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">Building a Strong Academic Foundation</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">Primary school is the stage where students learn the basic skills that support all future learning. Subjects such as language, mathematics, and environmental studies help children understand fundamental concepts.</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-base">A strong primary education helps students develop:</p>
              <ul className="mt-3 space-y-2">
                {ACADEMIC_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">These skills help children become confident learners and prepare them for more advanced academic studies.</p>
            </div>
          </Reveal>

          {/* Communication */}
          <Reveal>
            <div className="mt-6 rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h2 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">Developing Confidence and Communication Skills</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">Primary education is not only about academic learning. It also helps children build confidence and express themselves clearly.</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-base">Through classroom discussions, group activities, and presentations, students learn to:</p>
              <ul className="mt-3 space-y-2">
                {COMMUNICATION_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">These skills play an important role in both academic and personal success.</p>
            </div>
          </Reveal>

          {/* Curiosity */}
          <Reveal>
            <div className="mt-6 rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h2 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">Encouraging Curiosity and Creativity</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">Children naturally enjoy exploring and discovering new things. A good primary school encourages curiosity and creativity through engaging learning methods.</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-base">Activity-based learning, storytelling, creative arts, and interactive lessons help students develop imagination and innovative thinking. This approach makes learning enjoyable and encourages students to stay interested in their studies.</p>
            </div>
          </Reveal>

          {/* Discipline */}
          <Reveal>
            <div className="mt-6 rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h2 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">Learning Discipline and Responsibility</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">Primary school also teaches children important life values such as discipline, respect, and responsibility. Students learn how to follow routines, complete assignments, and respect teachers and classmates.</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-base">These habits help children develop a positive attitude toward learning and prepare them for higher academic levels.</p>
            </div>
          </Reveal>

          {/* Holistic */}
          <Reveal>
            <div className="mt-6 rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h2 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">Importance of Holistic Development</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">A strong primary education focuses on the overall development of students. In addition to academics, schools should provide opportunities for sports, cultural programs, and creative activities.</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-base">Holistic development includes:</p>
              <ul className="mt-3 space-y-2">
                {HOLISTIC_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">Such activities help students develop confidence, teamwork, and social skills.</p>
            </div>
          </Reveal>

          {/* Excellence Section */}
          <Reveal>
            <div className="mt-8 overflow-hidden rounded-2xl bg-primary-900 p-6 text-white sm:p-8">
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">Excellence International School – Supporting Strong Primary Education in Aligarh</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400/60" />
              <p className="mt-4 text-sm leading-relaxed text-primary-200 sm:text-base">When it comes to building a strong academic foundation, Excellence International School in Aligarh focuses on providing quality primary education in a supportive learning environment.</p>
              <p className="mt-3 text-sm leading-relaxed text-primary-200 sm:text-base">The school emphasizes concept-based learning, modern teaching methods, and individual attention for every student. At Excellence International School, primary students benefit from:</p>
              <ul className="mt-3 space-y-2">
                {EXCELLENCE_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-primary-100 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-primary-200 sm:text-base">The school aims to nurture confident learners who are prepared for future academic challenges.</p>
            </div>
          </Reveal>

          {/* Preparing for Future */}
          <Reveal>
            <div className="mt-8 rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h2 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">Preparing Students for Future Success</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">A strong primary education prepares students for middle school and higher academic levels by helping them develop essential learning habits. Students gradually learn:</p>
              <ul className="mt-3 space-y-2">
                {FUTURE_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">These skills help students move forward with clarity and motivation.</p>
            </div>
          </Reveal>

          {/* Conclusion */}
          <Reveal>
            <div className="mt-8">
              <h2 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">Conclusion</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-600 sm:text-base">
                <p>Primary education is the foundation of a child's academic journey. A strong start helps students develop knowledge, confidence, discipline, and curiosity for learning.</p>
                <p>When children receive quality education during their primary years, they are better prepared to succeed in future academic stages and life. Schools that focus on strong foundational learning and holistic development play an important role in shaping successful and responsible individuals.</p>
                <p>Institutions like Excellence International School, Aligarh aim to provide a balanced primary education that supports both academic growth and personal development.</p>
              </div>
            </div>
          </Reveal>

          {/* FAQs */}
          <Reveal>
            <div className="mt-10">
              <h2 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">Frequently Asked Questions</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
              <div className="mt-5 divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
                {FAQS.map((item) => <FaqItem key={item.q} q={item.q} a={item.a} />)}
              </div>
            </div>
          </Reveal>

          {/* Navigation */}
          <Reveal>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink-100 pt-6">
              <Link to="/blog/how-to-choose-best-school-in-aligarh" className="text-sm font-semibold text-primary-700 hover:text-primary-900">
                → Next: How to Choose the Best School in Aligarh
              </Link>
              <Link to="/blog" className="text-sm font-semibold text-ink-400 hover:text-primary-700">
                ← Back to Blog
              </Link>
            </div>
          </Reveal>

          {/* Comment Form */}
          <Reveal>
            <div className="mt-12 rounded-2xl border border-ink-100 bg-ink-50 p-6 sm:p-8">
              <h2 className="font-serif text-xl font-bold text-primary-900">Leave a Comment</h2>
              <p className="mt-1 text-xs text-ink-400">Your email address will not be published. Required fields are marked *</p>
              <div className="mt-6">
                <CommentForm />
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  )
}
