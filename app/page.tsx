import AuthorProfile from '@/components/AuthorProfile'
import WikiMap from '@/components/wiki/WikiMap'
import styles from '@/components/wiki/WikiMap.module.css'
import { getAllPosts } from '@/lib/posts'
import { countWikiPostsByDomain } from '@/lib/wiki'

export default function HomePage() {
  const publishedSlugs = new Set(getAllPosts().map(({ slug }) => slug))
  const postCounts = countWikiPostsByDomain(publishedSlugs)

  return (
    <section className={styles.hero}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <header className={styles.intro}>
            <h1>게임 개발 위키</h1>
            <p>분야를 선택해 게임 개발 문서를 찾아보세요.</p>
          </header>
          <WikiMap postCounts={postCounts} />
        </div>
        <aside className={styles.profile} aria-label="작성자 프로필">
          <AuthorProfile />
        </aside>
      </div>
    </section>
  )
}
