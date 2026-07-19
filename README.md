# Tesla Website Clone

A **Tesla.com-inspired** marketing site built with React, TypeScript, and Vite.  
Inspired by [tesla.com](https://www.tesla.com).

> **Disclaimer:** Educational / portfolio UI demo — **not** affiliated with Tesla, Inc.  
> Orders, trade-ins, and account flows are simulated.

---

## Quick start

```bash
cd tesla-design
npm install
npm run dev
```

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview `dist/` |

---

## Feature parity with tesla.com (demo)

| Tesla.com area | In this project |
|----------------|-----------------|
| Vehicles mega-menu (S/3/Y/X/Cybertruck) | ✅ + images + Learn/Order |
| Inventory / Used Inventory | ✅ `#/inventory` · `#/inventory/used` |
| Demo Drive | ✅ product page |
| Trade-in / Get an Estimate | ✅ `#/trade-in` |
| Compare / Help Me Choose | ✅ `#/compare` |
| Fleet / Semi / Roadster / Robotaxi | ✅ product pages |
| FSD (Supervised) | ✅ homepage + product |
| Current Offers | ✅ `#/offers` |
| Design Your Tesla | ✅ `#/design/:id` |
| Energy (Solar, Roof, Powerwall, Megapack) | ✅ full landings + homepage heroes |
| Charging / Home Charging / Supercharging | ✅ full landings + homepage heroes |
| Trip Planner | ✅ `#/trip` |
| Shop (charging, accessories, apparel, lifestyle) | ✅ `#/shop` hub + full category pages |
| Discover (drive, insurance, military, stories…) | ✅ `#/discover` hub + full pages |
| Help / Region / Account icons | ✅ panels |
| Ask a Question + Schedule a Drive bar | ✅ |
| Full Model S-style vehicle landing | ✅ stats, interior, specs… |
| Multi-column footer | ✅ |

**Not included (real Tesla backend):** live Supercharger map API, real checkout, real auth, live inventory, region pricing CMS, Universal Sans font files.

---

## Routes (hash SPA)

| Hash | View |
|------|------|
| `#/` | Home |
| `#/shop` | Shop hub |
| `#/discover` | Discover hub |
| `#/energy` | Energy hub |
| `#/charging` | Charging hub |
| `#/compare` | Compare models |
| `#/inventory` · `#/inventory/used` | Inventory |
| `#/trade-in` | Trade-in estimate |
| `#/design/model-3` | Design studio |
| `#/offers` | Current Offers |
| `#/trip` | Trip Planner |
| `#/product/:id` | Product / vehicle full landing |

---

## Project layout

```
src/
├── app/                 # NavProvider, ToastProvider
├── assets/              # image URLs
├── components/
│   ├── atoms/           # Button, Icon, Input, Logo, Text
│   ├── molecules/       # cards, CTAs, nav item
│   ├── organisms/       # Navigation, Footer, heroes, ChatBar
│   │   └── navigation/  # navConfig, useNavUi
│   ├── pages/           # route-level screens
│   ├── shared/          # PageShell, HeroBanner, landing sections
│   └── templates/
├── data/
│   ├── types.ts         # shared content types
│   ├── landing.ts       # vehicle/product → LandingDetail
│   ├── navCatalog.ts
│   ├── vehicleDetails.ts
│   └── productDetails.ts
├── hooks/               # useAction
├── lib/                 # HUB_ROUTES, shared constants
└── styles/              # tokens + global CSS
```

### Architecture notes

- **Routing:** hash SPA via `NavContext` (`#/product/:id`, hubs, tools).
- **Landings:** `getLandingDetail(id)` normalizes vehicle + product data; `DetailLandingPage` renders both.
- **Hubs:** Energy / Charging / Discover / Shop share `HeroBanner` + `ProductGrid`.
- **UI shell:** `PageShell`, `BackLink`, `Section` cut repeated page chrome.
- **Styles:** design tokens in `tokens.css`; layout utilities in `global.css` (prefer classes over long inline styles).


---

## Tech

React 19 · TypeScript · Vite 8 · CSS design tokens  

---

## License

Personal / educational use. Tesla marks and product imagery are trademarks of Tesla, Inc.
