"use client";

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Get current locale from pathname
  const currentLocale = pathname.startsWith('/zh') ? 'zh' : 'en';

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'zh' : 'en';
    // Remove current locale and add new one
    const newPath = pathname.replace(/^\/(en|zh)/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {currentLocale === 'en' ? '中文' : 'English'}
      </span>
    </Button>
  );
}