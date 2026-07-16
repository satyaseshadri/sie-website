import Link from 'next/link';
import Image from '../../components/Img';
import { PageHero, Section } from '../../components/Section';

export const metadata = {
  title: 'Ecosystem',
  description: 'The IIT Madras I&E Stack — CFI tinkering labs, Nirmaan pre-incubation, SIE programs, founder fellowships, and the IITM Incubation Cell.',
};

const CFI_STATS = [
  { v: '14', l: 'Clubs' },
  { v: '8', l: 'Competition teams' },
  { v: '73', l: 'Active projects' },
  { v: '22', l: 'Faculty involved' },
  { v: '1,100+', l: 'Students involved' },
  { v: '14', l: 'Startups in the CFI→Nirmaan→IITMIC pipeline' },
];

const NIRMAAN_STATS = [
  { v: '399', l: 'Student entrepreneurs (FY 24–25)' },
  { v: '239', l: 'Active teams' },
  { v: '24', l: 'Faculty entrepreneurs' },
  { v: '17', l: 'Startups registered with MCA' },
  { v: '₹80 Cr+', l: 'Startup revenue (FY 24–25)' },
  { v: '₹1,000 Cr+', l: 'Portfolio valuation' },
];

const WINS = [
  { team: 'Avishkar Hyperloop', win: 'Champions — Global Hyperloop Competition 2026' },
  { team: 'Raftar Formula Racing', win: '2nd place — Formula Bharat Challenge' },
  { team: 'Team Anveshak', win: '2nd runner-up + Best Rover Mission — International Rover Challenge 2026' },
  { team: 'Team Agnirath', win: 'First Indian team in 15 years to cover 600+ km — World Solar Challenge 2025' },
];

export default function Ecosystem() {
  return (
    <>
      <PageHero
        kicker="The I&E Stack"
        title="Five stages. One campus. Zero gaps."
        lead="At IIT Madras, you can go from first prototype to funded company without leaving the campus. SIE connects every layer of that journey, based out of the Sudha & Shankar Innovation Hub — inaugurated by the Hon'ble Vice President of India in February 2023."
      />

      <Section kicker="Stage 1 · Tinker" title="Centre for Innovation (CFI)">
        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 text-lg leading-relaxed text-ink/80 lg:col-span-2">
            <p>
              <em>“Walk in with an idea, walk out with a product.”</em> Established in 2008 with seed funds from the
              IITM alumni class of 1981, CFI is India's pioneering student-run 24/7 tinker lab — students build for
              international competitions and faculty- and industry-defined problems across robotics, aero, AI,
              biotech, blockchain and more.
            </p>
            <p>
              Competition teams build hyperloop pods, autonomous vehicles, solar racecars, sounding rockets, Mars
              rovers and submersible robots — and the strongest projects graduate into the startup pipeline.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {CFI_STATS.map((s) => (
                <div key={s.l} className="rounded-xl border border-navy/10 bg-white p-4">
                  <p className="font-display text-xl font-bold text-brand-red">{s.v}</p>
                  <p className="mt-1 text-xs text-ink/60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 self-start">
            <Image src="/images/cfi-formula.jpg" alt="Raftar Formula Racing team at Formula Bharat" width={1600} height={1053} className="rounded-2xl object-cover shadow-sm" />
            <Image src="/images/hyperloop.jpg" alt="Avishkar Hyperloop team at the finish line in Adelaide" width={728} height={848} className="hidden rounded-2xl object-cover shadow-sm lg:block" />
            <a href="https://cfi.iitm.ac.in" rel="noopener" className="btn-outline w-full justify-center">Visit cfi.iitm.ac.in ↗</a>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-navy/10 bg-accent-pale/40 p-6">
          <p className="kicker">Recent wins</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {WINS.map((w) => (
              <div key={w.team} className="flex gap-3">
                <span className="mt-1 text-accent">★</span>
                <p className="text-sm leading-relaxed text-ink/80"><strong className="text-navy">{w.team}</strong> — {w.win}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-navy/10 bg-accent-pale/30" kicker="Stage 2 · Pre-incubate" title="Nirmaan — The Pre-Incubator">
        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 text-lg leading-relaxed text-ink/80 lg:col-span-2">
            <p>
              Nirmaan is the first dedicated pre-incubator on a college campus in India — a sandbox for young
              entrepreneurs created in 2015 with support from the IITM alumni class of 1992 and Mr. Lakshmi Narayanan.
              More than 300 teams have been supported since.
            </p>
            <p>
              <strong>Pratham</strong> (6 months, up to ₹2 lakh) is the "startup nursery" — entrepreneurial training,
              market analysis and prototype building. Qualified teams advance to <strong>Akshar</strong> (6 months, up
              to ₹5 lakh) for MVP development, advanced business concepts across sales, pricing and marketing, plus VC
              and investor interaction. Graduates include GalaxEye (₹58 Cr Series A) and Plenome.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {NIRMAAN_STATS.map((s) => (
                <div key={s.l} className="rounded-xl border border-navy/10 bg-white p-4">
                  <p className="font-display text-xl font-bold text-brand-green">{s.v}</p>
                  <p className="mt-1 text-xs text-ink/60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 self-start">
            <Image src="/images/nirmaan.jpg" alt="Teams at work in the Nirmaan workspace, Sudha & Shankar Innovation Hub" width={1600} height={900} className="rounded-2xl object-cover shadow-sm" />
            <Image src="/images/hub.jpg" alt="Workshop in progress at the Innovation Hub" width={1920} height={1080} className="hidden rounded-2xl object-cover shadow-sm lg:block" />
            <a href="https://nirmaan.iitm.ac.in" rel="noopener" className="btn-outline w-full justify-center">Visit nirmaan.iitm.ac.in ↗</a>
          </div>
        </div>
      </Section>

      <Section kicker="Stages 3–5 · Learn, fund, scale" title="Then SIE takes you the rest of the way">
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Link href="/programs/" className="card border-t-4 border-t-brand-blue">
            <p className="font-display text-xl font-bold text-navy">Learn</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">MS (Entrepreneurship) with startup-as-thesis, PhD research on innovation, and ID-series electives open to all IITM students.</p>
            <p className="mt-4 text-sm font-semibold text-brand-blue">Programs →</p>
          </Link>
          <Link href="/programs/ugfir/" className="card border-t-4 border-t-accent">
            <p className="font-display text-xl font-bold text-navy">Fund</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">UG-FIR and PG-FIR fellowships: a stipend, accommodation and mentorship to build your company full-time after graduation.</p>
            <p className="mt-4 text-sm font-semibold text-brand-blue">Fellowships →</p>
          </Link>
          <a href="https://rtbi.in/incubationiitm/incubation.html" rel="noopener" target="_blank" className="card border-t-4 border-t-navy">
            <p className="font-display text-xl font-bold text-navy">Scale</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">Graduating ventures move into the IIT Madras Incubation Cell and Research Park — deep-tech India's strongest launchpad. ↗</p>
            <p className="mt-4 text-sm font-semibold text-brand-blue">IITMIC →</p>
          </a>
        </div>
      </Section>

      <Section className="border-t border-navy/10" kicker="Cutting across every stage" title="E-Cell — the evangelisation layer">
        <div className="mt-6 grid items-start gap-8 lg:grid-cols-3">
          <p className="text-lg leading-relaxed text-ink/80 lg:col-span-2">
            The Entrepreneurship Cell is part of the school alongside CFI and Nirmaan — not a stage in the pipeline
            but the layer that cuts across all of it. E-Cell evangelises entrepreneurship on campus and beyond:
            it runs <strong>E-Summit</strong>, India's largest student-run entrepreneurship summit (10,000+
            attendees, 500+ startups in 2026), pitch arenas, workshops and outreach that keep the top of the
            funnel full for every programme downstream.
          </p>
          <a href="https://esummitiitm.org" rel="noopener" target="_blank" className="card self-start border-t-4 border-t-accent hover:border-accent/50">
            <p className="font-display text-lg font-bold text-navy">E-Cell IIT Madras ↗</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">E-Summit, campus outreach and the founder community.</p>
          </a>
        </div>
      </Section>

      <Section className="border-t border-navy/10 bg-accent-pale/40" kicker="Translation funnel" title="From pre-incubation to incubation" lead="How teams move through the pipeline — measured across all Nirmaan cohorts.">
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: '321', l: 'Teams entered Nirmaan (all cohorts)' },
            { v: '50', l: 'Graduated — 15.6% overall graduation rate' },
            { v: '28', l: 'Reached IITM Incubation Cell' },
            { v: '56%', l: 'Of graduates go on to incubate at IITMIC' },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-navy/10 bg-white p-5">
              <p className="font-display text-3xl font-bold text-accent">{s.v}</p>
              <p className="mt-1 text-sm text-ink/60">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { v: '103', l: 'IPs filed by CFI & Nirmaan teams' },
            { v: '22 + 11', l: 'Patents + trademarks filed by the Aug 2023 cohort alone' },
            { v: '70', l: 'Pre-Incubation Agreements signed' },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-navy/10 bg-white p-5">
              <p className="font-display text-2xl font-bold text-navy">{s.v}</p>
              <p className="mt-1 text-sm text-ink/60">{s.l}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-navy/10 bg-accent-pale/30" kicker="Partners in the stack" title="The wider IIT Madras I&E family">
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <a href="https://www.gdciitm.org" rel="noopener" target="_blank" className="card hover:border-accent/50">
            <p className="font-display text-lg font-bold text-navy">GDC ↗</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">The Gopalakrishnan-Deshpande Centre for Innovation and Entrepreneurship — lab-to-market coaching that helps researchers translate science into ventures.</p>
          </a>
          <a href="https://rtbi.in/incubationiitm/incubation.html" rel="noopener" target="_blank" className="card hover:border-accent/50">
            <p className="font-display text-lg font-bold text-navy">IITM Incubation Cell ↗</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">One of India's leading deep-tech incubators — where Nirmaan graduates incorporate, raise and scale, backed by the IITM Research Park.</p>
          </a>
          <a href="https://www.venturearch.org" rel="noopener" target="_blank" className="card hover:border-accent/50">
            <p className="font-display text-lg font-bold text-navy">VentureArch ↗</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">SIE's venture-building platform — the digital backbone founders, mentors and programme teams use across the pipeline.</p>
          </a>
        </div>
      </Section>
    </>
  );
}
