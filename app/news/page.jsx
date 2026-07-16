import news from '../../data/news.json';
import { PageHero, Section } from '../../components/Section';

export const metadata = {
  title: 'News',
  description: 'News and announcements from the School of Innovation & Entrepreneurship, IIT Madras.',
};

const TAG_STYLES = {
  Event: 'bg-brand-blue/10 text-brand-blue',
  People: 'bg-brand-green/10 text-brand-green',
  Milestone: 'bg-accent/15 text-accent-dark',
  Visit: 'bg-brand-red/10 text-brand-red',
  Achievement: 'bg-accent/15 text-accent-dark',
};

export default function News() {
  const sorted = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
      <PageHero kicker="News" title="What's happening at SIE" />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          {sorted.map((n) => (
            <article key={n.slug} className="card">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`tag ${TAG_STYLES[n.tag] || 'bg-navy/10 text-navy'}`}>{n.tag}</span>
                <time dateTime={n.date} className="text-sm text-ink/50">
                  {new Date(n.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
              </div>
              <h2 className="mt-3 font-display text-xl font-bold leading-snug text-navy">{n.title}</h2>
              <p className="mt-3 leading-relaxed text-ink/70">{n.summary}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
