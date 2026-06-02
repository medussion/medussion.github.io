import type { Metadata } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import CategoryNav from '@/components/CategoryNav'

export const metadata: Metadata = {
  title: '블로그',
  description: '게임 개발, C++, C#, Unity, 디자인 패턴 관련 모든 게시물',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">블로그</h1>
        <p className="mt-1 text-sm text-muted">총 {posts.length}개의 게시물</p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Posts grid */}
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

        {/* Sidebar */}
        <aside className="w-full lg:w-56 xl:w-64 flex-shrink-0">
          <div className="sticky top-20 rounded-xl border border-border bg-surface p-4">
            <CategoryNav categories={categories} />
          </div>
        </aside>
      </div>
    </div>
  )
}
