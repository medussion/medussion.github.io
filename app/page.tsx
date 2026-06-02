import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import CategoryNav from '@/components/CategoryNav'
import AuthorProfile from '@/components/AuthorProfile'

export default function HomePage() {
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 6)
  const categories = getAllCategories()

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">최근 게시물</h2>
            <Link href="/blog" className="text-sm text-accent hover:underline font-medium">
              전체 보기 →
            </Link>
          </div>

          {recentPosts.length === 0 ? (
            <div className="rounded-xl border border-border bg-surface p-8 text-center text-muted">
              <p>아직 게시물이 없습니다.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {allPosts.length > 6 && (
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-white px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-all shadow-sm"
              >
                게시물 더 보기
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-60 xl:w-64 flex-shrink-0">
          <div className="sticky top-20 flex flex-col gap-4">
            {/* Author Profile */}
            <AuthorProfile />

            {/* Category Nav */}
            <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
              <CategoryNav categories={categories} />

              <div className="mt-4 border-t border-border pt-4">
                <div className="space-y-1.5 text-sm text-muted">
                  <div className="flex justify-between">
                    <span>전체 게시물</span>
                    <span className="font-semibold text-foreground">{allPosts.length}개</span>
                  </div>
                  <div className="flex justify-between">
                    <span>카테고리</span>
                    <span className="font-semibold text-foreground">{Object.keys(categories).length}개</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
