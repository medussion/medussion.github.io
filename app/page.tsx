import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import CategoryNav from '@/components/CategoryNav'

export default function HomePage() {
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 6)
  const categories = getAllCategories()

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Hero */}
      <section className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          <span className="bg-gradient-to-r from-accent-light to-accent-blue bg-clip-text text-transparent">
            메두사 개발 연구소
          </span>
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-xl mx-auto">
          게임 개발, C++, C#, Unity, 디자인 패턴을 공부하고 정리하는 기술 블로그
        </p>
      </section>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">최근 게시물</h2>
            <Link
              href="/blog"
              className="text-sm text-accent-light hover:underline"
            >
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
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent/50 hover:bg-surface-2 transition-all"
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
        <aside className="w-full lg:w-56 xl:w-64 flex-shrink-0">
          <div className="sticky top-20 rounded-xl border border-border bg-surface p-4">
            <CategoryNav categories={categories} />

            <div className="mt-6 border-t border-border pt-5">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                정보
              </h2>
              <div className="space-y-2 text-sm text-muted">
                <div className="flex justify-between">
                  <span>게시물</span>
                  <span className="font-medium text-foreground">{allPosts.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>카테고리</span>
                  <span className="font-medium text-foreground">{Object.keys(categories).length}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
