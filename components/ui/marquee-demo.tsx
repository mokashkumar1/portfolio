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
    <svg className="h-8 w-auto" viewBox="0 0 306 344" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
      <path d="M302.107 258.262c2.401-4.159 3.893-8.845 3.893-13.053V99.139c0-4.207-1.49-8.893-3.892-13.052L153 172.175l149.107 86.087z" fill="#00599C"/>
      <path d="M166.25 341.193l126.5-73.034c3.644-2.104 6.956-6.425 9.357-10.584L153 172.175 3.893 258.263c2.401 4.159 5.714 8.482 9.357 10.584l126.5 73.034c7.287 4.208 19.213 4.208 26.5-.688z" fill="#004482"/>
      <path d="M302.108 86.087c-2.402-4.16-5.715-8.482-9.358-10.584L166.25 2.469c-7.288-4.208-19.214-4.208-26.5 0L13.25 75.503C5.962 79.71.554 88.932.554 97.139v148.07c0 4.208 1.491 8.894 3.893 13.053L153 172.175l149.108-86.088z" fill="#659AD2"/>
      <path d="M153 274.175c-56.243 0-102-45.757-102-102s45.757-102 102-102c36.292 0 70.139 19.53 88.331 50.968l-44.143 25.544c-9.1-15.736-26.038-25.512-44.188-25.512-28.122 0-51 22.878-51 51 0 28.121 22.878 51 51 51 18.152 0 35.085-9.776 44.191-25.515l44.143 25.543C222.139 254.645 189.292 274.175 153 274.175z" fill="#FFF"/>
      <path d="M255 166.508h-11.334v-11.333h-11.332v11.333H221v11.333h11.334v11.334h11.332v-11.334H255zM297.5 166.508h-11.334v-11.333h-11.332v11.333H263.5v11.333h11.334h11.334h11.332v-11.334H297.5z" fill="#FFF"/>
    </svg>
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
    <svg className="h-8 w-auto" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <mask id="vscodeMask">
        <rect width="100" height="100" fill="white"/>
      </mask>
      <path d="M74.995 17.182l-28.58 26.156L27.77 27.78l-8.77 4.17v36.098l8.77 4.17 18.645-15.558L74.995 82.818 90 76.27V23.73l-15.005-6.548zM27.77 62.96V37.04L40.76 50 27.77 62.96zm47.225 7.61L55.008 50l19.987-20.57v41.14z" fill="#0065A9"/>
    </svg>
  ),
  vercel: () => (
    <svg className="h-6 w-auto" viewBox="0 0 283 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.51-8.54 3.51-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-18-19-18zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.51-8.54 3.51-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-18-19-18zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm-67.56-18c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.51-8.54 3.51-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-18-19-18zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM46.23 24.74V52h-9.1V24.74h-7.27V16h7.27V7.97h9.1V16h7.27v8.74h-7.27zM77.81 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.51-8.54 3.51-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-18-19-18zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9z" className="fill-white"/>
      <path d="M8.654 52L0 16h9.6l5.054 24 5.054-24H29.33l5.054 24L39.437 16h9.6L40.384 52H30.78l-5.456-24L19.87 52H8.654z" className="fill-white"/>
      <path d="M141.5 0L283 64H0z" className="fill-white" transform="translate(-120, -5) scale(0.22)"/>
    </svg>
  ),
  tableau: () => (
    <svg className="h-8 w-auto" viewBox="0 0 60 65" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
      <path d="M29.05 24.412v-6.704h-3.28v-2.667h3.28V8.337h2.94v6.704h3.28v2.667h-3.28v6.704h-2.94z" fill="#E8762D"/>
      <path d="M43.67 28.095v-5.025h-2.45v-2.015h2.45v-5.025h2.24v5.025h2.45v2.015h-2.45v5.025h-2.24z" fill="#C72037"/>
      <path d="M14.54 28.095v-5.025h-2.45v-2.015h2.45v-5.025h2.24v5.025h2.45v2.015h-2.45v5.025h-2.24z" fill="#5B879B"/>
      <path d="M29.05 42.895v-5.025h-2.45v-2.015h2.45v-5.025h2.24v5.025h2.45v2.015h-2.45v5.025h-2.24z" fill="#5C6692"/>
      <path d="M21.59 35.555v-5.025h-2.45v-2.015h2.45v-5.025h2.24v5.025h2.45v2.015h-2.45v5.025h-2.24z" fill="#EB9129"/>
      <path d="M36.55 35.555v-5.025h-2.45v-2.015h2.45v-5.025h2.24v5.025h2.45v2.015h-2.45v5.025h-2.24z" fill="#5C6692"/>
      <path d="M29.05 57.3v-5.025h-2.45v-2.015h2.45v-5.025h2.24v5.025h2.45v2.015h-2.45v5.025h-2.24z" fill="#E8762D"/>
      <path d="M50.66 35.555v-5.025h-2.45v-2.015h2.45v-5.025h2.24v5.025h2.45v2.015h-2.45v5.025h-2.24z" fill="#5B879B"/>
      <path d="M7.44 35.555v-5.025H4.99v-2.015h2.45v-5.025h2.24v5.025h2.45v2.015h-2.45v5.025H7.44z" fill="#C72037"/>
      <path d="M43.67 42.895v-5.025h-2.45v-2.015h2.45v-5.025h2.24v5.025h2.45v2.015h-2.45v5.025h-2.24z" fill="#EB9129"/>
      <path d="M14.54 42.895v-5.025h-2.45v-2.015h2.45v-5.025h2.24v5.025h2.45v2.015h-2.45v5.025h-2.24z" fill="#5C6692"/>
    </svg>
  ),
  sql: () => (
    <Image src="/assets/logos/sql.gif" alt="SQL" width={32} height={32} unoptimized className="h-8 w-auto object-contain" />
  ),
  flutter: () => (
    <Image src="/assets/logos/flutter.gif" alt="Flutter" width={32} height={32} unoptimized className="h-8 w-auto object-contain" />
  ),
  excel: () => (
    <svg className="h-8 w-auto" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
      <path d="M59.2 3H90c1.66 0 3 1.34 3 3v84c0 1.66-1.34 3-3 3H59.2V3z" fill="#33C481"/>
      <path d="M59.2 3H90c1.66 0 3 1.34 3 3v84c0 1.66-1.34 3-3 3H59.2V3z" fill="#21A366" opacity=".5"/>
      <path d="M3 6c0-1.66 1.34-3 3-3h53.2v90H6c-1.66 0-3-1.34-3-3V6z" fill="#185C37"/>
      <path d="M59.2 27H93v18H59.2V27z" fill="#107C41"/>
      <path d="M59.2 51H93v18H59.2V51z" fill="#21A366"/>
      <text x="28" y="60" fontFamily="Arial" fontSize="32" fill="white" fontWeight="bold" textAnchor="middle">X</text>
    </svg>
  ),
  dataAnalysis: () => (
    <Image src="/assets/logos/data-analysis.gif" alt="Data Analysis" width={32} height={32} unoptimized className="h-8 w-auto object-contain" />
  ),
  neuralNetwork: () => (
    <Image src="/assets/logos/neural-network.gif" alt="Neural Networks" width={32} height={32} unoptimized className="h-8 w-auto object-contain" />
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
