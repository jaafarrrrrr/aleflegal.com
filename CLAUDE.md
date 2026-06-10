# Project notes for Claude

## Writing style (always)
- **Never use em-dashes** (the `—` character or `&mdash;`) anywhere — not in site copy, code, comments, commit messages, or chat. Use commas, periods, colons, parentheses, or "to" for ranges instead. En-dashes/hyphens for ranges are fine.

## Site structure
- Static site on GitHub Pages (custom domain alef.legal via CNAME, Jekyll default).
- Shared CSS/JS in `assets/shared.css` and `assets/app.js`; pages link them with root-relative paths (`/assets/...`).
- Pages: `/` (index.html), `/compliance/` (compliance/index.html), `/legal/` (legal/index.html), `/the-brief.html`.
- Internal research lives in `_research/` (Jekyll ignores `_`-folders, so it is not published).
