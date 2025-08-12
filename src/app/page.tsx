import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap } from "lucide-react"

export default function RootPage() {
  return (
    <div className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent dark:from-blue-400/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      
      {/* Reduced Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 glass border-primary/20 rotate-12 rounded-lg floating-element opacity-60" />
      <div className="absolute bottom-20 right-40 w-20 h-20 glass border-secondary/20 -rotate-12 rounded-full floating-element opacity-60" style={{animationDelay: '1s'}} />
      
      {/* Minimal Particle Elements */}
      <div className="absolute top-32 right-1/4 w-2 h-2 bg-primary/40 rounded-full floating-element opacity-50" style={{animationDelay: '0.5s'}} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-accent/40 rounded-full floating-element opacity-50" style={{animationDelay: '3s'}} />

      {/* Header */}
      <header className="container mx-auto px-4 py-6 relative z-10 fade-in">
        <nav className="glass-card rounded-2xl px-6 py-4 flex items-center justify-between hover-lift">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 neumorphism rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl" role="img" aria-label="Tesseract">🔷</span>
            </div>
            <span className="text-xl font-bold text-gradient">
              VibeMCP.net
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/free-servers">
              <Button variant="outline" className="glass-card hover-lift">Free Servers</Button>
            </Link>
            <Link href="/en">
              <Button className="btn-modern shadow-lg hover-lift">Launch Beta</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Coming Soon Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
          <div className="fade-in" style={{animationDelay: '0.2s'}}>
            <Badge className="mb-8 glass-card px-6 py-2 hover-lift" variant="secondary">
              <span className="text-gradient font-semibold">Project Tesseract 🔷</span>
            </Badge>
          </div>
          
          <div className="fade-in" style={{animationDelay: '0.4s'}}>
            <h1 className="text-6xl font-black mb-8 text-gradient leading-tight">
              The Vibe-First MCP Platform
            </h1>
          </div>
          
          <div className="fade-in" style={{animationDelay: '0.6s'}}>
            <h2 className="text-3xl font-bold mb-6 text-muted-foreground">
              Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              We&apos;re building the future of MCP service deployment. 
              <span className="text-gradient font-semibold"> Configure Once, Connect Everywhere.</span>
              <br />Transform from complex to simple, from local to cloud.
            </p>
          </div>

          <div className="fade-in grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" style={{animationDelay: '0.8s'}}>
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-xl font-bold text-gradient mb-2">One-Click Deploy</div>
              <div className="text-sm text-muted-foreground">5-minute MCP service setup</div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="text-2xl mb-4">🔒</div>
              <div className="text-xl font-bold text-gradient mb-2">Enterprise Ready</div>
              <div className="text-sm text-muted-foreground">SOC2 certified security</div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="text-2xl mb-4">☁️</div>
              <div className="text-xl font-bold text-gradient mb-2">Cloud Native</div>
              <div className="text-sm text-muted-foreground">Global scaling & CDN</div>
            </div>
          </div>
        
          <div className="fade-in flex items-center justify-center gap-6" style={{animationDelay: '1s'}}>
            <Link href="/free-servers">
              <Button size="lg" className="btn-modern px-10 py-4 text-lg font-semibold hover-lift">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Try Free Servers
                </div>
              </Button>
            </Link>
            <Link href="/en">
              <Button size="lg" variant="outline" className="glass-card hover-lift px-8 py-4 text-lg font-semibold">
                Launch Beta Experience
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="fade-in mt-12" style={{animationDelay: '1.2s'}}>
            <p className="text-sm text-muted-foreground">
              Be among the first to experience the power of Tesseract
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="glass border-t-0 relative z-10 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center">
            <div className="text-sm text-muted-foreground font-medium">
              © 2025 Project Tesseract. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}