'use client';

import { useLayoutEffect } from 'react';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
const file = `${prefix}/svaasa/svaasa.html`;

export default function SvaasaPage() {
  useLayoutEffect(() => {
    window.location.replace(`${file}${window.location.hash || ''}`);
  }, []);

  return <div className="fixed inset-0 z-[60] bg-white" />;
}
