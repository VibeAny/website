const fs = require('fs');
const path = require('path');

function validateSitemapXML() {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ Sitemap file not found:', sitemapPath);
    return false;
  }
  
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  
  // Basic XML structure validation
  const checks = [
    {
      name: 'XML Declaration',
      test: content.includes('<?xml version="1.0" encoding="UTF-8"?>'),
      error: 'Missing or incorrect XML declaration'
    },
    {
      name: 'urlset namespace',
      test: content.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'),
      error: 'Missing or incorrect sitemap namespace'
    },
    {
      name: 'Priority format',
      test: !content.includes('<priority>"') && !content.includes('"</priority>'),
      error: 'Priority values should not contain quotes'
    },
    {
      name: 'Homepage URL',
      test: content.includes('<loc>https://vibemcp.net</loc>'),
      error: 'Homepage URL missing'
    },
    {
      name: 'MCP Hub URL',
      test: content.includes('<loc>https://vibemcp.net/mcp-hub</loc>'),
      error: 'MCP Hub URL missing'
    },
    {
      name: 'Remote MCP URL',
      test: content.includes('<loc>https://vibemcp.net/remote-mcp</loc>'),
      error: 'Remote MCP URL missing'
    }
  ];
  
  let allPassed = true;
  
  console.log('🔍 Validating sitemap.xml...\n');
  
  checks.forEach(check => {
    if (check.test) {
      console.log(`✅ ${check.name}: PASS`);
    } else {
      console.log(`❌ ${check.name}: FAIL - ${check.error}`);
      allPassed = false;
    }
  });
  
  console.log('\n📊 Sitemap Statistics:');
  const urlCount = (content.match(/<url>/g) || []).length;
  console.log(`   - Total URLs: ${urlCount}`);
  console.log(`   - File size: ${(content.length / 1024).toFixed(2)} KB`);
  
  if (allPassed) {
    console.log('\n🎉 Sitemap validation PASSED! Google should be able to parse this correctly.');
  } else {
    console.log('\n💥 Sitemap validation FAILED! Please fix the issues above.');
  }
  
  return allPassed;
}

// Run validation
const isValid = validateSitemapXML();
process.exit(isValid ? 0 : 1);