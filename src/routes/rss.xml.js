//https://github.com/sveltejs/hn.svelte.dev/blob/68cbd8b497e73454de342aebd87195e0ac62cfbb/src/routes/%5Blist%5D/rss.js
//import posts from "./blog/_posts.js";
const posts = [{
    title:'New feed sample'
}];

const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>CrowdGrowers</title>
  <description>Helping to combat food waste</description>
  <link>https://www.crowdgrowers.com</link>
  ${posts
    .map(post => {
      return `
        <item>
          <title>${post.title}</title>
          <description>Helping to combat food waste</description>
          <link>https://www.crowdgrowers.com</link>
          <pubDate>${new Date().toUTCString()}</pubDate>
        </item>
      `;
    })
    .join("")}
</channel>
</rss>`;

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/rss+xml"
  });
  res.end(feed);
}