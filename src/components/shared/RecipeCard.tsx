import Link from 'next/link'
import Image from 'next/image'
import type { WPPost } from '@/types/wordpress'

interface RecipeCardProps {
  post: WPPost
}

export default function RecipeCard({ post }: RecipeCardProps) {
  const thumb = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const cookTime = (post.acf as Record<string, string> | undefined)?.cook_time
  const difficulty = (post.acf as Record<string, string> | undefined)?.difficulty

  return (
    <Link href={`/recipes/${post.slug}`} className="group block card">
      <div className="relative aspect-square overflow-hidden bg-[var(--color-cream)]">
        {thumb ? (
          <Image
            src={thumb}
            alt={post.title.rendered}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-cream)] flex items-center justify-center">
            <span className="text-4xl">🍽️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-noir)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          {cookTime && (
            <span className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M6 3v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              {cookTime}
            </span>
          )}
          {difficulty && (
            <span className="text-xs text-[var(--color-gold)] font-medium">{difficulty}</span>
          )}
        </div>
        <h3
          className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-noir)] group-hover:text-[var(--color-mauve)] transition-colors"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div
          className="mt-2 text-sm text-[var(--color-charcoal)] line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
      </div>
    </Link>
  )
}
