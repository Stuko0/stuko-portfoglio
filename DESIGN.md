---
version: alpha
name: The Illustrated Down
description: >
  Alice in Wonderland as an 1865 illustrated book: parchment ground, engraving
  ink, Queen-of-Hearts crimson, paper-cutout layers with real depth. Tenniel
  line art, playing-card faces, vorpal steel. Dark gothic replaced by the
  paper world of the Alice Madness Returns cinematics.

colors:
  primary: "#201A14"
  secondary: "#5C5145"
  tertiary: "#8E1B1E"
  neutral: "#F4EDDC"
  paper: "#FBF7EC"
  parchment-deep: "#E8DDC6"
  ink-faint: "#6E6253"
  crimson: "#B3231F"
  brass: "#8F6E23"
  steel: "#5B6B78"

typography:
  # Fluid clamps in the CSS resolve to these ramp endpoints.
  display-1-sm:
    fontFamily: Bodoni Moda
    fontSize: 5.6rem
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  display-2:
    fontFamily: Bodoni Moda
    fontSize: 9.6rem
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  h1:
    fontFamily: Bodoni Moda
    fontSize: 6.4rem
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  h1-sm:
    fontFamily: Bodoni Moda
    fontSize: 3.6rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Bodoni Moda
    fontSize: 4.8rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  h2-sm:
    fontFamily: Bodoni Moda
    fontSize: 3.2rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  h3:
    fontFamily: Bodoni Moda
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  h3-sm:
    fontFamily: Bodoni Moda
    fontSize: 2.8rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  h4:
    fontFamily: Bodoni Moda
    fontSize: 2.4rem
    fontWeight: 600
    lineHeight: 1.3
  h5:
    fontFamily: Bodoni Moda
    fontSize: 2.2rem
    fontWeight: 600
    lineHeight: 1.3
  h6:
    fontFamily: EB Garamond
    fontSize: 2rem
    fontWeight: 500
    lineHeight: 1.3
  num-xl:
    fontFamily: Bodoni Moda
    fontSize: 7.2rem
    fontWeight: 700
    lineHeight: 1
  num-md:
    fontFamily: Bodoni Moda
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1
  watermark:
    fontFamily: Bodoni Moda
    fontSize: 16rem
    fontWeight: 700
    lineHeight: 1
  sub-heading:
    fontFamily: EB Garamond
    fontSize: 2rem
    fontWeight: 500
    lineHeight: 1.4
  body-md:
    fontFamily: EB Garamond
    fontSize: 1.8rem
    fontWeight: 400
    lineHeight: 1.6
  body-compact:
    fontFamily: EB Garamond
    fontSize: 1.7rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: EB Garamond
    fontSize: 1.6rem
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: EB Garamond
    fontSize: 1.5rem
    fontWeight: 400
    lineHeight: 1.5
  meta:
    fontFamily: EB Garamond
    fontSize: 1.4rem
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: IM Fell English SC
    fontSize: 1.3rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
  caption:
    fontFamily: IM Fell English SC
    fontSize: 1.2rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.1em"
  caption-xs:
    fontFamily: IM Fell English SC
    fontSize: 1.1rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.12em"
  micro:
    fontFamily: IM Fell English SC
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.08em"
  flourish:
    fontFamily: IM Fell English SC
    fontSize: 0.9rem
    fontWeight: 400
    lineHeight: 1

rounded:
  sm: 4px
  md: 8px
  lg: 999px

spacing:
  sm: 8px
  md: 16px
  lg: 24px

components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-secondary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 14px
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 24px
  card-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.md}"
    padding: 24px
  chip:
    backgroundColor: "{colors.parchment-deep}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.lg}"
    padding: 8px
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px
  input-focus:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.sm}"
    padding: 12px
  caption:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink-faint}"
    padding: 8px
  suit-mark:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.crimson}"
    padding: 8px
  ornament-rule:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.brass}"
    padding: 4px
  link-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.steel}"
    padding: 8px
---

## Overview

The Illustrated Down is the visual world of stuko.dev: Lewis Carroll's Alice
as it exists in the Alice Madness Returns cinematics, read through John
Tenniel's 1865 wood-engraving plates. The site is a sheet of aged paper on
which ink drawings, playing cards, and cut-paper layers are arranged. Crimson
carries every interaction (the Queen of Hearts); brass is ornament only; cold
steel marks the vorpal moments.

Design dials: DESIGN_VARIANCE 8, MOTION_INTENSITY 6, VISUAL_DENSITY 3.

## Colors

- **Primary (#201A14):** engraving ink. Headings, body text, hairline rules.
  Never pure black; the ink is brown-warm like a 19th-century impression.
- **Secondary (#5C5145):** diluted ink for supporting copy (6.6:1 on neutral).
- **Tertiary (#8E1B1E):** Queen crimson. The single interaction driver: links,
  focus rings, active states, primary buttons, hover accents.
- **Neutral (#F4EDDC):** parchment ground. The whole page sits on it; no
  section inverts to dark.
- **Paper (#FBF7EC):** elevated sheets (cards, pricing decrees, inputs).
  Depth comes from paper-on-parchment plus a soft layered shadow, never from
  dark surfaces.
- **Parchment-deep (#E8DDC6):** recessed bands and chip backgrounds.
- **Ink-faint (#6E6253):** meta text: dates, captions, timestamps (5.1:1).
- **Crimson (#B3231F):** vivid red for suits (hearts, diamonds) and large
  decorative marks; not for small text.
- **Brass (#8F6E23):** antique rules, ornaments, dividers. Decorative only;
  4.1:1 means never use it for text under 18px.
- **Steel (#5B6B78):** vorpal accent: the sword, secondary links, cool marks
  (4.7:1, safe for text).

## Typography

Three faces, one per print-shop role:

- **Bodoni Moda** (display): Victorian title-page Didone. All headings and
  large numerals. Fluid sizes via clamp; h1 caps at 6.4rem on desktop.
  Tracking floor -0.04em; never tighter.
- **EB Garamond** (body): the book face. Paragraphs, lists, form text at
  1.6-1.8rem, line-height 1.6, measure 60-70ch.
- **IM Fell English SC** (labels): letterpress capitals for small caps
  labels, card indices, nav tooltips, section labels with 0.14em tracking.

Italic emphasis lives in Bodoni Moda italic (crimson) or IM Fell English
italic (decrees and pull quotes). Never mix families inside one headline.

## Layout

- Single column of paper: `--container: 1440px`, content column max 58%,
  right-aligned; the left half of the hero belongs to the paper-cut diorama.
- Section rhythm: `--section-pad: clamp(5rem, 10vw, 8rem)`. More space above
  a heading than below it.
- Section transitions are engraved flourishes (SVG), not colored bands. One
  theme, light, locked for the whole page.
- Grids: works as a 2/3-column card grid (auto-fill, min 320px); dense
  lists as hairline-divided rows.

## Elevation & Depth

Paper has thickness. Every raised element casts a two-part shadow: a tight
contact shadow plus a soft ambient one, tinted with ink, never pure black:

`box-shadow: 0 1px 2px rgba(32,26,20,.10), 0 12px 28px rgba(32,26,20,.12)`

Cut-paper layers (hero diorama) stack 3 deep with larger offsets and a
1px light edge on top, so each layer reads as a physical cutout. No neon
glows, no glassmorphism, no zero-blur offset blocks.

## Shapes

Documented radius rule, applied everywhere:

- **sm 4px:** buttons, inputs, small controls.
- **md 8px:** cards, sheets, decrees (playing-card corner).
- **lg 999px:** chips, tags, tabs, nav pill.

Hairlines are 1px ink at 12-16% opacity. Double-rule frames (1px + inset
1px) mark decree-like surfaces (pricing, contact).

## Components

- **Primary button:** crimson fill, parchment label, 4px radius; hover
  inverts to ink fill. Focus: 2px crimson ring, 3px offset.
- **Secondary button:** paper fill, ink label, ink hairline; hover fills
  crimson with parchment label.
- **Royal card (play):** paper face, 8px radius, ink hairline double keyline,
  rank index + suit in opposite corners (Bodoni index, crimson or ink suit),
  category label in IM Fell caps, title in Bodoni, blurb in Garamond. Hover:
  lifts 6px with the layered paper shadow and a 1.5deg tilt.
- **Decree panel:** paper sheet with inset double rule and a brass ornament
  at the head (pricing, contact).
- **Chip:** parchment-deep fill, secondary label; active chip fills crimson.
- **Section label:** IM Fell caps, ink-faint, led by a small crimson
  lozenge. At most one per three sections.

## Do's and Don'ts

- DO keep one light parchment theme across the entire page; no section flips
  dark "for contrast".
- DO use crimson as the only interaction color. Brass stays decorative.
- DO cast tinted, two-part shadows on anything raised.
- DO honor prefers-reduced-motion: parallax, marquee, petals, and reveals
  collapse to static.
- DON'T use gradient text, neon glows, or pure black/white.
- DON'T put brass under 18px text (4.1:1 fails AA); use ink-faint or
  secondary instead.
- DON'T hand-draw ad-hoc icons: suits, flourish, sword, and watch are the
  authored SVG set; everything else is typography.
- DON'T add eyebrows above more than one heading in three sections.
