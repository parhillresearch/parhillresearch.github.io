# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page scrolling portfolio for Parliament Hill Research (trading name; Ltd company is Par Hill Research Ltd, no. 15477427), hosted on GitHub Pages. Content is written in Markdown, compiled to a single `index.html` by Pandoc via GitHub Actions on every push to `main`.

**No Jekyll. No build tools needed locally.**

## How it works

```
content.md  ──Pandoc──▶  _site/index.html  ──GitHub Actions──▶  live site
template.html ─────────────────────────────────────────────────────────────^
maps/         ── copied as-is ──────────────────────────────────────────────^
assets/       ── copied as-is ──────────────────────────────────────────────^
```

- `content.md` — all site content; edit this to update the site
- `template.html` — HTML shell with embedded CSS; Pandoc variables `$title$` and `$body$`
- `.github/workflows/build.yml` — installs Pandoc, builds with `--section-divs`, copies `maps/` and `assets/`, deploys via `actions/deploy-pages`
- `assets/tree.jpg` — company logo (converted from JP2), displayed in About section
- `maps/` — pre-built R-generated HTML files; linked from `content.md` as `[text](maps/filename.html)`

## Content structure

```markdown
---
title: Parliament Hill Research | ...    ← <title> tag and sticky nav text
---

## About                                 ← nav anchor #about
![alt](assets/tree.jpg)                  ← logo, floats right on desktop
Intro paragraph.

## Portfolio                             ← nav anchor #portfolio

### Project Title (YYYY)                 ← each project is an h3

<span class="tag tag-science">Emissions science</span>   ← tags line

Description text.

## Contact                               ← nav anchor #contact
```

`--section-divs` wraps each `##` and `###` in a `<section>` element, giving anchor IDs and enabling CSS targeting.

## Tags

Eight capability tags are defined in `template.html`. Add any combination between the `###` heading and the description paragraph:

| Tag class | Label | Colour |
|---|---|---|
| `tag-science` | Emissions science | Teal |
| `tag-policy` | Policy & planning | Blue |
| `tag-analytics` | Data analytics | Purple |
| `tag-engagement` | Political engagement | Amber |
| `tag-advisory` | Expert advisory | Slate |
| `tag-planning` | Planning & development | Green |
| `tag-tools` | Data & tools | Violet |
| `tag-ai` | AI applications | Indigo |

## Local preview

Install Pandoc, then:

```bash
pandoc content.md --standalone --template template.html --section-divs --output index.html
open index.html
```

## Styling

All CSS is embedded in `template.html`. Key variables:

```css
--bg         page background (#f8f9fa)
--text       primary text
--muted      secondary text
--accent     brand blue (#1d4ed8) — also used for tag colours and left borders
--border     dividers
--max-w      content column width (720px)
--nav-h      sticky nav height (3.5rem) — also used for scroll-margin-top offset
```

Key layout rules:
- `section section` — each portfolio project; left accent border, hover tint
- `section section > p:has(.tag)` — tags paragraph; no border, tight spacing
- `section section > p` — description paragraph; bottom border separator
- `#about > figure` — logo image; floats right on desktop, stacks on mobile

## Adding a new project

1. Add a `### Title (YYYY)` entry in `content.md` under `## Portfolio`
2. Add a tag line with one or more `<span class="tag tag-*">` elements
3. Write a 2–3 sentence description (outcome-first)
4. Push to `main`

## Adding an R map subpage

1. Copy the HTML file into `maps/`
2. Link from the relevant project description: `[link text](maps/filename.html)`
3. Push to `main` — the workflow copies `maps/` into the built site automatically

## One-time GitHub setup

`Settings → Pages → Source → GitHub Actions`
