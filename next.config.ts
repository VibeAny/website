import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure static export works in all environments
  distDir: '.next',
  generateEtags: false,
  experimental: {},
  // Note: headers() and redirects() don't work with static export
  // These would need to be configured at the hosting level (GitHub Pages, CDN, etc.)
};

export default nextConfig;
