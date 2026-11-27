import Link from 'next/link';
import { PageHero, Section } from '../../components/Section';

export const metadata = {
  title: 'Venture Studios',
  description: 'SIE Venture Studios — Studio AI and Studio Sustainability, soon to be launched at IIT Madras.',
};

const STUDIOS = [
  {
    name: 'AI Studio',
    desc: 'A venture studio building AI-first companies out of IIT Madras research — from foundational models to applied intelligence in manufacturing, healthcare and education.',
    accent: 'border-t-brand-blue',
    detailsHref: 'https://wsai.iitm.ac.in/aistudio/',
    detailsExternal: true,
  },
  {
    name: 'Studio Sustainability',
    desc: 'A venture studio for climate and sustainability ventures — clean energy, circular economy, decarbonisation and water — turning lab breakthroughs into scalable green businesses.',
    accent: 'border-t-brand-green',
    detailsHref: '/svaasa/',
    detailsLabel: 'Visit the studio ↗',
  },
];

export default function Studios() {
  return (
    <>
      <PageHero
        kicker="Venture Studios"
        title="Ventures, built in-house"
        lead="SIE's venture studios pair founders with research, capital and operating support to build companies from day zero — the final layer of the active venture-creation model."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {STUDIOS.map((s) => {
            const className = `card border-t-4 ${s.accent} flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`;
            const body = (
              <>
                {s.tag && <span className={`tag self-start ${s.tagClass}`}>{s.tag}</span>}
                <h2 className={`${s.tag ? 'mt-3 ' : ''}font-display text-2xl font-bold text-navy`}>{s.name}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-ink/70">{s.desc}</p>
                <span className={`${s.detailsExternal ? 'btn-primary' : 'btn-ghost'} mt-5 self-start`}>
                  {s.detailsLabel || (s.detailsExternal ? 'Visit the studio ↗' : 'Programme details ↗')}
                </span>
              </>
            );
            if (!s.detailsHref) {
              return (
                <div key={s.name} className={className}>
                  {body}
                </div>
              );
            }
            if (s.detailsExternal) {
              return (
                <a key={s.name} href={s.detailsHref} rel="noopener" target="_blank" className={className}>
                  {body}
                </a>
              );
            }
            return (
              <a key={s.name} href={s.detailsHref} className={className}>
                {body}
              </a>
            );
          })}
        </div>
        <p className="mt-10 max-w-2xl text-ink/70">
          Studio details, founding-team calls and partnership opportunities will be announced here. Interested in
          building with us or backing a studio? <Link href="/contact/" className="text-accent underline">Talk to the school</Link>.
        </p>
      </Section>
    </>
  );
}
