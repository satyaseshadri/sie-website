import Link from 'next/link';
import Image from '../components/Img';
import site from '../data/site.json';
import startups from '../data/startups.json';
import news from '../data/news.json';
import { Section } from '../components/Section';

export const metadata = {
  title: 'School of Innovation & Entrepreneurship | IIT Madras',
  description:
    'From lab to launch — SIE is where IIT Madras research becomes India\'s next deep-tech companies. Explore programs, fellowships and the startup ecosystem.',
};

const STACK = [
  { step: '01', name: 'Tinker', who: 'Centre for Innovation (CFI)', desc: "India's largest 24/7 student-run innovation lab. 14 clubs, 8 competition teams, 73 live projects. Walk in with an idea, walk out with a product.", href: 'https://cfi.iitm.ac.in', accent: 'border-brand-red', external: true },
  { step: '02', name: 'Pre-incubate', who: 'Nirmaan', desc: "The country's first on-campus pre-incubator. Pratham (₹2L) and Akshar (₹5L) programmes take teams from idea to MVP with mentorship and workspace.", href: 'https://nirmaan.iitm.ac.in', accent: 'border-brand-green', external: true },
  { step: '03', name: 'Learn', who: 'MS · PhD · Courses', desc: 'A research degree where your startup is your thesis, doctoral research on innovation, and founder-led electives for every IITM student.', href: '/programs/', accent: 'border-brand-blue' },
  { step: '04', name: 'Fund', who: 'Founder-in-Residence', desc: 'UG-FIR and PG-FIR fellowships pay recent graduates and research scholars to build their companies full-time.', href: '/programs/ugfir/', accent: 'border-gold' },
  { step: '05', name: 'Scale', who: 'IITMIC & Research Park', desc: 'Graduating ventures move into the IIT Madras Incubation Cell and Research Park — one of India\'s strongest deep-tech launchpads.', href: '/ecosystem/', accent: 'border-navy' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="border-b border-navy/10 bg-white">
        <div className="container-site grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="kicker">School of Innovation &amp; Entrepreneurship · IIT Madras</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy sm:text-6xl">
              From lab to <span className="text-gold">launch</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75 sm:text-xl">
              {site.heroLine} One school connects the whole journey — tinkering labs, pre-incubation, degrees, founder fellowships and seed support.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/programs/" className="btn-primary">Find your program</Link>
              <Link href="/startups/" className="btn-ghost">See the startups</Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/dome.jpg"
              alt="The Sudha & Shankar Innovation Hub at IIT Madras"
              width={1920}
              height={1280}
              priority
              className="rounded-2xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-5 left-5 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-navy/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">Home of SIE</p>
              <p className="font-display text-sm font-bold text-navy">Sudha &amp; Shankar Innovation Hub</p>
            </div>
          </div>
        </div>
        <div className="border-t border-navy/10 bg-gold-pale/50">
          <div className="container-site grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-navy sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-ink/60 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Stack */}
      <Section
        kicker="How it works"
        title="One pipeline, idea to IPO-track"
        lead="The IIT Madras I&E Stack supports you at every stage — wherever you start, there's a next step."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {STACK.map((s) => (
            <Link
              key={s.step}
              href={s.href}
              {...(s.external ? { rel: 'noopener', target: '_blank' } : {})}
              className={`card border-t-4 ${s.accent} flex flex-col`}
            >
              <p className="text-xs font-bold text-ink/40">{s.step}</p>
              <p className="mt-1 font-display text-xl font-bold text-navy">{s.name}</p>
              <p className="text-sm font-semibold text-gold">{s.who}{s.external ? ' ↗' : ''}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Startups */}
      <Section
        className="border-y border-navy/10 bg-gold-pale/40"
        kicker="Proof, not promises"
        title="₹50 Cr+ raised by ventures from this ecosystem"
        lead="Student and alumni companies pre-incubated at Nirmaan are raising serious rounds in spacetech, healthcare, agritech and climate — on a combined Nirmaan portfolio now valued at over ₹1,000 crore."
      >
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {startups.slice(0, 6).map((s) => (
            <div key={s.name} className="card">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-display text-lg font-bold text-navy">{s.name}</p>
                <p className="font-display text-lg font-bold text-gold">{s.raised}</p>
              </div>
              <p className="mt-2 text-sm text-ink/60">{s.sector} · {s.round} · via {s.origin}</p>
            </div>
          ))}
        </div>
        <Link href="/startups/" className="btn-primary mt-10">All funded ventures</Link>
      </Section>

      {/* Audience routes */}
      <Section kicker="Start here" title="What brings you to SIE?">
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: 'I\'m an IITM student with an idea', d: 'Join a CFI club or apply to Nirmaan\'s next cohort — workspace, mentorship and up to ₹7L in grants.', href: '/ecosystem/', cta: 'Explore the ecosystem' },
            { t: 'I want a degree in entrepreneurship', d: 'MS (Entrepreneurship) — your startup is your thesis. Or pursue doctoral research on innovation.', href: '/programs/ms/', cta: 'See the MS programme' },
            { t: 'I just graduated and want to build', d: 'UG-FIR and PG-FIR fellowships pay you a stipend to work on your venture full-time on campus.', href: '/programs/ugfir/', cta: 'Founder fellowships' },
            { t: 'I want to mentor or partner', d: 'Join the mentor network, sponsor a programme, or endow an award. Founders need what you know.', href: '/contact/', cta: 'Get in touch' },
          ].map((c) => (
            <Link key={c.t} href={c.href} className="card flex flex-col">
              <p className="font-display text-lg font-bold text-navy">{c.t}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{c.d}</p>
              <p className="mt-4 text-sm font-semibold text-gold">{c.cta} →</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* News */}
      <Section className="border-t border-navy/10" kicker="Latest" title="News from the school">
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {news.slice(0, 3).map((n) => (
            <article key={n.slug} className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">{n.tag} · {new Date(n.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
              <h3 className="mt-2 font-display text-lg font-bold leading-snug text-navy">{n.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{n.summary}</p>
            </article>
          ))}
        </div>
        <Link href="/news/" className="btn-ghost mt-10">All news</Link>
      </Section>
    </>
  );
}
