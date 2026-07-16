import awards from '../../data/awards.json';
import { PageHero, Section } from '../../components/Section';

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
                <ul className="mt-4 space-y-1 border-t border-navy/10 pt-4 text-sm">
                  {a.recipients.map((r) => (
                    <li key={r.name} className="flex justify-between gap-4">
                      <span className="font-semibold text-navy">{r.name}</span>
                      <span className="text-ink/50">{r.year}</span>
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
