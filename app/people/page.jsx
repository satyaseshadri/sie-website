import team from '../../data/team.json';
import { PageHero, Section, ACCENTS } from '../../components/Section';
import PersonCard, { LinkedInIcon } from '../../components/PersonCard';

export const metadata = {
  title: 'People',
  description: 'Leadership, staff and the mentor network of the School of Innovation & Entrepreneurship, IIT Madras — with LinkedIn profiles.',
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
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {team.leadership.map((l) => (
            <PersonCard key={l.name + l.role} person={l} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-navy/10" kicker="Governance" title="Governing Council">
        <p className="mt-3 max-w-2xl text-ink/70">
          The council that steers the school's strategy — faculty, academic partners and distinguished alumni.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {team.governingCouncil.map((m) => (
            <div key={m.name} className="flex items-center justify-between gap-3 rounded-xl border border-navy/10 bg-white px-4 py-3">
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold leading-snug text-navy">{m.name}</p>
                <p className="truncate text-xs text-ink/55">{m.affiliation}</p>
              </div>
              {m.linkedin && (
                <a href={m.linkedin} rel="noopener" target="_blank" className="flex-none text-[#0A66C2] hover:opacity-75" aria-label={`${m.name} on LinkedIn`}>
                  <LinkedInIcon />
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-navy/10 bg-accent-pale/30" kicker="Mentors & advisors" title="The mentor network">
        <p className="mt-3 max-w-2xl text-ink/70">
          Faculty, founders and operators who mentor MS(E) scholars, Nirmaan teams and CFI's clubs and competition
          teams. If you'd like to mentor, <a className="text-accent underline" href="/contact/">we'd like to hear from you</a>.
        </p>
        {team.mentorGroups.map((g) => (
          <div key={g.group} className="mt-10">
            <span className={`tag ${ACCENTS[g.accent] || ACCENTS.navy}`}>{g.group}</span>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.mentors.map((m, i) => (
                <div key={m.name + m.role + i} className="flex items-center justify-between gap-3 rounded-xl border border-navy/10 bg-white px-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate font-display text-sm font-semibold text-navy">{m.name}</p>
                    <p className="truncate text-xs text-ink/55">{m.role}</p>
                  </div>
                  {m.linkedin && (
                    <a href={m.linkedin} rel="noopener" target="_blank" className="flex-none text-[#0A66C2] hover:opacity-75" aria-label={`${m.name} on LinkedIn`}>
                      <LinkedInIcon />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section kicker="Staff" title="Operations team">
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.staff.map((p) => (
            <PersonCard key={p.name + p.role} person={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
