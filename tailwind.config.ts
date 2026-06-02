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
        background: '#0f1117',
        surface: '#161b27',
        'surface-2': '#1e2535',
        border: '#2a3349',
        accent: '#7c3aed',
        'accent-light': '#a78bfa',
        'accent-blue': '#3b82f6',
        muted: '#94a3b8',
        foreground: '#e2e8f0',
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
              color: theme('colors.accent-light'),
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
              color: '#a78bfa',
              backgroundColor: '#1e2535',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.375rem',
              fontWeight: '400',
              '&::before': { content: '""' },
              '&::after': { content: '""' },
            },
            pre: {
              backgroundColor: '#161b27',
              border: '1px solid #2a3349',
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
            'ul > li::marker': { color: theme('colors.accent-light') },
            'ol > li::marker': { color: theme('colors.accent-light') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
