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
};

export default nextConfig;
