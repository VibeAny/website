import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { MessageCircle } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="white-card border-t-0 relative z-10">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Logo and Brand */}
          <Link
            href="/"
            className="flex items-center space-x-4 fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-center md:text-left">
              <div className="text-xl sm:text-2xl font-black relative">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300">VibeMCP</span>
                <sup className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent absolute top-1 ml-0.5">™</sup>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                {t('common.copyright')}
              </div>
            </div>
          </Link>

          {/* Footer Links */}
          <div
            className="fade-in flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-sm text-muted-foreground font-medium"
            style={{ animationDelay: "0.4s" }}
          >
            <FooterLink href="#" label={t('common.privacy')} />
            <FooterLink href="#" label={t('common.terms')} />
            <FooterLink href="#" label={t('common.support')} />
            
            {/* Discord Link */}
            <a
              href="https://discord.gg/TdPGpp9vNe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all duration-300 hover-glow px-3 py-1 rounded-lg flex items-center space-x-2"
              title="Join Discord"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discord</span>
            </a>
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