"use client";

import { Marquee } from "@/components/ui/marquee";

const skills = [
  { name: "Python", src: "/assets/logos/icons8-python-96.png" },
  { name: "Java", src: "/assets/logos/java.png" },
  { name: "C++", src: "/assets/logos/icons8-c++-96.png" },
  { name: "MySQL", src: "/assets/logos/pngwing.com.png" },
  { name: "Flutter", src: "/assets/logos/icons8-flutter-96.png" },
  { name: "Dart", src: "/assets/logos/icons8-dart-96.png" },
  { name: "NumPy", src: "/assets/logos/icons8-numpy-96.png" },
  { name: "Pandas", src: "/assets/logos/icons8-pandas-96.png" },
  { name: "VS Code", src: "/assets/logos/icons8-vs-code-96.png" },
  { name: "Tableau", src: "/assets/logos/icons8-tableau-software-96.png" },
];

// SVG icons for tools without image files
const SvgLogos: Record<string, React.FC> = {
  Git: () => (
    <svg className="h-10 w-auto shrink-0" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
      <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"/>
    </svg>
  ),
  GitHub: () => (
    <svg className="h-10 w-auto shrink-0" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6C29.304 70.25 17.9 65.982 17.9 46.96c0-5.867 2.103-10.675 5.544-14.42-.566-1.222-2.427-6.845.566-14.178 0 0 4.527-1.466 14.8 5.541 4.285-1.222 8.898-1.792 13.431-1.792s9.146.57 13.431 1.792c10.272-7.007 14.8-5.541 14.8-5.541 2.992 7.333 1.132 12.956.566 14.178 3.522 3.745 5.544 8.553 5.544 14.42 0 19.188-11.567 23.208-22.574 24.426 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" className="fill-white"/>
    </svg>
  ),
};

const svgSkills = [
  { name: "Git" },
  { name: "GitHub" },
];

const allSkills = [
  ...skills.map((s) => ({ ...s, type: "img" as const })),
  ...svgSkills.map((s) => ({ ...s, src: undefined, type: "svg" as const })),
];

export function MarqueeDemo() {
  return (
    <div className="w-full relative bg-black/30 border-y border-white/5 backdrop-blur-sm">
      <Marquee pauseOnHover speed={35}>
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 mx-10 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300 cursor-pointer group"
          >
            {/* 
              Changed container to h-10 min-w-10 to enforce height but allow width to expand.
              This prevents wide logos (like MySQL/Python) from shrinking. 
            */}
            <div className="group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shrink-0 h-10 min-w-10">
              {skill.type === "img" && skill.src ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="h-10 w-auto max-w-16 object-contain"
                  loading="lazy"
                />
              ) : (
                (() => {
                  const SvgIcon = SvgLogos[skill.name];
                  return SvgIcon ? <SvgIcon /> : null;
                })()
              )}
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
