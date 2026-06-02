import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllCategories, getCategoryLabel } from '@/lib/posts'

export const metadata: Metadata = {
  title: '카테고리',
  description: '게시물 카테고리 목록',
}

export default function CategoriesPage() {
  const categories = getAllCategories()
  const sorted = Object.entries(categories).sort((a, b) => b[1] - a[1])

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-8 text-2xl font-bold text-foreground">카테고리</h1>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {sorted.map(([category, count]) => (
          <Link
            key={category}
            href={`/categories/${category}`}
            className="flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 hover:border-accent/50 hover:bg-surface-2 transition-all group"
          >
            <span className="font-medium text-foreground group-hover:text-accent-light transition-colors">
              {getCategoryLabel(category)}
            </span>
            <span className="text-sm text-muted">{count}개</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
