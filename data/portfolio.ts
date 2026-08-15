export interface Project {
  title: string;
  description: string;
  problem: string;
  contribution: string;
  proof: string[];
  category: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  createdAt: string;
  status: "Active";
  slug: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export const portfolioData = {
  name: "Mokash Kumar",
  title: "Computer Systems Engineering Student",
  location: "Hyderabad, Sindh, Pakistan",
  email: "mokshkumar38@gmail.com",
  linkedinUrl: "https://linkedin.com/in/mokashkumar",
  githubUrl: "https://github.com/mokashkumar1",
  github: "github.com/mokashkumar1",
  linkedin: "linkedin.com/in/mokashkumar",
  instagram: "instagram.com/mokshluhana",
  resumeUrl: "/assets/resume/resume.pdf",
  summary:
    "I build practical web applications with React, JavaScript, Supabase, and PostgreSQL while developing my skills in machine learning and applied AI. I am working toward a career in AI engineering and seeking software engineering or AI/ML internship opportunities where I can contribute and keep growing.",
  aboutText:
    "Computer Systems Engineering student building practical web applications while developing a foundation in machine learning and applied AI.",
  proofPoints: [
    "2 deployed, documented flagship projects",
    "Web development with growing AI/ML experience",
    "Supabase/PostgreSQL data layer",
    "Automated builds and focused tests",
  ],
  education: {
    degree: "Bachelor of Engineering in Computer Systems Engineering",
    institution: "Mehran University of Engineering and Technology (MUET)",
    duration: "August 2024 - Present",
  },
  projects: [
    {
      title: "SmartCR",
      description:
        "An attendance workflow for class representatives, with student imports, absence-first session recording, subject history, low-attendance views, and exports.",
      problem:
        "Class representatives need a faster, less error-prone way to manage recurring attendance and identify students below the attendance threshold.",
      contribution:
        "Built the React application, Zustand state layer, Supabase data model, row-level ownership policies, CSV/text parser, attendance calculations, and export flows.",
      proof: [
        "Deployed application",
        "Public source repository",
        "Tests for calculations and imports",
      ],
      category: "Attendance management",
      tech: ["React", "JavaScript", "Zustand", "Supabase", "PostgreSQL", "Vite"],
      githubUrl: "https://github.com/mokashkumar1/SmartCR",
      demoUrl: "https://smartcr.vercel.app/",
      createdAt: "Current",
      status: "Active",
      slug: "smartcr",
    },
    {
      title: "MUET Results Portal",
      description:
        "A configurable results portal for GPA lookup, semester history, batch rankings, and an authenticated result-ingestion workflow.",
      problem:
        "Students need a searchable alternative to result sheets, while coordinators need a repeatable way to review and publish result updates.",
      contribution:
        "Built the browser interface, deterministic dense-ranking logic, CSV compilation pipeline, serverless authentication helpers, OCR-assisted ingestion, and static page generation.",
      proof: [
        "Deployed application",
        "Public open-source repository",
        "Synthetic demonstration dataset",
      ],
      category: "Results and ranking portal",
      tech: ["JavaScript", "Node.js", "Vercel Functions", "CSV", "Zod", "Gemini API"],
      githubUrl: "https://github.com/mokashkumar1/muet-results-portal-opensource",
      demoUrl: "https://muetresults.vercel.app/",
      createdAt: "Current",
      status: "Active",
      slug: "muet-cs-results-portal",
    },
    {
      title: "Rickshaw Fare Predictor",
      description:
        "A small machine-learning project that estimates rickshaw fares from trip inputs and presents the result through a web interface.",
      problem:
        "Create a simple, explainable prediction workflow around a locally relevant transport use case.",
      contribution:
        "Prepared the data workflow, trained the regression model, and connected the prediction flow to a usable interface.",
      proof: ["Deployed demo", "Public source repository"],
      category: "Applied machine learning",
      tech: ["Python", "Pandas", "scikit-learn", "Regression"],
      githubUrl: "https://github.com/mokashkumar1/rickshaw-fare-predictor",
      demoUrl: "https://rickshaw-fare-predictor.vercel.app/",
      createdAt: "Current",
      status: "Active",
      slug: "rickshaw-fare-predictor",
    },
  ] satisfies Project[],
  experience: [
    {
      role: "Head Director of Videography",
      company: "Hult Prize MUET SZAB",
      duration: "January 2025 - March 2025",
      description:
        "Planned media production and coordinated recording and post-production work across the event team.",
    },
    {
      role: "Video & Audio Editor",
      company: "MUET FM 92.6",
      duration: "August 2024 - January 2025",
      description:
        "Edited promotional video and audio content for university radio and social channels.",
    },
    {
      role: "Conference Volunteer",
      company: "1st International Conference on IICT",
      duration: "January 2026",
      description:
        "Supported event operations and a hands-on CI/CD workshop for conference participants.",
    },
  ] satisfies Experience[],
  skills: [
    { category: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Backend & data", items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "SQL", "CSV pipelines"] },
    { category: "Testing & tools", items: ["Git", "GitHub", "Vitest", "Node test runner", "Vercel", "Vite"] },
    { category: "AI & programming", items: ["Python", "Pandas", "scikit-learn", "Regression", "C++", "Java"] },
  ],
  creativeNote:
    "Outside engineering, I work with video, photography, and audio. That experience has made me more attentive to presentation, pacing, and the details people notice in a product.",
};
