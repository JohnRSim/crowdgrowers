//import posts from "./blog/_posts.js";


const posts = [{
    title:'test'
}];

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${posts
    .map(post => {
      return `
      <url>
        <loc>https://www.crowdgrowers.com/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>    
      `;
    })
    .join("")}
</urlset>`;

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/xml"
  });
  res.end(feed);
}