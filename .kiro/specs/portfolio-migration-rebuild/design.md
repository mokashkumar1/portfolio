# Design Document: Portfolio Migration and Rebuild

## Overview

This design document outlines the technical architecture for rebuilding a portfolio website from a broken, inconsistent codebase into a clean, professional Next.js application. The project addresses critical issues including build failures, dependency conflicts, architecture inconsistencies, and establishes a scalable foundation for future CMS integration.

### Project Context

The current portfolio website suffers from:
- Build failures (missing module ./948.js, corrupted cache)
- Dependency version conflicts
- Inconsistent component architecture
- Dead imports and duplicated styles
- Poor separation of concerns

**Current State:**
- Next.js 14.2.35 with App Router already initialized
- TypeScript 5+ configured with strict mode
- Tailwind CSS 3.4+ configured
- Core dependencies installed (Framer Motion, GSAP, Lenis, Lucide React)
- Data structures defined in `/data/portfolio.ts` and `/data/siteContent.ts`
- Component structure established with sections, layout, and UI components
- Assets organized in `/public/assets/` directory

### Goals

1. **Stabilize Foundation**: Fix build errors and dependency conflicts in the existing Next.js 14 project
2. **Asset Organization**: Ensure all content assets (images, videos, PDFs, project data) are properly organized and referenced
3. **Scalable Architecture**: Refine component structure and separation of concerns
4. **Modern Animations**: Implement Framer Motion, GSAP, and Lenis for smooth interactions
5. **Future-Ready**: Prepare infrastructure for Sanity CMS and Cloudinary integration
6. **Performance**: Achieve Lighthouse scores >90 (desktop) and >80 (mobile)
7. **Accessibility**: Ensure WCAG AA compliance with keyboard navigation and screen reader support

### Technology Stack

**Core Framework:**
- Next.js 14.2.35 (App Router) ✅ Installed
- React 18+ ✅ Installed
- TypeScript 5+ (strict mode) ✅ Configured

**Styling:**
- Tailwind CSS 3.4.1 ✅ Installed
- tailwind-merge 3.6.0 ✅ Installed
- clsx 2.1.1 ✅ Installed
- tailwindcss-animate 1.0.7 ✅ Installed

**Animation:**
- Framer Motion 12.40.0 ✅ Installed
- GSAP 3.15.0 ✅ Installed
- Lenis 1.0.42 ✅ Installed

**UI Components:**
- Lucide React 1.17.0 ✅ Installed
- class-variance-authority 0.7.1 ✅ Installed

**Future Integrations:**
- Sanity CMS (@sanity/client 7.22.1, sanity 3.99.0) ✅ Installed
- Cloudinary (cloudinary 2.10.0) ✅ Installed
- Resend (resend 6.12.4) ✅ Installed


## Architecture

### High-Level Architecture

**Current Project Structure:**
```
portfolio-website/
├── app/                          # Next.js App Router ✅
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page (all sections)
│   ├── globals.css              # Global styles
│   ├── fonts/                   # Custom fonts (Geist)
│   ├── assets/                  # App-level assets
│   └── api/
│       └── contact/
│           └── route.ts         # Contact form API endpoint
├── components/                   # ✅ Established
│   ├── sections/                # Major portfolio sections ✅
│   │   ├── HeroSection.tsx      # ✅ Implemented
│   │   ├── PersonalHero.tsx     # ✅ Implemented
│   │   ├── AboutSection.tsx     # ✅ Implemented
│   │   ├── ExperienceSection.tsx # ✅ Implemented
│   │   ├── ProjectsSection.tsx  # ✅ Implemented
│   │   ├── ContactSection.tsx   # ✅ Implemented
│   │   ├── HobbiesBento.tsx     # ✅ Implemented
│   │   ├── LifeComponentsCarousel.tsx # ✅ Implemented
│   │   ├── InteractiveWidgets.tsx # ✅ Implemented
│   │   └── ThankYouBanner.tsx   # ✅ Implemented
│   ├── layout/                  # Layout components ✅
│   │   ├── Navbar.tsx           # ✅ Implemented
│   │   └── Footer.tsx           # ✅ Implemented
│   ├── portfolio/               # Portfolio-specific components ✅
│   │   └── PortfolioClone.tsx   # ✅ Implemented
│   └── ui/                      # Reusable UI components ✅
│       ├── button.tsx           # ✅ Implemented
│       ├── CanvasBackdrop.tsx   # ✅ Implemented
│       └── SkillRadarChart.tsx  # ✅ Implemented
├── data/                         # ✅ Established
│   ├── portfolio.ts             # ✅ Complete data structure
│   └── siteContent.ts           # ✅ Asset paths and social links
├── lib/                          # ✅ Established
│   ├── utils.ts                 # ✅ Utility functions (cn, etc.)
│   ├── sanity.ts                # ✅ Sanity client configuration
│   └── cloudinary.ts            # ✅ Cloudinary helper functions
├── hooks/                        # ✅ Established
│   └── useMousePosition.ts      # ✅ Custom hook
├── public/
│   └── assets/                  # Static assets ✅
│       ├── profile/             # Profile images
│       ├── projects/            # Project cover images
│       ├── documents/           # Certificates, resume
│       ├── gallery/             # Photography, videography
│       │   ├── photography/
│       │   ├── videography/
│       │   ├── editing/
│       │   └── travel/
│       └── media/               # Music, showreel
│           ├── music/
│           └── showreel/
└── package.json                  # ✅ Dependencies configured
```

### Architecture Principles

1. **Separation of Concerns**: Clear boundaries between sections, layout, and UI components ✅
2. **Single Responsibility**: Each component has one clear purpose ✅
3. **Composition Over Inheritance**: Build complex UIs from simple, reusable components ✅
4. **Type Safety**: Strict TypeScript interfaces for all data structures ✅
5. **Performance First**: Code splitting, lazy loading, and optimized images (to be implemented)
6. **Accessibility First**: Semantic HTML, ARIA labels, keyboard navigation (to be implemented)


### Implementation Strategy

The rebuild follows a refinement approach to stabilize and enhance the existing codebase:

**Phase 1: Stabilization ✅ COMPLETE**
1. ✅ Next.js 14 project initialized with App Router
2. ✅ Dependencies installed with version pinning
3. ✅ TypeScript, ESLint configured
4. ✅ Tailwind CSS configured with custom theme

**Phase 2: Data Structure ✅ COMPLETE**
1. ✅ TypeScript interfaces defined in `/data/portfolio.ts`
2. ✅ Complete portfolio data populated
3. ✅ Asset paths organized in `/data/siteContent.ts`
4. ✅ Data structure validated against TypeScript interfaces

**Phase 3: Component Implementation ✅ MOSTLY COMPLETE**
1. ✅ Layout components built (Navbar, Footer)
2. ✅ Section components implemented (Hero, About, Experience, Projects, Contact, Hobbies, Life Carousel)
3. ⚠️ Animations and interactions need refinement
4. ⚠️ Responsive behavior needs testing and fixes

**Phase 4: Integration & Enhancement 🔄 IN PROGRESS**
1. ⚠️ API routes need implementation (contact form)
2. ⚠️ Animation system needs integration (Framer Motion, GSAP, Lenis)
3. ⚠️ Performance optimization needed
4. ⚠️ Accessibility audit required
5. ⚠️ Cross-browser testing needed

**Phase 5: CMS & Asset Management 📋 PLANNED**
1. 📋 Sanity CMS integration (libraries installed, needs configuration)
2. 📋 Cloudinary integration (library installed, needs configuration)
3. 📋 Resend email integration (library installed, needs implementation)

**Phase 6: Deployment 📋 PLANNED**
1. 📋 Configure Vercel deployment
2. 📋 Set environment variables
3. 📋 Production build verification
4. 📋 Domain configuration


## Components and Interfaces

### Core Data Interfaces

**Current Implementation Status: ✅ COMPLETE**

All data interfaces are defined in `/data/portfolio.ts` with complete type safety:

```typescript
// data/portfolio.ts - ✅ Implemented

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  highlights: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  color?: string; // Theme color for timeline visualization
}

export interface Certification {
  title: string;
  issuer: string;
  url?: string;
}

export interface Hobby {
  title: string;
  icon: string;
  description: string;
  image?: string;
}

export interface RoutineItem {
  time: string;
  activity: string;
  details: string;
}

export interface PortfolioData {
  name: string;
  fullName: string;
  nickname: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  resumeUrl: string;
  aboutText: string;
  vibeText: string;
  professionalStats: {
    projectsCount: number;
    gitCommits: number;
    techStackCount: number;
  };
  personalCounters: {
    booksRead: string;
    videosEdited: number;
    gitCommits: number;
    chaiConsumed: string;
    mlModels: number;
    curiosityLevel: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  radarSkills: {
    subject: string;
    value: number;
    fullMark: number;
  }[];
  education: {
    degree: string;
    institution: string;
    duration: string;
  };
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  hobbies: Hobby[];
  lifeCarousel: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }[];
  routine: RoutineItem[];
  futurePlans: string[];
  musicTrack: {
    title: string;
    artist: string;
    url?: string;
    cover?: string;
  };
}

// ✅ Complete portfolio data exported as portfolioData constant
```

**Site Content Structure:**

```typescript
// data/siteContent.ts - ✅ Implemented

export const profileAssets = {
  profilePhoto: "/assets/profile/profile.png",
  resumePdf: "/assets/resume/resume.pdf",
  showreelVideo: "/assets/media/showreel/showreel.mp4",
  musicCover: "/assets/media/music/current-track-cover.jpg",
};

export const socialLinks = {
  github: "#",
  instagram: "#",
  linkedin: "#",
  email: "mailto:myemail@example.com",
};

export const projectAssets = [
  // Project asset mappings
];

export const galleryAssets = {
  preview: string[];
  photography: string[];
  videography: string[];
  editing: string[];
  travel: string[];
};
```


### Component Specifications

**Implementation Status Overview:**
- ✅ Layout Components: Navbar, Footer (implemented)
- ✅ Section Components: Hero, About, Experience, Projects, Contact, Hobbies, Life Carousel (implemented)
- ✅ UI Components: Button, CanvasBackdrop, SkillRadarChart (implemented)
- ⚠️ Missing: Gallery Section with lightbox, Skills Section (separate from About)
- ⚠️ Needs Enhancement: Animation integration, responsive refinement, accessibility features

#### 1. Layout Components ✅

**Navbar Component** - ✅ Implemented at `components/layout/Navbar.tsx`
```typescript
interface NavbarProps {
  sections: { id: string; label: string }[];
}

// Current Features:
// - Sticky positioning with backdrop blur
// - Active section highlighting based on scroll position
// - Smooth scroll to sections
// - Mobile hamburger menu with animations
// - Logo/name display

// Enhancement Needed:
// - Framer Motion animations for mobile menu
// - Scroll progress indicator
// - Better active section detection
```

**Footer Component** - ✅ Implemented at `components/layout/Footer.tsx`
```typescript
interface FooterProps {
  socialLinks: {
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
  };
}

// Current Features:
// - Copyright with dynamic year
// - Social media links with icons
// - Quick navigation links
// - Back to top button

// Enhancement Needed:
// - Smooth scroll animation for back to top
// - Hover effects on social links
```

#### 2. Section Components

**HeroSection Component** - ✅ Implemented at `components/sections/HeroSection.tsx`
```typescript
interface HeroSectionProps {
  name: string;
  title: string;
  location: string;
  profileImage: string;
  socialLinks: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}

// Current Status: ✅ Implemented
// Enhancement Needed:
// - Framer Motion stagger animations for text reveal
// - Profile image hover effects
// - Smooth scroll for CTA buttons
// - Responsive layout optimization
```

**PersonalHero Component** - ✅ Implemented at `components/sections/PersonalHero.tsx`
```typescript
// Alternative hero section with different styling
// Current Status: ✅ Implemented
// Enhancement Needed: Animation integration
```

**AboutSection Component** - ✅ Implemented at `components/sections/AboutSection.tsx`
```typescript
interface AboutSectionProps {
  aboutText: string;
  vibeText: string;
  professionalStats: {
    projectsCount: number;
    gitCommits: number;
    techStackCount: number;
  };
  personalCounters: {
    booksRead: string;
    videosEdited: number;
    gitCommits: number;
    chaiConsumed: string;
    mlModels: number;
    curiosityLevel: string;
  };
  profilePhoto: string;
}

// Current Status: ✅ Implemented
// Enhancement Needed:
// - Scroll-triggered fade-in animations
// - Animated counter components (count-up effect)
// - Profile photo hover effects
// - Responsive grid optimization
```

**SkillsSection Component** - ⚠️ NOT SEPARATELY IMPLEMENTED
```typescript
// Note: Skills are currently integrated into AboutSection
// Recommendation: Create separate SkillsSection component

interface SkillsSectionProps {
  skills: {
    category: string;
    items: string[];
  }[];
  radarSkills: {
    subject: string;
    value: number;
    fullMark: number;
  }[];
}

// Features to Implement:
// - Radar chart visualization (SkillRadarChart component exists)
// - Categorized skill cards with grid layout
// - Hover effects on skill items
// - Scroll-triggered animations
// - Responsive grid (1 col mobile, 2-3 cols desktop)
```

**ExperienceSection Component** - ✅ Implemented at `components/sections/ExperienceSection.tsx`
```typescript
interface ExperienceSectionProps {
  experience: Experience[];
}

// Current Status: ✅ Implemented
// Enhancement Needed:
// - Vertical timeline visualization with connecting lines
// - Color-coded highlights per experience (using color field)
// - Scroll-triggered staggered animations
// - Responsive timeline optimization
```

**ProjectsSection Component** - ✅ Implemented at `components/sections/ProjectsSection.tsx`
```typescript
interface ProjectsSectionProps {
  projects: Project[];
}

// Current Status: ✅ Implemented
// Enhancement Needed:
// - Category filtering (Machine Learning, C++, Flutter)
// - Hover effects revealing highlights
// - Tech stack badges with styling
// - Scroll-triggered animations
// - Responsive grid optimization
```

**HobbiesBento Component** - ✅ Implemented at `components/sections/HobbiesBento.tsx`
```typescript
// Bento grid layout for hobbies
// Current Status: ✅ Implemented
// Enhancement Needed: Animation and hover effects
```

**LifeComponentsCarousel Component** - ✅ Implemented at `components/sections/LifeComponentsCarousel.tsx`
```typescript
// Carousel for life components (photography, AI, podcasting)
// Current Status: ✅ Implemented
// Enhancement Needed: Smooth carousel transitions with Framer Motion
```

**InteractiveWidgets Component** - ✅ Implemented at `components/sections/InteractiveWidgets.tsx`
```typescript
// Interactive elements (routine, future plans, music track)
// Current Status: ✅ Implemented
// Enhancement Needed: Interactive animations
```

**ContactSection Component** - ✅ Implemented at `components/sections/ContactSection.tsx`
```typescript
interface ContactSectionProps {
  email: string;
  socialLinks: {
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
  };
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Current Status: ✅ Implemented
// Enhancement Needed:
// - Form validation with error messages
// - Loading state during submission
// - Success/error message display
// - API integration with /api/contact route
// - Form reset after successful submission
```

**GallerySection Component** - ⚠️ NOT IMPLEMENTED
```typescript
// MISSING: Gallery section for photography, videography, editing, travel
interface GallerySectionProps {
  galleryAssets: {
    photography: string[];
    videography: string[];
    editing: string[];
    travel: string[];
  };
}

// Features to Implement:
// - Masonry grid layout
// - Category filtering with smooth transitions
// - Lightbox for full-screen image viewing
// - Video playback support
// - Lazy loading for performance
// - Responsive columns (1-2 mobile, 3-4 desktop)
```

**ThankYouBanner Component** - ✅ Implemented at `components/sections/ThankYouBanner.tsx`
```typescript
// Closing banner section
// Current Status: ✅ Implemented
```

#### 3. UI Components ✅

**Button Component** - ✅ Implemented at `components/ui/button.tsx`
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// Current Status: ✅ Implemented with class-variance-authority
```

**CanvasBackdrop Component** - ✅ Implemented at `components/ui/CanvasBackdrop.tsx`
```typescript
// Animated canvas background
// Current Status: ✅ Implemented
// Enhancement Needed: Performance optimization
```

**SkillRadarChart Component** - ✅ Implemented at `components/ui/SkillRadarChart.tsx`
```typescript
interface SkillRadarChartProps {
  data: {
    subject: string;
    value: number;
    fullMark: number;
  }[];
}

// Current Status: ✅ Implemented
// Note: Needs integration into SkillsSection
```

**Lightbox Component** - ⚠️ NOT IMPLEMENTED
```typescript
// MISSING: Lightbox for gallery images
interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

// Features to Implement:
// - Full-screen image display
// - Navigation arrows
// - Close button
// - Keyboard navigation (arrow keys, escape)
// - Click outside to close
// - Smooth transitions
```


## Data Models

### Portfolio Data Structure

**Current Implementation: ✅ COMPLETE**

The portfolio data is stored in TypeScript files at `/data/portfolio.ts` and `/data/siteContent.ts` with complete type safety and populated content.

**Data Flow:**
```
portfolio.ts (static data) ✅
    ↓
Component Props ✅
    ↓
Rendered UI ✅

Future Enhancement:
Sanity CMS → API fetch → Component Props → Rendered UI
```

### Asset Path Management

**Current Implementation: ✅ ORGANIZED**

All asset paths follow a consistent pattern in `/public/assets/`:

```typescript
// Current (static assets) - ✅ Implemented
/assets/profile/profile.png
/assets/profile/hero-artwork.png
/assets/projects/{project-slug}/cover.jpg
/assets/documents/certificates/{cert-name}.pdf
/assets/gallery/photography/{filename}.jpg
/assets/gallery/videography/{filename}.mp4
/assets/gallery/editing/{filename}.jpg
/assets/gallery/travel/{filename}.jpg
/assets/media/music/{filename}.jpg
/assets/media/showreel/{filename}.mp4

// Future (Cloudinary) - 📋 Planned
https://res.cloudinary.com/{cloud-name}/image/upload/v{version}/{public-id}.jpg
```

**Asset Organization Status:**
- ✅ Profile assets: Organized in `/public/assets/profile/`
- ✅ Project assets: Organized in `/public/assets/projects/`
- ⚠️ Document assets: Folders exist but need population
- ⚠️ Gallery assets: Folders exist but need population
- ⚠️ Media assets: Folders exist but need population

### Data Validation

**Current Implementation: ✅ TYPE-SAFE**

All data structures are validated at compile-time using TypeScript:

```typescript
// Type guards for runtime validation (to be implemented)
export function isValidProject(obj: any): obj is Project {
  return (
    typeof obj.title === 'string' &&
    typeof obj.description === 'string' &&
    typeof obj.category === 'string' &&
    Array.isArray(obj.tech) &&
    Array.isArray(obj.highlights)
  );
}

export function isValidPortfolioData(obj: any): obj is PortfolioData {
  return (
    typeof obj.name === 'string' &&
    typeof obj.email === 'string' &&
    Array.isArray(obj.projects) &&
    obj.projects.every(isValidProject)
  );
}
```

### Environment Variables

**Current Status: ⚠️ NEEDS CONFIGURATION**

```bash
# .env.local (development) - ⚠️ To be created
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Future integrations - 📋 Libraries installed, needs configuration
SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_TOKEN=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RESEND_API_KEY=
CONTACT_EMAIL_TO=mokshkumar38@gmail.com
```

**Action Items:**
1. Create `.env.local` file with development variables
2. Create `.env.example` file for documentation (✅ exists)
3. Configure Sanity project and add credentials
4. Configure Cloudinary account and add credentials
5. Configure Resend API key for email functionality


## Error Handling

### Client-Side Error Handling

**Form Validation Errors**
```typescript
// Contact form validation
const validateContactForm = (data: ContactFormData): ValidationResult => {
  const errors: Record<string, string> = {};
  
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format';
  }
  
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
```

**Image Loading Errors**
```typescript
// Fallback for failed image loads
<Image
  src={project.image || '/assets/placeholder.jpg'}
  alt={project.title}
  onError={(e) => {
    e.currentTarget.src = '/assets/placeholder.jpg';
  }}
/>
```

**API Request Errors**
```typescript
// Contact form submission
try {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  const result = await response.json();
  setStatus({ type: 'success', message: 'Message sent successfully!' });
} catch (error) {
  console.error('Contact form error:', error);
  setStatus({ 
    type: 'error', 
    message: 'Failed to send message. Please try again or email directly.' 
  });
}
```

### Server-Side Error Handling

**API Route Error Handling**
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validation
    if (!body.name || !body.email || !body.message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Rate limiting check
    const isRateLimited = await checkRateLimit(request);
    if (isRateLimited) {
      return Response.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Send email (future implementation)
    // await sendEmail(body);
    
    return Response.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Error Boundaries

```typescript
// app/error.tsx (Next.js error boundary)
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
```


## Testing Strategy

### Why Property-Based Testing Does NOT Apply

This portfolio rebuild project is **not suitable for property-based testing** because:

1. **UI Rendering Focus**: The project is primarily about UI component rendering, layout, and visual presentation - not algorithmic logic with universal properties
2. **Infrastructure Setup**: Much of the work involves project stabilization, asset organization, and configuration - one-time setup tasks
3. **Integration Work**: The project integrates external services (Sanity, Cloudinary, Resend) and tests their wiring, not internal logic
4. **Specific Implementations**: Each section has specific design requirements that don't vary meaningfully with input
5. **No Universal Properties**: There are no "for all inputs X, property P(X) holds" statements that make sense for UI rendering

**Therefore, the Correctness Properties section is intentionally omitted from this design document.**

**Appropriate Testing Strategies:**

### 1. Manual Testing

**Component Visual Testing**
- Test each section component in isolation during development
- Verify responsive behavior across breakpoints (320px, 768px, 1024px, 1440px)
- Test animations and interactions (hover, scroll, click)
- Verify accessibility features (keyboard navigation, focus indicators)

**Cross-Browser Testing**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Device Testing**
- Mobile: iPhone SE, iPhone 14, Samsung Galaxy S21
- Tablet: iPad, iPad Pro
- Desktop: 1920x1080, 2560x1440

### 2. Integration Testing

**Asset Migration Verification**
```bash
# Verify all assets copied correctly
npm run verify-assets

# Expected output:
# ✓ Profile assets: 2 files
# ✓ Project assets: 15 files
# ✓ Document assets: 5 files
# ✓ Gallery assets: 45 files
# ✓ Media assets: 8 files
```

**API Route Testing**
```typescript
// Test contact form API endpoint
describe('Contact API', () => {
  it('should accept valid form submission', async () => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message'
      })
    });
    expect(response.status).toBe(200);
  });
  
  it('should reject invalid email', async () => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test User',
        email: 'invalid-email',
        message: 'Test message'
      })
    });
    expect(response.status).toBe(400);
  });
});
```


### 3. Snapshot Testing

**Component Snapshot Tests**
```typescript
// For stable UI components that shouldn't change unexpectedly
import { render } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  it('should match snapshot for primary variant', () => {
    const { container } = render(
      <Button variant="primary">Click Me</Button>
    );
    expect(container).toMatchSnapshot();
  });
});
```

### 4. Performance Testing

**Lighthouse Audits**
```bash
# Run Lighthouse in CI/CD
npm run lighthouse

# Target scores:
# Performance: >90 (desktop), >80 (mobile)
# Accessibility: >95
# Best Practices: >90
# SEO: >95
```

**Core Web Vitals Monitoring**
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

### 5. Accessibility Testing

**Automated Accessibility Testing**
```bash
# Using axe DevTools
npm run test:a11y

# Check for:
# - WCAG AA compliance
# - Color contrast ratios (4.5:1 for normal text)
# - ARIA labels on interactive elements
# - Keyboard navigation support
# - Focus indicators
```

**Manual Accessibility Testing**
- Test keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Test with screen reader (NVDA on Windows, VoiceOver on Mac)
- Verify focus indicators are visible
- Test with browser zoom (200%, 400%)
- Test with reduced motion preference

### 6. Data Validation Testing

**TypeScript Compilation**
```bash
# Ensure all data structures compile without errors
npm run type-check

# This validates:
# - All portfolio data matches interfaces
# - No missing required fields
# - Correct data types
```

**Data Integrity Tests**
```typescript
// Validate portfolio data structure
import { portfolioData } from '@/data/portfolio';
import { isValidPortfolioData } from '@/lib/validation';

describe('Portfolio Data', () => {
  it('should have valid structure', () => {
    expect(isValidPortfolioData(portfolioData)).toBe(true);
  });
  
  it('should have all required projects', () => {
    expect(portfolioData.projects.length).toBeGreaterThan(0);
  });
  
  it('should have valid email format', () => {
    expect(portfolioData.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
});
```


### 7. Build Verification

**Production Build Testing**
```bash
# Verify production build succeeds
npm run build

# Expected output:
# ✓ Compiled successfully
# ✓ Collecting page data
# ✓ Generating static pages
# ✓ Finalizing page optimization

# No errors or warnings should appear
```

**Bundle Size Analysis**
```bash
# Analyze bundle size
npm run analyze

# Target metrics:
# - First Load JS: < 200 KB
# - Total bundle size: < 1 MB
# - No duplicate dependencies
```

### Testing Checklist

**Pre-Deployment Checklist:**
- [ ] All sections render correctly on mobile, tablet, desktop
- [ ] Navigation works (smooth scroll, active highlighting)
- [ ] Contact form validates and shows success/error states
- [ ] All images load with proper fallbacks
- [ ] Animations run smoothly (60fps)
- [ ] Keyboard navigation works for all interactive elements
- [ ] Screen reader announces content correctly
- [ ] Lighthouse scores meet targets (>90 desktop, >80 mobile)
- [ ] No console errors or warnings
- [ ] Production build completes successfully
- [ ] All environment variables configured
- [ ] Cross-browser testing passed (Chrome, Firefox, Safari, Edge)
- [ ] Asset migration report generated and verified

**Post-Deployment Checklist:**
- [ ] Site loads on production URL
- [ ] All assets load from correct paths
- [ ] Contact form submits successfully
- [ ] Analytics tracking works (if configured)
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt


## Animation System

**Current Status: ⚠️ LIBRARIES INSTALLED, NEEDS IMPLEMENTATION**

All animation libraries are installed but need to be configured and integrated into components:
- ✅ Framer Motion 12.40.0 installed
- ✅ GSAP 3.15.0 installed
- ✅ Lenis 1.0.42 installed
- ⚠️ Animation configuration file needed (`lib/animations.ts`)
- ⚠️ Smooth scroll initialization needed
- ⚠️ Component animations need integration

### Animation Library Configuration

**Lenis Smooth Scroll Setup** - ⚠️ TO BE IMPLEMENTED

```typescript
// lib/animations.ts - TO BE CREATED
import Lenis from '@studio-freight/lenis';

export const initSmoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenis;
};

// Initialize in app/layout.tsx or app/page.tsx
```

**Framer Motion Variants** - ⚠️ TO BE IMPLEMENTED

```typescript
// lib/animations.ts - TO BE CREATED
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};
```

**Scroll-Triggered Animations** - ⚠️ TO BE IMPLEMENTED

```typescript
// Usage in components
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
}

// Apply to section components:
// - HeroSection: Text stagger reveal
// - AboutSection: Fade-in on scroll
// - ExperienceSection: Timeline stagger
// - ProjectsSection: Card grid stagger
// - ContactSection: Form fade-in
```


**GSAP Timeline Animations** - ⚠️ TO BE IMPLEMENTED

```typescript
// For complex animations (e.g., hero section reveal)
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export function useHeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}

// Apply to HeroSection component
```

**Reduced Motion Support** - ⚠️ TO BE IMPLEMENTED

```typescript
// lib/animations.ts
export const getAnimationConfig = () => {
  const prefersReducedMotion = 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return {
      duration: 0.01,
      ease: 'linear'
    };
  }

  return {
    duration: 0.6,
    ease: 'easeOut'
  };
};

// Usage in Framer Motion
const config = getAnimationConfig();

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={config}
>
  {children}
</motion.div>
```

### Animation Implementation Checklist

**Priority 1: Core Setup**
- [ ] Create `lib/animations.ts` with reusable variants
- [ ] Initialize Lenis smooth scroll in root layout
- [ ] Add reduced motion support

**Priority 2: Section Animations**
- [ ] HeroSection: Text stagger reveal with Framer Motion
- [ ] AboutSection: Scroll-triggered fade-in for stats
- [ ] ExperienceSection: Timeline stagger animation
- [ ] ProjectsSection: Card grid stagger on scroll
- [ ] ContactSection: Form fade-in animation

**Priority 3: Interactive Animations**
- [ ] Navbar: Mobile menu slide animation
- [ ] Footer: Back to top smooth scroll
- [ ] Buttons: Hover and click effects
- [ ] Cards: Hover lift and shadow effects
- [ ] Images: Hover zoom effects

### Performance Considerations

1. **Use `will-change` sparingly**: Only apply to elements actively animating
2. **Prefer transforms over position**: Use `transform: translateX()` instead of `left`
3. **Batch animations**: Use `stagger` to avoid simultaneous heavy animations
4. **Lazy load animations**: Only initialize GSAP timelines when sections are in view
5. **Cleanup**: Always cleanup animation contexts in `useEffect` return


## Responsive Design System

**Current Status: ✅ TAILWIND CONFIGURED, ⚠️ NEEDS TESTING**

### Tailwind Breakpoints

```typescript
// tailwind.config.ts - ✅ Configured
export default {
  theme: {
    screens: {
      'sm': '640px',   // Mobile landscape, small tablets
      'md': '768px',   // Tablets
      'lg': '1024px',  // Small laptops
      'xl': '1280px',  // Desktops
      '2xl': '1536px', // Large desktops
    }
  }
}
```

### Mobile-First Approach

All components should be designed mobile-first, with progressive enhancement for larger screens:

```tsx
// Example: Hero Section responsive layout
<div className="
  flex flex-col gap-8           /* Mobile: stacked */
  md:flex-row md:items-center   /* Tablet+: side-by-side */
  lg:gap-12                     /* Desktop: larger gap */
">
  <div className="flex-1">
    {/* Text content */}
  </div>
  <div className="
    w-full max-w-xs mx-auto     /* Mobile: centered, constrained */
    md:max-w-sm                 /* Tablet: slightly larger */
    lg:max-w-md                 /* Desktop: full size */
  ">
    {/* Image */}
  </div>
</div>
```

### Responsive Testing Checklist

**Breakpoint Testing:**
- [ ] 320px (iPhone SE) - Minimum width
- [ ] 375px (iPhone 12/13/14) - Common mobile
- [ ] 640px (sm) - Mobile landscape
- [ ] 768px (md) - Tablet portrait
- [ ] 1024px (lg) - Tablet landscape / Small laptop
- [ ] 1280px (xl) - Desktop
- [ ] 1536px (2xl) - Large desktop

**Component-Specific Testing:**
- [ ] Navbar: Mobile hamburger menu, desktop horizontal nav
- [ ] Hero: Stacked mobile, side-by-side desktop
- [ ] About: Single column mobile, two-column desktop
- [ ] Skills: 1 column mobile, 2-3 columns desktop
- [ ] Experience: Vertical timeline on all sizes
- [ ] Projects: 1 column mobile, 2-3 columns desktop
- [ ] Gallery: 1-2 columns mobile, 3-4 columns desktop
- [ ] Contact: Full-width mobile, constrained desktop
- [ ] Footer: Stacked mobile, multi-column desktop

### Touch Optimization

**Mobile Interactions:**
- Minimum touch target size: 44x44px (iOS) / 48x48px (Android)
- Adequate spacing between interactive elements
- Swipe gestures for carousels
- Pull-to-refresh disabled (if not needed)
- Prevent zoom on input focus

```tsx
// Prevent zoom on input focus
<input
  className="text-base"  // 16px minimum to prevent iOS zoom
  type="email"
/>
```

### Performance Optimization for Mobile

- Lazy load images below the fold
- Use Next.js Image component with responsive sizes
- Reduce animation complexity on mobile
- Test on actual devices, not just browser DevToolsred, constrained */
    md:w-1/3 md:mx-0            /* Tablet+: 1/3 width */
  ">
    {/* Profile image */}
  </div>
</div>
```

### Responsive Typography

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2' }],
        'h2': ['2.25rem', { lineHeight: '1.3' }],
        'h3': ['1.875rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      }
    }
  }
}
```

```tsx
// Usage with responsive scaling
<h1 className="
  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
  font-bold
">
  {name}
</h1>
```

### Responsive Spacing

```tsx
// Consistent spacing scale
<section className="
  px-4 py-12              /* Mobile: 16px horizontal, 48px vertical */
  sm:px-6 sm:py-16        /* Small: 24px horizontal, 64px vertical */
  md:px-8 md:py-20        /* Medium: 32px horizontal, 80px vertical */
  lg:px-12 lg:py-24       /* Large: 48px horizontal, 96px vertical */
  xl:px-16 xl:py-32       /* XL: 64px horizontal, 128px vertical */
">
  {/* Section content */}
</section>
```

### Responsive Grid Layouts

```tsx
// Projects grid
<div className="
  grid grid-cols-1        /* Mobile: 1 column */
  md:grid-cols-2          /* Tablet: 2 columns */
  lg:grid-cols-3          /* Desktop: 3 columns */
  gap-6 md:gap-8 lg:gap-10
">
  {projects.map(project => (
    <ProjectCard key={project.title} {...project} />
  ))}
</div>
```

### Touch Optimization

```tsx
// Larger touch targets for mobile
<button className="
  min-h-[44px]            /* iOS minimum touch target */
  px-6 py-3
  active:scale-95         /* Touch feedback */
  transition-transform
">
  Contact Me
</button>
```


## Performance Optimization

### Image Optimization

**Next.js Image Component**
```tsx
import Image from 'next/image';

// Automatic optimization, lazy loading, responsive srcset
<Image
  src="/assets/profile/profile.png"
  alt="Mokash Kumar"
  width={400}
  height={400}
  priority={false}  // true for above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  className="rounded-full"
/>
```

**Lazy Loading Strategy**
- Hero section images: `priority={true}` (load immediately)
- Above-the-fold content: `loading="eager"`
- Below-the-fold content: `loading="lazy"` (default)
- Gallery images: Lazy load with intersection observer

### Code Splitting

**Dynamic Imports**
```tsx
// Lazy load heavy components
import dynamic from 'next/dynamic';

const GallerySection = dynamic(
  () => import('@/components/sections/GallerySection'),
  { 
    loading: () => <div>Loading gallery...</div>,
    ssr: false  // Client-side only if needed
  }
);

const SkillRadarChart = dynamic(
  () => import('@/components/ui/SkillRadarChart'),
  { ssr: false }
);
```

**Route-Based Code Splitting**
Next.js automatically code-splits by route. Each page only loads the JavaScript it needs.

### Bundle Optimization

**Tree Shaking**
```typescript
// Import only what you need
import { motion } from 'framer-motion';  // ✓ Good
// import * as FramerMotion from 'framer-motion';  // ✗ Bad

import { Github, Linkedin, Mail } from 'lucide-react';  // ✓ Good
// import * as Icons from 'lucide-react';  // ✗ Bad
```

**Dependency Optimization**
```json
// package.json - Use exact versions
{
  "dependencies": {
    "framer-motion": "12.40.0",  // Exact version
    "gsap": "3.15.0",
    "next": "15.0.0"
  }
}
```

### Caching Strategy

**Static Assets**
```typescript
// next.config.mjs
export default {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  headers: async () => [
    {
      source: '/assets/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};
```

### Font Optimization

```tsx
// app/layout.tsx
import { Inter, Geist_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```


### Performance Monitoring

**Core Web Vitals**
```typescript
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
```

**Performance Targets**
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TTI (Time to Interactive)**: < 3.8s

### Build Optimization

```json
// package.json
{
  "scripts": {
    "build": "next build",
    "analyze": "ANALYZE=true next build",
    "build:production": "NODE_ENV=production next build"
  }
}
```

**Production Build Checklist:**
- [ ] Remove console.logs in production
- [ ] Minify JavaScript and CSS
- [ ] Optimize images (WebP/AVIF)
- [ ] Enable compression (gzip/brotli)
- [ ] Tree-shake unused code
- [ ] Code-split by route
- [ ] Lazy load below-the-fold content


## SEO and Metadata

### Root Layout Metadata

```typescript
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Mokash Kumar | Aspiring AI Engineer',
    template: '%s | Mokash Kumar'
  },
  description: 'Computer Systems Engineering undergraduate passionate about Data Analytics, Machine Learning, and problem-solving. Portfolio showcasing ML projects, technical skills, and creative work.',
  keywords: [
    'Mokash Kumar',
    'AI Engineer',
    'Machine Learning',
    'Data Analytics',
    'Computer Systems Engineering',
    'MUET',
    'Portfolio',
    'Python',
    'Java',
    'C++',
    'Videography',
    'Photography'
  ],
  authors: [{ name: 'Mokash Kumar', url: 'https://mokashkumar.com' }],
  creator: 'Mokash Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mokashkumar.com',
    siteName: 'Mokash Kumar Portfolio',
    title: 'Mokash Kumar | Aspiring AI Engineer',
    description: 'Computer Systems Engineering undergraduate passionate about Data Analytics, Machine Learning, and problem-solving.',
    images: [
      {
        url: '/assets/profile/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mokash Kumar Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mokash Kumar | Aspiring AI Engineer',
    description: 'Computer Systems Engineering undergraduate passionate about Data Analytics, Machine Learning, and problem-solving.',
    images: ['/assets/profile/og-image.jpg'],
    creator: '@mokshluhana'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};
```

### Structured Data (JSON-LD)

```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mokash Kumar',
    alternateName: 'Moksh',
    url: 'https://mokashkumar.com',
    image: 'https://mokashkumar.com/assets/profile/profile.png',
    sameAs: [
      'https://github.com/mokashkumar1',
      'https://linkedin.com/in/mokashkumar',
      'https://instagram.com/mokshluhana'
    ],
    jobTitle: 'Computer Systems Engineering Student',
    worksFor: {
      '@type': 'Organization',
      name: 'Mehran University of Engineering and Technology'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Mehran University of Engineering and Technology'
    },
    knowsAbout: [
      'Machine Learning',
      'Data Analytics',
      'Python Programming',
      'Java',
      'C++',
      'Videography',
      'Photography'
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```


### Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mokashkumar.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://mokashkumar.com/#about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mokashkumar.com/#projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://mokashkumar.com/#contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
```

### Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://mokashkumar.com/sitemap.xml',
  };
}
```

### Semantic HTML

```tsx
// Use semantic HTML elements for better SEO
<main>
  <section id="hero" aria-label="Introduction">
    <h1>Mokash Kumar</h1>
    <p>Aspiring AI Engineer</p>
  </section>
  
  <section id="about" aria-labelledby="about-heading">
    <h2 id="about-heading">About Me</h2>
    <article>
      <p>{aboutText}</p>
    </article>
  </section>
  
  <section id="projects" aria-labelledby="projects-heading">
    <h2 id="projects-heading">Featured Projects</h2>
    <div role="list">
      {projects.map(project => (
        <article key={project.title} role="listitem">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </article>
      ))}
    </div>
  </section>
</main>
```


## Accessibility

### Keyboard Navigation

**Focus Management**
```tsx
// Visible focus indicators
<button className="
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  focus:ring-offset-2
  transition-all
">
  Contact Me
</button>
```

**Skip to Content Link**
```tsx
// app/layout.tsx
<a
  href="#main-content"
  className="
    sr-only
    focus:not-sr-only
    focus:absolute
    focus:top-4
    focus:left-4
    focus:z-50
    focus:px-4
    focus:py-2
    focus:bg-blue-600
    focus:text-white
    focus:rounded
  "
>
  Skip to main content
</a>
```

**Keyboard Shortcuts**
```typescript
// hooks/useKeyboardShortcuts.ts
export function useKeyboardShortcuts() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Escape to close modals
      if (e.key === 'Escape') {
        closeModal();
      }
      
      // Arrow keys for gallery navigation
      if (e.key === 'ArrowLeft') {
        previousImage();
      }
      if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
}
```

### ARIA Labels and Roles

```tsx
// Navigation with ARIA
<nav aria-label="Main navigation">
  <ul role="list">
    <li>
      <a href="#about" aria-label="Navigate to About section">
        About
      </a>
    </li>
  </ul>
</nav>

// Icon buttons with labels
<button
  aria-label="Open GitHub profile in new tab"
  onClick={() => window.open(githubUrl, '_blank')}
>
  <Github aria-hidden="true" />
</button>

// Form inputs with labels
<label htmlFor="email" className="block mb-2">
  Email Address
</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid={errors.email ? 'true' : 'false'}
  aria-describedby={errors.email ? 'email-error' : undefined}
/>
{errors.email && (
  <p id="email-error" role="alert" className="text-red-600">
    {errors.email}
  </p>
)}
```

### Screen Reader Support

```tsx
// Live regions for dynamic content
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
  className="sr-only"
>
  {status.message}
</div>

// Loading states
<button disabled={isLoading} aria-busy={isLoading}>
  {isLoading ? (
    <>
      <span className="sr-only">Sending message...</span>
      <Loader className="animate-spin" aria-hidden="true" />
    </>
  ) : (
    'Send Message'
  )}
</button>

// Image alt text
<Image
  src={project.image}
  alt={`Screenshot of ${project.title} project showing ${project.description}`}
  width={600}
  height={400}
/>
```


### Color Contrast

**WCAG AA Compliance**
```typescript
// tailwind.config.ts - Ensure sufficient contrast
export default {
  theme: {
    extend: {
      colors: {
        // Text on white background (4.5:1 minimum)
        'text-primary': '#1a1a1a',      // 16.94:1 ✓
        'text-secondary': '#4a4a4a',    // 9.74:1 ✓
        
        // Text on dark background
        'text-light': '#ffffff',        // 21:1 ✓
        'text-light-secondary': '#e0e0e0', // 14.57:1 ✓
        
        // Interactive elements
        'primary': '#2563eb',           // 4.56:1 on white ✓
        'primary-hover': '#1d4ed8',     // 6.29:1 on white ✓
      }
    }
  }
}
```

### Reduced Motion

```tsx
// Respect user preferences
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.6,
    ease: 'easeOut'
  }}
  className="motion-reduce:transition-none motion-reduce:transform-none"
>
  {children}
</motion.div>
```

```css
/* globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Accessibility Testing Tools

**Automated Testing**
- axe DevTools browser extension
- Lighthouse accessibility audit
- WAVE browser extension

**Manual Testing**
- Keyboard navigation (Tab, Shift+Tab, Enter, Escape, Arrow keys)
- Screen reader testing (NVDA on Windows, VoiceOver on Mac)
- Browser zoom (200%, 400%)
- Color blindness simulation (Chrome DevTools)


## Future Integration Preparation

### Sanity CMS Integration

**Client Configuration**
```typescript
// lib/sanity.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
```

**Schema Mapping**
```typescript
// Future Sanity schema structure
// schemas/portfolio.ts
export default {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Professional Title'
    },
    {
      name: 'aboutText',
      type: 'text',
      title: 'About Text'
    },
    {
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [{ type: 'reference', to: [{ type: 'project' }] }]
    },
    {
      name: 'experience',
      type: 'array',
      title: 'Experience',
      of: [{ type: 'reference', to: [{ type: 'experience' }] }]
    }
  ]
};
```

**Feature Flag System**
```typescript
// lib/features.ts
export const features = {
  useCMS: process.env.NEXT_PUBLIC_USE_CMS === 'true',
  useCloudinary: process.env.NEXT_PUBLIC_USE_CLOUDINARY === 'true',
};

// Usage in components
import { features } from '@/lib/features';
import { portfolioData } from '@/data/portfolio';
import { getPortfolioData } from '@/lib/sanity';

export async function getPortfolio() {
  if (features.useCMS) {
    return await getPortfolioData();
  }
  return portfolioData;
}
```


### Cloudinary Integration

**Client Configuration**
```typescript
// lib/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };

// Helper function for generating optimized URLs
export function getCloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'auto' | 'webp' | 'avif';
    crop?: 'fill' | 'fit' | 'scale';
  } = {}
) {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill'
  } = options;

  const transformations = [
    width && `w_${width}`,
    height && `h_${height}`,
    `q_${quality}`,
    `f_${format}`,
    `c_${crop}`,
  ].filter(Boolean).join(',');

  return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
}
```

**Migration Path**
```typescript
// Migration script: scripts/migrate-to-cloudinary.ts
import { cloudinary } from '@/lib/cloudinary';
import fs from 'fs';
import path from 'path';

async function uploadAsset(filePath: string, folder: string) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: `portfolio/${folder}`,
      use_filename: true,
      unique_filename: false,
    });
    
    return {
      publicId: result.public_id,
      url: result.secure_url,
      originalPath: filePath,
    };
  } catch (error) {
    console.error(`Failed to upload ${filePath}:`, error);
    return null;
  }
}

// Usage: npm run migrate:cloudinary
```

### Resend Email Integration

**Email Configuration**
```typescript
// lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const result = await resend.emails.send({
      from: 'Portfolio Contact <noreply@mokashkumar.com>',
      to: process.env.CONTACT_EMAIL_TO!,
      replyTo: data.email,
      subject: `Portfolio Contact: ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return { success: true, id: result.id };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
}
```

**API Route Implementation**
```typescript
// app/api/contact/route.ts
import { sendContactEmail } from '@/lib/email';
import { NextRequest, NextResponse } from 'next/server';

// Simple rate limiting (in-memory, for production use Redis)
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 3;

  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter(time => now - time < windowMs);

  if (recentRequests.length >= maxRequests) {
    return true; // Rate limited
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    if (checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendContactEmail({ name, email, message });

    if (!result.success) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```


## Deployment

### Vercel Configuration

**vercel.json**
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://mokashkumar.com"
  },
  "build": {
    "env": {
      "NEXT_PUBLIC_SANITY_PROJECT_ID": "@sanity-project-id",
      "NEXT_PUBLIC_SANITY_DATASET": "@sanity-dataset",
      "CLOUDINARY_CLOUD_NAME": "@cloudinary-cloud-name",
      "RESEND_API_KEY": "@resend-api-key"
    }
  }
}
```

### Environment Variables

**Required for Production:**
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://mokashkumar.com

# Sanity CMS (when enabled)
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token

# Cloudinary (when enabled)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Resend Email
RESEND_API_KEY=your-resend-api-key
CONTACT_EMAIL_TO=mokshkumar38@gmail.com

# Feature Flags
NEXT_PUBLIC_USE_CMS=false
NEXT_PUBLIC_USE_CLOUDINARY=false
```

### Deployment Checklist

**Pre-Deployment:**
- [ ] Run production build locally: `npm run build`
- [ ] Test production build: `npm run start`
- [ ] Run Lighthouse audit
- [ ] Verify all environment variables are set
- [ ] Test contact form submission
- [ ] Verify all images load correctly
- [ ] Check console for errors
- [ ] Test on multiple browsers
- [ ] Test on mobile devices

**Vercel Deployment:**
1. Connect GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Set build command: `npm run build`
4. Set output directory: `.next`
5. Deploy to production

**Post-Deployment:**
- [ ] Verify site loads at production URL
- [ ] Test all navigation links
- [ ] Submit contact form
- [ ] Check analytics tracking
- [ ] Verify sitemap.xml is accessible
- [ ] Verify robots.txt is accessible
- [ ] Test social media sharing (Open Graph)
- [ ] Configure custom domain (if applicable)
- [ ] Set up SSL certificate (automatic with Vercel)

### Custom Domain Configuration

```bash
# Add custom domain in Vercel dashboard
# Configure DNS records:

# A Record
Type: A
Name: @
Value: 76.76.21.21

# CNAME Record
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Monitoring and Analytics

```typescript
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
```


## Implementation Notes

### Development Workflow

**Initial Setup**
```bash
# Create new Next.js project
npx create-next-app@latest portfolio-v2 --typescript --tailwind --app --no-src-dir

# Navigate to project
cd portfolio-v2

# Install dependencies
npm install framer-motion gsap @studio-freight/lenis lucide-react
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate
npm install @sanity/client @sanity/image-url cloudinary resend

# Install dev dependencies
npm install -D @types/node @types/react @types/react-dom
```

**Development Commands**
```bash
# Start development server
npm run dev

# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm run start

# Analyze bundle size
npm run analyze
```

### Migration Script

```typescript
// scripts/migrate-assets.ts
import fs from 'fs';
import path from 'path';

const OLD_PROJECT = path.join(__dirname, '..');
const NEW_PROJECT = path.join(__dirname, '..', 'portfolio-v2');

const ASSET_DIRS = [
  'public/assets/profile',
  'public/assets/projects',
  'public/assets/documents',
  'public/assets/gallery',
  'public/assets/media',
];

interface MigrationReport {
  directory: string;
  fileCount: number;
  totalSize: number;
  files: { name: string; size: number }[];
}

function copyDirectory(src: string, dest: string): MigrationReport {
  const report: MigrationReport = {
    directory: src,
    fileCount: 0,
    totalSize: 0,
    files: [],
  };

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      const subReport = copyDirectory(srcPath, destPath);
      report.fileCount += subReport.fileCount;
      report.totalSize += subReport.totalSize;
      report.files.push(...subReport.files);
    } else {
      fs.copyFileSync(srcPath, destPath);
      const stats = fs.statSync(srcPath);
      report.fileCount++;
      report.totalSize += stats.size;
      report.files.push({ name: entry.name, size: stats.size });
    }
  }

  return report;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

async function migrateAssets() {
  console.log('Starting asset migration...\n');
  
  const reports: MigrationReport[] = [];

  for (const dir of ASSET_DIRS) {
    const srcPath = path.join(OLD_PROJECT, dir);
    const destPath = path.join(NEW_PROJECT, dir);

    if (!fs.existsSync(srcPath)) {
      console.log(`⚠️  Directory not found: ${dir}`);
      continue;
    }

    console.log(`Copying ${dir}...`);
    const report = copyDirectory(srcPath, destPath);
    reports.push(report);
    console.log(`✓ Copied ${report.fileCount} files (${formatBytes(report.totalSize)})\n`);
  }

  // Generate migration report
  const reportPath = path.join(NEW_PROJECT, 'migration-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(reports, null, 2));

  console.log('Migration complete!');
  console.log(`Total files: ${reports.reduce((sum, r) => sum + r.fileCount, 0)}`);
  console.log(`Total size: ${formatBytes(reports.reduce((sum, r) => sum + r.totalSize, 0))}`);
  console.log(`\nReport saved to: ${reportPath}`);
}

migrateAssets().catch(console.error);
```

**Run migration:**
```bash
npx ts-node scripts/migrate-assets.ts
```


### Component Implementation Order

**Phase 1: Foundation (Week 1)**
1. Project setup and configuration
2. Asset migration
3. Data structure migration
4. Utility functions and helpers
5. Animation system setup

**Phase 2: Layout (Week 1)**
1. Root layout with metadata
2. Navbar component
3. Footer component
4. Global styles and theme

**Phase 3: Core Sections (Week 2-3)**
1. Hero Section (highest priority)
2. About Section
3. Skills Section
4. Experience Section
5. Projects Section

**Phase 4: Additional Sections (Week 3-4)**
1. Gallery Section
2. Contact Section
3. Additional UI components (Lightbox, etc.)

**Phase 5: Integration & Testing (Week 4)**
1. API routes (contact form)
2. Performance optimization
3. Accessibility audit
4. Cross-browser testing
5. Responsive testing

**Phase 6: Deployment (Week 4)**
1. Production build verification
2. Environment configuration
3. Vercel deployment
4. Domain configuration
5. Post-deployment testing

### Code Quality Standards

**TypeScript**
- Strict mode enabled
- No `any` types (use `unknown` if necessary)
- Explicit return types for functions
- Interface over type for object shapes

**React**
- Functional components only
- Custom hooks for reusable logic
- Proper dependency arrays in useEffect
- Memoization for expensive computations

**Styling**
- Tailwind utility classes preferred
- CSS Modules for component-specific styles
- Consistent spacing scale
- Mobile-first responsive design

**Performance**
- Lazy load below-the-fold content
- Optimize images with Next.js Image
- Code split by route
- Minimize bundle size

**Accessibility**
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance


## Risk Mitigation

### Identified Risks

**1. Asset Migration Failures**
- **Risk**: Files may be corrupted or missing during migration
- **Mitigation**: 
  - Generate detailed migration report with file checksums
  - Verify file integrity after migration
  - Keep backup of original assets
  - Test asset loading in development before deployment

**2. Performance Degradation**
- **Risk**: Large images and animations may slow down the site
- **Mitigation**:
  - Use Next.js Image optimization
  - Implement lazy loading for below-the-fold content
  - Code split by route
  - Monitor Core Web Vitals
  - Set performance budgets

**3. Browser Compatibility Issues**
- **Risk**: Animations or features may not work in older browsers
- **Mitigation**:
  - Test in all major browsers (Chrome, Firefox, Safari, Edge)
  - Use progressive enhancement
  - Provide fallbacks for unsupported features
  - Use autoprefixer for CSS compatibility

**4. Accessibility Violations**
- **Risk**: Site may not be accessible to users with disabilities
- **Mitigation**:
  - Run automated accessibility audits (axe DevTools)
  - Manual testing with keyboard navigation
  - Test with screen readers
  - Follow WCAG AA guidelines
  - Implement proper ARIA labels

**5. Data Structure Mismatches**
- **Risk**: TypeScript interfaces may not match actual data
- **Mitigation**:
  - Strict TypeScript compilation
  - Runtime validation for critical data
  - Comprehensive type checking
  - Unit tests for data validation

**6. Third-Party Service Failures**
- **Risk**: Sanity, Cloudinary, or Resend may be unavailable
- **Mitigation**:
  - Implement graceful degradation
  - Use feature flags to toggle integrations
  - Provide fallbacks (static data, local assets)
  - Error handling and retry logic
  - Monitor service status

**7. Build Failures**
- **Risk**: Production build may fail due to dependency issues
- **Mitigation**:
  - Use exact version pinning for dependencies
  - Test production builds locally before deployment
  - Set up CI/CD pipeline for automated testing
  - Keep dependencies up to date

### Rollback Plan

If critical issues are discovered after deployment:

1. **Immediate**: Revert to previous Vercel deployment
2. **Short-term**: Fix issues in development, test thoroughly
3. **Long-term**: Implement better testing and monitoring

### Success Criteria

The migration is considered successful when:

- [ ] All assets migrated and loading correctly
- [ ] All sections rendering properly on all devices
- [ ] Lighthouse scores meet targets (>90 desktop, >80 mobile)
- [ ] No console errors or warnings
- [ ] Accessibility audit passes (WCAG AA)
- [ ] Cross-browser testing passes
- [ ] Contact form working correctly
- [ ] Production build completes without errors
- [ ] Site deployed and accessible at production URL



## Implementation Summary

### Current State Assessment

**✅ COMPLETED (Foundation)**
- Next.js 14.2.35 project initialized with App Router
- TypeScript 5+ configured with strict mode
- Tailwind CSS 3.4.1 configured with custom theme
- All core dependencies installed (Framer Motion, GSAP, Lenis, Lucide React)
- Data structures fully defined in `/data/portfolio.ts` and `/data/siteContent.ts`
- Complete portfolio data populated (3 projects, 5 experiences, 5 certifications, 4 hobbies)
- Component architecture established (sections, layout, UI)
- Asset directory structure organized in `/public/assets/`

**✅ COMPONENTS IMPLEMENTED**
- Layout: Navbar, Footer
- Sections: HeroSection, PersonalHero, AboutSection, ExperienceSection, ProjectsSection, ContactSection, HobbiesBento, LifeComponentsCarousel, InteractiveWidgets, ThankYouBanner
- UI: Button, CanvasBackdrop, SkillRadarChart
- Portfolio: PortfolioClone

**⚠️ NEEDS ENHANCEMENT**
- Animation integration (Framer Motion, GSAP, Lenis)
- Responsive behavior testing and fixes
- Form validation and API integration
- Performance optimization
- Accessibility features
- Cross-browser testing

**⚠️ MISSING COMPONENTS**
- GallerySection (for photography, videography, editing, travel)
- Lightbox component (for gallery images)
- Separate SkillsSection (currently integrated into AboutSection)

**📋 NOT STARTED**
- Contact form API route implementation
- Sanity CMS configuration
- Cloudinary configuration
- Resend email integration
- Environment variables setup
- Production deployment

### Priority Action Items

**Immediate (Week 1)**
1. Create `lib/animations.ts` with Framer Motion variants
2. Initialize Lenis smooth scroll in root layout
3. Integrate scroll-triggered animations into existing sections
4. Test and fix responsive layouts across all breakpoints
5. Implement contact form validation and API route

**Short-term (Week 2-3)**
1. Create GallerySection component with masonry grid
2. Create Lightbox component for full-screen image viewing
3. Populate gallery assets (photography, videography, editing, travel)
4. Add animated counters to AboutSection
5. Implement project category filtering
6. Add timeline visualization to ExperienceSection

**Medium-term (Week 3-4)**
1. Performance optimization (image lazy loading, code splitting)
2. Accessibility audit and fixes (keyboard navigation, ARIA labels, screen reader support)
3. Cross-browser testing (Chrome, Firefox, Safari, Edge)
4. Create `.env.local` with environment variables
5. Configure Resend for email delivery

**Long-term (Week 4+)**
1. Configure Sanity CMS and migrate data
2. Configure Cloudinary and migrate assets
3. Set up Vercel deployment
4. Production build verification
5. Domain configuration
6. Post-deployment monitoring

### Technical Debt

**Known Issues:**
1. No animation system implemented despite libraries being installed
2. Responsive layouts not thoroughly tested
3. No form validation or error handling
4. Missing gallery section for creative work showcase
5. No environment variables configured
6. Social links in `siteContent.ts` are placeholder "#" values
7. No accessibility features implemented (keyboard nav, ARIA labels)
8. No performance optimizations (lazy loading, code splitting)

**Recommendations:**
1. Create animation configuration file before integrating into components
2. Set up comprehensive responsive testing workflow
3. Implement form validation library (e.g., React Hook Form + Zod)
4. Prioritize gallery section as it showcases creative work
5. Create `.env.example` documentation for all required variables
6. Update social links with actual URLs
7. Run accessibility audit and create remediation plan
8. Set performance budgets and monitor with Lighthouse

### Success Metrics

**Performance Targets:**
- Lighthouse Performance: >90 (desktop), >80 (mobile)
- First Contentful Paint (FCP): <1.5s
- Largest Contentful Paint (LCP): <2.5s
- Cumulative Layout Shift (CLS): <0.1
- Time to Interactive (TTI): <3.5s

**Accessibility Targets:**
- Lighthouse Accessibility: >95
- WCAG AA compliance: 100%
- Keyboard navigation: All interactive elements accessible
- Screen reader support: All content announced correctly

**Quality Targets:**
- TypeScript compilation: 0 errors
- ESLint: 0 errors, 0 warnings
- Production build: Success without errors
- Cross-browser compatibility: Chrome, Firefox, Safari, Edge (latest versions)
- Responsive design: 320px to 2560px width

### Next Steps

1. **Review this design document** with stakeholders
2. **Prioritize missing components** (Gallery, Lightbox, Skills)
3. **Create animation implementation plan** with specific component targets
4. **Set up development workflow** (testing, linting, build verification)
5. **Begin Phase 4 implementation** (Integration & Enhancement)

---

**Document Version:** 2.0  
**Last Updated:** 2025-01-XX  
**Status:** In Progress - Phase 4 (Integration & Enhancement)
