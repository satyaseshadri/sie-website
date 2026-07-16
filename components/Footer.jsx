import Link from 'next/link';
import site from '../data/site.json';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-site grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-1 text-sm text-white/60">{site.hub} · {site.institute}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed">{site.tagline} {site.heroLine}</p>
          <a href={site.linkedin} className="mt-4 inline-block text-sm text-accent-light hover:underline" rel="noopener">LinkedIn ↗</a>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-white" href="/programs/">Programs</Link></li>
            <li><Link className="hover:text-white" href="/ecosystem/">Ecosystem</Link></li>
            <li><Link className="hover:text-white" href="/startups/">Startups</Link></li>
            <li><Link className="hover:text-white" href="/news/">News</Link></li>
            <li><Link className="hover:text-white" href="/contact/">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">Family</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white" href="https://nirmaan.iitm.ac.in" rel="noopener">Nirmaan — Pre-Incubator ↗</a></li>
            <li><a className="hover:text-white" href="https://cfi.iitm.ac.in" rel="noopener">Centre for Innovation ↗</a></li>
            <li><a className="hover:text-white" href="https://www.venturearch.org" rel="noopener">VentureArch — Venture Building Platform ↗</a></li>
            <li><a className="hover:text-white" href="https://www.iitm.ac.in" rel="noopener">IIT Madras ↗</a></li>
          </ul>
          <p className="mt-5 text-sm">{site.address}</p>
          <p className="mt-1 text-sm">{site.phone} · <a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} School of Innovation &amp; Entrepreneurship, IIT Madras. All rights reserved.
      </div>
    </footer>
  );
}
