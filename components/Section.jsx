export function Section({ kicker, title, lead, children, className = '', dark = false }) {
  return (
    <section className={`py-16 sm:py-20 ${dark ? 'bg-navy text-white' : ''} ${className}`}>
      <div className="container-site">
        {(kicker || title) && (
          <div className="max-w-3xl">
            {kicker && <p className="kicker">{kicker}</p>}
            {title && <h2 className={`mt-2 font-display text-3xl font-bold sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>}
            {lead && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-ink/75'}`}>{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({ kicker, title, lead, children }) {
  return (
    <div className="border-b border-navy/10 bg-gradient-to-b from-gold-pale/60 to-white">
      <div className="container-site py-16 sm:py-20">
        {kicker && <p className="kicker">{kicker}</p>}
        <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold text-navy sm:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">{lead}</p>}
        {children}
      </div>
    </div>
  );
}

export const ACCENTS = {
  blue: 'bg-brand-blue/10 text-brand-blue',
  green: 'bg-brand-green/10 text-brand-green',
  red: 'bg-brand-red/10 text-brand-red',
  gold: 'bg-gold/15 text-[#9a7412]',
  navy: 'bg-navy/10 text-navy',
};
