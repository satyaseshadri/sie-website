import Link from 'next/link';

export const metadata = {
  title: 'MC²⁺ Ignite — Cohort 1 | Energy & Sustainability Venture Studio',
  description: "India's energy accelerator for deep-tech founders — organised by IIT Madras with MC²⁺ Foundation. Applications open 1 August 2026.",
  robots: { index: false, follow: false },
};

const NAVY = '#1F3864';
const GOLD = '#C9961A';

const STATS = [
  { v: '12', l: 'startups in the cohort' },
  { v: 'TRL 4–7', l: 'prototype → early pilot' },
  { v: 'up to ₹2 Cr', l: 'convertible debt / startup' },
  { v: '10', l: 'themes, 50:50 split' },
  { v: '0%', l: 'priced round to join' },
];

const ROLES = [
  { tag: 'Organiser', name: 'IIT Madras', desc: 'Runs the call for applications and national scouting, curates mentoring across the programme, and organises Demo Day.' },
  { tag: 'Bootcamp & monitoring', name: 'IIMA Ventures', desc: "Hosts the 7-day residential launch bootcamp in Ahmedabad and monitors every startup's progress through to Demo Day." },
  { tag: 'Pilots & procurement', name: 'The MC²⁺ Team', desc: "Catalyses procurement and piloting with India's energy majors — ONGC, IOCL, BPCL, HPCL, GAIL, OIL India and Petronet LNG — on the MC²⁺ platform." },
  { tag: 'Capital & governance', name: 'MC²⁺ Foundation', desc: 'Provides the milestone-linked convertible funding. The MC²⁺ Fund holds a first right of co-investment in later rounds.' },
];

const TIMELINE = [
  { d: '1 Aug 2026', t: 'Applications open.', x: 'IIT Madras-led national scouting begins.' },
  { d: '1–25 Aug', t: '25-day scouting window.', x: 'Apply online; no late submissions.' },
  { d: '26 Aug – 9 Sep', t: 'Selection (15 days).', x: 'Triage → diligence → interviews → final pitch.' },
  { d: '10 Sep', t: 'Cohort of 12 announced.', x: 'Contracting and onboarding through end-September.' },
  { d: '1–7 Oct', t: 'Launch bootcamp at IIMA Ventures.', x: '7-day residential kick-off; ₹50 lakh convertible debt released.' },
  { d: '8 Oct – 31 Dec', t: 'Node-based build (12 weeks).', x: 'Mentoring by IIT Madras · monitoring by IIMA Ventures · pilots via the MC²⁺ Team; gate reviews at Weeks 4 & 8.' },
  { d: '7 Jan 2027', t: 'Demo Day (IIT Madras, Chennai).', x: 'Organised by IIT Madras; up to ₹1.5 crore convertible released on milestones.' },
];

const SUPPORT = [
  { tag: 'Capital', amt: '₹50 lakh upfront + up to ₹1.5 crore', desc: 'Convertible debt of up to ₹2 crore in total: ₹50 lakh disbursed upfront plus up to ₹1.5 crore released at Demo Day, subject to agreed milestones. Both convert to equity at a 2% per month discount to the price of any external fund-raise of at least ₹2 crore completed within two years.' },
  { tag: 'Infrastructure', amt: 'Labs across institutions & PSUs', desc: 'Access to research laboratories and pilot facilities across IIT Kanpur, IIT Madras, C-CAMP, IIT Bombay and the NCL Venture Centre — and at the PSU energy majors.' },
  { tag: 'Procurement & piloting', amt: "At India's energy majors", desc: 'Structured procurement and piloting pathways at ONGC, IOCL, BPCL, HPCL, GAIL, OIL India and Petronet LNG — catalysed by the MC²⁺ Team on the MC²⁺ platform.' },
  { tag: 'Expertise', amt: 'Training + expert access', desc: 'A residential training bootcamp at IIMA Ventures, mentoring organised by IIT Madras, and access to technical and domain experts across the technology institutions and the PSUs.' },
];

const STEPS = [
  { b: 'Triage (26–29 Aug).', x: 'A binary screen on eligibility — incorporation, founders, documented TRL, theme fit, capital raised. ~120 qualify.' },
  { b: 'Diligence (30 Aug – 2 Sep).', x: 'A two-hour deep dive per applicant — technology review, customer reference checks, founder profiles. 48 longlisted.' },
  { b: 'Interviews (3–6 Sep).', x: 'Structured 20-minute panel interviews (12-min pitch + 8-min Q&A) scored on team & execution, technology & IP, market & offtake, capital & use of funds, and fit & risk. 24 shortlisted.' },
  { b: 'Final round (7–9 Sep).', x: 'In-person pitch days organised by IIT Madras; references finalised; convertible quantum set. 12 selected + 12 reserves.' },
];

const FAQ = [
  { q: 'Do you take equity?', a: 'Both the ₹50 lakh upfront and the ₹1.5 crore at Demo Day are convertible debt that convert to equity at a 2% per month discount to the price of any external fund-raise of at least ₹2 crore completed within two years. The MC²⁺ Fund (a separate entity) holds a first right of co-investment in your subsequent rounds at market terms.' },
  { q: 'Is this a residential programme?', a: 'Only the 7-day launch bootcamp at IIMA Ventures is residential. After that, you work from your assigned host node (or a PSU site) for the 12-week build phase, with weekly check-ins and gate reviews.' },
  { q: 'Who can apply?', a: 'Indian-incorporated startups (≤ 5 years old, ≤ ₹10 Cr raised), at least two founders including one technical co-founder, a working prototype or early pilot (TRL 4–7), and a fit with one of the ten MC²⁺ themes.' },
  { q: 'What does the money depend on?', a: 'The ₹50 lakh upfront convertible debt is released at the start against a signed Incubation Agreement. The convertible at Demo Day depends on achieving your Gate 1 and Gate 2 milestones and delivering at Demo Day.' },
  { q: 'When will I hear back?', a: 'All applicants are notified by email no later than 10 September 2026.' },
];

function Eyebrow({ children }) {
  return <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: GOLD }}>{children}</p>;
}

export default function MC2Ignite() {
  return (
    <>
      {/* Hero */}
      <div style={{ backgroundColor: NAVY }} className="text-white">
        <div className="container-site py-16 sm:py-20">
          <Eyebrow>Energy &amp; Sustainability Venture Studio · MC²⁺ Ignite · Cohort 1</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            India's energy accelerator for deep-tech founders
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            A sector-specific cohort accelerator for startups decarbonising India's oil-and-gas core and building
            the energy-transition stack. Organised by IIT Madras, with a launch bootcamp at IIMA Ventures, a build
            phase across leading research nodes, and real pilots at India's energy majors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://apply.mc2foundation.org" rel="noopener" target="_blank" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 font-display text-sm font-semibold text-[#1a1a1a]" style={{ backgroundColor: GOLD }}>
              Apply — opens 1 Aug 2026 ↗
            </a>
            <a href="#how" className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-3 font-display text-sm font-semibold text-white hover:bg-white/10">How it works</a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/20 sm:grid-cols-5">
            {STATS.map((s) => (
              <div key={s.l} className="bg-white px-4 py-4 text-center">
                <p className="font-display text-xl font-bold" style={{ color: NAVY }}>{s.v}</p>
                <p className="mt-0.5 text-xs text-ink/60">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What it is */}
      <section className="border-b border-navy/10 py-14 sm:py-16">
        <div className="container-site">
          <Eyebrow>What it is</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold" style={{ color: NAVY }}>A focused programme for the "awkward middle"</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">
            TRL 4–7 is where most Indian energy startups stall — grants run out, customer discovery is hard, and
            venture capital is still too far away. MC²⁺ Ignite is built precisely for that gap: founder-friendly
            convertible funding, real infrastructure, procurement pathways, and expert mentoring, over a single
            tightly-run cohort.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ROLES.map((r) => (
              <div key={r.name + r.tag} className="rounded-xl border border-navy/10 bg-paper p-6">
                <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: GOLD }}>{r.tag}</p>
                <p className="mt-1 font-display text-lg font-bold" style={{ color: NAVY }}>{r.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who should apply */}
      <section className="border-b border-navy/10 py-14 sm:py-16">
        <div className="container-site">
          <Eyebrow>Who should apply</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold" style={{ color: NAVY }}>Indian startups, TRL 4–7, in one of ten themes</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">
            You should be an Indian-incorporated company (≤ 5 years old, ≤ ₹10 Cr raised) with at least two founders
            including a technical co-founder, a working prototype or early pilot, and a clear fit with one of the
            MC²⁺ themes.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="font-display text-lg font-bold" style={{ color: NAVY }}>Oil &amp; Gas Core (5)</p>
              <ul className="mt-3 space-y-2 text-ink/75">
                {['Refinery decarbonisation', 'Upstream / methane emissions', 'Petrochemicals', 'Digitalisation of O&G', 'Worker safety & HSE'].map((t) => (
                  <li key={t} className="flex gap-2"><span style={{ color: GOLD }}>▪</span>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-lg font-bold" style={{ color: NAVY }}>Energy Transition (5)</p>
              <ul className="mt-3 space-y-2 text-ink/75">
                {['Green hydrogen & derivatives', 'Battery storage & fuel cells', 'EV ecosystem', 'CCUS & biofuels', 'Distributed energy & grid'].map((t) => (
                  <li key={t} className="flex gap-2"><span style={{ color: GOLD }}>▪</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b border-navy/10 py-14 sm:py-16">
        <div className="container-site">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold" style={{ color: NAVY }}>From call for applications to Demo Day</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">
            A single, tightly-run cohort: 25 days of scouting, 15 days of selection, a 7-day launch bootcamp, a
            12-week node-based build, and a Demo Day at IIT Madras.
          </p>
          <ul className="mt-8 ml-2 max-w-3xl border-l-2" style={{ borderColor: GOLD }}>
            {TIMELINE.map((e) => (
              <li key={e.d} className="relative pb-6 pl-7">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2" style={{ backgroundColor: NAVY, borderColor: GOLD }} />
                <span className="font-display font-bold" style={{ color: GOLD }}>{e.d}</span>
                {' — '}<span className="font-semibold text-ink">{e.t}</span>{' '}
                <span className="text-sm text-ink/60">{e.x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where */}
      <section className="border-b border-navy/10 py-14 sm:py-16">
        <div className="container-site">
          <Eyebrow>Where you'll work</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold" style={{ color: NAVY }}>Bootcamp at IIMA Ventures, then a research node</h2>
          <div className="mt-6 max-w-3xl rounded-xl p-5 text-white" style={{ backgroundColor: NAVY }}>
            <span className="font-bold" style={{ color: GOLD }}>7-day launch bootcamp</span> at IIMA Ventures,
            Ahmedabad (1–7 Oct 2026) — orientation, go-to-market, the regulatory landscape, Sponsor procurement,
            mentor pairing and IP audit.
          </div>
          <p className="mt-6 font-semibold" style={{ color: NAVY }}>Host nodes for the build phase:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {['IIT Kanpur', 'IIT Madras', 'C-CAMP, Bengaluru', 'IIT Bombay', 'NCL Venture Centre, Pune', '+ PSU host sites (optional)'].map((n) => (
              <span key={n} className="rounded-full border px-4 py-1.5 text-sm font-semibold" style={{ borderColor: NAVY, color: NAVY }}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="border-b border-navy/10 py-14 sm:py-16">
        <div className="container-site">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold" style={{ color: NAVY }}>How we support the startups</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {SUPPORT.map((s) => (
              <div key={s.tag} className="rounded-xl border border-navy/10 bg-white p-6">
                <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: GOLD }}>{s.tag}</p>
                <p className="mt-1 font-display text-lg font-bold text-[#6B3D5B]">{s.amt}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection */}
      <section className="border-b border-navy/10 py-14 sm:py-16">
        <div className="container-site">
          <Eyebrow>Selection process</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold" style={{ color: NAVY }}>How the cohort is chosen</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">
            A five-member Selection Committee reduces 300+ applications to a cohort of 12 over 15 days, using a
            documented rubric.
          </p>
          <ol className="mt-8 max-w-3xl">
            {STEPS.map((s, i) => (
              <li key={i} className="flex gap-4 border-b border-dashed border-navy/15 py-4">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full font-display text-sm font-bold text-white" style={{ backgroundColor: NAVY }}>{i + 1}</span>
                <p className="text-sm leading-relaxed text-ink/75"><strong style={{ color: NAVY }}>{s.b}</strong> {s.x}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-navy/10 py-14 sm:py-16">
        <div className="container-site">
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold" style={{ color: NAVY }}>Frequently asked</h2>
          <div className="mt-8 max-w-3xl space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="rounded-lg border border-navy/10 bg-paper px-5 py-3">
                <summary className="cursor-pointer font-semibold" style={{ color: NAVY }}>{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <div className="py-16 text-center text-white" style={{ backgroundColor: '#14284A' }}>
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold">Applications open 1 August 2026</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            The scouting window runs to 25 August 2026. Be honest about your stage, bring evidence not aspiration,
            and read the application guide before you start.
          </p>
          <a href="https://apply.mc2foundation.org" rel="noopener" target="_blank" className="mt-7 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-display text-sm font-semibold text-[#1a1a1a]" style={{ backgroundColor: GOLD }}>
            Apply at apply.mc2foundation.org ↗
          </a>
          <p className="mt-8 text-xs text-white/50">
            MC²⁺ Foundation · Implementation Partner: IIT Madras · Bootcamp Partner: IIMA Ventures ·
            An initiative under the <Link href="/studios/" className="underline">Energy &amp; Sustainability Venture Studio</Link>, School of Innovation &amp; Entrepreneurship, IIT Madras
          </p>
        </div>
      </div>
    </>
  );
}
