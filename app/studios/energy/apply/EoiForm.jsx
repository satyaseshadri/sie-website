'use client';
import { useState } from 'react';

const THEMES = [
  'A1 · Refinery decarbonisation',
  'A2 · Upstream / methane emissions',
  'A3 · Petrochemicals',
  'A4 · O&G digitalisation / AI / robotics',
  'A5 · Worker safety & HSE',
  'B1 · Green hydrogen & derivatives',
  'B2 · Battery storage & fuel cells',
  'B3 · EV ecosystem',
  'B4 · CCUS & biofuels',
  'B5 · Distributed energy & grid',
];

export default function EoiForm() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/support@sieiitm.org', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const input = 'w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm focus:border-[#C9961A] focus:outline-none focus:ring-1 focus:ring-[#C9961A]';
  const label = 'mb-1 block text-sm font-semibold text-[#1F3864]';

  return (
    <form onSubmit={onSubmit} className="sticky top-28 space-y-4 rounded-2xl border border-navy/10 bg-[#F4F4F6] p-6">
      <p className="font-display text-xl font-bold text-[#1F3864]">Register your interest</p>
      <p className="text-sm text-ink/60">
        The portal opens 1 August. Leave your details and we'll notify you when applications open.
      </p>
      <input type="hidden" name="_subject" value="MC2+ Ignite Cohort 1 — expression of interest" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div>
        <label htmlFor="eoi-name" className={label}>Founder name</label>
        <input id="eoi-name" name="founder" type="text" required className={input} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="eoi-company" className={label}>Company</label>
        <input id="eoi-company" name="company" type="text" required className={input} placeholder="Company name" />
      </div>
      <div>
        <label htmlFor="eoi-email" className={label}>Email</label>
        <input id="eoi-email" name="email" type="email" required className={input} placeholder="you@company.com" />
      </div>
      <div>
        <label htmlFor="eoi-theme" className={label}>Closest theme</label>
        <select id="eoi-theme" name="theme" className={`${input} bg-white`}>
          {THEMES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="eoi-trl" className={label}>Current stage</label>
        <select id="eoi-trl" name="trl" className={`${input} bg-white`}>
          <option>TRL 4 — validated in lab</option>
          <option>TRL 5 — validated in relevant environment</option>
          <option>TRL 6 — demonstrated in relevant environment</option>
          <option>TRL 7 — early customer pilot</option>
          <option>Other / not sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="eoi-line" className={label}>One line on what you're building</label>
        <textarea id="eoi-line" name="oneLiner" rows={3} required maxLength={240} className={input} placeholder="Max 240 characters" />
      </div>
      <button type="submit" disabled={status === 'sending'} className="w-full rounded-lg px-5 py-3 font-display text-sm font-semibold text-[#1a1a1a] disabled:opacity-60" style={{ backgroundColor: '#C9961A' }}>
        {status === 'sending' ? 'Sending…' : 'Notify me when applications open'}
      </button>
      {status === 'sent' && <p className="text-sm font-semibold text-brand-green" role="status">Registered — we'll email you on 1 August.</p>}
      {status === 'error' && <p className="text-sm text-brand-red" role="alert">Couldn't send. Email support@sieiitm.org instead.</p>}
    </form>
  );
}
