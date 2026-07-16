import Link from 'next/link';
import { PageHero, Section } from '../../components/Section';

export const metadata = {
  title: 'Venture Studios',
  description: 'SIE Venture Studios — Studio AI and Studio Sustainability, soon to be launched at IIT Madras.',
};

const STUDIOS = [
  {
    name: 'Studio AI',
    desc: 'A venture studio building AI-first companies out of IIT Madras research — from foundational models to applied intelligence in manufacturing, healthcare and education.',
    accent: 'border-t-brand-blue',
  },
  {
    name: 'Studio Sustainability',
    desc: 'A venture studio for climate and sustainability ventures — clean energy, circular economy, decarbonisation and water — turning lab breakthroughs into scalable green businesses.',
    accent: 'border-t-brand-green',
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
          {STUDIOS.map((s) => (
            <div key={s.name} className={`card border-t-4 ${s.accent}`}>
              <span className="tag bg-accent/15 text-accent-dark">Launching soon</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy">{s.name}</h2>
              <p className="mt-3 leading-relaxed text-ink/70">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-ink/70">
          Studio details, founding-team calls and partnership opportunities will be announced here. Interested in
          building with us or backing a studio? <Link href="/contact/" className="text-accent underline">Talk to the school</Link>.
        </p>
      </Section>
    </>
  );
}
