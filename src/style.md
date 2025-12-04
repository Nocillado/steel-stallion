# Steel Stallion - Style Guide

> A vintage big bikes company with Scandinavian design influence and Nordic-inspired decorative elements.

---

## Typography

### Font Pairing

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| **Display** | Oswald | 400, 500, 600, 700 | Headlines, titles, navigation, buttons |
| **Body** | Work Sans | 300, 400, 500, 600 | Paragraphs, captions, UI text |

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Work+Sans:wght@300;400;500;600&display=swap');
```

### Type Scale

| Element | Size | Weight | Letter Spacing | Line Height |
|---------|------|--------|----------------|-------------|
| H1 (Hero) | 72px / 4.5rem | 700 | 0.04em | 1.0 |
| H2 (Section) | 48px / 3rem | 600 | 0.03em | 1.1 |
| H3 (Card Title) | 32px / 2rem | 600 | 0.02em | 1.2 |
| H4 (Subsection) | 24px / 1.5rem | 500 | 0.02em | 1.3 |
| Body Large | 18px / 1.125rem | 400 | 0 | 1.7 |
| Body | 16px / 1rem | 400 | 0 | 1.6 |
| Caption | 14px / 0.875rem | 400 | 0.01em | 1.5 |
| Overline | 12px / 0.75rem | 600 | 0.15em | 1.4 |

### Typography CSS Variables
```css
:root {
  --font-display: 'Oswald', sans-serif;
  --font-body: 'Work Sans', sans-serif;
}
```

---

## Color Palette

### Core Colors

| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| `--background` | 20 10% 8% | #171413 | Main background |
| `--background-elevated` | 20 10% 12% | #211e1c | Cards, modals |
| `--foreground` | 40 20% 90% | #e8e4df | Primary text |
| `--foreground-muted` | 40 10% 55% | #948d84 | Secondary text |

### Accent Colors

| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| `--primary` | 38 90% 55% | #f0a422 | Primary CTA, highlights |
| `--primary-hover` | 38 90% 45% | #c4870e | Hover states |
| `--rust` | 15 60% 35% | #8f4a2d | Secondary accent |
| `--leather` | 25 30% 20% | #423529 | Tertiary, borders |

### Neutral & Chrome

| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| `--chrome` | 220 10% 75% | #b8bcc4 | Metallic accents |
| `--chrome-dark` | 220 10% 45% | #686e78 | Muted chrome |
| `--cream` | 40 30% 92% | #f2ede4 | Light text on dark |
| `--border` | 20 10% 20% | #373230 | Dividers, borders |

### Gradients
```css
--gradient-hero: linear-gradient(180deg, hsl(20 10% 8% / 0.2) 0%, hsl(20 10% 8% / 0.95) 100%);
--gradient-card: linear-gradient(135deg, hsl(20 10% 14%) 0%, hsl(20 10% 10%) 100%);
--gradient-accent: linear-gradient(135deg, hsl(38 90% 55%) 0%, hsl(25 80% 45%) 100%);
--gradient-chrome: linear-gradient(180deg, hsl(220 10% 80%) 0%, hsl(220 10% 60%) 100%);
```

---

## Nordic Decorative Motifs

### Line Dividers

**Simple Horizontal Rule**
```
────────────────────────────────────────
```

**Double Line**
```
════════════════════════════════════════
────────────────────────────────────────
```

**Chevron Divider**
```
──────────◇◇◇──────────
```

**Arrow Motif**
```
─────────▸ ◆ ◂─────────
```

**Nordic Knot Divider**
```
────◈────◈────◈────◈────
```

### SVG Decorative Elements

**Corner Ornament (Top Left)**
```svg
<svg width="60" height="60" viewBox="0 0 60 60">
  <path d="M0 60 L0 20 L10 20 L10 10 L20 10 L20 0 L60 0"
        fill="none" stroke="currentColor" stroke-width="2"/>
</svg>
```

**Chevron Border Pattern**
```svg
<svg width="100" height="20" viewBox="0 0 100 20">
  <path d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10 L90 0 L100 10"
        fill="none" stroke="currentColor" stroke-width="1.5"/>
</svg>
```

**Diamond Chain**
```svg
<svg width="200" height="20" viewBox="0 0 200 20">
  <path d="M10 10 L20 0 L30 10 L20 20 Z M50 10 L60 0 L70 10 L60 20 Z M90 10 L100 0 L110 10 L100 20 Z"
        fill="none" stroke="currentColor" stroke-width="1.5"/>
</svg>
```

**Viking Compass Rose (Simple)**
```svg
<svg width="80" height="80" viewBox="0 0 80 80">
  <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M40 5 L40 75 M5 40 L75 40" stroke="currentColor" stroke-width="1.5"/>
  <path d="M15 15 L65 65 M65 15 L15 65" stroke="currentColor" stroke-width="1"/>
</svg>
```

### CSS Border Patterns
```css
/* Geometric corner clip */
.nordic-clip {
  clip-path: polygon(
    0 20px, 20px 20px, 20px 0,
    calc(100% - 20px) 0, calc(100% - 20px) 20px, 100% 20px,
    100% calc(100% - 20px), calc(100% - 20px) calc(100% - 20px), calc(100% - 20px) 100%,
    20px 100%, 20px calc(100% - 20px), 0 calc(100% - 20px)
  );
}

/* Double border effect */
.nordic-border {
  border: 1px solid var(--border);
  box-shadow: inset 0 0 0 4px var(--background), inset 0 0 0 5px var(--border);
}

/* Chevron background pattern */
.chevron-pattern {
  background-image: repeating-linear-gradient(
    120deg,
    transparent,
    transparent 10px,
    hsl(20 10% 15%) 10px,
    hsl(20 10% 15%) 11px
  );
}
```

---

## Website Sections

### 1. Hero Section

**Layout:** Full viewport height, centered content over background image

**Image Requirements:**
- **Style:** Dramatic, moody shot of a vintage big bike
- **Composition:** Bike positioned off-center (rule of thirds), low angle preferred
- **Lighting:** Golden hour, dramatic shadows, or studio with rim lighting
- **Dimensions:** 1920x1080 minimum, 2560x1440 recommended
- **Treatment:** Slight desaturation, warm tone overlay, film grain

**Content:**
- Large headline (H1) with brand name
- Tagline in body text
- Primary CTA button
- Nordic decorative corner elements

**Example Structure:**
```
┌─────────────────────────────────────────────────┐
│ ◢                                           ◣   │
│   [NAV]                                         │
│                                                 │
│                                                 │
│         STEEL STALLION                          │
│         ──────◇◇◇──────                         │
│         Vintage Iron. Modern Soul.              │
│                                                 │
│              [ EXPLORE FLEET ]                  │
│                                                 │
│                                                 │
│ ◥                                           ◤   │
└─────────────────────────────────────────────────┘
```

---

### 2. Heritage / Our Story Section

**Layout:** Split layout - image on one side, text on other

**Image Requirements:**
- **Style:** Workshop/garage atmosphere, craftsmanship focus
- **Composition:** Show hands working on bikes, tools, vintage workshop setting
- **Lighting:** Warm tungsten, natural window light
- **Dimensions:** 800x1000 (portrait) or 1200x800 (landscape)
- **Treatment:** High contrast, warm shadows, slight vignette

**Content:**
- Section overline: "OUR HERITAGE"
- H2 headline
- 2-3 paragraphs of story
- Optional timeline or key dates
- Nordic line divider between text blocks

**Example Structure:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│   ════════════════════════════════════════      │
│   OUR HERITAGE                                  │
│   ════════════════════════════════════════      │
│                                                 │
│   ┌──────────────┐    FORGED IN TRADITION       │
│   │              │    ─────────────────         │
│   │    IMAGE     │                              │
│   │   workshop   │    Lorem ipsum dolor sit     │
│   │              │    amet, consectetur...      │
│   │              │                              │
│   └──────────────┘    ────◈────◈────            │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### 3. Fleet / Collection Section

**Layout:** Grid gallery with filterable categories

**Image Requirements:**
- **Style:** Clean product shots of each motorcycle
- **Composition:** 3/4 angle view, consistent framing across all bikes
- **Background:** Neutral dark or gradient, no distractions
- **Dimensions:** 800x600 per card, 1600x1200 for detail view
- **Treatment:** High clarity, chrome highlights, subtle shadow beneath

**Content:**
- Section header with filter tabs
- Grid of bike cards (3-4 columns)
- Each card: Image, bike name, year, brief spec
- Hover state reveals CTA

**Example Structure:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│              THE FLEET                          │
│         ─────────▸ ◆ ◂─────────                 │
│                                                 │
│   [ALL]  [CRUISERS]  [TOURING]  [CLASSIC]       │
│                                                 │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐         │
│   │  BIKE   │  │  BIKE   │  │  BIKE   │         │
│   │  IMAGE  │  │  IMAGE  │  │  IMAGE  │         │
│   ├─────────┤  ├─────────┤  ├─────────┤         │
│   │ Name    │  │ Name    │  │ Name    │         │
│   │ 1972    │  │ 1985    │  │ 1968    │         │
│   └─────────┘  └─────────┘  └─────────┘         │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### 4. Craftsmanship / Services Section

**Layout:** Alternating image-text rows or icon grid

**Image Requirements:**
- **Style:** Close-up detail shots showing quality and precision
- **Composition:** Macro shots of chrome, leather, engine details, handwork
- **Lighting:** Dramatic side lighting to show texture
- **Dimensions:** 600x600 (square icons) or 1000x600 (feature images)
- **Treatment:** High contrast, sharp focus, warm highlights

**Services to Highlight:**
- Restoration
- Custom Builds
- Maintenance
- Parts & Accessories

**Example Structure:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│              CRAFTSMANSHIP                      │
│         ────────◇◇◇────────                     │
│                                                 │
│   ┌─────────────────────────────────────────┐   │
│   │                                         │   │
│   │    [ICON]     [ICON]     [ICON]         │   │
│   │   Restore    Custom    Maintain         │   │
│   │                                         │   │
│   └─────────────────────────────────────────┘   │
│                                                 │
│   ┌──────────┐   RESTORATION                    │
│   │  DETAIL  │   ────────────                   │
│   │  IMAGE   │   Every bolt, every bearing...   │
│   └──────────┘                                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### 5. Testimonials / Riders Section

**Layout:** Carousel or staggered cards

**Image Requirements:**
- **Style:** Portraits of riders with their bikes, lifestyle shots
- **Composition:** Environmental portraits, rider with bike in background
- **Mood:** Authentic, candid, community feel
- **Dimensions:** 400x400 (avatar), 800x500 (featured)
- **Treatment:** Warm tones, slight grain, natural feel

**Content:**
- Large quote marks as decorative element
- Customer testimonial text
- Name, location, bike owned
- Optional star rating

**Example Structure:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│              RIDERS SPEAK                       │
│         ═══════════════════                     │
│                                                 │
│       ┌─────────────────────────────┐           │
│       │    ❝                        │           │
│       │    These guys brought my    │           │
│       │    grandfather's Harley     │           │
│       │    back to life.            │           │
│       │                      ❞      │           │
│       │    ○ ── JOHN D.             │           │
│       │        Austin, TX           │           │
│       └─────────────────────────────┘           │
│                                                 │
│           ◄  ● ○ ○ ○  ►                         │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### 6. Contact / Visit Section

**Layout:** Split or overlay on map/location image

**Image Requirements:**
- **Style:** Exterior or interior shot of the shop/garage
- **Composition:** Welcoming entrance, signage visible, or moody interior
- **Lighting:** Warm interior glow, dusk exterior
- **Dimensions:** 1400x600 (banner) or full section background
- **Treatment:** Warm color grade, slight vignette

**Content:**
- Contact form (name, email, message)
- Address and hours
- Phone and email
- Map embed or stylized location graphic
- Social links with icons

**Example Structure:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│   VISIT THE GARAGE                              │
│   ─────────────────                             │
│                                                 │
│   ┌─────────────────┐   ┌───────────────────┐   │
│   │                 │   │ Name              │   │
│   │   MAP / IMAGE   │   │ ───────────────── │   │
│   │                 │   │ Email             │   │
│   │                 │   │ ───────────────── │   │
│   │   ◈ LOCATION    │   │ Message           │   │
│   │                 │   │                   │   │
│   └─────────────────┘   │ [ SEND MESSAGE ]  │   │
│                         └───────────────────┘   │
│                                                 │
│   123 Iron Horse Lane  │  Open Mon-Sat 9-6      │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### 7. Footer

**Layout:** Minimal, centered or multi-column

**Image Requirements:**
- **Logo:** SVG format, works on dark background
- **Optional:** Subtle texture or pattern background

**Content:**
- Logo
- Navigation links
- Social media icons
- Copyright text
- Nordic decorative divider above

**Example Structure:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│   ────────────◇◇◇────────────                   │
│                                                 │
│            ◆ STEEL STALLION ◆                   │
│                                                 │
│     Fleet  ·  Heritage  ·  Services  ·  Contact │
│                                                 │
│              [f] [ig] [yt]                      │
│                                                 │
│   ─────────────────────────────────────────     │
│        © 2024 Steel Stallion. All rights.       │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## UI Components

### Buttons

**Primary Button**
```css
.btn-primary {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 16px 32px;
  background: var(--primary);
  color: var(--background);
  border: none;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
}
```

**Secondary Button (Outlined)**
```css
.btn-secondary {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 14px 30px;
  background: transparent;
  color: var(--cream);
  border: 2px solid var(--cream);
  transition: all 0.3s ease;
}
.btn-secondary:hover {
  background: var(--cream);
  color: var(--background);
}
```

**Ghost Button**
```css
.btn-ghost {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 12px 24px;
  background: transparent;
  color: var(--primary);
  border: none;
  position: relative;
}
.btn-ghost::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 24px;
  right: 24px;
  height: 1px;
  background: var(--primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.btn-ghost:hover::after {
  transform: scaleX(1);
}
```

---

### Cards

**Bike Card**
```css
.bike-card {
  background: var(--gradient-card);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: all 0.4s ease;
}
.bike-card:hover {
  border-color: var(--primary);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px hsl(0 0% 0% / 0.4);
}
.bike-card-image {
  aspect-ratio: 4/3;
  object-fit: cover;
}
.bike-card-content {
  padding: 24px;
}
```

**Feature Card (with Nordic border)**
```css
.feature-card {
  background: var(--background-elevated);
  padding: 40px;
  border: 1px solid var(--border);
  position: relative;
}
.feature-card::before,
.feature-card::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  border-color: var(--primary);
  border-style: solid;
}
.feature-card::before {
  top: -1px;
  left: -1px;
  border-width: 2px 0 0 2px;
}
.feature-card::after {
  bottom: -1px;
  right: -1px;
  border-width: 0 2px 2px 0;
}
```

---

### Form Inputs

```css
.input {
  font-family: var(--font-body);
  font-size: 16px;
  padding: 16px 20px;
  background: var(--background);
  border: 1px solid var(--border);
  color: var(--foreground);
  transition: border-color 0.3s ease;
}
.input:focus {
  outline: none;
  border-color: var(--primary);
}
.input::placeholder {
  color: var(--foreground-muted);
}

.label {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--foreground-muted);
  margin-bottom: 8px;
}
```

---

### Navigation

```css
.nav {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.nav-link {
  color: var(--cream);
  padding: 8px 16px;
  position: relative;
  transition: color 0.3s ease;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}
.nav-link:hover {
  color: var(--primary);
}
.nav-link:hover::after {
  width: 100%;
}
```

---

## Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight spacing |
| `--space-sm` | 8px | Icon gaps |
| `--space-md` | 16px | Component padding |
| `--space-lg` | 24px | Card padding |
| `--space-xl` | 32px | Section gaps |
| `--space-2xl` | 48px | Major sections |
| `--space-3xl` | 64px | Hero spacing |
| `--space-4xl` | 96px | Section padding (top/bottom) |
| `--space-5xl` | 128px | Large section padding |

### Section Padding
```css
.section {
  padding: var(--space-5xl) var(--space-lg);
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-4xl) var(--space-md);
  }
}
```

### Container
```css
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}
```

---

## Effects & Animations

### Grain Texture Overlay
```css
.grain::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  z-index: 1;
}
```

### Chrome Shimmer
```css
.chrome-shimmer {
  background: linear-gradient(
    90deg,
    var(--chrome-dark) 0%,
    var(--chrome) 50%,
    var(--chrome-dark) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 3s infinite linear;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### Fade Up Animation
```css
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease-out forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Image Treatment Guidelines

### General Filters
```css
/* Vintage warm filter */
.img-vintage {
  filter: sepia(10%) saturate(90%) contrast(105%);
}

/* Desaturated moody */
.img-moody {
  filter: saturate(80%) contrast(110%) brightness(95%);
}

/* Chrome highlight */
.img-chrome {
  filter: contrast(115%) brightness(105%);
}
```

### Image Sizes Summary

| Section | Dimensions | Aspect Ratio |
|---------|-----------|--------------|
| Hero Background | 2560x1440 | 16:9 |
| Heritage Feature | 1200x800 | 3:2 |
| Fleet Cards | 800x600 | 4:3 |
| Craftsmanship Detail | 600x600 | 1:1 |
| Testimonial Avatar | 400x400 | 1:1 |
| Contact Banner | 1400x600 | 7:3 |

---

## Tailwind Config Additions

```js
// tailwind.config.ts
{
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Work Sans', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: 'hsl(20 10% 8%)',
          elevated: 'hsl(20 10% 12%)',
        },
        foreground: {
          DEFAULT: 'hsl(40 20% 90%)',
          muted: 'hsl(40 10% 55%)',
        },
        primary: {
          DEFAULT: 'hsl(38 90% 55%)',
          hover: 'hsl(38 90% 45%)',
        },
        rust: 'hsl(15 60% 35%)',
        leather: 'hsl(25 30% 20%)',
        chrome: {
          DEFAULT: 'hsl(220 10% 75%)',
          dark: 'hsl(220 10% 45%)',
        },
        cream: 'hsl(40 30% 92%)',
      },
    },
  },
}
```

---

*Last updated: 2024*
