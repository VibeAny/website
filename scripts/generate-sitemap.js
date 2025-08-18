const fs = require('fs');
const path = require('path');

// Define your static pages based on actual Next.js routes
const STATIC_PAGES = [
  '',                    // Homepage (index.tsx)
  '/mcp-hub',           // MCP Hub page (mcp-hub.tsx)
  '/remote-mcp',        // Remote MCP page (remote-mcp.tsx)
];

function generateSiteMap() {
  const baseUrl = 'https://vibemcp.net';
  const currentDate = new Date().toISOString();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_PAGES
  .map((page) => {
    const url = `${baseUrl}${page}`;
    
    // Determine priority based on page importance
    let priority = 0.7;
    if (page === '') priority = 1.0;  // Homepage
    else if (page === '/mcp-hub') priority = 0.9;  // Main feature page
    else if (page === '/remote-mcp') priority = 0.8;  // Secondary feature page
    
    // Determine change frequency
    let changeFreq = 'weekly';
    if (page === '/mcp-hub') changeFreq = 'daily';  // Database updates daily
    
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
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
console.log('📄 Generated sitemap with', STATIC_PAGES.length, 'pages');