import type { NextConfig } from "next";
const { i18n } = require('./next-i18next.config');

const nextConfig: NextConfig = {
  i18n,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For static export, we need to use next-language-detector
  // See: https://locize.com/blog/next-i18n-static/
};

export default nextConfig;
