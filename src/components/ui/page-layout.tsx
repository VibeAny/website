'use client'

import { Navigation } from '@/components/ui/navigation'
import { Footer } from '@/components/ui/footer'

interface PageLayoutProps {
  children: React.ReactNode
  locale: string
  currentPath?: string
}

export function PageLayout({ 
  children, 
  locale, 
  currentPath = ''
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Navigation */}
      <Navigation locale={locale} currentPath={currentPath} />
      
      {/* Main Content */}
      <main>
        {children}
      </main>
      
      {/* Footer */}
      <Footer locale={locale} />
    </div>
  )
}