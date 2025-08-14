import Script from 'next/script';

interface PerformanceOptimizerProps {
  enablePreload?: boolean;
  enablePrefetch?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enablePreload = true,
  enablePrefetch = true
}) => {
  return (
    <>
      {/* Critical CSS optimization */}
      <style jsx global>{`
        /* Above-the-fold critical styles */
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-display: swap;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Prevent layout shift for images */
        img {
          height: auto;
        }

        /* Optimize loading states */
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .hydrated .fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Prevent FOUC (Flash of Unstyled Content) */
        .hydrated {
          visibility: visible;
        }

        /* Optimize for Core Web Vitals */
        * {
          box-sizing: border-box;
        }

        /* Improve FCP (First Contentful Paint) */
        .hero-text {
          font-display: swap;
        }

        /* Minimize CLS (Cumulative Layout Shift) */
        .white-card {
          contain: layout style paint;
        }
      `}</style>

      {/* Font optimization */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect" 
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Resource hints for performance */}
      {enablePreload && (
        <>
          <link
            rel="preload"
            href="/og-image.png"
            as="image"
            type="image/png"
          />
          <link
            rel="preload"
            href="/mcp-servers-database.json"
            as="fetch"
            type="application/json"
            crossOrigin="anonymous"
          />
        </>
      )}

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//api.github.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//googletagmanager.com" />

      {/* Service Worker for caching (if available) */}
      <Script
        id="service-worker-registration"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').catch(function() {
                  // Service worker registration failed, but that's OK
                });
              });
            }
          `
        }}
      />

      {/* Web Vitals monitoring */}
      <Script
        id="web-vitals"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function sendToGoogleAnalytics({name, delta, value, id}) {
              if (typeof gtag !== 'undefined') {
                gtag('event', name, {
                  value: delta,
                  metric_id: id,
                  metric_value: value,
                  metric_delta: delta,
                });
              }
            }

            function getCLS(onPerfEntry) {
              if (typeof PerformanceObserver !== 'undefined') {
                const observer = new PerformanceObserver((entryList) => {
                  for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                      onPerfEntry({
                        name: 'CLS',
                        value: entry.value,
                        delta: entry.value,
                        id: entry.entryType,
                      });
                    }
                  }
                });
                observer.observe({ entryTypes: ['layout-shift'] });
              }
            }

            function getFCP(onPerfEntry) {
              if (typeof PerformanceObserver !== 'undefined') {
                const observer = new PerformanceObserver((entryList) => {
                  for (const entry of entryList.getEntries()) {
                    if (entry.name === 'first-contentful-paint') {
                      onPerfEntry({
                        name: 'FCP',
                        value: entry.startTime,
                        delta: entry.startTime,
                        id: 'FCP',
                      });
                    }
                  }
                });
                observer.observe({ entryTypes: ['paint'] });
              }
            }

            function getLCP(onPerfEntry) {
              if (typeof PerformanceObserver !== 'undefined') {
                const observer = new PerformanceObserver((entryList) => {
                  const entries = entryList.getEntries();
                  const lastEntry = entries[entries.length - 1];
                  onPerfEntry({
                    name: 'LCP',
                    value: lastEntry.startTime,
                    delta: lastEntry.startTime,
                    id: lastEntry.id,
                  });
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
              }
            }

            function getFID(onPerfEntry) {
              if (typeof PerformanceObserver !== 'undefined') {
                const observer = new PerformanceObserver((entryList) => {
                  for (const entry of entryList.getEntries()) {
                    onPerfEntry({
                      name: 'FID',
                      value: entry.processingStart - entry.startTime,
                      delta: entry.processingStart - entry.startTime,
                      id: entry.entryType,
                    });
                  }
                });
                observer.observe({ entryTypes: ['first-input'] });
              }
            }

            // Initialize Web Vitals monitoring
            if (typeof window !== 'undefined') {
              getCLS(sendToGoogleAnalytics);
              getFCP(sendToGoogleAnalytics);
              getLCP(sendToGoogleAnalytics);
              getFID(sendToGoogleAnalytics);
            }
          `
        }}
      />
    </>
  );
};

export default PerformanceOptimizer;