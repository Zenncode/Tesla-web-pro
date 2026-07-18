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
| Energy (Solar, Roof, Powerwall, Megapack) | ✅ solar/energy imagery |
| Charging / Home Charging / Supercharging | ✅ charger imagery |
| Trip Planner | ✅ `#/trip` |
| Shop (charging, accessories, apparel, lifestyle) | ✅ `#/shop` |
| Discover (drive, insurance, military, stories…) | ✅ mega-menu |
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
| `#/shop` | Shop |
| `#/compare` | Compare models |
| `#/inventory` · `#/inventory/used` | Inventory |
| `#/trade-in` | Trade-in estimate |
| `#/design/model-3` | Design studio |
| `#/offers` | Current Offers |
| `#/trip` | Trip Planner |
| `#/product/:id` | Product / vehicle page |

---

## Project layout

```
TESLA/
├── README.md
└── tesla-design/          ← app
    ├── docs/
    │   ├── DESIGN-tesla.md
    │   └── PROMPT-tesla.md
    └── src/
        ├── app/           ← NavContext, ToastContext
        ├── data/          ← navCatalog, vehicleDetails
        ├── components/    ← atoms → pages
        └── styles/
```

---

## Tech

React 19 · TypeScript · Vite 8 · CSS design tokens  

---

## License

Personal / educational use. Tesla marks and product imagery are trademarks of Tesla, Inc.
