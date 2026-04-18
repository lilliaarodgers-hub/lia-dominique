'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Neurospicy Life', href: '/neurospicy-life' },
  { label: 'Blog', href: '/blog' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Travel', href: '/travel' },
  { label: 'Digital Assets', href: '/digital-assets' },
  { label: 'About', href: '/about' },
  { label: 'Vlogs', href: '/vlogs' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="flex flex-col gap-[5px] p-2 lg:hidden"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="block w-6 h-px bg-[var(--color-noir)] origin-center"
          style={{ display: 'block' }}
        />
        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-px bg-[var(--color-noir)]"
          style={{ display: 'block' }}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className="block w-6 h-px bg-[var(--color-noir)] origin-center"
          style={{ display: 'block' }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[var(--color-ivory)] flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-3xl font-[family-name:var(--font-cormorant)] text-[var(--color-noir)] border-b border-[var(--color-blush)] hover:text-[var(--color-mauve)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8">
              <Link
                href="/partnerships"
                onClick={() => setOpen(false)}
                className="btn-primary w-full text-center"
              >
                Work With Me
              </Link>
            </div>
            <p className="mt-auto mb-8 text-xs text-[var(--color-muted)] tracking-widest uppercase">
              liadominique.com
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
