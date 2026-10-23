(() => {
  const $ = (id) => document.getElementById(id);
  const peso = (n) => new Intl.NumberFormat("en-PH", {style:"currency",currency:"PHP",minimumFractionDigits:2,maximumFractionDigits:2}).format(Number.isFinite(n) ? n : 0);
  const translations = {
    en: {
      print:"Print report", eyebrow:"PHILIPPINES · TAX YEAR 2026", headline:'Know your numbers.<br><span>Plan your taxes.</span>',
      intro:"Estimate your business income tax and marketplace withholding separately. This free tool is educational and is not an official BIR assessment.",
      tag1:"Affiliate commissions",tag2:"TikTok Shop sales",tag3:"English / Filipino",important:"Important:",notice:"Withholding tax is generally a tax credit, not automatically your final income tax. Results depend on your registration, other income, deductions, VAT status, and current BIR rules.",
      yourDetails:"Your details",annualEstimate:"Annual estimate",role:"How do you earn on TikTok?",affiliate:"Affiliate / creator commissions",seller:"TikTok Shop seller",both:"Both affiliate and seller",
      taxRegime:"Income tax method (select only if eligible)",graduated:"Graduated income tax rates",eight:"8% option (eligible non-VAT individual)",regimeHelp:"The 8% option is not available to everyone. It generally requires a qualified individual taxpayer, gross sales/receipts within the VAT threshold, and a valid election. Mixed-income cases need special handling.",
      vatStatus:"VAT status",nonVat:"Non-VAT",vatRegistered:"VAT-registered",unsure:"Not sure",otherIncome:"Salary / other income?",no:"No — business only",yes:"Yes — mixed income",
      incomeCosts:"Income & costs",grossIncome:"Annual gross business income (₱)",grossHelp:"Affiliate: commissions/other business receipts. Seller: use a consistent sales/receipts figure for your chosen tax method, not just the bank payout. Don't subtract costs twice.",
      expenses:"Annual allowable business expenses (₱)",credits:"Creditable income tax withheld (BIR Form 2307, etc.) (₱)",creditsHelp:"Enter actual creditable income tax shown on valid certificates. Do not include VAT or platform-fee deductions unless they are confirmed income-tax credits.",
      platformTax:"Marketplace withholding",remittance:"Annual qualifying gross remittances from marketplace (₱)",declaration:"I submitted a BIR-received sworn declaration for the ₱500,000 threshold (seller rules).",
      remitHelp:"The 1% marketplace withholding applies to one-half of covered gross remittances, subject to threshold and exemption rules. This is separate from withholding on platform service fees.",
      calculate:"Calculate estimate",reset:"Reset example",yourEstimate:"Your estimate",estimateOnly:"Estimate only",estimatedIncomeTax:"Estimated income tax before credits",taxableIncome:"Estimated taxable income",
      marketplaceWht:"Estimated marketplace withholding",creditableTax:"Creditable income tax entered",balance:"Estimated income tax balance after entered credits",remainingWht:"Marketplace withholding (not automatically final tax)",
      howCalculated:"How we calculated it",printReport:"Print / Save as PDF",copySummary:"Copy summary",quickGuide:"Quick guide & official sources",
      affiliateGuide:"Affiliates / creators",affiliateText:"Commission income is generally business/professional income. Your correct treatment depends on registration, other income, the tax option elected, and whether any withholding is shown on valid tax documents.",
      sellerGuide:"Shop sellers",sellerText:"RR 16-2023 provides 1% creditable withholding on one-half of covered marketplace gross remittances, subject to the ₱500,000 rules and exemptions. It does not replace the annual income tax calculation.",
      businessTaxGuide:"Percentage tax / VAT",businessTaxText:"Business tax treatment is separate from income tax. VAT status and the applicable threshold should be verified against current BIR guidance; this starter does not calculate VAT or percentage tax.",
      sources:"Official references",disclaimerTitle:"Disclaimer",disclaimerText:"This is an educational estimator, not tax, legal, or accounting advice and not a BIR product. It uses simplified assumptions and may not cover mixed-income taxpayers, corporations, special tax incentives, nonresident taxpayers, VAT, percentage tax, local taxes, penalties, or all credits/deductions. Confirm your tax regime and current obligations with the BIR or a qualified Philippine tax professional before filing or paying.",
      footer:"No account needed. Calculations run in your browser.",mixedWarning:"Mixed-income selected: this simplified estimator cannot correctly combine salary and business income. Treat the result as incomplete and consult a tax professional.",
      vatWarning:"VAT-registered or unsure: do not use the 8% option in this estimate. Select graduated rates and verify your treatment with the BIR.",
      eightWarning:"8% option selected: estimate assumes a qualified individual taxpayer, non-VAT status, valid election, and purely business/professional income. The ₱250,000 reduction is not applied to business income for mixed-income taxpayers.",
      thresholdWarning:"Marketplace withholding may depend on prior-year and current-year cumulative gross remittances, your sworn declaration, and exemption documents. This is a rough estimate only.",
      expenseWarning:"Expenses exceed gross income; taxable income is shown as zero for this simplified estimate. Loss rules and carryovers are not modeled.",
      overThreshold:"Gross receipts exceed ₱3,000,000: the 8% option may not be available and VAT registration may be required. Verify current rules.",
      formulaGross:"Gross business income entered: ",formulaExpense:"Less allowable expenses entered: ",formulaTaxable:"Simplified taxable income: ",formulaIncomeTax:"Estimated income tax before credits: ",
      formulaWht:"Marketplace withholding estimate = 1% × 50% × qualifying gross remittances (threshold/exemption checks are not fully modeled): ",
      formulaCredits:"Less creditable income tax entered: ",formulaBalance:"Estimated balance (not including unentered credits or other taxes): ",
      regimeGraduated:"Graduated rates (simplified)",regimeEight:"8% option (simplified)",copyDone:"Summary copied.",copyFail:"Copy unavailable; select and copy the report manually."
    },
    fil: {
      print:"I-print ang ulat",eyebrow:"PILIPINAS · TAON NG BUWIS 2026",headline:'Alamin ang iyong kita.<br><span>Planuhin ang buwis.</span>',
      intro:"Tantiyahin nang magkahiwalay ang income tax sa negosyo at withholding tax sa marketplace. Gabay lamang ito, hindi opisyal na assessment ng BIR.",
      tag1:"Komisyon ng affiliate",tag2:"Benta sa TikTok Shop",tag3:"English / Filipino",important:"Mahalaga:",notice:"Karaniwang tax credit ang withholding tax at hindi awtomatikong panghuling income tax. Nakadepende ang resulta sa rehistro, ibang kita, deductions, VAT status, at kasalukuyang tuntunin ng BIR.",
      yourDetails:"Iyong detalye",annualEstimate:"Taunang tantiya",role:"Paano ka kumikita sa TikTok?",affiliate:"Affiliate / komisyon ng creator",seller:"TikTok Shop seller",both:"Affiliate at seller",
      taxRegime:"Paraan ng income tax (piliin lamang kung kwalipikado)",graduated:"Graduated income tax rates",eight:"8% option (kwalipikadong non-VAT na indibidwal)",regimeHelp:"Hindi para sa lahat ang 8% option. Karaniwang kailangan ang kwalipikadong indibidwal, kita sa loob ng VAT threshold, at wastong pagpili ng tax option. May espesyal na pagtrato sa mixed-income cases.",
      vatStatus:"VAT status",nonVat:"Non-VAT",vatRegistered:"VAT-registered",unsure:"Hindi sigurado",otherIncome:"May sahod / ibang kita?",no:"Wala — negosyo lamang",yes:"Oo — mixed income",
      incomeCosts:"Kita at gastos",grossIncome:"Kabuuang taunang kita sa negosyo (₱)",grossHelp:"Affiliate: komisyon/ibang business receipts. Seller: gumamit ng pare-parehong sales/receipts figure ayon sa tax method, hindi lang netong payout sa bangko. Huwag ibawas nang dalawang beses ang gastos.",
      expenses:"Taunang pinapayagang gastos sa negosyo (₱)",credits:"Creditable income tax na na-withhold (BIR Form 2307, atbp.) (₱)",creditsHelp:"Ilagay ang aktuwal na creditable income tax sa wastong sertipiko. Huwag isama ang VAT o platform-fee deductions maliban kung kumpirmadong income-tax credits.",
      platformTax:"Marketplace withholding",remittance:"Taunang kwalipikadong gross remittances mula sa marketplace (₱)",declaration:"Nagsumite ako ng sworn declaration na natanggap ng BIR para sa ₱500,000 threshold (tuntunin sa seller).",
      remitHelp:"Ang 1% marketplace withholding ay para sa kalahati ng saklaw na gross remittances, alinsunod sa threshold at exemptions. Hiwalay ito sa withholding sa platform service fees.",
      calculate:"Kalkulahin ang tantiya",reset:"Ibalik ang halimbawa",yourEstimate:"Iyong tantiya",estimateOnly:"Tantiya lamang",estimatedIncomeTax:"Tinatayang income tax bago credits",taxableIncome:"Tinatayang taxable income",
      marketplaceWht:"Tinatayang marketplace withholding",creditableTax:"Inilagay na creditable income tax",balance:"Tinatayang balanse ng income tax pagkatapos ng credits",remainingWht:"Marketplace withholding (hindi awtomatikong final tax)",
      howCalculated:"Paano ito kinalkula",printReport:"I-print / I-save bilang PDF",copySummary:"Kopyahin ang buod",quickGuide:"Maikling gabay at opisyal na sanggunian",
      affiliateGuide:"Affiliate / creator",affiliateText:"Karaniwang business/professional income ang komisyon. Nakadepende ang tamang pagtrato sa rehistro, ibang kita, napiling tax option, at withholding na nakasaad sa wastong dokumento.",
      sellerGuide:"Mga seller",sellerText:"Itinatakda ng RR 16-2023 ang 1% creditable withholding sa kalahati ng saklaw na gross remittances, alinsunod sa ₱500,000 rules at exemptions. Hindi nito pinapalitan ang taunang income tax computation.",
      businessTaxGuide:"Percentage tax / VAT",businessTaxText:"Hiwalay ang business tax sa income tax. Suriin ang VAT status at kasalukuyang threshold sa gabay ng BIR; hindi kinukuwenta ng starter na ito ang VAT o percentage tax.",
      sources:"Opisyal na sanggunian",disclaimerTitle:"Paalala",disclaimerText:"Pang-edukasyong tantiya ito, hindi payong legal, accounting o buwis, at hindi produkto ng BIR. Pinapasimple nito ang mga palagay at maaaring hindi saklaw ang mixed-income taxpayers, korporasyon, special tax incentives, nonresident taxpayers, VAT, percentage tax, lokal na buwis, penalties, o lahat ng credits/deductions. Kumpirmahin ang tax regime at obligasyon sa BIR o kwalipikadong tax professional bago mag-file o magbayad.",
      footer:"Hindi kailangan ng account. Sa browser mo tumatakbo ang kalkulasyon.",mixedWarning:"Pinili ang mixed income: hindi wastong napagsasama ng simpleng estimator na ito ang sahod at kita sa negosyo. Hindi kumpleto ang resulta; kumonsulta sa tax professional.",
      vatWarning:"VAT-registered o hindi sigurado: huwag gamitin ang 8% option sa tantiyang ito. Piliin ang graduated rates at kumpirmahin sa BIR.",
      eightWarning:"Pinili ang 8% option: ipinapalagay na kwalipikadong indibidwal, non-VAT, wastong pagpili, at purong business/professional income. Hindi ibinabawas ang ₱250,000 sa business income ng mixed-income taxpayers.",
      thresholdWarning:"Maaaring nakadepende ang marketplace withholding sa gross remittances noong nakaraang taon at kasalukuyang taon, sworn declaration, at exemption documents. Tantiya lamang ito.",
      expenseWarning:"Mas mataas ang gastos kaysa gross income; zero ang taxable income sa simpleng tantiyang ito. Hindi nito minomodelo ang loss rules at carryovers.",
      overThreshold:"Lampas ₱3,000,000 ang gross receipts: maaaring hindi available ang 8% option at maaaring kailangan ang VAT registration. Kumpirmahin ang kasalukuyang tuntunin.",
      formulaGross:"Gross business income na inilagay: ",formulaExpense:"Ibawas ang pinapayagang gastos na inilagay: ",formulaTaxable:"Pinapayak na taxable income: ",formulaIncomeTax:"Tinatayang income tax bago credits: ",
      formulaWht:"Tantiya ng marketplace withholding = 1% × 50% × kwalipikadong gross remittances (hindi ganap na nasusuri ang threshold/exemptions): ",
      formulaCredits:"Ibawas ang creditable income tax na inilagay: ",formulaBalance:"Tinatayang balanse (hindi kasama ang hindi nailagay na credits o ibang buwis): ",
      regimeGraduated:"Graduated rates (pinapayak)",regimeEight:"8% option (pinapayak)",copyDone:"Nakopya ang buod.",copyFail:"Hindi makopya; piliin at kopyahin nang mano-mano ang ulat."
    }
  };
  let lang = "en";
  function tr(key){return translations[lang][key] || translations.en[key] || key;}
  function money(id, value){$(id).textContent = peso(value);}
  function graduatedTax(taxable) {
    const x = Math.max(0, taxable);
    if (x <= 250000) return 0;
    if (x <= 400000) return (x - 250000) * .15;
    if (x <= 800000) return 22500 + (x - 400000) * .20;
    if (x <= 2000000) return 102500 + (x - 800000) * .25;
    if (x <= 8000000) return 402500 + (x - 2000000) * .30;
    return 2202500 + (x - 8000000) * .35;
  }
  function calculate() {
    const gross = Math.max(0, Number($("gross").value) || 0);
    const expenses = Math.max(0, Number($("expenses").value) || 0);
    const credits = Math.max(0, Number($("credits").value) || 0);
    const remittance = Math.max(0, Number($("remittance").value) || 0);
    const regime = $("regime").value, vat = $("vat").value, mixed = $("mixed").value;
    const taxable = Math.max(0, gross - (regime === "eight" ? 0 : expenses));
    let tax = regime === "eight" ? Math.max(0, gross - (mixed === "yes" ? 0 : 250000)) * .08 : graduatedTax(taxable);
    const marketWht = remittance * .5 * .01;
    const balance = Math.max(0, tax - credits);
    money("incomeTax", tax); money("taxableIncome", taxable); money("marketWht", marketWht);
    money("creditsOut", credits); money("balance", balance); money("whtStatus", marketWht);
    $("regimeLabel").textContent = regime === "eight" ? tr("regimeEight") : tr("regimeGraduated");
    const warnings = [];
    if (mixed === "yes") warnings.push(tr("mixedWarning"));
    if (regime === "eight" && (vat !== "nonvat" || gross > 3000000)) warnings.push(tr(vat !== "nonvat" ? "vatWarning" : "overThreshold"));
    if (regime === "eight") warnings.push(tr("eightWarning"));
    if (expenses > gross && regime === "graduated") warnings.push(tr("expenseWarning"));
    warnings.push(tr("thresholdWarning"));
    $("warnings").innerHTML = warnings.map(w => `<div class="warning">${escapeHtml(w)}</div>`).join("");
    const steps = [
      tr("formulaGross") + peso(gross),
      tr("formulaExpense") + peso(regime === "eight" ? 0 : expenses),
      tr("formulaTaxable") + peso(taxable),
      tr("formulaIncomeTax") + peso(tax),
      tr("formulaWht") + peso(marketWht),
      tr("formulaCredits") + peso(credits),
      tr("formulaBalance") + peso(balance)
    ];
    $("formulaList").innerHTML = steps.map(s => `<li>${escapeHtml(s)}</li>`).join("");
    return {gross,expenses,credits,remittance,taxable,tax,marketWht,balance,regime,vat,mixed};
  }
  function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
  function applyLanguage() {
    document.documentElement.lang = lang === "fil" ? "fil" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    $("langToggle").textContent = lang === "en" ? "Filipino" : "English";
    calculate();
  }
  $("taxForm").addEventListener("submit", e => {e.preventDefault();calculate();});
  ["role","regime","vat","mixed","gross","expenses","credits","remittance","declaration"].forEach(id => $(id).addEventListener("input", calculate));
  $("langToggle").addEventListener("click",()=>{lang=lang==="en"?"fil":"en";applyLanguage();});
  $("resetBtn").addEventListener("click",()=>{
    $("role").value="affiliate";$("regime").value="graduated";$("vat").value="nonvat";$("mixed").value="no";
    $("gross").value=600000;$("expenses").value=150000;$("credits").value=0;$("remittance").value=600000;$("declaration").checked=false;calculate();
  });
  $("copyBtn").addEventListener("click",async()=>{
    const r=calculate();
    const summary = `CreatorTax PH — Educational estimate\nTax year: 2026\nRole: ${$("role").selectedOptions[0].text}\nTax method: ${r.regime}\nGross business income: ${peso(r.gross)}\nExpenses entered: ${peso(r.expenses)}\nEstimated taxable income: ${peso(r.taxable)}\nEstimated income tax before credits: ${peso(r.tax)}\nCreditable income tax entered: ${peso(r.credits)}\nEstimated income tax balance after entered credits: ${peso(r.balance)}\nEstimated marketplace withholding (separate): ${peso(r.marketWht)}\nDisclaimer: Simplified educational estimate, not tax advice or a BIR assessment.`;
    try { await navigator.clipboard.writeText(summary); $("copyStatus").textContent=tr("copyDone"); }
    catch { $("copyStatus").textContent=tr("copyFail"); }
  });
  calculate();
})();