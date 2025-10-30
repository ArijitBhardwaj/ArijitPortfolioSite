# Design Guidelines: Arijit Bhardwaj Personal Portfolio

## Design Approach
**Reference-Based Design** inspired by knowprabhjyot.github.io's modern developer portfolio aesthetic, adapted for Arijit's full-stack development profile with emphasis on clean layouts, professional presentation, and technical credibility.

## Core Design Principles
1. **Professional Developer Aesthetic**: Clean, modern interface showcasing technical expertise
2. **Sidebar Navigation Pattern**: Persistent left sidebar with profile information and main content area
3. **Dual Theme System**: Seamless dark/light mode toggle throughout all pages
4. **Content-First Layout**: Typography and whitespace drive hierarchy and readability

## Typography System

**Font Families**
- Primary: 'Inter' or 'Poppins' from Google Fonts for all UI text
- Code/Technical: 'JetBrains Mono' or 'Fira Code' for tech stack tags

**Type Scale**
- Hero Headings: text-5xl to text-6xl, font-bold (48-60px)
- Section Headings: text-3xl to text-4xl, font-semibold (30-36px)
- Subsection Headings: text-xl to text-2xl, font-medium (20-24px)
- Body Text: text-base, font-normal (16px), leading-relaxed
- Small Text: text-sm (14px) for metadata and labels
- Profile Name in Sidebar: text-2xl, font-bold

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Section vertical spacing: py-16 to py-24
- Component gaps: gap-6 to gap-8
- Card padding: p-6 to p-8
- Sidebar padding: p-6

**Grid Structure**
- Fixed Sidebar: w-72 to w-80 (288-320px) on desktop, full-height, fixed position
- Main Content Area: ml-72 to ml-80 (matching sidebar width), full viewport height scrollable
- Mobile: Sidebar collapses to hamburger menu, main content uses full width
- Content max-width: max-w-6xl for main content sections

**Responsive Breakpoints**
- Desktop: Sidebar + content (≥1024px)
- Tablet: Collapsible sidebar (768-1023px)
- Mobile: Hamburger menu, stacked layout (<768px)

## Component Library

### Navigation Sidebar
**Structure**: Fixed left sidebar spanning full viewport height
- Profile photo at top: rounded-full, w-32 h-32, with subtle border
- Name and title below photo, centered
- Location and age metadata: text-sm
- Navigation menu items: py-3 px-4, hover states with transition
- Skill progress bars: h-2 rounded-full, animated on load
- Social media icons at bottom: w-6 h-6, horizontal row with gap-4

**States**: Active nav item has accent underline or background, hover brightens text

### Hero Sections
**Home Hero**: Full-height (min-h-screen) with layered mountain/landscape SVG background
- Profile image overlay: Large circular (w-48 to w-64), positioned center or offset
- Dynamic tagline animation: "Full Stack Developer" with typing or fade effect
- CTA buttons: "View Projects" and "Contact Me" with gap-4, blur backdrop

**About Hero**: Banner height (h-64 to h-80) with gradient or abstract pattern
- Heading overlay: "Technology Enthusiast" or "Innovation Builder"
- Blur backdrop for text readability

### Statistics Cards
**Layout**: Grid of 4 cards (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Card structure: Rounded corners (rounded-xl), padding p-6
- Icon at top: w-12 h-12 in accent tone
- Large number: text-4xl font-bold
- Label below: text-sm uppercase tracking-wide
- Hover effect: Subtle scale and shadow increase

### Skill Cards
**Layout**: Grid of 6 cards (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Card height: min-h-48 for consistency
- Icon/illustration at top: w-16 h-16
- Skill category heading: text-xl font-semibold
- Technology list: flex flex-wrap gap-2 with pill-shaped tags
- Tag styling: px-3 py-1, rounded-full, text-xs font-medium

### Project Cards
**Layout**: Grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Card aspect: Vertical with project image at top (aspect-video)
- Image overlay with gradient for text readability
- Project title: text-xl font-bold
- Tech stack: flex flex-wrap gap-2, pill tags below description
- Description: text-sm, line-clamp-3
- Action buttons: "GitHub" and "Live Demo" horizontally aligned at bottom, gap-3

### Timeline Component
**Structure**: Vertical timeline with left-aligned markers
- Timeline line: Vertical border-l-2, connecting all entries
- Timeline nodes: Circle markers (w-4 h-4 rounded-full) at each entry
- Content cards: ml-8 from timeline, p-6 rounded-lg
- Date range: text-sm font-medium above company/institution
- Role/degree: text-lg font-semibold
- Bullet points: ml-4 with custom disc markers
- "Work Samples" button at bottom of each entry

### Contact Form
**Layout**: Single column form with generous spacing
- Input fields: Full width, h-12, rounded-lg, px-4, border focus states
- Grid for name fields: grid-cols-1 md:grid-cols-2 gap-4
- Textarea: h-32 for message field
- Labels: text-sm font-medium mb-2
- Submit button: Full width or aligned right, h-12, rounded-lg
- Contact info cards above form: Grid of 3 (Email, Phone, Location) with icons

### Theme Toggle
**Position**: Top right of sidebar or main content header
- Button: w-10 h-10 rounded-full with icon
- Smooth transition on all theme-dependent properties (transition-colors duration-200)
- Sun/Moon icon swap with rotation animation

## Animations
**Minimal & Purposeful**
- Page transitions: Fade in with slight y-axis movement (duration-300)
- Hover states: Scale (scale-105) and shadow changes (duration-200)
- Skill bars: Animate width on scroll-into-view (duration-1000 ease-out)
- Theme toggle: Rotate icon 180deg (duration-300)
- Navigation: Smooth scroll behavior
- No parallax, no continuous animations

## Images

### Hero Image Requirements
**Home Page Hero**: Full-width layered mountain/landscape illustration or abstract geometric pattern as background
- Style: SVG-based or subtle gradient with geometric shapes
- Overlay: Semi-transparent gradient for text readability
- Profile Photo Integration: Large circular profile photo (w-48 to w-64) positioned center-right or floating above landscape

**About Page Hero**: Banner-height (h-64 to h-80) abstract pattern or gradient
- Less prominent than home hero
- Supports overlaid text with blur backdrop

### Project Images
**Required for Each Project**: Project thumbnail/screenshot (aspect-video ratio)
- Proactivly: Dashboard or chatbot interface screenshot
- Fursight: Content generation interface or analytics view
- AR Furniture: AR placement demo on mobile device
- NaviGo: Indoor navigation map with route visualization
- Collaborative Notes: Real-time editing interface
- Additional projects as needed

### Icon Strategy
Use **Heroicons** (outline and solid variants) via CDN for all interface icons throughout the application

## Accessibility
- Focus states: ring-2 ring-offset-2 on all interactive elements
- Color contrast: WCAG AA minimum for all text
- Keyboard navigation: Full support with visible focus indicators
- ARIA labels: All icon-only buttons and navigation elements
- Alt text: Descriptive text for all images including project screenshots