'use client';
import { useEffect, useState } from 'react';

const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || '';

const SEEN_KEY = 'mc2plus-poster-seen';

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
      aria-label="MC²⁺ Ignite accelerator poster"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 p-4 sm:p-8"
      onClick={() => setOpen(false)}
    >
      <div className="relative max-h-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close poster"
          className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-navy shadow-lg transition hover:bg-accent hover:text-white"
        >
          ✕
        </button>
        <a href="https://app.mc2plus.in/ext/form/24027/1/apply" rel="noopener" target="_blank">
          <img
            src={`${PREFIX}/images/mc2plus-poster.png`}
            alt="MC²⁺ Ignite — India's flagship energy innovation accelerator. Applications open, last date 31 August 2026. Click to apply."
            className="max-h-[88vh] w-auto rounded-xl shadow-2xl"
          />
        </a>
      </div>
    </div>
  );
}
