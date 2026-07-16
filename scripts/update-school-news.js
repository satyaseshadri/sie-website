/**
 * School news bot.
 * Scans Google News RSS for IIT Madras innovation & entrepreneurship coverage
 * (SIE, Nirmaan, CFI, incubation, E-Summit, Delta Expo, Research Park) and
 * writes data/school-news-feed.json. Shown on the News page as an auto-updated feed.
 * Run: node scripts/update-school-news.js — scheduled daily by .github/workflows/feed.yml.
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'data', 'school-news-feed.json');

const QUERIES = [
  '"IIT Madras" "School of Innovation and Entrepreneurship"',
  '"IIT Madras" Nirmaan pre-incubator',
  '"IIT Madras" "Centre for Innovation" CFI students',
  '"IIT Madras" incubation startup deep-tech',
  '"IIT Madras" "E-Summit" OR "Delta Expo" OR "Research Park" startup',
];

const RELEVANT =
  /startup|incubat|entrepreneur|venture|innovation|fund|accelerat|e-summit|expo|deep.?tech|pre-incubat|hackathon|patent|mou/i;

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const https = require('https');
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (SIE news bot)' } }, (res) => {
        if (res.statusCode >= 300 && res.headers.location) return resolve(fetchText(res.headers.location));
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => resolve(data));
      })
      .on('error', reject);
  });
}

function decode(s) {
  return s
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .trim();
}

function parseRss(xml) {
  return xml.split('<item>').slice(1).map((b) => {
    const get = (tag) => {
      const m = b.match(new RegExp(`<${tag}[^>]*>(.*?)</${tag}>`, 's'));
      return m ? decode(m[1]) : '';
    };
    return { title: get('title'), link: get('link'), date: get('pubDate'), source: get('source') };
  });
}

async function main() {
  const all = [];
  for (const q of QUERIES) {
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-IN&gl=IN&ceid=IN:en`;
    try {
      const items = parseRss(await fetchText(url))
        .filter((i) => i.title && RELEVANT.test(i.title) && /iit|madras|iitm/i.test(i.title))
        .slice(0, 6)
        .map((i) => ({
          title: i.title.replace(/ - [^-]+$/, ''),
          link: i.link,
          date: i.date ? new Date(i.date).toISOString().slice(0, 10) : '',
          source: i.source || 'Google News',
        }));
      all.push(...items);
      await new Promise((r) => setTimeout(r, 400));
    } catch (e) {
      console.error(`skip query: ${e.message}`);
    }
  }
  all.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const seen = new Set();
  const items = all.filter((i) => {
    const k = i.title.toLowerCase().slice(0, 60);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  }).slice(0, 15);

  if (items.length === 0) {
    console.log('No items found — keeping existing feed.');
    return;
  }
  fs.writeFileSync(OUT, JSON.stringify({ updated: new Date().toISOString(), items }, null, 2));
  console.log(`Wrote ${items.length} items to school-news-feed.json`);
}

main();
