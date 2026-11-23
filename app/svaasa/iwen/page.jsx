'use client';

import SvaasaFrame from '../../../components/SvaasaFrame';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function IwenAwardPage() {
  return (
    <SvaasaFrame
      title="National I-WEN MSME Award 2026"
      file={`${prefix}/svaasa/iwen-award.html`}
    />
  );
}
