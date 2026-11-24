import WikiMap from '@/components/wiki/WikiMap'
import styles from '@/components/wiki/WikiMap.module.css'

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <header className={styles.intro}>
          <h1>게임 개발 위키</h1>
          <p>분야를 선택해 게임 개발 문서를 찾아보세요.</p>
        </header>
        <WikiMap />
      </div>
    </section>
  )
}
