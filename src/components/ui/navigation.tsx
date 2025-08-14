import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Menu, X } from 'lucide-react'
// import { LanguageSelector } from './language-selector'
import { ThemeToggle } from './theme-toggle'

interface NavigationProps {
  currentPath?: string
}

interface NavItemProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

const NavItem = ({ href, children, isActive = false }: NavItemProps) => (
  <Link
    href={href}
    className={`transition-all duration-300 hover-glow px-3 py-1 rounded-lg ${
      isActive
        ? "text-primary font-semibold border-b-2 border-primary"
        : "text-muted-foreground hover:text-primary"
    }`}
  >
    {children}
  </Link>
)

export function Navigation({ currentPath = '' }: NavigationProps) {
  const { t } = useTranslation('common')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Determine active page based on current path
  const isActive = (path: string) => currentPath.includes(path)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Add/remove body class for fixed nav padding
    if (isScrolled) {
      document.body.classList.add('body-with-fixed-nav')
    } else {
      document.body.classList.remove('body-with-fixed-nav')
    }
  }, [isScrolled])

  return (
    <header className={`${isScrolled ? 'fixed-nav' : 'container mx-auto px-4 py-6 relative z-10 fade-in'}`}>
      <nav 
        className={`${
          isScrolled 
            ? 'container mx-auto px-4 py-3' 
            : 'white-nav rounded-2xl px-6 py-4'
        } flex items-center justify-between transition-all duration-300`} 
        role="navigation" 
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-black relative">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300">VibeMCP</span>
            <sup className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent absolute top-1 ml-0.5">™</sup>
          </div>
        </Link>

        {/* Desktop Navigation Links and Controls */}
        <div className="hidden md:flex items-center space-x-6">
          <NavItem 
            href="/mcp-hub" 
            isActive={isActive('/mcp-hub')}
          >
            {t('navigation.mcpHub')}
          </NavItem>
          
          <NavItem 
            href="/remote-mcp" 
            isActive={isActive('/remote-mcp')}
          >
            {t('navigation.remoteMcp')}
          </NavItem>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            {/* <LanguageSelector /> */}
          </div>
        </div>

        {/* Mobile Menu Controls */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[88px] bg-background/95 backdrop-blur-md border-t z-50">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link
              href="/mcp-hub"
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/mcp-hub')
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-muted/50"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navigation.mcpHub')}
            </Link>
            
            <Link
              href="/remote-mcp"
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/remote-mcp')
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-muted/50"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navigation.remoteMcp')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}