import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vibemcp.net'
  const currentDate = new Date()
  const languages = ['en', 'zh', 'ja', 'fr', 'ko']

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]

  // Add all language versions of main pages
  languages.forEach(lang => {
    sitemapEntries.push(
      {
        url: `${baseUrl}/${lang}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${lang}/mcp-hub`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/${lang}/remote-mcp`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/${lang}/private-mcp`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6,
      }
    )
  })

  return sitemapEntries
}