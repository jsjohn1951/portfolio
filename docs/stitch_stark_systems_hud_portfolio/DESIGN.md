---
name: Tactical Systems Interface
colors:
  surface: '#10131c'
  surface-dim: '#10131c'
  surface-bright: '#363943'
  surface-container-lowest: '#0b0e16'
  surface-container-low: '#191b24'
  surface-container: '#1d1f28'
  surface-container-high: '#272a33'
  surface-container-highest: '#32343e'
  on-surface: '#e1e2ee'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e1e2ee'
  inverse-on-surface: '#2e303a'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ffcf90'
  on-secondary: '#452b00'
  secondary-container: '#ffaa00'
  on-secondary-container: '#694300'
  tertiary: '#fff3f2'
  on-tertiary: '#680008'
  tertiary-container: '#ffcec9'
  on-tertiary-container: '#c00119'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffddb4'
  secondary-fixed-dim: '#ffb952'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#633f00'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#930010'
  background: '#10131c'
  on-background: '#e1e2ee'
  surface-variant: '#32343e'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.1em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  body-fixed:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-code:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.15em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.05em
spacing:
  grid-unit: 4px
  gutter: 16px
  margin-edge: 32px
  container-max: 1440px
---

## Brand & Style

This design system is engineered for high-performance developer portfolios, drawing inspiration from advanced tactical head-up displays (HUD) and aerospace command centers. The personality is hyper-technical, precise, and authoritative, positioning the developer as a systems architect working at the edge of future technology.

The aesthetic blends **Retro-Futurism** with **Glassmorphism** and **Brutalism**. It utilizes high-frequency visual data, thin vector lines, and glowing interactive elements to create a sense of real-time telemetry. Every pixel serves a functional purpose, evoking the feeling of a sophisticated "Systems Core" where information density is a feature, not a flaw.

## Colors

The palette is anchored in a deep-space slate-black to ensure maximum contrast for holographic elements. 

- **Primary (Holographic Cyan):** Reserved for active states, data streams, and primary interactive nodes. It should possess a subtle outer glow (bloom effect).
- **Secondary (Stark Amber):** Used for warnings, technical annotations, and secondary metrics.
- **Tertiary (Stark Red):** Critical errors, destructive actions, and system overrides.
- **Neutral:** A deep base (#05070f) with layered transparencies to create a sense of physical depth within the digital vacuum.

## Typography

The typographic system prioritizes technical legibility and a "machine-read" aesthetic. 

Headlines utilize **Space Grotesk** in all-caps to maintain a geometric, structured feel. Body copy and technical readouts use **JetBrains Mono**, providing a developer-centric atmosphere and perfect alignment for data tables. All labels and metadata use **Space Mono** with increased letter spacing to mimic serial numbers and tactical coordinates. 

Standardize on uppercase for all UI triggers (buttons, tabs, navigation) to reinforce the HUD command structure.

## Layout & Spacing

This design system employs a **Fluid Vector Grid**. Layouts are structured on a 4px baseline shift to ensure all elements align perfectly with the background grid texture.

- **Desktop:** 12-column grid with 16px gutters. Sections are separated by thin (1px) Cyan lines with "corner bracket" accents.
- **Data Density:** Use tight padding (8px - 12px) for telemetry widgets to maximize information visibility.
- **Adaptive Reflow:** On mobile, columns collapse into a single vertical stack, but the "bracket" aesthetic remains, framing the screen as a handheld scanner.

## Elevation & Depth

Depth is conveyed through **Holographic Layering** rather than traditional shadows.

1.  **Base Layer:** The #05070f background with a faint 20px dot-grid pattern in 5% opacity Cyan.
2.  **Mid Layer (Plates):** Glassmorphic surfaces with a 10px backdrop blur and 1px borders (#ffffff at 10% opacity).
3.  **Active Layer (Interactive):** Elements that "pop" using a 0 0 15px Cyan glow (bloom) instead of a black shadow.
4.  **Overlay Layer:** Floating status bars and flickering "scanned" textures that sit at the highest Z-index.

## Shapes

The shape language is strictly **Sharp (0px)**. 

To avoid a dated look, use "clipped corners" (dog-ear folds) on cards and buttons. This is achieved via CSS `clip-path` rather than border-radius. Borders should be 1px wide; occasionally use "stutter lines" (dashed borders) for non-interactive decorative elements or data containers.

## Components

- **Tactical Buttons:** Rectangular, sharp corners. Default state: 1px Cyan border, no fill. Hover state: Cyan fill with black text and a "glitch" chromatic aberration transition.
- **Telemetry Cards:** Containers for project stats. Must include "Corner Brackets" and a small "X-Y Coordinate" label in the top-right corner.
- **Data Visualization:** Line charts should use the Primary Cyan with a gradient area fill (Cyan to transparent). Use "Crosshair" cursors for interaction.
- **Input Fields:** Bottom-border only, or a full border with a 45-degree clipped corner. Text appears with a subtle "typewriter" delay.
- **Status Chips:** Small, rectangular tags. "ONLINE" (Cyan), "STANDBY" (Amber), "CRITICAL" (Red). 
- **The System Header:** A persistent thin bar at the top displaying "SYSTEM TIME", "LATENCY", and "CORE TEMP" to enhance the immersive HUD experience.