import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '../i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale,
  
  // Always use locale prefix for better SEO and UX
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames, exclude API routes and static files
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - *.ico, *.png, *.svg, *.jpg, *.jpeg, *.gif, *.webp (image files)
     * - robots.txt, sitemap.xml (SEO files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.ico$|.*\\.png$|.*\\.svg$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|robots.txt|sitemap.xml).*)',
  ],
};