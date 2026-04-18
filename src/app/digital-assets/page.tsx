import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import NewsletterSignup from '@/components/shared/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Digital Assets',
  description: 'Shop Lia Dominique\'s digital products — planners, guides, and tools for the neurospicy, bouji life.',
}

const COMING_SOON = [
  { emoji: '🗓️', title: 'Neurospicy Life Planner', desc: 'A printable & digital planner designed for ADHD and autistic brains — flexible, visual, and actually beautiful.', tag: 'Planner' },
  { emoji: '🍽️', title: 'Bouji Recipes E-Book', desc: 'Sensory-friendly, family-approved recipes that look and taste like a million dollars.', tag: 'E-Book' },
  { emoji: '💼', title: 'Brand Partnership Pitch Kit', desc: 'Everything you need to land your first paid brand deal as a content creator.', tag: 'Template Kit' },
  { emoji: '🧠', title: 'ADHD Starter Guide', desc: 'Newly diagnosed or freshly exploring? This guide is your compassionate, no-fluff starting point.', tag: 'Guide' },
]

export default function DigitalAssetsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-blush-light)] to-[var(--color-ivory)]">
        <div className="section-container text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label">The Shop</span>
            <div className="gold-divider-center mt-3 mb-4" />
            <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-[var(--color-noir)]">
              Digital Assets
            </h1>
            <p className="mt-4 text-[var(--color-charcoal)] max-w-md mx-auto">
              Tools, guides, and resources built by a neurospicy woman, for a neurospicy world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming soon */}
      <section className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="section-label">Coming Soon ✨</span>
              <div className="gold-divider-center mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)]">
                What&apos;s Dropping
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {COMING_SOON.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.1 * i}>
                <div className="card p-8 border border-[var(--color-blush-light)] text-center">
                  <span className="text-5xl">{item.emoji}</span>
                  <span className="block mt-4 section-label">{item.tag}</span>
                  <h3 className="mt-2 font-[family-name:var(--font-serif)] text-2xl text-[var(--color-noir)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--color-charcoal)] leading-relaxed">{item.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs text-[var(--color-mauve)] font-medium tracking-wide uppercase">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-mauve)] animate-pulse" />
                    Coming Soon
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Notify CTA */}
      <section className="section-pad bg-gradient-to-br from-[var(--color-mauve)] to-[var(--color-mauve-dark)]">
        <div className="section-container">
          <AnimatedSection>
            <NewsletterSignup
              dark
              heading="Be First to Know"
              subtext="Join the list to get early access and launch discounts when new products drop."
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
