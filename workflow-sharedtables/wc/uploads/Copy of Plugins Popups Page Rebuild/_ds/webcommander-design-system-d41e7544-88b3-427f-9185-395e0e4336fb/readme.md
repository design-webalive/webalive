# WebCommander Design System

Design system for **WebCommander CMS** — an e-commerce and website management
platform. One admin application houses several surfaces: a metrics dashboard,
a drag-and-drop page/website editor, product and order management, website/page
administration, analytics, and settings for a customer-facing storefront.

The system is derived from the product itself: a dense, functional admin tool
with a white chrome, a light grey canvas, a single blue accent, and a soft
pastel status language. It is not a marketing aesthetic.

## Sources used

Twenty-two product screenshots supplied by the user, read from `uploads/`:

| File | Surface |
| --- | --- |
| `Dashboard.png` | Dashboard: promo banner, Performance Overview, Things to do, Best-Selling Products, Usage overview, New Features, Contact information, setup guide, activity feed |
| `1.png` | Settings shell, loading state (nav rail, top bar, canvas) |
| `2.png` | Page editor with storefront hero selected, Content inspector |
| `3.png` | Settings index — grouped setting cards, left submenu |
| `4.png` | Settings › Category Page — toggle rows, nested checkbox block, Cancel/Save |
| `5.png`, `6.png` | Website › Layouts — layout list, empty canvas, layout preview |
| `7.png` | Website › Templates — current template + template marketplace grid |
| `8.png` | Website › Blogs — blog table with status/visibility columns |
| `9.png` | Analytics — KPI strip, report tabs, Sales Over Time, Sales by Product |
| `10.png` | Products › Edit Product — form, AI Suggest/Improve/Generate affordances, rich text toolbar |
| `Page_layout.png` | Website › Pages table |
| `Products_with_baner.png`, `Products_with_limit_banner.png` | Products list with 85% (amber) and 100% (red) plan-limit banners |
| `Element_hover.png`, `Element_selected.png` | Editor canvas hover chip and selected-element toolbar |
| `Element_right_sidebar[_2–5].png` | Editor inspector: Text sections in full, Image sections (Smart Enhancement, Image Style, Border) |
| `Logo.png` | The "W" brand mark → `assets/logo-mark.png` |

No codebase, repository or Figma file was provided, so every value in this
system was measured from these screenshots. Where a screenshot was ambiguous the
token comment says so. **If you can share the front-end source or a Figma
library, the token values and component inventory should be reconciled against
it — that is the single biggest accuracy win available here.**

## Index

| Path | What it holds |
| --- | --- |
| `styles.css` | Single entry point consumers link; `@import` list only |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `base.css` |
| `assets/logo-mark.png` | The supplied W mark (36×26 PNG, transparent) |
| `components/core/` | Icon, Button, IconButton, Badge, StatusPill, ProgressBar, Card |
| `components/forms/` | Input, SearchInput, Select, Checkbox, Radio, Switch, SegmentedControl |
| `components/data/` | StatCard, Sparkline, UsageMeter, TaskRow, DataTable, Pagination |
| `components/navigation/` | SidebarNav, TopBar, Tabs, Breadcrumb |
| `components/feedback/` | Banner, PromoBanner, Toast, ToastStack, Modal, EmptyState, Spinner, LoadingRegion |
| `components/editor/` | InspectorSection, PropertyRow, OptionTile, ElementToolbar, AiToolsPanel |
| `components/settings/` | PageActionBar, SettingsSubNav, SettingsSection, SettingRow, SettingsSubPanel |
| `guidelines/*.card.html` | Foundation specimen cards (Colors, Type, Spacing, Brand) and the list-table, settings-page and settings-table patterns |
| `ui_kits/admin/` | Click-through admin recreation — Dashboard, Website, Products, Analytics, Settings |
| `ui_kits/editor/` | Click-through page-editor recreation — canvas, element states, Text and Section inspectors |
| `SKILL.md` | Agent-skill wrapper for use outside this project |

### Components

Icon, Button, IconButton, Badge, StatusPill, ProgressBar, Card,
Input, SearchInput, Select, Checkbox, Radio, RadioGroup, Switch, SegmentedControl,
StatCard, Sparkline, UsageMeter, TaskRow, DataTable, Pagination,
SidebarNav, TopBar, Tabs, Breadcrumb,
Banner, PromoBanner, Toast, ToastStack, Modal, EmptyState, Spinner, LoadingRegion,
InspectorSection, PropertyRow, OptionTile, ElementToolbar, AiToolsPanel,
PageActionBar, SettingsSubNav, SettingsSection, SettingRow, SettingsSubPanel.

Each component directory contains `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`
and one `@dsCard` HTML specimen.

**Intentional additions** (no direct counterpart in the screenshots, added because
the kit cannot be assembled without them):

- `Icon` — wrapper over the stroke icon set; the product clearly uses one, but no icon
  assets were supplied (see Iconography).
- `Sparkline` / `UsageMeter` — the dashboard shows both, but as compositions rather than
  named controls; they are extracted so stat strips and plan cards stay consistent.
- `PropertyRow` — the label-left/control-right row repeats in every inspector and settings
  panel; naming it prevents 40 hand-rolled variants.

## Content fundamentals

**Voice.** Plain, operational, second person. The product talks to a store
operator mid-task, not to a prospect. Sentences are short and say what a thing
does: "Monitor all integrations, audit, debug log." "Manage your store's core
configuration — from branding and payments to shipping, tax, customer accounts,
and beyond."

**I vs you.** Always "you"/"your" for the operator's assets ("your plan limit",
"your first product", "your store's core configuration"). Never "we", never "I".
The system does not speak about itself.

**Greeting.** The dashboard is the only warm moment: "Good Morning, Jordan" with
the subline "Here's what's happening with Avone Store today." Everywhere else the
tone is neutral.

**Casing.**
- Page and card titles: Title Case — "Performance Overview", "Best-Selling Products", "Recent Activity Feed", "Add payment method" (sentence case appears in dialogs).
- Stat labels: ALL CAPS with letter spacing — "TOTAL SALES", "AOV", "CONVERSION RATE".
- Nav labels: ALL CAPS, 10px — "DASHBOARD", "PRODUCTS".
- Group headers inside pages: ALL CAPS grey — "GENERAL", "PAGE SETTINGS", "RELATED SETTINGS", "UNUSED".
- Table headers: Title Case, 12px semibold — "Product Type", "Connected Stores", "No of Comments & Replies".
- Field labels: sentence case — "Product Name", "Card number", "Display category heading".

**Buttons and links.** Verb-first and short: Save, Cancel, Publish, Redeem Now,
Upgrade Plan, Start Designing, Add Product, Create Page, Create Blog, Edit Layout,
Pick & Pack, Capture, Review, Open, View Details, Learn more, Not now. Add-actions
carry a literal "+": "+ Add Product", "+ Create Page", "+ Create", "+ Add Element".

**Numbers.** Currency with symbol and thousands separators ($8,890, $1,603.15);
percentages to one or two decimals (3.42%, 12.4%, 85%); comparisons written
"VS $7,000 PREV"; counts as "850 items", "8 Items", "1/6 completed (16%)",
"850 / 1,000 (85%)". Dates: "Thu, 27 Aug 2026", "2023/06/26 12:26",
"Wed, 2 Sep 2026 03:07:34". Relative times: "2 mins ago", "14 mins ago", "1 hr ago",
"Updated 12s ago".

**Limits and upsell.** State the fact, then the escape: "Product catalog: 850 /
1,000 (85%)" + "You are getting close to your plan limit." At the ceiling the
copy hardens: "You have hit your product limit." Promo copy is specific and
time-boxed: "Limited-time: save 30% on Professional or Premium for your first 12
months. Ends in 3 days."

**AI copy.** AI actions are verbs in the operator's language, never branded
jargon: Generate, Rewrite, Shorter, Fix grammar, Change tone, AI Suggest,
Auto-classify, AI Improvise, Improve, Simplify, Fix mistakes, Make shorter,
Make more detailed, Complete sentence, Tone, Translate, Upscale, Auto Enhance.

**Emoji.** None anywhere in the product chrome. Do not introduce them. The only
non-icon glyphs are ▲ / ▼ in delta pills and ★ in review rows.

**Vibe.** Dense and functional. Cards carry real numbers, not reassurance. Long
explanatory paragraphs never appear; the longest strings are one-line card
descriptions of about 15 words.

## Visual foundations

**Layout.** Fixed 50px top bar; fixed 74px icon nav rail; everything else scrolls.
The editor adds a fixed 310px right inspector. Page content sits on the grey
canvas with 24px padding and stacks white cards with 16px gutters. Dashboard uses
an asymmetric three-column grid (≈1.05fr / 1.15fr / 320px fixed rail). Settings and
detail pages nest a 230px submenu inside the card, with the content column on a
lighter grey and a ~980px measure.

**Colour.** One accent: `#008DF2`. It appears on primary buttons, the active nav
squircle, links, tab underlines, focus rings, progress fills, radio/checkbox fills,
and selected editor outlines — nowhere else. Canvas `#eef1f3`, cards white, borders
`#e5e7eb`. Text runs near-black `#1a1f26` → `#4d5662` → `#6b7480` → `#8b949e` for
micro labels. Semantics are pastel-background / saturated-text pairs: green
success, amber warning, red error. Two more colours exist and are scoped: the
indigo-leaning promo gradient (`#3d61d9 → #2b47b8`) and analytics cyan `#22c1d6`.
AI surfaces get a lavender wash (`#f3f0ff → #ecf3ff`) with `#7c5cff` glyphs.
Maximum two background colours per screen: white and one grey.

**Type.** Source Sans 3 throughout the chrome, weights 400/600/700. Hierarchy is
carried by weight and case, not by family: bold numerals for data, 600 for titles
and table headers, 400 for body and meta, uppercase 11px with .06em tracking for
stat labels, uppercase 10px with .04em for nav. Storefront content inside the
editor renders in the store's own brand-kit font (a serif in the reference
screenshots) — admin chrome never adopts it.

**Backgrounds.** Flat. No photography in the chrome, no textures, no patterns.
Three gradients only, all soft and all purposeful: the promo strip, the AI panel,
and two pale marketing cards on the dashboard (Usage overview, New Features) which
use barely-there blue/pink washes. Full-bleed imagery only appears inside the
editor's storefront canvas, where it belongs to the customer's site.

**Corners.** 4px chips and checkboxes, 6px inputs and thumbnails, 8px cards,
banners and option tiles, 40px full-circle active nav chip, 12px modals, pill for buttons,
badges and meters. Buttons are always fully rounded — that pill is the most
recognisable shape in the product.

**Borders and shadows.** Structure comes from 1px borders, not elevation. Cards:
white + `#e5e7eb` border + a near-invisible `0 1px 2px rgba(16,24,40,.04)`.
Dividers inside cards are one step lighter (`#e9edf0`). Real shadow is reserved for
things that float: popovers (`0 8px 24px /.12`), modals (`0 24px 48px -12px /.24`),
and the dark element toolbar (`0 4px 14px /.28`). No inner shadows anywhere.

**Hover.** Rows and list items tint to `#fafbfc`; icon buttons to `#f4f6f7`;
primary buttons darken to `#0077cf`; links darken to `#0077cf` and underline;
inactive nav items get a light grey squircle; canvas elements in the editor reveal
a blue outline plus a blue name chip.

**Press.** Colour only — primary goes to `#0065b0`. No scale, no translate. The
product is not playful about pressure.

**Focus.** 1px blue border plus a 3px `rgba(0,141,242,.28)` ring.

**Motion.** Minimal and short: 120ms for hover/colour, 180ms for toggles and
switches, 260ms for progress fills, all on `cubic-bezier(.4,0,.2,1)`. Transitions
are opacity/colour/position; there are no bounces or springs in the chrome. Spinners
are a blue arc on a grey ring. Storefront *content* can animate (the editor exposes
Fade / Zoom / Slide / Rotate / Bounce / Flip / Expand entrances) but that is the
customer's site, not the admin.

**Transparency and blur.** Almost none. The modal scrim is `rgba(24,31,40,.34)`;
the dark toolbar uses white at 60–90% for its glyphs. No frosted glass, no
backdrop blur.

**Imagery.** Product photography is neutral-background e-commerce catalogue
imagery (light, cool, no grain), shown in 58–60px rounded-6px thumbnails inside
tables and 34px tiles in list cards. Template marketplace thumbnails are
full-colour screenshots of storefronts. No illustration style exists in the
product beyond one flat blue-and-white "empty canvas" graphic; that graphic was
not supplied as an asset, so `EmptyState` renders a tinted icon tile instead.

**List tables.** Two configurations, chosen by record density — never blended.

*Record list* (Pages, Blogs, Navigation): 42px header with 12px semibold Title Case
labels, no vertical rules, no checkboxes, 44px rows on 1px `#e9edf0` dividers. The
first cell is a blue semibold link, optionally followed by an italic grey qualifier
("Home *Default*"). Content Status uses the dot pill, Visibility the filled pill.
The toolbar above carries the page title, a grey pill count switcher
("Pages 26 / System 40"), a rounded search, a refresh circle and one blue CTA.

*Catalog list* (Products): a leading 46px checkbox column with select-all, vertical
1px rules between header cells, one sortable column whose header goes bold with a
visible arrow, 80px rows carrying a 58px rounded thumbnail and a two-line name cell
(title over `2 variations available | Pre-order active` in 12px grey, split by a
light pipe). The toolbar is search left, then a run of outlined circular icon
buttons (filter, columns, more, refresh) and the blue CTA; a page-size select sits
below the last row.

*Card structure.* The card's own 1px `#e5e7eb` border **is** the top edge — there
is no separate top-border prop. Section tabs go in `Card`'s `tabs` slot: they sit
flush at the top edge and are closed by a 1px neutral rule that separates them
from the toolbar. A card with no tabs simply shows its own border.

Both: table lives in a card with zero padding but keeps a **30px left/right
gutter** — header labels, cells and the row rules all inset from the card edge,
and the toolbar above aligns to the same 30px. Rows tint `#fafbfc` on hover and
pale blue when selected, and the trailing kebab column is always present.

**Data display.** Stat cells are separated by vertical dividers inside a single
card, never by gaps. Every number that can be compared shows a previous value, a
signed pastel delta pill, and a sparkline whose colour matches the delta. Charts
are thin-stroke line/area (blue) or flat bars (cyan) with light grey gridlines and
11px axis labels.

## Iconography

- The product uses **one 24px stroke icon set** — uniform ~1.75px weight, round
  caps and joins, no fills, no duotone. Sizes in use: 19–20px in the nav rail and
  card headers, 15–16px inline and in table rows, 13–15px in the editor toolbar,
  30px in empty states.
- **No icon files were supplied** (screenshots only, and no font/sprite/SVG source).
  `components/core/Icon.jsx` therefore resolves names against **Lucide** loaded from
  CDN (`https://unpkg.com/lucide@0.417.0/dist/umd/lucide.js`), the closest match on
  stroke weight and corner style. **This is a substitution — flagged for review.**
  If WebCommander ships its own set, drop the SVGs into `assets/icons/` and change
  the resolver in `Icon.jsx`; no other component needs to change.
- Nav rail glyphs (mapped to Lucide names): Dashboard `layout-panel-top`,
  Editor `panel-left`, Website `app-window`, Orders `clipboard-list`,
  Products `box`, Customers `contact`, Analytics `chart-line`,
  Marketing `megaphone`, Plugins `puzzle`, Settings `settings`,
  Help `circle-help`.
- Icons are monochrome and inherit text colour. The only coloured glyphs are the
  AI sparkle (`#7c5cff`), banner icons (amber/red), and status dots.
- **Emoji: never.** Unicode glyphs are used in exactly two places: ▲/▼ inside
  delta pills, and ★ for review ratings.
- Brand mark: `assets/logo-mark.png`, the supplied 36×26 W mark, rendered at 30–32px
  in the top-bar logo cell. No wordmark file was supplied — where a wordmark is
  needed, set "WebCommander" in Source Sans 3 Bold.

## Working with this system

- Link `styles.css` and read components from the compiled bundle
  (`window.<Namespace>.<Component>`; run the design-system check to get the namespace).
- Compose screens from the primitives — do not restyle them per screen.
- Keep new surfaces on the same skeleton: 50px bar, 74px rail, grey canvas,
  white cards, one blue accent, pastel status pills.
- When a value is missing, prefer omitting the element (as the UI kits do) over
  inventing a WebCommander screen that does not exist.
