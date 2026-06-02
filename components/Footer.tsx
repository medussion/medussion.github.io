export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-semibold text-foreground">메두사 개발 연구소</p>
            <p className="mt-1 text-xs text-muted">
              게임 개발 공부 기록 블로그 · Game Development &amp; Programming
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted">
            <a
              href="https://github.com/medussion"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <span>© {new Date().getFullYear()} medussion</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
