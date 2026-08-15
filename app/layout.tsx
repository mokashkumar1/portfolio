import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mokashkumar.vercel.app"),
  title: "Mokash Kumar | Software & Applied AI Portfolio",
  description: "Computer Systems Engineering student building practical software and developing applied AI/ML skills. Open to software engineering and AI/ML internships.",
  keywords: ["Mokash Kumar", "Software Engineering Intern", "AI ML Intern", "Applied AI", "Computer Systems Engineering", "React", "Python", "Supabase", "MUET"],
  authors: [{ name: "Mokash Kumar" }],
  openGraph: {
    title: "Mokash Kumar | Software & Applied AI Portfolio",
    description: "Computer Systems Engineering student building practical software, developing applied AI/ML skills, and seeking software or AI/ML internships.",
    url: "https://mokashkumar.vercel.app",
    siteName: "Mokash Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mokash Kumar | Software & Applied AI Portfolio",
    description: "Computer Systems Engineering student building practical software, developing applied AI/ML skills, and seeking software or AI/ML internships.",
  },
};

export const viewport = {
  themeColor: "#050607",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth bg-[#050607] ${outfit.variable} ${jakarta.variable}`}>
      <head />
      <body
        className="antialiased bg-[#050607] text-zinc-100 min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-100"
      >
        {children}
      </body>
    </html>
  );
}
