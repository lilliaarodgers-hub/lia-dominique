import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BlogCard from '@/components/shared/BlogCard'
import VlogCard from '@/components/shared/VlogCard'
import RecipeCard from '@/components/shared/RecipeCard'
import NewsletterSignup from '@/components/shared/NewsletterSignup'
import { getPosts, getVlogPosts, getRecipes, extractYoutubeId } from '@/lib/wordpress'
import type { WPPost } from '@/types/wordpress'

const PLACEHOLDER_VLOGS = [
  { title: 'A Weekend in the City', youtubeId: 'dQw4w9WgXcQ', date: '2024-03-10', description: 'We packed up the fam and hit the city for a whole vibe of a weekend.' },
  { title: 'My Morning Routine as a Neurodivergent Mom', youtubeId: 'dQw4w9WgXcQ', date: '2024-02-28', description: 'Real talk — no toxic productivity, just what actually works for me.' },
  { title: 'Date Night Dinner: The Full Experience', youtubeId: 'dQw4w9WgXcQ', date: '2024-02-14', description: 'We dressed up, we ate well, and I documented every delicious moment.' },
]

export default async function HomePage() {
  let recentPosts: WPPost[] = []
  let vlogPosts: WPPost[] = []
  let recipePosts: WPPost[] = []

  try {
    const [a, b, c] = await Promise.all([
      getPosts({ perPage: 3 }),
      getVlogPosts(3),
      getRecipes(3),
    ])
    recentPosts = a
    vlogPosts = b
    recipePosts = c
  } catch {
    // WordPress not yet connected — site renders with placeholders
  }

  return (
    <>
      {/* -- HERO -- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-blush-light)] via-[var(--color-ivory)] to-[var(--color-cream)]">
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-blush)]/20 -translate-y-1/4 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-gold-light)]/25 translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none" />

        <div className="section-container relative z-10 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <AnimatedSection delay={0}>
              <span className="section-label">Welcome to my world</span>
              <div className="gold-divider mt-3" />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl lg:text-8xl text-[var(--color-noir)] mt-4 leading-[1.05]">
                Living Life
                <span className="block font-[family-name:var(--font-great-vibes)] text-[var(--color-mauve)] text-7xl sm:text-8xl lg:text-9xl mt-1">
                  Unfiltered
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg text-[var(--color-charcoal)] max-w-md leading-relaxed">
                Lifestyle. Adventures. Food. Family. Love. And doing it all as a beautifully, unapologetically <em>neurospicy</em> woman.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/blog" className="btn-primary">
                  Read the Blog
                </Link>
                <Link href="/vlogs" className="btn-outline">
                  Watch My Vlogs
                </Link>
              </div>
            </AnimatedSection>

            {/* Stat row */}
            <AnimatedSection delay={0.4}>
              <div className="mt-12 flex gap-8">
                {[
                  { value: 'Real Life', label: 'No filter' },
                  { value: 'Bouji', label: 'Always' },
                  { value: 'Neurospicy', label: 'Proudly' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-mauve)]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[var(--color-muted)] tracking-widest uppercase mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Photo placeholder */}
          <AnimatedSection delay={0.15} direction="right">
            <div className="relative mx-auto max-w-sm lg:max-w-full">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[var(--color-blush)] to-[var(--color-mauve)]/40 shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="font-[family-name:var(--font-great-vibes)] text-6xl text-white/80">
                    Lia
                  </span>
                  <p className="text-white/60 text-sm tracking-widest uppercase">
                    Your photo here
                  </p>
                </div>
                {/* Gold corner accent */}
                <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-[var(--color-gold)] rounded-tr-2xl opacity-60" />
                <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-[var(--color-gold)] rounded-bl-2xl opacity-60" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[var(--color-mauve)] text-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="font-[family-name:var(--font-great-vibes)] text-2xl">Neurospicy</p>
                <p className="text-xs tracking-widest uppercase opacity-80 mt-0.5">& Thriving</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[var(--color-muted)]">
            <path d="M4 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* -- ABOUT TEASER -- */}
      <section className="section-pad bg-[var(--color-cream)]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-cream)] max-w-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-great-vibes)] text-7xl text-[var(--color-mauve)]/30">
                    Lia
                  </span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <span className="section-label">About Me</span>
              <div className="gold-divider mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)] leading-tight">
                I&apos;m Lia — and I live <span className="script italic">out loud.</span>
              </h2>
              <p className="mt-5 text-[var(--color-charcoal)] leading-relaxed">
                Founder. Creator. Mom. Partner. Foodie. Explorer. And a proud neurospicy woman navigating this beautiful, chaotic, extraordinary life — all while wearing heels if I want to.
              </p>
              <p className="mt-4 text-[var(--color-charcoal)] leading-relaxed">
                This is my space to document the realness: the glam and the grit, the five-star dinners and the cereal-for-dinner nights, the adventures and the quiet moments that hold everything together.
              </p>
              <Link href="/about" className="btn-primary mt-8 inline-flex">
                My Full Story
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* -- LATEST VLOGS -- */}
      <section className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="section-label">YouTube</span>
                <div className="gold-divider mt-2 mb-3" />
                <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)]">
                  Latest Vlogs
                </h2>
              </div>
              <Link href="/vlogs" className="btn-outline hidden sm:inline-flex">
                All Videos
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vlogPosts.length > 0
              ? vlogPosts.map((post, i) => {
                  const ytId = extractYoutubeId(post.content.rendered) ?? 'dQw4w9WgXcQ'
                  return (
                    <AnimatedSection key={post.id} delay={0.1 * i}>
                      <VlogCard
                        title={post.title.rendered}
                        youtubeId={ytId}
                        date={post.date}
                        description={post.excerpt.rendered.replace(/<[^>]+>/g, '')}
                      />
                    </AnimatedSection>
                  )
                })
              : PLACEHOLDER_VLOGS.map((v, i) => (
                  <AnimatedSection key={v.title} delay={0.1 * i}>
                    <VlogCard {...v} />
                  </AnimatedSection>
                ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/vlogs" className="btn-outline">All Videos</Link>
          </div>
        </div>
      </section>

      {/* -- NEUROSPICY LIFE TEASER -- */}
      <section className="section-pad bg-gradient-to-br from-[var(--color-mauve)] to-[var(--color-mauve-dark)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--color-gold)] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--color-blush)] blur-3xl" />
        </div>
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label text-[var(--color-gold-light)]">✦ Content Hub ✦</span>
            <div className="gold-divider-center mt-3 mb-4" />
            <h2 className="font-[family-name:var(--font-serif)] text-5xl sm:text-6xl text-white leading-tight">
              The{' '}
              <span className="font-[family-name:var(--font-great-vibes)] text-[var(--color-gold-light)] text-6xl sm:text-7xl">
                Neurospicy
              </span>{' '}
              Life
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed max-w-xl mx-auto">
              ADHD, autism, hypersensitivity — and all the magic that comes with a brain wired differently. Real stories, real tools, and a community that gets it.
            </p>
            <Link href="/neurospicy-life" className="btn-gold mt-8 inline-flex">
              Explore the Hub
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* -- FROM THE BLOG -- */}
      <section className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="section-label">Journal</span>
                <div className="gold-divider mt-2 mb-3" />
                <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)]">
                  From the Blog
                </h2>
              </div>
              <Link href="/blog" className="btn-outline hidden sm:inline-flex">
                All Posts
              </Link>
            </div>
          </AnimatedSection>

          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, i) => (
                <AnimatedSection key={post.id} delay={0.1 * i}>
                  <BlogCard post={post} featured={i === 0} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "The Bouji Girl's Guide to Traveling with Kids", category: 'Lifestyle', excerpt: "Yes, you can absolutely travel in style AND with toddlers. Here's how we do it." },
                { title: 'Partnership Deals I Said No To (And Why)', category: 'Career', excerpt: 'Not every check is worth your integrity. A real conversation about selective partnerships.' },
                { title: 'Sensory-Friendly Date Night Ideas', category: 'Neurospicy Life', excerpt: 'Because romance and sensory sensitivity can absolutely coexist beautifully.' },
              ].map((p, i) => (
                <AnimatedSection key={p.title} delay={0.1 * i}>
                  <div className="card group cursor-pointer">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-blush-light)] to-[var(--color-cream)] flex items-center justify-center">
                      <span className="text-[var(--color-mauve)]/30 font-[family-name:var(--font-serif)] text-4xl">
                        {p.category[0]}
                      </span>
                    </div>
                    <div className="p-5">
                      <span className="section-label">{p.category}</span>
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

          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="btn-outline">All Posts</Link>
          </div>
        </div>
      </section>

      {/* -- RECIPES TEASER -- */}
      <section className="section-pad bg-[var(--color-cream)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="section-label">In the Kitchen</span>
                <div className="gold-divider mt-2 mb-3" />
                <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)]">
                  Recipes &amp; Food
                </h2>
              </div>
              <Link href="/recipes" className="btn-outline hidden sm:inline-flex">
                All Recipes
              </Link>
            </div>
          </AnimatedSection>

          {recipePosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipePosts.map((post, i) => (
                <AnimatedSection key={post.id} delay={0.1 * i}>
                  <RecipeCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { emoji: '🥂', name: 'Champagne Brunch Board', tag: 'Entertaining' },
                { emoji: '🥗', name: 'Date Night Charcuterie', tag: 'Date Night' },
                { emoji: '🍰', name: 'Brown Sugar Pound Cake', tag: 'Desserts' },
              ].map((r, i) => (
                <AnimatedSection key={r.name} delay={0.1 * i}>
                  <div className="card group cursor-pointer">
                    <div className="aspect-square bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-cream)] flex items-center justify-center text-6xl">
                      {r.emoji}
                    </div>
                    <div className="p-5">
                      <span className="section-label">{r.tag}</span>
                      <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl text-[var(--color-noir)] group-hover:text-[var(--color-mauve)] transition-colors">
                        {r.name}
                      </h3>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* -- PARTNERSHIPS CTA -- */}
      <section className="section-pad bg-[var(--color-ivory)] border-t border-[var(--color-blush)]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="section-label">Collaborations</span>
              <div className="gold-divider mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)] leading-tight">
                Let&apos;s Create{' '}
                <span className="script italic">Something Beautiful</span>
              </h2>
              <p className="mt-5 text-[var(--color-charcoal)] leading-relaxed max-w-md">
                I partner with brands that align with my values — luxury, authenticity, wellness, and the neurospicy experience. If that&apos;s you, I&apos;d love to connect.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/partnerships" className="btn-primary">
                  Partnership Inquiry
                </Link>
                <Link href="/about#portfolio" className="btn-outline">
                  View My Work
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '📱', title: 'Social Media', desc: 'Instagram & TikTok content creation' },
                  { icon: '🎬', title: 'YouTube', desc: 'Dedicated vlogs & integrations' },
                  { icon: '✍️', title: 'Blog Features', desc: 'Long-form sponsored posts' },
                  { icon: '🛍️', title: 'Digital Products', desc: 'Co-branded assets & courses' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-[var(--color-cream)] rounded-2xl p-5 border border-[var(--color-blush-light)]"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="mt-3 font-[family-name:var(--font-serif)] text-lg text-[var(--color-noir)]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* -- NEWSLETTER -- */}
      <section className="section-pad bg-gradient-to-br from-[var(--color-noir)] to-[#2D1F1F]">
        <div className="section-container">
          <AnimatedSection>
            <NewsletterSignup dark />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
