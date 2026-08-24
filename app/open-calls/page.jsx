import Link from 'next/link';
import { PageHero, Section } from '../../components/Section';

export const metadata = {
  title: 'Open Calls',
  description: 'Open calls, competitions and award nominations from the School of Innovation & Entrepreneurship, IIT Madras.',
};

export default function OpenCalls() {
  return (
    <>
      <PageHero
        kicker="Open Calls"
        title="Calls, competitions & nominations"
        lead="Active and upcoming opportunities across the SIE ecosystem — applications, awards and challenges."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card border-t-4 border-t-navy">
            <span className="tag bg-emerald-500/15 text-emerald-700">Applications open · closes 31st August</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy">MC²⁺ Ignite — Cohort 1</h2>
            <p className="mt-3 leading-relaxed text-ink/70">
              India's energy accelerator for deep-tech founders — up to ₹2 crore in convertible funding,
              labs and pilot pathways at the PSU energy majors. Organised by IIT Madras with the MC²⁺ Foundation.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://app.mc2plus.in/ext/form/24027/1/apply?source=IIT%20Madras&medium=NIL" rel="noopener" target="_blank" className="btn-primary">Apply now ↗</a>
              <Link href="/studios/energy/" className="btn-ghost">Programme details</Link>
            </div>
          </div>
          <div className="card border-t-4 border-t-accent">
            <span className="tag bg-emerald-500/15 text-emerald-700">Applications open · closes 10th September</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy">Tech Pioneer Grant 2026</h2>
            <p className="mt-3 leading-relaxed text-ink/70">
              A grant call for agritech, climatetech, and fintech ventures — funding up to ₹5L through
              pre-incubation and up to ₹20L through incubation.
            </p>
            <a href="https://venturearch.org/apply/nirmaan-iitm/6a698f413973750db248cd3b" rel="noopener" target="_blank" className="btn-primary mt-5">Apply on VentureArch ↗</a>
          </div>
          <div className="card">
            <span className="tag bg-navy/10 text-navy">Closed</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy">MS (Entrepreneurship) — July 2026 cohort</h2>
            <p className="mt-3 leading-relaxed text-ink/70">
              Admissions for the July 2026 cohort are closed. Check back for the next cycle, and meet the
              scholars currently building ventures in the programme.
            </p>
            <Link href="/startups/#scholars" className="btn-ghost mt-5">Meet the MS(E) scholars</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
