'use client';

import { useLayoutEffect, useState } from 'react';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
const file = `${prefix}/svaasa/svaasa.html`;

export default function SvaasaPage() {
  const [src, setSrc] = useState('');

  useLayoutEffect(() => {
    setSrc(`${file}${window.location.hash || ''}`);
  }, []);

  if (!src) return <div className="fixed inset-0 z-[60] bg-white" />;

  return (
    <iframe
      title="SVAASA"
      src={src}
      className="fixed inset-0 z-[60] h-screen w-screen border-0 bg-white"
    />
  );
}
