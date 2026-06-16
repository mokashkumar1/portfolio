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
  title: "Mokash Kumar | Portfolio",
  description: "Computer Systems Engineering portfolio for data analytics, machine learning, projects, gallery, and contact.",
  keywords: ["Mokash Kumar", "Moksh", "Portfolio", "Machine Learning", "Data Analytics", "Projects", "MUET"],
  authors: [{ name: "Mokash Kumar" }],
  openGraph: {
    title: "Mokash Kumar | Portfolio",
    description: "Systems undergraduate and creative storyteller crafting intelligent models and visual designs.",
    url: "https://example.com",
    siteName: "Mokash Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mokash Kumar | Portfolio",
    description: "Systems undergraduate and creative storyteller crafting intelligent models and visual designs.",
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
