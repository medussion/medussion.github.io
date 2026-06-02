import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getAllCategories,
  getPostsByCategory,
  getCategoryLabel,
} from '@/lib/posts'
import PostCard from '@/components/PostCard'
import CategoryNav from '@/components/CategoryNav'

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return Object.keys(categories).map((category) => ({ category }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  const label = getCategoryLabel(decodeURIComponent(category))
  return {
    title: label,
    description: `${label} 관련 게시물 목록`,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params
  const decodedCategory = decodeURIComponent(category)
  const posts = getPostsByCategory(decodedCategory)
  const allCategories = getAllCategories()
  const label = getCategoryLabel(decodedCategory)

  if (posts.length === 0 && !allCategories[decodedCategory]) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">{label}</h1>
        <p className="mt-1 text-sm text-muted">{posts.length}개의 게시물</p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1 min-w-0">
          {posts.length === 0 ? (
            <div className="rounded-xl border border-border bg-surface p-8 text-center text-muted">
              <p>게시물이 없습니다.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>

        <aside className="w-full lg:w-56 xl:w-64 flex-shrink-0">
          <div className="sticky top-20 rounded-xl border border-border bg-surface p-4">
            <CategoryNav categories={allCategories} activeCategory={decodedCategory} />
          </div>
        </aside>
      </div>
    </div>
  )
}
