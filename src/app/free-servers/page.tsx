import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Server, Zap, Globe, Database, Code, FileText, Calendar, Users, Bot } from "lucide-react"
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free MCP Servers - VibeMCP.net',
  description: 'Discover and try public MCP servers for free. Connect to databases, APIs, and services instantly with our curated collection of open MCP servers.',
  keywords: ['MCP Servers', 'Free MCP', 'Public MCP', 'Model Context Protocol', 'Claude MCP', 'Remote MCP'],
  openGraph: {
    title: 'Free MCP Servers - VibeMCP.net',
    description: 'Discover and try public MCP servers for free. Connect to databases, APIs, and services instantly.',
    url: 'https://vibemcp.net/free-servers',
  },
}

const mcpServers = [
  {
    name: "GitHub MCP Server",
    description: "Access GitHub repositories, issues, pull requests, and more through MCP",
    category: "Development",
    provider: "Community",
    icon: <Code className="h-6 w-6" />,
    features: ["Repository management", "Issue tracking", "PR operations", "Code search"],
    url: "github://",
    status: "active",
    users: "5000+"
  },
  {
    name: "PostgreSQL MCP Server", 
    description: "Connect to PostgreSQL databases with secure MCP protocol",
    category: "Database",
    provider: "Community",
    icon: <Database className="h-6 w-6" />,
    features: ["SQL queries", "Schema inspection", "Data operations", "Connection pooling"],
    url: "postgresql://",
    status: "active", 
    users: "2500+"
  },
  {
    name: "Notion MCP Server",
    description: "Integrate with Notion databases and pages seamlessly",
    category: "Productivity",
    provider: "Community",
    icon: <FileText className="h-6 w-6" />,
    features: ["Page creation", "Database queries", "Content management", "Block operations"],
    url: "notion://",
    status: "active",
    users: "3200+"
  },
  {
    name: "Google Calendar MCP",
    description: "Manage Google Calendar events and schedules through MCP",
    category: "Productivity", 
    provider: "Community",
    icon: <Calendar className="h-6 w-6" />,
    features: ["Event management", "Calendar sync", "Meeting scheduling", "Reminder setup"],
    url: "gcal://",
    status: "active",
    users: "1800+"
  },
  {
    name: "Slack MCP Server",
    description: "Send messages and interact with Slack workspaces",
    category: "Communication",
    provider: "Community", 
    icon: <Users className="h-6 w-6" />,
    features: ["Message posting", "Channel management", "User lookup", "File sharing"],
    url: "slack://",
    status: "active",
    users: "4100+"
  },
  {
    name: "OpenAI MCP Server",
    description: "Connect to OpenAI APIs through MCP for AI operations",
    category: "AI/ML",
    provider: "Community",
    icon: <Bot className="h-6 w-6" />,
    features: ["Text generation", "Image creation", "Embeddings", "Fine-tuning"],
    url: "openai://",
    status: "active",
    users: "6700+"
  }
]

const categoryColors = {
  "Development": "bg-blue-500/10 text-blue-600 border-blue-200",
  "Database": "bg-green-500/10 text-green-600 border-green-200", 
  "Productivity": "bg-purple-500/10 text-purple-600 border-purple-200",
  "Communication": "bg-orange-500/10 text-orange-600 border-orange-200",
  "AI/ML": "bg-pink-500/10 text-pink-600 border-pink-200"
}

export default function FreeServers() {
  return (
    <div className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent dark:from-blue-400/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl pulse-glow" />
      
      {/* Header */}
      <header className="container mx-auto px-4 py-6 relative z-10 fade-in">
        <nav className="glass-card rounded-2xl px-6 py-4 flex items-center justify-between hover-lift">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 neumorphism rounded-xl flex items-center justify-center shadow-lg pulse-glow">
              <span className="text-2xl" role="img" aria-label="Tesseract">🔷</span>
            </div>
            <span className="text-xl font-bold text-gradient">VibeMCP.net</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg">
              Home
            </Link>
            <Link href="/free-servers" className="text-primary font-medium px-3 py-1 rounded-lg bg-primary/10">
              Free Servers
            </Link>
            <Button variant="outline" className="glass-card hover-lift">Sign In</Button>
            <Button className="btn-modern shadow-lg hover-lift">Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        <section className="text-center mb-16">
          <div className="fade-in" style={{animationDelay: '0.2s'}}>
            <Badge className="mb-8 glass-card px-6 py-2 hover-lift pulse-glow" variant="secondary">
              <Server className="w-4 h-4 mr-2" />
              <span className="text-gradient font-semibold">Free MCP Servers</span>
            </Badge>
          </div>
          
          <div className="fade-in" style={{animationDelay: '0.4s'}}>
            <h1 className="text-5xl font-black mb-8 text-gradient leading-tight max-w-4xl mx-auto">
              Discover Public MCP Servers
            </h1>
          </div>
          
          <div className="fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Try these <span className="text-gradient font-semibold">free public MCP servers</span> to experience the power 
              of Model Context Protocol. Perfect for development, testing, and learning.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 fade-in" style={{animationDelay: '0.8s'}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-2xl hover-lift text-center">
              <div className="text-3xl font-black text-gradient mb-3 pulse-glow">{mcpServers.length}+</div>
              <div className="text-sm text-muted-foreground font-medium">Free Servers</div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-lift text-center">
              <div className="text-3xl font-black text-gradient mb-3 pulse-glow">25K+</div>
              <div className="text-sm text-muted-foreground font-medium">Active Users</div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-lift text-center">
              <div className="text-3xl font-black text-gradient mb-3 pulse-glow">99.9%</div>
              <div className="text-sm text-muted-foreground font-medium">Uptime</div>
            </div>
          </div>
        </section>

        {/* MCP Servers Grid */}
        <section className="mb-16">
          <div className="fade-in mb-12" style={{animationDelay: '1s'}}>
            <h2 className="text-3xl font-black mb-4 text-gradient text-center">Available MCP Servers</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Each server is maintained by the community and ready to use. Simply copy the connection URL to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mcpServers.map((server, index) => (
              <div 
                key={server.name}
                className="fade-in" 
                style={{animationDelay: `${1.2 + index * 0.1}s`}}
              >
                <Card className="glass-card border-0 hover-lift h-full group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 neumorphism rounded-xl flex items-center justify-center group-hover:pulse-glow transition-all">
                        {server.icon}
                      </div>
                      <Badge className={`text-xs font-medium ${categoryColors[server.category as keyof typeof categoryColors]}`}>
                        {server.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-bold text-gradient">{server.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {server.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2 font-medium">Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {server.features.slice(0, 2).map(feature => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {server.features.length > 2 && (
                          <Badge variant="outline" className="text-xs opacity-70">
                            +{server.features.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        {server.users} users
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Active
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="glass p-2 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Connection URL:</p>
                        <code className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                          {server.url}
                        </code>
                      </div>
                      
                      <Button className="w-full glass-card hover-lift" variant="outline">
                        <Zap className="w-4 h-4 mr-2" />
                        Try Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* How to Use Section */}
        <section className="mb-16">
          <div className="glass-card rounded-3xl p-12 hover-lift">
            <div className="fade-in text-center mb-12" style={{animationDelay: '2s'}}>
              <h2 className="text-3xl font-black mb-4 text-gradient">How to Use Free MCP Servers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Getting started with public MCP servers is simple. Follow these steps to connect and start using them.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="fade-in text-center" style={{animationDelay: '2.2s'}}>
                <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <span className="text-2xl font-black text-gradient">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">Choose a Server</h3>
                <p className="text-muted-foreground">
                  Browse our curated list of public MCP servers and pick one that fits your needs.
                </p>
              </div>
              
              <div className="fade-in text-center" style={{animationDelay: '2.4s'}}>
                <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <span className="text-2xl font-black text-gradient">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">Copy Connection URL</h3>
                <p className="text-muted-foreground">
                  Each server provides a connection URL. Simply copy it to your clipboard.
                </p>
              </div>
              
              <div className="fade-in text-center" style={{animationDelay: '2.6s'}}>
                <div className="w-16 h-16 neumorphism rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <span className="text-2xl font-black text-gradient">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">Connect & Use</h3>
                <p className="text-muted-foreground">
                  Add the URL to your Claude configuration and start interacting with the service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="fade-in" style={{animationDelay: '2.8s'}}>
            <h2 className="text-3xl font-black mb-6 text-gradient">Ready for Production?</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Upgrade to <span className="text-gradient font-semibold">VibeMCP Pro</span> for dedicated servers, 
              enterprise security, and guaranteed uptime.
            </p>
          </div>
          
          <div className="fade-in flex items-center justify-center gap-6" style={{animationDelay: '3s'}}>
            <Button size="lg" className="btn-modern px-10 py-4 text-lg font-semibold hover-lift">
              Upgrade to Pro
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline" className="glass-card hover-lift px-8 py-4 text-lg font-semibold">
                Back to Home
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="glass border-t-0 relative z-10 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 fade-in">
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
            <div className="fade-in flex items-center space-x-8 text-sm text-muted-foreground font-medium">
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