'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/shared/AnimatedSection'

const PARTNERSHIP_TYPES = [
  'Sponsored Blog Post',
  'YouTube Integration / Dedicated Video',
  'Instagram / TikTok Content',
  'Digital Product Collaboration',
  'Event / Experience',
  'Brand Ambassador',
  'Other',
]

const STATS = [
  { value: '50K+', label: 'Monthly Readers' },
  { value: '30K+', label: 'Social Followers' },
  { value: '25K+', label: 'YouTube Views / Mo' },
  { value: '85%', label: 'Audience: Women 25–44' },
]

export default function PartnershipsPage() {
  const [form, setForm] = useState({
    name: '',
    brand: '',
    email: '',
    website: '',
    type: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/api/partnerships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-5 py-3 rounded-xl border border-[var(--color-blush)] bg-white text-[var(--color-noir)] placeholder:text-[var(--color-muted)] text-sm outline-none focus:border-[var(--color-mauve)] transition-colors'

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-blush-light)] to-[var(--color-ivory)]">
        <div className="section-container text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label">Collaborations</span>
            <div className="gold-divider-center mt-3 mb-4" />
            <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-[var(--color-noir)] leading-tight">
              Let&apos;s Work{' '}
              <span className="font-[family-name:var(--font-great-vibes)] text-[var(--color-mauve)] text-7xl sm:text-8xl block mt-1">
                Together
              </span>
            </h1>
            <p className="mt-6 text-[var(--color-charcoal)] leading-relaxed">
              I partner with brands that genuinely align with who I am and who my audience is — luxury, wellness, neurodivergent-friendly, and always authentic. If that sounds like you, let&apos;s talk.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[var(--color-mauve)]">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {STATS.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={0.1 * i}>
                <p className="font-[family-name:var(--font-serif)] text-5xl">{stat.value}</p>
                <p className="text-xs tracking-widest uppercase text-white/70 mt-2">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What I offer */}
      <section className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="section-label">Services</span>
              <div className="gold-divider-center mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)]">
                What I Offer
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📸', title: 'Social Content', desc: 'Instagram Reels, TikTok, Stories — beautiful, on-brand, and authentic content your audience will actually engage with.' },
              { icon: '🎬', title: 'YouTube Videos', desc: 'Dedicated vlogs, integrations, and reviews with genuine storytelling that converts.' },
              { icon: '✍️', title: 'Blog Features', desc: 'Long-form sponsored posts, gift guides, and lifestyle roundups with SEO reach.' },
              { icon: '🎙️', title: 'Speaking & Events', desc: 'Live appearances, panels, and experiences for brands aligned with neurodiversity and women\'s wellness.' },
              { icon: '🛍️', title: 'Digital Products', desc: 'Co-created guides, templates, and courses that live in my shop and serve our shared audience.' },
              { icon: '🤝', title: 'Brand Ambassador', desc: 'Long-term partnerships with ongoing content, story takeovers, and affiliate programs.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={0.07 * i}>
                <div className="card p-6 h-full border border-[var(--color-blush-light)] hover:border-[var(--color-mauve)] transition-colors">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="mt-3 font-[family-name:var(--font-serif)] text-xl text-[var(--color-noir)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-charcoal)] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-pad bg-[var(--color-cream)]">
        <div className="section-container max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="section-label">Get In Touch</span>
              <div className="gold-divider-center mt-3 mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--color-noir)]">
                Partnership Inquiry
              </h2>
              <p className="mt-4 text-[var(--color-charcoal)]">
                Fill out the form below and I&apos;ll get back to you within 2–3 business days.
              </p>
            </div>
          </AnimatedSection>

          {status === 'success' ? (
            <AnimatedSection>
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[var(--color-mauve)]/10 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" stroke="var(--color-mauve)" strokeWidth="1.5"/>
                    <path d="M8 14l4 4 8-8" stroke="var(--color-mauve)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-noir)] mb-3">
                  Message Received!
                </h3>
                <p className="text-[var(--color-charcoal)]">
                  Thank you for reaching out. I&apos;ll review your inquiry and be in touch within 2–3 business days. ✨
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[var(--color-charcoal)] mb-2 tracking-wide uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="First & Last Name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[var(--color-charcoal)] mb-2 tracking-wide uppercase">
                      Brand / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.brand}
                      onChange={(e) => update('brand', e.target.value)}
                      placeholder="Brand Name"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[var(--color-charcoal)] mb-2 tracking-wide uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@brand.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[var(--color-charcoal)] mb-2 tracking-wide uppercase">
                      Website
                    </label>
                    <input
                      type="url"
                      value={form.website}
                      onChange={(e) => update('website', e.target.value)}
                      placeholder="https://yourbrand.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--color-charcoal)] mb-2 tracking-wide uppercase">
                    Partnership Type *
                  </label>
                  <select
                    required
                    value={form.type}
                    onChange={(e) => update('type', e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select a partnership type…</option>
                    {PARTNERSHIP_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--color-charcoal)] mb-2 tracking-wide uppercase">
                    Campaign Budget
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => update('budget', e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Prefer not to say / Flexible</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $3,000</option>
                    <option>$3,000 – $5,000</option>
                    <option>$5,000 – $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--color-charcoal)] mb-2 tracking-wide uppercase">
                    Tell Me About Your Brand & Goals *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Share a bit about your brand, campaign goals, timeline, and why you think we'd be a good fit…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full"
                >
                  {status === 'loading' ? 'Sending…' : 'Send My Inquiry ✨'}
                </button>

                {status === 'error' && (
                  <p className="text-center text-sm text-[var(--color-rose)]">
                    Something went wrong. Please email me directly at hello@liadominique.com
                  </p>
                )}
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  )
}
