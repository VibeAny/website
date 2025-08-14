import Head from 'next/head';

interface MobileOptimizerProps {
  appleTouchIcon?: string;
  msTileColor?: string;
  safariPinnedTabColor?: string;
}

export const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  appleTouchIcon = "/apple-touch-icon.png",
  msTileColor = "#6366f1", 
  safariPinnedTabColor = "#6366f1"
}) => {
  return (
    <Head>
      {/* Mobile Viewport Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      
      {/* iOS Specific Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="VibeMCP" />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="apple-touch-startup-image" href="/og-image.png" />
      
      {/* Android Chrome Meta */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#6366f1" />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-TileColor" content={msTileColor} />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Safari Pinned Tab */}
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color={safariPinnedTabColor} />
      
      {/* Mobile CSS optimizations */}
      <style jsx global>{`
        /* Mobile-first responsive design */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Optimize text sizes for mobile */
          .text-6xl, .text-7xl {
            font-size: 3rem;
            line-height: 1.1;
          }
          
          .text-xl, .text-2xl {
            font-size: 1.25rem;
            line-height: 1.4;
          }
          
          /* Optimize button sizes for touch */
          .btn-modern {
            min-height: 44px;
            padding: 0.75rem 1.5rem;
          }
          
          /* Optimize card spacing */
          .white-card {
            margin-bottom: 1rem;
            padding: 1rem;
          }
          
          /* Optimize grid layouts */
          .grid-cols-1.md\\:grid-cols-2,
          .grid-cols-1.md\\:grid-cols-3,
          .grid-cols-1.md\\:grid-cols-4 {
            gap: 1rem;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          
          .text-6xl, .text-7xl {
            font-size: 4rem;
            line-height: 1.1;
          }
        }
        
        /* Touch-friendly interactions */
        @media (hover: none) {
          .hover\\:shadow-md:hover {
            box-shadow: none;
          }
          
          .hover\\:scale-105:hover {
            transform: none;
          }
          
          /* Improve tap targets */
          button, a, [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        /* High DPI display optimization */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
          .logo, .icon {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
        
        /* Dark mode optimizations for mobile */
        @media (prefers-color-scheme: dark) {
          body {
            background-color: #0f172a;
            color: #f8fafc;
          }
          
          .white-card {
            background-color: #1e293b;
            border-color: #334155;
          }
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .fade-in {
            transition: none;
            opacity: 1;
            transform: none;
          }
          
          .ui-pulse-glow {
            animation: none;
          }
        }
        
        /* Optimize font loading on mobile */
        body {
          font-display: swap;
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
        }
        
        /* Improve scrolling performance */
        * {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Optimize focus indicators for mobile */
        :focus-visible {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
        }
      `}</style>
      
      {/* Web App Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

export default MobileOptimizer;