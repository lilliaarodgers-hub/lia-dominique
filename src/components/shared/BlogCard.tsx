import Link from 'next/link'
import Image from 'next/image'
import type { WPPost } from '@/types/wordpress'

interface BlogCardProps {
  post: WPPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const date = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const thumb = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name

  return (
    <Link href={`/blog/${post.slug}`} className="group block card">
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-[var(--color-cream)] ${
          featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
        }`}
      >
        {thumb ? (
          <Image
            src={thumb}
            alt={post.title.rendered}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-blush-light)] to-[var(--color-cream)] flex items-center justify-center">
            <span className="font-[family-name:var(--font-great-vibes)] text-4xl text-[var(--color-mauve)]/40">
              LD
            </span>
          </div>
        )}
        {category && (
          <span className="absolute top-4 left-4 section-label bg-[var(--color-ivory)]/90 backdrop-blur-sm px-3 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-[var(--color-muted)] mb-2">{date}</p>
        <h3
          className={`font-[family-name:var(--font-serif)] text-[var(--color-noir)] group-hover:text-[var(--color-mauve)] transition-colors leading-snug ${
            featured ? 'text-2xl' : 'text-xl'
          }`}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div
          className="mt-3 text-sm text-[var(--color-charcoal)] line-clamp-2 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[var(--color-mauve)] tracking-wide uppercase">
          Read more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  )
}
