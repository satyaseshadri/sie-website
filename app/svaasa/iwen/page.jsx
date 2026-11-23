'use client';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function IwenAwardPage() {
  return (
    <iframe
      title="National I-WEN MSME Award 2026"
      src={`${prefix}/svaasa/iwen-award.html`}
      className="fixed inset-0 z-[60] h-screen w-screen border-0 bg-white"
    />
  );
}
