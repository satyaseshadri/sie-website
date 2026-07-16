'use client';
import { useState } from 'react';
import startups from '../../data/startups.json';
import students from '../../data/students.json';
import feed from '../../data/startup-feed.json';

export default function StartupsClient() {
  const batches = ['All', ...new Set(students.map((s) => s.batch))];
  const [batch, setBatch] = useState('All');
  const shown = batch === 'All' ? students : students.filter((s) => s.batch === batch);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {startups.map((s) => (
          <div key={s.name} className="card">
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-display text-lg font-bold text-navy">{s.name}</p>
              <p className="font-display text-lg font-bold text-accent">{s.raised}</p>
            </div>
            <p className="mt-2 text-sm text-ink/60">{s.sector} · {s.round} · {s.year}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-ink/70">
        These ventures were pre-incubated at Nirmaan.{' '}
        <a href="https://nirmaan.iitm.ac.in/teams" target="_blank" rel="noopener" className="font-semibold text-accent hover:underline">
          Browse the full Nirmaan startup listing ↗
        </a>
      </p>

      <div className="mt-20">
        <p className="kicker">Startup feed</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy">Milestones from the ecosystem</h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          Public news about startups from the Nirmaan pipeline — refreshed automatically by a bot that scans
          news sources daily.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {feed.items.slice(0, 10).map((n, i) => (
            <a key={i} href={n.link} target="_blank" rel="noopener" className="card block py-4 hover:border-accent/50">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {n.startup}{n.date ? ` · ${new Date(n.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}` : ''}
              </p>
              <p className="mt-1 font-display font-semibold leading-snug text-navy">{n.title}</p>
              {n.source && <p className="mt-1 text-xs text-ink/50">{n.source} ↗</p>}
            </a>
          ))}
        </div>
        {feed.updated && (
          <p className="mt-4 text-xs text-ink/45">Last scanned: {new Date(feed.updated).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        )}
      </div>

      <div className="mt-20" id="scholars">
        <p className="kicker">MS(E) directory</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy">Scholars &amp; their ventures</h2>
        <p className="mt-3 max-w-2xl text-ink/70">Every MS (Entrepreneurship) scholar, batch 2021 onwards, with the venture or research problem they're building on.</p>

        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter by batch">
          {batches.map((b) => (
            <button
              key={b}
              type="button"
              role="tab"
              aria-selected={batch === b}
              onClick={() => setBatch(b)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                batch === b ? 'bg-navy text-white' : 'bg-navy/5 text-navy hover:bg-navy/10'
              }`}
            >
              {b === 'All' ? 'All batches' : `${b} batch`}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {shown.map((s) => (
            <div key={s.roll} className={`card py-5 ${s.funded ? 'border-accent/40 bg-accent-pale/30' : ''}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-display font-bold text-navy">
                  {s.linkedin ? (
                    <a href={s.linkedin} target="_blank" rel="noopener" className="hover:text-brand-blue hover:underline">{s.name} ↗</a>
                  ) : s.name}
                </p>
                <p className="text-xs text-ink/40">{s.batch} · {s.roll}</p>
              </div>
              {s.startup && (
                <p className="mt-1 text-sm font-semibold text-accent">
                  {s.startup}
                  {s.funded && <span className="tag ml-2 bg-accent/15 text-accent-dark">{s.funded}</span>}
                </p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.research}</p>
              <p className="mt-2 text-xs text-ink/50">{s.faculty} · {s.dept}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
