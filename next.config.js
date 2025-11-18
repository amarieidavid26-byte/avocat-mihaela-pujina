/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ CRITICAL for Cloudflare Pages
  images: {
    unoptimized: true, // ✅ Required for static export
  },
  // trailingSlash removed to fix Google Search Console indexing issues
}

module.exports = nextConfig