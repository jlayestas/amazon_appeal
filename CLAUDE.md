# Amazon Appeal Consultant — Site Blueprint

This file is the design and content reference for the entire project. Consult it before writing any component, copy, or layout decision.

---

## Project Summary

A professional service website for an **Amazon Account, ASIN, and Brand Support Consultant**. The consultant helps Amazon sellers and brand owners with:

- Account reinstatement support
- ASIN reinstatement support
- Appeal drafting assistance
- Plans of Action (POA)
- Suspension analysis
- Document review
- Seller performance / compliance strategy
- Intellectual property complaint support
- Complaint drafting
- Evidence review
- Submission-language preparation

**Stack:** Next.js + TypeScript + Tailwind CSS

---

## Sitemap

```
/                    Homepage
/services            Services (overview + anchored sections)
  #account-support   Account & Seller Performance
  #asin-support      ASIN & Listing Issues
  #brand-ip          Brand & IP Complaints
/process             How It Works
/about               About the Consultant
/contact             Contact / Intake Form
/faq                 FAQ (Phase 2)
```

---

## Homepage Section Order

1. Navigation bar — Logo | Services | Process | About | Contact (CTA button)
2. Hero — Headline + subheadline + primary CTA + trust signal
3. Problem framing — 2–3 lines bridging the emotional state of the user
4. Services overview — 3 grouped cards, scannable
5. Process — 3-step horizontal strip
6. Why this consultant — 3–4 brief credibility signals
7. Final CTA strip — Short headline + contact button
8. Footer — Links, disclaimer, no-affiliation note

---

## Service Taxonomy

Three plain-language categories only. Never expose granular service names in top-level navigation.

### 1. Account & Seller Performance
For sellers facing account-level suspensions or compliance concerns.
- Account suspension analysis
- Plan of Action (POA) drafting
- Appeal letter preparation
- Seller performance strategy
- Submission-language review

### 2. ASIN & Listing Reinstatement
For sellers with suppressed, removed, or restricted listings.
- ASIN suspension analysis
- ASIN reinstatement support
- Appeal drafting for listing removals
- Document and evidence review

### 3. Brand & Intellectual Property
For brand owners dealing with IP complaints or counterfeit claims.
- IP complaint support (received or filed)
- Complaint drafting assistance
- Evidence review and organization
- Submission-language preparation

---

## CTAs

| Type      | Label                    | Placement                      | Style              |
|-----------|--------------------------|--------------------------------|--------------------|
| Primary   | "Request a Consultation" | Hero, Navbar, Final CTA strip  | Deep navy or slate |
| Secondary | "See How It Works"       | Below hero primary CTA         | Ghost/outline      |

Rules:
- Never use "Buy Now", "Sign Up", or transactional e-commerce language
- One primary CTA per visual section — no competing actions in the same block

---

## Tone of Voice

- **Calm and authoritative** — like a specialist consultant, not a sales funnel
- **Direct, not alarmist** — acknowledge the problem without amplifying anxiety
- **Precise, not corporate** — plain English; avoid Amazon internal jargon
- **Never promises outcomes** — use: support, prepare, assist, guide, help structure
- **Never implies Amazon affiliation** — always frame as "working within Amazon's processes"

---

## Draft Copy

### Hero

**Headline:**
> "When Your Amazon Business Hits a Wall, You Need the Right Strategy."

**Subheadline:**
> Independent support for account suspensions, ASIN removals, and brand complaints — prepared carefully, submitted with clarity.

**Primary CTA:** Request a Consultation
**Secondary CTA:** See How It Works

**Trust signal (beneath CTAs):**
> Confidential · Independent · No affiliation with Amazon

---

### Problem Framing

> A suspension notice can arrive without warning. The appeals process is technical, unforgiving, and often opaque. Having the right preparation on your side changes the quality of what gets submitted.

---

### Services Overview (card copy)

**Account & Seller Performance**
> Suspension analysis, Plan of Action drafting, and appeal preparation for account-level issues.

**ASIN & Listing Reinstatement**
> Targeted support for removed or suppressed listings — from root-cause analysis to final submission.

**Brand & Intellectual Property**
> Assistance drafting, organizing, and submitting IP-related complaints and responses.

Link text: `View all services →`

---

### Process (3-step strip)

| Step | Label    | Copy |
|------|----------|------|
| 1    | Review   | Share your case details. I analyze the notice, policy context, and your account history. |
| 2    | Prepare  | A tailored appeal or response is drafted — clearly structured and policy-aligned. |
| 3    | Submit   | You send. I help you ensure nothing is missing before it goes. |

---

### Why Work With Me (bullets — no paragraph block)

- Independent perspective — not inside Amazon's ecosystem, not guessing
- Every case reviewed individually — no templates sent without analysis
- Communication that's plain, not padded
- You stay in control of your account and submissions at all times

---

### Final CTA Strip

**Headline:**
> "Ready to get a clear picture of your situation?"

**Subheadline:**
> A consultation starts with understanding exactly what you're facing.

**Button:** Request a Consultation

---

### Footer Disclaimer

> This service provides independent consulting and document preparation assistance. It is not affiliated with, endorsed by, or a representative of Amazon.com, Inc. or any of its subsidiaries. No outcome is guaranteed.

---

## Visual Direction

- **Palette mood:** Deep navy, slate, off-white — serious, trustworthy, clean
- **Inspiration tone:** amazonappealletter.com, but significantly cleaner and shorter
- **Do not** make the site feel like an online store or SaaS product
- **Whitespace is structural** — each section should breathe; nothing stacks without spacing
- **Typography hierarchy** matters more than decorative elements

---

## UX Rules (enforce throughout build)

1. **Three categories on homepage only.** Full service detail lives on `/services`.
2. **No feature-dump copy.** Each section has one job — state it, stop.
3. **Scannable by default.** Short sentences, bullet-friendly layouts, bold lead-ins.
4. **Single primary action per section.** One CTA per visual block.
5. **No jargon in navigation.** "POA Drafting" belongs inside pages, not in nav labels.
6. **No testimonial carousels.** If social proof is added, use 2–3 static quotes only.
7. **Mobile-first layout.** Service cards stack; process strip collapses to vertical numbered list; hero CTA above fold on all common phone sizes.
8. **Avoid walls of text.** If a paragraph exceeds 3 lines, restructure it as bullets or shorten it.

---

## Build Order

1. Design tokens — color palette, type scale, spacing scale (Tailwind config)
2. Layout shell — Navbar + Footer
3. Homepage — sections top to bottom
4. `/services` — detail page with anchored sections
5. `/contact` — intake form (name, email, issue type, description — no payment)
6. `/process` and `/about` — supporting pages
7. `/faq` — Phase 2
