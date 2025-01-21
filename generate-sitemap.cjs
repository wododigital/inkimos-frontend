const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

const BASE_URL = 'https://inkimos.com';

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: BASE_URL });

  // Static routes from your React app
  const staticRoutes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/our-services', changefreq: 'monthly', priority: 0.8 },
    { url: '/careers', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/our-services/artificial-intelligence', changefreq: 'monthly', priority: 0.7 },
    { url: '/our-services/business-process-outsourcing', changefreq: 'monthly', priority: 0.7 },
    { url: '/our-services/cloud-computing', changefreq: 'monthly', priority: 0.7 },
    { url: '/our-services/digital-transformation', changefreq: 'monthly', priority: 0.7 },
    { url: '/our-services/custom-software', changefreq: 'monthly', priority: 0.7 },
    { url: '/our-services/managed-services-it-support', changefreq: 'monthly', priority: 0.7 },
    { url: '/terms-and-conditions', changefreq: 'monthly', priority: 0.7 },
    { url: '/privacy-policy', changefreq: 'monthly', priority: 0.7 },
    { url: '/industry-expertise', changefreq: 'monthly', priority: 0.7 },
    { url: '/thanks', changefreq: 'monthly', priority: 0.7 },
  ];

  try {
    // Write static routes to the sitemap
    for (const route of staticRoutes) {
      sitemapStream.write(route);
    }

    sitemapStream.end();

    const sitemapOutput = await streamToPromise(sitemapStream);
    fs.writeFileSync('./public/sitemap.xml', sitemapOutput.toString());

    console.log('Sitemap generated successfully!');
  } catch (err) {
    console.error('Error generating sitemap:', err);
  }
}

generateSitemap();
