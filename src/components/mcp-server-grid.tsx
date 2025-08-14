'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, GitBranch, Database, Search, Eye, Award, Flame } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import { McpServer } from '@/lib/mcp-data'
import { languageIcons, languageLabels, platformIcons, platformLabels } from '@/lib/icons'
import { formatGitHubNumber } from '@/lib/format'
import { useMemo, useRef } from 'react'

interface McpServerGridProps {
  servers: McpServer[]
  newlyLoadedCount?: number
  startIndex?: number
}

export function McpServerGrid({ servers, newlyLoadedCount = 0, startIndex = 0 }: McpServerGridProps) {
  const displayServers = servers
  
  // Track which items have been animated to prevent re-animation
  const animatedItemsRef = useRef(new Set<string>())
  
  // Memoize the server data with animation states to prevent unnecessary re-renders
  const serverData = useMemo(() => {
    const isInitialLoad = startIndex === 0 && animatedItemsRef.current.size === 0
    
    return displayServers.map((server, index) => {
      const serverId = server.id
      const hasBeenAnimated = animatedItemsRef.current.has(serverId)
      
      // Determine if this is a newly loaded item
      const isNewlyLoaded = newlyLoadedCount > 0 && index >= (servers.length - newlyLoadedCount) && !hasBeenAnimated
      
      let animationClass = 'fade-in'
      let animationDelay = '0s'
      
      if (isInitialLoad && !hasBeenAnimated) {
        animationClass = 'fade-in initial-load'
        animationDelay = `${0.03 * (index + 1)}s`
        animatedItemsRef.current.add(serverId)
      } else if (isNewlyLoaded) {
        animationClass = 'fade-in lazy-load'
        animationDelay = '0s'
        animatedItemsRef.current.add(serverId)
      } else {
        // Already animated items get stable, non-animated state
        animationClass = 'fade-in-complete'
        animationDelay = '0s'
      }
      
      return {
        server,
        animationClass,
        animationDelay,
      }
    })
  }, [servers, newlyLoadedCount, startIndex])

  if (servers.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-inner">
            <div className="relative">
              <Database className="h-16 w-16 text-gray-300" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                <Search className="h-3 w-3 text-gray-400" />
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-700">No servers found</h3>
          <p className="text-gray-500 leading-relaxed mb-6">
            We couldn&apos;t find any MCP servers matching your criteria. 
            <br />
            Try adjusting your search terms or filters.
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-sm text-gray-400">
            <span>💡 Try searching for:</span>
            <code className="px-2 py-1 bg-gray-100 rounded text-gray-600">&quot;database&quot;</code>
            <code className="px-2 py-1 bg-gray-100 rounded text-gray-600">&quot;python&quot;</code>
            <code className="px-2 py-1 bg-gray-100 rounded text-gray-600">&quot;cloud&quot;</code>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {serverData.map(({ server, animationClass, animationDelay }) => (
        <div 
          key={server.id} 
          className={animationClass} 
          style={{ animationDelay }}
        >
          <Card className="white-card border-0 hover-lift h-full group transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 ring-2 ring-border group-hover:ring-primary/30">
                  {server.repository.avatar ? (
                    <Image 
                      src={server.repository.avatar} 
                      alt={`${server.repository.owner} avatar`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to generic database icon on error
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-icon')) {
                          const fallbackIcon = document.createElement('div');
                          fallbackIcon.className = 'fallback-icon w-full h-full neumorphism rounded-2xl flex items-center justify-center bg-muted';
                          fallbackIcon.innerHTML = '<svg class="h-7 w-7 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 1.79 4 4 4h8c0-2.21-1.79-4-4-4H4V7z"></path></svg>';
                          parent.appendChild(fallbackIcon);
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full neumorphism rounded-2xl flex items-center justify-center bg-muted">
                      <Database className="h-7 w-7 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  {server.metadata?.isOfficial && (
                    <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-700/50 px-3 py-1.5 text-xs flex items-center gap-1 shadow-sm font-medium">
                      <Award className="h-3 w-3" />
                      Official
                    </Badge>
                  )}
                  {server.repository.stars > 50 && (
                    <Badge className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-700/50 px-3 py-1.5 text-xs flex items-center gap-1 shadow-sm font-medium">
                      <Flame className="h-3 w-3" />
                      Popular
                    </Badge>
                  )}
                </div>
              </div>
              <CardTitle className="text-lg font-bold text-gradient line-clamp-2">
                {server.name}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground line-clamp-3 min-h-[4.5rem] leading-relaxed">
                {server.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex-1">
              <div className="space-y-3 h-full flex flex-col">
                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs px-3 py-1 capitalize border-border text-muted-foreground bg-muted/30 font-medium">
                    {server.category.replace('-', ' ')}
                  </Badge>
                </div>

                {/* Language & Platform Tags */}
                <div className="flex flex-wrap gap-1.5 min-h-[2rem]">
                  {(server.metadata?.languages || []).slice(0, 2).map(lang => {
                    const IconComponent = languageIcons[lang as keyof typeof languageIcons];
                    return (
                      <Badge key={lang} variant="secondary" className="text-xs px-3 py-1.5 flex items-center gap-1.5 bg-primary/10 text-primary border-primary/20 font-medium">
                        {IconComponent && <IconComponent className="h-3 w-3" />}
                        {languageLabels[lang] || lang}
                      </Badge>
                    );
                  })}
                  {(server.metadata?.platforms || []).slice(0, 1).map(platform => {
                    const IconComponent = platformIcons[platform as keyof typeof platformIcons];
                    return (
                      <Badge key={platform} variant="outline" className="text-xs px-3 py-1.5 flex items-center gap-1.5 border-border text-muted-foreground bg-muted/30 font-medium">
                        {IconComponent && <IconComponent className="h-3 w-3" />}
                        {platformLabels[platform] || platform}
                      </Badge>
                    );
                  })}
                </div>
                
                {/* GitHub Stats - Enhanced with Watchers */}
                <div className="flex items-center justify-between py-3 px-4 bg-muted/50 rounded-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                        <Star className="h-3.5 w-3.5 text-yellow-600 dark:text-yellow-400 fill-current" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{formatGitHubNumber(server.repository.stars)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <GitBranch className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{formatGitHubNumber(server.repository.forks || 0)}</span>
                    </div>
                    {server.repository.watchers && server.repository.watchers > 0 && (
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30">
                          <Eye className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">{formatGitHubNumber(server.repository.watchers)}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Action Buttons - Enhanced Mobile */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2 mt-auto">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-sm" asChild>
                    <Link href={server.repository.url} target="_blank" rel="noopener noreferrer">
                      View Repository
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}