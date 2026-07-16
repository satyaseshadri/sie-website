import Img from './Img';

function initials(name) {
  return name
    .replace(/^(Prof\.|Dr\.|Mr\.|Ms\.|Mrs\.)\s*/gi, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export function LinkedInIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function PersonCard({ person }) {
  return (
    <div className="card flex items-center gap-4 py-4">
      {person.photo ? (
        <Img src={person.photo} alt={person.name} width={480} height={480} className="h-16 w-16 flex-none rounded-full object-cover" />
      ) : (
        <span className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-accent-pale font-display text-lg font-bold text-accent-dark">
          {initials(person.name)}
        </span>
      )}
      <div className="min-w-0">
        <p className="font-display font-semibold leading-snug text-navy">{person.name}</p>
        <p className="text-sm text-ink/60">{person.role}</p>
        <div className="mt-1 flex items-center gap-3">
          {person.email && (
            <a href={`mailto:${person.email}`} className="truncate text-xs text-brand-blue hover:underline">{person.email}</a>
          )}
          {person.linkedin && (
            <a href={person.linkedin} rel="noopener" target="_blank" className="text-[#0A66C2] hover:opacity-75" aria-label={`${person.name} on LinkedIn`}>
              <LinkedInIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
