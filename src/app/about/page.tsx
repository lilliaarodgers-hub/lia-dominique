import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import NewsletterSignup from '@/components/shared/NewsletterSignup'

export const metadata: Metadata = {
  title: 'About',
  description: 'Founder. Creator. Neurospicy woman. The full Lia Dominique story.',
}

const PORTFOLIO = [
  {
    category: 'Content Creation',
    items: [
      { title: 'LiaDominique.com', role: 'Founder & Lead Creator', year: '2024–Present', desc: 'Built and launched personal lifestyle brand covering neurospicy living, food, family, and travel.' },
      { title: 'YouTube Channel', role: 'Host & Producer', year: '2023–Present', desc: 'Lifestyle vlogs with a focus on authentic storytelling and neurodivergent experiences.' },
    ],
  },
  {
    category: 'Brand Partnerships',
    items: [
      { title: 'Wellness Brand Campaigns', role: 'Brand Ambassador', year: '2023–2024', desc: 'Sponsored content for wellness and lifestyle brands reaching 30K+ combined audience.' },
      { title: 'Neurospicy Advocacy Content', role: 'Creator', year: '2023–Present', desc: 'Educational and empowering content series for neurodivergent women and families.' },
    ],
  },
  {
    category: 'Digital Products',
    items: [
      { title: 'Coming Soon: Neurospicy Life Planner', role: 'Creator', year: '2024', desc: 'A printable & digital planner designed specifically for ADHD and neurospicy brains.' },
      { title: 'Recipe E-Book', role: 'Author', year: '2025', desc: 'Sensory-friendly, family-approved recipes for the bouji home cook.' },
    ],
  },
]

const VALUES = [
  { word: 'Authentic', desc: 'No filter, no pretending. You get the real Lia.' },
  { word: 'Bouji', desc: 'I believe in doing everything with a touch of luxury.' },
  { word: 'Neurospicy', desc: 'My brain is wired differently — and that\'s a gift.' },
  { word: 'Present', desc: 'Family, adventure, love. I show up fully.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--color-blush-light)] to-[var(--color-ivory)]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="section-label">My Story</span>
              <div className="gold-divider mt-3 mb-4" />
              <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-[var(--color-noir)] leading-tight">
                Hi, I&apos;m{' '}
                <span className="font-[family-name:var(--font-great-vibes)] text-[var(--color-mauve)] text-7xl sm:text-8xl block mt-1">
                  Lia Dominique
                </span>
              </h1>
              <p className="mt-6 text-lg text-[var(--color-charcoal)] leading-relaxed">
                Founder. Creator. Mom. Partner. Certified bouji woman. And a proudly neurospicy human navigating a beautiful, complicated, fully-lived life.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/partnerships" className="btn-primary">Work With Me</Link>
                <Link href="#portfolio" className="btn-outline">View Portfolio</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} direction="right">
              <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[var(--color-blush)] to-[var(--color-mauve)]/50 shadow-2xl flex items-center justify-center">
                  <span className="font-[family-name:var(--font-great-vibes)] text-8xl text-white/60">Lia</span>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[var(--color-gold)] text-white rounded-2xl px-5 py-4 shadow-xl">
                  <p className="text-xs font-medium tracking-widest uppercase opacity-80">Based in</p>
                  <p className="font-[family-name:var(--font-serif)] text-xl mt-0.5">United States</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full story */}
      <section className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label">The Long Version</span>
            <div className="gold-divider mt-3 mb-6" />
            <div className="space-y-5 text-[var(--color-charcoal)] leading-relaxed text-lg">
              <p>
                I didn&apos;t always know I was neurospicy. For a long time, I thought I was just&hellip; a lot. Too emotional. Too scattered. Too intense. Too much.
              </p>
              <p>
                When I got my diagnosis, everything clicked into place — and then the real work began. Not the work of fixing myself, but the work of <em>understanding</em> myself. Building a life that works <em>with</em> my brain instead of constantly fighting it.
              </p>
              <p>
                LiaDominique.com is the place I wish had existed when I needed it most. A space where a woman can be glamorous and overwhelmed, bouji and budget-stretching, deeply in love and still figuring herself out. All at once. Simultaneously.
              </p>
              <p>
                I write about food and travel and family and the gorgeous chaos of my partnerships and my parenting. I also write about the hard stuff — the meltdowns, the executive dysfunction, the moments where I had to choose myself.
              </p>
              <p className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-mauve)] italic">
                This is my life, unfiltered. Welcome to it.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[var(--color-cream)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="section-label">What I Stand For</span>
              <div className="gold-divider-center mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)]">
                My Values
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.word} delay={0.1 * i}>
                <div className="text-center p-8 bg-white rounded-3xl border border-[var(--color-blush-light)] hover:border-[var(--color-mauve)] transition-colors">
                  <p className="font-[family-name:var(--font-great-vibes)] text-4xl text-[var(--color-mauve)]">
                    {v.word}
                  </p>
                  <div className="gold-divider-center mt-3 mb-3" />
                  <p className="text-sm text-[var(--color-charcoal)]">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="mb-12">
              <span className="section-label">Career & Work</span>
              <div className="gold-divider mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)]">
                Portfolio
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {PORTFOLIO.map((section, si) => (
              <AnimatedSection key={section.category} delay={0.1 * si}>
                <h3 className="section-label mb-6 block">{section.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="card p-6 border border-[var(--color-blush-light)] hover:border-[var(--color-mauve)] transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-noir)]">
                          {item.title}
                        </h4>
                        <span className="flex-shrink-0 text-xs text-[var(--color-muted)]">{item.year}</span>
                      </div>
                      <p className="text-sm text-[var(--color-gold)] font-medium mt-1">{item.role}</p>
                      <p className="text-sm text-[var(--color-charcoal)] mt-3 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gradient-to-br from-[var(--color-noir)] to-[#2D1F1F]">
        <div className="section-container max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <span className="section-label text-[var(--color-gold)]">Let&apos;s Connect</span>
            <div className="gold-divider-center mt-3 mb-6" />
            <h2 className="font-[family-name:var(--font-serif)] text-5xl text-white">
              Ready to work together?
            </h2>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
              Whether you&apos;re a brand, a collaborator, or just someone who wants to say hi — my inbox is open.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/partnerships" className="btn-gold">
                Partnership Inquiry
              </Link>
              <a href="mailto:hello@liadominique.com" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white">
                Email Directly
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-cream)]">
        <div className="section-container">
          <NewsletterSignup />
        </div>
      </section>
    </>
  )
}
