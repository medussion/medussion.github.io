import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import {
  getAllPostSlugs,
  getPostBySlug,
  formatDate,
  getCategoryLabel,
} from '@/lib/posts'
import TOC from '@/components/TOC'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const { frontmatter } = post
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://medussion.github.io'

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      type: 'article',
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.lastmod,
      tags: frontmatter.tags,
      url: `${siteUrl}/blog/${slug}`,
    },
    alternates: {
      canonical: `${siteUrl}/blog/${slug}`,
    },
  }
}

function processContent(content: string): string {
  return content
    // Convert {: .notice--warning} blocks
    .replace(
      /^(.*?)\n\{:\s*\.notice--(\w+)\}/gm,
      '<div class="notice notice--$2">$1</div>'
    )
    // Remove Jekyll button/scroll links
    .replace(/\[맨 위로 이동하기\].*$/gm, '')
    // Remove HTML comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // Remove remaining Jekyll kramdown syntax
    .replace(/\{:\s*[^}]*\}/g, '')
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post || !post.frontmatter.published) {
    notFound()
  }

  const { frontmatter, content, readingTime } = post
  const processedContent = processContent(content)
  const primaryCategory = frontmatter.categories[0] || 'etc'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://medussion.github.io'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    datePublished: frontmatter.date,
    dateModified: frontmatter.lastmod || frontmatter.date,
    author: {
      '@type': 'Person',
      name: 'medussion',
      url: 'https://github.com/medussion',
    },
    publisher: {
      '@type': 'Organization',
      name: '메두사 개발 연구소',
      url: siteUrl,
    },
    url: `${siteUrl}/blog/${slug}`,
    inLanguage: 'ko',
    keywords: frontmatter.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Article */}
          <article className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm text-muted" aria-label="breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors">홈</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-foreground transition-colors">블로그</Link>
              <span>/</span>
              <Link
                href={`/categories/${primaryCategory}`}
                className="hover:text-foreground transition-colors"
              >
                {getCategoryLabel(primaryCategory)}
              </Link>
            </nav>

            {/* Post header */}
            <header className="mb-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {frontmatter.categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/categories/${cat}`}
                    className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-light hover:bg-accent/20 transition-colors"
                  >
                    {getCategoryLabel(cat)}
                  </Link>
                ))}
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-2xl font-bold leading-snug text-foreground sm:text-3xl">
                {frontmatter.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
                <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
                {frontmatter.lastmod && frontmatter.lastmod !== frontmatter.date && (
                  <span>수정: {formatDate(frontmatter.lastmod)}</span>
                )}
                <span>{readingTime}분 읽기</span>
              </div>
            </header>

            {/* Post content */}
            <div className="prose prose-sm sm:prose max-w-none dark:prose-invert">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                  rehypeRaw,
                  rehypeSlug,
                  rehypeHighlight,
                ]}
              >
                {processedContent}
              </ReactMarkdown>
            </div>

            {/* Post footer */}
            <footer className="mt-10 border-t border-border pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                블로그 목록으로
              </Link>
            </footer>
          </article>

          {/* TOC Sidebar */}
          {frontmatter.toc !== false && (
            <aside className="hidden xl:block w-56 flex-shrink-0">
              <div className="sticky top-20 rounded-xl border border-border bg-surface p-4">
                <TOC content={content} />
              </div>
            </aside>
          )}
        </div>
      </div>
    </>
  )
}
