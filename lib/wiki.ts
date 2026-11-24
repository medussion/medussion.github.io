interface WikiChapter {
  id: string
  title: string
  description: string
  posts: readonly string[]
}

interface WikiDomain {
  id: string
  name: string
  summary: string
  chapters: readonly WikiChapter[]
}

export const wikiDomains: readonly WikiDomain[] = [
  {
    id: 'programming',
    name: '게임 프로그래밍',
    summary: '클라이언트 · 엔진 · 도구',
    chapters: [
      { id: 'runtime', title: '언어와 런타임', description: '메모리 할당과 GC를 이해하고 프레임이 끊길 때 프로파일러에서 할당 지점을 찾습니다.', posts: ['etc-3'] },
      { id: 'tools', title: '개발 환경과 도구', description: '팀에서 재현 가능한 개발 환경을 만들고 반복 작업을 단축합니다.', posts: ['etc-1'] },
      { id: 'ai', title: 'AI 개발 도구', description: '도구를 선택할 때 코드 이해, 작업 범위, 검증 방식이 프로젝트에 맞는지 살펴봅니다.', posts: ['2026-06-09-claude-mythos-fable-5-anthropic-ai'] },
    ],
  },
  {
    id: 'ui-ux',
    name: 'UI/UX 디자인',
    summary: '화면 흐름 · 디자인 시스템',
    chapters: [
      { id: 'flows', title: '화면 흐름과 인터랙션', description: '플레이어가 화면에서 무엇을 해야 하는지 드러내고, 로딩·오류·성공 상태마다 다음 행동을 안내합니다.', posts: [] },
      { id: 'systems', title: '디자인 시스템과 타이포그래피', description: '버튼, 색상, 글자 스타일을 공통 규칙으로 묶고 작은 화면에서도 읽을 수 있는지 확인합니다.', posts: ['etc-4'] },
    ],
  },
  {
    id: 'art',
    name: '게임 아트',
    summary: '비주얼 스타일 · 에셋 제작',
    chapters: [
      { id: 'direction', title: '아트 디렉션', description: '장르와 타깃에 맞는 비주얼 스타일을 정하고 실제 플레이 화면에서 실루엣과 가독성을 검토합니다.', posts: ['2026-06-09-7'] },
      { id: 'pipeline', title: '에셋 제작과 게임 적용', description: '원본과 엔진용 리소스의 규칙을 정하고 기기별 텍스처 메모리와 화면 품질을 비교합니다.', posts: [] },
    ],
  },
  {
    id: 'qa',
    name: 'QA',
    summary: '테스트 · 결함 관리',
    chapters: [
      { id: 'test-coverage', title: '테스트 범위', description: '첫 실행, 튜토리얼, 저장 복구, 기기별 조작을 점검하고 빌드마다 다시 확인할 핵심 경로를 정합니다.', posts: [] },
      { id: 'bugs', title: '결함 보고와 회귀 확인', description: '빌드 번호, 기기, 재현 단계, 기대 결과와 실제 결과를 남기고 수정 뒤 관련 흐름을 다시 확인합니다.', posts: [] },
    ],
  },
  {
    id: 'planning',
    name: '게임 기획',
    summary: '코어 루프 · 콘텐츠 설계',
    chapters: [
      { id: 'core-loop', title: '코어 루프와 장르', description: '반복 행동과 보상을 정의하고 장르마다 플레이어가 어떤 선택을 내리는지 살펴봅니다.', posts: ['2026-06-10-post', '2026-06-09-4'] },
      { id: 'progression', title: '성장과 콘텐츠 설계', description: '목표를 달성하는 데 걸리는 시간, 실패 후 다시 도전하는 비용, 새 콘텐츠가 열리는 시점을 설계합니다.', posts: [] },
    ],
  },
  {
    id: 'publishing',
    name: 'Publishing',
    summary: '출시 준비 · 스토어 운영',
    chapters: [
      { id: 'release', title: '출시 준비와 배포', description: '스토어 메타데이터, 제출 빌드, 심사 준비, 출시 일정, 업데이트 승인 담당을 정리합니다.', posts: [] },
      { id: 'showcase', title: '게임 전시와 시연', description: '시연용 빌드와 현장 안내를 준비하고 방문객의 플레이 반응을 수집합니다.', posts: ['seminar-1'] },
    ],
  },
  {
    id: 'marketing',
    name: '마케팅',
    summary: '유저 획득 · 성과 분석',
    chapters: [
      { id: 'growth', title: '유저 획득과 성장', description: '광고와 스토어의 메시지를 맞추고 유입 비용과 설치 후 유저 행동을 함께 확인합니다.', posts: ['seminar-2'] },
      { id: 'creative', title: '크리에이티브 실험', description: '한 번에 하나의 가설을 테스트하고 소재, 타깃, 노출 기간, 판단 지표를 기록합니다.', posts: [] },
    ],
  },
  {
    id: 'player-support',
    name: '고객관리',
    summary: '플레이어 지원 · 커뮤니티',
    chapters: [
      { id: 'support', title: '문의 분류와 대응', description: '문의 유형과 긴급도를 구분하고 결제, 계정, 접속 문제를 담당 팀에 넘기는 기준을 정합니다.', posts: [] },
      { id: 'community', title: '커뮤니티와 피드백', description: '자주 반복되는 문의는 도움말에 반영하고 플레이어 의견은 기획·QA가 추적할 수 있게 전달합니다.', posts: [] },
    ],
  },
]

export function wikiDomainHref(id: string) {
  return `/wiki/${id}`
}

export function countWikiPostsByDomain(publishedSlugs: ReadonlySet<string>) {
  return new Map(wikiDomains.map(({ id, chapters }) => {
    const slugs = chapters.flatMap(({ posts }) => posts).filter((slug) => publishedSlugs.has(slug))
    return [id, new Set(slugs).size] as const
  }))
}

export function findWikiChapterForPost(slug: string) {
  for (const domain of wikiDomains) {
    const chapter = domain.chapters.find((entry) => entry.posts.includes(slug))
    if (chapter) return { domain, chapter }
  }
  return undefined
}
