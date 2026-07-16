/**
 * Startup feed bot.
 * Scans Google News RSS for each startup in data/nirmaan-startups.json,
 * keeps milestone-looking stories, and writes data/startup-feed.json.
 * Run: node scripts/update-feed.js  (no dependencies required)
 * Scheduled daily by .github/workflows/feed.yml — each update triggers a site rebuild.
 */
const fs = require('fs');
const path = require('path');

const STARTUPS = require('../data/nirmaan-startups.json');
const OUT = path.join(__dirname, '..', 'data', 'startup-feed.json');

const MILESTONE_WORDS =
  /rais(e|es|ed|ing)|fund(ing|ed)|series [a-c]|seed|crore|million|acqui|launch|wins?|won|award|patent|partner|expand|pilot|contract|mou|ipo|valuation|incubat|accelerat|selected|grant/i;

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const https = require('https');
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (SIE feed bot)' } }, (res) => {
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
  const items = [];
  const blocks = xml.split('<item>').slice(1);
  for (const b of blocks) {
    const get = (tag) => {
      const m = b.match(new RegExp(`<${tag}[^>]*>(.*?)</${tag}>`, 's'));
      return m ? decode(m[1]) : '';
    };
    items.push({ title: get('title'), link: get('link'), date: get('pubDate'), source: get('source') });
  }
  return items;
}

async function main() {
  const all = [];
  for (const name of STARTUPS) {
    const q = encodeURIComponent(`"${name}" (IIT Madras OR startup)`);
    const url = `https://news.google.com/rss/search?q=${q}&hl=en-IN&gl=IN&ceid=IN:en`;
    try {
      const xml = await fetchText(url);
      const items = parseRss(xml)
        .filter((i) => i.title && MILESTONE_WORDS.test(i.title))
        .slice(0, 2)
        .map((i) => ({
          startup: name,
          title: i.title.replace(/ - [^-]+$/, ''),
          link: i.link,
          date: i.date ? new Date(i.date).toISOString().slice(0, 10) : '',
          source: i.source || 'Google News',
        }));
      all.push(...items);
      await new Promise((r) => setTimeout(r, 400));
    } catch (e) {
      console.error(`skip ${name}: ${e.message}`);
    }
  }
  all.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const seen = new Set();
  const items = all.filter((i) => {
    const k = i.title.toLowerCase().slice(0, 60);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  }).slice(0, 20);

  if (items.length === 0) {
    console.log('No items found — keeping existing feed.');
    return;
  }
  fs.writeFileSync(OUT, JSON.stringify({ updated: new Date().toISOString(), items }, null, 2));
  console.log(`Wrote ${items.length} items to startup-feed.json`);
}

main();
