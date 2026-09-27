# Captain Factories — website

Angular 21 (standalone components, signals, zoneless) + Tailwind CSS v4.
All content is **dummy data** — edit `src/app/core/data.ts` to replace it.

## Run it

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build in dist/captain-factories
```

Requires Node 20.19+ or 22.12+.

## Pages

| Route               | Page                                                 |
| ------------------- | ---------------------------------------------------- |
| `/`                 | Home: hero, stats, factory tabs, clients, process, news |
| `/factories`        | All five factories                                   |
| `/factories/:slug`  | Factory detail with lines, certifications, products  |
| `/products`         | Filterable catalogue (category, white label, search) |
| `/about`            | Values, milestones, leadership                       |
| `/news`             | Articles with category filter                        |
| `/contact`          | Quote request form (prefills from `?email=`, `?factory=`, `?product=`) |

## Structure

```
public/                 logo.png (transparent), favicon.png
src/styles.css          design tokens (@theme) + utilities (btn-primary, card, field, tag…)
src/app/core/data.ts    ALL dummy content — factories, products, articles, contact details
src/app/core/models.ts  TypeScript interfaces
src/app/layout/         announcement bar, header (mega-menu + mobile), footer
src/app/shared/         icon set, logo, section heading, image placeholder tile
src/app/pages/          one folder per route (lazy-loaded)
```

## Design system

Follows the supplied style reference: white canvas, Fog (`#f3f3f7`) section bands,
hairline Mist borders, 12px radii, no card shadows, Inter with tight tracking, a wide
display face for hero headlines (Archivo at 112% width, standing in for Flecha), a Carbon
announcement bar and an Abyss footer. A single accent — Ember `#ff5900` — is used for
primary actions only.

**Want the accent in the logo gold instead?** Change `--color-ember` / `--color-ember-deep`
in `src/styles.css` to `#ffd700` / `#f2c200` and switch `text-paper` to `text-ink` in the
`btn-primary` and `btn-primary-lg` utilities, because white text on gold is hard to read.

## Replacing placeholders

- **Images** — `app-visual-tile` draws a grid-pattern panel with a line icon wherever a photo
  should go. Swap it for `<img class="rounded-card aspect-video object-cover">` once you have
  real photography.
- **Contact form** — `submit()` in `pages/contact/contact.ts` only shows a confirmation. Wire it
  to your API or email service.
