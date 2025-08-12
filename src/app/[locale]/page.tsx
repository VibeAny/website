import { redirect } from 'next/navigation'
/* TODO: Restore homepage content for future optimization
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageLayout } from "@/components/ui/page-layout"
import { ArrowRight, Zap, Shield, Cloud, GitBranch } from "lucide-react"
import Link from 'next/link'
import { getTranslations } from 'next-intl/server';
*/

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  
  // Redirect to MCP Hub as the default homepage
  redirect(`/${locale}/mcp-hub`)
  
  /* TODO: Restore homepage content for future optimization
  const t = await getTranslations({ locale });
  
  return (
    <PageLayout locale={locale} currentPath="/">
      {/* Hero Section *//*
      <section className="container mx-auto px-4 py-24 text-center relative z-10">
          <div className="fade-in" style={{animationDelay: '0.2s'}}>
            <Badge className="mb-8 white-card px-6 py-2 ui-pulse-glow" variant="secondary">
              <span className="text-gradient font-semibold">{t('hero.badge')}</span>
            </Badge>
          </div>
          <div className="fade-in" style={{animationDelay: '0.4s'}}>
            <h1 className="text-6xl font-black mb-8 text-gradient leading-tight max-w-4xl mx-auto">
              {t('hero.title')}
            </h1>
          </div>
          <div className="fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              {t('hero.subtitle')}
            </p>
          </div>
        
        <div className="fade-in flex items-center justify-center gap-6 mb-16" style={{animationDelay: '0.8s'}}>
          <Button size="lg" className="btn-modern px-10 py-4 text-lg font-semibold">
            {t('hero.startFreeTrial')}
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          <Link href={`/${locale}/remote-mcp`}>
            <Button size="lg" variant="outline" className="white-button px-8 py-4 text-lg font-semibold">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Try Remote MCP
              </div>
            </Button>
          </Link>
        </div>
        
        {/* Enhanced Hero Stats *//*
        <div className="fade-in grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto" style={{animationDelay: '1s'}}>
          <div className="white-card p-6 rounded-2xl">
            <div className="text-4xl font-black text-gradient mb-3 ui-pulse-glow">99.9%</div>
            <div className="text-sm text-muted-foreground font-medium">{t('stats.uptime')}</div>
          </div>
          <div className="white-card p-6 rounded-2xl">
            <div className="text-4xl font-black text-gradient mb-3 ui-pulse-glow">&lt;50ms</div>
            <div className="text-sm text-muted-foreground font-medium">{t('stats.apiResponse')}</div>
          </div>
          <div className="white-card p-6 rounded-2xl">
            <div className="text-4xl font-black text-gradient mb-3 ui-pulse-glow">5min</div>
            <div className="text-sm text-muted-foreground font-medium">{t('stats.setupTime')}</div>
          </div>
        </div>
      </section>

      {/* Features Section *//*
      <section id="features" className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-20 fade-in" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-black mb-6 text-gradient">{t('features.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="fade-in" style={{animationDelay: '0.3s'}}>
            <Card className="white-card border-0 h-full group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center mb-4 group-hover:ui-pulse-glow transition-all">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-gradient">{t('features.oneClick.title')}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {t('features.oneClick.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  {t.raw('features.oneClick.features').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full ui-pulse-glow" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in" style={{animationDelay: '0.4s'}}>
            <Card className="white-card border-0 h-full group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center mb-4 group-hover:ui-pulse-glow transition-all">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl font-bold text-gradient">{t('features.security.title')}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {t('features.security.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  {t.raw('features.security.features').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full ui-pulse-glow" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in" style={{animationDelay: '0.5s'}}>
            <Card className="white-card border-0 h-full group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center mb-4 group-hover:ui-pulse-glow transition-all">
                  <Cloud className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl font-bold text-gradient">{t('features.cloudNative.title')}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {t('features.cloudNative.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  {t.raw('features.cloudNative.features').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full ui-pulse-glow" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in" style={{animationDelay: '0.6s'}}>
            <Card className="white-card border-0 h-full group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center mb-4 group-hover:ui-pulse-glow transition-all">
                  <GitBranch className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl font-bold text-gradient">{t('features.ecosystem.title')}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {t('features.ecosystem.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  {t.raw('features.ecosystem.features').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full ui-pulse-glow" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section *//*
      <section id="pricing" className="container mx-auto px-4 py-24 relative z-10">
        <div className="white-card rounded-3xl p-12">
          <div className="text-center mb-20 fade-in" style={{animationDelay: '0.2s'}}>
            <h2 className="text-4xl font-black mb-6 text-gradient">{t('pricing.title')}</h2>
            <p className="text-xl text-muted-foreground font-medium">{t('pricing.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="fade-in" style={{animationDelay: '0.3s'}}>
              <Card className="white-card border-0 h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">{t('pricing.starter.title')}</CardTitle>
                  <CardDescription className="text-base">{t('pricing.starter.description')}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-black text-gradient">{t('pricing.starter.price')}</span>
                    <span className="text-muted-foreground font-medium">{t('pricing.starter.period')}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-sm font-medium">
                    {t.raw('pricing.starter.features').map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full ui-pulse-glow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 white-button" variant="outline">
                    {t('pricing.starter.button')}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="fade-in" style={{animationDelay: '0.4s'}}>
              <Card className="white-card border-primary/30 border-2 shadow-xl h-full relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="white-card text-xs font-semibold ui-pulse-glow">{t('pricing.professional.badge')}</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-gradient">{t('pricing.professional.title')}</CardTitle>
                  <CardDescription className="text-base">{t('pricing.professional.description')}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-black text-gradient">{t('pricing.professional.price')}</span>
                    <span className="text-muted-foreground font-medium">{t('pricing.professional.period')}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-sm font-medium">
                    {t.raw('pricing.professional.features').map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full ui-pulse-glow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 btn-modern font-semibold">
                    {t('pricing.professional.button')}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="fade-in" style={{animationDelay: '0.5s'}}>
              <Card className="white-card border-0 h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">{t('pricing.business.title')}</CardTitle>
                  <CardDescription className="text-base">{t('pricing.business.description')}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-black text-gradient">{t('pricing.business.price')}</span>
                    <span className="text-muted-foreground font-medium">{t('pricing.business.period')}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-sm font-medium">
                    {t.raw('pricing.business.features').map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full ui-pulse-glow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 white-button" variant="outline">
                    {t('pricing.business.button')}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="fade-in" style={{animationDelay: '0.6s'}}>
              <Card className="white-card border-0 h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">{t('pricing.enterprise.title')}</CardTitle>
                  <CardDescription className="text-base">{t('pricing.enterprise.description')}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-black text-gradient">{t('pricing.enterprise.price')}</span>
                    <span className="text-muted-foreground font-medium">{t('pricing.enterprise.period')}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-sm font-medium">
                    {t.raw('pricing.enterprise.features').map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full ui-pulse-glow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 white-button" variant="outline">
                    {t('pricing.enterprise.button')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section *//*
      <section className="container mx-auto px-4 py-24 text-center relative z-10">
        <div className="fade-in" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-black mb-6 text-gradient">{t('cta.title')}</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            {t('cta.subtitle')}
          </p>
        </div>
        <div className="fade-in flex items-center justify-center gap-6" style={{animationDelay: '0.4s'}}>
          <Button size="lg" className="btn-modern px-10 py-4 text-lg font-semibold">
            {t('hero.startFreeTrial')}
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="white-button px-8 py-4 text-lg font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {t('hero.viewDocumentation')}
            </div>
          </Button>
        </div>
      </section>
    </PageLayout>
  )
  */
}