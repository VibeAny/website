'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, GitBranch, Database, ExternalLink, Award, Flame, Search, Eye, Github } from "lucide-react"
import Link from 'next/link'
import { McpServer } from '@/lib/mcp-data'
import { languageIcons, languageLabels, platformIcons, platformLabels } from '@/lib/icons'
import { formatGitHubNumber } from '@/lib/format'

interface McpServerGridProps {
  servers: McpServer[]
  showAll?: boolean
}

export function McpServerGrid({ servers, showAll = false }: McpServerGridProps) {
  const displayServers = servers

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayServers.map((server, index) => (
        <div key={server.id} className="fade-in" style={{animationDelay: `${0.05 * (index + 1)}s`}}>
          <Card className="white-card border-0 hover-lift h-full group bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 ring-2 ring-gray-100 group-hover:ring-purple-200">
                  {server.repository.avatar ? (
                    <img 
                      src={server.repository.avatar} 
                      alt={`${server.repository.owner} avatar`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to generic database icon on error
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-icon')) {
                          const fallbackIcon = document.createElement('div');
                          fallbackIcon.className = 'fallback-icon w-full h-full neumorphism rounded-2xl flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100';
                          fallbackIcon.innerHTML = '<svg class="h-7 w-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 1.79 4 4 4h8c0-2.21-1.79-4-4-4H4V7z"></path></svg>';
                          parent.appendChild(fallbackIcon);
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full neumorphism rounded-2xl flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                      <Database className="h-7 w-7 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  {server.status.isOfficial && (
                    <Badge className="bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-700 border-amber-200/50 px-3 py-1.5 text-xs flex items-center gap-1 shadow-sm font-medium">
                      <Award className="h-3 w-3" />
                      Official
                    </Badge>
                  )}
                  {server.metrics.popularity.stars > 50 && (
                    <Badge className="bg-gradient-to-r from-orange-50 to-red-50 text-red-700 border-red-200/50 px-3 py-1.5 text-xs flex items-center gap-1 shadow-sm font-medium">
                      <Flame className="h-3 w-3" />
                      Popular
                    </Badge>
                  )}
                </div>
              </div>
              <CardTitle className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent line-clamp-2 group-hover:from-purple-900 group-hover:to-blue-900 transition-all">
                {server.name}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 line-clamp-3 min-h-[4.5rem] leading-relaxed">
                {server.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex-1">
              <div className="space-y-3 h-full flex flex-col">
                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs px-3 py-1 capitalize border-gray-200 text-gray-600 bg-gray-50/50 font-medium">
                    {server.category.replace('-', ' ')}
                  </Badge>
                </div>

                {/* Language & Platform Tags */}
                <div className="flex flex-wrap gap-1.5 min-h-[2rem]">
                  {server.languages.slice(0, 2).map(lang => {
                    const IconComponent = languageIcons[lang as keyof typeof languageIcons];
                    return (
                      <Badge key={lang} variant="secondary" className="text-xs px-3 py-1.5 flex items-center gap-1.5 bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-200/50 font-medium">
                        {IconComponent && <IconComponent className="h-3 w-3" />}
                        {languageLabels[lang] || lang}
                      </Badge>
                    );
                  })}
                  {server.platforms.slice(0, 1).map(platform => {
                    const IconComponent = platformIcons[platform as keyof typeof platformIcons];
                    return (
                      <Badge key={platform} variant="outline" className="text-xs px-3 py-1.5 flex items-center gap-1.5 border-blue-200 text-blue-700 bg-blue-50/50 font-medium">
                        {IconComponent && <IconComponent className="h-3 w-3" />}
                        {platformLabels[platform] || platform}
                      </Badge>
                    );
                  })}
                </div>
                
                {/* GitHub Stats - Enhanced with Watchers */}
                <div className="flex items-center justify-between py-3 px-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100">
                        <Star className="h-3.5 w-3.5 text-yellow-600 fill-current" />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{formatGitHubNumber(server.metrics.popularity.stars)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
                        <GitBranch className="h-3.5 w-3.5 text-blue-600" />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{formatGitHubNumber(server.repository.forks || 0)}</span>
                    </div>
                    {server.repository.watchers && server.repository.watchers > 0 && (
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                          <Eye className="h-3.5 w-3.5 text-green-600" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{formatGitHubNumber(server.repository.watchers)}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <Github className="h-4 w-4 text-gray-600" />
                  </div>
                </div>
                
                {/* Action Buttons - Enhanced */}
                <div className="flex items-center gap-2 pt-2 mt-auto">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-medium" asChild>
                    <Link href={server.repository.url} target="_blank" rel="noopener noreferrer">
                      View Repository
                    </Link>
                  </Button>
                  {server.documentation.website && (
                    <Button size="sm" variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" asChild>
                      <Link href={server.documentation.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}