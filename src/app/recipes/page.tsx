import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection'
import RecipeCard from '@/components/shared/RecipeCard'
import NewsletterSignup from '@/components/shared/NewsletterSignup'
import { getRecipes } from '@/lib/wordpress'
import type { WPPost } from '@/types/wordpress'

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'Bouji, family-approved, sensory-friendly recipes from Lia Dominique\'s kitchen.',
}

const CATEGORIES = ['All', 'Brunch', 'Dinner', 'Desserts', 'Drinks', 'Date Night', 'Meal Prep']

const PLACEHOLDER: { emoji: string; title: string; tag: string; time: string }[] = [
  { emoji: '🥂', title: 'Champagne Brunch Board', tag: 'Brunch', time: '20 min' },
  { emoji: '🥩', title: 'Garlic Butter Ribeye with Truffle Fries', tag: 'Dinner', time: '35 min' },
  { emoji: '🍰', title: 'Brown Sugar Pound Cake', tag: 'Desserts', time: '1h 15m' },
  { emoji: '🍹', title: 'Mango Rosé Sangria', tag: 'Drinks', time: '10 min' },
  { emoji: '🥗', title: 'Date Night Charcuterie Board', tag: 'Date Night', time: '25 min' },
  { emoji: '🍝', title: 'Creamy Marry Me Pasta', tag: 'Dinner', time: '30 min' },
  { emoji: '🫐', title: 'Blueberry Lemon Overnight Oats', tag: 'Meal Prep', time: '10 min' },
  { emoji: '🍫', title: 'Dark Chocolate Sea Salt Brownies', tag: 'Desserts', time: '45 min' },
  { emoji: '🍳', title: 'The Bouji Breakfast Sandwich', tag: 'Brunch', time: '15 min' },
]

export default async function RecipesPage() {
  let recipes: WPPost[] = []
  try {
    recipes = await getRecipes(12)
  } catch {
    // WordPress not yet connected
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-gold-light)] to-[var(--color-ivory)]">
        <div className="section-container text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label">In the Kitchen</span>
            <div className="gold-divider-center mt-3 mb-4" />
            <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-[var(--color-noir)]">
              Recipes
            </h1>
            <p className="mt-4 text-[var(--color-charcoal)] max-w-md mx-auto">
              Bouji home cooking. Family-approved, sensory-friendly, and always gorgeous.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-16 md:top-20 z-30 bg-[var(--color-ivory)]/95 backdrop-blur-sm border-b border-[var(--color-blush-light)]">
        <div className="section-container py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase cursor-pointer transition-colors ${
                  cat === 'All'
                    ? 'bg-[var(--color-mauve)] text-white'
                    : 'bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-blush-light)]'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-[var(--color-ivory)]">
        <div className="section-container">
          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe, i) => (
                <AnimatedSection key={recipe.id} delay={0.07 * i}>
                  <RecipeCard post={recipe} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLACEHOLDER.map((r, i) => (
                <AnimatedSection key={r.title} delay={0.07 * i}>
                  <div className="card group cursor-pointer">
                    <div className="aspect-square bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-cream)] flex items-center justify-center text-6xl">
                      {r.emoji}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="section-label">{r.tag}</span>
                        <span className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
                            <path d="M6 3v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                          </svg>
                          {r.time}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-noir)] group-hover:text-[var(--color-mauve)] transition-colors">
                        {r.title}
                      </h3>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-pad bg-[var(--color-cream)]">
        <div className="section-container">
          <NewsletterSignup
            heading="Get Recipes in Your Inbox"
            subtext="New recipes every week — plus grocery tips, kitchen finds, and exclusive content."
          />
        </div>
      </section>
    </>
  )
}
