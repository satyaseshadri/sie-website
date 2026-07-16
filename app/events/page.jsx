import Link from 'next/link';
import events from '../../data/events.json';
import { PageHero, Section } from '../../components/Section';

export const metadata = {
  title: 'Events',
  description: 'Upcoming and past events across the SIE ecosystem — E-Summit, Delta Expo, open houses, conclaves and award ceremonies at IIT Madras.',
};

function EventCard({ e }) {
  const external = e.link?.startsWith('http');
  const Wrapper = external ? 'a' : Link;
  const props = external ? { href: e.link, target: '_blank', rel: 'noopener' } : { href: e.link || '/news/' };
  return (
    <Wrapper {...props} className="card flex flex-col hover:border-accent/50">
      <div className="flex items-center justify-between gap-3">
        <span className="tag bg-accent/15 text-accent-dark">{e.tag}</span>
        <span className="text-xs font-semibold text-ink/50">{e.date}</span>
      </div>
      <p className="mt-3 font-display text-xl font-bold leading-snug text-navy">{e.name}</p>
      <p className="mt-1 text-sm text-ink/50">{e.venue}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{e.desc}</p>
      {external && <p className="mt-3 text-sm font-semibold text-accent">Details ↗</p>}
    </Wrapper>
  );
}

export default function Events() {
  return (
    <>
      <PageHero
        kicker="Events"
        title="Where the ecosystem gathers"
        lead="Summits, expos, conclaves and award nights across SIE, CFI, Nirmaan and E-Cell."
      />
      <Section kicker="Upcoming" title="On the calendar">
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {events.upcoming.map((e) => (
            <EventCard key={e.name} e={e} />
          ))}
        </div>
      </Section>
      <Section className="border-t border-navy/10 bg-accent-pale/30" kicker="Past year" title="Recent highlights">
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.past.map((e) => (
            <EventCard key={e.name} e={e} />
          ))}
        </div>
      </Section>
    </>
  );
}
