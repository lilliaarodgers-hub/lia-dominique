import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BlogCard from '@/components/shared/BlogCard'
import NewsletterSignup from '@/components/shared/NewsletterSignup'
import { getPosts } from '@/lib/wordpress'
import type { WPPost } from '@/types/wordpress'

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Adventures, destinations, and bouji travel diaries from Lia Dominique.',
}

const DESTINATIONS = [
  { emoji: '🗽', city: 'New York', tag: 'City Break' },
  { emoji: '🌴', city: 'Miami', tag: 'Weekend Getaway' },
  { emoji: '🥂', city: 'Napa Valley', tag: 'Wine Country' },
  { emoji: '🌊', city: 'Tulum', tag: 'Beach Escape' },
  { emoji: '🏙️', city: 'Atlanta', tag: 'Home Base' },
  { emoji: '✈️', city: 'More Coming', tag: 'Stay Tuned' },
]

const PLACEHOLDER_POSTS = [
  { title: 'A Family Weekend in NYC — The Bouji Way', excerpt: 'Five-star hotels, kid-friendly spots, and a whole lot of cab rides. Here\'s how we did New York in style.' },
  { title: 'Tulum on a Budget (That Doesn\'t Look Like a Budget)', excerpt: 'You don\'t need to spend a fortune to feel like royalty. My full Tulum itinerary.' },
  { title: 'Road Trip Essentials for the Neurospicy Traveler', excerpt: 'Sensory kits, snack strategies, and planning tips for travel that actually feels good.' },
  { title: 'The Best Brunch Spots in Every City I\'ve Visited', excerpt: 'A running list of the places that made me close my eyes and say "wow."' },
]

export default async function TravelPage() {
  let posts: WPPost[] = []
  try {
    posts = await getPosts({ perPage: 6, categorySlug: 'travel' })
  } catch {
    // WordPress not yet connected
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[var(--color-gold-light)] via-[var(--color-ivory)] to-[var(--color-cream)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-blush)]/20 -translate-y-1/3 translate-x-1/4 blur-3xl pointer-events-none" />
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label">Adventures</span>
            <div className="gold-divider-center mt-3 mb-4" />
            <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-[var(--color-noir)] leading-tight">
              Travel{' '}
              <span className="font-[family-name:var(--font-great-vibes)] text-[var(--color-mauve)] text-7xl sm:text-8xl block mt-1">
                Diaries
              </span>
            </h1>
            <p className="mt-6 text-[var(--color-charcoal)] leading-relaxed max-w-md mx-auto">
              From city breaks to beach escapes — I travel bouji, I travel real, and I document every single moment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Destinations grid */}
      <section className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="section-label">Where I've Been</span>
              <div className="gold-divider-center mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)]">
                Destinations
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {DESTINATIONS.map((d, i) => (
              <AnimatedSection key={d.city} delay={0.07 * i}>
                <div className="card p-5 text-center group cursor-pointer border border-[var(--color-blush-light)] hover:border-[var(--color-gold)] transition-colors">
                  <span className="text-3xl">{d.emoji}</span>
                  <p className="mt-3 font-[family-name:var(--font-serif)] text-base text-[var(--color-noir)] group-hover:text-[var(--color-mauve)] transition-colors">
                    {d.city}
                  </p>
                  <p className="text-xs text-[var(--color-muted)] mt-1">{d.tag}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Travel tips banner */}
      <section className="py-16 bg-[var(--color-mauve)]">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            {[
              { icon: '🧳', title: 'Pack Light, Look Heavy', desc: 'My carry-on only strategy for looking put-together everywhere.' },
              { icon: '🧠', title: 'Neurospicy Travel Tips', desc: 'Sensory-safe packing, prep routines, and how I manage transitions.' },
              { icon: '🍽️', title: 'Eat Like a Local', desc: 'I find the best spots — never the tourist traps.' },
            ].map((tip, i) => (
              <AnimatedSection key={tip.title} delay={0.1 * i}>
                <span className="text-3xl">{tip.icon}</span>
                <h3 className="mt-3 font-[family-name:var(--font-serif)] text-xl">{tip.title}</h3>
                <p className="mt-2 text-sm text-white/70">{tip.desc}</p>
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
                <span className="section-label">Journal</span>
                <div className="gold-divider mt-2 mb-3" />
                <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)]">
                  Travel Posts
                </h2>
              </div>
              <Link href="/blog?category=travel" className="btn-outline hidden sm:inline-flex">
                All Travel Posts
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
              {PLACEHOLDER_POSTS.map((p, i) => (
                <AnimatedSection key={p.title} delay={0.07 * i}>
                  <div className="card group cursor-pointer">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-cream)] flex items-center justify-center text-5xl">
                      ✈️
                    </div>
                    <div className="p-5">
                      <span className="section-label">Travel</span>
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
      <section className="section-pad bg-[var(--color-cream)]">
        <div className="section-container">
          <NewsletterSignup
            heading="Never Miss a Trip"
            subtext="Travel guides, packing lists, and destination recaps — straight to your inbox."
          />
        </div>
      </section>
    </>
  )
}
