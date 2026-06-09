"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const TechLogos = {
  python: () => (
    <Image src="/assets/logos/python.gif" alt="Python" width={32} height={32} unoptimized className="h-8 w-auto object-contain" />
  ),
  java: () => (
    <Image src="/assets/logos/java.gif" alt="Java" width={32} height={32} unoptimized className="h-8 w-auto object-contain" />
  ),
  cpp: () => (
    <Image src="/assets/logos/icons8-c++-96.png" alt="C++" width={32} height={32} className="h-8 w-auto object-contain" />
  ),
  git: () => (
    <svg className="h-8 w-auto" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
      <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"/>
    </svg>
  ),
  github: () => (
    <svg className="h-8 w-auto" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6C29.304 70.25 17.9 65.982 17.9 46.96c0-5.867 2.103-10.675 5.544-14.42-.566-1.222-2.427-6.845.566-14.178 0 0 4.527-1.466 14.8 5.541 4.285-1.222 8.898-1.792 13.431-1.792s9.146.57 13.431 1.792c10.272-7.007 14.8-5.541 14.8-5.541 2.992 7.333 1.132 12.956.566 14.178 3.522 3.745 5.544 8.553 5.544 14.42 0 19.188-11.567 23.208-22.574 24.426 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" className="fill-white"/>
    </svg>
  ),
  vscode: () => (
    <Image src="/assets/logos/icons8-vs-code-96.png" alt="VS Code" width={32} height={32} className="h-8 w-auto object-contain" />
  ),
  vercel: () => (
    <svg className="h-6 w-auto" viewBox="0 0 283 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.51-8.54 3.51-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-18-19-18zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.51-8.54 3.51-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-18-19-18zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm-67.56-18c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.51-8.54 3.51-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-18-19-18zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9z" className="fill-white"/>
      <path d="M8.654 52L0 16h9.6l5.054 24 5.054-24H29.33l5.054 24L39.437 16h9.6L40.384 52H30.78l-5.456-24L19.87 52H8.654z" className="fill-white"/>
      <path d="M141.5 0L283 64H0z" className="fill-white" transform="translate(-120, -5) scale(0.22)"/>
    </svg>
  ),
  tableau: () => (
    <Image src="/assets/logos/icons8-tableau-software-96.png" alt="Tableau" width={32} height={32} className="h-8 w-auto object-contain" />
  ),
  sql: () => (
    <Image src="/assets/logos/sql.gif" alt="SQL" width={32} height={32} unoptimized className="h-8 w-auto object-contain" />
  ),
  flutter: () => (
    <Image src="/assets/logos/flutter.gif" alt="Flutter" width={32} height={32} unoptimized className="h-8 w-auto object-contain" />
  ),
  dart: () => (
    <Image src="/assets/logos/icons8-dart-96.png" alt="Dart" width={32} height={32} className="h-8 w-auto object-contain" />
  ),
  excel: () => (
    <Image src="/assets/logos/icons8-excel-96.png" alt="Excel" width={32} height={32} className="h-8 w-auto object-contain" />
  ),
  dataAnalysis: () => (
    <Image src="/assets/logos/data-analysis.gif" alt="Data Analysis" width={32} height={32} unoptimized className="h-8 w-auto object-contain" />
  ),
  neuralNetwork: () => (
    <svg className="h-8 w-auto text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="2.5" fill="currentColor" />
      <circle cx="5" cy="12" r="2.5" fill="currentColor" />
      <circle cx="19" cy="12" r="2.5" fill="currentColor" />
      <circle cx="12" cy="19" r="2.5" fill="currentColor" />
      <line x1="12" y1="7.5" x2="5" y2="9.5" />
      <line x1="12" y1="7.5" x2="19" y2="9.5" />
      <line x1="5" y1="14.5" x2="12" y2="16.5" />
      <line x1="19" y1="14.5" x2="12" y2="16.5" />
      <line x1="12" y1="7.5" x2="12" y2="16.5" />
    </svg>
  ),
  videoEditing: () => (
    <Image src="/assets/logos/video-editing.gif" alt="Video Editing" width={32} height={32} unoptimized className="h-8 w-auto object-contain" />
  ),
};

const skills = [
  { name: "Python", logo: TechLogos.python },
  { name: "Java", logo: TechLogos.java },
  { name: "C++", logo: TechLogos.cpp },
  { name: "MySQL", logo: TechLogos.sql },
  { name: "Flutter", logo: TechLogos.flutter },
  { name: "Dart", logo: TechLogos.dart },
  { name: "Data Analysis", logo: TechLogos.dataAnalysis },
  { name: "Machine Learning", logo: TechLogos.neuralNetwork },
  { name: "Video Editing", logo: TechLogos.videoEditing },
  { name: "Git", logo: TechLogos.git },
  { name: "GitHub", logo: TechLogos.github },
  { name: "VS Code", logo: TechLogos.vscode },
  { name: "Tableau", logo: TechLogos.tableau },
  { name: "Excel", logo: TechLogos.excel },
];

export function MarqueeDemo() {
  return (
    <div className="w-full relative bg-black/30 border-y border-white/5 backdrop-blur-sm">
      <Marquee pauseOnHover speed={35}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 mx-10 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300 cursor-pointer group"
          >
            <div className="group-hover:scale-110 transition-transform duration-300">
              <skill.logo />
            </div>
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
