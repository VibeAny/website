'use client'

import Link from 'next/link'

export function Footer() {

  return (
    <footer className="white-card border-t-0 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link
            href="/"
            className="flex items-center space-x-4 fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <div className="text-2xl font-black relative">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300">VibeMCP</span>
                <sup className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent absolute top-1 ml-0.5">™</sup>
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                © 2025 VibeMCP™. All rights reserved.
              </div>
            </div>
          </Link>

          {/* Footer Links */}
          <div
            className="fade-in flex items-center space-x-8 text-sm text-muted-foreground font-medium"
            style={{ animationDelay: "0.4s" }}
          >
            <FooterLink href="#" label="Privacy" />
            <FooterLink href="#" label="Terms" />
            <FooterLink href="#" label="Support" />
          </div>
        </div>
      </div>
    </footer>
  )
}

interface FooterLinkProps {
  href: string
  label: string
}

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <a
    href={href}
    className="hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg"
  >
    {label}
  </a>
)