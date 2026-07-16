import programs from '../data/programs.json';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://sie.iitm.ac.in';
  const staticRoutes = ['', '/about', '/programs', '/ecosystem', '/studios', '/startups', '/open-calls', '/people', '/news', '/awards', '/contact'];
  return [
    ...staticRoutes.map((r) => ({ url: `${base}${r}/`, changeFrequency: 'monthly', priority: r === '' ? 1 : 0.7 })),
    ...programs.map((p) => ({ url: `${base}/programs/${p.slug}/`, changeFrequency: 'monthly', priority: 0.8 })),
  ];
}
