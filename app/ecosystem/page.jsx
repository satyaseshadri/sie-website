import Link from 'next/link';
import { PageHero, Section } from '../../components/Section';

export const metadata = {
  title: 'Ecosystem',
  description: 'The IIT Madras I&E Stack — CFI tinkering labs, Nirmaan pre-incubation, SIE programs, founder fellowships, and the IITM Incubation Cell.',
};

export default function Ecosystem() {
  return (
    <>
      <PageHero
        kicker="The I&E Stack"
        title="Five stages. One campus. Zero gaps."
        lead="IIT Madras is the only campus in India where you can go from first prototype to funded company without leaving the gate. SIE connects every layer."
      />

      <Section kicker="Stage 1 · Tinker" title="Centre for Innovation (CFI)">
        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 text-lg leading-relaxed text-ink/80 lg:col-span-2">
            <p>
              <em>“Walk in with an idea, walk out with a product.”</em> Established in 2008 with funds raised by the
              class of 1981, CFI is India's largest 24/7 student-run innovation lab — home to 14 hobby clubs and
              8 competition teams spanning robotics, aero, AI, biotech, blockchain and more.
            </p>
            <p>
              CFI teams have set 4 world records, won 27 national and international awards, and seeded 15+ startups.
              Around 740 students are involved at any time, with 60+ live projects.
            </p>
          </div>
          <div className="card border-t-4 border-brand-red self-start">
            <p className="font-display text-3xl font-bold text-brand-red">14 clubs · 8 teams</p>
            <p className="mt-1 text-sm text-ink/60">60+ projects · 4 world records</p>
            <a href="https://cfi.iitm.ac.in" rel="noopener" className="btn-outline mt-5 w-full justify-center">Visit cfi.iitm.ac.in ↗</a>
          </div>
        </div>
      </Section>

      <Section className="bg-gold-pale/50" kicker="Stage 2 · Pre-incubate" title="Nirmaan — The Pre-Incubator">
        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 text-lg leading-relaxed text-ink/80 lg:col-span-2">
            <p>
              Nirmaan is the first dedicated pre-incubator on a college campus in India. Student teams get technical
              guidance, business mentorship, a collaborative workspace at the Sudha &amp; Shankar Innovation Hub — and
              real money to build.
            </p>
            <p>
              <strong>Pratham</strong> (6 months, ₹2 lakh seed grant) covers business, finance and market strategy
              fundamentals. Teams that shine advance to <strong>Akshar</strong> (6 months, ₹5 lakh) to build their MVP
              and master pricing, sales and go-to-market. Graduates include GalaxEye (₹58 Cr Series A) and Plenome.
            </p>
          </div>
          <div className="card border-t-4 border-brand-green self-start">
            <p className="font-display text-3xl font-bold text-brand-green">₹2L + ₹5L</p>
            <p className="mt-1 text-sm text-ink/60">Pratham + Akshar grants per team</p>
            <a href="https://nirmaan.iitm.ac.in" rel="noopener" className="btn-outline mt-5 w-full justify-center">Visit nirmaan.iitm.ac.in ↗</a>
          </div>
        </div>
      </Section>

      <Section kicker="Stages 3–5 · Learn, fund, scale" title="Then SIE takes you the rest of the way">
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Link href="/programs/" className="card border-t-4 border-brand-blue">
            <p className="font-display text-xl font-bold text-navy">Learn</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">MS (Entrepreneurship) with startup-as-thesis, PhD research on innovation, and ID-series electives open to all IITM students.</p>
            <p className="mt-4 text-sm font-semibold text-brand-blue">Programs →</p>
          </Link>
          <Link href="/programs/ugfir/" className="card border-t-4 border-gold">
            <p className="font-display text-xl font-bold text-navy">Fund</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">UG-FIR and PG-FIR fellowships: a stipend, accommodation and mentorship to build your company full-time after graduation.</p>
            <p className="mt-4 text-sm font-semibold text-brand-blue">Fellowships →</p>
          </Link>
          <a href="https://www.incubation.iitm.ac.in" rel="noopener" className="card border-t-4 border-navy">
            <p className="font-display text-xl font-bold text-navy">Scale</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">Graduating ventures move into the IIT Madras Incubation Cell and Research Park — deep-tech India's strongest launchpad. ↗</p>
            <p className="mt-4 text-sm font-semibold text-brand-blue">IITMIC →</p>
          </a>
        </div>
      </Section>
    </>
  );
}
