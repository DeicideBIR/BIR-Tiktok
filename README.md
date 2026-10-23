# CreatorTax PH — GitHub Pages starter

A static, bilingual (English/Filipino) educational tax estimator for Philippine TikTok affiliates and TikTok Shop sellers. It uses plain HTML, CSS, and JavaScript. No backend, account, database, or API key is needed.

## Files

- `index.html` — page content and source links
- `styles.css` — responsive layout and print styles
- `app.js` — calculations, bilingual labels, warnings, and copyable report

## Run locally

Open `index.html` in a modern browser. The calculator works without a build step. Google Fonts are optional; the page falls back to system fonts if offline.

## Publish using GitHub Pages

1. Sign in to GitHub and create a new repository, for example `creator-tax-ph`.
2. Upload `index.html`, `styles.css`, `app.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder, then click **Save**.
6. Wait for GitHub Pages to publish the site. The public address will be shown in Settings → Pages.
7. After edits, commit changes to the selected branch; Pages will redeploy automatically.

For a custom domain, configure it in Settings → Pages and follow GitHub's DNS instructions.

## Tax logic and important limitations

This is a starter estimator, not a production tax engine. The calculation assumes a simplified individual business-income case:

- **Graduated rates** use the individual income tax brackets effective from 1 January 2023 onward: 0% up to ₱250,000; 15% on the excess over ₱250,000 up to ₱400,000; then 20%, 25%, 30%, and 35% brackets.
- **8% option** is modeled as 8% of gross receipts above ₱250,000 for a simplified qualified individual with purely business/professional income. It is not available to all taxpayers. Mixed-income cases, VAT registration, eligibility, election timing, and special circumstances need separate treatment. This implementation shows warnings but cannot determine eligibility.
- **Marketplace withholding** is shown separately as 1% × 50% × entered qualifying gross remittances. Actual application depends on RR 16-2023, threshold conditions, the sworn declaration, exemption documentation, and the marketplace's definition of gross remittances. The checkbox records a user input but does not override threshold checks or determine eligibility.
- The estimate does **not** calculate VAT, percentage tax, local taxes, penalties, corporate tax, compensation tax, mixed-income combined tax, special tax regimes, deductions that require detailed validation, or every credit/payment.
- Withholding is not automatically the final tax. Only enter creditable income-tax amounts supported by the relevant BIR certificates. Marketplace withholding and platform service-fee withholding are distinct.

Before public launch, have a Philippine CPA or tax lawyer review the formulas, edge cases, and all text against the latest BIR issuances. Add a visible version/date for the tax logic and an update process whenever tax rules change.

## Official reference links

- BIR Revenue Regulations No. 16-2023: https://bir-cdn.bir.gov.ph/BIR/pdf/RR%20No.%2016-2023%203.pdf
- BIR Revenue Memorandum Circular No. 8-2024: https://bir-cdn.bir.gov.ph/BIR/pdf/RMC%20No.%208-2024.pdf
- BIR Form 1701Q rate table: https://efps.bir.gov.ph/efps-war/EFPSWeb_war/forms2018Version/1701Q/1701q_v3_02.xhtml
- BIR Tax Information: https://www.bir.gov.ph/tax-info-details
- TikTok Shop Philippines seller withholding guide: https://seller-ph.tiktok.com/university/essay?default_language=en&knowledge_id=5536537333270273
- TikTok Shop Philippines creator tax information: https://seller-ph.tiktok.com/university/essay?knowledge_id=842240898205457&lang=en

## Privacy

The calculator does not transmit form values to a server. Data is calculated in the visitor's browser and is not saved after closing/reloading the page. The copy-summary feature only copies a report after the visitor clicks it.
