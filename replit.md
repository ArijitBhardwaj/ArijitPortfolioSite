# Arijit Bhardwaj Portfolio

## Overview

This is a personal portfolio website for Arijit Bhardwaj, a Full Stack Developer based in Vancouver, BC, showcasing expertise in React, TypeScript, Node.js, and XR technologies. The application features a modern, professional design inspired by knowprabhjyot.github.io with a dark theme, golden-yellow accents (HSL 45 95% 50%), and persistent sidebar navigation.

The portfolio is built as a full-stack application with a React frontend and Express backend, designed to present professional credentials and enable visitor engagement through a contact form.

## Recent Changes (October 30, 2025)

**Latest Image Integration Update:**
- ✅ **Integrated user profile photos** - Personal photos now displayed throughout portfolio:
  * Sidebar avatar: User-provided profile photo (linkin..myb_1761849483072.png) in circular frame with primary border
  * Hero section: Outdoor professional photo (image_1761849584907.png) positioned top-right with left-aligned text
  * Hero redesigned: Photo in top-right corner (128px mobile, 192px desktop) with "You Know I Got This!" text left-aligned
- ✅ **Added stock images to all 10 portfolio projects** - Each project card now displays relevant imagery:
  * Proactivly: AI chatbot business planning image
  * Fursight: E-commerce content creation image
  * AR Furniture Showcase: Augmented reality furniture placement image
  * NaviGo: Indoor navigation wayfinding image
  * Collaborative Notes: Real-time collaboration workspace image
  * Virtual Reality Industrial Training: VR headset training simulation image
  * OverRun Android Game: Mobile game runner gameplay image
  * AR Business Card: AR business card technology image
  * Posting App: Social media app mobile interface image
  * Word Saber VR: VR education game learning image
- ✅ **Updated project title** - "Virtual Reality - Training" renamed to "Virtual Reality Industrial Training"
- ✅ **Enhanced portfolio card interactions** - Images scale on hover (transform: scale(1.05)) with smooth transitions
- ✅ **Comprehensive E2E testing passed** - Verified all images display correctly on desktop and mobile

**Previous Complete Redesign - Matching Reference Site (knowprabhjyot.github.io):**
- ✅ **Further reduced hero section** - Now 45vh (down from 60vh) ensuring "My Skill Set" visible without scrolling
  * Compact text sizing: heading text-2xl md:text-4xl, subtitle text-sm md:text-base
- ✅ **Updated stats section** - Reduced to 3 cards with correct values:
  * Industry Experience: 4+ (updated from 5+)
  * Completed Projects: 10+ (unchanged)
  * Companies Worked: 3+ (updated from 8+)
  * Removed "Years Teaching" stat
  * Reduced padding to py-8 for compact design matching reference
- ✅ **Enlarged portfolio cards** - Bigger, more prominent cards matching reference design:
  * Changed to 2-column grid on desktop (was 3-column)
  * Larger aspect ratio: 4:3 (was 16:9)
  * Increased padding: p-8 (was p-6)
  * Larger fonts: titles text-xl md:text-2xl, descriptions text-base
  * Bigger spacing: gap-8 md:gap-10 lg:gap-12
  * Enhanced icon letters: text-7xl md:text-8xl
- ✅ **About page styling matched to reference**:
  * Updated hobbies: "Reading", "Researching", "Travel", "Binge Watch"
  * Hobby badges now rounded buttons with border-2 border-primary
  * Larger body text: text-base md:text-lg
  * Content updated to match reference personality
- ✅ **Added smooth scroll-to-top button** - Bottom-right corner, animated smooth scroll (not instant jump)
- ✅ **Contact page verified** - Already matches reference with 3 info cards and form
- ✅ **Added Resume tab and PDF viewer** - Professional resume display with download option
  * New Resume page at /resume route
  * Embedded PDF viewer in iframe
  * Download button with icon
  * RESUME tab in navigation (5th tab)

**Previous Enhancements:**
- ✅ **Added 4 new projects** - Total 10 projects now showcased:
  * OverRun Android Game (Java, Android SDK, SQLite)
  * AR Business Card (Unity, AR Foundation, Vuforia)
  * Posting App - Threads Clone (React, Node.js, MongoDB)
  * Word Saber VR (Unity, C#, VR SDK, Oculus)
- ✅ **Added subtle animations** - Fade-in and stagger effects on all sections following industry best practices
- ✅ **Improved hover effects** - Project cards with gradient intensification, icon scaling, and smooth transitions

**Previous Updates:**
- ✅ Changed sidebar from fixed to natural scrolling - scrolls with page content
- ✅ Replaced "Movie Explorer" with "Virtual Reality - Training" project in portfolio
- ✅ Updated profile information: Residence "Canada", City "Vancouver, BC", Age "28 years"
- ✅ Removed internal scrollbars from skills section - natural page scrolling enabled
- ✅ All changes tested and verified on desktop and mobile

**Major Redesign Completed** - Matching knowprabhjyot.github.io reference design:
- ✅ Navigation tabs moved to horizontal header with golden-yellow border styling
- ✅ Theme toggle relocated to top-right corner of main content area
- ✅ Sidebar redesigned to contain only profile, skills bars, and social icons
- ✅ Alternating left-right timeline on About page (desktop), stacked on mobile
- ✅ Education entry updated to "Graduated 2020"
- ✅ Portfolio 2-column grid with "Github URL" text links and "Preview" buttons
- ✅ Fully responsive mobile experience with horizontal scrolling navigation
- ✅ Comprehensive E2E testing passed for all features and breakpoints

**Design Implementation:**
- Dark/light theme toggle with golden-yellow accent color (HSL 45 95% 50%)
- Horizontal navigation tabs at top with golden borders for active state
- Poppins font for UI, JetBrains Mono for code/tech elements
- Responsive sidebar (256px desktop, collapsible on mobile)
- Alternating timeline layout with center line on desktop
- 2-column portfolio grid on desktop, single column on mobile
- Clean skills section without internal scrollbars for better UX

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Wouter for lightweight client-side routing (alternative to React Router)

**UI Component System**
- shadcn/ui component library (New York style variant) built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management
- Custom theme system supporting dark/light modes with CSS variables

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management, caching, and API requests
- React Hook Form with Zod validation for form state and validation
- Context API for theme management

**Design System**
- Typography: Poppins for UI text, JetBrains Mono for code/tech tags
- Responsive breakpoints: Mobile (<768px), Tablet (768-1023px), Desktop (≥1024px)
- Shadcn sidebar implementation (320px width) with mobile responsiveness via SidebarProvider
- Consistent spacing using Tailwind's spacing scale
- Custom color system: Primary golden-yellow (HSL 45 95% 50%) with dark theme default
- All data-testid attributes follow unique naming convention for E2E testing

### Backend Architecture

**Server Framework**
- Express.js with TypeScript running on Node.js
- ES modules (type: "module") for modern JavaScript imports
- Custom middleware for request logging and JSON body parsing

**API Design**
- RESTful endpoints under `/api` namespace
- Contact form submission endpoint (`POST /api/contact`)
- Contact submission retrieval endpoint (`GET /api/contact`)
- Validation using Zod schemas shared between frontend and backend

**Data Storage Strategy**
- In-memory storage (MemStorage class) for contact form submissions in development
- Drizzle ORM configured for PostgreSQL (production-ready schema defined)
- Schema defines contact_submissions table with fields: id, firstName, lastName, email, contactNumber, message, createdAt
- Storage interface pattern allows easy swapping between in-memory and database implementations

**Development & Production Workflow**
- Vite middleware integration in development for seamless SSR and HMR
- Separate build process: Vite for frontend, esbuild for backend
- Static file serving in production from dist/public
- Environment-based configuration (NODE_ENV checks)

### External Dependencies

**UI Component Libraries**
- @radix-ui/* packages (v1.x-v2.x): Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu, Navigation Menu, Popover, Radio Group, Scroll Area, Select, Separator, Sidebar, Slider, Switch, Tabs, Toast, Tooltip
- embla-carousel-react: Carousel functionality
- lucide-react: Icon library
- react-icons: Additional icons (FaGithub, FaLinkedin, FaTwitter, FaInstagram)
- cmdk: Command palette component
- vaul: Drawer component

**Form Management**
- react-hook-form: Form state management
- @hookform/resolvers: Zod resolver integration
- zod: Schema validation library
- drizzle-zod: Generate Zod schemas from Drizzle ORM tables

**Database & ORM**
- Drizzle ORM (v0.39.1): TypeScript ORM with PostgreSQL dialect
- @neondatabase/serverless: Serverless PostgreSQL driver for Neon
- drizzle-kit: Schema migrations and database management CLI

**Styling & Utilities**
- tailwindcss: Utility-first CSS framework
- tailwind-merge: Merge Tailwind classes without conflicts
- clsx: Conditional class name utility
- class-variance-authority: Type-safe component variants
- autoprefixer: CSS vendor prefixing

**Development Tools**
- @replit/vite-plugin-runtime-error-modal: Runtime error overlay for Replit
- @replit/vite-plugin-cartographer: Replit integration
- @replit/vite-plugin-dev-banner: Development environment banner

**Date Handling**
- date-fns: Date utility library for formatting and manipulation

**Session Management (Configured but not actively used)**
- connect-pg-simple: PostgreSQL session store for Express (available for future authentication)

**Build Tools**
- tsx: TypeScript execution for development server
- esbuild: Fast JavaScript bundler for production backend
- vite: Frontend build tool and dev server

### Database Schema

**PostgreSQL Tables** (via Drizzle ORM)
- `contact_submissions`: Stores visitor contact form submissions with auto-generated UUID, personal information (first name, last name, email, contact number), message content, and timestamp

**Schema Location**: `shared/schema.ts` - Shared between frontend and backend for type safety and validation consistency

### Configuration Files

- `components.json`: shadcn/ui configuration (New York style, Tailwind paths, component aliases)
- `tailwind.config.ts`: Custom color system, border radius, spacing extensions
- `tsconfig.json`: TypeScript configuration with path aliases (@/, @shared/, @assets/)
- `vite.config.ts`: Vite configuration with React plugin, path resolution, and Replit integrations
- `drizzle.config.ts`: Database connection and migration settings
- `postcss.config.js`: Tailwind CSS and Autoprefixer processing