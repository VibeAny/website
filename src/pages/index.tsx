import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import SEOHead from '@/components/SEOHead';

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation('common');
  
  useEffect(() => {
    // Client-side redirect to MCP Hub after SEO content is loaded
    const timer = setTimeout(() => {
      router.push('/mcp-hub');
    }, 100);

    return () => clearTimeout(timer);
  }, [router]);

  // Provide proper SEO content before redirect
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VibeMCP",
    "url": "https://vibemcp.net",
    "description": "Cloud-native platform for deploying and managing Model Context Protocol (MCP) servers for AI applications.",
    "publisher": {
      "@type": "Organization", 
      "name": "VibeMCP",
      "logo": "https://vibemcp.net/og-image.png"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vibemcp.net/mcp-hub?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://github.com/vibemcp",
      "https://discord.gg/TdPGpp9vNe"
    ]
  };

  return (
    <>
      <SEOHead
        title="VibeMCP - Cloud-Native MCP Services Platform"
        description="Deploy and manage Model Context Protocol (MCP) servers in the cloud. Connect Claude AI to any service with our enterprise-grade cloud platform. Configure once, connect everywhere."
        keywords="MCP services, Model Context Protocol, Claude AI, cloud deployment, AI development, API integration, enterprise AI, remote MCP, VibeMCP, cloud MCP, AI tools"
        structuredData={structuredData}
        ogImage="/og-image.png"
      />
      
      {/* Hidden content for SEO - visible to search engines but not users */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <h1>VibeMCP - Cloud-Native MCP Services Platform</h1>
        <p>Deploy and manage Model Context Protocol (MCP) servers in the cloud. Connect Claude AI to any service with our enterprise-grade cloud platform.</p>
        <nav>
          <Link href="/mcp-hub">MCP Hub - Browse MCP Servers</Link>
          <Link href="/remote-mcp">Remote MCP Services</Link>
        </nav>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};