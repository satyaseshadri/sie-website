# SIE IIT Madras — Website

Rebuilt site for the School of Innovation & Entrepreneurship, IIT Madras.
Next.js 14 (App Router) · Tailwind CSS · static export (no server required).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy

```bash
npm run build      # outputs a fully static site to ./out
```

Upload the contents of `out/` to any web server (Apache/Nginx on institute infra works as-is).
No Node server needed in production.

## Editing content — no code required

All content lives in `data/*.json`. Edit the file, rebuild, redeploy.

| File | What it controls |
|---|---|
| `data/site.json` | Name, tagline, contact details, homepage stats |
| `data/news.json` | News items (newest first; `slug` must be unique) |
| `data/startups.json` | Funded ventures showcase |
| `data/team.json` | Leadership messages, staff list, mentors |
| `data/programs.json` | All five program pages (facts, copy, eligibility, CTA) |
| `data/projects.json` | MS(E) open project list |
| `data/students.json` | MS(E) scholar directory (filterable by batch) |
| `data/awards.json` | Awards & recipients |

### Adding a news item

Append to `data/news.json`:

```json
{
  "slug": "my-unique-slug",
  "title": "Headline",
  "date": "2026-08-01",
  "tag": "Event",
  "summary": "One-paragraph summary."
}
```

Tags: `Event`, `People`, `Milestone`, `Visit` (each gets its own colour).

## Design system

- Navy `#141432` + gold `#D9A62E` = SIE core identity
- Program/sub-brand accents: Nirmaan green `#2F9E63`, CFI red `#D62828`, MS(E) blue `#2A4DD0`
- Fonts: Poppins (display), Inter (body)
- Fully responsive, WCAG-AA contrast, reduced-motion respected, semantic HTML + JSON-LD

## GitHub Pages (reference deployment)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with
`BASE_PATH=/<repo-name>` and publishes it to GitHub Pages automatically
(no manual settings needed — the workflow enables Pages itself; repo must be public).
The live URL appears in the repo's Actions run and under Settings → Pages.

For production at sie.iitm.ac.in, build **without** `BASE_PATH` (`npm run build`) and
upload `out/` — links then resolve from the domain root.

## Content to verify before launch

- MS(E) monthly HTRA stipend (₹12,400) — taken from the current MS(E) mini-site.
- Application cycle dates (UG-FIR/PG-FIR/MS July 2026 intake) — confirm current status.
- Mentor list is minimal (3 names on the old site) — expand `data/team.json` → `mentors`.

## Redirects from old URLs

Configure on the web server (old SPA routes → new pages), e.g. Nginx:

```
rewrite ^/about_us/?$        /about/            permanent;
rewrite ^/our-team/?$        /people/           permanent;
rewrite ^/initiatives/?$     /ecosystem/        permanent;
rewrite ^/mentors/?$         /people/           permanent;
rewrite ^/academics/overview/?$        /programs/ms/     permanent;
rewrite ^/academics/overview/phd/?$    /programs/phd/    permanent;
rewrite ^/academics/courses/?$         /programs/courses/ permanent;
rewrite ^/academics/awards/?$          /awards/           permanent;
rewrite ^/scholorship/ugfir/?$         /programs/ugfir/   permanent;
rewrite ^/scholorship/pgfir/?$         /programs/pgfir/   permanent;
```
