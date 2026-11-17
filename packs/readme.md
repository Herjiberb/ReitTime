# Packs

Each pack is one file in `packs/`. `registry.js` loads first and every pack registers itself with `PKR.register(...)`.
`app.js` (icon rendering, editor, unlocks) and `deckhub.js` (shop, odds, collection, pack art) read everything from `PKR`, so adding a pack never needs edits to them.

| File | Pack | Cost |
|---|---|---|
| `desert.js` | Desert Pack | 25 |
| `ice.js` | Ice Pack | 20 |
| `_template.js` | copy this for a new pack | |

## Slot indexes in use (next free number per slot)
| Slot | Used | Next free |
|---|---|---|
| `b` skin | 0-26 base/season, 27-28 ice | 29 |
| `e` eyes | 0-23 base/season, 24-26 desert, 27-28 ice | 29 |
| `m` mouth | 0-23 base/season, 24-25 desert, 26-28 ice | 29 |
| `x` extra | 0-26 base/season, 27 desert, 28-29 ice | 30 |
| `f` full icon | 0-1 desert, 2-5 ice | 6 |

## Adding a pack
1. Copy `_template.js` to `packs/<name>.js`, draw the art (100x100 viewBox), list each part under `parts` with the next free index, and give it a `cost`.
2. Add `<script src="packs/<name>.js"></script>` to `index.html` after `packs/registry.js`, and the path to the cache list in `sw.js` (bump the cache name).
3. Write `packs/<name>.sql` to insert the cards (`id, name, rarity, slot, idx, odds_w`) and make the server pack opener (`dh_open_pack`) roll only that pack's cards for its pack id.
4. Update the table above.

The shop pack switcher, odds sheet, collection grid, icon editor names and unlock checks all appear automatically.
`rarity` and `odds` inside a part are the intended server values; the server stays the authority.
