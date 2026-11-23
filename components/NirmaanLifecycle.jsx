const STEPS = [
  { n: '01', name: 'Apply', detail: 'Register your team and idea', group: 'nirmaan' },
  { n: '02', name: 'Onboarding', detail: 'Selected teams join the cohort', group: 'nirmaan' },
  { n: '03', name: 'Pratham', detail: 'Training and market discovery', group: 'nirmaan' },
  { n: '04', name: 'Akshar', detail: 'Seed grant, MVP and business plan', group: 'nirmaan' },
  { n: '05', name: 'Incubate', detail: 'Join the IC at IITM Research Park', group: 'ic' },
  { n: '06', name: 'Incorporate', detail: 'Form the legal entity', group: 'ic' },
  { n: '07', name: 'Scale', detail: 'Grow in the IC ecosystem', group: 'ic' },
];

const GREEN = '#1B7A45';
const AMBER = '#C17A2C';

export default function NirmaanLifecycle() {
  return (
    <div id="nirmaan-lifecycle" className="mt-10 scroll-mt-28 rounded-2xl border border-navy/10 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
      <h3 className="font-display text-3xl font-bold text-navy sm:text-4xl">The Nirmaan Lifecycle</h3>
      <p className="mt-2 text-ink/60">One continuous path from first idea to a growing startup.</p>

      <ol className="mt-6 space-y-2 md:hidden">
        {STEPS.map((step) => {
          const color = step.group === 'nirmaan' ? GREEN : AMBER;
          return (
            <li key={step.n} className="flex items-center gap-3 rounded-lg px-3 py-2 text-white" style={{ backgroundColor: color }}>
              <span className="font-display text-sm font-bold">{step.n}</span>
              <span>
                <span className="font-display font-semibold">{step.name}</span>
                <span className="mt-0.5 block text-xs text-white/85">{step.detail}</span>
              </span>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 hidden overflow-x-auto pb-2 md:block">
        <div className="min-w-[52rem]">
          <div className="grid grid-cols-7">
            <p className="col-span-4 pb-3 text-center text-xs font-bold uppercase tracking-[0.16em]" style={{ color: GREEN }}>
              Nirmaan
            </p>
            <p className="col-span-3 pb-3 text-center text-xs font-bold uppercase tracking-[0.16em]" style={{ color: AMBER }}>
              IITM Incubation Cell
            </p>
          </div>

          <ol className="flex">
            {STEPS.map((step, i) => {
              const color = step.group === 'nirmaan' ? GREEN : AMBER;
              const clip =
                i === 0
                  ? 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)'
                  : 'polygon(14px 50%, 0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)';
              return (
                <li key={step.n} className="min-w-0 flex-1" style={{ marginLeft: i === 0 ? 0 : -1 }}>
                  <div
                    className="flex h-12 items-center justify-center px-4 font-display text-sm font-semibold text-white sm:text-base"
                    style={{ backgroundColor: color, clipPath: clip }}
                  >
                    {step.name}
                  </div>
                  <div className="px-2 pt-4 text-center">
                    <p className="font-display text-sm font-bold" style={{ color }}>{step.n}</p>
                    <p className="mt-1 text-xs leading-snug text-ink/70">{step.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-ink/45">
        Nirmaan · School of Innovation &amp; Entrepreneurship · IIT Madras
      </p>
    </div>
  );
}
