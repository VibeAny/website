export interface McpServer {
  id: string
  name: string
  description: string
  repository: {
    url: string
    owner: string
    name: string
    stars: number
    forks: number
    issues: number
    watchers?: number  // 新增watchers字段
    lastUpdated: string
    defaultBranch: string
    avatar?: string
  }
  category: string
  tags: string[]
  languages: string[]
  platforms: string[]
  operatingSystems: string[]
  features: string[]
  installation: {
    npm?: string
    pip?: string
    manual?: string
  }
  documentation: {
    readme: string
    wiki?: string
    website?: string
  }
  status: {
    isOfficial: boolean
    isActive: boolean
    lastChecked: string
    healthStatus: string
  }
  metrics: {
    popularity: {
      stars: number
      watchers?: number  // 新增watchers字段
      downloads: number
      mentions: number
    }
    quality: {
      hasTests: boolean
      hasDocumentation: boolean
      hasLicense: boolean
      codeQuality: string
    }
  }
}

export interface McpCategory {
  name: string
  emoji: string
  icon?: string
  description: string
  serverCount: number
}

export interface McpDatabase {
  version: string
  lastUpdated: string
  metadata: {
    totalServers: number
    sourceRepository: string
    categories: string[]
    languages: string[]
    platforms: string[]
  }
  categories: Record<string, McpCategory>
  servers: McpServer[]
}

// Cache for the database
let databaseCache: McpDatabase | null = null

// Load database from file system (server-side only)
function loadDatabaseSync(): McpDatabase {
  if (databaseCache) {
    return databaseCache
  }
  
  try {
    // Only import fs on server side
    if (typeof window === 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const fs = require('fs')
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const path = require('path')
      const filePath = path.join(process.cwd(), 'public', 'mcp-servers-database.json')
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const database = JSON.parse(fileContent) as McpDatabase
      databaseCache = database
      return database
    } else {
      // Client side fallback
      return {
        version: '1.0.0',
        lastUpdated: new Date().toISOString(),
        metadata: {
          totalServers: 0,
          sourceRepository: 'https://github.com/punkpeye/awesome-mcp-servers',
          categories: [],
          languages: [],
          platforms: []
        },
        categories: {},
        servers: []
      }
    }
  } catch (error) {
    console.error('Failed to load MCP database:', error)
    // Return empty database as fallback
    return {
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      metadata: {
        totalServers: 0,
        sourceRepository: 'https://github.com/punkpeye/awesome-mcp-servers',
        categories: [],
        languages: [],
        platforms: []
      },
      categories: {},
      servers: []
    }
  }
}

export function getMcpDatabase(): McpDatabase {
  return loadDatabaseSync()
}

export function getMcpCategories(): McpCategory[] {
  const database = loadDatabaseSync()
  return Object.values(database.categories)
}

export function getMcpServers(): McpServer[] {
  const database = loadDatabaseSync()
  // Sort by popularity (stars) in descending order by default
  return database.servers.sort((a, b) => b.metrics.popularity.stars - a.metrics.popularity.stars)
}

export function getMcpServersByCategory(category: string): McpServer[] {
  const database = loadDatabaseSync()
  return database.servers
    .filter(server => server.category === category)
    .sort((a, b) => b.metrics.popularity.stars - a.metrics.popularity.stars)
}

export function searchMcpServers(query: string): McpServer[] {
  const database = loadDatabaseSync()
  const lowercaseQuery = query.toLowerCase()
  return database.servers
    .filter(server => 
      server.name.toLowerCase().includes(lowercaseQuery) ||
      server.description.toLowerCase().includes(lowercaseQuery) ||
      server.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
    .sort((a, b) => b.metrics.popularity.stars - a.metrics.popularity.stars)
}

export function filterMcpServers(filters: {
  category?: string
  language?: string
  platform?: string
  isOfficial?: boolean
}): McpServer[] {
  const database = loadDatabaseSync()
  return database.servers
    .filter(server => {
      if (filters.category && server.category !== filters.category) return false
      if (filters.language && !server.languages.includes(filters.language)) return false
      if (filters.platform && !server.platforms.includes(filters.platform)) return false
      if (filters.isOfficial !== undefined && server.status.isOfficial !== filters.isOfficial) return false
      return true
    })
    .sort((a, b) => b.metrics.popularity.stars - a.metrics.popularity.stars)
}

export function getMcpStatistics() {
  const database = loadDatabaseSync()
  const stats = {
    totalServers: database.metadata.totalServers,
    totalCategories: Object.keys(database.categories).length,
    totalLanguages: database.metadata.languages.length,
    lastUpdated: database.lastUpdated,
    topCategories: Object.entries(database.categories)
      .sort(([,a], [,b]) => b.serverCount - a.serverCount)
      .slice(0, 5)
      .map(([key, category]) => ({ key, ...category }))
  }
  
  return stats
}

// Language emoji mapping
export const languageEmojis: Record<string, string> = {
  python: '🐍',
  typescript: '📇',
  javascript: '📇', 
  go: '🏎️',
  rust: '🦀',
  csharp: '#️⃣',
  java: '☕',
  cpp: '🌊',
  ruby: '💎'
}

// Platform emoji mapping
export const platformEmojis: Record<string, string> = {
  cloud: '☁️',
  local: '🏠',
  embedded: '📟'
}

// OS emoji mapping  
export const osEmojis: Record<string, string> = {
  macos: '🍎',
  windows: '🪟',
  linux: '🐧'
}