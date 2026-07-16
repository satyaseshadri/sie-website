'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from './Img';

const NAV = [
  { label: 'About', href: '/about/' },
  {
    label: 'Programs',
    href: '/programs/',
    children: [
      { label: 'MS (Entrepreneurship)', href: '/programs/ms/' },
      { label: 'PhD (Innovation & Entrepreneurship)', href: '/programs/phd/' },
      { label: 'UG Founder-in-Residence', href: '/programs/ugfir/' },
      { label: 'PG Founder-in-Residence', href: '/programs/pgfir/' },
      { label: 'Courses', href: '/programs/courses/' },
    ],
  },
  { label: 'Ecosystem', href: '/ecosystem/' },
  { label: 'Venture Studios', href: '/studios/' },
  { label: 'Startups', href: '/startups/' },
  { label: 'Open Calls', href: '/open-calls/' },
  { label: 'People', href: '/people/' },
  {
    label: 'News & Events',
    href: '/news/',
    children: [
      { label: 'News', href: '/news/' },
      { label: 'Events', href: '/events/' },
      { label: 'Awards', href: '/awards/' },
    ],
  },
  { label: 'Contact', href: '/contact/' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between gap-4 sm:h-24">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/sie-logo.png"
            alt="School of Innovation & Entrepreneurship, IIT Madras"
            width={640}
            height={201}
            priority
            className="h-12 w-auto sm:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link href={item.href} className="flex items-center gap-1 rounded-md px-2 py-2 text-[13px] font-medium text-navy/80 hover:bg-navy/5 hover:text-navy xl:px-2.5 xl:text-sm">
                  {item.label}
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </Link>
                <div className="invisible absolute left-0 top-full w-72 rounded-xl border border-navy/10 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} className="block rounded-lg px-3 py-2 text-sm text-navy/80 hover:bg-navy/5 hover:text-navy">
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="rounded-md px-2 py-2 text-[13px] font-medium text-navy/80 hover:bg-navy/5 hover:text-navy xl:px-2.5 xl:text-sm">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Image
            src="/images/iitm-seal.png"
            alt="IIT Madras"
            width={400}
            height={400}
            className="hidden h-14 w-14 md:block"
          />
          <button
            type="button"
            className="rounded-md p-2 text-navy hover:bg-navy/5 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-navy/10 bg-white lg:hidden" aria-label="Mobile">
          <div className="container-site flex flex-col py-3">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-2 py-3 text-left text-sm font-medium text-navy"
                    aria-expanded={expanded === item.label}
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg className={`h-3 w-3 transition ${expanded === item.label ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </button>
                  {expanded === item.label &&
                    item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block rounded-md py-2 pl-6 pr-2 text-sm text-navy/70" onClick={() => setOpen(false)}>
                        {c.label}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="rounded-md px-2 py-3 text-sm font-medium text-navy" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
