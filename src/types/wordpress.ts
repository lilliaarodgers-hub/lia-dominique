export interface WPPost {
  id: number
  date: string
  slug: string
  status: string
  title: { rendered: string }
  content: { rendered: string; protected: boolean }
  excerpt: { rendered: string; protected: boolean }
  featured_media: number
  categories: number[]
  tags: number[]
  acf?: Record<string, unknown>
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
      media_details?: { width: number; height: number }
    }>
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>
    author?: Array<{ name: string; avatar_urls: Record<string, string> }>
  }
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
  description: string
}

export interface WPPage {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  acf?: Record<string, unknown>
}
