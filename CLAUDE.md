# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static portfolio site for Par Hill Research, hosted on GitHub Pages. Content is written in Markdown, compiled to a single `index.html` by Pandoc via GitHub Actions on every push to `main`.

**No Jekyll. No build tools needed locally.**

## How it works

```
content.md  ──Pandoc──▶  _site/index.html  ──GitHub Actions──▶  live site
template.html ─────────────────────────────────────────────────────────────^
```

- `content.md` — all site content (project names and descriptions)
- `template.html` — HTML shell with embedded CSS; uses Pandoc template variables (`$title$`, `$body$`)
- `.github/workflows/build.yml` — installs Pandoc, runs the build, deploys via `actions/deploy-pages`

## Editing content

All content lives in `content.md`. Structure:

```markdown
---
title: Par Hill Research        ← appears in <title> and sticky header
---

# Page heading

Intro paragraph.

---                             ← <hr> rendered as a visual divider

## Project Title                ← each project is an h2
One or two sentence description.
```

Push to `main` — GitHub Actions builds and deploys automatically.

## Local preview

Install Pandoc, then:

```bash
pandoc content.md --standalone --template template.html --output index.html
open index.html
```

## Styling

All CSS is embedded in `template.html`. Key variables at the top of the `<style>` block:

```css
--bg       background colour
--surface  header/card surface
--text     primary text
--muted    secondary text (descriptions, subtitle)
--border   divider and card border colour
--max-w    content column width (default 680px)
```

Each project renders as `h2` + `p`. The last project's bottom border is suppressed with `h2:last-of-type ~ p`.

## One-time GitHub setup

For a new repo, set the Pages source to **GitHub Actions**:
`Settings → Pages → Source → GitHub Actions`
