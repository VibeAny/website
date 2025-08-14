const fs = require('fs');
const path = require('path');

// Define your static pages
const STATIC_PAGES = [
  '',                    // Homepage 
  '/mcp-hub',           // MCP Hub page
  '/remote-mcp',        // Remote MCP page
];

// Define supported locales
const LOCALES = ['en', 'zh'];

function generateSiteMap() {
  const baseUrl = 'https://vibemcp.net';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${STATIC_PAGES
  .map((page) => {
    return LOCALES
      .map((locale) => {
        const url = locale === 'en' ? `${baseUrl}${page}` : `${baseUrl}/${locale}${page}`;
        const alternateUrls = LOCALES
          .filter(l => l !== locale)
          .map(l => {
            const altUrl = l === 'en' ? `${baseUrl}${page}` : `${baseUrl}/${l}${page}`;
            return `    <xhtml:link rel="alternate" hreflang="${l}" href="${altUrl}" />`;
          })
          .join('\n');

        let priority = '0.7';
        if (page === '') priority = '1.0';
        else if (page === '/mcp-hub') priority = '0.9';
        else if (page === '/remote-mcp') priority = '0.8';
        
        let changeFreq = 'weekly';
        if (page === '/mcp-hub') changeFreq = 'daily';
        
        return `  <url>
    <loc>${url}</loc>
${alternateUrls}
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
      })
      .join('\n');
  })
  .join('\n')}
</urlset>`;

  return sitemap;
}

// Generate and write sitemap
const sitemap = generateSiteMap();
const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.writeFileSync(publicPath, sitemap);
console.log('✅ Sitemap generated successfully at:', publicPath);