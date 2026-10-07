# www.leftjoinstudio.com

The company site for Left Join Studio, Inc. Astro and Tailwind, built to static files and
published to GitHub Pages by `.github/workflows/static.yml` on a push to `main`.

`/jesse` isn't in this repo. It's its own Worker on a route under the same domain (see the
`ljs` branch of `cf-rumble`), so don't add a page at that path.

## // RUN_IT

```sh
npm ci
npm run dev       # http://localhost:4321
npm run build     # writes dist/
npm run preview   # serves dist/
```

## // WHERE_THINGS_LIVE

| Path | What |
|---|---|
| `src/data/products.ts` | Every product, and `SHOWN`, which picks the tiers the site lists. Jesse leads. |
| `src/data/company.ts` | Address, phone, client work by industry, the engagement steps, and the buyer's questions with their answers. |
| `src/components/sections/` | Sections shared across pages: the questions grid, the orange call-to-action band, the example call summary. |
| `src/style/tailwind.css` | The design system: `.eyebrow`, `.cta`, `.rule-grid`, `.terminal`, and so on. |
| `src/content/*.md` | Posts. A file under `drafts/` only shows in dev. |

## // RULES_FOR_COPY

- Every claim on the site has to be true today. No invented customers, logos, quotes or numbers.
  Client work is described by industry, because the names are under NDA.
- The questions in `company.ts` are the objections a buyer has about a small studio they just
  met. Answer them plainly. Don't hide the size of the company; say why it works in their favor.
- Plain English first. A contractor reading on a phone at a trade show is the audience, so
  the terminal styling is trim, and the sentences aren't written for developers.

## // LOOK

Follows the Left Join Studio identity: square corners, Signal Orange `#E85D00` as the only
accent, `// CAPS_WITH_UNDERSCORES` section labels (the `.eyebrow` class adds the slashes), Inter
for words and JetBrains Mono for data. No gradients and no rounded cards. Buttons put dark ink
on orange, because white on that orange fails contrast at button size.

## Thanks to `Daisy Blog`

The site started from https://github.com/saadeghi/daisy-blog.
