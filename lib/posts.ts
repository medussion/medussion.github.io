import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostFrontmatter {
  title: string
  date: string
  lastmod?: string
  categories: string[]
  tags: string[]
  published: boolean
  excerpt?: string
  toc?: boolean
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  readingTime: number
}

export interface PostMeta {
  slug: string
  frontmatter: PostFrontmatter
  readingTime: number
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

function parseDate(dateValue: string | Date | undefined): string {
  if (!dateValue) return new Date().toISOString()
  if (dateValue instanceof Date) return dateValue.toISOString()
  return String(dateValue)
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => file.replace(/\.(md|mdx)$/, ''))
}

export function getPostBySlug(slug: string): Post | null {
  const mdPath = path.join(postsDirectory, `${slug}.md`)
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
  const filePath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null

  if (!filePath) return null

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  const frontmatter: PostFrontmatter = {
    title: data.title || slug,
    date: parseDate(data.date),
    lastmod: data.lastmod ? parseDate(data.lastmod) : undefined,
    categories: Array.isArray(data.categories) ? data.categories : [],
    tags: Array.isArray(data.tags)
      ? data.tags.flatMap((t: unknown) =>
          Array.isArray(t) ? t : typeof t === 'string' ? [t] : []
        )
      : [],
    published: data.published !== false,
    excerpt: data.excerpt || extractExcerpt(content),
    toc: data.toc !== false,
  }

  return {
    slug,
    frontmatter,
    content,
    readingTime: estimateReadingTime(content),
  }
}

function extractExcerpt(content: string): string {
  // Remove Jekyll-specific syntax, HTML tags, markdown syntax
  const cleaned = content
    .replace(/\{:.*?\}/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`{1,3}[^`]*`{1,3}/gs, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/\n+/g, ' ')
    .trim()

  return cleaned.slice(0, 160)
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .filter((post) => post.frontmatter.published)
    .map(({ content: _content, ...rest }) => rest)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime()
      const dateB = new Date(b.frontmatter.date).getTime()
      return dateB - dateA
    })

  return posts
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((post) =>
    post.frontmatter.categories.some(
      (cat) => cat.toLowerCase() === category.toLowerCase()
    )
  )
}

export function getAllCategories(): Record<string, number> {
  const posts = getAllPosts()
  const categories: Record<string, number> = {}

  for (const post of posts) {
    for (const cat of post.frontmatter.categories) {
      categories[cat] = (categories[cat] || 0) + 1
    }
  }

  return categories
}

export const CATEGORY_LABELS: Record<string, string> = {
  'Design-Pattern': '디자인 패턴',
  'Effective-CSharp': 'Effective C#',
  'Effective-Cpp': 'Effective C++',
  Seminar: '세미나',
  C: 'C 언어',
  Cpp: 'C++',
  CSharp: 'C#',
  etc: '기타',
  Project: '프로젝트',
  Unity: 'Unity',
}

export function getCategoryLabel(category: string): string {
  return CATEGORY_LABELS[category] || category
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
