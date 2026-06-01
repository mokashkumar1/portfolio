# Implementation Plan: Portfolio Migration and Rebuild

## Overview

This implementation plan breaks down the portfolio migration and rebuild project into discrete, actionable coding tasks. The project involves creating a new Next.js 15+ application with TypeScript, migrating assets and data from the broken existing project, implementing all portfolio sections with modern animations, and preparing infrastructure for future CMS integration.

The implementation follows a phased approach: project setup → asset migration → data migration → component implementation → integration & testing.

## Tasks

- [-] 1. Initialize new Next.js 15+ project with TypeScript and Tailwind CSS
  - Create new Next.js 15+ project in `portfolio-v2/` subdirectory using `npx create-next-app@latest`
  - Configure TypeScript with strict mode enabled in `tsconfig.json`
  - Configure Tailwind CSS with custom theme extensions for colors, spacing, and animations
  - Set up ESLint and Prettier with recommended configurations
  - Install core dependencies: `framer-motion`, `gsap`, `@studio-freight/lenis`, `lucide-react`, `clsx`, `tailwind-merge`, `class-variance-authority`
  - Pin all dependency versions to exact versions (no ^ or ~)
  - Create `.env.example` file with placeholder environment variables
  - Verify project builds successfully with `npm run build`
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7_

- [-] 2. Set up project structure and configuration files
  - Create directory structure: `components/sections/`, `components/layout/`, `components/ui/`, `data/`, `lib/`, `hooks/`, `types/`, `public/assets/`
  - Create `lib/utils.ts` with `cn()` utility function for class merging
  - Create `lib/animations.ts` with Framer Motion variants (fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft)
  - Create `types/index.ts` for shared TypeScript types
  - Configure `next.config.mjs` for image optimization and external domains
  - Create `tailwind.config.ts` with custom theme (colors, fonts, animations)
  - Create `.gitignore` entries for environment files and build artifacts
  - _Requirements: 4.1, 4.2, 4.3, 4.6_

- [~] 3. Migrate static assets from old project to new project
  - Copy all files from old project's `/public/assets/profile/` to new project's `/public/assets/profile/`
  - Copy all files from old project's `/public/assets/projects/` to new project's `/public/assets/projects/`
  - Copy all files from old project's `/public/assets/documents/` to new project's `/public/assets/documents/`
  - Copy all files from old project's `/public/assets/gallery/` to new project's `/public/assets/gallery/`
  - Copy all files from old project's `/public/assets/media/` to new project's `/public/assets/media/`
  - Preserve original directory structure for all migrated assets
  - Generate migration report listing all copied files with sizes and paths
  - Verify asset integrity by checking file sizes match source files
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8_

- [ ] 4. Create data structure and migrate portfolio data
  - [~] 4.1 Create TypeScript interfaces in `data/portfolio.ts`
    - Define `Project`, `Experience`, `Certification`, `Hobby`, `PortfolioData` interfaces
    - Define all nested interfaces for stats, counters, skills, radar skills, life carousel, routine, music track
    - Export all interfaces for use in components
    - _Requirements: 3.1, 3.5_
  
  - [~] 4.2 Migrate portfolio data from old project
    - Copy portfolio data from old project's `/data/portfolio.ts` to new project
    - Copy site content data from old project's `/data/siteContent.ts` to new project
    - Update all asset paths to reference new project structure (`/assets/...`)
    - Validate all required fields are present (name, email, title, projects, experience)
    - Ensure TypeScript compilation succeeds without type errors
    - _Requirements: 3.2, 3.3, 3.4, 3.6_

- [ ] 5. Implement core UI components
  - [~] 5.1 Create Button component with variants
    - Create `components/ui/Button.tsx` with TypeScript interface
    - Implement variants using `class-variance-authority`: primary, secondary, outline, ghost
    - Implement sizes: sm, md, lg
    - Add hover and focus states with Tailwind classes
    - Export component with proper TypeScript types
    - _Requirements: 4.5_
  
  - [~] 5.2 Create Card component
    - Create `components/ui/Card.tsx` with TypeScript interface
    - Implement base card styling with Tailwind (background, border, shadow, rounded corners)
    - Add optional hover effect prop that scales card on hover
    - Support className prop for custom styling
    - _Requirements: 4.5_
  
  - [~] 5.3 Create SkillRadarChart component
    - Create `components/ui/SkillRadarChart.tsx` with TypeScript interface
    - Implement radar chart using SVG or Recharts library
    - Accept data prop with subject, value, fullMark fields
    - Style chart with responsive sizing and theme colors
    - _Requirements: 7.2_
  
  - [~] 5.4 Create Lightbox component
    - Create `components/ui/Lightbox.tsx` with TypeScript interface
    - Implement full-screen image display with backdrop
    - Add navigation arrows (previous/next) with click handlers
    - Add close button with click handler
    - Implement keyboard navigation (arrow keys for navigation, escape to close)
    - Add click-outside-to-close functionality
    - _Requirements: 10.3_

- [ ] 6. Implement layout components
  - [~] 6.1 Create Navbar component
    - Create `components/layout/Navbar.tsx` with TypeScript interface
    - Implement sticky positioning with backdrop blur effect
    - Display navigation links to all major sections (About, Skills, Experience, Projects, Gallery, Contact)
    - Implement smooth scroll behavior when links are clicked
    - Implement active section highlighting based on scroll position using Intersection Observer
    - Create mobile hamburger menu with Framer Motion slide-in animation
    - Display portfolio owner's name/logo
    - Make fully responsive (mobile hamburger menu, desktop horizontal nav)
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7_
  
  - [~] 6.2 Create Footer component
    - Create `components/layout/Footer.tsx` with TypeScript interface
    - Display copyright information with dynamic year using `new Date().getFullYear()`
    - Display social media links (GitHub, LinkedIn, Instagram, Email) with Lucide React icons
    - Display quick navigation links to major sections
    - Implement "Back to Top" button with smooth scroll to hero section
    - Make fully responsive with layout adapting to mobile viewports
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5_

- [~] 7. Implement Hero Section
  - Create `components/sections/HeroSection.tsx` with TypeScript interface
  - Display full name, title, and location from portfolio data
  - Render profile image from `/assets/profile/profile.png` using Next.js Image component
  - Implement animated text reveal using Framer Motion with staggered fade-in effects
  - Display primary CTA buttons (View Projects, Contact Me) with smooth scroll navigation
  - Display social media links (GitHub, LinkedIn, Instagram) with Lucide React icons
  - Implement smooth scroll behavior when navigation buttons are clicked
  - Make fully responsive (mobile: stacked layout, desktop: side-by-side layout)
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7_

- [~] 8. Implement About Section
  - Create `components/sections/AboutSection.tsx` with TypeScript interface
  - Display aboutText and vibeText from portfolio data
  - Render professional statistics (projects count, git commits, tech stack count) with animated counters
  - Display personal counters (books read, videos edited, chai consumed, curiosity level) with visual styling
  - Implement scroll-triggered animations using Framer Motion's `useInView` hook
  - Display profile photo with hover effects
  - Make fully responsive with optimized layouts for mobile and desktop (two-column on desktop, stacked on mobile)
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

- [~] 9. Implement Skills Section
  - Create `components/sections/SkillsSection.tsx` with TypeScript interface
  - Display all skill categories and items from portfolio data
  - Render radar chart visualization using the SkillRadarChart component with radarSkills data
  - Organize skills into visual cards grouped by category
  - Implement hover effects on skill items (scale, color change)
  - Animate skill cards on scroll using Framer Motion with staggered effects
  - Make fully responsive with grid layouts adapting to viewport size (1 col mobile, 2-3 cols desktop)
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [~] 10. Implement Experience Section
  - Create `components/sections/ExperienceSection.tsx` with TypeScript interface
  - Display all experience entries from portfolio data in chronological order (most recent first)
  - Render each experience with role, company, duration, location, and description
  - Implement vertical timeline visualization with connecting lines using CSS borders or SVG
  - Apply color-coded highlights based on the color field in experience data
  - Animate timeline entries on scroll with staggered effects using Framer Motion
  - Make fully responsive with timeline adapting to mobile layouts (vertical on all devices)
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

- [~] 11. Implement Projects Section
  - Create `components/sections/ProjectsSection.tsx` with TypeScript interface
  - Display all projects from portfolio data with title, description, category, and tech stack
  - Render project cover images from migrated assets using Next.js Image component
  - Display GitHub and demo links when available in project data
  - Implement hover effects revealing project highlights with Framer Motion
  - Organize projects in responsive grid layout (1 col mobile, 2-3 cols desktop)
  - Implement filter functionality by project category (All, Machine Learning, C++, Flutter, etc.)
  - Animate project cards on scroll and hover using Framer Motion
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7_

- [~] 12. Implement Gallery Section
  - Create `components/sections/GallerySection.tsx` with TypeScript interface
  - Display gallery assets organized by category (photography, videography, editing, travel)
  - Implement masonry grid layout using CSS Grid or library for optimal visual presentation
  - Integrate Lightbox component for full-screen image viewing
  - Support video playback for videography content using HTML5 video element
  - Implement category filtering with smooth transitions using Framer Motion
  - Implement lazy loading for images using Next.js Image component with loading="lazy"
  - Make fully responsive with grid columns adapting to viewport size (1-2 mobile, 3-4 desktop)
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7_

- [~] 13. Implement Contact Section
  - Create `components/sections/ContactSection.tsx` with TypeScript interface
  - Display contact form with fields for name, email, and message
  - Implement client-side validation: name not empty, email valid format, message not empty
  - Display validation errors inline below each field
  - Implement loading state during form submission (disable button, show spinner)
  - Display success message when form submission succeeds
  - Display error message with retry option when form submission fails
  - Display social media links and email address as alternative contact methods
  - Implement form reset after successful submission
  - Make fully responsive with form adapting to mobile layouts
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9_

- [~] 14. Checkpoint - Verify all sections render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 15. Set up animation system
  - [~] 15.1 Configure Lenis smooth scroll
    - Create `initSmoothScroll()` function in `lib/animations.ts`
    - Configure Lenis with duration, easing, orientation, smooth wheel settings
    - Initialize Lenis in root layout component with `useEffect`
    - Implement requestAnimationFrame loop for smooth scroll updates
    - _Requirements: 14.1_
  
  - [~] 15.2 Implement scroll-triggered animations
    - Create reusable animation wrapper component using Framer Motion's `useInView` hook
    - Apply scroll-triggered animations to all section components
    - Configure `once: true` to animate only on first view
    - Configure margin offset for triggering animations before element enters viewport
    - _Requirements: 14.3_
  
  - [~] 15.3 Implement reduced motion support
    - Create `getAnimationConfig()` function that checks `prefers-reduced-motion` media query
    - Return minimal animation config (duration: 0.01, ease: linear) when reduced motion is preferred
    - Apply animation config to all Framer Motion animations
    - Test with browser's reduced motion setting enabled
    - _Requirements: 14.5_

- [~] 16. Implement API route for contact form
  - Create `app/api/contact/route.ts` with POST handler
  - Implement request body parsing and validation (name, email, message required)
  - Implement email format validation using regex
  - Implement basic rate limiting to prevent spam (track requests by IP, limit to 5 per hour)
  - Return appropriate HTTP status codes (200 success, 400 validation error, 429 rate limit, 500 server error)
  - Add error handling with try-catch and logging
  - Add TODO comment for future Resend email integration
  - _Requirements: 19.2, 19.3, 19.4, 19.5, 19.6_

- [ ] 17. Prepare infrastructure for future integrations
  - [~] 17.1 Set up Sanity CMS preparation
    - Install Sanity client libraries: `@sanity/client`, `next-sanity`
    - Create `lib/sanity.ts` with Sanity client configuration (commented out)
    - Define environment variables in `.env.example`: `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN`
    - Document data schema mapping between TypeScript interfaces and future Sanity schemas in comments
    - Create feature flag system in portfolio data to toggle between static and CMS data
    - _Requirements: 20.1, 20.2, 20.3, 20.4, 20.5_
  
  - [~] 17.2 Set up Cloudinary preparation
    - Install Cloudinary SDK: `cloudinary`
    - Create `lib/cloudinary.ts` with Cloudinary configuration (commented out)
    - Define environment variables in `.env.example`: `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
    - Implement helper functions for generating Cloudinary URLs with transformations
    - Document migration path from local assets to Cloudinary in comments
    - _Requirements: 21.1, 21.2, 21.3, 21.4, 21.5_
  
  - [~] 17.3 Set up Resend email preparation
    - Install Resend SDK: `resend`
    - Create `lib/email.ts` with Resend configuration (commented out)
    - Define environment variables in `.env.example`: `RESEND_API_KEY`, `CONTACT_EMAIL_TO`
    - Implement email template function for contact form submissions
    - Add TODO comments in contact API route for Resend integration
    - _Requirements: 19.1, 19.3_

- [ ] 18. Implement root layout and home page
  - [~] 18.1 Create root layout with metadata
    - Create `app/layout.tsx` with metadata configuration
    - Define title, description, keywords for SEO
    - Implement Open Graph tags for social media sharing
    - Implement Twitter Card tags
    - Add viewport meta tag for responsive design
    - Initialize Lenis smooth scroll in layout
    - Import global CSS and fonts
    - _Requirements: 17.1, 17.2, 17.3_
  
  - [~] 18.2 Create home page with all sections
    - Create `app/page.tsx` as main entry point
    - Import and render all section components in order: Hero, About, Skills, Experience, Projects, Gallery, Contact
    - Wrap page with Navbar and Footer layout components
    - Pass portfolio data as props to all sections
    - Ensure proper section IDs for navigation anchors
    - _Requirements: 4.1, 4.2, 4.3_

- [~] 19. Implement SEO and metadata
  - Generate `sitemap.xml` using Next.js sitemap generation
  - Generate `robots.txt` with appropriate crawl rules
  - Implement semantic HTML with proper heading hierarchy (h1, h2, h3)
  - Add structured data (JSON-LD) for person schema in root layout
  - Verify all meta tags are present in page source
  - _Requirements: 17.4, 17.5, 17.6, 17.7_

- [~] 20. Implement accessibility features
  - Add ARIA labels to all icon buttons and interactive elements
  - Ensure all form inputs have associated labels
  - Provide alt text for all images using Next.js Image alt prop
  - Implement visible focus indicators for keyboard navigation using Tailwind focus: utilities
  - Test keyboard navigation for all interactive elements (Tab, Enter, Escape, Arrow keys)
  - Verify color contrast ratios meet WCAG AA standards (4.5:1) using browser DevTools
  - Test with screen reader (NVDA or VoiceOver) to verify announcements
  - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5, 18.6, 18.7_

- [~] 21. Optimize performance
  - Implement Next.js Image component for all images with automatic optimization
  - Configure image sizes and srcset for responsive images
  - Implement lazy loading for images below the fold using loading="lazy"
  - Implement code splitting for section components using dynamic imports where beneficial
  - Minimize bundle size by verifying tree-shaking of unused dependencies
  - Run Lighthouse audit and verify performance scores (>90 desktop, >80 mobile)
  - Optimize First Contentful Paint (FCP) to under 1.5 seconds
  - _Requirements: 16.1, 16.2, 16.3, 16.4, 16.5, 16.6, 16.7_

- [~] 22. Create documentation
  - Create comprehensive README.md with project overview, setup instructions, development commands, and deployment guide
  - Document component architecture and file organization patterns
  - Document data structure and how to update portfolio content
  - Document asset migration process from old project to new project
  - Document integration points for future CMS (Sanity) and asset management (Cloudinary) services
  - Add code comments explaining complex animation logic and GSAP timelines
  - _Requirements: 24.1, 24.2, 24.3, 24.4, 24.5, 24.6_

- [~] 23. Prepare for deployment
  - Create `vercel.json` configuration file with appropriate settings
  - Document required environment variables for production in README.md
  - Configure Next.js for optimal production builds in `next.config.mjs`
  - Implement proper error handling for production environments (error boundaries, API error responses)
  - Run production build with `npm run build` and verify no errors or warnings
  - Test production build locally with `npm run start`
  - Document custom domain configuration steps for Vercel
  - _Requirements: 23.1, 23.2, 23.3, 23.4, 22.4_

- [~] 24. Final checkpoint - Verify complete system
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- All tasks involve writing, modifying, or testing code - no manual user testing or deployment tasks
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation and user feedback opportunities
- The project uses TypeScript/React/Next.js throughout for type safety and modern development
- Asset migration preserves all existing content while establishing clean architecture
- Future integrations (Sanity CMS, Cloudinary, Resend) are prepared but not fully implemented
- Performance and accessibility are prioritized throughout implementation
- All components are built mobile-first with responsive design

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1", "2"] },
    { "id": 1, "tasks": ["3", "4.1"] },
    { "id": 2, "tasks": ["4.2", "5.1", "5.2", "5.3", "5.4"] },
    { "id": 3, "tasks": ["6.1", "6.2", "7", "8", "9", "10", "11", "12", "13"] },
    { "id": 4, "tasks": ["15.1", "15.2", "15.3", "16", "17.1", "17.2", "17.3"] },
    { "id": 5, "tasks": ["18.1", "18.2"] },
    { "id": 6, "tasks": ["19", "20", "21", "22", "23"] }
  ]
}
```
