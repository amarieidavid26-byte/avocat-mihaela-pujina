/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ CRITICAL for Cloudflare Pages
  images: {
    unoptimized: true, // ✅ Required for static export
  },
  trailingSlash: true, // ✅ Better for SEO
}

module.exports = nextConfig