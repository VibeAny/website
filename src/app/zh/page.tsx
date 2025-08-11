import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Shield, Cloud, GitBranch, Globe, Sparkles, Star } from "lucide-react"
import Link from 'next/link'

export default function ZhPage() {
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
        <nav className="glass-card rounded-2xl px-6 py-4 flex items-center justify-between hover-lift">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 neumorphism rounded-xl flex items-center justify-center shadow-lg pulse-glow">
              <span className="text-2xl">🔷</span>
            </div>
            <span className="text-xl font-bold text-gradient">
              VibeMCP.net
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">
              功能特性
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">
              价格方案
            </a>
            <a href="#docs" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">
              开发文档
            </a>
            <Link href="/en">
              <Button variant="ghost" size="sm" className="glass-card hover-lift flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">English</span>
              </Button>
            </Link>
            <Button variant="outline" className="glass-card hover-lift">登录</Button>
            <Button className="btn-modern shadow-lg hover-lift">开始使用</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center relative z-10">
        <div className="fade-in" style={{animationDelay: '0.2s'}}>
          <Badge className="mb-8 glass-card px-6 py-2 hover-lift pulse-glow" variant="secondary">
            <span className="text-gradient font-semibold">Project Tesseract 🔷</span>
          </Badge>
        </div>
        <div className="fade-in" style={{animationDelay: '0.4s'}}>
          <h1 className="text-6xl font-black mb-8 text-gradient leading-tight max-w-4xl mx-auto">
            体验优先的 MCP 平台
          </h1>
        </div>
        <div className="fade-in" style={{animationDelay: '0.6s'}}>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Configure Once, Connect Everywhere. 让 MCP 服务部署从复杂变简单，从本地变云端。
            <span className="text-gradient font-semibold">像无限宝石一样释放AI连接的强大能量</span>。
          </p>
        </div>
        
        <div className="fade-in flex items-center justify-center gap-6 mb-16" style={{animationDelay: '0.8s'}}>
          <Button size="lg" className="btn-modern px-10 py-4 text-lg font-semibold hover-lift">
            免费试用
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="glass-card hover-lift px-8 py-4 text-lg font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              观看演示
            </div>
          </Button>
        </div>
        
        {/* Enhanced Hero Stats */}
        <div className="fade-in grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto" style={{animationDelay: '1s'}}>
          <div className="glass-card p-6 rounded-2xl hover-lift">
            <div className="text-4xl font-black text-gradient mb-3 pulse-glow">99.9%</div>
            <div className="text-sm text-muted-foreground font-medium">运行时间 SLA</div>
          </div>
          <div className="glass-card p-6 rounded-2xl hover-lift">
            <div className="text-4xl font-black text-gradient mb-3 pulse-glow">&lt;50ms</div>
            <div className="text-sm text-muted-foreground font-medium">API 响应</div>
          </div>
          <div className="glass-card p-6 rounded-2xl hover-lift">
            <div className="text-4xl font-black text-gradient mb-3 pulse-glow">5min</div>
            <div className="text-sm text-muted-foreground font-medium">部署时间</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-20 fade-in" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-black mb-6 text-gradient">四维连接，无限能量</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            跨越时间、空间、系统、数据的维度连接，构建精密的
            <span className="text-gradient font-semibold"> 云原生MCP服务生态</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="fade-in" style={{animationDelay: '0.3s'}}>
            <Card className="glass-card border-0 hover-lift h-full group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center mb-4 group-hover:pulse-glow transition-all">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-gradient">一键部署</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  5分钟完成MCP服务配置和云端部署
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                    拖拽式配置界面
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                    自动K8s部署
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                    零运维管理
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
                <CardTitle className="text-xl font-bold text-gradient">企业级安全</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  多层安全防护，数据隐私保障
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-glow" />
                    SOC2 Type II 认证
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-glow" />
                    端到端加密
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-glow" />
                    RBAC权限控制
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
                <CardTitle className="text-xl font-bold text-gradient">云原生架构</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  弹性扩展，全球加速访问
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full pulse-glow" />
                    多云部署策略
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full pulse-glow" />
                    CDN全球加速
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full pulse-glow" />
                    自动伸缩扩容
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
                <CardTitle className="text-xl font-bold text-gradient">丰富生态</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  支持主流企业服务集成
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full pulse-glow" />
                    Atlassian套件
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
            <h2 className="text-4xl font-black mb-6 text-gradient">选择适合的方案</h2>
            <p className="text-xl text-muted-foreground font-medium">从免费开始，按需扩展</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="fade-in" style={{animationDelay: '0.3s'}}>
              <Card className="glass-card border-0 hover-lift h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">Starter</CardTitle>
                  <CardDescription className="text-base">个人开发者</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-black text-gradient">$0</span>
                    <span className="text-muted-foreground font-medium">/月</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      1个MCP服务
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      10K API请求/月
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      社区支持
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      基础监控
                    </li>
                  </ul>
                  <Button className="w-full mt-8 glass-card hover-lift" variant="outline">
                    免费开始
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="fade-in" style={{animationDelay: '0.4s'}}>
              <Card className="glass-card border-primary/30 border-2 shadow-xl hover-lift h-full relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="glass-card text-xs font-semibold pulse-glow">推荐</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-gradient">Professional</CardTitle>
                  <CardDescription className="text-base">小团队</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-black text-gradient">$29</span>
                    <span className="text-muted-foreground font-medium">/月</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      5个MCP服务
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      100K API请求/月
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      邮件支持
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow" />
                      高级监控
                    </li>
                  </ul>
                  <Button className="w-full mt-8 btn-modern font-semibold">
                    立即开始
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="fade-in" style={{animationDelay: '0.5s'}}>
              <Card className="glass-card border-0 hover-lift h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">Business</CardTitle>
                  <CardDescription className="text-base">成长企业</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-black text-gradient">$99</span>
                    <span className="text-muted-foreground font-medium">/月</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full pulse-glow" />
                      无限MCP服务
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full pulse-glow" />
                      1M API请求/月
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full pulse-glow" />
                      优先支持
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full pulse-glow" />
                      企业级监控
                    </li>
                  </ul>
                  <Button className="w-full mt-8 glass-card hover-lift" variant="outline">
                    联系销售
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="fade-in" style={{animationDelay: '0.6s'}}>
              <Card className="glass-card border-0 hover-lift h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">Enterprise</CardTitle>
                  <CardDescription className="text-base">大型企业</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-black text-gradient">定制</span>
                    <span className="text-muted-foreground font-medium">报价</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full pulse-glow" />
                      私有部署
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full pulse-glow" />
                      无限制使用
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full pulse-glow" />
                      专属支持
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full pulse-glow" />
                      SLA保障
                    </li>
                  </ul>
                  <Button className="w-full mt-8 glass-card hover-lift" variant="outline">
                    联系我们
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
          <h2 className="text-4xl font-black mb-6 text-gradient">准备激活 Tesseract？</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            <span className="text-gradient font-semibold">释放AI连接的无限能量</span>，
            开启您的云原生MCP服务之旅
          </p>
        </div>
        <div className="fade-in flex items-center justify-center gap-6" style={{animationDelay: '0.4s'}}>
          <Button size="lg" className="btn-modern px-10 py-4 text-lg font-semibold hover-lift">
            免费试用
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="glass-card hover-lift px-8 py-4 text-lg font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              查看文档
            </div>
          </Button>
        </div>
      </section>

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
                  © 2025 Project Tesseract. 版权所有。
                </div>
              </div>
            </div>
            <div className="fade-in flex items-center space-x-8 text-sm text-muted-foreground font-medium" style={{animationDelay: '0.4s'}}>
              <a href="#" className="hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">隐私政策</a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">服务条款</a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">技术支持</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}