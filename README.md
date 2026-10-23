# CreatorTax PH — GitHub Pages starter

A static, bilingual (English/Filipino) educational tax estimator for Philippine TikTok affiliates and TikTok Shop sellers. Built with plain HTML, CSS, and JavaScript; no backend, account, database, or API key is needed.

## Files
- `index.html` — page content, inputs, and source links
- `styles.css` — responsive layout and print styles
- `app.js` — bilingual labels, estimates, warnings, and copyable report

## Run locally
Open `index.html` in a modern browser. No build step is needed.

## Publish with GitHub Pages
1. Create a GitHub repository (for example, `creator-tax-ph`).
2. Upload `index.html`, `styles.css`, `app.js`, and `README.md` to the repository root.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the published address to appear in Settings → Pages.

## What this version separates
- Affiliate commissions actually earned versus seller sales. Affiliate sales attributed to a creator are not treated as the creator's income.
- Seller sales before returns/allowances/discounts, then net seller sales.
- Itemized deductions versus the 40% Optional Standard Deduction (OSD). The calculator does not combine these methods.
- Actual seller marketplace withholding entered from records versus an illustrative withholding calculation. Only the actual withholding entered is counted among tax credits.
- Other creditable income tax entered from valid certificates.

## Calculation assumptions and limitations
This is **not a production tax engine** and has not been certified by the BIR or a Philippine CPA. It estimates individual business income tax only.

- **Graduated income tax rates** use the individual rates effective 1 January 2023 onwards: 0% up to ₱250,000; 15% on the excess over ₱250,000 up to ₱400,000; then 20%, 25%, 30%, and 35% brackets.
- **Itemized method:** the estimate subtracts entered seller cost of goods sold and other entered allowable expenses from total business receipts. Only legally deductible, documented expenses should be entered.
- **OSD method:** the estimate uses 40% of total entered business receipts as the standard deduction. Itemized expenses and cost of sales are not subtracted again.
- **8% option:** the estimate applies 8% to gross business receipts above ₱250,000 for a user who selects business-only income, and to gross business receipts without that ₱250,000 reduction when mixed income is selected. The app cannot verify individual eligibility, timely election, registration, the correct base for every income type, or special cases. It shows warnings; mixed-income results remain incomplete because salary tax is not combined.
- **Marketplace withholding:** the illustrative figure is 1% × one-half of the gross remittances the user confirms are subject to the seller rule. It does not decide whether the ₱500,000 prior-year/current-year threshold, sworn declaration, exemption, or platform conditions are met. The illustrative amount is not automatically counted as a tax credit. Enter the actual amount withheld from seller records/certificates in the separate field.
- The calculator does not calculate VAT, percentage tax, compensation tax, filing obligations/deadlines, local taxes, penalties, carryovers, corporate tax, nonresident tax, or every credit and deduction. It does not determine whether any specific TikTok payment is subject to a particular withholding treatment.
- An estimated balance is not a final amount payable. Excess entered credits are displayed as a comparison only, not a promise of refund or carryover.

Before using this publicly for tax decisions, have a Philippine CPA or tax professional review the formulas and wording against the latest rules. Tax laws and platform practices can change.

## Official reference links
- BIR Revenue Regulations No. 16-2023: https://bir-cdn.bir.gov.ph/BIR/pdf/RR%2016-2023.pdf
- BIR Revenue Memorandum Circular No. 8-2024: https://bir-cdn.bir.gov.ph/BIR/pdf/RMC%20No.%208-2024%20%281%29.pdf
- BIR Form 1701Q rate table: https://efps.bir.gov.ph/efps-war/EFPSWeb_war/forms2018Version/1701Q/1701q_v3_02.xhtml
- BIR forms and guidance: https://www.bir.gov.ph/bir-forms
- TikTok Shop Philippines seller withholding guide: https://seller-ph.tiktok.com/university/essay?default_language=en&knowledge_id=5536537333270273

## Privacy
All calculations run in the visitor's browser. The form values are not transmitted to a server or saved by this website. The copy-summary feature copies data only after the visitor clicks it.
