import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Shield, Cloud, GitBranch, Globe, Sparkles, Star } from "lucide-react"
import Link from 'next/link'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    en: 'English - VibeMCP.net | The Vibe-First MCP Platform',
    zh: '中文 - VibeMCP.net | 体验优先的MCP平台'
  }
  
  const descriptions = {
    en: 'VibeMCP.net English version - Transform MCP service deployment from complex to simple, from local to cloud. Configure Once, Connect Everywhere with Project Tesseract.',
    zh: 'VibeMCP.net 中文版 - 让MCP服务部署从复杂变简单，从本地变云端。Project Tesseract，一次配置，随处连接。'
  }
  
  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://vibemcp.net/${locale}`,
      languages: {
        'en-US': 'https://vibemcp.net/en',
        'zh-CN': 'https://vibemcp.net/zh',
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      url: `https://vibemcp.net/${locale}`,
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: locale === 'zh' ? 'en_US' : 'zh_CN',
    },
  }
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  
  return (
    <div className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Enhanced Background Elements with Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent dark:from-blue-400/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl pulse-glow" />
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 glass border-primary/30 rotate-12 rounded-lg floating-element" />
      <div className="absolute top-40 right-20 w-16 h-16 neumorphism rotate-45 rounded-lg floating-element" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-40 left-20 w-12 h-12 glass-card rotate-45 floating-element" style={{animationDelay: '4s'}} />
      <div className="absolute bottom-20 right-40 w-24 h-24 glass border-secondary/30 -rotate-12 rounded-full floating-element" style={{animationDelay: '1s'}} />
      
      {/* Particle Elements */}
      <div className="absolute top-32 right-1/4 w-2 h-2 bg-primary/60 rounded-full floating-element" style={{animationDelay: '0.5s'}} />
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-secondary/80 rounded-full floating-element" style={{animationDelay: '1.5s'}} />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent/50 rounded-full floating-element" style={{animationDelay: '3s'}} />
      <Sparkles className="absolute top-1/4 left-1/3 h-4 w-4 text-primary/40 floating-element" style={{animationDelay: '2.5s'}} />
      <Star className="absolute bottom-1/4 right-1/4 h-3 w-3 text-secondary/50 floating-element" style={{animationDelay: '3.5s'}} />

      {/* Header */}
      <header className="container mx-auto px-4 py-6 relative z-10 fade-in">
        <nav className="glass-card rounded-2xl px-6 py-4 flex items-center justify-between hover-lift" role="navigation" aria-label="Main navigation">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 neumorphism rounded-xl flex items-center justify-center shadow-lg pulse-glow">
              <span className="text-2xl" role="img" aria-label="Tesseract">🔷</span>
            </div>
            <span className="text-xl font-bold text-gradient">
              VibeMCP.net
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">
              Features
            </a>
            <Link href="/free-servers" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">
              Free Servers
            </Link>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">
              Pricing
            </a>
            <a href="#docs" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">
              Docs
            </a>
            <Link href={locale === 'zh' ? '/en' : '/zh'} hrefLang={locale === 'zh' ? 'en' : 'zh'}>
              <Button variant="ghost" size="sm" className="glass-card hover-lift flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{locale === 'zh' ? 'English' : '中文'}</span>
              </Button>
            </Link>
            <Button variant="outline" className="glass-card hover-lift">Sign In</Button>
            <Button className="btn-modern shadow-lg hover-lift">Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="container mx-auto px-4 py-24 text-center relative z-10">
          <div className="fade-in" style={{animationDelay: '0.2s'}}>
            <Badge className="mb-8 glass-card px-6 py-2 hover-lift pulse-glow" variant="secondary">
              <span className="text-gradient font-semibold">Project Tesseract 🔷</span>
            </Badge>
          </div>
          <div className="fade-in" style={{animationDelay: '0.4s'}}>
            <h1 className="text-6xl font-black mb-8 text-gradient leading-tight max-w-4xl mx-auto">
              The Vibe-First MCP Platform
            </h1>
          </div>
          <div className="fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Configure Once, Connect Everywhere. Transform MCP service deployment from complex to simple, 
              from local to cloud. <span className="text-gradient font-semibold">Unleash the infinite power of AI connections</span> like the Infinity Stones.
            </p>
          </div>
        
        <div className="fade-in flex items-center justify-center gap-6 mb-16" style={{animationDelay: '0.8s'}}>
          <Button size="lg" className="btn-modern px-10 py-4 text-lg font-semibold hover-lift">
            Start Free Trial
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          <Link href="/free-servers">
            <Button size="lg" variant="outline" className="glass-card hover-lift px-8 py-4 text-lg font-semibold">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Try Free Servers
              </div>
            </Button>
          </Link>
        </div>
        
        {/* Enhanced Hero Stats */}
        <div className="fade-in grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto" style={{animationDelay: '1s'}}>
          <div className="glass-card p-6 rounded-2xl hover-lift">
            <div className="text-4xl font-black text-gradient mb-3 pulse-glow">99.9%</div>
            <div className="text-sm text-muted-foreground font-medium">Uptime SLA</div>
          </div>
          <div className="glass-card p-6 rounded-2xl hover-lift">
            <div className="text-4xl font-black text-gradient mb-3 pulse-glow">&lt;50ms</div>
            <div className="text-sm text-muted-foreground font-medium">API Response</div>
          </div>
          <div className="glass-card p-6 rounded-2xl hover-lift">
            <div className="text-4xl font-black text-gradient mb-3 pulse-glow">5min</div>
            <div className="text-sm text-muted-foreground font-medium">Setup Time</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-20 fade-in" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-black mb-6 text-gradient">Four-Dimensional Connection, Infinite Power</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Cross time, space, system, and data dimensions to build a sophisticated 
            <span className="text-gradient font-semibold"> cloud-native MCP service ecosystem</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="fade-in" style={{animationDelay: '0.3s'}}>
            <Card className="glass-card border-0 hover-lift h-full group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center mb-4 group-hover:pulse-glow transition-all">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-gradient">One-Click Deploy</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Complete MCP service configuration and cloud deployment in 5 minutes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                    Drag-and-drop configuration UI
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                    Automated K8s deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                    Zero-maintenance management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in" style={{animationDelay: '0.4s'}}>
            <Card className="glass-card border-0 hover-lift h-full group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center mb-4 group-hover:pulse-glow transition-all">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl font-bold text-gradient">Enterprise Security</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Multi-layer security protection with data privacy assurance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-glow" />
                    SOC2 Type II certified
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-glow" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-glow" />
                    RBAC access control
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in" style={{animationDelay: '0.5s'}}>
            <Card className="glass-card border-0 hover-lift h-full group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center mb-4 group-hover:pulse-glow transition-all">
                  <Cloud className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl font-bold text-gradient">Cloud-Native Architecture</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Elastic scaling with global accelerated access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full pulse-glow" />
                    Multi-cloud deployment strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full pulse-glow" />
                    Global CDN acceleration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full pulse-glow" />
                    Auto-scaling capabilities
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in" style={{animationDelay: '0.6s'}}>
            <Card className="glass-card border-0 hover-lift h-full group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center mb-4 group-hover:pulse-glow transition-all">
                  <GitBranch className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl font-bold text-gradient">Rich Ecosystem</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Support for mainstream enterprise service integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full pulse-glow" />
                    Atlassian Suite
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full pulse-glow" />
                    Microsoft 365
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full pulse-glow" />
                    Google Workspace
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-24 relative z-10">
        <div className="glass-card rounded-3xl p-12 hover-lift">
          <div className="text-center mb-20 fade-in" style={{animationDelay: '0.2s'}}>
            <h2 className="text-4xl font-black mb-6 text-gradient">Choose the Right Plan</h2>
            <p className="text-xl text-muted-foreground font-medium">Start free, scale as needed</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="fade-in" style={{animationDelay: '0.3s'}}>
              <Card className="glass-card border-0 hover-lift h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">Starter</CardTitle>
                  <CardDescription className="text-base">Individual developers</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-black text-gradient">$0</span>
                    <span className="text-muted-foreground font-medium">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      1 MCP service
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      10K API requests/month
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      Community support
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      Basic monitoring
                    </li>
                  </ul>
                  <Button className="w-full mt-8 glass-card hover-lift" variant="outline">
                    Start Free
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="fade-in" style={{animationDelay: '0.4s'}}>
              <Card className="glass-card border-primary/30 border-2 shadow-xl hover-lift h-full relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="glass-card text-xs font-semibold pulse-glow">Recommended</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-gradient">Professional</CardTitle>
                  <CardDescription className="text-base">Small teams</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-black text-gradient">$29</span>
                    <span className="text-muted-foreground font-medium">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      5 MCP services
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      100K API requests/month
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      Email support
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      Advanced monitoring
                    </li>
                  </ul>
                  <Button className="w-full mt-8 btn-modern font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="fade-in" style={{animationDelay: '0.5s'}}>
              <Card className="glass-card border-0 hover-lift h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">Business</CardTitle>
                  <CardDescription className="text-base">Growing enterprises</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-black text-gradient">$99</span>
                    <span className="text-muted-foreground font-medium">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full pulse-glow" />
                      Unlimited MCP services
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full pulse-glow" />
                      1M API requests/month
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full pulse-glow" />
                      Priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full pulse-glow" />
                      Enterprise monitoring
                    </li>
                  </ul>
                  <Button className="w-full mt-8 glass-card hover-lift" variant="outline">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="fade-in" style={{animationDelay: '0.6s'}}>
              <Card className="glass-card border-0 hover-lift h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">Enterprise</CardTitle>
                  <CardDescription className="text-base">Large enterprises</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-black text-gradient">Custom</span>
                    <span className="text-muted-foreground font-medium">pricing</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full pulse-glow" />
                      Private deployment
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full pulse-glow" />
                      Unlimited usage
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full pulse-glow" />
                      Dedicated support
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full pulse-glow" />
                      SLA guarantee
                    </li>
                  </ul>
                  <Button className="w-full mt-8 glass-card hover-lift" variant="outline">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center relative z-10">
        <div className="fade-in" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-black mb-6 text-gradient">Ready to Activate Tesseract?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            <span className="text-gradient font-semibold">Unleash the infinite power</span> of AI connections 
            and start your cloud-native MCP service journey
          </p>
        </div>
        <div className="fade-in flex items-center justify-center gap-6" style={{animationDelay: '0.4s'}}>
          <Button size="lg" className="btn-modern px-10 py-4 text-lg font-semibold hover-lift">
            Start Free Trial
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="glass-card hover-lift px-8 py-4 text-lg font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              View Documentation
            </div>
          </Button>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="glass border-t-0 relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 neumorphism rounded-xl flex items-center justify-center pulse-glow">
                <span className="text-3xl">🔷</span>
              </div>
              <div>
                <div className="text-gradient font-black text-lg">VibeMCP.net</div>
                <div className="text-sm text-muted-foreground font-medium">
                  © 2025 Project Tesseract. All rights reserved.
                </div>
              </div>
            </div>
            <div className="fade-in flex items-center space-x-8 text-sm text-muted-foreground font-medium" style={{animationDelay: '0.4s'}}>
              <a href="#" className="hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">Privacy</a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">Terms</a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}