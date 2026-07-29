/**
 * Backend for the Tech Pioneer Grant 2026 microsite.
 *
 * SETUP: see tech-pioneer-SETUP.md in this folder.
 * 1. Create a Google Sheet, Extensions > Apps Script, paste this file.
 * 2. Set ADMIN_EMAIL if needed.
 * 3. Deploy > New deployment > Web app > Execute as Me > Anyone.
 * 4. Paste the URL into public/tpg/config.js → SCRIPT_URL.
 *
 * Optional uploaded proposal PDFs are saved to a Drive folder; the sheet
 * stores a link. Pre-proposal answers are written as columns from the form.
 */

const ADMIN_EMAIL = "coo@sie.iitm.ac.in";
const PROPOSALS_FOLDER_NAME = "Tech Pioneer Grant 2026 — Proposals";

const HEADERS = [
  "submittedAt",
  "category",
  "domain",
  "ventureName",
  "teamName",
  "applicantName",
  "role",
  "email",
  "phone",
  "cohort",
  "preIncubationStatus",
  "incubationStatus",
  "deckLink",
  "briefDescription",
  "expectedOutcomes",
  "workPlan",
  "budgetDetails",
  "totalBudget",
  "additionalInfo",
  "proposalFileLink"
];

function getProposalsFolder() {
  const existing = DriveApp.getFoldersByName(PROPOSALS_FOLDER_NAME);
  if (existing.hasNext()) return existing.next();
  return DriveApp.createFolder(PROPOSALS_FOLDER_NAME);
}

function saveProposalFile(e) {
  if (!e.parameter.proposalFileData) return "";
  try {
    const bytes = Utilities.base64Decode(e.parameter.proposalFileData);
    const mimeType = e.parameter.proposalFileType || "application/octet-stream";
    const originalName = e.parameter.proposalFileName || "proposal";
    const fileName = `${e.parameter.ventureName || "Unnamed venture"} — ${originalName}`;
    const blob = Utilities.newBlob(bytes, mimeType, fileName);
    const file = getProposalsFolder().createFile(blob);
    return file.getUrl();
  } catch (err) {
    return "Upload failed: " + err.message;
  }
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  const proposalFileLink = saveProposalFile(e);

  const row = HEADERS.map(key => {
    if (key === "proposalFileLink") return proposalFileLink;
    return e.parameter[key] || "";
  });
  sheet.appendRow(row);

  try {
    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject: `New Tech Pioneer Grant application: ${e.parameter.ventureName || "Unnamed venture"}`,
      body: `Category: ${e.parameter.category}\nDomain: ${e.parameter.domain}\nProject: ${e.parameter.ventureName}\nTeam: ${e.parameter.teamName}\nApplicant: ${e.parameter.applicantName} (${e.parameter.email})\n\nBrief description:\n${e.parameter.briefDescription || ""}\n\nProposal file: ${proposalFileLink || "not attached"}\n\nFull submission is in the response sheet.`
    });
  } catch (err) {
    // Non-fatal — the row is already recorded.
  }

  try {
    if (e.parameter.email) {
      MailApp.sendEmail({
        to: e.parameter.email,
        subject: "Application received — Tech Pioneer Grant 2026",
        body: `Hi ${e.parameter.applicantName || ""},\n\nWe've received your pre-proposal application for "${e.parameter.ventureName}" under the "${e.parameter.category}" category.\n\nWe'll be in touch with next steps once the review window closes.\n\n— School of Innovation & Entrepreneurship, IIT Madras`
      });
    }
  } catch (err) {
    // Non-fatal.
  }

  return ContentService.createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput("Tech Pioneer Grant backend is live. POST applications here.");
}
