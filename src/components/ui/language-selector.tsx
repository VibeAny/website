'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { I18nIcon } from '@/components/ui/i18n-icon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
]

interface LanguageSelectorProps {
  currentLocale: string
}

export function LanguageSelector({ currentLocale }: LanguageSelectorProps) {
  const pathname = usePathname()
  
  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLocale) || languages[0]
  }
  
  const getLocalizedPath = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    return segments.join('/')
  }

  const currentLang = getCurrentLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="white-button flex items-center gap-2">
          <I18nIcon className="h-4 w-4" />
          <span className="text-sm font-medium flex items-center gap-1">
            <span className="text-base">{currentLang.flag}</span>
            {currentLang.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="white-card border-0 shadow-lg">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} asChild>
            <Link
              href={getLocalizedPath(language.code)}
              className="flex items-center justify-between w-full px-3 py-2 cursor-pointer hover:bg-muted/50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
              </div>
              {currentLocale === language.code && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}