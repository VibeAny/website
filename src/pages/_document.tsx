import { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import MobileOptimizer from '@/components/MobileOptimizer';

export default function Document() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  return (
    <Html lang="en">
      <Head>
        {/* Critical Performance Optimizations */}
        <PerformanceOptimizer />
        
        {/* Mobile Responsive Optimizations */}
        <MobileOptimizer />
        
        {/* Viewport and Core Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#6366f1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Google Analytics */}
        <GoogleAnalytics gaId={gaId} />
        
        {/* Favicon and App Icons - optimized order */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}