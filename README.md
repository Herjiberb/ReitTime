# ReitTime

ReitTime is a free social app to share posts, Reals, music, polls and custom characters, trade cards in Deck Hub, earn season-pass cosmetics and chat with friends.

**Live app:** https://herjiberb.github.io/ReitTime/

## Features
- Posts, Reals, polls, music and comments
- Custom characters and profile icons (free + earned season-pass cosmetics)
- Deck Hub: collect, list and trade cards
- Communities, search, saved posts and drafts
- Installable PWA with offline fallback, light/dark theme

## Tech
Static site (HTML/CSS/vanilla JS) on GitHub Pages with a [Supabase](https://supabase.com) backend.

## Files
`index.html` app shell and SEO metadata · `app.js` core app · `deckhub.js` card marketplace · `deckart.js` card art · `legal.js` legal pages · `app.css`/`theme.css` styles · `sw.js` service worker · `manifest.json` PWA manifest · `robots.txt`/`sitemap.xml` search indexing

## Run locally
Serve the folder with any static server (e.g. `npx serve .`) and open it in a browser.
