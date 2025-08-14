import { GetServerSideProps } from 'next';

// Define your static pages
const STATIC_PAGES = [
  '',                    // Homepage 
  '/mcp-hub',           // MCP Hub page
  '/remote-mcp',        // Remote MCP page
];

// Define supported locales
const LOCALES = ['en', 'zh'];

function generateSiteMap(pages: string[], locales: string[]) {
  const baseUrl = 'https://vibemcp.net';
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
  .map((page) => {
    return locales
      .map((locale) => {
        const url = locale === 'en' ? `${baseUrl}${page}` : `${baseUrl}/${locale}${page}`;
        const alternateUrls = locales
          .filter(l => l !== locale)
          .map(l => {
            const altUrl = l === 'en' ? `${baseUrl}${page}` : `${baseUrl}/${l}${page}`;
            return `    <xhtml:link rel="alternate" hreflang="${l}" href="${altUrl}" />`;
          })
          .join('\n');

        // Determine priority based on page importance
        let priority = '0.7';
        if (page === '') priority = '1.0';  // Homepage
        else if (page === '/mcp-hub') priority = '0.9';  // Main feature page
        else if (page === '/remote-mcp') priority = '0.8';  // Secondary feature page
        
        // Determine change frequency
        let changeFreq = 'weekly';
        if (page === '/mcp-hub') changeFreq = 'daily';  // Database updates daily
        
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
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Generate the XML sitemap with the pages data
  const sitemap = generateSiteMap(STATIC_PAGES, LOCALES);

  res.setHeader('Content-Type', 'text/xml');
  // Cache for 24 hours
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  
  // Write the XML to the response
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;