import Link from 'next/link'
import { getCategoryLabel } from '@/lib/posts'

interface CategoryNavProps {
  categories: Record<string, number>
  activeCategory?: string
}

export default function CategoryNav({ categories, activeCategory }: CategoryNavProps) {
  const sorted = Object.entries(categories).sort((a, b) => b[1] - a[1])

  return (
    <nav aria-label="카테고리 목록">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
        카테고리
      </h2>
      <ul className="space-y-1">
        <li>
          <Link
            href="/blog"
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
              !activeCategory
                ? 'bg-accent/10 text-accent-light font-medium'
                : 'text-muted hover:bg-surface-2 hover:text-foreground'
            }`}
          >
            <span>전체</span>
            <span className="text-xs tabular-nums">
              {Object.values(categories).reduce((a, b) => a + b, 0)}
            </span>
          </Link>
        </li>
        {sorted.map(([category, count]) => (
          <li key={category}>
            <Link
              href={`/categories/${category}`}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                activeCategory?.toLowerCase() === category.toLowerCase()
                  ? 'bg-accent/10 text-accent-light font-medium'
                  : 'text-muted hover:bg-surface-2 hover:text-foreground'
              }`}
            >
              <span>{getCategoryLabel(category)}</span>
              <span className="text-xs tabular-nums">{count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
