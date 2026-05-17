# Homepage Copy Revamp — Requirements

**Date:** 2026-05-16
**Branch:** feat/copy-conversion-revamp

---

## Brand Foundation (New — Use Throughout)

Two pieces of brand material must be woven into the homepage and FAQ. Neither currently appears anywhere on the site.

**1. The name origin.**
"Bunshin" (分身) is a Japanese word meaning shadow clone — the ability to multiply yourself. The firm's model is built around that idea: clients get senior engineering capacity added to their operation without adding headcount, overhead, or a management layer. This is not just a naming curiosity — it's the core value proposition stated plainly.

**2. The AI philosophy.**
Bunshin uses AI throughout the development process to build faster and think more rigorously. But the deliverable is always hard-coded, deterministic software — not an AI layer embedded in the client's production stack. No token burn on the client's infrastructure. No new cost center. No hallucinations in a compliance-critical system. The output is code that does exactly what it's supposed to do, every time, because it is code — not a model inference call. This is a genuine differentiator from what most firms are currently selling, and it is especially meaningful for healthcare and defense buyers.

Both pieces belong in the FAQ (as new items 1 and 2) and the AI philosophy specifically should surface somewhere on the homepage body — either in "Our Standard" or as a callout in the engagement section.

---

## Problem

The homepage does not clearly communicate what Bunshin is, and several sections undercut rather than build credibility:

- The hero headline is memorable but opaque — a cold visitor doesn't know they've landed on a software engineering firm until they read the subhead.
- The name origin and AI philosophy — two of the most distinctive things about this firm — appear nowhere on the site.
- The engagement process section ("The Engagement") is vague enough to describe any agency. The step descriptions don't name deliverables, cadence, or client commitments.
- The FAQ opens with a self-inflicted credibility challenge that plants doubt rather than resolving it.
- Portfolio work exists but isn't surfaced on the home page — the only place most visitors will look.
- No client testimonials exist anywhere on the page.

---

## Goals

- A cold visitor understands what Bunshin is and who it's for within the first viewport.
- The engagement section communicates a specific, professional process — not generic steps.
- The FAQ builds confidence in the first question, not erodes it.
- At least two portfolio projects are visible on the home page.
- The overall impression is a firm with a vetted, repeatable process — not a startup figuring it out.

---

## Not Goals

- Changing the voice or tone. The current voice (bold, direct, no corporate warmup) stays.
- New service pages or service content changes.
- Building a testimonials section now. It's planned but gated on client content.

---

## Changes

### 1. Hero: Add Descriptor Eyebrow

**File:** `src/components/Hero.tsx`

**Current:** The small eyebrow line reads "Bunshin Development Studios" — identifies the firm but not the service category.

**Change:** Add a second descriptor line that identifies the service category AND optionally surfaces the "multiply your capacity" brand idea. The Navbar already carries the brand name, so this line's job is context-setting and positioning.

**Recommended wording options (resolve during implementation):**
- `Custom Software Engineering` — clean, safe, clear
- `We Multiply Your Engineering Capacity` — leads with the brand idea, more distinctive
- `Senior Engineering That Multiplies Your Capacity` — combines both signals

The goal: a visitor reads something that orients them — what this firm does, or the core idea behind it — before the tagline lands. The shadow clone / multiply capacity framing is available here if the voice feels right; otherwise "Custom Software Engineering" is the safe fallback.

---

### 2. Engagement Section: Rename + Rewrite Step Descriptions

**File:** `src/components/ValuePropositions.tsx`

**Current section title:** "The Engagement" — vague, sounds internal.

**New section title:** "How We Work" or "A Project With Bunshin" — the latter is more on-brand with the direct, personalized voice.

**Current step descriptions and what's wrong with them:**

| Step | Current | Problem |
|------|---------|---------|
| Discovery | "We listen. We want to know who you are..." | "We listen" is what every firm says. Doesn't name what the client gets at the end of Discovery. |
| Scope & Design | "You receive a written scope document and a fixed price..." | OK, but could specify what the document includes (technical proposal, architecture decisions, wireframes where applicable). |
| Build | "We ship in iterations with your input at each stage. You see working software early." | Says nothing about cadence, access, or methodology. Could be any firm. |
| Launch & Ongoing | "We stay engaged after launch. If something breaks, you call us." | Doesn't name the retainer option or describe what "ongoing" looks like in practice. |

**Rewrite direction for each step:**

- **Discovery** — Name the Paid Discovery engagement ($500, credited to project). Make clear the client leaves with a written scope document, technical proposal, and fixed price — regardless of next steps. This is what ends Discovery.
- **Scope & Design** — Clarify what the scope document contains (requirements, architecture decisions, acceptance criteria). Emphasize client approval gates the project start.
- **Build** — Name the CSM-certified sprint methodology, staged environment access, and Jira board visibility. "You see working software at every sprint boundary — not at the end." Burn rate tracked against fixed price throughout. **Also surface the AI philosophy here** — something brief acknowledging that AI is used in the build process but the deliverable is always deterministic, hard-coded software (no runtime token burn, no AI dependency in the production system). One sentence is enough; the FAQ carries the full answer.
- **Launch & Ongoing** — Name the retainer option ($1,500–$3,000/mo, 3-month minimum, direct principal access). Not "call when it breaks" — a structured ongoing engagement option.

---

### 3. FAQ: Replace First Question + Add Two New Items

**File:** `src/data/faq.ts`

**Current order:**
1. "You're a newer firm — how do I know you can deliver at this scale?" ← **drop entirely**
2. What makes Bunshin different from a larger agency?
3. How do you handle compliance and data security?
4. What industries have you worked in?
5. How do you manage scope, timeline, and budget?
6. How do you work alongside existing internal teams?

**Problems:**
- The first question plants a credibility doubt in visitors who didn't have it. It is not to be reframed or moved — it is to be removed.
- Two brand-defining topics are completely absent from the FAQ: the name origin and the firm's AI philosophy. Both are conversion-relevant and should be added.

**New order (8 items):**

1. **NEW — "What does 'Bunshin' mean?"** — The name origin opens the FAQ. It's curiosity-driven (visitors wonder about the name), tells the brand story, and encodes the core value proposition without feeling like a sales pitch. Answer direction: "Bunshin" (分身) is a Japanese word meaning shadow clone — the ability to multiply yourself, to be in more than one place at once. The firm's model is built around that idea: you get senior engineering capacity added to your operation without adding headcount, overhead, or a management layer. The principal who scopes your work is the one who builds it — not a clone of the person you met on the sales call.

2. **NEW — "Do you use AI in your development process?"** — Answers a question every buyer has right now, and differentiates Bunshin from firms selling AI-layer products. Answer direction: Yes — AI is used throughout the development process to build faster and think more rigorously. But the deliverable is always hard-coded, deterministic software. Not an AI layer in your production stack. No token burn, no new cost center, no hallucinations in your compliance-critical system. The output is code that does exactly what it's supposed to do, every time, because it's code — not a model inference call.

3. **"How do you manage scope, timeline, and budget on complex projects?"** — leads with the process specifics that signal a mature firm

4. **"What makes Bunshin different from a larger agency or consultancy?"** — structural differentiator

5. **"How do you handle compliance and data security requirements?"** — expertise proof for healthcare/defense audience

6. **"How do you work alongside existing internal teams?"** — practical, reduces integration friction concern

7. **"What industries have you worked in?"** — background and range

8. **KEEP (unchanged) — "What makes Bunshin different from a larger agency or consultancy?"** *(already item 4 — this note is a duplicate, disregard)*

**Note:** The "newer firm" question (current item 1) is removed with no replacement. Its answer was strong, but the question framing was self-defeating and the content is covered by items 3 and 4 above.

---

### 4. New Section: Portfolio Highlights

**New file:** `src/components/PortfolioHighlights.tsx`  
**Added to:** `src/app/page.tsx`, positioned after `<WhoWeWorkWith />` and before `<BunshinBuild />`

**Rationale:** The current page proves who Bunshin is (principal credentials, SDVOSB) but never shows what they've built. "Selected work" on the home page is the fastest credibility signal available without client quotes.

**Section structure:**
- Section eyebrow: "Selected Work"
- Heading: "What We Built. What It Replaced."
- 2–3 project cards — each showing: project title, category tag, one-sentence summary, status badge (Live / In Development)
- "View all projects →" link to `/portfolio`

**Recommended featured projects (3):**
1. **Revup Motors LLC** — client work, live, before/after business problem is concrete
2. **Animal Control & Shelter Management Platform** — government sector, shows regulated environment experience, offline-first architecture credibility
3. **Fishing with Friends** — demonstrates mobile and cross-platform range

**Card data:** Pull directly from `src/data/portfolio.ts` — no duplicate content.

**Visual approach:** Match the existing glass card style used in `ValueCards` and `WhoWeWorkWith`. The section should feel native to the page, not like a portfolio insert.

---

### 5. Testimonials — Planned, Not Now

A testimonials section is a high-priority near-term gap. Every peer firm (boutique engineering consultancies in the same tier) has at least one client quote on the home page. Its absence is felt.

**Not building now:** client content is not ready.

**When content is ready:** A single-quote testimonial block between `<PortfolioHighlights />` and `<BunshinBuild />` would be the natural placement. One strong, specific quote with name, title, and company is worth more than a carousel of vague endorsements.

**Action item:** Collect 1–2 quotes from Revup Motors (the only live client engagement) before the next homepage revision cycle.

---

## Page Order After Changes

```
Navbar
Hero (with descriptor eyebrow)
ValueCards
WhoWeWorkWith
PortfolioHighlights  ← new
[Testimonials]       ← planned, not yet
BunshinBuild
ValuePropositions (renamed + rewritten)
LeadMagnet
TechnicalFAQ (reordered)
BottomCTA
Footer
```

---

## Success Criteria

- [ ] A first-time visitor can identify Bunshin as a software engineering firm without reading past the hero.
- [ ] The engagement process section names at least one specific deliverable per step and references the Paid Discovery and sprint cadence.
- [ ] FAQ's first question reads as a confidence signal, not a credibility challenge.
- [ ] At least two portfolio projects are visible on the home page.
- [ ] No new components break the existing glass/dark design system.
