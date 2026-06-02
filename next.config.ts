import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  // GitHub Pages: if repo is at username.github.io, no basePath needed
  // If it's at username.github.io/repo-name, set basePath: '/repo-name'
  basePath: '',
}

export default nextConfig
