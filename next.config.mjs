/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-website-geometry' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-website-geometry/' : '',
}

export default nextConfig
