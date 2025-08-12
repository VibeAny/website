'use client'

import { useState, useMemo, useEffect } from 'react'
import { Search, Filter, Award, Flame, Clock, ChevronDown } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { McpServer, McpCategory } from '@/lib/mcp-data'
import { languageIcons, languageLabels } from '@/lib/icons'

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
        server.tags.some(tag => tag.toLowerCase().includes(debouncedSearchQuery.toLowerCase()))
      )
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(server => server.category === selectedCategory)
    }

    // Apply language filter
    if (selectedLanguage) {
      result = result.filter(server => server.languages.includes(selectedLanguage))
    }

    // Apply quick filters - since servers are already sorted by popularity by default,
    // we only need to re-sort if Popular is disabled or Recent is enabled
    if (showOfficial) {
      result = result.filter(server => server.status.isOfficial)
    }

    // Note: showPopular doesn't change sorting since servers are already sorted by popularity
    
    if (showRecent) {
      result = result.sort((a, b) => 
        new Date(b.repository.lastUpdated).getTime() - new Date(a.repository.lastUpdated).getTime()
      )
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
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 mb-12 shadow-xl shadow-purple-500/5 border border-white/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Search Bar */}
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 z-10 pointer-events-none" />
            <input
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-gray-100 bg-white/70 backdrop-blur-sm focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200/50 transition-all placeholder-gray-500 font-medium relative z-0"
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
              className="w-full pl-4 pr-10 py-3.5 rounded-2xl border-2 border-gray-100 bg-white/70 backdrop-blur-sm focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200/50 transition-all font-medium text-gray-700 appearance-none cursor-pointer"
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
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
        
        {/* Language Filter */}
        <div>
          <div className="relative">
            <select 
              className="w-full pl-4 pr-10 py-3.5 rounded-2xl border-2 border-gray-100 bg-white/70 backdrop-blur-sm focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200/50 transition-all font-medium text-gray-700 appearance-none cursor-pointer"
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
      
      {/* Quick Filter Tags - Enhanced */}
      <div className="flex flex-wrap gap-3 mt-8">
        <Badge 
          variant="secondary" 
          className={`px-4 py-2 cursor-pointer transition-all duration-300 flex items-center gap-2 text-sm font-medium rounded-xl border-2 ${
            showOfficial 
              ? 'bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-700 border-amber-200 shadow-md' 
              : 'bg-white/60 text-gray-600 border-gray-200 hover:bg-amber-50/50 hover:text-amber-600 hover:border-amber-200'
          }`}
          onClick={() => toggleQuickFilter('official')}
        >
          <Award className="h-4 w-4" />
          Official
        </Badge>
        <Badge 
          variant="secondary" 
          className={`px-4 py-2 cursor-pointer transition-all duration-300 flex items-center gap-2 text-sm font-medium rounded-xl border-2 ${
            showPopular 
              ? 'bg-gradient-to-r from-orange-50 to-red-50 text-red-700 border-red-200 shadow-md' 
              : 'bg-white/60 text-gray-600 border-gray-200 hover:bg-orange-50/50 hover:text-red-600 hover:border-red-200'
          }`}
          onClick={() => toggleQuickFilter('popular')}
        >
          <Flame className="h-4 w-4" />
          Popular
        </Badge>
        <Badge 
          variant="secondary" 
          className={`px-4 py-2 cursor-pointer transition-all duration-300 flex items-center gap-2 text-sm font-medium rounded-xl border-2 ${
            showRecent 
              ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200 shadow-md' 
              : 'bg-white/60 text-gray-600 border-gray-200 hover:bg-green-50/50 hover:text-green-600 hover:border-green-200'
          }`}
          onClick={() => toggleQuickFilter('recent')}
        >
          <Clock className="h-4 w-4" />
          Recently Updated
        </Badge>
      </div>

      {/* Results Info - Enhanced */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-600 font-medium">
          <span className="inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Showing <span className="font-bold text-gray-900">{filteredServers.length}</span> of <span className="font-bold text-gray-900">{servers.length}</span> servers
          </span>
          {searchQuery && (
            <span className="ml-2 text-purple-600">
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