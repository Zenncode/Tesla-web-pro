# Tesla-Inspired UI Prompts

A collection of system-level and component-level prompts for AI coding tools to generate UI in Tesla’s design language. Based on current [tesla.com](https://www.tesla.com) (US homepage, mid‑2026).

**Implementation project:** `tesla-design/` — the only app in this workspace.

---

## System Prompt

```
You are a UI engineer implementing Tesla's design system (tesla.com, 2026). Your output must follow these rules:

COLOR
- Only ONE chromatic color exists: Electric Blue (#3E6AE1) — primary CTA buttons AND promotional/incentive text
- Background: Pure White (#FFFFFF)
- Text hierarchy: Carbon Dark (#171A20) headings, Graphite (#393C41) body, Pewter (#5C5E62) tertiary links on light surfaces
- Surface variant: Light Ash (#F4F4F4)
- Placeholder: Silver Fog (#8E8E8E)
- Dividers: Cloud Gray (#EEEEEE)
- On full-bleed hero photography: secondary links ("Learn More") are WHITE for contrast — not Pewter
- Never use decorative gradients, shadows, patterns, or extra accent colors

TYPOGRAPHY
- Font family: Universal Sans Display (hero titles ~40px), Universal Sans Text (everything else)
- Fallback: Inter, -apple-system, Arial, sans-serif
- Only two weights: 500 (UI/headings), 400 (body)
- Hero titles: 40px, weight 500, white
- Vehicle model name in nav cards: 17px, weight 500, Carbon Dark
- Navigation / buttons / body: 14px
- Promo/incentive text: 14px, weight 500, Electric Blue (#3E6AE1)
- Category labels: ~16px, weight 500, white
- Footer: 12px, Pewter
- Normal letter-spacing everywhere — no negative tracking
- Never use uppercase text transforms (TESLA wordmark is the only uppercase element)
- Never use bold (700) or light (300)

SPACING
- Base unit: 8px
- Common values: 4px, 8px, 16px, 24px, 32px
- Sections are full viewport height (100svh)
- Button padding: 4px outer with flexbox centering
- Nav item padding: 4px 16px
- Sticky nav height: ~56px

BORDER RADIUS
- Buttons and interactive controls: 4px
- Cards/section photo cards: ~12px when used
- Sharp corners (0px) everywhere else
- Never use pill-shaped buttons

ELEVATION
- No box-shadows on primary chrome
- No borders on hero cards
- Depth via z-index, photography, and color contrast only
- Navigation: solid Pure White (not frosted glass)
- Chat bar: fixed bottom, white, 1px Cloud Gray top border

TRANSITIONS
- Universal timing: 0.33s cubic-bezier(0.5, 0, 0, 0.75)
- Interactions are color-only (background, border, text)
- No scale/translate hover animations

LAYOUT
- Stacked full-viewport heroes — NOT a top carousel as the primary pattern
- One model/product per screen, one message at a time
- Content inside heroes centered horizontally and vertically
- CTA pair: "Order Now" (primary blue button) + "Learn More" (text link)
- At most two action buttons per screen
- Incentive/promo text in Electric Blue under the model name when applicable
- Whitespace is a luxury signal — never fill empty space

PHOTOGRAPHY
- Full-viewport cinematic imagery
- Edge-to-edge, no padding inside hero sections
- No decorative brand gradients over images (light scrim only if needed for type)
- White text on heroes; Electric Blue for promos

CURRENT TESLA.COM CONTENT (keep in sync)
- Model Y L Premium intro: "Introducing Model Y L Premium" / "Three Rows, Six Seats"
- Model Y L detail: "Starting at $61,990"
- Model 3: "0.99% APR Available" and "Lease From $329/mo"
- Model Y: "0% APR Available" and "Lease From $459/mo"
- Cybertruck: "Lease From $949/mo"
- FSD: "Full Self-Driving (Supervised)" / "Makes every drive easier. Subscribe for $99/mo."
- FSD stats: "7x" Fewer Collisions · "11,974,619,551" Miles Driven
- Current Offers: "Explore limited-time offers on Tesla vehicles."
- Inventory: "Find nearby vehicles available for immediate delivery." · New · Pre-Owned
- Chat placeholders: "What's Pet Mode?" / "Compare Model 3 and Model Y"
- Nav vehicles: Model S, Model 3, Model Y, Model X, Cybertruck
```

---

## Component Prompts

### Navigation Bar

```
Design a sticky navigation bar matching tesla.com:
- Uppercase spaced-letter "TESLA" wordmark (letter-spacing ~0.15em) on the left
- Five center labels: Vehicles, Energy, Charging, Discover, Shop (14px/500, Carbon Dark)
- Three icon links on the right: Help, Globe (language), Account
- Background: Pure White (#FFFFFF), no shadow, no border
- Height: ~56px
- Vehicles opens a full-width white mega-dropdown:
  - Grid of Model S, Model 3, Model Y, Model X, Cybertruck
  - Each card: vehicle image + name (17px/500) + "Learn" | "Order" (Pewter)
  - Sidebar links: Inventory, Used Inventory, Demo Drive, Trade-in, Compare, Help Me Choose, Fleet, Semi, Roadster
- Other dropdowns list Energy (Solar Panels, Solar Roof, Powerwall, Megapack), Charging, Discover, Shop items similarly
```

### Hero Section (Vehicle)

```
Create a full-viewport hero section (100svh) for a vehicle with:
- Edge-to-edge cinematic background image
- Content vertically and horizontally centered:
  - Category label (optional): "Sport Sedan", "Midsize SUV", "Utility Truck", "Long Wheelbase Midsize SUV" — ~16px weight 500 white
  - Model name / headline: 40px weight 500 white (e.g. "Introducing Model Y L Premium", "Model 3", "Model Y", "Cybertruck")
  - Incentive/promo (optional): "0.99% APR Available", "0% APR Available", "Lease From $329/mo", "Lease From $459/mo", "Lease From $949/mo" — 14px weight 500 Electric Blue (#3E6AE1)
  - Subtitle (optional): "Three Rows, Six Seats", "Starting at $61,990" — 14px weight 400 white
  - CTA pair with 16px gap:
    - Primary "Order Now": Electric Blue bg, white text, 14px/500, 4px radius, min-height 40px, ~180–200px wide
    - Secondary "Learn More": no background, white text on hero imagery, 14px/500
- Each vehicle is its own full-viewport block stacked vertically
```

### FSD Section

```
Create a full-viewport section for Full Self-Driving matching tesla.com:
- Dark / cinematic driving background
- Centered content:
  - Title: "Full Self-Driving (Supervised)" — 40px weight 500 white
  - Subtitle: "Makes every drive easier. Subscribe for $99/mo." — 14px white
  - Two stats side by side:
    - "7x" with "Fewer Collisions"
    - "11,974,619,551" with "Miles Driven"
  - "Schedule Demo" and "Learn More" as white text links below
- Numbers only — no decorative chart chrome
```

### Energy Section

```
Create a full-viewport energy product section:
- Edge-to-edge product photography
- Product name 40px/500 white
- Taglines (examples from Tesla energy):
  - Solar Panels: "Power Your Home and Reduce Your Electricity Bill"
  - Powerwall: "Keep Your Lights On During Outages"
  - Megapack: massive battery / grid support messaging
  - Solar Roof: "Generate Clean Energy With Your Roof"
- "Order Now" primary + "Learn More" white secondary
```

### Current Offers Card

```
Design a promotional full-viewport section:
- "Current Offers" heading ~40px/500 white
- Description: "Explore limited-time offers on Tesla vehicles."
- "Learn More" white text link
```

### Inventory Card

```
Design an inventory full-viewport section:
- "Inventory" heading ~40px/500 white
- Description: "Find nearby vehicles available for immediate delivery."
- Two white text links: "New" · "Pre-Owned"
```

### Ask a Question (Chat) Bar

```
Design a fixed bottom bar matching tesla.com:
- White background, 1px #EEEEEE top border
- "Ask a Question" label + text input
- Placeholder examples: "What's Pet Mode?" or "Compare Model 3 and Model Y"
- Send control
- "Schedule a Drive Today" secondary action on the right
- Visible on all homepage sections; page content has bottom padding so footer is not obscured
```

### Text Link

```
Style text links by context:
- On light surfaces: 14px/400–500 Pewter (#5C5E62), no underline at rest
- On hero photography: 14px/500 white
- Used for: Learn More, Schedule Demo, New, Pre-Owned, dropdown Learn/Order
- Primary purchase CTAs use the Electric Blue button, not a text link
```

### Footer

```
Design a minimal footer matching tesla.com:
- Background: Pure White
- Links row (12px Pewter): Tesla © 2026, Privacy & Legal, Vehicle Recalls, Contact, News, Get Updates, Locations, Learn
- Fine print: "Price and feature availability subject to change."
- No social icons, no heavy brand block
```

---

## Page-Level Prompt

### Full Homepage

```
Generate a complete Tesla-style homepage (Atomic Design) matching current tesla.com:

PAGE STRUCTURE (top to bottom):
1. Sticky Navigation (white; wordmark | Vehicles Energy Charging Discover Shop | icons)
2. Introducing Model Y L Premium — subtitle "Three Rows, Six Seats"
3. Model 3 — promo "0.99% APR Available"
4. Model Y — promo "0% APR Available"
5. Full Self-Driving (Supervised) — $99/mo, 7x, 11,974,619,551 miles
6. Model Y L Premium detail — category Long Wheelbase Midsize SUV, "Starting at $61,990"
7. Model 3 detail — Sport Sedan, "Lease From $329/mo"
8. Model Y detail — Midsize SUV, "Lease From $459/mo"
9. Cybertruck — Utility Truck, "Lease From $949/mo"
10. Current Offers
11. Inventory (New / Pre-Owned)
12. Solar Panels
13. Powerwall
14. Megapack
15. Solar Roof
16. Footer
17. Fixed Ask a Question chat bar

ATOMS:
1. Button — primary (Electric Blue) + secondary solid white + text link variants
2. Text — roles: hero-title, product-name, nav, body, promo (Electric Blue), category, footer
3. Icon — help, globe, account, chevron, chat, send

MOLECULES:
4. CTAButtonGroup — Order Now + Learn More
5. VehicleCard — image + name + Learn/Order
6. HeroContent — category, title, promo, subtitle, CTAs

ORGANISMS:
7. Navigation — sticky bar + mega-dropdowns
8. VehicleHero — 100svh + HeroContent
9. FSDHero — stats + CTAs
10. EnergyHero — product + CTA
11. OffersSection — Current Offers / Inventory
12. Footer
13. ChatBar — Ask a Question + Schedule a Drive Today

TEMPLATE:
14. HomeTemplate — nav + stacked sections + footer + chatBar

PAGE:
15. Home — wires live-aligned copy and images into HomeTemplate
```

---

## Quick Reference

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Electric Blue | `#3E6AE1` | Primary button, promo/incentive text |
| Pure White | `#FFFFFF` | Backgrounds, nav, secondary on light, hero secondary text |
| Light Ash | `#F4F4F4` | Alternate surface |
| Carbon Dark | `#171A20` | Titles on light, nav text |
| Graphite | `#393C41` | Body text |
| Pewter | `#5C5E62` | Links on light surfaces, footer |
| Silver Fog | `#8E8E8E` | Placeholder, fine print |
| Cloud Gray | `#EEEEEE` | Dividers |

### Typography
| Role | Size | Weight | Family |
|------|------|--------|--------|
| Hero Title | 40px | 500 | Universal Sans Display |
| Product Name | 17px | 500 | Universal Sans Text |
| Nav / Button | 14px | 500 | Universal Sans Text |
| Body | 14px | 400 | Universal Sans Text |
| Promo Text | 14px | 500 | Universal Sans Text (Electric Blue) |
| Category | 16px | 500 | Universal Sans Text |
| Footer | 12px | 400 | Universal Sans Text |

### Spacing
`4px` `8px` `16px` `24px` `32px` (8px base)

### Radius
`0` · `4px` (buttons) · `12px` (cards) · `50%` (dots only if needed)

### Live content checklist
| Item | Value |
|------|--------|
| FSD monthly | $99/mo |
| FSD collisions | 7x Fewer Collisions |
| FSD miles | 11,974,619,551 |
| Model Y L start | $61,990 |
| Model 3 APR | 0.99% APR Available |
| Model Y APR | 0% APR Available |
| Model 3 lease | $329/mo |
| Model Y lease | $459/mo |
| Cybertruck lease | $949/mo |

---

## Iteration Rules

1. Change one component at a time — Tesla minimalism means every pixel matters  
2. Reference specific hex codes — only ~7 unique colors  
3. Prefer **live tesla.com copy** over invented slogans when cloning the homepage  
4. Photography carries emotion — if UI feels “designed,” simplify  
5. No shadows, no decorative gradients, no borders on heroes  
6. Only Electric Blue as chromatic accent  
7. Same 0.33s transition timing on interactive elements  
8. 4px border-radius on all buttons  
9. No uppercase text except the TESLA wordmark  
10. Stacked full-viewport sections — do not default to a carousel homepage  
11. Re-check FSD miles and finance promos on tesla.com / current-offers before each refresh  
