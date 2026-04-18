'use client'

import { useState } from 'react'

interface NewsletterSignupProps {
  heading?: string
  subtext?: string
  dark?: boolean
}

export default function NewsletterSignup({
  heading = 'Stay In My World',
  subtext = 'Get the latest recipes, vlogs, and neurospicy musings delivered straight to your inbox.',
  dark = false,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  const textColor = dark ? 'text-[var(--color-ivory)]' : 'text-[var(--color-noir)]'
  const mutedColor = dark ? 'text-[var(--color-muted)]' : 'text-[var(--color-charcoal)]'

  return (
    <div className="text-center max-w-md mx-auto">
      <span className="section-label">{dark ? '✦ Subscribe ✦' : '✦ Newsletter ✦'}</span>
      <div className="gold-divider-center mt-2 mb-4" />
      <h2 className={`font-[family-name:var(--font-serif)] text-4xl ${textColor} mb-3`}>
        {heading}
      </h2>
      <p className={`text-sm ${mutedColor} mb-8 leading-relaxed`}>{subtext}</p>

      {status === 'success' ? (
        <div className="flex items-center justify-center gap-2 text-[var(--color-gold)]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-medium">You&apos;re in! Check your inbox ✨</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className={`flex-1 px-5 py-3 rounded-full border text-sm outline-none transition-colors ${
              dark
                ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[var(--color-gold)]'
                : 'bg-white border-[var(--color-blush)] text-[var(--color-noir)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-mauve)]'
            }`}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-gold whitespace-nowrap"
          >
            {status === 'loading' ? 'Joining…' : 'Join the List'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="mt-3 text-xs text-[var(--color-rose)]">
          Something went wrong. Try again!
        </p>
      )}
    </div>
  )
}
