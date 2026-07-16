import Image from '../../components/Img';
import team from '../../data/team.json';
import { PageHero, Section } from '../../components/Section';
import PersonCard from '../../components/PersonCard';

export const metadata = {
  title: 'About',
  description: 'SIE gives an academic footprint to IIT Madras\'s startup ecosystem — structured entrepreneurship education, pre-incubation, seed funding and mentorship under one school.',
};

export default function About() {
  return (
    <>
      <PageHero
        kicker="About the school"
        title="The academic backbone of IIT Madras's startup engine"
        lead="SIE gives an academic footprint to IITM's extensive startup ecosystem. Through regular and professor-of-practice faculty, we provide structured entrepreneurship education to startup founders and corporates — spanning the maker space CFI, pre-incubator Nirmaan, the MS and PhD programmes, UG & PG founder fellowships, seed funding and mentorship."
      />

      <Section kicker="Why we exist" title="Top 5 entrepreneurial universities. Top 3 startup nation.">
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              IIT Madras already produces India's strongest deep-tech pipeline. SIE's job is to make venture creation
              a first-class academic pursuit: research to revenue, supported at every step through tinkering labs,
              deep-tech centres of excellence, pre-incubation, lab-to-market education and venture studios.
            </p>
            <p>
              Our vision is for IIT Madras to rank among the top 5 global entrepreneurial universities — and to help
              propel India into the top 3 deep-tech, science-based startup nations.
            </p>
            <p>
              The school operates from the Sudha &amp; Shankar Innovation Hub, inaugurated by the Hon'ble Vice
              President of India in February 2023 — with 300+ students working in the hub every day.
            </p>
          </div>
          <Image
            src="/images/hub.jpg"
            alt="Students at a session inside the Sudha & Shankar Innovation Hub"
            width={1920}
            height={1080}
            className="rounded-2xl object-cover shadow-md"
          />
        </div>
      </Section>

      <Section className="bg-accent-pale/50" kicker="Leadership" title="Messages from our leadership">
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {team.leadership.map((l) => (
            <figure key={l.name} className="card">
              <blockquote className="text-sm leading-relaxed text-ink/75">“{l.message}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                {l.photo ? (
                  <Image src={l.photo} alt={l.name} width={480} height={480} className="h-12 w-12 rounded-full object-cover" />
                ) : (
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-pale font-display font-bold text-accent-dark">
                    {l.name.replace(/^(Prof\.|Dr\.)\s*/i, '').split(' ').slice(0, 2).map((w) => w[0]).join('')}
                  </span>
                )}
                <span>
                  <span className="block font-display font-bold text-navy">{l.name}</span>
                  <span className="block text-sm text-accent">{l.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section kicker="Genesis" title="How the ecosystem grew">
        <p className="mt-3 max-w-2xl text-ink/70">
          Two decades of building — from CFI's founding in 2008 and Nirmaan's launch in 2015 to the school itself
          and the Sudha &amp; Shankar Innovation Hub.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
          <Image src="/images/genesis.jpg" alt="Timeline of the IIT Madras innovation and entrepreneurship ecosystem" width={1600} height={1386} className="w-full object-cover" />
        </div>
      </Section>

      <Section className="border-t border-navy/10" kicker="Operations" title="Chief Operating Officer">
        <div className="mt-8 max-w-md">
          <PersonCard person={team.staff.find((p) => p.role === 'Chief Operating Officer')} />
        </div>
        <p className="mt-5 text-ink/70">
          The full operations team is on the <a href="/people/" className="text-accent underline">People page</a>.
        </p>
      </Section>
    </>
  );
}
