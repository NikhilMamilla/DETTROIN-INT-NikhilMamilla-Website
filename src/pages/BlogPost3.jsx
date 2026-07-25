import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import blog3 from '../assets/blog/blog3.jpeg'

const SECTIONS = [
  {
    title: 'Strong Academic Foundation',
    intro: 'One of the most important aspects of quality education is a strong academic structure. A good school focuses on building clear concepts and helping students understand what they learn instead of simply memorizing information.',
    label: 'A strong academic system includes:',
    points: ['Well-planned curriculum and syllabus coverage', 'Concept-based learning methods', 'Regular assessments and evaluations', 'Continuous progress monitoring', 'Individual attention for students'],
    footer: 'When students clearly understand their subjects, they gain confidence and perform better in higher classes.',
  },
  {
    title: 'Experienced and Dedicated Teachers',
    intro: 'Teachers play a crucial role in shaping a child\'s learning experience. Schools that provide quality education ensure that their teachers are experienced, supportive, and committed to helping students succeed.',
    label: 'Good teachers:',
    points: ['Explain concepts clearly', 'Encourage curiosity and questions', 'Provide guidance and mentorship', 'Motivate students to improve', 'Create a positive classroom environment'],
    footer: 'A supportive teacher can inspire students to develop a lifelong love for learning.',
  },
  {
    title: 'Safe and Positive Learning Environment',
    intro: 'A secure and disciplined environment is essential for effective learning. Students perform better when they feel safe, comfortable, and respected in their school environment.',
    label: 'Important features of a safe learning environment include:',
    points: ['CCTV monitoring and campus supervision', 'Clean and well-maintained classrooms', 'Clear discipline policies', 'Respectful interaction between teachers and students'],
    footer: 'A positive atmosphere encourages students to focus on their education and personal growth.',
  },
  {
    title: 'Focus on Holistic Development',
    intro: 'Quality education goes beyond textbooks. The best schools provide opportunities for students to develop their talents, creativity, and leadership skills.',
    label: 'Holistic development includes:',
    points: ['Sports and physical education', 'Cultural events and competitions', 'Art, music, and creative activities', 'Leadership and personality development programs'],
    footer: 'Such activities help students build confidence, teamwork, and communication skills.',
  },
  {
    title: 'Modern Infrastructure and Learning Resources',
    intro: 'Modern facilities play an important role in improving the learning experience. Schools that provide quality education invest in infrastructure that supports effective teaching and student engagement.',
    label: 'Essential facilities include:',
    points: ['Smart classrooms with digital learning tools', 'Science and computer laboratories', 'Libraries with educational resources', 'Activity rooms for creative learning', 'Safe playgrounds and sports areas'],
    footer: 'A well-equipped campus enhances both academic learning and extracurricular development.',
  },
  {
    title: 'Value-Based Education',
    intro: 'Education should not only focus on academic success but also on building strong character and ethical values.',
    label: 'Schools that provide quality education encourage students to practice values such as:',
    points: ['Honesty', 'Respect', 'Responsibility', 'Discipline', 'Cooperation'],
    footer: 'These values help students become responsible individuals who contribute positively to society.',
  },
]

const EXCELLENCE_POINTS = [
  'A structured and concept-based academic system',
  'Experienced and supportive teachers',
  'A safe and disciplined campus environment',
  'Opportunities for sports, arts, and cultural activities',
  'Modern learning facilities and classrooms',
  'Value-based education for character development',
]

const FAQS = [
  { q: '1. What factors should parents consider when choosing a school in Aligarh?', a: 'Parents should consider academic quality, experienced teachers, safety, infrastructure, extracurricular activities, and the overall learning environment.' },
  { q: '2. Why is holistic development important in education?', a: 'Holistic development helps students grow physically, socially, and emotionally while also improving confidence, creativity, and leadership skills.' },
  { q: '3. How do experienced teachers improve the quality of education?', a: 'Experienced teachers provide clear explanations, guidance, and motivation that help students understand concepts and achieve academic success.' },
  { q: '4. What makes Excellence International School a good choice for quality education in Aligarh?', a: 'Excellence International School offers strong academics, experienced faculty, modern facilities, a safe campus environment, and opportunities for overall student development.' },
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
        <input required type="text" placeholder="Name *" className="rounded-xl border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
        <input required type="email" placeholder="Email *" className="rounded-xl border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
        <input type="url" placeholder="Website" className="rounded-xl border border-ink-100 bg-ink-50 px-4 py-3 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100" />
      </div>
      <label className="flex items-center gap-2 text-xs text-ink-500">
        <input type="checkbox" className="accent-primary-700" />
        Save my name, email, and website in this browser for the next time I comment.
      </label>
      <button type="submit" className="rounded-xl bg-primary-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-800">
        Post Comment
      </button>
    </form>
  )
}

export default function BlogPost3() {
  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '480px' }}>
        <img src={blog3} alt="What Makes a School the Best Choice for Quality Education" className="h-full w-full object-cover" style={{ maxHeight: '480px' }} />
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
              <span className="text-primary-700">Best School for Quality Education</span>
            </p>
          </Reveal>

          {/* Title + Meta */}
          <Reveal>
            <h1 className="font-serif text-2xl font-bold text-primary-900 sm:text-3xl lg:text-4xl">
              What Makes a School the Best Choice for Quality Education in Aligarh
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
              <p>Choosing the right school is one of the most important decisions for parents who want the best future for their children. A good school not only provides academic knowledge but also helps students develop confidence, discipline, creativity, and life skills.</p>
              <p>When parents search for quality education in Aligarh, they often look for institutions that offer strong academics, experienced teachers, and a supportive learning environment. But what truly makes a school the best choice for quality education? Several important factors contribute to creating a learning environment where students can grow academically and personally.</p>
            </div>
          </Reveal>

          {/* Sections */}
          <div className="mt-8 space-y-6">
            {SECTIONS.map((sec, i) => (
              <Reveal key={sec.title} delay={i * 50}>
                <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
                  <h2 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">{sec.title}</h2>
                  <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
                  <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">{sec.intro}</p>
                  <p className="mt-3 text-sm font-semibold text-ink-700">{sec.label}</p>
                  <ul className="mt-2 space-y-1.5">
                    {sec.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">{sec.footer}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Excellence Section */}
          <Reveal>
            <div className="mt-8 overflow-hidden rounded-2xl bg-primary-900 p-6 text-white sm:p-8">
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">Excellence International School – Providing Quality Education in Aligarh</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400/60" />
              <p className="mt-4 text-sm leading-relaxed text-primary-200 sm:text-base">When parents look for a school that combines academic excellence with overall development, Excellence International School in Aligarh stands out as a strong option.</p>
              <p className="mt-3 text-sm leading-relaxed text-primary-200 sm:text-base">The school focuses on creating a balanced educational environment where students can grow academically, socially, and emotionally. Excellence International School offers:</p>
              <ul className="mt-3 space-y-2">
                {EXCELLENCE_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-primary-100 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-primary-200 sm:text-base">The goal of the school is to help students become confident learners and responsible individuals prepared for future challenges.</p>
            </div>
          </Reveal>

          {/* Conclusion */}
          <Reveal>
            <div className="mt-8">
              <h2 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">Conclusion</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-600 sm:text-base">
                <p>A school becomes the best choice for quality education when it focuses on strong academics, experienced teachers, student safety, modern facilities, and holistic development. The right school helps children develop knowledge, confidence, creativity, and values that support lifelong success.</p>
                <p>Parents should carefully evaluate these factors before choosing a school for their child. Institutions like Excellence International School, Aligarh aim to provide a learning environment that supports both academic achievement and personal growth.</p>
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
              <Link to="/blog" className="text-sm font-semibold text-ink-400 hover:text-primary-700">← Back to Blog</Link>
              <Link to="/blog/importance-of-primary-education" className="text-sm font-semibold text-primary-700 hover:text-primary-900">
                Next: The Importance of Strong Primary Education →
              </Link>
            </div>
          </Reveal>

          {/* Comment Form */}
          <Reveal>
            <div className="mt-12 rounded-2xl border border-ink-100 bg-ink-50 p-6 sm:p-8">
              <h2 className="font-serif text-xl font-bold text-primary-900">Leave a Comment</h2>
              <p className="mt-1 text-xs text-ink-400">Your email address will not be published. Required fields are marked *</p>
              <div className="mt-6"><CommentForm /></div>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  )
}
