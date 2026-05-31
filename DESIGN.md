---
name: Elite Technical Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444651'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#5d0004'
  on-tertiary: '#ffffff'
  tertiary-container: '#87000a'
  on-tertiary-container: '#ff8b80'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000b'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  max-width: 1440px
  gutter: 32px
  margin: 64px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
  section-padding: 120px
---

## Brand & Style

This design system is built to convey absolute authority and technical mastery in the professional leak detection industry. The visual language balances **Corporate Modernism** with high-performance utility, establishing immediate trust for high-stakes residential and commercial plumbing emergencies.

The aesthetic is "Elite Technical," characterized by expansive whitespace, rigid alignment, and high-impact geometric typography. It avoids the cluttered "handyman" look in favor of a sophisticated, surgical precision that justifies premium pricing. The emotional response should be one of immediate relief and confidence—moving the user from the chaos of a leak to the structured calm of a professional solution.

## Colors

The palette is anchored by **Deep Corporate Blue**, representing stability and institutional trust. **Clean Aqua** serves as the functional accent, symbolizing water management and modern technology. **Urgency Red** is reserved strictly for high-priority alerts, leak warnings, and critical calls-to-action.

- **Primary (#1E3A8A):** Use for headers, primary buttons, and authoritative backgrounds.
- **Secondary (#0EA5E9):** Use for interactive elements, focus states, and iconography related to "solutions."
- **Tertiary (#DC2626):** Use sparingly for emergency service buttons and critical status indicators.
- **Neutral (#FFFFFF):** The canvas. This design system relies on a high-white environment to feel "clean" and sterile, reflecting the quality of the service.

## Typography

The design system utilizes **Montserrat** exclusively to achieve a bold, geometric, and architectural feel. 

**Headlines** must be set in "Black" (900 weight) with tight letter spacing to create a sense of density and impact. This communicates the "heavyweight" capability of the service. 

**Body copy** uses generous line heights (1.6) to maintain readability against the bold headlines. **Labels** are always uppercase with increased tracking to provide a technical, "blueprinted" feel to the interface.

## Layout & Spacing

The layout philosophy follows a **Wide Fixed Grid** model, optimized for high-resolution displays to emphasize the "elite" scale of the brand.

- **Grid:** A 12-column grid with a maximum width of 1440px. 
- **Margins:** Large 64px external margins provide significant "breathing room," preventing the UI from feeling cramped.
- **Section Spacing:** Generous vertical padding (120px+) between sections to enforce a premium, uncluttered experience.
- **Responsiveness:** On mobile, margins reduce to 20px, and section padding scales down to 60px. 12 columns collapse to a single column for content, while utility bars remain fixed for immediate contact.

## Elevation & Depth

To maintain a crisp, corporate look, this design system uses **Low-Contrast Outlines** and **Ambient Shadows**. 

Depth is not achieved through heavy gradients, but through subtle layering:
- **Base Layer:** Pure White (#FFFFFF).
- **Mid Layer (Cards/Panels):** Pure White with a 1px border (#E2E8F0) and an ultra-soft, diffused shadow (0px 10px 30px rgba(30, 58, 138, 0.05)).
- **Top Layer (Modals/Popovers):** Deep Blue borders with a more pronounced elevation to draw focus.

The goal is a "flat-plus" look where shadows are felt rather than seen, ensuring the interface feels light and modern.

## Shapes

The shape language is disciplined and consistent. All interactive elements use **Rounded Level 2 (0.5rem)** to provide a professional yet approachable feel. 

- **Cards and Containers:** Use `rounded-xl` (1.5rem) to soften the large grid sections.
- **Buttons and Inputs:** Use `rounded-lg` (1.0rem) to create a distinct, modern silhouette.
- **Icon Containers:** Use strict circles or 0.5rem rounded squares to maintain a technical appearance.

## Components

### Buttons
- **Primary:** Deep Blue background, White text. High contrast. 
- **Urgency/Emergency:** Urgency Red background. Reserved for "Call Now" or "Report Leak."
- **Interaction:** On hover, buttons should scale smoothly (1.02x) with a transition duration of 200ms.
- **Style:** `rounded-lg`, uppercase `label-md` typography.

### Input Fields
- **Default:** White background with a 1px crisp border (#CBD5E1). 
- **Focus State:** Border transitions to Aqua Blue (#0EA5E9) with a 2px stroke. No "glow" effects—just clean, sharp lines.
- **Labels:** Positioned strictly above the field using `label-md` style.

### Cards
- **Structure:** White background, subtle ambient shadow, and a 1px border. 
- **Padding:** Internal padding should be generous (32px or 48px) to match the layout's spacious philosophy.

### Progress Indicators
- For "Leak Detection" steps, use Aqua Blue lines and dots to represent a fluid, technical process.

### Chips/Status Badges
- Small, uppercase, with high-contrast backgrounds (e.g., a "Detected" status in Aqua Blue or an "Emergency" status in Urgency Red).