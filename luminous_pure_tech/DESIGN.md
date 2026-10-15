---
name: Luminous Pure Tech
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001e2c'
  on-tertiary-container: '#008ebf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a luxury health-tech synthesis: the precision and architectural calm of high-end hardware paired with the clarity of pure water science. The visual language evokes vitality, absolute purity, and frictionless intelligence. The audience consists of health-conscious professionals, design purists, and high-performance individuals who view personal wellness as an essential craft. 

The aesthetic style merges **Minimalism** and refined **Glassmorphism**:
- Generous breathing space, pure white expanses, and deliberate negative space create a gallery-grade canvas.
- Controlled translucent layers, frosted glass surfaces, and micro-fine hairline dividers emulate cold precision-milled glass and anodized aluminum.
- Strategic bio-luminescent cyan accents signal real-time hardware status, UV-C sanitation cycles, and live hydration metrics without overwhelming the serene, clinical restraint.

## Colors

The palette balances deep oceanic authority with high-clarity water tones:

- **Primary (`#0F172A`)**: Deep Oceanic Slate. Grounds key headlines, hero CTAs, and structural navigational elements with deliberate weight and contrast.
- **Secondary (`#06B6D4`)**: Bio-Cyan. Represents UV-C light activation, active hydration goals, interactive toggles, and dynamic device feedback.
- **Tertiary (`#38BDF8`)**: Aqua Glow. Reserved for ambient gradient highlights, progress arc rings, hover states, and live liquid temperature indicators.
- **Neutral Surface (`#F8FAFC`)**: Crisp Ice Gray. Provides a luminous, non-glare foundation that elevates pure white floating cards and frosted translucent layers.

### Contextual Tokens & Application
- **Canvas Base**: `#F8FAFC`
- **Surface Elevation (Elevated Cards)**: `#FFFFFF` with frosted backdrops (`rgba(255, 255, 255, 0.75)`)
- **Body Copy**: Balanced Neutral `#475569` ensuring WCAG AAA legibility against white and ice surfaces.
- **Micro Hairlines**: `#E2E8F0` at 1px border width to emulate precision-machined edge chamfers.

## Typography

The type hierarchy pairs **Outfit** for structural headings with **Plus Jakarta Sans** for body copy and technical telemetry. 

- **Outfit** provides sculptural geometric letterforms with optical balance, echoing modern industrial design and premium tech branding. Use tight negative tracking on display sizes to communicate engineered precision.
- **Plus Jakarta Sans** delivers organic, humanist legibility with open counters, ensuring hydration metrics, temperature readouts, and long-form specifications remain clear across ambient light and mobile environments.
- **Label Small** uses uppercase styling with expanded letter tracking (`0.06em`) exclusively for status indicators, UV cycle phases, and hardware category tags.

## Layout & Spacing

The layout is built on an architectural 12-column fluid grid system on desktop (`>1024px`), collapsing to 8 columns on tablet (`768px - 1023px`), and 4 columns on mobile (`<767px`). 

- **Grid Architecture**: Desktop sections enforce a maximum container width of `1280px` to maintain optimal viewing angles for 3D bottle renders and side-by-side technical breakdowns.
- **Whitespace Cadence**: Layout margins expand significantly on desktop (`3rem`) to create an uncluttered, breathing gallery presence. Component gaps strictly adhere to the 4px base modular scale.
- **Specs & Comparisons**: Technical metric grids use uniform `1.5rem` gutters with equalized card aspect ratios, stacking into full-width cards sequentially on mobile devices.

## Elevation & Depth

Visual depth is achieved through glassmorphism and ambient liquid glow rather than heavy physical dropshadows.

1. **Frosted Glass Surface**: Base cards use `background: rgba(255, 255, 255, 0.75)` paired with `backdrop-filter: blur(16px)` and a subtle 1px border of `rgba(226, 232, 240, 0.6)`. This creates a translucent, chilled-glass feel.
2. **Ambient Cyan Halo**: Interactive states and active UV-C cleansing cards employ a soft, ultra-diffused luminous shadow: `0 20px 40px -15px rgba(6, 182, 212, 0.12)`.
3. **Elevated Floating Controls**: Floating bottom navigation and checkout action summaries utilize an offset elevation: `0 12px 32px -8px rgba(15, 23, 42, 0.08)` paired with an inner white rim highlight `inset 0 1px 0 rgba(255, 255, 255, 0.8)`.

## Shapes

The design system employs a **Pill-shaped (3)** geometric silhouette. This language directly echoes the cylindrical curves, lid contours, and ergonomic profile of the physical smart bottle.

- **Buttons & Chips**: Pure pill radii (`9999px`) provide tactile comfort and high contrast against angular layout grids.
- **Glass Cards & Spec Panels**: Standardized at `rounded-xl` (`2rem` / `32px`) on desktop and `1.25rem` on mobile screens, balancing architectural structure with soft corners.
- **Metric Rings & Toggle Handles**: Completely spherical and pill-based, reinforcing a fluid, water-like flow.

## Components

### Buttons
- **Primary Action**: Pill shape (`height: 48px`, padding: `0 28px`). Filled with Deep Oceanic Slate (`#0F172A`), white text, crisp tracking (`Outfit`, `label-lg`). Hover shifts subtly to `#1E293B` with an ambient glow of `rgba(6, 182, 212, 0.25)`.
- **Accent Tech Button**: Filled with Bio-Cyan (`#06B6D4`), white text. Used exclusively for "Clean Now" or primary conversion events.
- **Ghost/Tertiary**: Frosted glass surface, slate border (`rgba(226, 232, 240, 0.8)`), Oceanic Slate text. Hover triggers `background: rgba(248, 250, 252, 0.8)`.

### Cards & Spec Panels
- **Glass Spec Cards**: Pure white at 80% opacity with `backdrop-filter: blur(20px)`, enclosed by a hairline `1px solid rgba(226, 232, 240, 0.8)`. Internal padding is locked to `space-xl` (`2.5rem`).
- **Telemetry Card**: Features dynamic status headers, circular hydration percentage indicators rendered in thin aqua SVG arcs, and real-time UV cycle countdowns.

### Chips & Status Badges
- Fully rounded pills (`height: 28px`, padding: `0 12px`).
- **Self-Cleaning Active**: Light cyan background (`rgba(6, 182, 212, 0.1)`), vibrant cyan dot with a 1.5s pulsing CSS glow, text in `#0891B2` (`label-sm`).
- **Battery/Sync Indicator**: Neutral ice slate surface with a micro hardware icon.

### Form Inputs & Controls
- **Interactive Metric Toggles**: Pill track (`height: 32px`, `width: 56px`) in `#E2E8F0` transitioning to `#06B6D4` when active. Thumb is pure white floating with a soft micro-shadow.
- **Input Fields**: Height `48px`, border radius `9999px`, background `#FFFFFF`, border `1px solid #E2E8F0`. Focused state switches border to `#06B6D4` with a `0 0 0 3px rgba(6, 182, 212, 0.15)` focus ring.
- **Checkboxes & Radios**: 20px circular controls. Selected state is a solid `#0F172A` ring enclosing a `#06B6D4` inner pip.

### Specs Comparison Grid
- Alternating subtle rows (`#FFFFFF` to `#F8FAFC`). Thin dividers (`1px solid #E2E8F0`). High-emphasis hardware metrics use `Outfit` medium in `#0F172A`, comparative baseline competitors styled in neutral `#64748B`.

### Checkout & Hydration Summary
- Sticky or floating glass panel with frosted background blur (`blur(24px)`), integrated subtotal breakdown, dynamic shipping threshold bar filled with Aqua Glow (`#38BDF8`), and full-width pill checkout action.