import type { Metadata } from 'next'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BlogCard from '@/components/shared/BlogCard'
import { getPosts, getCategories } from '@/lib/wordpress'
import type { WPPost, WPCategory } from '@/types/wordpress'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Lifestyle, adventures, family, and real talk — all from Lia Dominique.',
}

interface Props {
  searchParams: Promise<{ category?: string; page?: string }>
}

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams
  const currentCategory = params.category ?? ''
  const currentPage = Number(params.page ?? 1)

  let posts: WPPost[] = []
  let categories: WPCategory[] = []

  try {
    const [a, b] = await Promise.all([
      getPosts({ perPage: 12, page: currentPage, categorySlug: currentCategory || undefined }),
      getCategories(),
    ])
    posts = a
    categories = b
  } catch {
    // WordPress not yet connected
  }

  const PLACEHOLDER_CATEGORIES = ['Lifestyle', 'Neurospicy Life', 'Recipes', 'Travel', 'Relationships', 'Career']

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-blush-light)] to-[var(--color-ivory)]">
        <div className="section-container text-center">
          <AnimatedSection>
            <span className="section-label">The Journal</span>
            <div className="gold-divider-center mt-3 mb-4" />
            <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-[var(--color-noir)]">
              Blog
            </h1>
            <p className="mt-4 text-[var(--color-charcoal)] max-w-md mx-auto">
              Real stories, honest opinions, and everything in between.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-16 md:top-20 z-30 bg-[var(--color-ivory)]/95 backdrop-blur-sm border-b border-[var(--color-blush-light)]">
        <div className="section-container py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <a
              href="/blog"
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-colors ${
                !currentCategory
                  ? 'bg-[var(--color-mauve)] text-white'
                  : 'bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-blush-light)]'
              }`}
            >
              All
            </a>
            {(categories.length > 0 ? categories.map((c) => c.name) : PLACEHOLDER_CATEGORIES).map((cat, i) => {
              const slug = categories[i]?.slug ?? cat.toLowerCase().replace(/\s+/g, '-')
              return (
                <a
                  key={cat}
                  href={`/blog?category=${slug}`}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-colors ${
                    currentCategory === slug
                      ? 'bg-[var(--color-mauve)] text-white'
                      : 'bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-blush-light)]'
                  }`}
                >
                  {cat}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <AnimatedSection key={post.id} delay={0.05 * i}>
                  <BlogCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <AnimatedSection key={i} delay={0.05 * i}>
                  <div className="card">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-blush-light)] to-[var(--color-cream)]" />
                    <div className="p-5 space-y-3">
                      <div className="h-3 w-20 rounded-full bg-[var(--color-blush-light)]" />
                      <div className="h-5 w-3/4 rounded bg-[var(--color-cream)]" />
                      <div className="h-4 w-full rounded bg-[var(--color-cream)]" />
                      <div className="h-4 w-2/3 rounded bg-[var(--color-cream)]" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
