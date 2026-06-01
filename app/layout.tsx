import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head />


      <body
        className="antialiased bg-[#050607] text-slate-100 min-h-screen selection:bg-orange-500/30 selection:text-orange-100"
      >
        {children}
      </body>
    </html>
  );
}
