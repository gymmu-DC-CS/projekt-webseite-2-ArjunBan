---
name: "Add non-disruptive hero image"
description: "Given an existing page section, insert a secondary image into the hero area without disturbing current visual elements and update CSS accordingly. Useful for small site tweaks and UX demos."
---

## Inputs
- `imageUrl`: URL of the image to insert.
- `sectionId`: target section/element id or class for placement (`hero`, `about`, etc.).
- `layoutPreference`: `overlay`, `side`, or `background`.

## Task
1. Inspect `index.html` and `style.css`.
2. Add the image markup into the chosen section (default: `#home .hero-graphic`).
3. Add minimal CSS rules to keep existing elements stable.
4. Avoid large layout shifts and preserve previous responsive behavior.

## Output
- `index.html` patch snippet
- `style.css` patch snippet
- Testing note (how to verify application)
