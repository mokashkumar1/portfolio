/**
 * Shared TypeScript Types and Interfaces
 * Central location for type definitions used across the application
 */

// ============================================================================
// Portfolio Data Types
// ============================================================================

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

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface RadarSkill {
  subject: string;
  value: number;
  fullMark: number;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export interface ProfessionalStats {
  projectsCount: number;
  gitCommits: number;
  techStackCount: number;
}

export interface PersonalCounters {
  booksRead: string;
  videosEdited: number;
  gitCommits: number;
  chaiConsumed: string;
  mlModels: number;
  curiosityLevel: string;
}

export interface MusicTrack {
  title: string;
  artist: string;
  url?: string;
  cover?: string;
}

export interface LifeCarouselItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
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
  professionalStats: ProfessionalStats;
  personalCounters: PersonalCounters;
  skills: SkillCategory[];
  radarSkills: RadarSkill[];
  education: Education;
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  hobbies: Hobby[];
  lifeCarousel: LifeCarouselItem[];
  routine: RoutineItem[];
  futurePlans: string[];
  musicTrack: MusicTrack;
}

// ============================================================================
// Site Content Types
// ============================================================================

export interface ProfileAssets {
  profilePhoto: string;
  resumePdf: string;
  showreelVideo: string;
  musicCover: string;
}

export interface SocialLinks {
  github: string;
  instagram: string;
  linkedin: string;
  email: string;
}

export interface GalleryAssets {
  preview: string[];
  photography: string[];
  videography: string[];
  editing: string[];
  travel: string[];
}

// ============================================================================
// Component Props Types
// ============================================================================

export interface NavbarProps {
  sections: { id: string; label: string }[];
}

export interface FooterProps {
  socialLinks: SocialLinks;
}

export interface HeroSectionProps {
  name: string;
  title: string;
  location: string;
  profileImage: string;
  socialLinks: SocialLinks;
}

export interface AboutSectionProps {
  aboutText: string;
  vibeText: string;
  professionalStats: ProfessionalStats;
  personalCounters: PersonalCounters;
  profilePhoto: string;
}

export interface SkillsSectionProps {
  skills: SkillCategory[];
  radarSkills: RadarSkill[];
}

export interface ExperienceSectionProps {
  experience: Experience[];
}

export interface ProjectsSectionProps {
  projects: Project[];
}

export interface ContactSectionProps {
  email: string;
  socialLinks: SocialLinks;
}

export interface GallerySectionProps {
  galleryAssets: GalleryAssets;
}

// ============================================================================
// Form Types
// ============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

// ============================================================================
// API Types
// ============================================================================

export interface ContactAPIRequest {
  name: string;
  email: string;
  message: string;
}

export interface ContactAPIResponse {
  success: boolean;
  message: string;
  error?: string;
}

// ============================================================================
// Animation Types
// ============================================================================

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string | number[];
}

// ============================================================================
// Utility Types
// ============================================================================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;
