import Link from 'next/link'
import Image from 'next/image'

interface VlogCardProps {
  title: string
  youtubeId: string
  date: string
  description?: string
  href?: string
}

function getYoutubeThumbnail(id: string) {
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
}

export default function VlogCard({ title, youtubeId, date, description, href }: VlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const content = (
    <div className="group card cursor-pointer">
      <div className="relative aspect-video overflow-hidden bg-[var(--color-noir)]">
        <Image
          src={getYoutubeThumbnail(youtubeId)}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
        />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[var(--color-mauve)]/90 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <path d="M6.5 4.5l10 5.5-10 5.5V4.5z"/>
            </svg>
          </div>
        </div>
        <span className="absolute top-4 left-4 section-label bg-[var(--color-ivory)]/90 backdrop-blur-sm px-3 py-1 rounded-full">
          Vlog
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs text-[var(--color-muted)] mb-2">{formattedDate}</p>
        <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-noir)] group-hover:text-[var(--color-mauve)] transition-colors leading-snug">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-[var(--color-charcoal)] line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  )

  if (href) return <Link href={href}>{content}</Link>
  return (
    <a
      href={`https://www.youtube.com/watch?v=${youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  )
}
