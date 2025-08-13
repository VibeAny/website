'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Check, Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import languageDetector from '@/lib/languageDetector'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文（简体）' },
  { code: 'ja', name: '日本語' },
  { code: 'fr', name: 'Français' },
  { code: 'ko', name: '한국어' },
]

export function LanguageSelector() {
  const router = useRouter()
  const { locale, asPath } = router
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="p-2 border-0 shadow-none bg-transparent hover:bg-muted/20">
          <Languages className="h-5 w-5 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="white-card border-0 shadow-lg">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} asChild>
            <Link
              href={asPath}
              onClick={() => {
                if (languageDetector.cache) {
                  languageDetector.cache(language.code)
                }
              }}
              locale={language.code}
              className="flex items-center justify-between w-full px-3 py-2 cursor-pointer hover:bg-muted/50 rounded-lg transition-colors"
            >
              <span className="font-medium">{language.name}</span>
              {locale === language.code && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}