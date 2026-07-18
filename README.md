# tesla-design

React + TypeScript + Vite app that clones the **tesla.com** marketing experience (UI demo).

Full project documentation: see the [root README](../README.md).

## Run

```bash
npm install
npm run dev
```

```bash
npm run build    # production build
npm run preview  # preview dist/
```

## Docs

- [DESIGN-tesla.md](./docs/DESIGN-tesla.md) — design system
- [PROMPT-tesla.md](./docs/PROMPT-tesla.md) — AI UI prompts

## Entry points

- `src/App.tsx` — shell + providers
- `src/data/navCatalog.ts` — products & menus
- `src/data/vehicleDetails.ts` — vehicle landing content (Model S, etc.)
