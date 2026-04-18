'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import MobileNav from './MobileNav'

const navLinks = [
  { label: 'Neurospicy Life', href: '/neurospicy-life' },
  { label: 'Blog', href: '/blog' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Travel', href: '/travel' },
  { label: 'Digital Assets', href: '/digital-assets' },
  { label: 'About', href: '/about' },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-ivory)]/95 backdrop-blur-sm shadow-[0_1px_20px_rgba(139,74,107,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-[family-name:var(--font-great-vibes)] text-3xl md:text-4xl text-[var(--color-mauve)] group-hover:text-[var(--color-mauve-dark)] transition-colors">
            Lia Dominique
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-sans)] text-sm font-medium text-[var(--color-charcoal)] hover:text-[var(--color-mauve)] transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile */}
        <div className="flex items-center gap-4">
          <div className="relative z-50">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
