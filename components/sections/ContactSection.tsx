"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Clipboard, Check, Terminal, Send, AlertTriangle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  accentColor: "purple" | "cyan" | "amber";
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  accentColor,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const getAccentClass = () => {
    switch (accentColor) {
      case "cyan":
        return "text-[#06b6d4]";
      case "purple":
        return "text-[#a855f7]";
      case "amber":
      default:
        return "text-[#f97316]";
    }
  };

  const getAccentBgClass = () => {
    switch (accentColor) {
      case "cyan":
        return "bg-[#06b6d4] hover:bg-[#06b6d4]/90 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.3)]";
      case "purple":
        return "bg-[#a855f7] hover:bg-[#a855f7]/90 text-slate-950 shadow-[0_0_20px_rgba(168,85,247,0.3)]";
      case "amber":
      default:
        return "bg-[#f97316] hover:bg-[#f97316]/90 text-slate-950 shadow-[0_0_20px_rgba(249,115,22,0.3)]";
    }
  };

  const getAccentFocusClass = () => {
    switch (accentColor) {
      case "cyan":
        return "focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]/20";
      case "purple":
        return "focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20";
      case "amber":
      default:
        return "focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]/20";
    }
  };

  const getAccentBorderClass = () => {
    switch (accentColor) {
      case "cyan":
        return "border-[#06b6d4]/40 hover:border-[#06b6d4] text-[#06b6d4] hover:bg-[#06b6d4]/5";
      case "purple":
        return "border-[#a855f7]/40 hover:border-[#a855f7] text-[#a855f7] hover:bg-[#a855f7]/5";
      case "amber":
      default:
        return "border-[#f97316]/40 hover:border-[#f97316] text-[#f97316] hover:bg-[#f97316]/5";
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTriggerForm = () => {
    const element = document.getElementById("terminal-form-anchor");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMessage("All terminal parameters are required.");
      return;
    }

    setStatus("sending");
    setStatusMessage("Compiling packet structures...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setStatusMessage(result.message || "Packet transmission successful! Message routed to Mokash.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(result.error || "Email gateway transmission failure.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Gateway timeout. Please check your network connection.");
    }
  };

  return (
    <section id="contact-section" className="relative w-full py-16 px-6 md:px-12 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* ================= STAGE 1: SUNSET CALL TO ACTION BANNER ================= */}
        <div className="w-full rounded-2xl relative min-h-[220px] overflow-hidden border border-white/5 bg-slate-950 shadow-2xl flex flex-col justify-center p-8 md:p-12 text-left group">
          {/* Background image overlay with creator silhouette */}
          <div 
            className="absolute inset-0 bg-cover bg-center filter grayscale contrast-110 brightness-50 group-hover:scale-[1.01] transition-transform duration-1000 ease-out" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop')` }}
          />
          {/* Neon orange cyber color overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/80 to-transparent" />
          <div className="absolute inset-0 bg-orange-950/15 mix-blend-overlay" />

          {/* Grid Layout inside banner */}
          <div className="z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
            
            {/* Title (spans 6 cols) */}
            <div className="md:col-span-6 space-y-2">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide leading-tight text-white uppercase">
                Let&apos;s build something <br />
                <span className="text-[#f97316] font-black">amazing together</span>
              </h2>
            </div>

            {/* Description (spans 3 cols) */}
            <div className="md:col-span-3 text-left">
              <p className="text-slate-400 text-xs md:text-sm font-sans leading-relaxed max-w-xs">
                Have a project in mind or just want to say hi? Let&apos;s connect and create something impactful.
              </p>
            </div>

            {/* CTA Outlined Trigger (spans 3 cols) */}
            <div className="md:col-span-3 flex md:justify-end">
              <button
                onClick={handleTriggerForm}
                className={cn(
                  "font-heading text-xs font-bold px-6 py-3 rounded border flex items-center gap-2 tracking-wider transition-all duration-300 transform active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.4)]",
                  getAccentBorderClass()
                )}
              >
                <span>GET IN TOUCH</span>
                <ArrowRight size={13} />
              </button>
            </div>

          </div>
        </div>

        {/* ================= STAGE 2: TRANSMISSION TERMINAL FORM ================= */}
        <div id="terminal-form-anchor" className="max-w-2xl w-full mx-auto flex flex-col space-y-8 pt-6 scroll-mt-24">
          
          <div className="flex flex-col space-y-1 items-center text-center">
            <div className="flex items-center gap-2">
              <Terminal className={cn("w-4 h-4", getAccentClass())} />
              <span className="font-mono text-xs tracking-widest text-slate-400 uppercase font-bold">
                Transmission Terminal
              </span>
            </div>
            <h2 className="font-heading text-xl md:text-2xl font-bold tracking-wider text-slate-100 uppercase mt-1">
              Send a Secure Message
            </h2>
          </div>

          <div className="obsidian-card p-6 rounded-2xl border border-white/5 shadow-2xl relative">
            
            {/* Terminal Top Window Bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-[9px] text-slate-500 tracking-wider flex items-center gap-1">
                <Terminal size={10} />
                mokash@muet-gateway:~$
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Double Row Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1 text-left">
                  <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your secret identity"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={status === "sending"}
                    className={cn(
                      "bg-[#09090d] border border-white/5 rounded-lg px-3 py-2 text-xs md:text-sm font-mono text-slate-200 outline-none w-full transition-all focus:bg-slate-950",
                      getAccentFocusClass()
                    )}
                  />
                </div>

                <div className="flex flex-col space-y-1 text-left">
                  <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="I promise I won't spam you"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={status === "sending"}
                    className={cn(
                      "bg-[#09090d] border border-white/5 rounded-lg px-3 py-2 text-xs md:text-sm font-mono text-slate-200 outline-none w-full transition-all focus:bg-slate-950",
                      getAccentFocusClass()
                    )}
                  />
                </div>
              </div>

              {/* Textarea Content */}
              <div className="flex flex-col space-y-1 text-left">
                <label className="font-mono text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                  Message Content
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message goes here. Ask me anything or let's build something ☕"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={status === "sending"}
                  className={cn(
                    "bg-[#09090d] border border-white/5 rounded-lg px-3 py-2 text-xs md:text-sm font-mono text-slate-200 outline-none w-full transition-all resize-none focus:bg-slate-950",
                    getAccentFocusClass()
                  )}
                />
              </div>

              {/* Form Ticker Responses */}
              {status !== "idle" && (
                <div className={cn(
                  "p-3 rounded-lg flex items-start gap-2.5 font-mono text-[10px] md:text-xs border text-left",
                  status === "sending" && "bg-blue-500/5 text-blue-400 border-blue-500/20",
                  status === "success" && "bg-[#10b981]/5 text-[#10b981] border-[#10b981]/20",
                  status === "error" && "bg-red-500/5 text-red-400 border-red-500/20"
                )}>
                  {status === "error" ? <AlertTriangle size={14} className="mt-0.5" /> : <Terminal size={14} className="mt-0.5" />}
                  <div className="flex-1">
                    <span className="font-bold">STATUS:</span> {statusMessage}
                  </div>
                </div>
              )}

              {/* Submit CTA Trigger */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={cn(
                  "w-full py-2.5 rounded-lg border border-white/10 font-heading text-xs md:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]",
                  status === "sending" ? "opacity-50 cursor-not-allowed" : getAccentBgClass()
                )}
              >
                <Send size={12} />
                <span>SEND DIRECT EMAIL</span>
              </button>

            </form>
          </div>

          {/* Copyable Quick Email panel */}
          <div className="obsidian-card p-4 rounded-xl flex items-center justify-between border border-white/5 bg-[#08080c]/90">
            <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs text-slate-400">
              <Mail size={12} className={getAccentClass()} />
              <span>Email:</span>
              <span className="text-slate-200">{portfolioData.email}</span>
            </div>

            <button
              onClick={handleCopyEmail}
              className={cn(
                "p-2 rounded-lg border border-white/10 bg-white/5 transition-all duration-300 relative",
                copied ? "text-[#10b981] border-[#10b981]/30" : "text-slate-400 hover:text-slate-200"
              )}
              title="Copy email to clipboard"
            >
              {copied ? <Check size={13} className="animate-scale-up" /> : <Clipboard size={13} />}
              {copied && (
                <span className="absolute bottom-full right-0 mb-2 font-mono text-[8px] bg-slate-800 text-slate-200 border border-white/5 px-2 py-0.5 rounded shadow-lg uppercase tracking-wider">
                  Copied!
                </span>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
