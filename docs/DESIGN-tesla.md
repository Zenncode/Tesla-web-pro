# Design System Inspired by Tesla

> Source of truth: [tesla.com](https://www.tesla.com) (US marketing homepage, mid‑2026).  
> This document describes the **current** Tesla marketing site — full-viewport stacked product sections.  
> **Implementation project:** `tesla-design/` only (single app in this folder).

---

## 1. Visual Theme & Atmosphere

Tesla’s website is an exercise in radical subtraction — a digital showroom where the product is everything and the interface is almost nothing. The page is a **vertical stack of full-viewport (100svh) heroes**: one model or product per screen, one message at a time. There are no decorative borders, no gradients on UI chrome, no patterns, and almost no shadows. Photography carries all emotional weight; UI chrome dissolves into the imagery.

The color philosophy is ascetic: a single blue (`#3E6AE1`) for primary CTAs and promo lines, three dark grays for text hierarchy, and white for surfaces. Typography uses **Universal Sans** (Display for hero titles, Text for UI/body), unifying website, app, and in-car UI.

**Key Characteristics:**
- Full-viewport stacked hero sections (100svh) — one product/message per scroll stop
- Near-zero UI decoration: no shadows, no gradients, no borders, no patterns on primary chrome
- Single accent color — Electric Blue (`#3E6AE1`) — for primary CTAs and incentive text
- Universal Sans (Display + Text) across web / app / vehicle
- Photography-first presentation; product imagery carries all emotional weight
- Sticky white navigation: TESLA wordmark left, five category labels center, icon cluster right
- Full-width mega-dropdowns (Vehicles grid + sidebar links) with no shadow or border
- Persistent bottom **“Ask a Question”** chat bar + “Schedule a Drive Today”
- Promo incentives in Electric Blue (`0% APR`, `0.99% APR`, lease-from lines)
- FSD (Supervised) stats block: **7x Fewer Collisions** + live **Miles Driven** counter

---

## 2. Color Palette & Roles

### Primary
- **Electric Blue** (`#3E6AE1`): Primary CTA button background and promotional/incentive text (“0% APR Available”, “0.99% APR Available”, “Lease From $329/mo”). Sole chromatic brand color.
- **Pure White** (`#FFFFFF`): Page background, nav, dropdown panels, secondary fills, chat bar.

### Surface & Background
- **White Canvas** (`#FFFFFF`): Default surfaces
- **Light Ash** (`#F4F4F4`): Subtle alternate surface (rare on homepage)
- **Carbon Dark** (`#171A20`): Dark text on light UI; dark section backgrounds when needed
- Nav is solid white (not frosted glass on the current site) — clean opaque bar over content

### Neutrals & Text
- **Carbon Dark** (`#171A20`): Headings, nav labels, model names on light surfaces
- **Graphite** (`#393C41`): Body / secondary content
- **Pewter** (`#5C5E62`): Tertiary links on light surfaces (footer, dropdown side links)
- **Silver Fog** (`#8E8E8E`): Placeholders, fine print
- **Cloud Gray** (`#EEEEEE`): Dividers (dropdown sidebar, chat bar top border)

### Semantic
- No green/red/yellow status palette on the marketing site
- Blue CTA is the only interactive color signal

### Gradient System
- **No UI gradients.** Depth comes from photography and whitespace only
- Optional light darkening overlays on hero photos are for text readability only — not decorative brand gradients

---

## 3. Typography Rules

### Font Family
- **Display**: `Universal Sans Display`, -apple-system, Arial, sans-serif — hero titles / large model names
- **Text/UI**: `Universal Sans Text`, -apple-system, Arial, sans-serif — nav, body, buttons, links
- Fallback when custom fonts unavailable: Inter / system UI stack is acceptable for clones
- No italics, no decorative OpenType features on marketing UI

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Hero Title | 40px | 500 | ~1.2 | Display; white on hero imagery |
| Product Name (nav cards) | 17px | 500 | ~1.18 | Text; Carbon Dark |
| Nav / Button | 14px | 500 | ~1.2 | Text |
| Body | 14px | 400 | ~1.43 | Text; Graphite or white on heroes |
| Sub-link | 14px / 12px | 400 | — | Pewter on light; white on heroes |
| Promo / Incentive | 14px | 500 | — | **Electric Blue** on heroes |
| Category label | ~16px | 500 | — | White on hero (“Sport Sedan”, “Midsize SUV”) |
| Footer | 12px | 400 | — | Pewter |

### Principles
- Normal letter-spacing everywhere (no negative tracking)
- Only weights **400** and **500** — no bold 700, no light 300
- No uppercase transforms except the **TESLA** wordmark
- Hero scale stays restrained (~40px web) — confidence through calm, not size

---

## 4. Component Stylings

### Buttons
Barely-rounded rectangles (**4px** radius).

**Primary CTA (“Order Now”)**
- bg `#3E6AE1`, text white, 14px/500
- min-height 40px, width ~180–200px
- border: 3px solid transparent (focus reserve)
- transition: border/background/color ~0.33s

**Secondary on light UI**
- White bg, Graphite text — e.g. “View Inventory” when used as a solid button

**Secondary on hero imagery**
- No fill, **white** text “Learn More” (readability on photography)

**Nav items**
- Transparent bg, Carbon Dark 14px/500, padding 4px 16px, min-height 32px, 4px radius

**Text links (dropdown / footer)**
- Pewter on white surfaces; no underline at rest

### Navigation
- Sticky top, solid white, ~56px height, no shadow/border
- Left: spaced uppercase **TESLA** wordmark
- Center: **Vehicles · Energy · Charging · Discover · Shop**
- Right: Help, language (globe), account icons
- **Vehicles dropdown**: grid of Model S, Model 3, Model Y, Model X, Cybertruck (image + name + Learn / Order) + sidebar (Inventory, Used Inventory, Demo Drive, Trade-in, Compare, Help Me Choose, Fleet, Semi, Roadster, …)
- Mega panel: pure white, no drop shadow, optional Cloud Gray sidebar divider

### Hero Section (Vehicle)
- 100svh, edge-to-edge photography
- Centered stack:
  1. Optional category (“Sport Sedan”, “Midsize SUV”, “Utility Truck”, “Long Wheelbase Midsize SUV”)
  2. Model / headline (40px/500 white) — e.g. “Introducing Model Y L Premium”, “Model 3”, “Model Y”, “Cybertruck”
  3. Optional promo in Electric Blue — `0.99% APR Available`, `0% APR Available`, `Lease From $329/mo`, `Lease From $459/mo`, `Lease From $949/mo`
  4. Optional subtitle white — `Three Rows, Six Seats`, `Starting at $61,990`
  5. CTA pair: **Order Now** (blue) + **Learn More** (white text)

### Full Self-Driving (Supervised)
- Full-viewport cinematic / dark treatment
- Title: “Full Self-Driving (Supervised)”
- Subtitle: “Makes every drive easier. Subscribe for $99/mo.”
- Stats (side by side):
  - **7x** — Fewer Collisions
  - **11,974,619,551** — Miles Driven *(live counter on tesla.com; update when re-syncing)*
- Links: Schedule Demo · Learn More (white on dark)

### Current Offers
- Title: “Current Offers”
- Body: “Explore limited-time offers on Tesla vehicles.”
- Link: Learn More → `/current-offers`
- Related offer detail (offers page): Model Y L Premium Launch Series starting at **$61,990** (includes free FSD year and other launch benefits when promoted)

### Inventory
- Title: “Inventory”
- Body: “Find nearby vehicles available for immediate delivery.”
- Links: **New** · **Pre-Owned**

### Energy Heroes
Same visual language as vehicle heroes:
- Solar Panels — “Power Your Home and Reduce Your Electricity Bill”
- Powerwall — “Keep Your Lights On During Outages”
- Megapack — utility-scale energy support messaging
- Solar Roof — “Generate Clean Energy With Your Roof”
- CTAs: Order Now + Learn More

### Persistent Chat Bar
- Fixed to viewport bottom, white, 1px Cloud Gray top border
- “Ask a Question” + input placeholder examples: **“What’s Pet Mode?”**, **“Compare Model 3 and Model Y”**
- Send control + **Schedule a Drive Today** secondary action

### Footer
- White, minimal text row: Tesla © year · Privacy & Legal · Vehicle Recalls · Contact · News · Get Updates · Locations · Learn
- Fine print: “Price and feature availability subject to change.”
- No social icon row, no heavy branding

---

## 5. Layout Principles

### Spacing
- Base unit: **8px**
- Common: 4, 8, 16, 24, 32
- Button outer padding: 4px; nav item: 4px 16px
- Sections: full viewport height; content centered

### Structure (homepage top → bottom)
1. Sticky Navigation  
2. Introducing Model Y L Premium (Three Rows, Six Seats)  
3. Model 3 (0.99% APR Available)  
4. Model Y (0% APR Available)  
5. Full Self-Driving (Supervised)  
6. Model Y L Premium detail (Starting at $61,990)  
7. Model 3 — Sport Sedan (Lease From $329/mo)  
8. Model Y — Midsize SUV (Lease From $459/mo)  
9. Cybertruck — Utility Truck (Lease From $949/mo)  
10. Current Offers  
11. Inventory  
12. Solar Panels · Powerwall · Megapack · Solar Roof  
13. Footer + Ask a Question bar  

### Whitespace Philosophy
Each scroll stop is a gallery wall: one car, one name, one CTA pair. Empty space is the luxury frame.

### Border Radius
| Value | Use |
|-------|-----|
| 0px | Default |
| 4px | Buttons, nav chips |
| ~12px | Large photo cards (if used) |
| 50% | Dots (legacy carousel patterns only) |

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow, no border | Default |
| Sticky layer | z-index only | Nav above heroes |
| Fixed layer | z-index + top border | Chat bar |
| Overlay | semi-opaque scrim | Region/cookie modals |

**No box-shadows** on primary marketing chrome. Photography provides depth.

---

## 7. Do’s and Don’ts

### Do
- Match live tesla.com copy for models, APR/lease lines, FSD price, and section order when building a faithful clone
- Use Electric Blue only for primary CTAs and promo lines
- One message per full-viewport section
- Weights 400–500 only; 4px button radius; 0.33s transitions
- White secondary CTAs on hero photography for contrast

### Don’t
- Default to a top carousel as the “current” homepage pattern (stacked heroes are the 2026 pattern)
- Invent extra accent colors, gradients, or card shadows
- Use uppercase UI labels (except TESLA wordmark)
- Put Pewter “Learn More” on dark heroes (unreadable)
- Clutter a section with more than two primary actions

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile &lt;768px | Hamburger nav; CTAs may stack; single-column sections |
| Tablet 768–1024px | Condensed nav; side-by-side CTAs where space allows |
| Desktop ≥1024px | Full center nav labels; vehicle mega-grid; 40px heroes |

Touch targets: primary CTAs ≥40px height; icons ~20–24px with padding.

---

## 9. Current Content Reference (tesla.com US)

Keep these strings in sync when refreshing the clone:

| Element | Live copy / value |
|---------|-------------------|
| FSD title | Full Self-Driving (Supervised) |
| FSD subtitle | Makes every drive easier. Subscribe for $99/mo. |
| FSD stat 1 | 7x Fewer Collisions |
| FSD miles | 11,974,619,551 *(update periodically)* |
| Model Y L intro | Introducing Model Y L Premium · Three Rows, Six Seats |
| Model Y L price | Starting at $61,990 |
| Model 3 finance | 0.99% APR Available |
| Model Y finance | 0% APR Available |
| Model 3 lease | Lease From $329/mo |
| Model Y lease | Lease From $459/mo |
| Cybertruck lease | Lease From $949/mo |
| Offers | Current Offers · Explore limited-time offers on Tesla vehicles. |
| Inventory | Find nearby vehicles available for immediate delivery. |
| Chat placeholders | What’s Pet Mode? · Compare Model 3 and Model Y |
| Nav vehicles | Model S · Model 3 · Model Y · Model X · Cybertruck |

Offers and APR terms change frequently — always re-check [tesla.com](https://www.tesla.com) and [Current Offers](https://www.tesla.com/current-offers) before shipping.

---

## 10. Agent Prompt Guide

### Quick colors
- Primary CTA / promo: Electric Blue `#3E6AE1`
- Background: Pure White `#FFFFFF`
- Headings: Carbon Dark `#171A20`
- Body: Graphite `#393C41`
- Tertiary on light: Pewter `#5C5E62`
- Hero secondary CTA text: white

### Example prompts
- “Full-viewport Model 3 hero: white title, Electric Blue ‘0.99% APR Available’, Order Now + Learn More”
- “FSD section: $99/mo, 7x Fewer Collisions, 11,974,619,551 Miles Driven, Schedule Demo + Learn More”
- “Sticky white nav: TESLA wordmark, Vehicles/Energy/Charging/Discover/Shop, help/globe/account icons, vehicles mega-menu”
- “Fixed bottom Ask a Question bar with placeholder ‘What’s Pet Mode?’ and Schedule a Drive Today”

### Iteration
1. Change one component at a time  
2. Prefer live tesla.com copy over invented marketing lines  
3. Photography does the emotion — if UI feels “designed,” remove chrome  
4. Re-verify FSD miles and finance promos when re-syncing  
