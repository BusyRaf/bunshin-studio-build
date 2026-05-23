---
title: "feat: FWF MDX Case Study System"
type: feat
status: completed
date: 2026-05-23
origin: docs/brainstorms/2026-05-23-fwf-case-study-requirements.md
---

# feat: FWF MDX Case Study System

## Summary

Wire `@next/mdx` into the project's static-export config, add a shared `CaseStudyLayout` component and `mdx-components.tsx` mapped to the site's design system, and publish the Fishing with Friends case study as the first consumer. Content lives at `src/content/case-studies/`; the route and metadata live at `src/app/portfolio/fishing-with-friends/`. The StackedDeck gets a `ctaLabel` field so the FWF card reads "Read Case Study."

---

## Problem Frame

The site's portfolio section has a basic FWF card but no path to the full technical narrative. A visitor doing due diligence hits a dead end. The marketing folder contains a complete, publication-ready case study (`case-study.md`) targeting exactly that visitor. More case studies are actively in progress — the right moment to establish the MDX pattern is the first one, not the second. (See origin: `docs/brainstorms/2026-05-23-fwf-case-study-requirements.md`)

---

## Requirements

- R1. `@next/mdx` configured in `next.config.mjs`; `.mdx` files in the project render as React components
- R2. `mdx-components.tsx` at repo root maps MDX elements to the site's design system
- R3. Shared `CaseStudyLayout` wraps all case study pages — Navbar, Footer, hero, byline, section spacing
- R4. Case study page is visually native: glass card sections, primary-color labels, readable prose — not a blog post
- R5. All five narrative sections from `case-study.md` are present and readable
- R6. Three ★FEATURED screenshots (02-catch-detail, 03-tournament, 06-trip) presented in an intentional gallery
- R7. Three SVG diagrams embedded inline in their narrative sections, in styled dark-background containers
- R8. Author byline: "By the Bunshin Development Studios Team" → `/about`, with publish date
- R9. All 7 screenshots copied to a stable path under `public/`
- R10. SVG diagram files available under `public/`
- R11. `alternates.canonical`, `openGraph`, and `description` metadata exported for the FWF page
- R12. 1200×630 OG image at `public/og/fishing-with-friends.jpg`
- R13. JSON-LD (Article + SoftwareApplication) in the page `<head>`
- R14. No occurrence of `/work/fishing-with-friends` in any source file
- R15. `PortfolioProject` gains optional `ctaLabel?: string`
- R16. FWF entry gets `ctaLabel: "Read Case Study"` and moves to position 0
- R17. `StackedDeck` renders `front.ctaLabel ?? "View Details"`
- R18. `StackedDeck` change leaves all non-FWF cards showing "View Details" unchanged
- R19. FWF case study content authored from `case-study.md` — all five sections included
- R20. Second case study requires only a new MDX content file + a new `portfolioProjects` entry

**Origin actors:** A1 (Portfolio visitor / technical buyer), A2 (Content author / Bunshin team)
**Origin flows:** F1 (Visitor reads a case study), F2 (Author publishes a new case study)
**Origin acceptance examples:** AE1 (covers R20, R3), AE2 (covers R4, R5, R6, R7), AE3 (covers R11, R13, R14), AE4 (covers R15, R16, R17, R18)

---

## Scope Boundaries

- Migrating existing portfolio entries (Animal Control, Revup) to MDX case studies — deferred until their content is written
- FAQ content mined from Confluence docs — deferred as post-launch enhancement
- CMS or external content sourcing — not in scope; content files live in the repo
- Device-frame mockups around screenshots — not in scope for v1
- `next/og` automatic OG image generation — not in scope; hand-exported PNG is sufficient

### Deferred to Follow-Up Work

- Subsequent case studies (Animal Control, Revup): add `src/content/case-studies/<project>.mdx` and a portfolio entry when content is ready

---

## Context & Research

### Relevant Code and Patterns

- `next.config.mjs` — `output: "export"`, `distDir: "out"`, `trailingSlash: true`; MDX must be compatible with static export (`@next/mdx` is)
- `src/data/portfolio.ts` — `PortfolioProject` type + `portfolioProjects` array; `ctaLabel` field added here
- `src/components/StackedDeck.tsx` — renders `front.ctaLabel ?? "View Details"` on the navigation button; `<Link href={/portfolio/${front.id}}>` is the existing CTA shape
- `src/app/portfolio/[projectId]/page.tsx` — dynamic detail route; static segment `fishing-with-friends` overrides it automatically in Next.js 15
- `src/app/layout.tsx` — JSON-LD pattern: `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />`; `metadataBase` already set via `siteConfig.url`
- `src/data/seo.ts` — `siteConfig.url` used for canonical and OG URL construction
- `tailwind.config.ts` — `@tailwindcss/typography` is in `devDependencies` but **not** in the plugins array; must be added; `font-mono` is IBM Plex Mono, `font-sans` is DM Sans; dark background token is `--background: 222 47% 5%`
- `src/app/globals.css` — design tokens (HSL custom properties); `glass` utility class defined here; primary color is `hsl(187 100% 42%)`
- `public/portfolio/fishing-with-friends.png` — confirmed present; StackedDeck card image is already set

### Institutional Learnings

- No relevant `docs/solutions/` entries found for MDX or Next.js static export patterns

### External References

- `@next/mdx` docs: supports `output: "export"` — MDX pages compile to static HTML at build time; no runtime server needed
- Next.js 15 App Router MDX: static segment page (`page.tsx` or `page.mdx`) overrides `[dynamic]` route for that segment; no special config required
- `@tailwindcss/typography` `prose-invert` variant: inverts default light-background prose styles for dark-background pages; pairs naturally with the site's `--background: 222 47% 5%` token

---

## Key Technical Decisions

- **`src/content/case-studies/` as content home, not `page.mdx` as the page itself:** separates content authoring from Next.js routing; `page.tsx` controls metadata export cleanly; avoids edge cases with `export const metadata` inside `.mdx` files in Next.js 15
- **`<img>` from `/public/` for SVG diagrams:** no SVGR transform needed (none is configured); fully compatible with static export; styled `<div>` wrappers handle dark-background containment; simpler author workflow
- **`prose prose-invert` for body text, not manual element-by-element Tailwind mapping:** `@tailwindcss/typography` is already installed; wiring it in avoids reinventing heading hierarchy, paragraph spacing, lists, and inline code — only the design-system-specific elements (section eyebrows, diagram containers, screenshot gallery) require custom MDX component mappings
- **JSON-LD injected in `page.tsx` via `dangerouslySetInnerHTML`:** follows the established pattern in `src/app/layout.tsx`; keeps structured data co-located with the page-level metadata export
- **Static segment override for `/portfolio/fishing-with-friends`:** no changes to the `[projectId]` dynamic route needed; Next.js 15 resolves static before dynamic; all other portfolio detail pages continue working unchanged

---

## Open Questions

### Resolved During Planning

- **Where does `public/portfolio/fishing-with-friends.png` exist?** Confirmed present — no copy needed for StackedDeck card image (see Context).
- **MDX content location:** `src/content/case-studies/` directory imported by `page.tsx` — cleanest metadata export path for Next.js 15 static export (see Key Technical Decisions).
- **SVG rendering approach:** `<img>` from `/public/` in styled containers — no SVGR tooling required (see Key Technical Decisions).

### Deferred to Implementation

- **`prose-invert` customization depth:** the default `@tailwindcss/typography` dark-mode prose may need minor color overrides to match the exact `--muted-foreground` / `--foreground` tokens. Tune during implementation by inspecting rendered output.
- **OG image export tooling:** the implementer should use any available image editor (or a browser screenshot) to export a 1200×630 crop of `02-catch-detail.png`; no specific tooling is prescribed.
- **Screenshot compression:** after copying, consider running screenshots through `oxipng` or `pngquant` before committing; not blocking but worth the one-time pass.

---

## Output Structure

    src/
      app/
        portfolio/
          fishing-with-friends/
            page.tsx          ← route + metadata + JSON-LD (new)
      components/
        CaseStudyLayout.tsx   ← shared layout wrapper (new)
      content/
        case-studies/
          fishing-with-friends.mdx  ← FWF narrative content (new)
    mdx-components.tsx              ← MDX element → design system mappings (new, at repo root)
    public/
      og/
        fishing-with-friends.jpg    ← 1200×630 OG image (new)
      portfolio/
        fishing-with-friends/
          screenshots/              ← 7 PNGs copied from marketing folder (new)
          diagrams/                 ← 3 SVGs copied from marketing folder (new)

---

## High-Level Technical Design

> *This illustrates the intended approach and is directional guidance for review, not implementation specification. The implementing agent should treat it as context, not code to reproduce.*

```
Content authoring flow (R20 — one file per future case study):

  src/content/case-studies/fishing-with-friends.mdx
         │
         │ imported as React component
         ▼
  src/app/portfolio/fishing-with-friends/page.tsx
         │  exports Next.js metadata (canonical, OG, JSON-LD)
         │  renders <CaseStudyLayout> wrapping MDX content
         ▼
  src/components/CaseStudyLayout.tsx
         │  <Navbar /> + hero + byline + <section> wrappers + <Footer />
         ▼
  mdx-components.tsx
         │  maps MDX h2 → eyebrow label, p → prose container,
         │  custom: <Diagram />, <ScreenshotGallery />
         ▼
  Rendered page at /portfolio/fishing-with-friends/

Adding a second case study:
  1. Create src/content/case-studies/animal-control-platform.mdx
  2. Create src/app/portfolio/animal-control-platform/page.tsx
     (copy the FWF page.tsx; update metadata strings and MDX import)
  3. Add portfolioProjects entry in src/data/portfolio.ts
```

---

## Implementation Units

### U1. Configure `@next/mdx` and Tailwind typography

**Goal:** Install the MDX dependency, update `next.config.mjs` to process `.mdx` files, add a TypeScript declaration for MDX imports, and wire `@tailwindcss/typography` into the Tailwind config.

**Requirements:** R1

**Dependencies:** None

**Files:**
- Modify: `package.json`
- Modify: `next.config.mjs`
- Create: `src/types/mdx.d.ts` (or `src/@types/mdx.d.ts` — match the project's existing types convention)
- Modify: `tailwind.config.ts`

**Approach:**
- Install `@next/mdx` and `@mdx-js/react` as dependencies
- Wrap the Next.js config with `withMDX({ extension: /\.mdx?$/ })` and add `pageExtensions: ['ts', 'tsx', 'mdx']`
- Add a `*.mdx` module declaration so TypeScript accepts MDX imports
- Add `require("@tailwindcss/typography")` to the `plugins` array in `tailwind.config.ts`

**Patterns to follow:**
- `next.config.mjs` — existing config shape (`output: "export"`, `trailingSlash: true`) must be preserved inside the `withMDX` wrapper

**Test scenarios:**
- Happy path: `next build` completes without errors after changes
- Happy path: a `.mdx` file imported in a `page.tsx` resolves without TypeScript errors
- Happy path: `prose` and `prose-invert` Tailwind classes are recognised by the compiler (no unknown-utility warnings)

**Verification:**
- `next build` exits 0; `.mdx` imports are type-clean in VS Code / `tsc --noEmit`; `prose` class is active in the compiled CSS

---

### U2. Create `mdx-components.tsx` and `CaseStudyLayout`

**Goal:** Map MDX HTML elements to the site's design system components and build the shared layout wrapper used by all case study pages.

**Requirements:** R2, R3, R4, R8

**Dependencies:** U1

**Files:**
- Create: `mdx-components.tsx` (repo root — required location for Next.js MDX)
- Create: `src/components/CaseStudyLayout.tsx`

**Approach:**
- `mdx-components.tsx`: export a `useMDXComponents` function. Map `h2` to a section-eyebrow heading (monospace, `text-primary`, `tracking-widest`, `uppercase`, `text-xs`), `p` to `font-sans text-muted-foreground leading-relaxed`. Wrap the overall content in a `prose prose-invert max-w-none` container so the typography plugin handles heading hierarchy, lists, inline code, and paragraph spacing automatically. Define and export two custom components for use in MDX: `<Diagram>` (styled dark-background SVG container) and `<ScreenshotGallery>` (3-up responsive grid with caption slots).
- `CaseStudyLayout.tsx`: accepts `title`, `category`, `tags`, `byline`, and `children` props. Renders `<Navbar />`, a hero section (title, category badge, tags row), the author byline (`By the Bunshin Development Studios Team · May 2026` linking to `/about`), `children` (MDX content), and `<Footer />`. Uses `container mx-auto px-6 max-w-4xl` for width constraint. Individual narrative sections are wrapped in `glass rounded-xl p-8 border border-border mb-12` cards — either via the `h2`-triggered mapping or as explicit section wrappers in the layout.

**Patterns to follow:**
- `src/app/portfolio/[projectId]/page.tsx` — section spacing, glass card wrappers, eyebrow label style (`font-mono text-xs text-primary tracking-[0.25em] uppercase`)
- `src/components/Navbar.tsx`, `src/components/Footer.tsx` — import paths

**Test scenarios:**
- Happy path: `CaseStudyLayout` renders with all props and produces Navbar, hero, byline, content slot, and Footer without console errors
- Happy path: an `<h2>` in MDX content renders as the monospace eyebrow style (not a default browser h2)
- Happy path: `<Diagram src="..." alt="..." />` renders an `<img>` inside a styled dark container with rounded corners
- Happy path: `<ScreenshotGallery>` renders 3 images in a responsive grid
- Edge case: `tags` prop is an empty array — tags row is absent, no empty `<div>` rendered
- Edge case: `byline` prop omitted — byline block is absent

**Verification:**
- Storybook story or local dev render shows the layout matching the site's glass/dark design; no raw unstyled headings or paragraphs visible

---

### U3. Copy and prepare assets

**Goal:** Move all marketing screenshots and diagrams into the Next.js `public/` tree and create the OG image.

**Requirements:** R9, R10, R12

**Dependencies:** None (can run in parallel with U1–U2)

**Files:**
- Create: `public/portfolio/fishing-with-friends/screenshots/01-home.png` … `07-onboarding.png`
- Create: `public/portfolio/fishing-with-friends/diagrams/01-offline-sync.svg`
- Create: `public/portfolio/fishing-with-friends/diagrams/02-privacy-model.svg`
- Create: `public/portfolio/fishing-with-friends/diagrams/03-tournament-snapshot.svg`
- Create: `public/og/fishing-with-friends.jpg`

**Approach:**
- Copy all 7 screenshots from the marketing folder to `public/portfolio/fishing-with-friends/screenshots/`
- Copy the 3 SVG files from `diagrams/` to `public/portfolio/fishing-with-friends/diagrams/`
- Export a 1200×630 crop centred on the catch photo from `02-catch-detail.png` as `public/og/fishing-with-friends.jpg`
- Optional but recommended: run screenshots through `oxipng` or `pngquant` before committing

**Test scenarios:**
- Test expectation: none — this unit is a file-copy operation with no behavioral logic to test
- Verification is manual: confirm all 7 screenshots and 3 SVGs are accessible at their new paths in the dev server (`/portfolio/fishing-with-friends/screenshots/02-catch-detail.png` returns 200)

**Patterns to follow:**
- Existing `public/portfolio/*.png` structure for reference

**Verification:**
- All 7 screenshot paths and 3 diagram paths return 200 in local dev (`next dev`); `public/og/fishing-with-friends.jpg` is confirmed 1200×630

---

### U4. Author FWF MDX content file

**Goal:** Port `case-study.md` to MDX format in `src/content/case-studies/fishing-with-friends.mdx`, using the custom components defined in U2.

**Requirements:** R5, R6, R7, R19

**Dependencies:** U2 (custom components must exist to use in MDX), U3 (asset paths must be settled)

**Files:**
- Create: `src/content/case-studies/fishing-with-friends.mdx`

**Approach:**
- The five sections from `case-study.md` map directly: each section becomes an `<h2>` (triggers eyebrow style) followed by prose paragraphs
- Section ordering: *The product* → *Offline-first* → *A few places we didn't follow the standard recommendation* → *Tournaments* → *How the build was structured*
- After *The product* section: insert `<ScreenshotGallery>` with the three ★FEATURED screenshots (02-catch-detail, 03-tournament, 06-trip) and captions ("Catch detail — hero product shot", "Live tournament leaderboard", "Trip summary with photo grid")
- After *Offline-first* section: insert `<Diagram src="/portfolio/fishing-with-friends/diagrams/01-offline-sync.svg" alt="SQLite outbox → Supabase sync flow" />`
- After *The product* section's privacy model discussion: insert `<Diagram src="/portfolio/fishing-with-friends/diagrams/02-privacy-model.svg" alt="Friends-only RLS privacy diagram" />`
- After *Tournaments* section: insert `<Diagram src="/portfolio/fishing-with-friends/diagrams/03-tournament-snapshot.svg" alt="Tournament entry snapshot schema" />`
- Stack section at the bottom of the file (plain prose, matching the existing `case-study.md` stack line)
- No frontmatter needed — metadata is owned by `page.tsx` (U5)

**Patterns to follow:**
- `case-study.md` in the marketing folder — content source of truth; do not invent or paraphrase

**Test scenarios:**
- Happy path: importing the MDX file in a test component renders all five `<h2>` headings without errors
- Happy path: the three `<Diagram>` components render with their `src` and `alt` props
- Happy path: `<ScreenshotGallery>` renders three images with captions
- Edge case: long code-style terms in the text (e.g., `pg_net.http_post`, `drift`) render as styled inline code via the `prose` plugin, not as raw backtick text

**Verification:**
- Local dev render of the FWF page shows all five sections, the gallery after *The product*, and the three diagrams in their correct positions; no broken-image icons visible

---

### U5. Create FWF case study page with metadata and JSON-LD

**Goal:** Create the static route at `/portfolio/fishing-with-friends` that imports the MDX content, exports Next.js metadata (canonical, OG, JSON-LD), and renders it through `CaseStudyLayout`.

**Requirements:** R3, R4, R8, R11, R12, R13, R14

**Dependencies:** U2, U3, U4

**Files:**
- Create: `src/app/portfolio/fishing-with-friends/page.tsx`

**Approach:**
- Export `metadata` with: `title: "Fishing with Friends | Case Study"`, `description` (≤ 155 chars, written from the FWF summary), `alternates.canonical: "${siteConfig.url}/portfolio/fishing-with-friends"`, `openGraph.images: [{ url: "${siteConfig.url}/og/fishing-with-friends.jpg", width: 1200, height: 630 }]`
- Inject JSON-LD via `<script type="application/ld+json" dangerouslySetInnerHTML={...} />` — include both `Article` and `SoftwareApplication` types; use `case-study.html` as the content template for field values; confirm no `/work/` URL appears anywhere in the JSON-LD
- Import `FishingWithFriendsCaseStudy` from `src/content/case-studies/fishing-with-friends.mdx`
- Render inside `<CaseStudyLayout title="Fishing with Friends" category="Internal" tags={[...]} byline="By the Bunshin Development Studios Team · May 2026">`
- The `byline` prop renders as `<a href="/about">the Bunshin Development Studios Team</a>` inside `CaseStudyLayout` (see U2)
- Audit the entire file for any `/work/fishing-with-friends` string before committing (satisfies R14)

**Patterns to follow:**
- `src/app/portfolio/[projectId]/page.tsx` — `generateMetadata` shape and `siteConfig` import
- `src/app/layout.tsx` — JSON-LD injection pattern (`dangerouslySetInnerHTML`)
- `src/data/seo.ts` — `siteConfig.url` for constructing absolute URLs

**Test scenarios:**
- Covers AE3. Happy path: the rendered page `<head>` contains `<link rel="canonical" href="https://bunshin.io/portfolio/fishing-with-friends/">` (with trailing slash, matching `trailingSlash: true`)
- Covers AE3. Happy path: the JSON-LD block validates at `https://validator.schema.org/` — Article and SoftwareApplication types both present, no placeholder URLs
- Happy path: the MDX content renders inside the layout with all five sections visible
- Happy path: `og:image` meta tag points to `/og/fishing-with-friends.jpg`
- Integration: the static route at `/portfolio/fishing-with-friends` is rendered in `next build` output (appears in `out/portfolio/fishing-with-friends/index.html`) and does not fall through to `[projectId]`
- R14 check: `grep -r "work/fishing-with-friends" src/` returns no matches

**Verification:**
- `next build` succeeds and `out/portfolio/fishing-with-friends/index.html` exists; page renders correctly in browser; `<title>` and `<meta description>` are correct; JSON-LD validates

---

### U6. Update portfolio data and StackedDeck CTA

**Goal:** Add `ctaLabel` to the `PortfolioProject` type, update the FWF entry, move it to position 0, and update `StackedDeck` to render the custom label.

**Requirements:** R15, R16, R17, R18

**Dependencies:** None (can run in parallel with U1–U3)

**Files:**
- Modify: `src/data/portfolio.ts`
- Modify: `src/components/StackedDeck.tsx`

**Approach:**
- Add `ctaLabel?: string` to the `PortfolioProject` type
- Update the FWF object: add `ctaLabel: "Read Case Study"`, move the entire entry to index 0 in the `portfolioProjects` array
- In `StackedDeck.tsx`, replace the `"View Details"` string literal on the `<Link>` button with `{front.ctaLabel ?? "View Details"}`
- No other changes to `StackedDeck`

**Patterns to follow:**
- `src/data/portfolio.ts` — existing optional field pattern (e.g., `imagePosition?: string`)
- `src/components/StackedDeck.tsx:116` — existing CTA button shape

**Test scenarios:**
- Covers AE4. Happy path: when `front.ctaLabel` is `"Read Case Study"`, the button text reads "Read Case Study"
- Covers AE4. Happy path: when `front.ctaLabel` is `undefined` (all other projects), the button text reads "View Details"
- Happy path: `portfolioProjects[0].id === "fishing-with-friends"` after the reorder
- Integration: the StackedDeck renders without runtime errors with the updated data; cycling through cards shows the correct label per project

**Verification:**
- `next dev` — FWF card shows "Read Case Study"; advancing the deck to Animal Control shows "View Details"; TypeScript compiles without errors

---

## System-Wide Impact

- **Interaction graph:** `StackedDeck` reads `portfolioProject.ctaLabel` — no other component references this new field; impact is isolated
- **Error propagation:** MDX import errors at build time (malformed MDX, missing custom components) will fail `next build` and surface as compile errors — no runtime error path
- **State lifecycle risks:** none — all new content is statically rendered; no database, no auth, no client state
- **API surface parity:** none — this is a presentational feature with no API surface
- **Integration coverage:** the `/portfolio/fishing-with-friends` static route must not shadow the `[projectId]` route for *other* projects; confirmed by Next.js static-before-dynamic resolution — but verify in `next build` that all other `generateStaticParams` entries still produce their own pages
- **Unchanged invariants:** all existing `portfolioProjects` entries continue to render at `/portfolio/[projectId]` via the dynamic route; the `StackedDeck` cycling behavior is unchanged; `output: "export"` and `distDir: "out"` remain unchanged

---

## Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| `@next/mdx` version incompatibility with Next.js 15.3 | Check `@next/mdx` release notes for 15.x compatibility before installing; if incompatible, `next-mdx-remote` is a drop-in alternative (slightly more setup) |
| `prose-invert` typography clashes with the site's custom HSL token colors | Tune in U2 during local dev; override specific prose color properties in `tailwind.config.ts` under `typography` key if needed |
| Static export breaks if MDX introduces a server-only import | MDX content files should import only client-safe modules; no `fs`, `path`, or server-side utilities in MDX content |
| `/portfolio/fishing-with-friends` trailing-slash mismatch with canonical URL | `next.config.mjs` has `trailingSlash: true` — canonical URL in metadata must include the trailing slash: `https://bunshin.io/portfolio/fishing-with-friends/` |
| Marketing SVGs have dark backgrounds — may look broken on the page without containers | `<Diagram>` component in U2 adds `bg-[#0d1b2a] rounded-xl overflow-hidden p-4` or similar containment; test with actual SVG files in local dev |

---

## Sources & References

- **Origin document:** [docs/brainstorms/2026-05-23-fwf-case-study-requirements.md](docs/brainstorms/2026-05-23-fwf-case-study-requirements.md)
- Content source: marketing folder `case-study.md` (outside repo — see brainstorm for path)
- Related code: `src/data/portfolio.ts`, `src/components/StackedDeck.tsx`, `src/app/portfolio/[projectId]/page.tsx`, `src/app/layout.tsx`
- `@next/mdx` docs: https://nextjs.org/docs/app/guides/mdx
- `@tailwindcss/typography`: https://tailwindcss.com/docs/typography-plugin
