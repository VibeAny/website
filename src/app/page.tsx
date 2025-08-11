import Link from 'next/link'

export default function RootPage() {
  // For static export, create a simple landing page instead of redirect
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gradient">VibeMCP.net</h1>
        <p className="text-xl text-muted-foreground">Choose your language</p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/en" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            English
          </Link>
          <Link 
            href="/zh" 
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            中文
          </Link>
        </div>
      </div>
    </div>
  )
}