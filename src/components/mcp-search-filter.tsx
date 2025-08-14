'use client'

import { useState, useMemo, useEffect } from 'react'
import { Search, Award, Flame, Clock, ChevronDown } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { McpServer, McpCategory } from '@/lib/mcp-data'

interface McpSearchFilterProps {
  servers: McpServer[]
  categories: McpCategory[]
  onFilteredServers: (servers: McpServer[]) => void
}

export function McpSearchFilter({ servers, categories, onFilteredServers }: McpSearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [showOfficial, setShowOfficial] = useState(false)
  const [showPopular, setShowPopular] = useState(true)
  const [showRecent, setShowRecent] = useState(false)

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  const filteredServers = useMemo(() => {
    let result = servers

    // Apply search query (use debounced version)
    if (debouncedSearchQuery.trim()) {
      result = result.filter(server => 
        server.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        server.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        (server.metadata?.tags || []).some(tag => tag.toLowerCase().includes(debouncedSearchQuery.toLowerCase()))
      )
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(server => server.category === selectedCategory)
    }

    // Apply language filter
    if (selectedLanguage) {
      result = result.filter(server => (server.metadata?.languages || []).includes(selectedLanguage))
    }

    // Apply quick filters - since servers are already sorted by popularity by default,
    // we only need to re-sort if Popular is disabled or Recent is enabled
    if (showOfficial) {
      result = result.filter(server => server.metadata?.isOfficial)
    }

    // Note: showPopular doesn't change sorting since servers are already sorted by popularity
    
    if (showRecent) {
      result = result.sort((a, b) => {
        const aDate = a.repository.lastUpdated ? new Date(a.repository.lastUpdated).getTime() : 0
        const bDate = b.repository.lastUpdated ? new Date(b.repository.lastUpdated).getTime() : 0
        return bDate - aDate
      })
    } else if (!showPopular) {
      // If Popular is disabled, don't maintain the popularity sorting
      // This could be expanded to show a different default order
      result = result.slice() // Keep original order without popularity sorting
    }

    return result
  }, [servers, debouncedSearchQuery, selectedCategory, selectedLanguage, showOfficial, showPopular, showRecent])

  // Update parent component when filters change
  useMemo(() => {
    onFilteredServers(filteredServers)
  }, [filteredServers, onFilteredServers])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value)
  }

  const toggleQuickFilter = (filter: 'official' | 'popular' | 'recent') => {
    switch (filter) {
      case 'official':
        setShowOfficial(!showOfficial)
        break
      case 'popular':
        setShowPopular(!showPopular)
        setShowRecent(false) // Disable recent when popular is selected
        break
      case 'recent':
        setShowRecent(!showRecent)
        setShowPopular(false) // Disable popular when recent is selected
        break
    }
  }

  return (
    <div className="white-card rounded-3xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
      {/* Mobile-First Grid Layout */}
      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {/* Search Bar - Full width on mobile, spans 2 cols on desktop */}
        <div className="sm:col-span-1 md:col-span-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10 pointer-events-none" />
            <input
              className="w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-2xl border-2 border-border bg-background/70 backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder-muted-foreground font-medium text-sm sm:text-base relative z-0"
              placeholder="Search MCP servers..."
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        {/* Category Filter */}
        <div>
          <div className="relative">
            <select 
              className="w-full pl-4 pr-10 py-3 sm:py-3.5 rounded-2xl border-2 border-border bg-background/70 backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-foreground text-sm sm:text-base appearance-none cursor-pointer"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category.name} value={category.name.toLowerCase().replace(/\s+/g, '-')}>
                  {category.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
        
        {/* Language Filter */}
        <div>
          <div className="relative">
            <select 
              className="w-full pl-4 pr-10 py-3 sm:py-3.5 rounded-2xl border-2 border-border bg-background/70 backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-foreground text-sm sm:text-base appearance-none cursor-pointer"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="">All Languages</option>
              <option value="python">Python</option>
              <option value="typescript">TypeScript</option>
              <option value="javascript">JavaScript</option>
              <option value="go">Go</option>
              <option value="rust">Rust</option>
              <option value="csharp">C#</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
              <option value="ruby">Ruby</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>
      
      {/* Quick Filter Tags - Enhanced Mobile Layout */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
        <Badge 
          variant="secondary" 
          className={`px-3 sm:px-4 py-1.5 sm:py-2 cursor-pointer transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium rounded-xl border white-card ${
            showOfficial 
              ? '!bg-amber-100 dark:!bg-amber-900/30 !text-amber-700 dark:!text-amber-400 !border-amber-200 dark:!border-amber-700/50 shadow-sm' 
              : 'hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-600 dark:hover:text-amber-400'
          }`}
          onClick={() => toggleQuickFilter('official')}
        >
          <Award className="h-3 w-3 sm:h-4 sm:w-4" />
          Official
        </Badge>
        <Badge 
          variant="secondary" 
          className={`px-3 sm:px-4 py-1.5 sm:py-2 cursor-pointer transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium rounded-xl border white-card ${
            showPopular 
              ? '!bg-red-100 dark:!bg-red-900/30 !text-red-700 dark:!text-red-400 !border-red-200 dark:!border-red-700/50 shadow-sm' 
              : 'hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400'
          }`}
          onClick={() => toggleQuickFilter('popular')}
        >
          <Flame className="h-3 w-3 sm:h-4 sm:w-4" />
          Popular
        </Badge>
        <Badge 
          variant="secondary" 
          className={`px-3 sm:px-4 py-1.5 sm:py-2 cursor-pointer transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium rounded-xl border white-card ${
            showRecent 
              ? '!bg-green-100 dark:!bg-green-900/30 !text-green-700 dark:!text-green-400 !border-green-200 dark:!border-green-700/50 shadow-sm' 
              : 'hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400'
          }`}
          onClick={() => toggleQuickFilter('recent')}
        >
          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">Recently Updated</span>
          <span className="sm:hidden">Recent</span>
        </Badge>
      </div>

      {/* Results Info - Enhanced Mobile Layout */}
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="text-xs sm:text-sm text-gray-600 font-medium">
          <span className="inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Showing <span className="font-bold text-gray-900">{filteredServers.length}</span> of <span className="font-bold text-gray-900">{servers.length}</span> servers
          </span>
          {searchQuery && (
            <span className="block sm:inline sm:ml-2 text-purple-600 mt-1 sm:mt-0">
              for &quot;<span className="font-semibold">{searchQuery}</span>&quot;
            </span>
          )}
        </div>
        
        {(searchQuery || selectedCategory || selectedLanguage || showOfficial || showPopular || showRecent) && (
          <button
            onClick={() => {
              setSearchQuery('');
              setDebouncedSearchQuery('');
              setSelectedCategory('');
              setSelectedLanguage('');
              setShowOfficial(false);
              setShowPopular(false);
              setShowRecent(false);
            }}
            className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>
    </div>
  )
}