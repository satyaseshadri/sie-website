import Link from 'next/link';
import { notFound } from 'next/navigation';
import programs from '../../../data/programs.json';
import projects from '../../../data/projects.json';
import { PageHero, Section, ACCENTS } from '../../../components/Section';

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = programs.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: p.name, description: p.oneLiner };
}

export default function ProgramPage({ params }) {
  const p = programs.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const external = p.cta.href.startsWith('http');

  return (
    <>
      <PageHero kicker={p.kicker} title={p.name} lead={p.oneLiner}>
        <div className="mt-8 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {p.facts.map((f) => (
            <div key={f.k} className="rounded-xl border border-navy/10 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-ink/50">{f.k}</p>
              <p className="mt-1 text-sm font-semibold text-navy">{f.v}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-5 text-lg leading-relaxed text-ink/80 lg:col-span-2">
            {p.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <aside>
            {p.eligibility.length > 0 && (
              <div className="card">
                <p className="font-display font-bold text-navy">Eligibility</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/75">
                  {p.eligibility.map((e, i) => (
                    <li key={i} className="flex gap-2"><span className="text-gold">✓</span>{e}</li>
                  ))}
                </ul>
              </div>
            )}
            {external ? (
              <a href={p.cta.href} rel="noopener" className="btn-primary mt-6 w-full justify-center">{p.cta.label} ↗</a>
            ) : (
              <Link href={p.cta.href} className="btn-primary mt-6 w-full justify-center">{p.cta.label}</Link>
            )}
          </aside>
        </div>

        {p.courses && (
          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold text-navy">Course list</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {p.courses.map((c) => (
                <div key={c.code + c.theme} className="card py-5">
                  <p className="text-xs font-bold text-gold">{c.code}</p>
                  <p className="mt-1 font-display font-semibold text-navy">{c.name}</p>
                  <p className="text-sm text-ink/60">{c.theme}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>

      {p.slug === 'ms' && (
        <Section className="bg-gold-pale/50" kicker="July 2026 admissions" title="Open projects" lead="Apply against a faculty-led problem statement — or propose your own venture idea.">
          <div id="projects" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((pr) => (
              <div key={pr.id} className="card py-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-gold">{pr.id}</p>
                  <span className={`tag ${ACCENTS.blue}`}>{pr.sector}</span>
                </div>
                <p className="mt-2 font-display font-semibold leading-snug text-navy">{pr.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{pr.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
