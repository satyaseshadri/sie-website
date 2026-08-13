'use client';
import { useEffect, useState } from 'react';

const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || '';

const SEEN_KEY = 'posters-seen-v2';

const POSTERS = [
  {
    href: 'https://www.venturearch.org/tech-pioneer-grant-2026',
    src: '/images/tech-pioneer-poster.png',
    alt: 'Tech Pioneer Grant 2026 — applications open until 27th August. Click to apply.',
  },
  {
    href: 'https://app.mc2plus.in/ext/form/24027/1/apply?source=IIT%20Madras&medium=NIL',
    src: '/images/mc2plus-poster.png',
    alt: "MC²⁺ Ignite — India's flagship energy innovation accelerator. Applications open, last date 31 August 2026. Click to apply.",
  },
];

export default function PosterModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(SEEN_KEY)) {
      sessionStorage.setItem(SEEN_KEY, '1');
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Open grant and accelerator posters"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 p-4 sm:p-8"
      onClick={() => setOpen(false)}
    >
      <div className="relative max-h-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close posters"
          className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-navy shadow-lg transition hover:bg-accent hover:text-white"
        >
          ✕
        </button>
        <div className="flex max-h-[85vh] flex-col items-center gap-4 overflow-y-auto sm:flex-row sm:items-start sm:overflow-visible">
          {POSTERS.map((p) => (
            <a key={p.src} href={p.href} rel="noopener" target="_blank" className="block flex-shrink-0">
              <img
                src={`${PREFIX}${p.src}`}
                alt={p.alt}
                className="max-h-[70vh] w-auto rounded-xl shadow-2xl sm:max-h-[75vh]"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
