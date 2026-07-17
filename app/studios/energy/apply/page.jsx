import Link from 'next/link';
import EoiForm from './EoiForm';

export const metadata = {
  title: 'Apply — MC²⁺ Ignite Cohort 1',
  description: 'Application guide and expression of interest for MC²⁺ Ignite Cohort 1 — applications open 1 August 2026 at apply.mc2foundation.org.',
  robots: { index: false, follow: false },
};

const NAVY = '#1F3864';
const GOLD = '#C9961A';

const SECTIONS = [
  {
    name: 'A · Company basics',
    items: ['Legal name (as in CIN) and trade name', 'CIN / LLPIN', 'Date of incorporation', 'Registered & operating addresses', 'Website', 'One-line company description (240 chars)', 'Stage: pre-product / prototype / early revenue / scaling', 'Other accelerators applied to in the last 12 months (optional)'],
  },
  {
    name: 'B · Team',
    items: ['Founder profiles (up to 4): role, LinkedIn, full-time status, equity %, 3-line bio', 'Total full-time headcount', 'Named advisors and board (optional)'],
  },
  {
    name: 'C · Technology & IP',
    items: ['Self-rated TRL (1–9) with documented evidence — be honest; over-claiming is caught at diligence', 'Core technology in 200 words', 'Demonstrations outside the lab', 'IP status and patent/application numbers', 'Top 3 technical risks', 'Optional: prototype video (≤3 min) or technical deck (≤10 slides)'],
  },
  {
    name: 'D · Market & traction',
    items: ['Target customer segment', 'TAM and 5-year SAM (₹ Cr, with sourcing)', 'Paying customers and last-12-month revenue', 'Pilot LOIs / MoUs (upload optional)', 'Top 3 competitors', 'Your unfair advantage in 2 sentences'],
  },
  {
    name: 'E · Financials & ask',
    items: ['Total external capital raised (≤ ₹10 Cr to be eligible)', 'Last fundraise details', 'Cash position, monthly burn, runway', 'Funding ask (≤ ₹2 Cr) and why', 'Use of funds split across people / R&D-pilot / IP-legal / GTM / capex / working capital', 'Next fundraise plan', 'Optional: 18-month financial model'],
  },
  {
    name: 'F · Theme fit',
    items: ['Exactly one primary theme (+ optional secondary) across the ten MC²⁺ themes — five in O&G Core, five in Energy Transition. If your work doesn\'t fit a theme, it likely isn\'t a fit for the programme.'],
  },
  {
    name: 'G · References & attachments',
    items: ['Two references — one technical, one business/customer', 'Pitch deck (PDF, ≤10 MB, ≤20 slides) — required', 'Founder pitch video (optional, strongly encouraged)', 'Conflict declaration covering MC²⁺ Foundation, the 7 energy majors and all programme nodes', 'Founder agreement & primary contact'],
  },
];

export default function Apply() {
  return (
    <>
      <div style={{ backgroundColor: NAVY }} className="text-white">
        <div className="container-site py-14 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: GOLD }}>MC²⁺ Ignite · Cohort 1 · Applications</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">Prepare your application</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Applications open <strong className="text-white">1 August 2026</strong> on the official portal and close
            25 August 2026, 23:59 IST — no late submissions. The form takes about 90 minutes; you can save and
            return. Results by email no later than 10 September 2026.
          </p>
          <a href="https://apply.mc2foundation.org" rel="noopener" target="_blank" className="mt-7 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-display text-sm font-semibold text-[#1a1a1a]" style={{ backgroundColor: GOLD }}>
            Apply at apply.mc2foundation.org ↗
          </a>
        </div>
      </div>

      <section className="border-b border-navy/10 py-14">
        <div className="container-site grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-bold" style={{ color: NAVY }}>What the application asks</h2>
            <p className="mt-2 max-w-xl text-sm text-ink/60">
              Gather this before you start. Mandatory unless marked optional.
            </p>
            <div className="mt-6 space-y-4">
              {SECTIONS.map((s) => (
                <div key={s.name} className="rounded-xl border border-navy/10 bg-white p-5">
                  <p className="font-display font-bold" style={{ color: NAVY }}>{s.name}</p>
                  <ul className="mt-2 space-y-1.5">
                    {s.items.map((i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink/75"><span style={{ color: GOLD }}>▪</span>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink/60">
              Full programme details are on the <Link href="/studios/energy/" className="font-semibold underline" style={{ color: NAVY }}>MC²⁺ Ignite page</Link>.
            </p>
          </div>
          <div className="lg:col-span-2">
            <EoiForm />
          </div>
        </div>
      </section>
    </>
  );
}
