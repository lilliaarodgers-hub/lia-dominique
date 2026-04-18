import type { Metadata } from 'next'
import AnimatedSection from '@/components/shared/AnimatedSection'
import VlogCard from '@/components/shared/VlogCard'
import NewsletterSignup from '@/components/shared/NewsletterSignup'
import { getVlogPosts, extractYoutubeId } from '@/lib/wordpress'

export const metadata: Metadata = {
  title: 'Vlogs',
  description: 'Watch Lia\'s latest YouTube vlogs — lifestyle, adventures, food, and real life.',
}

const PLACEHOLDER_VLOGS = [
  { title: 'A Weekend in the City — Family Trip Vlog', youtubeId: 'dQw4w9WgXcQ', date: '2024-03-10', description: 'We packed up and hit the city for a whole vibe of a weekend. Brunch, museums, and chaos.' },
  { title: 'My Morning Routine as a Neurodivergent Mom', youtubeId: 'dQw4w9WgXcQ', date: '2024-02-28', description: 'Real talk — no toxic productivity, just what actually works for my brain and family.' },
  { title: 'Date Night Dinner: The Full Experience', youtubeId: 'dQw4w9WgXcQ', date: '2024-02-14', description: 'We dressed up, we ate well, and I documented every delicious moment for you.' },
  { title: 'Grocery Haul + Meal Prep | Bouji on a Budget', youtubeId: 'dQw4w9WgXcQ', date: '2024-01-30', description: 'Yes you can eat like royalty without spending like it. Here\'s how I do it.' },
  { title: 'Our Home Office Makeover Reveal', youtubeId: 'dQw4w9WgXcQ', date: '2024-01-15', description: 'Sensory-safe, aesthetically stunning, and completely functional. Come see it!' },
  { title: 'Honest Review: My ADHD Diagnosis Journey', youtubeId: 'dQw4w9WgXcQ', date: '2024-01-02', description: 'Getting diagnosed as an adult was one of the hardest and most freeing experiences of my life.' },
]

export default async function VlogsPage() {
  let vlogPosts: Awaited<ReturnType<typeof getVlogPosts>> = []
  try {
    vlogPosts = await getVlogPosts(12)
  } catch {
    // WordPress not yet connected
  }

  const vlogs = vlogPosts.length > 0
    ? vlogPosts.map((post) => ({
        title: post.title.rendered,
        youtubeId: extractYoutubeId(post.content.rendered) ?? 'dQw4w9WgXcQ',
        date: post.date,
        description: post.excerpt.rendered.replace(/<[^>]+>/g, ''),
      }))
    : PLACEHOLDER_VLOGS

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-noir)] to-[#2D1A2A]">
        <div className="section-container text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label text-[var(--color-gold)]">YouTube</span>
            <div className="gold-divider-center mt-3 mb-4" />
            <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-white">
              Vlogs
            </h1>
            <p className="mt-4 text-white/70 max-w-md mx-auto">
              Come into my world. Life, unedited.
            </p>
            <a
              href="https://youtube.com/@liadominique"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 inline-flex"
            >
              Subscribe on YouTube
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vlogs.map((vlog, i) => (
              <AnimatedSection key={vlog.title} delay={0.06 * i}>
                <VlogCard {...vlog} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-pad bg-[var(--color-cream)]">
        <div className="section-container">
          <NewsletterSignup
            heading="Never Miss a Vlog"
            subtext="Get notified when I post new videos plus behind-the-scenes content you won't see anywhere else."
          />
        </div>
      </section>
    </>
  )
}
