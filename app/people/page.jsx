import team from '../../data/team.json';
import { PageHero, Section } from '../../components/Section';

export const metadata = {
  title: 'People',
  description: 'Leadership, staff and the mentor network of the School of Innovation & Entrepreneurship, IIT Madras.',
};

export default function People() {
  return (
    <>
      <PageHero
        kicker="People"
        title="Founders are made by people, not policies"
        lead="The faculty, staff and mentors who run the school and back its founders."
      />

      <Section kicker="Leadership" title="Faculty leadership">
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.leadership.map((l) => (
            <div key={l.name} className="card py-5">
              <p className="font-display font-bold text-navy">{l.name}</p>
              <p className="text-sm text-gold">{l.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gold-pale/50" kicker="Mentors" title="The mentor network">
        <p className="mt-3 max-w-2xl text-ink/70">
          Accomplished founders, operators and faculty who mentor MS(E) scholars and Nirmaan teams.
          The network is growing — if you'd like to mentor, we'd like to hear from you.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.mentors.map((m) => (
            <div key={m.name} className="card py-5">
              <p className="font-display font-bold text-navy">{m.name}</p>
              <p className="text-sm text-ink/60">Mentor · {m.program}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Staff" title="Operations team">
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.staff.map((p) => (
            <div key={p.name + p.role} className="card py-5">
              <p className="font-display font-semibold text-navy">{p.name}</p>
              <p className="text-sm text-ink/60">{p.role}</p>
              {p.email && <a href={`mailto:${p.email}`} className="mt-1 block break-all text-sm text-brand-blue hover:underline">{p.email}</a>}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
