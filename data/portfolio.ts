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
  color?: string; // neon highlight theme color
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

export const portfolioData: PortfolioData = {
  name: "Mokash Kumar",
  fullName: "Mokash Kumar", // Exactly matching official resume
  nickname: "Moksh",
  title: "Aspiring AI Engineer | CSE Undergraduate @ MUET",
  location: "Hyderabad, Sindh, Pakistan",
  email: "mokshkumar38@gmail.com", // Exactly matching official resume email
  linkedin: "linkedin.com/in/mokashkumar",
  github: "github.com/mokashkumar1",
  instagram: "instagram.com/mokshluhana",
  resumeUrl: "https://drive.google.com/file/d/1QwVP4oj3UiYuiX0XP-XkFIAgWKsUrPcH/view?usp=sharing",
  aboutText: "Computer Systems Engineering undergraduate passionate about Data Analytics, Machine Learning, and problem-solving using real-world data. Skilled in Python, Java, C++, data cleaning, and analytical thinking with hands-on experience building machine learning projects using self-collected datasets. Familiar with Linear Regression, Gradient Descent, and data preprocessing techniques. Strong team collaborator with leadership and event coordination experience. Seeking opportunities to apply analytical and technical skills in practical environments.",
  vibeText: "Moksh is Curious & Driven. Where engineering logic meets infinite creative boundaries ⚡ 💻 🎯",
  professionalStats: {
    projectsCount: 7,
    gitCommits: 1247,
    techStackCount: 15,
  },
  personalCounters: {
    booksRead: "18+",
    videosEdited: 80,
    gitCommits: 1247,
    chaiConsumed: "1,247+",
    mlModels: 1,
    curiosityLevel: "∞",
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "C++", "SQL", "Dart (Basic)"]
    },
    {
      category: "Data Analytics & ML",
      items: ["Data Cleaning", "Data Visualization", "Data Preprocessing", "Linear Regression", "Gradient Descent"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "GitHub", "VS Code", "Vercel", "Tableau", "Microsoft Excel"]
    },
    {
      category: "Databases & Core Tools",
      items: ["SQL", "Advanced Data Analytics", "Artificial Intelligence Fundamentals"]
    }
  ],
  radarSkills: [
    { subject: "ML Models", value: 90, fullMark: 100 },
    { subject: "Data Analytics", value: 90, fullMark: 100 },
    { subject: "Videography", value: 95, fullMark: 100 },
    { subject: "Programming", value: 85, fullMark: 100 },
    { subject: "Problem Solving", value: 90, fullMark: 100 },
    { subject: "Git & Cloud", value: 80, fullMark: 100 }
  ],
  education: {
    degree: "Bachelor of Engineering – Computer Systems Engineering",
    institution: "Mehran University of Engineering and Technology (MUET)",
    duration: "Aug 2024 – Present"
  },
  projects: [
    {
      title: "ParhoSain – Mock Test Platform",
      description: "Production-grade mock test platform for Pakistani entrance exams (MUET/NED). Delivers timed full-length exams with subject-wise practice modules and payment verification workflows.",
      longDescription: "ParhoSain is a production-grade educational platform built with PHP 8.2 and MySQL, serving Pakistani students preparing for entrance exams. Features sophisticated payment verification workflows, session device locking for security, and comprehensive admin systems. Implements enterprise-level security including session device locking and CSRF protection.",
      category: "EdTech Platform",
      tech: ["PHP 8.2", "MySQL", "Nginx", "Payment Systems", "Security"],
      githubUrl: "https://github.com/mokashkumar1/ParhoSain",
      demoUrl: "https://parhossain.tech",
      image: "/assets/projects/parhosain/cover.png",
      highlights: [
        "Live production deployment serving active student base",
        "Secure payment verification with fraud detection",
        "Device-locking session management (prevents multi-device access)",
        "Admin dashboard for user management and payment verification",
        "OWASP security compliance with prepared statements & CSRF tokens"
      ]
    },
    {
      title: "MUET CS Results Portal",
      description: "Real-time academic performance portal for Mehran University CS students. Enables instant result lookup by batch & roll number, interactive batch leaderboards for 1,000+ students, and multi-dimensional ranking.",
      longDescription: "The MUET CS Results Portal is a high-performance web application serving 1,000+ students seeking instant access to academic data. Built as a Single Page Application, it features sophisticated ranking algorithms, real-time filtering, and SEO optimization. Handles complex data structures and delivers seamless UX at scale with vanilla JavaScript.",
      category: "Educational Technology",
      tech: ["JavaScript", "HTML5", "CSS3", "SPA", "SEO"],
      githubUrl: "https://github.com/mokashkumar1/cs.batch.results",
      demoUrl: "https://csbatchresults.vercel.app",
      image: "/assets/projects/cs-results/cover.png",
      highlights: [
        "1,000+ student records with sub-100ms filtering",
        "Multi-criteria ranking engine with tie-breaking logic",
        "Batch analytics dashboard with 4 KPI metrics",
        "Full accessibility compliance (WCAG 2.1 Level AA)",
        "Deep-linkable URLs for shareable results"
      ]
    },
    {
      title: "Amanat – Transparent Donation Platform",
      description: "Trust-first donation platform providing complete transparency into charitable fund utilization. Enables donors to track their contributions in real-time.",
      longDescription: "Amanat is a transparent donation platform built to address donor skepticism in nonprofit giving. Using Supabase for real-time data synchronization, the platform provides complete visibility into fund utilization, campaign progress, and impact metrics. Features modern dark theme UI with glassmorphism effects, responsive design, and sophisticated campaign management systems.",
      category: "Nonprofit Tech",
      tech: ["Supabase", "PostgreSQL", "HTML5", "CSS3", "Real-time Sync"],
      githubUrl: "https://github.com/mokashkumar1/amanat",
      demoUrl: "",
      image: "/assets/projects/amanat/cover.png",
      highlights: [
        "Real-time donation tracking with Supabase subscriptions",
        "Beautiful dark theme with glassmorphism UI design",
        "Campaign progress visualization and milestone tracking",
        "Secure authentication with Supabase Auth",
        "Fully responsive for all device sizes"
      ]
    },
    {
      title: "Lottery App",
      description: "Fun, interactive lottery game for iOS and Android. Generate random numbers and win themed outcomes with culturally-relevant messages and images.",
      longDescription: "Built an engaging cross-platform mobile game using Flutter, demonstrating expertise in state management, responsive UI design, and asset optimization. The application showcases playful UX patterns, smooth animations, and cultural humor while maintaining production-quality code architecture.",
      category: "Mobile Development",
      tech: ["Flutter", "Dart", "iOS", "Android", "Material Design"],
      githubUrl: "https://github.com/mokashkumar1/Lottery_app",
      demoUrl: "",
      image: "/assets/projects/lottery-app/cover.png",
      highlights: [
        "Cross-platform app from single codebase",
        "Smooth animations and visual feedback",
        "Custom asset integration (images & themes)",
        "Responsive design for multiple screen sizes",
        "Material Design UI implementation",
        "Proper Flutter project structure"
      ]
    },
    {
      title: "Online Voting System",
      description: "Secure digital voting platform enabling remote elections with vote anonymity and integrity verification. Features user authentication and real-time result counting.",
      longDescription: "Built a secure PHP-based voting platform demonstrating expertise in election security, vote anonymity, and fraud prevention. Features comprehensive authentication, encrypted vote storage, audit trails, and real-time result aggregation. Shows understanding of democratic processes and regulatory compliance requirements.",
      category: "Civic Tech",
      tech: ["PHP", "MySQL", "Security", "Authentication", "Privacy"],
      githubUrl: "https://github.com/mokashkumar1/onlinevotingsystem",
      demoUrl: "",
      image: "/assets/projects/online-voting/cover.png",
      highlights: [
        "Vote anonymity with accountability (separate voter registry & vote ledger)",
        "Real-time result aggregation with database locks",
        "SQL injection prevention with prepared statements",
        "CSRF protection for all forms",
        "Mobile-responsive voting interface"
      ]
    },
    {
      title: "Rickshaw Fare Predictor",
      description: "AI-powered fare calculator using linear regression to instantly estimate rickshaw costs. Enter distance in km, get predicted fare in Pakistani Rupees.",
      longDescription: "The Rickshaw Fare Predictor demonstrates practical application of linear regression machine learning in transportation. Using pre-trained coefficients, the tool instantly calculates estimated fares from distance input with a responsive, user-friendly interface. Showcases how academic ML concepts solve real-world problems in logistics and e-commerce.",
      category: "Machine Learning",
      tech: ["Linear Regression", "HTML5", "CSS3", "JavaScript", "Vercel"],
      githubUrl: "https://github.com/mokashkumar1/rickshaw-fare-predictor",
      demoUrl: "https://rickshaw-fare-predictor.vercel.app",
      image: "/assets/projects/rickshaw-fare-prediction/cover.png",
      highlights: [
        "Linear regression model for accurate fare prediction",
        "Responsive design (mobile, tablet, desktop)",
        "Zero external dependencies (vanilla JS)",
        "Instant client-side calculations",
        "Quick-access example buttons"
      ]
    },
    {
      title: "Digital Notebook",
      description: "Console-based note management system built in C++. Create, edit, organize, and search notes with automatic persistence to disk.",
      longDescription: "Digital Notebook is a collaborative C++ project showcasing Object-Oriented Programming principles, file I/O operations, and practical data persistence. The console-based application demonstrates clean code architecture, dynamic memory management, and user-friendly design patterns applicable to larger systems.",
      category: "Educational Project",
      tech: ["C++", "OOP", "File I/O", "Data Persistence", "Console App"],
      githubUrl: "https://github.com/mokashkumar1/Digital-Notebook",
      demoUrl: "",
      image: "/assets/projects/secure-digital-notebook/cover.png",
      highlights: [
        "Complete note CRUD operations (Create, Read, Update, Delete)",
        "Category-based organization system",
        "Full-text search functionality",
        "Persistent file storage between sessions",
        "Clean OOP architecture with proper encapsulation",
        "Collaborative team development"
      ]
    }
  ],
  experience: [
    {
      role: "Head Director of Videography",
      company: "Hult Prize MUET SZAB",
      duration: "Jan 2025 – Mar 2025",
      location: "Jamshoro, Sindh, Pakistan",
      description: [
        "Directed media production planning and execution for international entrepreneurship event.",
        "Coordinated recording, planning, and post-production across teams."
      ],
      color: "amber"
    },
    {
      role: "Volunteer",
      company: "PEF Soft Skills Training Program",
      duration: "Mar 2025",
      location: "Mehran University of Engineering and Technology (MUET), Jamshoro",
      description: [
        "Supported event coordination and participant engagement for professional development sessions.",
        "Volunteered at the PEFAA Soft Skills Training Program, contributing to event management, participant engagement, and interactive workshops."
      ],
      color: "purple"
    },
    {
      role: "Volunteer",
      company: "1st International Conference on Innovations in Information and Communication Technologies (IICT’26)",
      duration: "Jan 2026",
      location: "Jamshoro, Sindh, Pakistan",
      description: [
        "Assisted during a hands-on CI/CD workshop focused on building end-to-end DevOps pipelines from code to cloud.",
        "Contributed to event operations, participant management, and workshop facilitation to ensure smooth event operations.",
        "Gained exposure to DevOps concepts, CI/CD workflows, and global research discussions."
      ],
      color: "cyan"
    },
    {
      role: "Content Creator",
      company: "D3 Digital Dream Dynamo",
      duration: "Oct 2024 – Jan 2025",
      location: "Jamshoro, Sindh, Pakistan",
      description: [
        "Crafted relatable, creative content that connects with people and drives digital engagement.",
        "Coordinated digital video campaigns and established creative post-production timelines."
      ],
      color: "pink"
    },
    {
      role: "Video & Audio Editor",
      company: "MUET FM 92.6",
      duration: "Aug 2024 – Jan 2025",
      location: "Jamshoro, Sindh, Pakistan",
      description: [
        "Managed video & audio editing post-production workflows for university radio broadcasts.",
        "Edited engaging promotional clips and mixed high-quality audio feeds for social channels."
      ],
      color: "blue"
    }
  ],
  certifications: [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI, Stanford University"
    },
    {
      title: "AI Seekho Season 6 – Tier 2 Recognition",
      issuer: "Google Developer Groups"
    },
    {
      title: "10x Growth Series Achievement Certificate",
      issuer: "10x Growth Series"
    },
    {
      title: "Introduction to Artificial Intelligence Certification",
      issuer: "MUET / GDG"
    }
  ],
  hobbies: [
    {
      title: "🎬 Visual Storyteller",
      icon: "camera",
      description: "Photography, videography, and content creation. I enjoy capturing real moments and turning them into meaningful visual stories, whether for events, projects, or social media.",
      image: "/hobbies/storytelling.jpg"
    },
    {
      title: "🎧 Audio Deck Editor & Creator",
      icon: "music",
      description: "Listen to music, edit videos, make reels, and write engaging scripts. Working at MUET FM 92.6 and editing audio/video has instilled a love for sound mixing and podcast editing.",
      image: "/hobbies/audio.jpg"
    },
    {
      title: "📚 Curious Reader",
      icon: "book",
      description: "Actively studying self-growth and creative thinking. Currently working through 'The Art of Not Overthinking' and 'Steal Like an Artist' to polish my mindset and creative approach.",
      image: "/hobbies/reading.jpg"
    },
    {
      title: "💡 AI & Automation Chaser",
      icon: "sparkles",
      description: "Deeply interested in learning and exploring neural models, building custom automation pipelines, and understanding advanced DSA inside of Java to create high-efficiency tools.",
      image: "/hobbies/ai.jpg"
    }
  ],
  lifeCarousel: [
    {
      title: "Photography & Videography",
      subtitle: "Capturing Real Moments",
      description: "From directing camera layouts at Hult Prize MUET to writing scripts for cinematic reels, photography is about finding the unique angle and preserving the emotion in high definition.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "AI / Software Development",
      subtitle: "Building from Scratch",
      description: "Whether it is hand-coding a Linear Regression model with raw Gradient Descent or constructing an encrypted file management vault in C++, coding is my playground for logical expression.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Podcasting & Audio Editing",
      subtitle: "Mixing Crisp Soundwaves",
      description: "Polishing frequencies, adjusting microphone noise gates, and mixing soundbeds at MUET FM 92.6. Every waveform tells a story, and the audio deck is where I make it crisp and immersive.",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop"
    }
  ],
  routine: [
    {
      time: "07:00 AM",
      activity: "Wake up & Plan the Day",
      details: "Head to Mehran University (MUET). Attending lectures, systems labs, and collaborating on coursework."
    },
    {
      time: "08:00 AM",
      activity: "Deep Work / Coding",
      details: "Systems engineering, university sessions, and collaborative work."
    },
    {
      time: "01:00 PM",
      activity: "Learn Something New",
      details: "Exploring new AI concepts, practicing DSA, or building micro-projects."
    },
    {
      time: "04:00 PM",
      activity: "Gym / Break",
      details: "Winding down, working out to build discipline, and grabbing a warm cup of Chai."
    },
    {
      time: "07:00 PM",
      activity: "Projects / Content Creation",
      details: "Deep coding blocks! Implementing ML models, editing videography clips, or scripting podcast episodes."
    },
    {
      time: "11:00 PM",
      activity: "Reading / Reflection",
      details: "Reviewing daily achievements, reading self-growth literature, and mapping out tomorrow's schedule."
    },
    {
      time: "12:30 AM",
      activity: "Sleep & Repeat",
      details: "Recharging for the next day."
    }
  ],
  futurePlans: [
    "Build and launch an AI-powered chatbot or SaaS application using modern stacks.",
    "Master Data Structures & Algorithms in Java for robust enterprise problem-solving.",
    "Become strong in mobile development using the Flutter & Dart framework.",
    "Work on real-world AI pipelines, computer vision, and automation tools.",
    "Improve English fluency and professional public speaking confidence.",
    "Travel to the breathtaking northern areas of Pakistan for high-altitude photography projects."
  ],
  musicTrack: {
    title: "The Night We Met",
    artist: "Lord Huron"
  }
};
