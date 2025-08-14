import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/ui/page-layout";
import { Database } from "lucide-react";
import { getMcpStatistics, getMcpServers, getMcpCategories } from '@/lib/mcp-data';
import { McpBrowser } from '@/components/mcp-browser';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEOHead from '@/components/SEOHead';

interface Props {
  stats: ReturnType<typeof getMcpStatistics>;
  servers: ReturnType<typeof getMcpServers>;
  categories: ReturnType<typeof getMcpCategories>;
}

export default function McpHubPage({ stats, servers, categories }: Props) {
  const { t } = useTranslation('common');
  
  const title = t('mcpHub.title');
  const description = t('mcpHub.description', { count: stats.totalServers });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "MCP Hub - Model Context Protocol Servers Database",
    "description": `Comprehensive database of ${stats.totalServers}+ Model Context Protocol servers for AI development`,
    "url": "https://vibemcp.net/mcp-hub",
    "mainEntity": {
      "@type": "Dataset",
      "name": "MCP Servers Database", 
      "description": "Collection of Model Context Protocol servers for AI development",
      "creator": {
        "@type": "Organization",
        "name": "VibeMCP",
        "url": "https://vibemcp.net"
      },
      "distribution": {
        "@type": "DataDownload",
        "encodingFormat": "application/json",
        "contentUrl": "https://vibemcp.net/mcp-servers-database.json"
      },
      "keywords": "MCP, Model Context Protocol, AI tools, Claude AI, GitHub repositories",
      "numberOfItems": stats.totalServers
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://vibemcp.net"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "MCP Hub",
          "item": "https://vibemcp.net/mcp-hub"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "156",
      "bestRating": "5"
    }
  };

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords="MCP servers, Model Context Protocol, AI tools, GitHub repositories, Python MCP, TypeScript MCP, Go MCP, Claude AI, AI development, MCP database, VibeMCP"
        canonical="https://vibemcp.net/mcp-hub"
        ogImage="/og-mcp-hub.png"
        structuredData={structuredData}
      />
      
      <PageLayout currentPath="/mcp-hub">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="fade-in" style={{animationDelay: '0.2s'}}>
            <Badge className="mb-8 white-card px-6 py-2 ui-pulse-glow bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700 border-purple-200/50 shadow-lg" variant="secondary">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span className="font-semibold">{t('mcpHub.badge')}</span>
              </div>
            </Badge>
          </div>
          <div className="fade-in" style={{animationDelay: '0.4s'}}>
            <h1 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent leading-tight max-w-5xl mx-auto">
              {t('mcpHub.heading')}
            </h1>
          </div>
          <div className="fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              {t('mcpHub.subtitle', { count: stats.totalServers })}
            </p>
          </div>
          
          {/* Quick Stats Bar */}
          <div className="fade-in max-w-2xl mx-auto" style={{animationDelay: '0.8s'}}>
            <div className="flex flex-wrap justify-center gap-6 mb-16 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>{t('mcpHub.stats.activeServers', { count: stats.totalServers })}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>{t('mcpHub.stats.categories', { count: stats.totalCategories })}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>{t('mcpHub.stats.languages', { count: stats.totalLanguages })}</span>
              </div>
            </div>
          </div>
        </section>

        {/* MCP Server Browser with Search & Filter */}
        <section className="container mx-auto px-4 py-12 relative z-10">
          <McpBrowser servers={servers} categories={categories} />
        </section>

        {/* Stats Overview */}
        <section className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="white-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-black text-gradient mb-3 ui-pulse-glow">{stats.totalServers}+</div>
              <div className="text-sm text-muted-foreground font-medium">Total Servers</div>
            </div>
            <div className="white-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-black text-gradient mb-3 ui-pulse-glow">{stats.totalCategories}</div>
              <div className="text-sm text-muted-foreground font-medium">Categories</div>
            </div>
            <div className="white-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-black text-gradient mb-3 ui-pulse-glow">{stats.totalLanguages}</div>
              <div className="text-sm text-muted-foreground font-medium">Languages</div>
            </div>
            <div className="white-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-black text-gradient mb-3 ui-pulse-glow">24h</div>
              <div className="text-sm text-muted-foreground font-medium">{t('mcpHub.stats.lastUpdate')}</div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const stats = getMcpStatistics();
  const servers = getMcpServers();
  const categories = getMcpCategories();

  return {
    props: {
      stats,
      servers,
      categories,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};