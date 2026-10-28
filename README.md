# Ticket Selection Interface

**Live demo:** <https://krish-39.github.io/ticket-selection-interface/>

A redesigned ticket-machine flow for Berlin public transport (BVG-style), built from a Figma design in React and TypeScript. It walks a rider through choosing a fare zone, a ticket type, checkout and payment, including the screens a real machine usually gets wrong: payment failures and network errors.

[Figma design](https://www.figma.com/design/XgpFAaT42aiy1gVlwKp0CG/Design-Ticket-Selection-Interface)

## The flow

1. **Fare zone** (AB, BC or ABC) with a zone map pop-up
2. **Ticket type**: single, day, 7-day or monthly
3. **Checkout** summary
4. **Payment** method
5. **Success**, or a **payment error** / **network error** screen with a way back

Every screen keeps the same fixed 4:3 kiosk layout, so nothing jumps when you move between steps (see `TODO.md` for how that was fixed).

## Run locally

Prerequisites: Node.js 20+ and npm.

```bash
npm ci
npm run dev        # http://localhost:3000/ticket-selection-interface/
npm run typecheck
npm run build      # writes the site to docs/
```

## Deploying

GitHub Pages serves the `docs/` folder of the main branch. `npm run build` writes there directly (`vite.config.ts` sets `outDir: 'docs'` and the `/ticket-selection-interface/` base path), so deploying is: build, commit `docs/`, push.

## Tech stack

React 18, TypeScript, Vite, Tailwind CSS (precompiled in `src/index.css`), lucide-react icons.

## License

[MIT](LICENSE)
