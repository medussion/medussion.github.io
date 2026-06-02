import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        surface: '#f8fafc',
        'surface-2': '#f1f5f9',
        border: '#e2e8f0',
        accent: '#2563eb',
        'accent-light': '#1d4ed8',
        'accent-blue': '#3b82f6',
        muted: '#64748b',
        foreground: '#0f172a',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Noto Sans KR"',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          'Consolas',
          '"Courier New"',
          'monospace',
        ],
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground'),
            maxWidth: 'none',
            a: {
              color: theme('colors.accent'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.accent-light'),
                textDecoration: 'underline',
              },
            },
            h1: { color: theme('colors.foreground') },
            h2: { color: theme('colors.foreground') },
            h3: { color: theme('colors.foreground') },
            h4: { color: theme('colors.foreground') },
            strong: { color: theme('colors.foreground') },
            code: {
              color: '#1d4ed8',
              backgroundColor: '#eff6ff',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.375rem',
              fontWeight: '400',
              '&::before': { content: '""' },
              '&::after': { content: '""' },
            },
            pre: {
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '0.5rem',
            },
            blockquote: {
              color: theme('colors.muted'),
              borderLeftColor: theme('colors.accent'),
            },
            hr: { borderColor: theme('colors.border') },
            thead: {
              th: { color: theme('colors.foreground') },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.border'),
              },
            },
            'ul > li::marker': { color: theme('colors.accent') },
            'ol > li::marker': { color: theme('colors.accent') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
