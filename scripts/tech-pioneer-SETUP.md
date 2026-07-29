# Setup — Tech Pioneer Grant 2026

The apply page lives at `/tech-pioneer-grant/` on the SIE site (linked from
**Open Calls**). Submissions go to a Google Sheet via Apps Script.

## 1. Wire up Google Sheet + Apps Script — ~10 min

1. Create a new Google Sheet, e.g. `Tech Pioneer Grant Applications`.
2. **Extensions → Apps Script**, delete the placeholder code, paste the full
   contents of `tech-pioneer-apps-script.gs` (this folder).
3. Change `ADMIN_EMAIL` at the top if notifications should go somewhere other
   than `coo@sie.iitm.ac.in`.
4. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy → authorize when prompted
5. Copy the Web app URL (`https://script.google.com/macros/s/.../exec`).
6. Open `public/tpg/config.js` and paste that URL into
   `SCRIPT_URL` (replace the placeholder).

The apply page is `/tech-pioneer-grant/` (loads `public/tpg/form.html` inside the site).

**Test before publishing:** submit a test application — including a small
test PDF for the proposal upload — and confirm a row lands in the Sheet and
the admin/applicant emails arrive. The page always shows a success message
once the request is sent (Google Apps Script CORS); the Sheet is the real
confirmation.

### Proposal document uploads

The web form now includes the full pre-proposal template as fillable fields
(Basic Details, Brief Description, Expected Outcomes, Work Plan, Budget,
Additional Information). Applicants can optionally still download the PDF
and/or upload a filled document.

On first file upload the script creates a Drive folder named
**"Tech Pioneer Grant 2026 — Proposals"** and saves each file there.
The Sheet row stores a link to that file when one is attached.

After the folder exists:

- **Share it** with whoever reviews applications (it starts private, owned by
  the Google account that deployed the script).
- Files are capped at **10MB** in the browser — ask applicants to compress if
  a submission fails on the file step.

## 2. Fill in dates — ~5 min

In the same `config.js`:

```js
OPEN_DATE: "...",
DEADLINE_DATE: "...",
REVIEW_DATE: "...",
RESULTS_DATE: "..."
```

Categories (₹5L / ₹15L / ₹20L), incubation requirements, and domains (clean
tech, agri tech, fintech) are already in the page HTML. Edit
`public/tpg/form.html` directly if copy needs to change.

## 3. Publish

Redeploy / rebuild the SIE site as usual. The grant form assets are under
`public/tpg/` — no extra Netlify drop needed.

## Domains

Domain of interest is a multi-select checkbox. To allow other domains, add a
checkbox in the form section of `index.html`.
