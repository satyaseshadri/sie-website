'use client';
import { useState } from 'react';
import startups from '../../data/startups.json';
import students from '../../data/students.json';

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
              <p className="font-display text-lg font-bold text-gold">{s.raised}</p>
            </div>
            <p className="mt-2 text-sm text-ink/60">{s.sector} · {s.round} · via {s.origin} · {s.year}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
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
            <div key={s.roll} className="card py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-display font-bold text-navy">{s.name}</p>
                <p className="text-xs text-ink/40">{s.batch} · {s.roll}</p>
              </div>
              {s.startup && <p className="mt-1 text-sm font-semibold text-gold">{s.startup}</p>}
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.research}</p>
              <p className="mt-2 text-xs text-ink/50">{s.faculty} · {s.dept}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
