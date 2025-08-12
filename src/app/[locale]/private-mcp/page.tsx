import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageLayout } from "@/components/ui/page-layout"
import { ArrowRight, Shield, Lock, Cloud, Settings, Zap, Users } from "lucide-react"
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function PrivateMcpPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale })
  
  return (
    <PageLayout locale={locale} currentPath="/private-mcp">
      {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center relative z-10">
          <div className="fade-in" style={{animationDelay: '0.2s'}}>
            <Badge className="mb-8 white-card px-6 py-2 ui-pulse-glow bg-orange-50 text-orange-600 border-orange-200" variant="secondary">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span className="font-semibold">Enterprise Security</span>
              </div>
            </Badge>
          </div>
          <div className="fade-in" style={{animationDelay: '0.4s'}}>
            <h1 className="text-5xl font-black mb-6 text-gradient leading-tight max-w-4xl mx-auto">
              Private MCP Services
            </h1>
          </div>
          <div className="fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Deploy and manage your own private MCP servers with enterprise-grade security, full control, and seamless integration with your existing infrastructure.
            </p>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="container mx-auto px-4 py-24 relative z-10">
          <div className="white-card rounded-3xl p-12">
            <div className="text-center mb-16 fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-24 h-24 neumorphism rounded-3xl flex items-center justify-center mx-auto mb-8 ui-pulse-glow">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-4xl font-black mb-6 text-gradient">Coming Q2 2025</h2>
              <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto">
                We&apos;re building the ultimate private MCP platform for enterprises who need complete control over their AI infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="fade-in text-center" style={{animationDelay: '0.3s'}}>
                <div className="w-20 h-20 neumorphism rounded-3xl flex items-center justify-center mx-auto mb-6 ui-pulse-glow">
                  <Lock className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">Private Deployment</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Deploy MCP servers in your own cloud or on-premises infrastructure with complete data sovereignty and security control.
                </p>
              </div>
              
              <div className="fade-in text-center" style={{animationDelay: '0.4s'}}>
                <div className="w-20 h-20 neumorphism rounded-3xl flex items-center justify-center mx-auto mb-6 ui-pulse-glow">
                  <Settings className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">Custom Configuration</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Configure MCP servers to integrate seamlessly with your existing systems, APIs, and enterprise applications.
                </p>
              </div>
              
              <div className="fade-in text-center" style={{animationDelay: '0.5s'}}>
                <div className="w-20 h-20 neumorphism rounded-3xl flex items-center justify-center mx-auto mb-6 ui-pulse-glow">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">Team Management</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Advanced user management, role-based access control, and detailed audit logs for enterprise compliance.
                </p>
              </div>
            </div>

            {/* Features Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="white-card border-0 h-full">
                <CardHeader>
                  <div className="w-12 h-12 neumorphism rounded-xl flex items-center justify-center mb-4 ui-pulse-glow">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gradient">Hybrid Cloud Architecture</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Deploy across multiple cloud providers or on-premises
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full ui-pulse-glow" />
                      Multi-cloud deployment options
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full ui-pulse-glow" />
                      On-premises installation support
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full ui-pulse-glow" />
                      Kubernetes-native architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full ui-pulse-glow" />
                      Auto-scaling and load balancing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="white-card border-0 h-full">
                <CardHeader>
                  <div className="w-12 h-12 neumorphism rounded-xl flex items-center justify-center mb-4 ui-pulse-glow">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gradient">Enterprise Features</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Advanced capabilities for enterprise deployments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full ui-pulse-glow" />
                      Single Sign-On (SSO) integration
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full ui-pulse-glow" />
                      Advanced monitoring and alerting
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full ui-pulse-glow" />
                      Compliance reporting (SOX, GDPR)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full ui-pulse-glow" />
                      24/7 dedicated support
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center fade-in" style={{animationDelay: '0.6s'}}>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Be Among the First</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our early access program and get exclusive previews of Private MCP features, plus special pricing for early adopters.
              </p>
              <div className="flex items-center justify-center gap-6">
                <Button size="lg" className="btn-modern px-10 py-4 text-lg font-semibold">
                  Join Early Access
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="white-button px-8 py-4 text-lg font-semibold">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}