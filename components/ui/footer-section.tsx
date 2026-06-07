"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Mail, MapPin } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
)

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background/80 backdrop-blur-md text-zinc-300 transition-colors duration-300 mt-20">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">Let&apos;s Connect</h2>
            <p className="mb-6 text-zinc-400">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <a href={`mailto:${portfolioData.email}`}>
              <Button className="bg-cyan-500 text-black hover:bg-cyan-400 font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Say Hello
              </Button>
            </a>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2 text-sm text-zinc-400">
              <a href="#about" className="block transition-colors hover:text-cyan-400">About Me</a>
              <a href="#projects" className="block transition-colors hover:text-cyan-400">Projects</a>
              <a href="#experience" className="block transition-colors hover:text-cyan-400">Experience</a>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Info</h3>
            <address className="space-y-3 text-sm not-italic text-zinc-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {portfolioData.location}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                {portfolioData.email}
              </p>
            </address>
          </div>
          
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Me</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={`https://${portfolioData.github}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-white">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="bg-zinc-800 text-white border-zinc-700">
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-white">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="bg-zinc-800 text-white border-zinc-700">
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={`https://${portfolioData.instagram}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-white">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="bg-zinc-800 text-white border-zinc-700">
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Built with Next.js, Framer Motion, and Aceternity UI.
          </p>
        </div>
      </div>
    </footer>
  )
}
