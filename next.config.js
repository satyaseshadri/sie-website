/** @type {import('next').NextConfig} */

// BASE_PATH is set by the GitHub Pages workflow (e.g. "/sie-website").
// Leave unset for root-domain hosting (sie.iitm.ac.in).
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

module.exports = nextConfig;
