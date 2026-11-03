# pharadornb.github.io

Personal resume site for Pharadorn Boonruam, built with [Astro](https://astro.build) and published on GitHub Pages.

Live: https://pharadornb.github.io/

## Stack

- Astro, static output, no UI framework
- Plain CSS (light and dark theme, print stylesheet)
- Icons inlined at build time: [Lucide](https://lucide.dev) (ISC) and [Feather](https://feathericons.com) (MIT)
- Fonts from Google Fonts: Sarabun, Chakra Petch, IBM Plex Mono

## Run locally

Requires Node.js 22.23.4 or newer (Astro 7).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve dist/ locally
```

## Editing content

All text lives in [`src/data/resume.en.json`](src/data/resume.en.json). Components only render it.

| Field | Used for |
|---|---|
| `experience[].start` / `end` | Position of the bar in the career timeline (`end: null` means present) |
| `experience[].points[].bold` | Phrases wrapped in bold inside a bullet |
| `skills[].items[].match` | Extra search terms so a skill can light up the bullets that mention it |
| `links.email` | Stored as `user` and `domain`, joined in the browser so the address is not plain text in the HTML |

Bullets and project descriptions longer than three lines are clamped with a "Show more" toggle. This is added by script, so the full text is still in the HTML and shows with JavaScript off or when printing.

The share image is [`public/og.png`](public/og.png) (1200 x 630). Replace the file to change it.

## Layout

```
src/
  data/resume.en.json     content
  layouts/Base.astro      head, meta, structured data, theme script
  pages/                  index and 404
  components/             Rail, Experience, Timeline, Skills, Projects, Education, Clamp, Icon
  lib/                    text formatting and skill-to-bullet matching
  styles/global.css       all styles
public/                   favicon, og image, robots.txt
```

## Deploy

`.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub Pages on every push to `main`.

In the repository settings, Pages > Build and deployment > Source must be set to **GitHub Actions**.

## Privacy choices

The page does not include a phone number, birth date or age, and it uses no third-party trackers or counters.
