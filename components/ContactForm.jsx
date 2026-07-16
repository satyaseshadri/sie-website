'use client';
import { useState } from 'react';
import site from '../data/site.json';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error('failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4">
      <p className="font-display text-xl font-bold text-navy">Send a message</p>
      <input type="hidden" name="_subject" value="New message from sie.iitm.ac.in" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div>
        <label htmlFor="cf-name" className="mb-1 block text-sm font-semibold text-navy">Name</label>
        <input id="cf-name" name="name" type="text" required className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="cf-email" className="mb-1 block text-sm font-semibold text-navy">Email</label>
        <input id="cf-email" name="email" type="email" required className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="cf-topic" className="mb-1 block text-sm font-semibold text-navy">I'm writing about</label>
        <select id="cf-topic" name="topic" className="w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
          <option>Admissions (MS / PhD)</option>
          <option>Founder fellowships (UG-FIR / PG-FIR)</option>
          <option>Nirmaan pre-incubation</option>
          <option>Mentoring</option>
          <option>Sponsorship / partnership</option>
          <option>Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1 block text-sm font-semibold text-navy">Message</label>
        <textarea id="cf-message" name="message" rows={5} required className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" placeholder="Write your message…" />
      </div>
      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'sent' && <p className="text-sm font-semibold text-brand-green" role="status">Message sent — we'll get back to you soon.</p>}
      {status === 'error' && (
        <p className="text-sm text-brand-red" role="alert">
          Couldn't send right now. Email us directly at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  );
}
