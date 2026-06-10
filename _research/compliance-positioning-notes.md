# Alef — Compliance Positioning Research Notes

> Internal working notes. NOT published (the `_research/` folder is ignored by Jekyll/GitHub Pages).
> Purpose: raw material for building the compliance + legal positioning on alef.legal.
> Compiled 2026-06-09.

## Strategic frame (from founder)

Alef = **the legal AND compliance extension of a company's existing in-house teams.** We expand
capacity and integrate with existing legal + compliance functions — we do not replace them.

- **Legal practice** = fractional-GC support for an existing legal team. *(Already built on the site.)*
- **Compliance practice** = the NEW focus: **regulatory filing + license management.** Alef becomes the
  operational **point-of-contact (POC)** that owns recurring regulatory reporting and licensing for a
  company's existing compliance team.

Competitive read:
- **Norm.ai** owns "the regulatory filing POC."
- **Tarth.ai** (KYC analog) owns "the KYC POC."
- **Whitespace for Alef** = "the regulatory-reporting + license-management POC for existing compliance
  teams, across financial services AND real estate development, in both the US and the GCC."

Goal: position legal + compliance together on ONE site without sounding scattered → **one spine, two
practices.** Specificity (named filings, real cadences, real portals) is itself the proof of credibility.

---

# SECTION 3 — GCC FINANCIAL REGULATORY FILINGS

*(Four regulators. Verify final cadence numbers against live rulebook PDFs before publishing — some
Thomson Reuters rulebook pages returned 403 to automated fetch; figures corroborated via regulator
indexed content + law-firm sources.)*

## 1. UAE Onshore — Central Bank of the UAE (CBUAE)
**Defining trait:** two separate rails — prudential returns via **Integrated Regulatory Reporting (IRR)**;
AML suspicious-transaction reporting via **goAML** (UAE FIU). A firm must be live on both.

- **Prudential returns (IRR):** monthly within 15 working days of month-end (certain liquidity returns
  within 7 wd); quarterly within 15 wd; half-yearly by 31 Jul / 31 Jan; yearly by 31 Jan.
  Content: Basel III capital adequacy (CET1 ≥ 7.0%, Total ≥ 10.5% + 2.5% CCB), liquidity (ELAR 10%, ASRR
  → LCR/NSFR). Full list in CBUAE Rulebook Appendix 3.
  - Sources: rulebook.centralbank.ae/en/rulebook/regulatory-reporting; /article-9-regulatory-reporting;
    /article-8-reporting-requirements; /standards-capital-adequacy-banks-uae; /appendix-3-list-compulsory-reports-and-forms
- **AML (goAML):** LFIs + DNFBPs register, keep status "active" (MLRO is registered user). STRs/SARs
  event-driven, no monetary threshold, filed "without delay." Penalties AED 100k–1m and/or imprisonment.
  - Sources: rulebook.centralbank.ae/en/rulebook/43-reporting-suspicious-transactions-and-registration-goaml;
    uaefiu.gov.ae/en/stakeholders/reporting-entities/str-process/; grcadvisors.ae/suspicious-activity-report/
- **Fintech licensing:** Retail Payment Services & Card Schemes (RPSCS, Circular 15/2021); Stored Value
  Facilities (SVF) Regulation (now reaches reward points + crypto). New **Federal Decree-Law No. 6 of 2025**
  (in force 16 Sep 2025) widened perimeter to open finance, virtual-asset payment services, enabling-tech;
  unlicensed activity now criminal (fines up to AED 500m).
  - Sources: rulebook.centralbank.ae .../retail-payment-services-and-card-schemes-regulation; /stored-value-facilities;
    whitecase.com/insight-alert/uae-enacts-new-cbuae-law-which-repeals-and-replaces-2018-law
- **Dubai VARA (virtual assets, separate Dubai regulator):** licenses VASPs (advisory, broker-dealer,
  custody, exchange, lending, management, transfer/settlement). Periodic reporting + AML + **annual licence
  renewal**. Exact report names/frequencies in activity rulebooks [hard to confirm publicly].
  - Sources: vara.ae/en/; taxbit.com/blogs/vara-reporting-requirements-for-vasps-in-dubai

## 2. ADGM — Financial Services Regulatory Authority (FSRA)
**Defining trait:** split portal — recurring prudential returns via **EPRS (Electronic Prudential Reporting
System)**; annual/semi-annual reports via a *different* portal, **FSRA Connect**. Obligations tiered by
prudential category (1–4 / 3A–5).

- **Prudential (EPRS):** monthly + quarterly returns; modules mirror EU (COREP, FINREP, LCR) by category.
  Annual returns certified by SEO/Director/Partner; quarterly/monthly by pre-identified Officer.
- **FSRA Connect:** annual + semi-annual regulatory reports. Authoritative list = FSRA "Regulatory Reporting
  Requirements" spreadsheet.
- **AML:** AML/CFT + FATCA + CRS apply. No single publicly-headlined named annual AML return [hard to confirm].
- **Licensing/renewal:** activity-based **Financial Services Permission (FSP)**. Annual = FSRA supervision fee
  (extends FSP) + ADGM renewal fee (continues entity). Funds (CIS) must be authorised/recognised.
  - Sources: adgm.com .../electronic-prudential-reporting; /fsra-connect; /regulatory-reporting-and-requirements;
    /fsra-general-application-process; assets.adgm.com/.../eprsfirmusermanual.pdf

## 3. DIFC — Dubai Financial Services Authority (DFSA)
**Defining trait:** two named systems + a memorable fixed AML deadline.

- **Prudential (EPRS):** quarterly (1 month after quarter-end), annual (4 months after FY-end).
- **Annual AML Return (DFSA e-Portal):** available 1 Aug–30 Sep, **deadline 30 September**, covering
  1 Aug (prior yr) → 31 Jul. Separate from event-driven STRs (DIFC firms file STRs to UAE FIU via goAML —
  DIFC has no separate FIU).
- **Other:** Controllers reporting, auditor appointment/reporting, other periodic returns.
- **Licensing/renewal:** DFSA Licence for specified Financial Services; annual supervision fees; continuous
  renewal subject to compliance. [precise fee schedule hard to confirm — FER fees module]
  - Sources: dfsa.ae/your-resources/regulatory/system-reporting; dfsaen.thomsonreuters.com/rulebook/prudential-returns-module-pru-eprs;
    dfsaen.thomsonreuters.com/rulebook/afn-aml-annual-aml-return; dfsa.ae/news/dfsa-publishes-faq-annual-aml-return...

## 4. Saudi Arabia — SAMA (Saudi Central Bank) + CMA (Capital Market Authority)
**Defining trait:** two regulators split the market (SAMA = banking/payments/finance/insurance; CMA =
capital markets) but share one AML rail — **SAFIU (Saudi FIU) on goAML**. SAMA cadences pinned to the
**Gregorian calendar**, quoted in **business days**, prudential data submitted as **Excel models** (no single
EPRS-style portal).

- **SAMA prudential (PSP example):** audited annual FS + auditor report within 45 business days of year-end;
  quarterly externally-reviewed financial reports; quarterly prudential data models within 25 bd after
  Mar/Jun/Sep/Dec; annual prudential data models within 60 bd, externally audited, submitted in Excel.
  Semi-annual risk + prudential report; quarterly reports & audited annual FS published on company website.
- **SAMA fintech:** Regulatory Sandbox (cohort-based) → full licence. Categories: payments (PSP under
  Payments & Payment Services Law), insurtech, open banking, debt-based crowdfunding, digital-only banks.
- **CMA:** Authorised Persons = Capital Market Institutions; ongoing disclosure, governance, prudential
  supervision, AML. Must notify CMA ≥30 days ahead of specified/technical-system changes. Exact periodic
  prudential return names/cadences [hard to confirm — Capital Market Institutions / Prudential Rules].
- **AML (SAFIU/goAML):** STRs in XML, event-driven, no value threshold, incl. attempted/failed txns. SAMA
  firms, CMA firms, VASPs all report to same FIU.
  - Sources: rulebook.sama.gov.sa/en/providing-sama-audited-annual-financial-statements...; /8-regulatory-reporting-requirements;
    sama.gov.sa/en-US/-SandBox/Pages/default.aspx; cma.org.sa/en/Market/AuthorisedPersons/...; facctum.com/terms/saudi-arabia-financial-investigation-unit

### Cross-jurisdiction complexity (the pitch)
Four regulators · ≥5 reporting systems (IRR, EPRS×2, FSRA Connect, SAMA Excel models, CMA) · 3 AML rails
(goAML-UAE FIU, DFSA e-Portal + goAML, goAML-SAFIU) · 3 cadence conventions (UAE working days, DIFC fixed
30-Sep date, KSA Gregorian business days). **That fragmentation is the "complexity we own for you" story.**

| Dimension | CBUAE | ADGM FSRA | DIFC DFSA | KSA (SAMA/CMA) |
|---|---|---|---|---|
| Prudential portal | IRR | EPRS (+FSRA Connect annual) | EPRS | Excel models; CMA separate |
| AML system | goAML (UAE FIU) | framework + FATCA/CRS | e-Portal Annual AML Return + goAML STRs | goAML (SAFIU) |
| Signature AML cadence | STR: no delay/threshold | (no named annual return public) | 30 Sep annual, 1 Aug–31 Jul | STR: immediate/no threshold |
| Prudential cadence | Monthly 7–15wd, qtrly, H/Y, yearly | Monthly/qtrly + semi/annual | Qtrly +1mo, annual +4mo | Qtrly +25bd, annual +45/60bd |
| Licence renewal | Annual; new 2025 Law | Annual supervision + entity | Annual supervision fee | Sandbox→licence; annual FS pub |
| Fintech regime | RPSCS, SVF; VARA crypto | activity FSP incl. virtual assets | activity licence incl. crypto | PSP, crowdfunding, open banking, digital banks |

---

# SECTION 2 — US FINTECH / FINANCIAL INSTITUTION REGULATORY FILINGS

## 1. Bank Call Reports — FFIEC 031 / 041 / 051
Consolidated Reports of Condition and Income. Filed via FFIEC Central Data Repository (FDIC/OCC/Fed).
- **031** = banks with domestic + foreign offices. **041** = domestic-only, $5B–$100B assets.
  **051** = domestic-only under $5B (streamlined). Eligibility measured June 30, effective next March.
- **Cadence: quarterly**, due ≤30 calendar days after quarter-end (35 if >1 foreign office). No extensions.
- Content: balance sheet + income statement + schedules (loans, deposits, regulatory capital, past-due,
  derivatives). Quarterly instruction-book updates.
  - Sources: ffiec.gov/resources/reporting-forms/ffiec031; fdic.gov/.../consolidated-reports-condition-and-income-first-quarter

## 2. Money Transmitter Licenses (MTLs) — acquisition + maintenance  ← HIGHEST COMPLEXITY
50-state patchwork (+DC/territories), each its own statute, converging on a model law.
- **Acquisition:** via **NMLS** (CSBS). >5 states → Multistate MSB Licensing Agreement Program (MMLA).
- **Harmonizing law — Money Transmission Modernization Act (MTMA):** ~31 states enacted (whole/part) by
  mid-2025, ~99% of activity. Recent: MA 2025, MS Jul 1 2025, CO Jul 17 2025, VA Jul 1 2026.
- **Standards (MTMA):** tangible net worth = greater of $100k or 3% of total assets (first $100M), 2%
  ($100M–$1B), 0.5% (>$1B). Surety bond = greater of $100k or avg daily transmission liability over prior
  3 months, capped $500k. Permissible investments = 1-for-1 vs all outstanding customer liability.
- **Renewals: annual** via NMLS (~Nov 1 – Dec 31 window) — fee, bond confirmation, attestations.
- **Recurring state report — NMLS MSB Call Report** (distinct from bank Call Report): **quarterly**, due 45
  days after Q1–Q3; **Q4 due March 31**. Late = NMLS deficiency + possible state action.
- June 2025 CSBS guidance on virtual currency in net-worth calc [changed/uncertain].
  - Sources: csbs.org/reality-money-transmission...; csbs.org/csbs-money-transmission-modernization-act-mtma;
    ndbf.nebraska.gov/.../mt-call-report-submission; dbf.georgia.gov/money-service-businesses/quarterly-msb-reporting

## 3. BSA/AML — SARs & CTRs (FinCEN, via BSA E-Filing)
- **SAR:** banks/CUs/MSBs/broker-dealers. File within 30 days of detection (60 if no suspect, 90 max).
  Continuing-activity best practice ~120 days. **Oct 9 2025 FinCEN FAQs:** NOT required to file
  continuing-review SARs every 90 days [changed].
- **CTR (Form 112):** cash >$10,000 single business day (aggregate same-day same-person). Due 15 calendar
  days after txn. No extension. Banks/CUs/MSBs/casinos.
- Event-driven, not periodic — but effectively continuous daily/weekly with hard per-item clocks.
  - Sources: fincen.gov/system/files/2025-10/SAR-FAQs-October-2025.pdf; fincen.gov/resources/frequently-asked-questions-regarding-fincen-currency-transaction-report-ctr

## 4. FinCEN MSB Registration — Form 107
Federal registration, separate from state MTLs. Initial within 180 days. **Renew every 2 years** (due
Dec 31 of 2nd calendar year). Re-register within 180 days on ownership/control change or agent count +>50%.
Keep records 5 years. Penalty up to $5,000/violation/day.
- Sources: fincen.gov/resources/money-services-business-msb-registration

## 5. HMDA — Home Mortgage Disclosure Act (CFPB, Reg C)
Annual **LAR** via HMDA Platform, **due March 1** for prior year. ≥60,000 covered loans → also quarterly
(60 days after quarter-end). 2025 thresholds: asset exemption ≤$58M; ≥25 closed-end OR ≥200 open-end in
each of two prior years.
- Sources: ffiec.cfpb.gov/documentation/faq/data-collection-timelines; consumerfinance.gov/rules-policy/regulations/1003/5/

## 6. Beneficial Ownership / CTA — FinCEN BOI  ← STATUS CHANGED, flag prominently
Interim final rule **Mar 26 2025**: removed BOI reporting for all US-created entities + US persons (exempt).
"Reporting company" now = only foreign entities registered in US; even those report no US persons. Foreign
filers: pre-Mar 26 2025 → by Apr 25 2025; later → 30 days; updates within 30 days. Interim rule, final
pending; CTA constitutionality in litigation (11th Cir. affirmed). Some states (e.g., NY LLC Transparency
Act) have own BOI-style filings. **Do NOT confuse with the still-active FinCEN CDD rule** (banks identify
beneficial owners of legal-entity customers at account opening).
- Sources: fincen.gov/news/news-releases/fincen-removes-beneficial-ownership-reporting-requirements-us-companies-and-us

## 7. Other recurring prudential / consumer-compliance filings
- **CFPB §1071 small-business lending (Reg B):** IN FLUX. May 1 2026 final rule narrowed scope (covered FI =
  ≥1,000 covered small-business credit txns each of 2 prior yrs), initial collection Jan 1 2028. Annual when
  live. [changed/uncertain, litigation pending]
- **OFAC:** Annual Report of Blocked Property (ARBP) due **Sep 30** (holdings as of Jun 30). Blocked/rejected
  txns reported within 10 business days.
- **314(a):** mandatory FinCEN law-enforcement searches every ~2 weeks; positive matches within 14 days.
  **314(b):** voluntary info-sharing safe harbor; annual registration.
- **FinCEN CDD rule (31 CFR 1010.230):** the "fifth pillar" — identify/verify beneficial owners of
  legal-entity customers (ownership ≥25% + control prong) at account opening, ongoing risk-based updates.
  - Sources: consumerfinance.gov/1071-rule/; ofac.treasury.gov/recent-actions/20250915; fincen.gov/sites/default/files/shared/314afactsheet.pdf; bsaaml.ffiec.gov/manual/...

### US compliance calendar at a glance
| Cadence | Filing | Form/Regulator | Deadline |
|---|---|---|---|
| Continuous/daily | CTR | Form 112 / FinCEN | 15 days after >$10K cash txn |
| Continuous/event | SAR | FinCEN | 30 days from detection (60 if no suspect) |
| Continuous/event | OFAC blocked/rejected | OFAC | 10 business days |
| Biweekly | 314(a) searches | FinCEN | match within 14 days |
| Quarterly | Bank Call Report | FFIEC 031/041/051 | 30 days after qtr (35 if foreign) |
| Quarterly | NMLS MSB Call Report | NMLS/states | 45 days Q1–Q3; **Q4 Mar 31** |
| Quarterly (high-vol) | HMDA quarterly | CFPB | 60 days after qtr (≥60K loans) |
| Annually | MTL renewals | NMLS/each state | ~Nov 1 – Dec 31 |
| Annually | HMDA LAR | CFPB/FFIEC | **March 1** |
| Annually | OFAC ARBP | OFAC | **Sep 30** |
| Annually | 314(b) registration | FinCEN | annual (voluntary) |
| Every 2 yrs | FinCEN MSB registration | Form 107 | Dec 31 of renewal year |
| Pending 2026–28 | §1071 | CFPB/Reg B | annual once live |
| Foreign only | BOI/CTA | FinCEN | 30 days (US cos exempt) |

**Highest complexity:** (1) 50-state MTL patchwork; (2) event-driven SAR/CTR volume; (3) regulatory churn
(CTA/BOI, §1071, SAR FAQs all changed 2025–26 — date content + flag as subject to change).

---

# SECTION 4 — REAL ESTATE DEVELOPMENT LICENSING (acquire + maintain)

**Core thesis:** a single master-planned project triggers obligations at FOUR layers, each with its own
authority, trigger, and renewal clock — and the construction layer multiplies across every subcontractor.

## A) UAE / GCC

### A1. Dubai — DLD & RERA (operated via Trakheesi portal + Oqood system)
| Layer | License/registration | Authority | Trigger | Renewal |
|---|---|---|---|---|
| Corporate – trade | Commercial trade license w/ "real estate development" activity | DET | Forming dev company | **Annual** |
| Corporate – developer | Register of Real Estate Developers; developer registration via Trakheesi | DLD/RERA | Engaging in development | **Annual** (current financials, valid office lease, reporting compliance) |
| Project | Project registration (Oqood) | DLD/RERA | Before SPAs or any buyer payment | Per-project, monitored lifecycle |
| Funds | Escrow/trust account (one per project) under **Law No. 8 of 2007** | DLD/RERA trustee bank | Off-plan sales | Milestone audits; agent retains 5% until 1yr after unit registration |
| Sales record | Oqood off-plan unit registration | DLD | Each off-plan sale | Per-transaction → title deed at completion |
| Marketing | Trakheesi advertising/marketing permit (must show developer name, escrow a/c number, completion date) | DLD/RERA | Each ad/campaign | Per-permit (~AED 1,000 + 20) |
| People | RERA broker card / professional practice e-card | DLD/RERA via Trakheesi/Dubai REST | Acting as broker | **Annual** |
- Sources: dlp.dubai.gov.ae/.../Law No. (8) of 2007; dubailand.gov.ae/en/eservices/register-project/, /real-estate-ad-permit/, /real-estate-activity-license/; tamimi.com (off-plan investor rights); egsh.ae/services/professional-practice-card-renewal

### A2. Dubai — Contractor classification (NEW: Law No. 7 of 2025, effective 8 Jan 2026)
- Authority: Dubai Municipality, new unified **Contractor Register** (Invest in Dubai platform).
- New entrants start at lowest tier; graded on financial strength, technical capability, admin competence
  (grade determines project size/scope). **Annual renewal**, re-graded up/down at renewal. All must
  regularize by 8 Jan 2027. Technical staff need valid professional practice certs (also renewed).
- Every subcontractor needs (a) own DET trade license + (b) own DM classification entry — separate annual clocks.
- Sources: dm.gov.ae/.../consultants-and-contractors-licensing-standards/; kennedyslaw.com (Law No.7 of 2025);
  eversheds-sutherland.com (new construction regs); apex-reg.com/blog/dubai-law-7-2025-contractor-registration-requirements

### A3. Abu Dhabi — DMT / ADREC (est. Nov 2023). Platforms: Madhmoun (off-plan EOI), DARI (transactions/brokers)
- Only ADREC-licensed developers can begin off-plan sales/collect payments. Project-specific ADREC escrow;
  funds released on verified milestones. Madhmoun digitizes investor EOIs (held in govt-managed escrow).
- **Broker License Number (BLN):** from 19 Sep 2024 all agents need valid license; **1-year validity**,
  renew before expiry on DARI + complete certified Abu Dhabi Broker Renewal Course.
- Sources: adrec.gov.ae/en/services, /sa_flow_3; oplusrealty.com/adrec-...-guide-2026; propertyfinder.ae/partnerhub/...bln...;
  tamm.abudhabi/.../RequesttoLicenceRelicenceanIndividualRealEstateBroker; pages.dmt.gov.ae/en/Classification-Category

### A4. KSA — REGA & the Wafi program (Off-Plan Sale & Lease Law)
- **Developer registration "Etnam":** must be in Real Estate Developer Registry before marketing/selling off-plan.
- **Wafi off-plan sales license**; project-specific **escrow account** (protected from developer creditors;
  released on certification by chartered accountant + REGA-approved engineering office; on default REGA can
  appoint substitute developer or refund buyers).
- **Marketing license validity 180 days**, renewable. [UNCERTAIN: Etnam registration + off-plan sales license
  renewal cadence not firmly sourced — confirm with REGA directly.]
- Sources: rega.gov.sa/en/rega-services/eservices/off-plan-real-estate-project-sales-license/, /platforms/wafi-off-plan-sales-and-lease/;
  tamimi.com (Wafi/Etnam articles)

## B) United States (state-by-state licensing + local/municipal entitlement — MORE fragmented than GCC)
- **General-contractor/developer licensing (state boards):** classified licenses + surety bond + insurance,
  fixed renewal cycle (often biennial), sometimes CE.
  - California CSLB: Class A/B/C; **renew every 2 yrs**; min $25,000 bond (B&P §7071.6); workers' comp; CE generally not required.
  - Florida DBPR: Certified (statewide) vs Registered (local); **biennial** renewal (e.g., electrical due Aug 31 even years, 11 hrs CE/2yrs).
  - Nevada NSCB: licensing/classification/bonding [UNCERTAIN: exact cadence/bond not pinned this pass].
  - Sources: cslb.ca.gov/Renewals.aspx; myfloridalicense.com; nvcontractorsboard.com
- **Subdivision/master-plan entitlement (local):** Subdivision Map Act / platting — Preliminary Plat → Final
  Plat; master-plan tiering (Development Master Plan → prelim → final plats); DMP amendments filed locally.
  Per-project, per-jurisdiction, perpetual (no single renewal date).
  - Sources: dre.ca.gov/files/pdf/refbook/ref17.pdf; findhoalaw.com/subdivision-map-act.pdf; maricopa.gov/2068/...
- **Subcontractor/trade licensing (electrical/plumbing/HVAC):** licensed separately, often state AND local,
  tiered (apprentice→journeyman→master→contractor), trade-specific CE clocks (e.g., VA 3hrs/2yr; TX electricians
  16hrs/cycle, plumbers 6hrs/yr; GA biennial 8hrs; WA 16hrs/2yr).
  - Sources: procore.com/library/contractors-license-guide-all-states; dpor.virginia.gov/Boards/Tradesmen; lni.wa.gov/...

**What Alef owns:** multi-authority (DLD, RERA, DET, Dubai Municipality, DMT, ADREC, REGA, 50 US state boards,
countless municipalities) × multi-cadence (per-transaction, 180-day, annual, biennial) × multiplicative across
the subcontractor web. A developer never tracks one renewal date but dozens — across entities it doesn't
directly control; miss one and you can't sell or transact.

---

# SECTION 1 — COMPETITIVE TEARDOWN

> **All target homepages returned HTTP 403 to direct fetch.** Quoted copy reconstructed from search-indexed
> content + reputable press; reliable for POSITIONING, but re-verify exact wording before pasting verbatim.

## Norm.ai — owns "Regulatory AI Agents"
- **Job:** turns laws/policies/regulatory requirements into supervised "Regulatory AI Agents" inside enterprise
  workflows. Claims "first Regulatory AI Agent platform."
- **Extend-not-replace:** augments the CCO; discipline "Legal Engineering" (attorneys translate judgment into
  AI); "Supervisory AI" governance layer keeps accountability human. "capacity scales with the pace of AI adoption."
- **IA:** Hero (own the noun) → Trust strip ($30T+ assets, logos) → Platform (LEAP) → AI Agents → Use cases
  (IR/sales content review, contracts, DDQs; FS/healthcare/energy) → Supervisory AI/governance → Customers
  (Blackstone, Citi, NY Life, TIAA) → CTA.
- **Proof:** $140M+ raised ($48M Mar 2025, $50M Blackstone Nov 2025); Microsoft 365 partnership; founder John Nay
  (PhD, NYU Law adjunct, Stanford).
- **★ DIRECT ANALOG: Norm Law (normlaw.com)** — "first AI-native, full-service law firm" structured as ONE firm,
  TWO named practices (Investment Funds + Compliance/Regulatory). This is the closest model for Alef's
  "one spine, two practices" problem.

## Hummingbird (hummingbird.co) — owns "Unified Risk & Compliance Operations"
- **Job:** the workspace where financial-crime teams detect, investigate, report — AML, SARs, CDD, screening
  in one place. "Gold standard for AML compliance work."
- **Extend-not-replace (strongest verbatim):** "Hummingbird AI radically extends team capabilities…";
  "integrate seamlessly with existing systems"; Investigation Canvas for human collaboration.
- **IA:** Hero ("Unified Risk & Compliance Operations") → Trust strip (Brex, Stripe, Etsy) → spine
  **Detect → Understand → Act** → modular solutions (Transaction Monitoring, Screening, Investigations,
  Regulatory Reporting) → AI → Integrations → Case studies → CTA.
- **Proof:** ~$41.8M raised ($30M Series B 2021, Battery); customers Brex/Stripe/Etsy.

## "Tarth.ai" — ⚠️ NOT A REAL STANDALONE COMPANY
- **Verification result:** tarth.ai is NOT a sellable product. "Tarth" is **Zest Equity's INTERNAL** AI
  compliance agent (UAE digital transactional-infrastructure co.), running KYC inside Zest's own infra. No
  standalone site. (tarth.net is unrelated.) Source: Zawya press release.
- It DOES echo Alef's positioning: "from document analysis through to a recommendation ready for compliance
  review," "~60 min → median 3 min" of compliance-officer time; Zest "exploring externalising it… to help
  external compliance teams scale operations." But internal-only today.
- **Genuine substitute analyzed — Bretton AI (bretton.com), formerly Greenlite AI** ($75M Series B Feb 2026,
  Sapphire + Greylock):
  - **Job:** "The AI Agents Platform for Financial Crime" — runs first-line AML/KYC/sanctions end-to-end, hands
    review-ready cases to humans.
  - **Extend-not-replace (cleanest of all):** "work alongside human analysts"; "work inside existing compliance
    systems"; first-line (AI) vs second-line (human) with escalation to FTEs; testimonial "a force multiplier
    for our financial crime team."
  - **IA:** Hero ("AI Agents Platform for Financial Crime" + "free your team for high-value work") → testimonial
    → products/agents → "works alongside your team" (first/second line) → Trust Infrastructure (logged,
    explainable, US Federal Banking Guidelines) → company/backers → CTA.

## Shared pattern across all (the template to steal)
Every site: **Hero (own ONE noun-job) → Trust strip (logos) → single conceptual spine (3-verb or
first/second-line) → modular capabilities → explicit "how we fit your team" section → proof/customers → one CTA.**
The unifying device (Hummingbird "Detect→Understand→Act"; Bretton "first/second-line") is what lets a
multi-capability offering feel singular, not scattered. "Extend, don't replace" is a NAMED section, not just adjectives.

---

# CROSS-CUTTING SYNTHESIS — the Alef play

**Whitespace.** Norm owns "regulatory filing POC" (enterprise FS, AI-platform framing). Bretton/Tarth own
"KYC POC." **Nobody owns "the regulatory-reporting + license-management POC for existing compliance teams,
across BOTH financial services AND real estate development, in BOTH the US AND the GCC."** That cross-domain +
cross-jurisdiction + attorney-signed combination is Alef's defensible position. The specificity itself (named
filings, real portals, real cadences) is the credibility proof Norm gets from funding/logos and Alef gets from domain mastery.

**What Alef is MISSING on the site today to claim it:**
1. No parallel "compliance team, extended" narrative (legal carries everything; hero is legal-only).
2. Regulatory content is generic categories ("periodic compliance returns"), not named obligations with cadence.
   The research above is the fix — Call Reports (quarterly), MTL renewals (annual) + NMLS MSB Call Report (quarterly,
   Q4 Mar 31), DFSA Annual AML Return (30 Sep), CBUAE IRR + goAML, RERA escrow/Oqood, ADREC BLN (annual), Wafi/Etnam.
3. No "license management / never miss a renewal" spine (the acquire+maintain calendar concept) — this is the
   strongest productizable hook, esp. for real estate's dozens-of-renewals-across-the-subcontractor-web problem.
4. No explicit "how we fit your existing team" section (control/accountability stays in-house; Alef owns the work).
5. No jurisdiction signal (US + GCC) — currently mixes SVF/EMI (GCC) with zoning/entitlements (US) without naming it.

**Recommended structure — one spine, two practices** (model: Norm Law one-firm-two-practices + Hummingbird spine):
- **Hero:** own one job — e.g. "The in-house extension for legal and compliance." Subline = extend-not-replace.
- **Trust strip** (existing client reel works).
- **One shared spine** that fits both practices — e.g. **Extend → Integrate → Own the outcome** (or
  Organize → Prepare → Attorney signs off, which the Industries section already has).
- **Two symmetrical practice cards:**
  - **Legal (Fractional GC)** — contracts/drafting/negotiation (already built).
  - **Compliance (Regulatory Filing + License Management)** — NEW: named filings, cadence calendar, US + GCC,
    FS + real estate.
- **"How we fit your team"** — named section; control stays with in-house, Alef owns the filing/renewal work.
- **Who it's for** — GC, Head of Compliance, CCO; FS + real estate developers; US + GCC.
- **Proof / attorney-signed differentiator** + single CTA.

**Data-quality caveats to honor when writing site copy:** date the content; flag US items that changed 2025–26
(CTA/BOI exemption, §1071, SAR FAQs); verify GCC cadence numbers vs live rulebooks; KSA Etnam/Wafi renewal
cadence + Nevada NSCB unconfirmed. Don't publish a specific number we can't stand behind — prefer "quarterly,"
"annual," "per-project escrow" framings where the exact figure is uncertain.

---

# APPENDIX (multi-page build) — verified country filings, pricing benchmarks, hero fact-check
Compiled 2026-06-10. Cadences indicative; several regimes mid-transition (UAE CBUAE Law 6/2025; Dubai Law 7/2025
→ Jan 2026; EU AMLA 2027; DORA Jan 2025; KSA Etnam/Wafi renewal soft). Verify vs live rulebooks before filing.

## Hero fact-check (verdict: "ERP, CRM and finance systems" = MISLEADING for FIs)
Real filing-data sources = core banking systems, **general ledger**, transaction-monitoring, risk warehouses,
regulatory-reporting platforms (AxiomSL, OneSumX, Regnology), and **spreadsheets**. CRM only relevant to KYC.
Chosen hero wording: "your finance systems, ledgers, and spreadsheets". Sources: Wolters Kluwer OneSumX,
Nasdaq AxiomSL, PwC reg-reporting, OvalEdge data-lineage, FFIEC BSA/AML.

## EU / Eurozone filings (FS)
COREP quarterly (~42d) · FINREP quarterly (~42d) · LCR/NSFR monthly · AnaCredit monthly/quarterly (~6 bd) ·
MiFIR T+1 · EMIR T+1 · AML STR event-driven (EU AMLA Frankfurt from 10 Jul 2027) · DORA ICT incident 4h/72h/1mo
(in force 17 Jan 2025) · PSD2 fraud semi-annual · AIFMD Annex IV qtrly/semi/annual (30d). Sources: EBA, ECB
(AnaCredit), ESMA (MiFIR/EMIR), amla.europa.eu, regulation-dora.eu.

## UAE filings — FS
CBUAE IRR monthly(7–15wd)/quarterly/half-yearly(31 Jul,31 Jan)/annual(31 Jan); ELAR/LCR; goAML STR (no delay);
RPSCS & SVF periodic + annual renewal; DFSA EPRS quarterly(+1mo)/annual(+4mo) + **Annual AML Return 30 Sep**;
FSRA EPRS + FSRA Connect; VARA monthly–annual + annual licence renewal; UBO (15d); FATCA/CRS (30 Jun);
Corporate Tax 9% (within 9 mo of FY-end); insurance/Takaful prudential returns; ADGM annual accounts (9 mo).
## UAE filings — RE
DLD developer+project registration; escrow (Law 8/2007) + quarterly milestone / annual audit (by 31 Mar);
Oqood; Trakheesi (per campaign); RERA broker card (annual); Mollak service-charge (annual); Ejari/Tawtheeq
tenancy registration; ADREC developer/project/escrow + Madhmoun EOI; AD broker BLN (annual + course); Dubai
Municipality contractor classification (Law 7/2025, annual, in force 8 Jan 2026). Sources: CBUAE/DFSA/FSRA
rulebooks, vara.ae, DLD Law 8/2007, Kennedys/DLA Piper/Al Tamimi (Law 7/2025), ADREC, MoF FATCA/CRS, FTA.

## KSA filings — FS
SAMA audited annual FS (45 bd); quarterly financial reports (30 wd); prudential data models quarterly(25 bd)/
annual(60 bd, Excel); PSP quarterly(1 mo)/annual(2 mo); SAFIU STR (goAML, no delay); CMA quarterly/half-yearly
+ material disclosure (without delay); ZATCA Zakat+FATCA/CRS (120 d); UBO (annual + 15d). 
## KSA filings — RE
REGA Etnam developer registration (annual confirmation); Wafi off-plan sales + marketing licence (180d,
renewable); escrow + milestone certification (engineer-certified); Baladi/MoMRA commercial licence (annual) +
contractor classification; ZATCA. Gaps: Etnam/Wafi exact renewal cadence soft. Sources: SAMA Rulebook, CMA,
REGA/Wafi, Baladi, ZATCA, Al Tamimi, Clyde & Co (UBO).

## Compliance pricing benchmarks (USD) — basis for the flat menu
Call Report prep $5–15k/qtr → menu $6k · MTL application $5–20k/state → $8k · MTL renewal $0.5–5k → $1.5k ·
NMLS MSB Call Report $2–6k → $3k · SAR $1–5k → $1.2k · HMDA $3–10k → $5k · BSA/AML setup $25–100k → from $25k ·
fractional CCO $4–12k/mo → from $6k · GCC/EU prudential or AML return $5–30k → from $12k · EMI license app
$100–200k (scoped/quote) · Dubai RERA project reg ~$2–8k → from $5k · Oqood/Trakheesi → from $1.5k · broker/
contractor renewal $100–900 → from $900. Sources: Brico/Remitso/Hodder (MTL), NMLS, FinCEN AML cost survey,
Luthor/Bercla (fractional CCO), PayCompliance (GCC), MORS/DataTracks (COREP/FINREP), DLD/ADREC fee pages.
Note: prices are "from"/indicative; scope to volume & jurisdiction; regulator/government fees billed at cost.
