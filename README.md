# PangChu Studio Design System

## Overview

**PangChu Studio** is a small indie game studio creating cute, cozy, and casual mobile games. Their current featured title is **MalrangNyang (MalangNyang Jump / 말랑냥)** — a soft, cheerful jumping game featuring cloud-like visuals, playful cat characters, and a clean, friendly user experience.

### Sources

- **Live website:** https://pangchustudio.co.kr/
- **Canonical website:** https://pangchustudio.co.kr/
- **Key visual:** `assets/malangnyang-jump-banner.png` — the official game banner (white fluffy cats, cloudy sky, green meadow, jelly-style bubbly logo in green/yellow/pink)

---

## Products

| Surface | Description |
|---|---|
| **Studio website** | Official homepage: studio intro, game feature, policy links. One-page layout. |
| **Privacy Policy page** | `privacy.html` — plain legal text, styled consistently |
| **Terms of Service page** | `terms.html` — plain legal text, styled consistently |

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Warm, welcoming, approachable.** Never cold or corporate.
- **Friendly and simple.** Short sentences. No jargon.
- **Modest and honest.** "Small studio building cute experiences" — no hype, no oversell.
- **Playful but clear.** The playfulness is in the visuals, not the legal copy.

### Casing
- **Sentence case** for body copy and labels.
- **Title Case** for proper nouns (PangChu Studio, MalrangNyang, MalangNyang Jump).
- Navigation items: sentence case (Game, Links, About).

### Person / Voice
- **Third-person for the studio:** "PangChu Studio focuses on…"
- **Warm second-person for CTAs:** implied "you" (View Game, Open page →)
- **No emoji in copy.** Playfulness comes from visuals and layout.

### Copy Examples
- "A small studio building cute and approachable mobile game experiences."
- "Easy to pick up and comfortable for casual mobile play."
- "Quick runs, repeatable challenge, and score-focused fun."
- "A soft and cheerful jumping game built around cute cat energy."

### Link arrows
Use → (right arrow) for navigation links. E.g. "Open page →"

---

## VISUAL FOUNDATIONS

### Color System
| Token | Value | Usage |
|---|---|---|
| `--bg1` | `#dff4ff` | Primary background (sky blue tint) |
| `--bg2` | `#f6fbff` | Secondary background (near white) |
| `--card` | `rgba(255,255,255,0.82)` | Card surface (frosted glass) |
| `--card-strong` | `rgba(255,255,255,0.92)` | Elevated card surface |
| `--line` | `rgba(92,151,201,0.18)` | Borders, dividers |
| `--text` | `#17324d` | Primary text (deep navy) |
| `--muted` | `#587089` | Secondary text, captions |
| `--primary` | `#59b8ff` | Sky blue — buttons, links |
| `--primary-deep` | `#3399ee` | Hover state, active links |
| `--accent` | `#8ae4c5` | Mint green — accent, badges |
| `--shadow` | `0 20px 60px rgba(67,133,193,0.14)` | Card shadow |

**Gradients:**
- Page background: `radial-gradient(circle at top left, rgba(137,212,255,0.42), transparent 30%), radial-gradient(circle at top right, rgba(164,239,214,0.32), transparent 24%), linear-gradient(180deg, #dff4ff, #f6fbff)`
- Sky gradient (in-game visual): `linear-gradient(180deg, #8fd8ff 0%, #bdeaff 52%, #e6fff4 100%)`
- Brand badge: `linear-gradient(135deg, #7fd0ff, #8be7c7)`
- Primary button: `linear-gradient(135deg, #59b8ff, #3399ee)`

### Typography
- **Font family:** Inter (system sans-serif stack: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
- **No custom typeface.** Clean and readable is the priority.
- **Display / H1:** `clamp(38px, 5vw, 68px)`, `line-height: 0.95`, `letter-spacing: -0.05em`, weight 800
- **H2:** `28px`, `letter-spacing: -0.03em`, weight 700–800
- **H3 (game title):** `clamp(28px, 4vw, 44px)`, `letter-spacing: -0.04em`
- **Body:** `18px`, `line-height: 1.7`, weight 400
- **Small / label:** `13–14px`, weight 700–800, `letter-spacing: 0.02em`
- **Brand name:** `font-weight: 800`, `letter-spacing: -0.03em`

### Corner Radii
| Token | Value | Usage |
|---|---|---|
| `--radius-xl` | `28px` | Cards, hero, game card |
| `--radius-lg` | `22px` | Feature blocks, link cards |
| `--radius-md` | `16px` | Mini tiles, inner elements |
| Pill | `999px` | Buttons, badges, nav links, status dots |

### Shadows
- **Card:** `0 20px 60px rgba(67,133,193,0.14)` — soft blue-tinted diffuse shadow
- **Brand badge:** `0 12px 30px rgba(64,145,210,0.24)`
- **Button (primary):** `0 14px 28px rgba(51,153,238,0.24)`
- **Banner frame:** `0 16px 34px rgba(82,149,201,0.16)`
- **Status dot glow:** `0 0 0 6px rgba(22,196,127,0.12)`

### Backgrounds
- **Page:** Layered radial + linear gradient. Sky blue upper left, mint upper right, fades to near-white.
- **Card surfaces:** Semi-transparent white (frosted glass). `backdrop-filter: blur(18px)` on the sticky nav.
- **Game visual panel:** Sky gradient with white radial cloud spots (CSS `radial-gradient`).
- **No photography backgrounds.** No textures or patterns.
- **Cloud decorations:** Pure CSS — `border-radius: 999px`, white, `filter: blur(2px)`, layered via `::before`/`::after` with `box-shadow` offsets.

### Animations & Interactions
- **Hover (cards):** `translateY(-2px)` + subtle border color shift. Smooth `0.15s ease`.
- **Hover (buttons):** `translateY(-1px)`. No background change on primary.
- **Hover (nav links):** Background fill `rgba(89,184,255,0.12)`, color → `--primary-deep`.
- **No complex animations.** Subtle lift-on-hover only.
- **Scroll:** `scroll-behavior: smooth`.
- **Transitions:** `0.15s ease` — very snappy.

### Borders
- Cards: `1px solid rgba(92,151,201,0.18)` (translucent blue)
- Hover cards: border darkens to `rgba(51,153,238,0.3)`
- Buttons (secondary): `1px solid rgba(89,184,255,0.2)`
- Glass nav: `border-bottom: 1px solid rgba(92,151,201,0.12)`

### Cards
- Background: `rgba(255,255,255,0.82)` — frosted glass
- Border: 1px translucent blue
- Shadow: soft diffuse blue shadow
- Radius: xl (28px) outer, md (16px) inner
- No colored accent bars. No hard outlines.

### Imagery
- **Color vibe:** Bright, warm-cool balance. Sky blues + greens + pinks. Soft saturation.
- **Game banner:** Illustrated, 2.5D, kawaii/anime style. Clean white background.
- **No photography.** Pure illustration.
- **No dark imagery.** Everything is light, airy, bright.

### Layout
- **Max width:** `1120px`, centered, `calc(100% - 32px)` padding.
- **Grid:** CSS Grid, asymmetric splits (1.15fr / 0.85fr, 1.08fr / 0.92fr).
- **Sticky topbar** with glassmorphism (backdrop-filter blur).
- **Sections** have `18px` vertical padding; the hero has `56px` top.
- **No sidebar.** Single-column content within a centered max-width wrapper.

### Status / Live indicator
- Green dot with glow ring: `#16c47f` dot + `rgba(22,196,127,0.12)` halo.
- Label: `#14a56b`, weight 800, `font-size: 13px`.

---

## ICONOGRAPHY

- **No icon system used.** The live site uses zero icon fonts, SVGs, or icon libraries.
- **Text-only navigation.** Links are plain text + arrow character (→).
- **Brand badge:** Single letter "P" rendered in a rounded square with gradient — functions as a logo mark.
- **Emoji:** Not used in UI copy or navigation. Possibly in game marketing contexts only.
- **Unicode arrows:** `→` used as link indicators in the body copy.
- **Recommendation:** If icons are needed, use [Lucide](https://lucide.dev/) (stroke icons, 1.5px weight) — clean and friendly, consistent with the minimal rounded aesthetic. Or use rounded filled icons in sky-blue / mint on white pill backgrounds.

### Assets
| File | Description |
|---|---|
| `assets/malangnyang-jump-banner.png` | Official game banner — key visual |

---

## Files Index

```
README.md                         — This file
SKILL.md                          — Agent skill definition
colors_and_type.css               — All CSS design tokens
assets/
  malangnyang-jump-banner.png       — Game banner (key visual)
preview/
  colors-primary.html             — Primary color swatches
  colors-neutrals.html            — Neutral / text colors
  colors-semantic.html            — Semantic / state colors
  colors-gradients.html           — Brand gradients
  type-scale.html                 — Typography scale
  type-specimens.html             — Type specimens
  spacing-radii.html              — Corner radius tokens
  spacing-shadows.html            — Shadow system
  spacing-tokens.html             — Spacing scale
  components-buttons.html         — Button states
  components-cards.html           — Card variants
  components-badges.html          — Badges and labels
  components-nav.html             — Navigation bar
  brand-banner.html               — Key visual / banner
ui_kits/
  website/
    index.html                    — Full website UI kit (interactive)
    Header.jsx
    Hero.jsx
    GameSection.jsx
    LinksSection.jsx
    Footer.jsx
```
