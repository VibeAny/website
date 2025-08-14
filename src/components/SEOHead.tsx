import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: object;
  noindex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "VibeMCP - Cloud-Native MCP Services Platform",
  description = "Deploy and manage Model Context Protocol (MCP) servers in the cloud. Connect Claude AI to any service with our enterprise-grade cloud platform. Configure once, connect everywhere.",
  keywords = "MCP services, Model Context Protocol, Claude AI, cloud deployment, AI development, API integration, enterprise AI, remote MCP, VibeMCP",
  canonical,
  ogImage = "/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false
}) => {
  const router = useRouter();
  const locale = router.locale || 'en';
  const baseUrl = 'https://vibemcp.net';
  const currentUrl = canonical || `${baseUrl}${router.asPath}`;
  
  // Clean up title - ensure it doesn't double up "VibeMCP"
  const cleanTitle = title.includes('VibeMCP') ? title : `${title} | VibeMCP`;
  
  // Language-specific meta
  const langMeta = {
    'en': { locale: 'en_US', alternate: [{ hreflang: 'zh', href: `${baseUrl}/zh${router.asPath}` }] },
    'zh': { locale: 'zh_CN', alternate: [{ hreflang: 'en', href: `${baseUrl}${router.asPath}` }] }
  };
  
  const currentLang = langMeta[locale as keyof typeof langMeta] || langMeta.en;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{cleanTitle}</title>
      <meta name="title" content={cleanTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Viewport & Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#6366f1" />
      
      {/* Language & Locale */}
      <meta httpEquiv="content-language" content={locale} />
      <html lang={locale} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Hreflang for internationalization */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${router.asPath}`} />
      <link rel="alternate" hrefLang="zh" href={`${baseUrl}/zh${router.asPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${router.asPath}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={cleanTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="VibeMCP" />
      <meta property="og:locale" content={currentLang.locale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={cleanTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      <meta name="twitter:creator" content="@VibeMCP" />
      <meta name="twitter:site" content="@VibeMCP" />
      
      {/* Robots Meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        </>
      )}
      
      {/* Additional Meta for SEO */}
      <meta name="author" content="VibeMCP Team" />
      <meta name="publisher" content="VibeMCP" />
      <meta name="category" content="Technology" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* DNS Prefetch & Preconnect for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data JSON-LD */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Default Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VibeMCP",
            "url": "https://vibemcp.net",
            "logo": "https://vibemcp.net/og-image.png",
            "sameAs": [
              "https://github.com/vibemcp",
              "https://twitter.com/vibemcp",
              "https://discord.gg/TdPGpp9vNe"
            ],
            "foundingDate": "2024",
            "founders": [
              {
                "@type": "Person",
                "name": "VibeMCP Team"
              }
            ],
            "description": "Cloud-native platform for deploying and managing Model Context Protocol (MCP) servers for AI applications.",
            "industry": "Artificial Intelligence",
            "numberOfEmployees": "1-10",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Global"
            }
          })
        }}
      />
    </Head>
  );
};

export default SEOHead;