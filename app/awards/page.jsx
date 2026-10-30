import awards from '../../data/awards.json';
import { PageHero, Section } from '../../components/Section';
import { LinkedInIcon } from '../../components/PersonCard';

export const metadata = {
  title: 'Awards',
  description: 'Endowment awards and prizes recognising entrepreneurship and innovation at IIT Madras.',
};

export default function Awards() {
  return (
    <>
      <PageHero
        kicker="Recognition"
        title="Awards & prizes"
        lead="Endowment awards recognising the boldest builders across IIT Madras."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          {awards.map((a, i) => (
            <div key={a.name} className="card">
              <p className="text-xs font-bold text-accent">{String(i + 1).padStart(2, '0')}</p>
              <h2 className="mt-1 font-display text-xl font-bold text-navy">{a.name}</h2>
              <p className="mt-1 text-sm text-ink/60">{a.scope} · {a.criteria}</p>
              {a.recipients.length > 0 && (
                <ul className="mt-4 grid grid-cols-[minmax(0,1fr)_1rem_auto] items-center gap-x-3 gap-y-1 border-t border-navy/10 pt-4 text-sm">
                  {a.recipients.map((r) => (
                    <li key={r.name} className="contents">
                      <span className="font-semibold text-navy">{r.name}</span>
                      {r.linkedin ? (
                        <a href={r.linkedin} rel="noopener" target="_blank" className="text-[#0A66C2] hover:opacity-75" aria-label={`${r.name} on LinkedIn`}>
                          <LinkedInIcon />
                        </a>
                      ) : (
                        <span aria-hidden="true" />
                      )}
                      <span className="w-24 text-right text-ink/50">{r.year}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
