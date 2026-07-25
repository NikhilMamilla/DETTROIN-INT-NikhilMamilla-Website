import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import blog1 from '../assets/blog/blog1.jpeg'

const FACTORS = [
  {
    num: '1.',
    title: 'Academic Quality and Learning Approach',
    intro: 'The first factor parents should consider is the quality of education offered by the school. A well-structured academic program helps students understand concepts clearly and develop strong learning habits.',
    label: 'Look for schools that provide:',
    points: [
      'Concept-based learning',
      'Regular assessments and progress monitoring',
      'Interactive and engaging teaching methods',
      'Focus on reading, writing, and analytical thinking',
    ],
    footer: 'A strong academic system builds the foundation for future success.',
  },
  {
    num: '2.',
    title: 'Experienced and Supportive Teachers',
    intro: 'Teachers play a major role in shaping a child\'s educational journey. Experienced and dedicated educators guide students, encourage curiosity, and help them overcome challenges.',
    label: 'A good school should have teachers who are:',
    points: [
      'Qualified and experienced',
      'Supportive and approachable',
      'Focused on student growth',
      'Dedicated to mentoring and guidance',
    ],
    footer: 'Students perform better when they feel supported and motivated by their teachers.',
  },
  {
    num: '3.',
    title: 'Safe and Positive Learning Environment',
    intro: 'Safety and discipline are essential for effective learning. Parents should ensure that the school maintains a secure campus with proper supervision and safety systems.',
    label: 'Important safety features include:',
    points: [
      'CCTV monitoring',
      'Supervised classrooms and campus areas',
      'Clear discipline policies',
      'Clean and well-maintained environment',
    ],
    footer: 'A safe and comfortable environment allows students to focus on learning and development.',
  },
  {
    num: '4.',
    title: 'Focus on Holistic Development',
    intro: 'Education should not be limited to textbooks. The best schools encourage students to participate in activities that support their physical, creative, and social development.',
    label: 'Holistic development includes:',
    points: [
      'Sports and physical activities',
      'Cultural programs and competitions',
      'Art, music, and creative activities',
      'Leadership and personality development programs',
    ],
    footer: 'These activities help students develop confidence and discover their talents.',
  },
  {
    num: '5.',
    title: 'Modern Facilities and Learning Resources',
    intro: 'Modern infrastructure plays an important role in enhancing the learning experience. Well-equipped classrooms, laboratories, and libraries help students understand concepts better and stay engaged in learning.',
    label: 'Schools should provide facilities such as:',
    points: [
      'Smart classrooms',
      'Science and computer laboratories',
      'Library with learning resources',
      'Activity rooms and play areas',
    ],
    footer: 'A well-designed campus supports both academic and personal growth.',
  },
]

const EXCELLENCE_POINTS = [
  'Strong academic foundation',
  'Experienced and dedicated teachers',
  'Safe and disciplined campus environment',
  'Opportunities for sports and cultural activities',
  'Modern learning facilities',
  'Value-based education',
]

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

export default function BlogPost1() {
  return (
    <div className="bg-white">
      {/* ── Hero Image ───────────────────────────────────────────────── */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '480px' }}>
        <img src={blog1} alt="How to Choose the Best School in Aligarh" className="h-full w-full object-cover" style={{ maxHeight: '480px' }} />
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
              <span className="text-primary-700">How to Choose the Best School</span>
            </p>
          </Reveal>

          {/* Title + Meta */}
          <Reveal>
            <h1 className="font-serif text-2xl font-bold text-primary-900 sm:text-3xl lg:text-4xl">
              How to Choose the Best School in Aligarh for Your Child
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
              <p>Choosing the right school is one of the most important decisions parents make for their child's future. A good school not only provides quality education but also helps in developing confidence, creativity, discipline, and life skills. With several schools available in the city, parents often wonder how to choose the best school in Aligarh for their child.</p>
              <p>The right institution should provide a safe environment, strong academic foundation, experienced teachers, and opportunities for overall development. By evaluating a few key factors, parents can make a confident and informed decision.</p>
            </div>
          </Reveal>

          {/* Importance */}
          <Reveal>
            <div className="mt-10">
              <h2 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">Importance of Choosing the Right School</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">A school plays a crucial role in shaping a child's personality, knowledge, and future success. The environment in which children learn during their early years has a long-term impact on their academic growth and character development.</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-base">A good school helps students:</p>
              <ul className="mt-3 space-y-2">
                {['Develop strong academic skills', 'Build confidence and communication abilities', 'Learn discipline and responsibility', 'Explore creativity and talents', 'Prepare for future educational opportunities'].map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">This is why choosing the right school requires careful consideration.</p>
            </div>
          </Reveal>

          {/* Factors */}
          <Reveal>
            <h2 className="mt-10 font-serif text-xl font-bold text-primary-900 sm:text-2xl">Factors to Consider When Choosing a School</h2>
            <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
          </Reveal>

          <div className="mt-6 space-y-8">
            {FACTORS.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
                  <h3 className="font-serif text-lg font-bold text-primary-900">{f.num} {f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-base">{f.intro}</p>
                  <p className="mt-3 text-sm font-semibold text-ink-700">{f.label}</p>
                  <ul className="mt-2 space-y-1.5">
                    {f.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-ink-600 sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />{pt}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">{f.footer}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Excellence Section */}
          <Reveal>
            <div className="mt-10 overflow-hidden rounded-2xl bg-primary-900 p-6 text-white sm:p-8">
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">Excellence International School – A Trusted Choice in Aligarh</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400/60" />
              <p className="mt-4 text-sm leading-relaxed text-primary-200 sm:text-base">When parents search for a school that combines academic excellence, discipline, and student development, Excellence International School in Aligarh stands out as a strong choice.</p>
              <p className="mt-3 text-sm leading-relaxed text-primary-200 sm:text-base">The school focuses on creating a supportive and structured learning environment where students can grow academically and personally. Excellence International School provides:</p>
              <ul className="mt-3 space-y-2">
                {EXCELLENCE_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-primary-100 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />{pt}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-primary-200 sm:text-base">The school aims to nurture confident learners who are prepared for future challenges while maintaining strong moral values.</p>
            </div>
          </Reveal>

          {/* Conclusion */}
          <Reveal>
            <div className="mt-10">
              <h2 className="font-serif text-xl font-bold text-primary-900 sm:text-2xl">Conclusion</h2>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-gold-400" />
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-600 sm:text-base">
                <p>Choosing the best school for your child requires careful evaluation of several factors, including academic quality, teaching methods, safety, infrastructure, and opportunities for overall development.</p>
                <p>A school that focuses on both academic excellence and character building can help children achieve long-term success. By selecting the right institution, parents provide their children with the environment they need to learn, grow, and succeed.</p>
                <p>Schools like Excellence International School, Aligarh strive to provide a balanced education that prepares students for both academic achievement and personal development.</p>
              </div>
            </div>
          </Reveal>

          {/* Navigation */}
          <Reveal>
            <div className="mt-10 flex items-center justify-between border-t border-ink-100 pt-6">
              <Link to="/blog" className="text-sm font-semibold text-primary-700 hover:text-primary-900">
                ← Back to Blog
              </Link>
              <span className="text-sm text-ink-400">Previous: The Importance of Strong Primary Education for Student Success</span>
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
