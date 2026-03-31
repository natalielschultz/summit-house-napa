/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.aframeofnapa.com',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  generateIndexSitemap: false,
  exclude: ['/terms-and-conditions'],
  transform: async (config, path) => {
    const priorityMap = {
      '/': 1.0,
      '/property': 0.9,
      '/availability': 0.9,
      '/experience': 0.8,
      '/location': 0.8,
      '/about': 0.8,
      '/reviews': 0.8,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorityMap[path] ?? config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
module.exports = config;
