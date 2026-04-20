import Link from 'next/link'

const footerLinks = {
  Explore: [
    { label: 'Neurospicy Life', href: '/neurospicy-life' },
    { label: 'Blog', href: '/blog' },
    { label: 'Partnerships', href: '/partnerships' },
    { label: 'Recipes', href: '/recipes' },
    { label: 'Travel', href: '/travel' },
  ],
  More: [
    { label: 'Digital Assets', href: '/digital-assets' },
    { label: 'About', href: '/about' },
    { label: 'Vlogs', href: '/vlogs' },
    { label: 'Portfolio', href: '/about#portfolio' },
  ],
}

const socials = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@liadominique', icon: 'TT' },
  { label: 'YouTube', href: 'https://www.youtube.com/@liadominique', icon: 'YT' },
  { label: 'Substack', href: 'https://liadominique.substack.com', icon: 'SS' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/liadominique', icon: 'PI' },
  { label: 'Lemon8', href: 'https://www.lemon8app.com/@liadominique', icon: 'L8' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/liadominique', icon: 'LI' },
  { label: 'Patreon', href: 'https://www.patreon.com/liadominique', icon: 'PA' },
  { label: 'Benable', href: 'https://benable.com/liadominique', icon: 'BE' },
  { label: 'Amazon', href: 'https://www.amazon.com/shop/liadominique', icon: 'AZ' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--color-noir)] text-[var(--color-ivory)]">
      {/* Top strip */}
      <div className="h-1 bg-gradient-to-r from-[var(--color-mauve)] via-[var(--color-gold)] to-[var(--color-rose)]" />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-[family-name:var(--font-great-vibes)] text-4xl text-[var(--color-gold)]">
              Lia Dominique
            </span>
            <p className="mt-4 text-sm text-[var(--color-muted)] max-w-xs leading-relaxed">
              Living loud, loving deep, and doing it all a little neurospicy. Welcome to my world — unfiltered, bouji, and beautifully mine.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[var(--color-charcoal)] flex items-center justify-center text-xs font-medium text-[var(--color-muted)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-ivory)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--color-charcoal)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} Lia Dominique. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-[var(--color-ivory)] transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-[var(--color-ivory)] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
