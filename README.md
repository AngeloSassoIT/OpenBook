# OpenBook — marketing website

Static, multilingual (EN · IT · ES · FR · DE) marketing site for **OpenBook**.
No build step, no framework, no tracking. Upload the contents of this folder to any
static host (e.g. **GitHub Pages**).

## Files
- `index.html` — landing page (hero, features, how-it-works, screenshots, CTA).
- `support.html` — support page + FAQ.
- `privacy.html` — privacy policy (mirrors `AppStore/privacy-policy/*.md`).
- `style.css` — the paper/bronze design system.
- `lang.js` — language auto-detect + toggle (persists choice in localStorage).
- `images/` — app icon + 6 device screenshots.
- `.nojekyll` — tells GitHub Pages to serve files as-is.

## Language
Each page ships all five languages inline; `lang.js` shows the one matching the
visitor (URL `?lang=xx` → saved choice → browser language → English). Works
without JavaScript too: it falls back to English. The header has an EN/IT/ES/FR/DE
toggle.

## Publish on GitHub Pages (manual)
1. Create a repository and upload the contents of this `website/` folder to it.
2. In the repo: **Settings → Pages → Deploy from a branch** (e.g. `main`, root).
3. Your site goes live at `https://<username>.github.io/<repo>/`.
4. Put that base URL into the App Store metadata (`support_url`, `marketing_url`,
   `privacy_url`) — see `../AppStore/UPLOAD_GUIDE.md`.

The "App Store" buttons link to `#` — replace with the real App Store URL once the
app is live. Support/contact e-mail everywhere: **support@simplebuild.it**.
