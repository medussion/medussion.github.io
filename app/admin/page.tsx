'use client'

import { useState, useEffect, useCallback } from 'react'

const REPO = 'medussion/medussion.github.io'
const BRANCH = 'main'
const POSTS_PATH = 'content/posts'
const TOKEN_KEY = 'gh_admin_token'

interface PostFile {
  name: string
  path: string
  sha: string
  download_url: string
}

interface EditorState {
  file: PostFile
  content: string
  originalSha: string
}

function parseTitle(content: string): string {
  const match = content.match(/^title:\s*["']?(.+?)["']?\s*$/m)
  return match ? match[1] : '(제목 없음)'
}

function parsePublished(content: string): boolean {
  const match = content.match(/^published:\s*(true|false)/m)
  return match ? match[1] === 'true' : true
}

export default function AdminPage() {
  const [token, setToken] = useState('')
  const [tokenInput, setTokenInput] = useState('')
  const [posts, setPosts] = useState<PostFile[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [editor, setEditor] = useState<EditorState | null>(null)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [createMode, setCreateMode] = useState(false)
  const [newSlug, setNewSlug] = useState('')
  const [newContent, setNewContent] = useState(DEFAULT_FRONTMATTER)
  const [successMsg, setSuccessMsg] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem(TOKEN_KEY)
    if (saved) setToken(saved)
  }, [])

  const fetchPosts = useCallback(async (tok: string) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/contents/${POSTS_PATH}?ref=${BRANCH}`,
        { headers: { Authorization: `token ${tok}`, Accept: 'application/vnd.github.v3+json' } }
      )
      if (!res.ok) throw new Error('토큰이 올바르지 않거나 권한이 없습니다.')
      const data: PostFile[] = await res.json()
      setPosts(data.filter(f => f.name.endsWith('.md')).sort((a, b) => b.name.localeCompare(a.name)))
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : '오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }, [])

  const handleLogin = () => {
    if (!tokenInput.trim()) return
    localStorage.setItem(TOKEN_KEY, tokenInput.trim())
    setToken(tokenInput.trim())
    fetchPosts(tokenInput.trim())
  }

  useEffect(() => {
    if (token) fetchPosts(token)
  }, [token, fetchPosts])

  const openEditor = async (file: PostFile) => {
    setLoading(true)
    try {
      const res = await fetch(file.download_url)
      const content = await res.text()
      setEditor({ file, content, originalSha: file.sha })
    } finally {
      setLoading(false)
    }
  }

  const savePost = async () => {
    if (!editor) return
    setSaving(true)
    try {
      const encoded = btoa(unescape(encodeURIComponent(editor.content)))
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/contents/${editor.file.path}`,
        {
          method: 'PUT',
          headers: { Authorization: `token ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: `포스트 수정: ${editor.file.name}`,
            content: encoded,
            sha: editor.originalSha,
            branch: BRANCH,
          }),
        }
      )
      if (!res.ok) throw new Error('저장 실패')
      showSuccess('저장되었습니다!')
      setEditor(null)
      fetchPosts(token)
    } catch {
      setError('저장 중 오류가 발생했습니다.')
    } finally {
      setSaving(false)
    }
  }

  const deletePost = async (file: PostFile) => {
    if (!confirm(`"${file.name}" 을 삭제할까요?`)) return
    setDeleting(file.name)
    try {
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/contents/${file.path}`,
        {
          method: 'DELETE',
          headers: { Authorization: `token ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: `포스트 삭제: ${file.name}`,
            sha: file.sha,
            branch: BRANCH,
          }),
        }
      )
      if (!res.ok) throw new Error('삭제 실패')
      showSuccess('삭제되었습니다!')
      fetchPosts(token)
    } catch {
      setError('삭제 중 오류가 발생했습니다.')
    } finally {
      setDeleting(null)
    }
  }

  const createPost = async () => {
    if (!newSlug.trim()) { setError('슬러그를 입력해주세요.'); return }
    const slug = newSlug.trim().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9가-힣-]/g, '')
    const path = `${POSTS_PATH}/${slug}.md`
    setSaving(true)
    try {
      const encoded = btoa(unescape(encodeURIComponent(newContent)))
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/contents/${path}`,
        {
          method: 'PUT',
          headers: { Authorization: `token ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: `포스트 작성: ${slug}.md`,
            content: encoded,
            branch: BRANCH,
          }),
        }
      )
      if (!res.ok) throw new Error('이미 같은 이름의 파일이 있거나 오류가 발생했습니다.')
      showSuccess('포스트가 생성되었습니다!')
      setCreateMode(false)
      setNewSlug('')
      setNewContent(DEFAULT_FRONTMATTER)
      fetchPosts(token)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : '생성 실패')
    } finally {
      setSaving(false)
    }
  }

  const showSuccess = (msg: string) => {
    setSuccessMsg(msg)
    setTimeout(() => setSuccessMsg(''), 3000)
  }

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
    setToken('')
    setPosts([])
  }

  // ── 로그인 화면 ──
  if (!token) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-sm">
          <h1 className="mb-2 text-2xl font-bold text-foreground">어드민</h1>
          <p className="mb-6 text-sm text-muted">GitHub Personal Access Token을 입력해주세요.</p>
          <input
            type="password"
            value={tokenInput}
            onChange={e => setTokenInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            placeholder="ghp_xxxxxxxxxxxx"
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 mb-3"
          />
          {error && <p className="mb-3 text-xs text-red-500">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full rounded-lg bg-accent py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
          >
            로그인
          </button>
          <p className="mt-4 text-xs text-muted">
            GitHub → Settings → Developer settings → Personal access tokens →<br />
            Tokens (classic) → repo 권한 체크 후 생성
          </p>
        </div>
      </div>
    )
  }

  // ── 에디터 화면 ──
  if (editor) {
    return (
      <div className="min-h-screen bg-surface">
        <div className="sticky top-0 z-10 border-b border-border bg-white/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setEditor(null)} className="text-sm text-muted hover:text-foreground">← 목록</button>
            <span className="text-sm font-medium text-foreground truncate max-w-xs">{editor.file.name}</span>
          </div>
          <button
            onClick={savePost}
            disabled={saving}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-light disabled:opacity-50 transition-colors"
          >
            {saving ? '저장 중...' : '저장'}
          </button>
        </div>
        <div className="mx-auto max-w-4xl p-4">
          <textarea
            value={editor.content}
            onChange={e => setEditor({ ...editor, content: e.target.value })}
            className="w-full h-[calc(100vh-120px)] rounded-xl border border-border bg-white p-4 font-mono text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 resize-none"
            spellCheck={false}
          />
        </div>
      </div>
    )
  }

  // ── 새 포스트 작성 화면 ──
  if (createMode) {
    return (
      <div className="min-h-screen bg-surface">
        <div className="sticky top-0 z-10 border-b border-border bg-white/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setCreateMode(false)} className="text-sm text-muted hover:text-foreground">← 목록</button>
            <span className="text-sm font-medium text-foreground">새 포스트</span>
          </div>
          <button
            onClick={createPost}
            disabled={saving}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-light disabled:opacity-50 transition-colors"
          >
            {saving ? '생성 중...' : '생성'}
          </button>
        </div>
        <div className="mx-auto max-w-4xl p-4 space-y-3">
          <input
            value={newSlug}
            onChange={e => setNewSlug(e.target.value)}
            placeholder="파일명 (예: my-new-post)"
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent/30"
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
          <textarea
            value={newContent}
            onChange={e => setNewContent(e.target.value)}
            className="w-full h-[calc(100vh-160px)] rounded-xl border border-border bg-white p-4 font-mono text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 resize-none"
            spellCheck={false}
          />
        </div>
      </div>
    )
  }

  // ── 포스트 목록 ──
  return (
    <div className="min-h-screen bg-surface">
      <div className="sticky top-0 z-10 border-b border-border bg-white/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
        <h1 className="text-base font-bold text-foreground">어드민</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => { setCreateMode(true); setError('') }}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
          >
            + 새 포스트
          </button>
          <button onClick={logout} className="text-sm text-muted hover:text-foreground">로그아웃</button>
        </div>
      </div>

      <div className="mx-auto max-w-3xl p-4">
        {successMsg && (
          <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-2.5 text-sm text-green-700">{successMsg}</div>
        )}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-2.5 text-sm text-red-700">{error}</div>
        )}
        {loading ? (
          <div className="py-20 text-center text-sm text-muted">불러오는 중...</div>
        ) : (
          <div className="space-y-2">
            {posts.map(post => {
              const titleCache = new Map<string, string>()
              const slug = post.name.replace('.md', '')
              return (
                <div key={post.name} className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 hover:border-accent/30 transition-colors">
                  <div className="flex-1 min-w-0 mr-4">
                    <p className="text-sm font-medium text-foreground truncate">{slug}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href={`/blog/${slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted hover:text-accent hover:border-accent/30 transition-colors"
                    >
                      보기
                    </a>
                    <button
                      onClick={() => openEditor(post)}
                      className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted hover:text-accent hover:border-accent/30 transition-colors"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => deletePost(post)}
                      disabled={deleting === post.name}
                      className="rounded-lg border border-red-200 px-3 py-1.5 text-xs text-red-400 hover:bg-red-50 hover:text-red-600 disabled:opacity-50 transition-colors"
                    >
                      {deleting === post.name ? '...' : '삭제'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

const DEFAULT_FRONTMATTER = `---
title: "새 포스트 제목"

categories:
  - etc
tags:
  - []

toc: true
toc_sticky: true

published: true

date: ${new Date().toISOString().split('T')[0]}T00:00:00+09:00
lastmod: ${new Date().toISOString().split('T')[0]}T00:00:00+09:00
---

본문을 여기에 작성하세요.
`
