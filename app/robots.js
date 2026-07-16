export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://sie.iitm.ac.in/sitemap.xml',
  };
}
