import site from '../../data/site.json';
import { PageHero, Section } from '../../components/Section';

export const metadata = {
  title: 'Contact',
  description: 'Contact the School of Innovation & Entrepreneurship, IIT Madras — Sudha & Shankar Innovation Hub, Chennai 600 036.',
};

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Talk to the school"
        lead="Applying, mentoring, partnering or just curious — write to us and we'll route you to the right person."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="card">
              <p className="kicker">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1 block font-display text-xl font-bold text-brand-blue hover:underline">{site.email}</a>
              <p className="mt-4 text-sm text-ink/60">Program-specific contacts are listed on the <a className="text-brand-blue hover:underline" href="/people/">People page</a>.</p>
            </div>
            <div className="card">
              <p className="kicker">Phone</p>
              <p className="mt-1 font-display text-xl font-bold text-navy">{site.phone}</p>
            </div>
            <div className="card">
              <p className="kicker">Visit</p>
              <p className="mt-1 leading-relaxed text-ink/80">{site.address}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
            <iframe
              src={site.mapsEmbed}
              title="Map: Sudha & Shankar Innovation Hub, IIT Madras"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </>
  );
}
