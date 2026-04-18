import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BlogCard from '@/components/shared/BlogCard'
import NewsletterSignup from '@/components/shared/NewsletterSignup'
import { getNeurospicyPosts } from '@/lib/wordpress'
import type { WPPost } from '@/types/wordpress'

export const metadata: Metadata = {
  title: 'Neurospicy Life',
  description: 'Real talk on ADHD, autism, and living beautifully with a brain wired differently.',
}

const TOPICS = [
  { emoji: '🧠', title: 'ADHD & Executive Function', desc: 'Systems that actually work for our brains.' },
  { emoji: '✨', title: 'Sensory Living', desc: 'Creating environments you love to be in.' },
  { emoji: '💞', title: 'Neurospicy Relationships', desc: 'Love, boundaries, and communication.' },
  { emoji: '💼', title: 'Career & Business', desc: 'Building success on your own terms.' },
  { emoji: '🌿', title: 'Wellness & Body', desc: 'What caring for yourself really looks like.' },
  { emoji: '👶', title: 'Parenting Neurospicy', desc: 'Raising kids while managing your own brain.' },
]

export default async function NeurospicyLifePage() {
  let posts: WPPost[] = []
  try {
    posts = await getNeurospicyPosts(9)
  } catch {
    // placeholder state
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[var(--color-mauve)] via-[var(--color-mauve-dark)] to-[#3D1040]">
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-gold)] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[var(--color-blush)] blur-3xl" />
        </div>
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label text-[var(--color-gold-light)]">✦ Content Hub ✦</span>
            <div className="gold-divider-center mt-3 mb-6" />
            <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-white leading-tight">
              The{' '}
              <span className="font-[family-name:var(--font-great-vibes)] text-[var(--color-gold-light)] text-7xl sm:text-8xl block mt-1">
                Neurospicy Life
              </span>
            </h1>
            <p className="mt-6 text-white/80 leading-relaxed text-lg max-w-xl mx-auto">
              ADHD. Autism. Hypersensitivity. Anxiety. The full spectrum of a brain wired beautifully differently — and the real, honest, glamorous life you can build with it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is neurospicy? */}
      <section className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="section-label">The Movement</span>
              <div className="gold-divider mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)] leading-tight">
                Neurospicy is not a{' '}
                <span className="script italic">limitation.</span>
              </h2>
              <p className="mt-5 text-[var(--color-charcoal)] leading-relaxed">
                It&apos;s a superpower with a learning curve. &quot;Neurospicy&quot; is the term I use with love and reclamation — for those of us whose nervous systems run a little hotter, whose brains make unexpected connections, whose hearts feel everything at full volume.
              </p>
              <p className="mt-4 text-[var(--color-charcoal)] leading-relaxed">
                Here you&apos;ll find no toxic positivity, no generic advice. Just real strategies, real stories, and a woman who gets it — because she lives it every single day.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-[var(--color-blush-light)] to-[var(--color-cream)] rounded-3xl p-8">
                <p className="font-[family-name:var(--font-great-vibes)] text-5xl text-[var(--color-mauve)] mb-6">
                  &quot;You are not too much. You are exactly enough.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-mauve)] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-great-vibes)] text-white text-lg">L</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-noir)]">Lia Dominique</p>
                    <p className="text-xs text-[var(--color-muted)]">Founder & Neurospicy Woman</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-pad bg-[var(--color-cream)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="section-label">Browse by Topic</span>
              <div className="gold-divider-center mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)]">
                What We Cover
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOPICS.map((topic, i) => (
              <AnimatedSection key={topic.title} delay={0.07 * i}>
                <div className="card p-6 h-full hover:border-[var(--color-mauve)] border border-transparent transition-colors group cursor-pointer">
                  <span className="text-3xl">{topic.emoji}</span>
                  <h3 className="mt-3 font-[family-name:var(--font-serif)] text-xl text-[var(--color-noir)] group-hover:text-[var(--color-mauve)] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-charcoal)]">{topic.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="section-label">Articles</span>
                <div className="gold-divider mt-2 mb-3" />
                <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)]">
                  Latest Posts
                </h2>
              </div>
              <Link href="/blog?category=neurospicy-life" className="btn-outline hidden sm:inline-flex">
                All Articles
              </Link>
            </div>
          </AnimatedSection>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <AnimatedSection key={post.id} delay={0.07 * i}>
                  <BlogCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Why I Stopped Masking and Started Living', excerpt: 'Masking drained me for years. Here\'s what happened when I finally let myself be seen.' },
                { title: 'The ADHD Tax Is Real — Here\'s How I Manage It', excerpt: 'Late fees, lost items, missed appointments. And the systems I use to fight back.' },
                { title: 'Sensory-Safe Spaces in Your Home', excerpt: 'How I designed our home to be a calm, cozy haven for my whole nervous system.' },
              ].map((p, i) => (
                <AnimatedSection key={p.title} delay={0.07 * i}>
                  <div className="card group cursor-pointer">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-mauve)]/20 to-[var(--color-blush-light)]" />
                    <div className="p-5">
                      <span className="section-label">Neurospicy Life</span>
                      <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl text-[var(--color-noir)] group-hover:text-[var(--color-mauve)] transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--color-charcoal)] line-clamp-2">{p.excerpt}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-pad bg-gradient-to-br from-[var(--color-mauve)] to-[var(--color-mauve-dark)]">
        <div className="section-container">
          <AnimatedSection>
            <NewsletterSignup
              dark
              heading="Join the Neurospicy Community"
              subtext="Real talk, real strategies, and a weekly dose of you-are-enough energy. Subscribe free."
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
