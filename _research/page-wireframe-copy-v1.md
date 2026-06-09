# Alef — Page Wireframe + Copy (v1, compliance-forward)

> **BUILD LOG — Increment 1 shipped (branch `claude/hello-y0bgxp`):**
> - **New hero** in `index.html`: "The future of legal & compliance is here." — giant type on near-black,
>   terracotta accent on "is here.", GSAP staggered word reveal on load (+ reduced-motion fallback),
>   subline = value prop, CTA = "Get started".
> - **New proof stat band** (after client reel) with animated count-up: Compliance trio (50 states+4 GCC · 75%
>   less time · 100% attorney-signed) + Legal trio (<24h turnaround · 150+ countries · 33% lower cost).
>   Compliance numbers are **placeholders** to replace with verified figures.
> - **Turnaround harmonized to sub-24h** site-wide (hero/CTA/reel/two-paths/final-CTA); Results section
>   converted to qualitative testimonials; DNA "150+ countries" de-duplicated.
> - Still TODO (next increments): full section restructure (two-practice cards, compliance deep-dive,
>   "how we fit your team", who-it's-for) + the branching "Get started" form.

> Working doc for sign-off. NOT published (`_research/` is Jekyll-ignored).
> Decisions baked in: **compliance-forward**, **extreme confidence in BOTH practices**, **wireframe/copy before code**.
> Writing standard: the **Zest/Bretton clarity bar** — a non-expert grasps it instantly; short sentences;
> outcome first; the *specificity of the filings* is what signals mastery (not jargon).
>
> Principle (from the teardown): **one spine, two practices.** Own ONE job at the top, then Compliance and
> Legal as two symmetrical practices off the same spine. Make "extend, don't replace" an explicit named section.

### ★ CORE VALUE PROP (locked by founder — everything keys off this)
> Regulatory and contract data is **scattered across the client's systems** — ERP, CRM, accounting/finance
> software. **Alef codifies that scattered data, organizes it, and prepares it into submission-ready filings**,
> so the client's **compliance and legal teams focus on the work that matters** (judgment, decisions, relationships)
> instead of the assembly. We **extend existing teams — we never replace them.** A **licensed attorney signs off**
> on everything.
>
> NOT "you miss deadlines" — that wrongly assumes the client is failing. The pain is the *data wrangling and
> assembly*, not incompetence. Lead with the transformation (scattered data → filing-ready) and the freed-up team.
> Both practices are strong — never phrase legal as the lesser ("...too"), never imply Alef is the team
> (we work *with* the existing team). Verticals: **Financial Services + Real Estate only** (Health-Tech dropped).

---

## Page flow at a glance (new order)

| # | Section | Job of the section | Status vs today |
|---|---|---|---|
| 0 | Nav | Compliance listed first; one CTA | Re-order |
| 1 | Hero | Own one job; lead compliance; name both practices | **Rewrite** |
| 2 | Trust strip (client reel) | "this is real" | Keep |
| 3 | The burden | The recurring filing/renewal pain, compliance-first | Reframe |
| 4 | How Alef works (the spine) | One 4-step model both practices share | Elevate existing |
| 5 | Two practices | Symmetrical cards: Compliance, then Legal | **New layout** |
| 6 | Compliance deep-dive | Named filings × US/GCC × FS/Real estate + the renewal calendar | **New (core)** |
| 7 | How we fit your team | "You keep control. We carry the load." | **New** |
| 8 | Legal practice | Fractional GC, confident + condensed | Condense existing |
| 9 | Who it's for | CCO / GC / developer; US + GCC | **New** |
| 10 | Proof / attorney-signed | Results + the differentiator | Keep + sharpen |
| 11 | Pricing | Legal priced; Compliance = scoped, now with real depth | Upgrade reg. panel |
| 12 | About / DNA | Team credibility | Keep |
| 13 | Final CTA | One action | Keep |

---

## 0. Navigation
`Compliance · Legal · How it works · Industries · Pricing · About · [Get started]`
- Compliance first = the compliance-forward signal. One CTA only.
- Optional: "Practices ▾" dropdown nesting Compliance + Legal, so the two-practice structure is visible in nav.

---

## 1. Hero  *(REWRITE — compliance-forward, both practices)*

**Visual:** keep the clean current hero (geometric shapes, lots of whitespace). One headline, one subline,
one CTA, one reassurance line. No clutter — Zest-clean.

**Angle:** scattered data across systems → organized, filing-ready → team focuses on what matters. Extend, not replace.

**Headline menu (pick one — all in the corrected value-prop direction):**
- **R1 (recommended):** *"The data behind every filing is scattered across your systems. We make it submission-ready."*
- R2: *"Your compliance and legal teams focus on what matters. We prepare everything behind the filing."*
- R3: *"Regulatory data lives in your ERP, your CRM, your finance stack. We turn it into filings your team can sign."*
- R4: *"Your team's expertise belongs on the judgment calls — not on assembling the filing. So that's the part we do."*
- R5: *"Pulled from your systems. Organized by Alef. Signed off by an attorney. Ready for the regulator."*
- R6: *"We organize the regulatory data buried across your systems — so your team works on what matters."*

**Subline (pairs with any headline):**
> Alef extends your compliance and legal teams. We pull the data scattered across your ERP, CRM and finance
> systems, organize it, and prepare every regulatory filing and contract — submission-ready, and signed off by
> a licensed attorney. Your team keeps the judgment. We handle the assembly. Financial services and real estate,
> across the US and the GCC.

**CTA:** `Get started`   ·   reassurance line: *No retainer. You keep control. Every deliverable attorney-signed.*

---

## 2. Trust strip  *(KEEP)*
Existing client reel ("Trusted by teams at" + logos). No change needed — it answers "is this real" early,
exactly where the comparables put it.

---

## 3. The burden  *(REFRAME — compliance-first)*

**Visual:** three stat cards (reuse the existing `problem__card` style), but lead with the compliance reality.

**Section label:** The Problem
**Headline:**
> ### The hard part isn't knowing the rules. It's assembling the filing.

**Body:**
> Your compliance team knows exactly what every regulator wants. The work is getting there: the numbers live in
> your finance system, the customer records in your CRM, the transactions in your ERP, the policies in a dozen
> folders. Every filing means pulling it together, formatting it, and reconciling it — before anyone can apply
> judgment. **That assembly is what Alef takes off your team's plate.** We pull the data, organize it, and prepare
> the submission. Your team does what only your team can do.

**Three cards (plain-language, concrete — the scale of the assembly, not "you're failing"):**
1. **Data in a dozen systems** — "One filing pulls from your ERP, your CRM, your accounting stack and your
   policy library. We reconcile it into one submission-ready record."
2. **4 regulators, 5 systems** — "In the GCC, the same firm reports to CBUAE, DFSA, ADGM and SAMA — each with
   its own portal, its own format, its own AML rail. We prepare for all of them."
3. **Dozens of licenses per project** — "One master-planned development carries developer, project, escrow,
   marketing and broker licenses — plus a trade license for every subcontractor. We keep them all current."

*(Optional: keep the original legal stat cards — 3+ weeks/contract, 9.2% revenue lost — as a Legal-practice
sub-row, so both pains show. Compliance leads.)*

---

## 4. How Alef works — the spine  *(ELEVATE existing 4-step into the unifying model)*

This is the single conceptual spine both practices share (the device that keeps the page from feeling scattered).
The existing 4 steps are strong; step 1 is upgraded to lead with the calendar (our sharpest differentiator).

**Section label:** How It Works
**Headline:**
> ### One process. Every filing, license, and contract.

| Step | Title | Copy |
|---|---|---|
| 01 | **Map your obligations** | We build the full calendar of every filing, license and renewal you owe — by jurisdiction, by deadline. You see the whole year on one page. |
| 02 | **Organize your data** | We pull your contracts, policies and records into one structured, filing-ready system. |
| 03 | **Prepare the submission** | We assemble exactly what the regulator expects — formatted, complete, ready to send. For contracts, redlined and ready to sign. |
| 04 | **An attorney signs off** | A licensed attorney reviews every deliverable before it reaches you or the regulator. Every time. |

**Closing line:** *You keep every playbook, template and calendar we build. No hiring risk. No retainer. Cancel anytime.*

---

## 5. Two practices  *(NEW LAYOUT — symmetrical cards, Compliance first)*

**Visual:** two equal cards, identical template, side by side. Same height, same structure — so they read as
two facets of one firm (Norm Law model), not two products. Compliance on the left/first.

**Section label:** What We Do
**Headline:**
> ### Two practices. One standard: attorney-signed, on time, in-house quality.

### Card A — Compliance · Regulatory Filing & License Management
> **We become the operational owner of your regulatory calendar.** Every return, every renewal, every filing —
> tracked, prepared, and filed on time. Your compliance officer keeps the judgment and the sign-off. We carry the work.
- Regulatory filings & periodic returns
- License applications, renewals & maintenance
- AML / KYC policy filings
- Regulator information requests (RFIs)
- The deadline calendar itself — owned, end to end

`See what we file →`

### Card B — Legal · Your Fractional General Counsel
> **We extend your legal team's capacity.** Contract review, drafting and negotiation, turned around in
> 48 hours — implementing your playbook, not reinventing it. Signed off by a licensed attorney.
- Contract review & redlines
- Drafting (ToS, Privacy, MSA, DPA, BAA)
- Negotiation support
- Playbook development

`See how we work →`

---

## 6. Compliance deep-dive  *(NEW — the core credibility section)*

This is where specificity = confidence. Plain-language intros; named filings underneath. Structured as a
2×2: **Financial services** and **Real estate development**, each split **United States / GCC**.

**Section label:** Compliance, in depth
**Headline:**
> ### We know the filings because we file them.
**Sub:**
> Two industries. Two regions. The same promise: we own the calendar and prepare every submission, and an
> attorney signs off before it goes out.

### Financial Services
**United States**
> Quarterly **Call Reports**. **Money transmitter licenses** across all 50 states — plus the quarterly NMLS
> MSB Call Report and annual renewals. **SAR** and **CTR** filings on FinCEN's clock. **HMDA** every March.
> We track them, prepare them, and keep the bonds and net-worth tests current.

**GCC**
> **CBUAE** prudential returns and **goAML** reporting in the UAE. The **DFSA Annual AML Return**, due
> 30 September, in the DIFC. **ADGM** prudential filings through EPRS. **SAMA** and **CMA** reporting in Saudi
> Arabia. Four regulators, five systems — one team that knows each one.

### Real Estate Development
**GCC**
> In Dubai: **developer registration, project and escrow registration, Oqood, Trakheesi** ad permits, and
> **annual broker cards** — through DLD and RERA. In Abu Dhabi: **ADREC** licensing and escrow. In Saudi Arabia:
> **Wafi** off-plan licensing and **Etnam** developer registration.

**United States**
> **State contractor licensing** and renewals, **subdivision and master-plan** approvals, and the **trade
> licenses every subcontractor** must hold and maintain.

**The hook (callout box):**
> **One project can carry dozens of licenses — across subcontractors you don't directly control.**
> We keep every one current, and tell you what's coming due before it's due.

*(Verticals scoped to Financial Services + Real Estate. Health-Tech removed — tighter, more confident story.)*

---

## 7. How we fit your team  *(NEW — the explicit "extend, don't replace" section)*

Modeled on Bretton's first-line/second-line and Norm's "supervisory" framing. This is a *named* section, not
just adjectives — every comparable dedicates real estate to it.

**Section label:** How We Fit
**Headline:**
> ### You keep control. We carry the load.

**Two columns:**

| Your team keeps | Alef owns |
|---|---|
| The judgment calls | Tracking every deadline |
| Sign-off authority | Organizing the data |
| The regulator relationships | Preparing every submission |
| Final say on every position | Managing renewals before they lapse |

**Closing line:**
> We don't replace your compliance officer or your GC. We give them back their hours — and a licensed attorney
> stands behind everything we hand over.

---

## 8. Legal practice  *(CONDENSE existing — keep it confident)*

Keep the strongest legal proof, condensed: the 48-hour turnaround, pay-per-result, the contract-pipeline reel,
and the services grid (NDAs → DPAs). One headline, the reel, the services chips. Don't let it sprawl now that
compliance leads — but keep it sharp enough to show the legal practice is equally real.

**Headline:** *Contracts, handled in 48 hours.*
**Sub:** *Send us any contract. Get it back in two days — reviewed, redlined, and signed off by an attorney.*
(Reuse: How-It-Works contract reel, Services grid, "From NDAs to DPAs" line.)

---

## 9. Who it's for  *(NEW)*

**Section label:** Who We're For
**Headline:**
> ### Built for the teams carrying the load.

- **Heads of Compliance & CCOs** who can't hire fast enough for the filing volume.
- **General Counsel** who need contract capacity without adding headcount.
- **Fintechs & financial institutions** juggling licenses across states and regulators.
- **Property developers** managing licenses across projects and subcontractors.
- **Operating in the US, the GCC, or both.**

---

## 10. Proof / attorney-signed  *(KEEP + SHARPEN)*

Keep the Results section. Sharpen the differentiator line so it covers both practices:
> **Every deliverable — every filing and every contract — reviewed by a licensed attorney. AI does the pattern
> work; a lawyer makes the call.**
Add metrics if/when we have them (Zest-style "60 min → 3 min" is powerful — only use real Alef numbers).

---

## 11. Pricing  *(UPGRADE the Regulatory panel)*

Keep the **Legal / Compliance** tabs (rename "Regulatory" → "Compliance" for consistency). Legal stays priced
as today. Compliance panel stays "scoped to your filings — talk to us," but the line items get the real depth:

- **Financial services:** Call Report preparation · Money-transmitter licensing & 50-state renewals · NMLS MSB
  Call Report · SAR/CTR program support · GCC prudential & AML returns (CBUAE / DFSA / ADGM / SAMA).
- **Real estate:** Developer & project registration · Escrow registration · Off-plan (Oqood / Wafi) · Broker-card
  renewals · US contractor & subcontractor license maintenance.
- **Cross-industry:** Obligation calendar build · Ongoing renewal management · Regulator RFI response · Judgment memos.

Intro line: *No retainer. You pay for the filings you need handled. Every one signed off by a licensed attorney.*

---

## 12. About / DNA  *(KEEP)*
Keep the team-credibility section and logo strip (Deel, S&P Global, Capital One, YC, Amazon, etc.). Add one line
tying credibility to compliance: *"We've carried regulatory and contract workloads inside companies operating
across 150+ countries."*

---

## 13. Final CTA  *(KEEP, broaden)*
> ### Bring us your next filing — or your next contract.
**CTA:** `Get started`

---

## CTA — "Get started" form (replaces the current estimate modal)

One CTA verb everywhere: **`Get started`** → opens a popup form. Branching, short, qualifies the lead.

**Step 1 — always shown**
- Name (text)
- Role / title (text)
- Work email (email)
- *"What can we help with?"* — checkboxes (multi-select): **☐ Compliance / regulatory  ☐ Legal / contracts**

**Step 2 — conditional fields based on the checkboxes**

*If **Legal / contracts** is checked:*
- *"Roughly how many contracts a month?"* (single-select): **0–5 · 6–20 · 20–50 · 50+**

*If **Compliance / regulatory** is checked:*
- *"Which filings do you work on?"* (multi-select; tailored, with an out at the bottom):
  - Bank Call Reports
  - Money transmitter licensing & renewals
  - SAR / CTR (AML) filings
  - HMDA
  - GCC prudential / AML returns (CBUAE · DFSA · ADGM · SAMA)
  - Real estate developer / project / escrow registration
  - Broker / contractor license maintenance
  - **Not sure** ← always last

**Submit:** `Get started` → success state ("We'll be in touch within one business day.").
*Implementation note:* current modal posts to a handler — reuse it; add the conditional logic + new fields.
Keep it to two visible steps so it never feels long.

---

## Copy rules for this site (the Zest/Bretton bar)
1. **Outcome before mechanism.** Lead with what the customer gets ("never miss a renewal"), not how we do it.
2. **Name real things.** "DFSA Annual AML Return, due 30 September" beats "periodic compliance returns." The
   specificity *is* the credibility.
3. **Short sentences. Plain words.** A founder with no compliance background should understand every line.
4. **"You keep control, we carry the load"** is the repeated promise — say it in the hero, the fit section, and the CTA.
5. **Symmetry signals one firm.** Compliance and Legal use the same card template, same verbs, same sign-off line.
6. **Only claim numbers we can stand behind.** Where a cadence is uncertain (KSA Etnam, Nevada NSCB), use
   "annual / per-project / on the regulator's clock" instead of a specific figure. Date any regulatory content;
   flag US items that shifted in 2025–26 (CTA/BOI, §1071, SAR FAQs).

## Decisions locked
- ✅ **Compliance-forward**, extreme confidence in both practices.
- ✅ **Value prop = codify scattered data → filing-ready** (not "you miss deadlines"). Extend, never replace.
- ✅ **Drop Health-Tech.** Focus: Financial Services + Real Estate.
- ✅ **CTA = "Get started"** → branching popup form (spec above).
- ✅ Proof anchored on **volume/scale** + **time/cost saved** metrics.

## Still needed from founder
- **Hero headline:** pick R1–R6 (R1 recommended).
- **Real metrics** for the proof section — actual numbers only:
  - Volume/scale: e.g. contracts managed, filings handled, clients served, countries, $ assets touched.
  - Time/cost saved: e.g. hours saved per filing, "X days → Y days," cost vs. a hire.
- Confirm the form's regulatory-filing list matches what real prospects actually say.
