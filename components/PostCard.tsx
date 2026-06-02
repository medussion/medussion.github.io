import Link from 'next/link'
import { PostMeta, formatDate, getCategoryLabel } from '@/lib/posts'

interface PostCardProps {
  post: PostMeta
}

export default function PostCard({ post }: PostCardProps) {
  const { slug, frontmatter, readingTime } = post
  const primaryCategory = frontmatter.categories[0] || 'etc'
  const categoryLabel = getCategoryLabel(primaryCategory)

  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-white shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-200">
      <div className="flex flex-1 flex-col p-5">
        {/* Category badge */}
        <div className="mb-3">
          <Link
            href={`/categories/${primaryCategory}`}
            className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-accent hover:bg-blue-100 transition-colors"
          >
            {categoryLabel}
          </Link>
        </div>

        {/* Title */}
        <h2 className="mb-2 text-base font-semibold leading-snug text-foreground group-hover:text-accent transition-colors line-clamp-2">
          <Link href={`/blog/${slug}`} className="stretched-link">
            {frontmatter.title}
          </Link>
        </h2>

        {/* Excerpt */}
        {frontmatter.excerpt && (
          <p className="mb-4 flex-1 text-sm text-muted line-clamp-3 leading-relaxed">
            {frontmatter.excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="mt-auto flex items-center justify-between text-xs text-muted border-t border-border pt-3">
          <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
          <span>{readingTime}분 읽기</span>
        </div>
      </div>
    </article>
  )
}
