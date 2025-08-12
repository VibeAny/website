'use client'

import { useState, useEffect, useCallback } from 'react'
import { Loader2 } from "lucide-react"
import { McpServer, McpCategory } from '@/lib/mcp-data'
import { McpSearchFilter } from './mcp-search-filter'
import { McpServerGrid } from './mcp-server-grid'

interface McpBrowserProps {
  servers: McpServer[]
  categories: McpCategory[]
}

const ITEMS_PER_PAGE = 12

export function McpBrowser({ servers, categories }: McpBrowserProps) {
  const [filteredServers, setFilteredServers] = useState<McpServer[]>(servers)
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)

  const handleFilteredServers = useCallback((filtered: McpServer[]) => {
    setFilteredServers(filtered)
    setDisplayedCount(ITEMS_PER_PAGE) // Reset to first page when filters change
  }, [])

  const loadMore = useCallback(async () => {
    if (isLoading || displayedCount >= filteredServers.length) return
    
    setIsLoading(true)
    
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800))
    
    setDisplayedCount(prev => Math.min(prev + ITEMS_PER_PAGE, filteredServers.length))
    setIsLoading(false)
  }, [filteredServers.length, isLoading, displayedCount])

  // Scroll detection for infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      // Check if user scrolled near bottom (within 600px)
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      if (scrollTop + windowHeight >= documentHeight - 600) {
        // Only auto-load if there are more items and not currently loading
        if (displayedCount < filteredServers.length && !isLoading) {
          loadMore()
        }
      }
    }

    // Throttle scroll events
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [displayedCount, filteredServers.length, isLoading, loadMore])

  // Reset displayed count when filtered servers change
  useEffect(() => {
    if (displayedCount > filteredServers.length) {
      setDisplayedCount(Math.min(ITEMS_PER_PAGE, filteredServers.length))
    }
  }, [filteredServers.length, displayedCount])

  const displayedServers = filteredServers.slice(0, displayedCount)
  const hasMore = displayedCount < filteredServers.length

  return (
    <div className="space-y-12">
      {/* Search and Filter */}
      <McpSearchFilter 
        servers={servers} 
        categories={categories}
        onFilteredServers={handleFilteredServers}
      />

      {/* Server Grid */}
      <McpServerGrid servers={displayedServers} />

      {/* Loading Indicator - Enhanced */}
      {isLoading && (
        <div className="flex justify-center items-center py-16">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Loader2 className="w-10 h-10 animate-spin text-purple-600" />
              <div className="absolute inset-0 w-10 h-10 rounded-full border-2 border-purple-200 animate-pulse"></div>
            </div>
            <div className="text-center">
              <span className="text-lg text-gray-700 font-semibold">Loading more servers...</span>
              <p className="text-sm text-gray-500 mt-1">Fetching the latest MCP servers for you</p>
            </div>
          </div>
        </div>
      )}

      {/* End of results indicator - Enhanced */}
      {!hasMore && displayedCount > ITEMS_PER_PAGE && (
        <div className="text-center py-16">
          <div className="inline-flex flex-col items-center gap-4 px-12 py-8 rounded-3xl bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 border-2 border-green-200/50 shadow-xl shadow-green-500/10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-center">
              <span className="text-xl font-bold text-gray-900 block">
                All servers loaded!
              </span>
              <p className="text-green-700 font-medium mt-2">
                Showing all {filteredServers.length} MCP servers in our database
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Results summary */}
      {displayedServers.length > 0 && (
        <div className="text-center text-sm text-muted-foreground py-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200">
            <span>📊</span>
            <span>Showing {displayedServers.length} of {filteredServers.length} servers</span>
          </div>
        </div>
      )}

      {/* Scroll hint for initial users */}
      {hasMore && displayedCount === ITEMS_PER_PAGE && (
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
            <span className="text-lg">👇</span>
            <span className="text-sm font-medium">Scroll down to load more servers automatically</span>
          </div>
        </div>
      )}
    </div>
  )
}