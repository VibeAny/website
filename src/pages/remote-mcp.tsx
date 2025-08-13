import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/ui/page-layout";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Server,
  Clock,
  CheckCircle,
} from "lucide-react";
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function RemoteMcpPage() {
  const { t } = useTranslation('common');
  
  const title = t('remoteMcp.title');
  const description = t('remoteMcp.description');

  return (
    <>
      <Head>
        <title>{title} | VibeMCP</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Remote MCP, Hosted MCP servers, Model Context Protocol hosting, Atlassian MCP, GitHub MCP, AWS MCP, Claude AI integration, Cloud MCP services, VibeMCP hosting" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://vibemcp.net/remote-mcp" />
        <meta property="og:site_name" content="VibeMCP" />
        <meta property="og:image" content="https://vibemcp.net/og-remote-mcp.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Remote MCP Services - Hosted Model Context Protocol Servers" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://vibemcp.net/og-remote-mcp.png" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://vibemcp.net/remote-mcp" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
      </Head>
      
      <PageLayout currentPath="/remote-mcp">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center relative z-10">
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <Badge
              className="mb-8 white-card px-6 py-2 ui-pulse-glow bg-green-50 text-green-600 border-green-200"
              variant="secondary"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold">{t('remoteMcp.badge')}</span>
              </div>
            </Badge>
          </div>
          <div className="fade-in" style={{ animationDelay: "0.4s" }}>
            <h1 className="text-5xl font-black mb-6 text-gradient leading-tight max-w-4xl mx-auto">
              {t('remoteMcp.heading')}
            </h1>
          </div>
          <div className="fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              {t('remoteMcp.subtitle')}
            </p>
          </div>
        </section>

        {/* Free Servers Grid */}
        <section className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Atlassian MCP Server */}
            <div className="fade-in" style={{ animationDelay: "0.3s" }}>
              <Card className="white-card border-0 h-full group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center group-hover:ui-pulse-glow transition-all">
                      <Server className="h-8 w-8 text-blue-500" />
                    </div>
                    <Badge className="bg-green-50 text-green-600 border-green-200 px-3 py-1">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        {t('remoteMcp.status.active')}
                      </div>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gradient">
                    {t('remoteMcp.servers.atlassian.title')}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {t('remoteMcp.servers.atlassian.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{t('remoteMcp.servers.atlassian.uptime')}</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                      {(t('remoteMcp.servers.atlassian.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full ui-pulse-glow" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-3 pt-4">
                      <Button size="sm" className="btn-modern flex-1">
                        {t('remoteMcp.servers.github.connect')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="white-button"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="white-button"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* GitHub MCP Server */}
            <div className="fade-in" style={{ animationDelay: "0.4s" }}>
              <Card className="white-card border-0 h-full group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center group-hover:ui-pulse-glow transition-all">
                      <Github className="h-8 w-8 text-gray-700" />
                    </div>
                    <Badge className="bg-green-50 text-green-600 border-green-200 px-3 py-1">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        {t('remoteMcp.status.active')}
                      </div>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gradient">
                    {t('remoteMcp.servers.github.title')}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {t('remoteMcp.servers.github.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{t('remoteMcp.servers.github.uptime')}</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                      {(t('remoteMcp.servers.github.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-700 rounded-full ui-pulse-glow" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-3 pt-4">
                      <Button size="sm" className="btn-modern flex-1">
                        {t('remoteMcp.servers.github.connect')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="white-button"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="white-button"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AWS MCP Server */}
            <div className="fade-in" style={{ animationDelay: "0.5s" }}>
              <Card className="white-card border-0 h-full group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center group-hover:ui-pulse-glow transition-all">
                      <Server className="h-8 w-8 text-orange-500" />
                    </div>
                    <Badge className="bg-orange-50 text-orange-600 border-orange-200 px-3 py-1">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {t('remoteMcp.status.comingSoon')}
                      </div>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gradient">
                    {t('remoteMcp.servers.aws.title')}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {t('remoteMcp.servers.aws.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{t('remoteMcp.servers.aws.eta')}</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                      {(t('remoteMcp.servers.aws.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full ui-pulse-glow" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-3 pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="white-button flex-1"
                        disabled
                      >
                        {t('remoteMcp.servers.aws.notify')}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="white-button"
                        disabled
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Connect Section */}
        <section className="container mx-auto px-4 py-24 relative z-10">
          <div className="white-card rounded-3xl p-12">
            <div
              className="text-center mb-16 fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-4xl font-black mb-6 text-gradient">
                {t('remoteMcp.howToConnect.title')}
              </h2>
              <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto">
                {t('remoteMcp.howToConnect.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="fade-in text-center"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-20 h-20 neumorphism rounded-3xl flex items-center justify-center mx-auto mb-6 ui-pulse-glow">
                  <span className="text-3xl font-black text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">
                  {t('remoteMcp.steps.step1.title')}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {t('remoteMcp.steps.step1.description')}
                </p>
              </div>

              <div
                className="fade-in text-center"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-20 h-20 neumorphism rounded-3xl flex items-center justify-center mx-auto mb-6 ui-pulse-glow">
                  <span className="text-3xl font-black text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">
                  {t('remoteMcp.steps.step2.title')}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {t('remoteMcp.steps.step2.description')}
                </p>
              </div>

              <div
                className="fade-in text-center"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-20 h-20 neumorphism rounded-3xl flex items-center justify-center mx-auto mb-6 ui-pulse-glow">
                  <span className="text-3xl font-black text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">
                  {t('remoteMcp.steps.step3.title')}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {t('remoteMcp.steps.step3.description')}
                </p>
              </div>
            </div>

            <div
              className="text-center mt-12 fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="btn-modern px-10 py-4 text-lg font-semibold"
              >
                {t('remoteMcp.getStarted')}
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>
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