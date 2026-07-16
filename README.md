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

## News & feed bots

`.github/workflows/feed.yml` runs daily (08:00 IST): `scripts/update-feed.js` scans Google News
RSS for every startup in `data/nirmaan-startups.json`, keeps milestone stories (funding, awards,
launches, patents), and commits `data/startup-feed.json` — which triggers a site rebuild, so the
Startups page refreshes automatically. Add/remove startups by editing `data/nirmaan-startups.json`.
The current feed is seeded with verified milestones from SIE records; the bot replaces it as it
finds fresh news. Run manually from the Actions tab ("Update startup feed" → Run workflow).

A second bot, `scripts/update-school-news.js`, runs in the same workflow: it scans for IIT Madras
innovation & entrepreneurship press coverage (SIE, Nirmaan, CFI, E-Summit, Delta Expo, Research
Park, incubation) and writes `data/school-news-feed.json`, shown as "Around the ecosystem" on the
News page. Tune its search queries in the `QUERIES` array at the top of the script.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co) (`formsubmit.co/ajax/support@sieiitm.org`).
**One-time activation:** the first submission sends a confirmation email to support@sieiitm.org —
click the link in it once, and all subsequent messages are delivered. No server needed.

## Content to verify before launch

- Four CFI faculty-advisor LinkedIn links on the old site pointed to the wrong profiles
  (Sathyan Subbiah, Anuj Kumar Tiwari, Sivakumar M.S., Karthik Raman) — they are left blank
  in `data/team.json`; add the correct URLs when available. Joel George M (Nirmaan list)
  also had a wrong link (pointed to Boby George).

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
