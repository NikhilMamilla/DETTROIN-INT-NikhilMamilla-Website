import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { IconArrowRight, IconClock } from '../components/icons'

import blog1 from '../assets/blog/blog1.jpeg'
import blog2 from '../assets/blog/blog2.jpeg'
import blog3 from '../assets/blog/blog3.jpeg'

const POSTS = [
  {
    slug: '/blog/how-to-choose-best-school-in-aligarh',
    title: 'How to Choose the Best School in Aligarh for Your Child',
    excerpt: 'Choosing the right school is one of the most important decisions parents make for their child\'s future. A good school not only builds strong academics but also shapes character and confidence.',
    image: blog1,
    readTime: '4 min read',
  },
  {
    slug: '/blog/importance-of-primary-education',
    excerpt: 'Primary education plays a crucial role in shaping a child\'s academic journey and overall development. It is during these early years that lifelong learning habits are formed.',
    image: blog2,
    readTime: '3 min read',
  },
  {
    slug: '/blog/best-school-quality-education-aligarh',
    title: 'What Makes a School the Best Choice for Quality Education in Aligarh',
    excerpt: 'Choosing the right school is one of the most important decisions for parents who want the best future for their children. A good school combines strong academics with holistic growth.',
    image: blog3,
    readTime: '5 min read',
  },
]

export default function Blog() {
  return (
    <>
      <section className="container-page py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 100}>
              <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <div className="overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-400">
                    <IconClock className="h-4 w-4" /> {post.readTime}
                  </span>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-primary-900">{post.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-400">{post.excerpt}</p>
                  {post.slug ? (
                    <Link to={post.slug} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 hover:text-primary-900">
                      Read more <IconArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ink-300 cursor-default">
                      Read more <IconArrowRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
