import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts } from '@/lib/posts'
import { wikiDomainHref, wikiDomains } from '@/lib/wiki'

interface PageProps {
  params: Promise<{ domain: string }>
}

export function generateStaticParams() {
  return wikiDomains.map(({ id }) => ({ domain: id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { domain } = await params
  const entry = wikiDomains.find(({ id }) => id === domain)
  if (!entry) notFound()

  return {
    title: `${entry.name} · 게임 개발 위키`,
    description: entry.summary,
    alternates: { canonical: wikiDomainHref(entry.id) },
  }
}

export default async function WikiDomainPage({ params }: PageProps) {
  const { domain } = await params
  const active = wikiDomains.find(({ id }) => id === domain)
  if (!active) notFound()

  const posts = new Map(getAllPosts().map((post) => [post.slug, post]))

  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-7 sm:px-6 sm:pt-10">
        <nav aria-label="현재 위치" className="mb-6 flex items-center gap-3 text-sm text-slate-600">
          <Link href="/" className="font-medium underline-offset-4 hover:underline">게임 개발 위키</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{active.name}</span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[13.75rem_minmax(0,1fr)] lg:gap-9">
          <aside className="self-start lg:sticky lg:top-24">
            <nav aria-label="위키 분야" className="rounded-xl border border-border bg-white p-3">
              <h2 className="px-3 pb-2 pt-1 text-sm font-semibold text-slate-600">분야</h2>
              <ul className="flex flex-wrap gap-1 lg:flex-col">
                {wikiDomains.map((entry) => (
                  <li key={entry.id}>
                    <Link
                      href={wikiDomainHref(entry.id)}
                      aria-current={entry.id === active.id ? 'page' : undefined}
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-blue-50 ${entry.id === active.id ? 'bg-blue-100 font-semibold text-accent-light' : 'text-slate-700'}`}
                    >
                      {entry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="rounded-2xl border border-border bg-white p-5 sm:p-9">
            <header>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">{active.name}</h1>
              <p className="mt-3 text-base text-slate-600">{active.summary}</p>
            </header>
            <nav aria-labelledby="wiki-contents" className="my-7 rounded-lg border border-border bg-surface p-4 sm:p-5">
              <h2 id="wiki-contents" className="mb-2 font-semibold text-foreground">목차</h2>
              <ol className="list-decimal space-y-2 pl-6 text-accent-light">
                {active.chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <a href={`#${chapter.id}`} className="underline underline-offset-4 hover:text-foreground">
                      {chapter.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="divide-y divide-border">
              {active.chapters.map((chapter) => (
                <section key={chapter.id} id={chapter.id} className="scroll-mt-24 py-6 first:pt-0 last:pb-0">
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">{chapter.title}</h2>
                  <p className="mt-2 break-keep leading-relaxed text-slate-600">{chapter.description}</p>
                  {chapter.posts.length > 0 && (
                    <ul className="mt-4 divide-y divide-border overflow-hidden rounded-lg border border-border">
                      {chapter.posts.map((slug) => {
                        const post = posts.get(slug)
                        if (!post) return null
                        return (
                          <li key={slug}>
                            <Link href={`/blog/${slug}`} className="flex items-start gap-3 px-4 py-3 font-medium text-accent-light hover:bg-blue-50 hover:underline focus-visible:bg-blue-50">
                              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true">
                                <path d="M4.5 2.5h7.75l3.25 3.25V17.5h-11v-15ZM12 2.75V6h3.25M7 9.5h6m-6 3h6" />
                              </svg>
                              <span>{post.frontmatter.title}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
