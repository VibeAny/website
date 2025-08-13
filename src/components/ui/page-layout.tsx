'use client'

import { Navigation } from '@/components/ui/navigation'
import { Footer } from '@/components/ui/footer'

interface PageLayoutProps {
  children: React.ReactNode
  currentPath?: string
}

export function PageLayout({ 
  children, 
  currentPath = ''
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Navigation */}
      <Navigation currentPath={currentPath} />
      
      {/* Main Content */}
      <main>
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}