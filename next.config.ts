import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  // Remove static export for full i18n support
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {},
};

export default withNextIntl(nextConfig);
