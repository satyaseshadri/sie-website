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
          <div className="card border-t-4 border-t-accent">
            <span className="tag bg-accent/15 text-accent-dark">Coming soon</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy">Tech Pioneer Awards 2026</h2>
            <p className="mt-3 leading-relaxed text-ink/70">
              Recognising the boldest deep-tech builders in the IIT Madras ecosystem. Nomination details,
              categories and timelines will be announced here shortly.
            </p>
            <p className="mt-4 text-sm text-ink/50">Watch this space — or write to us to be notified.</p>
            <Link href="/contact/" className="btn-ghost mt-5">Get notified</Link>
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
