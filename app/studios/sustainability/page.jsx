'use client';

import { useEffect } from 'react';

export default function SustainabilityStudio() {
  useEffect(() => {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
    window.location.replace(`${prefix}/svaasa/index.html`);
  }, []);

  return (
    <p className="px-6 py-16 text-center text-ink/70">
      Opening SVAASA programme details…
    </p>
  );
}
