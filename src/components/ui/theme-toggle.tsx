'use client'

import { useState, useEffect } from 'react'
import { SunMoon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if dark mode is already set in localStorage or system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    setIsDark(shouldBeDark)
    
    // Apply theme class to document
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    // Save to localStorage
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
    
    // Apply theme class to document
    if (newIsDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="p-2 border-0 shadow-none bg-transparent hover:bg-muted/20"
      onClick={toggleTheme}
    >
      <SunMoon className="h-5 w-5 text-muted-foreground" />
    </Button>
  )
}