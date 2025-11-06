# Arijit Bhardwaj Portfolio

## Overview

This is a personal portfolio website for Arijit Bhardwaj, a Full Stack Developer specializing in React, TypeScript, Node.js, and XR technologies. The application aims to professionally showcase credentials and enable visitor engagement through a contact form. It features a modern, dark-themed design with golden-yellow accents, inspired by `knowprabhjyot.github.io`, and persistent sidebar navigation. The project is a full-stack application with a React frontend and an Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

*   **Framework & Build System:** React 18 with TypeScript, using Vite for development and optimized builds. Wouter is used for lightweight client-side routing.
*   **UI Component System:** `shadcn/ui` (New York style) built on Radix UI primitives, styled with Tailwind CSS and custom design tokens. Class Variance Authority (CVA) manages component variants.
*   **State Management & Data Fetching:** TanStack Query for server state management and API requests; React Hook Form with Zod for form validation; Context API for theme management.
*   **Design System:** Poppins font for UI, JetBrains Mono for code. Features responsive design across mobile, tablet, and desktop, a dark theme with a primary golden-yellow accent (HSL 45 95% 50%), and a Shadcn sidebar with mobile responsiveness.

### Backend Architecture

*   **Server Framework:** Express.js with TypeScript on Node.js, using ES modules. Includes custom middleware for request logging and JSON parsing.
*   **API Design:** RESTful endpoints under `/api`, including a `POST /api/contact` for form submissions and `GET /api/contact` for retrieval. Zod schemas are shared for validation.
*   **Data Storage Strategy:** In-memory storage (`MemStorage`) for development contact submissions. Drizzle ORM is configured for PostgreSQL, defining a `contact_submissions` table. An interface pattern allows swapping storage implementations.
*   **Development & Production Workflow:** Vite middleware for seamless SSR/HMR in development. Separate build processes for frontend (Vite) and backend (esbuild). Static file serving in production.

### System Design Choices

*   **UI/UX:** Dark theme with golden-yellow accents (HSL 45 95% 50%). Horizontal navigation, responsive sidebar, alternating timeline on the About page, and a 2-column portfolio grid on desktop.
*   **Features:** Contact form, project showcase with detailed cards, "About Me" section, and a Resume tab with a PDF viewer. Subtle animations and improved hover effects for interactivity.
*   **Responsiveness:** Fully responsive design with careful consideration for element sizing and spacing across devices.

## External Dependencies

### UI Component Libraries

*   **@radix-ui/\*:** Core UI primitives (Accordion, Dialog, Tooltip, etc.).
*   **embla-carousel-react:** Carousel functionality.
*   **lucide-react, react-icons:** Icon libraries.
*   **cmdk, vaul:** Command palette and drawer components.

### Form Management & Validation

*   **react-hook-form:** Form state management.
*   **@hookform/resolvers, zod:** Zod integration for schema validation.
*   **drizzle-zod:** Generates Zod schemas from Drizzle ORM.

### Database & ORM

*   **Drizzle ORM:** TypeScript ORM for PostgreSQL.
*   **@neondatabase/serverless:** Serverless PostgreSQL driver.
*   **drizzle-kit:** Schema migrations and database management.

### Styling & Utilities

*   **tailwindcss:** Utility-first CSS framework.
*   **tailwind-merge, clsx:** Utilities for managing Tailwind classes.
*   **class-variance-authority:** Type-safe component variants.
*   **autoprefixer:** CSS vendor prefixing.

### Development Tools

*   **@replit/vite-plugin-\*:** Replit-specific Vite plugins (runtime error modal, cartographer, dev banner).
*   **date-fns:** Date utility library.
*   **tsx, esbuild, vite:** TypeScript execution, backend bundling, and frontend build tools.

### Database Schema

*   **PostgreSQL Tables:** `contact_submissions` (id, firstName, lastName, email, contactNumber, message, createdAt). Schema defined in `shared/schema.ts` for type safety.