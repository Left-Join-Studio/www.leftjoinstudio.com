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
| `src/style/tailwind.css` | The design system: `.eyebrow`, `.cta`, `.panel`, `.panel-grid`, `.chip`, and so on. |
| `src/content/*.md` | Posts. A file under `drafts/` only shows in dev. |
| `src/pages/thanks.astro` | Where the contact form lands after sending. Web3Forms redirects there; it's kept out of the sitemap. |

## // RULES_FOR_COPY

- Every claim on the site has to be true today. No invented customers, logos, quotes or numbers.
  Client work is described by industry, because the names are under NDA.
- The questions in `company.ts` are the objections a buyer has about a small studio they just
  met. Answer them plainly. Don't hide the size of the company; say why it works in their favor.
- Plain English first. A contractor reading on a phone at a trade show is the audience, so
  the sentences aren't written for developers. Explain a technical word the first time, or
  leave it out.

## // CHECK_IT_ON_A_PHONE

Trade-show visitors open the site on a phone, so load every page at 320, 360 and 390px wide
before shipping. `document.documentElement.scrollWidth` has to equal `clientWidth` on each one.
The usual cause of a sideways scroll is a grid item holding one long unbroken line;
`tailwind.css` sets `min-width: 0` on grid children for that reason.

## // LOOK

Light, warm and plain-spoken. The people reading this site run small businesses, and it has to
tell them we're here for them, so it doesn't look like a developer tool.

- Cream and white surfaces, Signal Orange `#E85D00` as the only accent, and a warm near-black
  for the footer. No gradients.
- Plus Jakarta Sans for headings, Inter for everything else. No monospace type anywhere.
- Section labels are ordinary words in sentence case ("What we build").
- Cards have soft corners (18px) and a quiet shadow; buttons and fields are 10px.
- Buttons put dark ink on orange, because white on that orange fails contrast at button size.

This overrides the usual Left Join Studio identity on purpose. The terminal vocabulary (square
corners, `// CAPS_WITH_UNDERSCORES` labels, the `$` prompt, JetBrains Mono, code windows) read
as niche and nerdy to a small-business owner, so none of it belongs on this site. Don't bring
it back, and don't put a single colored edge on a rounded card.

`tailwind.css` names its own classes `.panel` and `.note` because daisyUI already owns `.card`
and `.label`.

## Thanks to `Daisy Blog`

The site started from https://github.com/saadeghi/daisy-blog.
