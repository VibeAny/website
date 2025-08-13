'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
  const [isScrolled, setIsScrolled] = useState(false)
  
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

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <NavItem 
            href="/mcp-hub" 
            isActive={isActive('/mcp-hub')}
          >
            MCP Hub
          </NavItem>
          
          <NavItem 
            href="/remote-mcp" 
            isActive={isActive('/remote-mcp')}
          >
            Remote MCP
          </NavItem>
        </div>
      </nav>
    </header>
  )
}