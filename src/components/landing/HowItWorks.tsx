"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Star,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  TrendingUp,
  FileCheck,
  UserPlus,
  ClipboardList,
  Download,
  LayoutTemplate,
  FileEdit,
  Linkedin,
  Briefcase,
  SpellCheck2,
  Globe,
  Smartphone,
  Check,
  Search,
  MousePointerClick,
  ArrowUpRight,
} from "lucide-react";
function Hero() {
  const [selectedTemplate, setSelectedTemplate] = useState<"executive" | "tech" | "minimal">("executive");

  const features = [
    "ATS Keyword Optimization",
    "Real-time Score Analysis",
    "Executive-Grade Layouts",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 pb-24  lg:pb-36 lg:pt-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Playfair+Display:ital,wght@0,600;1,400;1,600&display=swap');

        .hero-serif { font-family: 'Playfair Display', serif; }
        .hero-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

        .hero-noise {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
        }

        @keyframes hero-scan {
          0% { top: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .hero-scan-line { animation: hero-scan 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; }

        @keyframes hero-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.4deg); }
        }
        .hero-float { animation: hero-float 7s ease-in-out infinite; }

        @keyframes hero-shimmer {
          100% { transform: translateX(100%); }
        }
        .hero-shimmer {
          transform: translateX(-100%);
          animation: hero-shimmer 2.5s infinite;
        }

        .hero-focus:focus-visible {
          outline: 2px solid rgba(124, 58, 237, 0.8);
          outline-offset: 4px;
        }
      `}</style>
      <div className="pointer-events-none absolute inset-0 -z-10 hero-noise" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 opacity-60 blur-[120px]">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-200 via-indigo-100 to-transparent" />
      </div>
      <div className="pointer-events-none absolute -left-48 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-100/80 blur-[100px]" />
      <div className="pointer-events-none absolute -right-48 top-1/3 -z-10 h-96 w-96 rounded-full bg-purple-100/80 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-sans lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-violet-200 bg-violet-50/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-violet-900 shadow-sm backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-600" />
            </span>
            <span className="text-violet-900">Next-Gen Resume Intelligence</span>
            <span className="h-3 w-[1px] bg-violet-200" />
            <span className="text-violet-700">v3.0 Release</span>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-[5rem] lg:leading-[1.06]">
            Craft a resume that commands{" "}
            <span className="hero-serif italic font-normal bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              attention.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Engineered for ambitious professionals. Transform your career trajectory with AI-driven content refinement, instant ATS optimization, and recruiter-approved layouts.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-medium text-slate-700">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="hero-focus group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 p-[1px] shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/35 active:scale-[0.98]"
            >
              <span className="relative inline-flex items-center gap-2.5 rounded-[11px] bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-slate-900/90">
                <Sparkles size={16} className="text-violet-300 transition-transform duration-300 group-hover:rotate-12" />
                <span>Build Free Resume</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 overflow-hidden rounded-[11px]">
                  <span className="hero-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </span>
              </span>
            </a>

            <a
              href="#"
              className="hero-focus inline-flex items-center gap-2.5 rounded-xl border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
            >
              <PlayCircle size={18} className="text-violet-600" />
              <span>Watch Product Tour</span>
            </a>
          </div>

          {/* Metrics */}
          <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-slate-200/80 pt-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="fill-amber-400 text-amber-400 drop-shadow-[0_1px_2px_rgba(245,158,11,0.3)]"
                  />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900">4.9/5 Rating</span>
                <span className="text-slate-500"> from 15k+ reviews</span>
              </div>
            </div>

            <div className="h-4 w-[1px] bg-slate-300 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>Tested on 1,000+ Corporate ATS Systems</span>
            </div>
          </div>
        </motion.div>

        {/* Right Preview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="hero-float relative rounded-3xl border border-slate-200/80 bg-white/70 p-3 shadow-2xl shadow-slate-200/80 backdrop-blur-xl ring-1 ring-slate-900/5">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-7 shadow-sm">
              <div className="hero-scan-line pointer-events-none absolute left-0 right-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-violet-600 to-transparent shadow-[0_0_12px_2px_rgba(124,58,237,0.5)]" />

              {/* Card Header & Dynamic Template Switcher */}
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 p-1 text-[11px] font-bold text-slate-600">
                  {(["executive", "tech", "minimal"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTemplate(t)}
                      className={`capitalize px-2.5 py-1 rounded-md transition-all ${
                        selectedTemplate === t ? "bg-white text-violet-700 shadow-sm" : "hover:text-slate-900"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 rounded-md border border-violet-200 bg-violet-50 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                  <Zap size={12} className="animate-pulse text-violet-600" />
                  <span>AI Active</span>
                </div>
              </div>

              {/* Resume Skeleton Visual */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 p-0.5 shadow-md">
                    <div className="h-full w-full rounded-full bg-slate-50 flex items-center justify-center font-bold text-violet-700 text-sm">
                      JD
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-4 w-36 rounded-md bg-slate-800" />
                    <div className="h-2.5 w-24 rounded-md bg-violet-600" />
                  </div>
                </div>

                <div className="space-y-2 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-28 rounded bg-slate-800" />
                    <div className="h-2.5 w-12 rounded bg-slate-300" />
                  </div>
                  <div className="h-2 w-full rounded bg-slate-200" />
                  <div className="h-2 w-4/5 rounded bg-slate-200" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-left">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Impact Metric</p>
                    <p className="text-xs font-bold text-emerald-600">+142% Revenue Growth</p>
                  </div>
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-left">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Keyword Density</p>
                    <p className="text-xs font-bold text-violet-700">Optimal (98%)</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Product Strategy", "React", "Cloud Architecture"].map((skill) => (
                    <span key={skill} className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Widget 1 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hero-sans absolute -right-3 -top-5 flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:-right-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
              <FileCheck size={22} className="font-bold" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-extrabold text-slate-900">99/100</span>
                <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">Grade A</span>
              </div>
              <p className="text-xs font-medium text-slate-500">ATS Resume Score</p>
            </div>
          </motion.div>

          {/* Floating Widget 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="hero-sans absolute -bottom-6 -left-6 hidden items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:flex"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700 border border-violet-200">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">+35% Interview Rate</p>
              <p className="text-[11px] text-slate-500">Optimized for Tier-1 Tech</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}


function LogoCloud() {
  const companies = [
    { name: "Google", svg: <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg> },
    { name: "Microsoft", svg: <svg className="h-5 w-auto" viewBox="0 0 23 23" fill="currentColor"><path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z"/></svg> },
    { name: "Amazon", svg: <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor"><path d="M13.92 11.23c-1.33.27-2.61.56-3.88.88-1.52.38-2.35.95-2.35 1.96 0 1.19 1.12 1.81 2.82 1.81 1.7 0 3.01-.67 3.41-1.79v-2.86zm1.75 6.07c-.49.27-1.25.43-2.14.43-1.74 0-2.8-.75-2.8-2.02 0-1.42 1.05-2.28 3.09-2.66l1.85-.35v4.6zm5.82 2.6c-.23-.19-.52-.16-.72.08-1.2 1.4-2.84 2.14-4.8 2.14-3.56 0-5.74-2.1-5.74-5.28 0-3.35 2.45-5.32 6.64-5.32h3.12V8.4c0-2.13-1.39-3.35-3.8-3.35-1.95 0-3.48.72-4.18 1.95-.12.22-.38.31-.62.2l-1.31-.65c-.23-.11-.31-.38-.21-.61C8.89 3.86 11.19 2.7 14.12 2.7c3.85 0 6.07 1.92 6.07 5.56v7.35c0 1.54.49 2.12 1.19 2.12.33 0 .73-.13 1.02-.33.22-.15.51-.08.64.15l.69 1.25c.13.23.05.52-.17.67-.65.46-1.56.78-2.58.78-1.35 0-2.19-.62-2.48-1.85z"/></svg> },
    { name: "Meta", svg: <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor"><path d="M16.82 2.25c-2.38 0-4.57 1.19-6.82 3.51C7.75 3.44 5.56 2.25 3.18 2.25 1.17 2.25 0 3.73 0 6.22c0 3.74 3.03 7.82 6.54 11.38 2.06 2.09 4.19 4.15 5.46 4.15 1.27 0 3.4-2.06 5.46-4.15 3.51-3.56 6.54-7.64 6.54-11.38 0-2.49-1.17-3.97-3.18-3.97z"/></svg> },
    { name: "Adobe", svg: <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor"><path d="M13.966 22H24V2h-10.034zM0 2v20h10.034zM8.88 12.833h3.587l-2.023-4.992z"/></svg> },
    { name: "Spotify", svg: <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.841c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg> },
  ];

  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50/50 py-10">
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: marquee 30s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
          Trusted by candidates placed at top global leaders
        </p>
        <div className="mt-6 flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            {[...companies, ...companies].map((company, idx) => (
              <div key={`${company.name}-${idx}`} className="group flex items-center gap-2.5 text-slate-400 transition-all duration-300 hover:text-slate-900">
                {company.svg}
                <span className="font-sans text-sm font-bold tracking-tight">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function Features() {
  const [activeTab, setActiveTab] = useState<"ai" | "ats" | "letter">("ai");
  const standardFeatures = [
    { icon: Linkedin, title: "1-Click LinkedIn Import", desc: "Pull work experience and skills instantly without typing." },
    { icon: Briefcase, title: "Portfolio Integration", desc: "Embed live links, project previews, and GitHub repos." },
    { icon: Download, title: "Pixel-Perfect Export", desc: "Vector PDF outputs guaranteed to preserve layout spacing." },
    { icon: SpellCheck2, title: "Real-time Grammar AI", desc: "Catch subtle typos and tone missteps before submitting." },
    { icon: Globe, title: "20+ Language Support", desc: "Translate and build tailored resumes for global positions." },
    { icon: Smartphone, title: "Mobile Resume Studio", desc: "Refine bullet points and send applications right from your phone." },
  ];
  return (
    <section id="features" className="relative overflow-hidden bg-slate-50 py-28 text-slate-900 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-800 shadow-sm">
            <Sparkles size={14} className="text-violet-600" />
            <span>Next-Generation Tools</span>
          </div>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Everything required to secure your{" "}
            <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
              dream offer.
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            A comprehensive suite of recruitment tools designed to outsmart applicant tracking systems and captivate hiring managers.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/50 lg:col-span-7 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-violet-600">Core Engine</span>
                <h3 className="mt-1 text-2xl font-extrabold text-slate-900">AI Resume Copilot</h3>
              </div>

              {/* Tabs */}
              <div className="flex rounded-xl bg-slate-100 p-1 text-xs font-semibold">
                {(["ai", "ats", "letter"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-3.5 py-2 transition-all ${
                      activeTab === tab ? "bg-white text-violet-700 shadow-sm font-bold" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {tab === "ai" && "Bullet Optimization"}
                    {tab === "ats" && "ATS Keyword Scan"}
                    {tab === "letter" && "Cover Letter"}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Tab Stage */}
            <div className="mt-6 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5 backdrop-blur-md min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === "ai" && (
                  <motion.div key="ai" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                      <span>BEFORE (WEAK)</span>
                      <span className="text-rose-500">Impression Rate: 12%</span>
                    </div>
                    <div className="rounded-lg border border-rose-200/60 bg-rose-50/40 p-3 text-xs text-slate-600">
                      "Responsible for managing backend APIs and increasing performance."
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-violet-700 pt-2">
                      <span className="flex items-center gap-1.5"><Zap size={14} /> AI OPTIMIZED (STRONG)</span>
                      <span className="text-emerald-600 font-bold">Impression Rate: 96%</span>
                    </div>
                    <div className="rounded-lg border border-violet-200 bg-white p-3.5 text-xs font-medium text-slate-800 shadow-sm">
                      "Architected high-throughput Node.js microservices, reducing API latency by <span className="font-bold text-violet-700">42%</span> and supporting <span className="font-bold text-violet-700">2.5M+</span> daily active users."
                    </div>
                  </motion.div>
                )}

                {activeTab === "ats" && (
                  <motion.div key="ats" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Search size={16} className="text-violet-600" />
                        <span className="text-xs font-bold text-slate-800">Target Role: Senior Product Engineer</span>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-800">98% Match</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-[11px] font-bold text-slate-500">DETECTED KEYWORDS</div>
                      <div className="flex flex-wrap gap-1.5">
                        {["TypeScript", "Distributed Systems", "CI/CD Pipelines", "GraphQL"].map((kw) => (
                          <span key={kw} className="inline-flex items-center gap-1 rounded-md bg-emerald-50 border border-emerald-200 px-2 py-1 text-[11px] font-semibold text-emerald-800">
                            <Check size={12} /> {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "letter" && (
                  <motion.div key="letter" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span className="flex items-center gap-1.5"><FileEdit size={14} className="text-violet-600" /> Executive Cover Letter</span>
                      <span className="text-violet-600 text-[11px]">Generated in 1.4s</span>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-3.5 text-xs text-slate-600 italic leading-relaxed">
                      "Dear Hiring Team, Having spent 6+ years scaling cloud infrastructure at hyper-growth organizations, I was immediately drawn to your Staff Engineer opening..."
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="mt-6 text-sm text-slate-600">
              Evaluates metric impact, verbs, and keywords against thousands of verified corporate job descriptions.
            </p>
          </div>

          {/* Card 2: Executive Templates */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/50 lg:col-span-5 lg:p-10">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-500/25">
                  <LayoutTemplate size={22} />
                </div>
                <span className="rounded-full bg-violet-50 border border-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
                  50+ C-Suite Layouts
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">Battle-Tested Templates</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Designed alongside Fortune 500 recruiters. Formatted to pass ATS parsing checks while maintaining executive visual elegance.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
              <div className="space-y-2">
                <div className="h-3 w-1/3 rounded bg-slate-800" />
                <div className="h-2 w-2/3 rounded bg-violet-400" />
                <div className="my-3 border-t border-slate-200" />
                <div className="h-2 w-full rounded bg-slate-300" />
                <div className="h-2 w-4/5 rounded bg-slate-300" />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-bold text-violet-700">
                <span>Executive, Minimal, Creative & Tech</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {standardFeatures.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 transition-colors duration-300 group-hover:border-violet-200 group-hover:bg-violet-50 group-hover:text-violet-700">
                <f.icon size={20} />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">{f.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      icon: UserPlus,
      title: "Sign up in seconds",
      shortDesc: "Create your free workspace without entering a credit card.",
      fullDesc: "Instant onboarding. Get immediate access to executive templates and AI credits.",
    },
    {
      id: "02",
      icon: ClipboardList,
      title: "Fill in or import data",
      shortDesc: "Add your work experience or sync directly with LinkedIn.",
      fullDesc: "Auto-parse your existing PDF resume or pull complete work history with one click.",
    },
    {
      id: "03",
      icon: Sparkles,
      title: "AI enhances bullet points",
      shortDesc: "Get quantified action verbs tuned to your target role.",
      fullDesc: "Our language model optimizes every bullet point for high recruiter conversion and ATS pass rates.",
    },
    {
      id: "04",
      icon: Download,
      title: "Export print-ready PDF",
      shortDesc: "Download a clean, ATS-compliant file ready to submit.",
      fullDesc: "Export perfectly formatted, vector-rendered PDFs guaranteed to render correctly everywhere.",
    },
  ] as const;

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-slate-50 py-28 text-slate-900 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-800 shadow-sm">
            <Zap size={14} className="text-violet-600" />
            <span>4-Step Process</span>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            From blank page to{" "}
            <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
              signed offer.
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            No design skills required. Get a recruiter-approved resume in under five minutes.
          </p>
        </div>

        {/* Stepper Navigation */}
        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`group relative flex flex-col justify-between rounded-2xl p-6 text-left transition-all duration-300 ${
                  isActive
                    ? "border-2 border-violet-600 bg-white shadow-xl shadow-violet-500/10 scale-[1.02]"
                    : "border border-slate-200/80 bg-white/70 hover:border-slate-300 hover:bg-white hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-extrabold tracking-widest ${isActive ? "text-violet-700" : "text-slate-400"}`}>
                      STEP {step.id}
                    </span>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                      isActive ? "bg-violet-600 text-white shadow-md shadow-violet-500/20" : "bg-slate-100 text-slate-600"
                    }`}>
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.shortDesc}</p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-[11px] font-bold text-violet-600">
                  <span>{isActive ? "Viewing stage" : "Click to view"}</span>
                  <MousePointerClick size={12} className={isActive ? "animate-bounce" : ""} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Stage Stage Display */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 shadow-2xl shadow-slate-200/60 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600">Stage {steps[activeStep].id} Breakdown</span>
              <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{steps[activeStep].title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{steps[activeStep].fullDesc}</p>

              <div className="mt-6 space-y-3">
                {["Automated parsing & metric generation", "Real-time ATS preview score check", "Zero formatting hassle or broken layouts"].map((check) => (
                  <div key={check} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl border border-slate-200/80 bg-slate-50 p-6 lg:col-span-7">
              <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Interactive Stage Preview</span>
                  <span className="text-emerald-600 font-extrabold">Active</span>
                </div>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  "Engineered system architectures that resulted in <span className="text-violet-700 font-bold">40% speed optimization</span> across distributed worker nodes."
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export { Hero, LogoCloud, Features, HowItWorks };