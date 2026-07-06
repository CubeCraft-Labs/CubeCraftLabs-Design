# CubeCraft Creations Design System

> **Made with creativity. Crafted with heart.**

CubeCraft Creations is a small-batch, handcrafted goods shop offering three distinct product categories: **crocheted plush items**, **branded apparel**, and **3D-printed collectibles** (most notably their "Pet Rocks" character line). The brand sits at the intersection of maker culture, playful design, and community warmth — it's a creator-run shop where every item carries a personal touch.

---

## Sources

The following resources were provided to build this design system. Readers with access are encouraged to explore them for deeper fidelity:

- **GitHub repo** — `talon2king/cubecraft_shopify_theme` (https://github.com/talon2king/cubecraft_shopify_theme) — Shopify theme source. Access was unavailable at time of authoring; CSS variables, Liquid templates, and component markup would significantly deepen token fidelity if explored.
- **Uploaded brand assets** — Logos (PNG, SVG), product photography, Nunito/Nunito Sans font family zip.

---

## Products & Categories

| Category | Description |
|---|---|
| **Crocheted Items** | Handmade yarn crafts — hats, plushes, seasonal ornaments. Warm, tactile, artisan feel. |
| **Apparel** | Branded t-shirts and tops featuring the CubeCraft logo gradient. |
| **3D Prints** | Custom-printed collectibles, most notably the "Pet Rocks" line — expressive stone-character figurines printed on a Bambu Lab printer. |

---

## CONTENT FUNDAMENTALS

### Voice & Tone
CubeCraft Creations writes like a **friendly maker talking to their community** — not a corporate brand, not a detached marketplace. Copy is warm, enthusiastic, and personal.

**Core traits:**
- **First-person plural ("we")** for the brand; **second-person ("you")** for customers. "We made this for you."
- **Sentence case** for headlines and UI labels — not Title Case or ALL CAPS. Feels approachable, not stiff.
- **Short sentences.** Punchy. Enthusiastic. Never verbose.
- **Exclamation points are OK** — sparingly, where genuine excitement lives. "Shop the new Pet Rocks drop!"
- **No jargon.** Never "utilize," "leverage," or "synergy." Real words. Maker words.
- **Playful but not silly.** The brand can be lighthearted ("your next favorite rock-solid friend") without going cringe.
- **Emoji are used sparingly** and only in informal contexts (social captions, thank-you notes). Never in product names or navigation.

**Tagline:** *Made with creativity. Crafted with heart.*

**Example product copy style:**
> "These little Pet Rocks have big personalities — printed fresh on our Bambu Lab, hand-finished, and ready to cause trouble on your shelf."

**Example CTA style:**
> "Shop Pet Rocks" — not "Explore Our 3D-Printed Collectible Collection"

### Casing
- Headlines: Sentence case
- Nav items: Title Case (e.g. "Shop All", "3D Prints")
- Buttons: Title Case
- Body: Standard sentence case
- Tags/badges: Lowercase

---

## VISUAL FOUNDATIONS

### Color
The brand is defined by a **blue-to-purple gradient** that runs through every logo mark and primary UI element. This is not a flat brand — color lives as movement.

- **Brand Blue** `#3B3AB8` — deep cobalt/indigo. Anchors primary actions and headings.
- **Brand Purple** `#A035CC` — vibrant magenta-purple. Gradient terminus; accent for hover, highlights.
- **Gradient** — `135deg, #3B3AB8 → #A035CC`. Used on logo, primary buttons, hero text.
- **Neutrals** — clean white backgrounds with very light lavender-gray surfaces (`#F4F4F6`). The palette leans light and airy to let product photography breathe.
- **Text** — near-black `#18181D` for primary; medium gray `#52525E` for secondary.

The brand does **not** use warm tones (no orange, red, or yellow in UI). Product photography may contain warm wood/workshop tones — these are environmental, not brand palette.

### Typography
**Nunito** is the sole typeface — a rounded, humanist sans-serif with soft terminals that perfectly matches the brand's handmade, friendly personality. It is used at all weights from Light (300) for fine print to ExtraBold (800) for display headlines. The roundness of Nunito echoes the rounded-square logo frame.

- **Display / Hero:** Nunito ExtraBold (800), tight tracking (`-0.03em`)
- **Headings:** Nunito Bold–ExtraBold (700–800)
- **Body:** Nunito Regular (400), relaxed line-height (1.65)
- **Labels/Captions:** Nunito SemiBold (600), wide tracking (`0.05em`), uppercase

No serif, no condensed, no display-only face. Nunito does everything.

### Spacing
4px base unit. Generous white space is a brand value — layouts never feel cramped. Section padding is typically 64–96px vertical. Cards have 20–24px internal padding.

### Backgrounds & Surfaces
- **Page background:** Pure white (`#FFFFFF`)
- **Subtle surfaces / alternating sections:** Very light lavender-gray (`#F4F4F6`)
- **Cards:** White with a light border (`#E4E4EA`) or subtle shadow
- **Hero sections:** May use a gradient overlay on product photography, or a solid white layout with a large gradient typographic element
- **No full-bleed patterned backgrounds.** No textures in UI (textures appear in product photography only).

### Imagery Style
- Photography has a **warm workshop / maker aesthetic** — wood grain tables, filament spools, yarn balls, scissors, hand tools visible in frame
- Lighting is natural and slightly warm, but white-balanced; images are crisp and well-lit
- Product shots blend seamlessly into warm neutral backgrounds — no stark studio white
- 3D Print hero images feature the Pet Rocks characters in playful, narrative arrangements (e.g. one being "printed" by the machine)
- No grain, no film effects, no desaturation — bright, clear, saturated imagery

### Gradient Usage
The brand gradient (`#3B3AB8 → #A035CC`, 135°) appears on:
1. The logo icon stroke and rounded-square frame
2. Primary CTA buttons (gradient fill)
3. Display/hero headlines (gradient text fill via `background-clip: text`)
4. Active state indicators, pill badges

### Borders & Cards
- Border radius: `8px` (cards/inputs), `12px` (feature cards), `20px` (logo-matching large panels), `9999px` (pills/chips)
- Cards: `1px solid #E4E4EA`, `border-radius: 12px`, `box-shadow: 0 4px 12px rgba(0,0,0,0.08)`
- No heavy outer shadows. Shadows are subtle, short-range diffusion (not long dramatic drops).

### Hover & Interaction States
- **Buttons:** Slight brightness increase + scale(1.02) on hover; scale(0.98) on press
- **Cards:** Subtle `translateY(-2px)` lift + shadow increase on hover
- **Links:** Color transition to `--brand-purple`; no underline on hover (underline on focus only)
- **Icons:** Opacity 0.7 default → 1.0 on hover

### Animation & Motion
- Easing: `cubic-bezier(0.0, 0.0, 0.2, 1.0)` (ease-out) for entrances; spring easing for interactive feedback
- Duration: 120ms for micro-interactions; 200ms for most transitions; 350ms for modals/drawers
- No infinite loops on content. Subtle entrance animations (fade-up) on page load sections.

### Corner Radii Summary
| Use | Value |
|---|---|
| Small inputs, chips | 6px |
| Buttons, cards | 8–12px |
| Feature panels | 20px |
| Logo/brand frame | 20px |
| Pills/tags | 9999px |

### Iconography
- See ICONOGRAPHY section below

---

## ICONOGRAPHY

CubeCraft Creations uses **Lucide Icons** (stroke-based, 2px stroke weight, 24px base size) for all UI iconography. Lucide is the recommended Shopify-ecosystem icon set and matches the brand's clean, rounded aesthetic perfectly.

**CDN:** `https://unpkg.com/lucide@latest/dist/umd/lucide.js`

**Usage pattern:**
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<i data-lucide="shopping-cart"></i>
<script>lucide.createIcons();</script>
```

**Common icons in use:**
- Navigation: `menu`, `x`, `search`, `shopping-cart`, `user`, `heart`
- Actions: `plus`, `minus`, `trash-2`, `edit-3`, `share-2`, `download`
- Feedback: `check-circle`, `alert-circle`, `info`, `star`
- Products: `package`, `tag`, `layers`, `scissors`
- Social: `instagram`, `facebook`, `twitter`

**Icon sizing:**
- UI icons (inline with text): 16px
- Navigation icons: 20px
- Feature icons / section icons: 24px–32px
- Never scaled via CSS filter; always sized via `width`/`height` attrs

**No emoji as icons.** No hand-drawn SVGs for UI chrome. Logo marks are PNG/SVG files in `assets/logos/`.

**Brand logos available in `assets/logos/`:**
- `CubeCraftCreations_Logo_Official_No_BG.png` — full stacked logo, transparent BG
- `Header_Logo.png` — horizontal lockup for header/nav
- `SEO_Logo.png` — square social/SEO variant
- `Full_Logo_SVG.svg` — vector master

---

## FILE INDEX

```
/
├── styles.css                          ← Root stylesheet (import this)
├── readme.md                           ← This file
├── SKILL.md                            ← Claude Code skill definition
│
├── tokens/
│   ├── colors.css                      ← Color custom properties
│   ├── typography.css                  ← Type scale + role aliases
│   ├── spacing.css                     ← Spacing, radius, shadow, motion
│   └── fonts.css                       ← @font-face declarations
│
├── assets/
│   ├── logos/                          ← Brand marks (PNG + SVG)
│   ├── images/                         ← Product photography
│   └── fonts/                          ← Nunito TTF files
│
├── components/
│   ├── core/                           ← Button, Badge, Tag, Pill
│   └── product/                        ← ProductCard, CategoryCard
│
├── guidelines/
│   ├── colors/                         ← Color specimen cards
│   ├── typography/                     ← Type specimen cards
│   ├── spacing/                        ← Spacing specimen cards
│   └── brand/                          ← Logo + gradient specimen cards
│
└── ui_kits/
    └── storefront/                     ← CubeCraft e-commerce UI kit
```

### Components
| Component | Location | Description |
|---|---|---|
| `Button` | `components/core/` | Primary, secondary, ghost, gradient variants |
| `Badge` | `components/core/` | Status and category labels |
| `Tag` | `components/core/` | Pill-shaped content tags |
| `ProductCard` | `components/product/` | Shop product grid card |
| `CategoryCard` | `components/product/` | Homepage category feature card |

### UI Kits
| Kit | Location | Screens |
|---|---|---|
| Storefront | `ui_kits/storefront/` | Homepage, Product listing, Product detail, Cart |
