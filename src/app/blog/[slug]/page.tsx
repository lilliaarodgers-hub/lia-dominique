import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/shared/AnimatedSection'
import NewsletterSignup from '@/components/shared/NewsletterSignup'
import { getPost, getPosts } from '@/lib/wordpress'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPost(slug)
    if (!post) return { title: 'Post Not Found' }
    const thumb = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
    return {
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 160),
      openGraph: thumb ? { images: [{ url: thumb }] } : undefined,
    }
  } catch {
    return { title: 'Blog Post' }
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getPosts({ perPage: 50 })
    return posts.map((p) => ({ slug: p.slug }))
  } catch {
    return []
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  let post = null
  try {
    post = await getPost(slug)
  } catch {
    // fail gracefully
  }

  if (!post) notFound()

  const date = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  })
  const thumb = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const category = post._embedded?.['wp:term']?.[0]?.[0]
  const author = post._embedded?.author?.[0]

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-0">
        {thumb && (
          <div className="relative w-full aspect-[21/9] max-h-[560px] overflow-hidden">
            <Image src={thumb} alt={post.title.rendered} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-noir)]/60 to-transparent" />
          </div>
        )}
      </section>

      {/* Content */}
      <section className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="mb-8">
              {category && (
                <Link
                  href={`/blog?category=${category.slug}`}
                  className="section-label hover:text-[var(--color-mauve)] transition-colors"
                >
                  {category.name}
                </Link>
              )}
              <h1
                className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl text-[var(--color-noir)] mt-3 leading-tight"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div className="flex items-center gap-4 mt-4 text-sm text-[var(--color-muted)]">
                {author && (
                  <span>By <strong className="text-[var(--color-charcoal)]">{author.name}</strong></span>
                )}
                <span>{date}</span>
              </div>
              <div className="gold-divider mt-6" />
            </div>

            {/* Body */}
            <div
              className="prose-ld"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </AnimatedSection>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-[var(--color-blush-light)]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-mauve)] hover:text-[var(--color-mauve-dark)] transition-colors font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-pad bg-[var(--color-cream)]">
        <div className="section-container">
          <NewsletterSignup
            heading="Enjoyed This Post?"
            subtext="Subscribe and never miss a new story. No spam, just good vibes."
          />
        </div>
      </section>
    </>
  )
}
