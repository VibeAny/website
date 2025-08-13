import type { NextConfig } from "next";
const { i18n } = require('./next-i18next.config');

const nextConfig: NextConfig = {
  i18n,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
