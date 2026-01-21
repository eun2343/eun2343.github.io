import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your routes and their metadata
const routes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/en', priority: '1.0', changefreq: 'weekly' },
  { url: '/de', priority: '1.0', changefreq: 'weekly' },
  { url: '/en/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/de/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/en/treatment', priority: '0.9', changefreq: 'weekly' },
  { url: '/de/treatment', priority: '0.9', changefreq: 'weekly' },
  { url: '/en/book-appointment', priority: '0.9', changefreq: 'daily' },
  { url: '/de/book-appointment', priority: '0.9', changefreq: 'daily' },
  { url: '/en/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/de/contact', priority: '0.7', changefreq: 'monthly' }
];

// Your website's base URL
const baseUrl = 'https://www.choi-tcm.com';

function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemapContent += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemapContent += `
</urlset>`;

  // Write sitemap to dist/client directory
  const distDir = path.join(path.dirname(__dirname), 'dist', 'client');
  const sitemapPath = path.join(distDir, 'sitemap.xml');
  
  // Ensure directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log(`✓ Sitemap generated: ${sitemapPath}`);
}

// Run the function
generateSitemap();