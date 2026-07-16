import news from '../../data/news.json';
import feed from '../../data/school-news-feed.json';
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

      <Section className="border-t border-navy/10 bg-accent-pale/30" kicker="In the press" title="Around the ecosystem">
        <p className="mt-3 max-w-2xl text-ink/70">
          Media coverage of innovation and entrepreneurship at IIT Madras — refreshed automatically by a bot that
          scans news sources daily.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {feed.items.slice(0, 12).map((n, i) => (
            <a key={i} href={n.link} target="_blank" rel="noopener" className="card block py-4 hover:border-accent/50">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {n.source}{n.date ? ` · ${new Date(n.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}` : ''}
              </p>
              <p className="mt-1 font-display font-semibold leading-snug text-navy">{n.title}</p>
            </a>
          ))}
        </div>
        {feed.updated && (
          <p className="mt-4 text-xs text-ink/45">Last scanned: {new Date(feed.updated).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        )}
      </Section>
    </>
  );
}
