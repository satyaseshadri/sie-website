import Img from '../../components/Img';
import research from '../../data/research.json';
import { Section } from '../../components/Section';

export const metadata = {
  title: 'CREST',
  description:
    'CREST — Centre for Research on Start-Ups and Risk Financing, an Institute of Eminence research centre at IIT Madras.',
};

export default function Research() {
  const { crest, pillars, domains, studies, faculty } = research;

  return (
    <>
      <div className="border-b border-navy/10 bg-gradient-to-b from-accent-pale/60 to-white">
        <div className="container-site grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="kicker">{research.kicker}</p>
            <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold text-navy sm:text-5xl">{research.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">{research.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={crest.site} rel="noopener" target="_blank" className="btn-primary">
                Visit CREST ↗
              </a>
            </div>
          </div>
          <Img
            src="/images/crest-logo.png"
            alt="CREST — Centre for Research on Start-ups and Risk Financing, IIT Madras"
            width={400}
            height={400}
            priority
            className="mx-auto h-40 w-40 rounded-full bg-white object-contain shadow-md ring-1 ring-navy/10 sm:h-48 sm:w-48"
          />
        </div>
      </div>

      <Section kicker="About" title="What the centre does">
        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="space-y-5 text-lg leading-relaxed text-ink/80 lg:col-span-2">
            {crest.about.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <aside className="card h-fit">
            <Img
              src="/images/crest-logo.png"
              alt=""
              width={200}
              height={200}
              className="mb-4 h-16 w-16 rounded-full object-contain"
            />
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Hosted at</p>
            <p className="mt-2 font-display font-bold text-navy">{crest.dept}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Institute of Eminence research centre · IIT Madras, Chennai – 600 036
            </p>
            <a href={`mailto:${crest.email}`} className="mt-4 block text-sm font-semibold text-brand-blue hover:underline">
              {crest.email}
            </a>
            <a href={crest.report} rel="noopener" target="_blank" className="mt-3 inline-block text-sm text-accent hover:underline">
              CREST summary report 2021–24 ↗
            </a>
          </aside>
        </div>
      </Section>

      <Section className="bg-accent-pale/50" kicker="Mandate" title="What CREST is built to do">
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <div key={p.title} className="card">
              <p className="text-xs font-bold text-accent">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Focus" title="Research domains">
        <p className="mt-3 max-w-2xl text-ink/70">
          Shared questions across SIE doctoral work and CREST studies — from venture science to public programmes.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => (
            <div key={d.name} className="rounded-xl border border-navy/10 bg-white px-5 py-4 shadow-sm">
              <p className="font-display font-semibold text-navy">{d.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/65">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-navy/10 bg-white" kicker="Studies" title="Current projects and reports">
        <p className="mt-3 max-w-2xl text-ink/70">
          Selected CREST work with ministries, development banks and campus labs. Full listings live on the CREST site.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {studies.map((s) => (
            <article key={s.title} className="card">
              <span className="tag bg-navy/10 text-navy">{s.partner}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-accent-pale/30" kicker="People" title="Investigators">
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {faculty.investigators.map((f) => (
            <div key={f.name} className="card py-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{f.role}</p>
              <p className="mt-2 font-display font-bold text-navy">{f.name}</p>
              <p className="mt-1 text-sm text-ink/60">{f.dept}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-ink/50">Advisory principal investigators</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.advisors.map((f) => (
            <div key={f.name} className="rounded-xl border border-navy/10 bg-white px-4 py-3">
              <p className="font-display text-sm font-semibold text-navy">{f.name}</p>
              <p className="text-xs text-ink/55">{f.dept}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
