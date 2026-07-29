import Link from 'next/link';
import programs from '../../data/programs.json';
import { PageHero, Section, ACCENTS } from '../../components/Section';

export const metadata = {
  title: 'Programs',
  description: 'MS (Entrepreneurship), PhD, UG & PG Founder-in-Residence fellowships and entrepreneurship courses at IIT Madras — find the right entry point for your stage.',
};

export default function Programs() {
  return (
    <>
      <PageHero
        kicker="Programs"
        title="A program for every stage of the founder journey"
        lead="Whether you're a student with a spark, a researcher with a thesis, or a graduate ready to go full-time — there's a structured, funded path here."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((p) => {
            const applicationsOpen = p.applicationsOpen ?? true;
            const statusLabel = applicationsOpen ? 'Applications open' : 'Applications closed';
            const statusClass = applicationsOpen
              ? 'bg-emerald-500/15 text-emerald-700'
              : 'bg-amber-500/15 text-amber-700';

            return (
              <Link key={p.slug} href={`/programs/${p.slug}/`} className="card flex flex-col">
                <span className={`tag self-start ${ACCENTS[p.accent] || ACCENTS.navy}`}>{p.short}</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-navy">{p.name}</h2>
                <p className="mt-1 text-sm font-semibold text-accent">{p.kicker}</p>
                <p className="mt-3 flex-1 leading-relaxed text-ink/70">{p.oneLiner}</p>
                <span className={`mt-4 self-start rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}>{statusLabel}</span>
                <p className="mt-5 text-sm font-semibold text-brand-blue">Program details →</p>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
