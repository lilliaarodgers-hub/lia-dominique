import type { WPPost, WPCategory } from '@/types/wordpress'

const BASE_URL = `${process.env.NEXT_PUBLIC_WORDPRESS_URL ?? 'https://liadominique.com'}/wp-json/wp/v2`
const EMBED = '_embed=wp:featuredmedia,wp:term,author'

async function wpFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) throw new Error(`WordPress API error: ${res.status} ${path}`)
  return res.json() as Promise<T>
}

export async function getPosts(params?: {
  perPage?: number
  page?: number
  categorySlug?: string
  search?: string
}): Promise<WPPost[]> {
  const { perPage = 12, page = 1, categorySlug, search } = params ?? {}
  let path = `/posts?per_page=${perPage}&page=${page}&${EMBED}`
  if (categorySlug) {
    const cats = await getCategories()
    const cat = cats.find((c) => c.slug === categorySlug)
    if (cat) path += `&categories=${cat.id}`
  }
  if (search) path += `&search=${encodeURIComponent(search)}`
  return wpFetch<WPPost[]>(path)
}

export async function getPost(slug: string): Promise<WPPost | null> {
  const posts = await wpFetch<WPPost[]>(`/posts?slug=${slug}&${EMBED}`)
  return posts[0] ?? null
}

export async function getCategories(): Promise<WPCategory[]> {
  return wpFetch<WPCategory[]>('/categories?per_page=100')
}

export async function getRecipes(perPage = 9): Promise<WPPost[]> {
  return getPosts({ perPage, categorySlug: 'recipes' })
}

export async function getNeurospicyPosts(perPage = 9): Promise<WPPost[]> {
  return getPosts({ perPage, categorySlug: 'neurospicy-life' })
}

export async function getVlogPosts(perPage = 9): Promise<WPPost[]> {
  return getPosts({ perPage, categorySlug: 'vlogs' })
}

export function extractYoutubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match?.[1] ?? null
}
