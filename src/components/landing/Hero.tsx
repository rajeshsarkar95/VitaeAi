"use client";

import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

function Hero() {
  const features = [
    "ATS Keyword Optimization",
    "Real-time Score Analysis",
    "Executive-Grade Layouts",
  ];

  return (
    <section className="relative  overflow-hidden bg-slate-50 text-slate-900 pb-24 pt-12 lg:pb-10 lg:pt-5">
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
          {/* Executive Trust Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-violet-200 bg-violet-50/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-violet-900 shadow-sm backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-600" />
            </span>
            <span className="text-violet-900">Next-Gen Resume Intelligence</span>
            <span className="h-3 w-[1px] bg-violet-200" />
            <span className="text-violet-700">v3.0 Release</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-[5rem] lg:leading-[1.06]">
            Craft a resume that commands{" "}
            <span className="hero-serif italic font-normal bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              attention.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Engineered for ambitious professionals. Transform your career trajectory with AI-driven content refinement, instant ATS optimization, and recruiter-approved layouts.
          </p>

          {/* Key Feature Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-medium text-slate-700">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Call To Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="hero-focus group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 p-[1px] shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/35 active:scale-[0.98]"
            >
              <span className="relative inline-flex items-center gap-2.5 rounded-[11px] bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-slate-900/90">
                <Sparkles size={16} className="text-violet-300 transition-transform duration-300 group-hover:rotate-12" />
                <span>Build Free Resume</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                {/* Light shimmer sweep */}
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

          {/* Metrics & Social Proof */}
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

        {/* Right Column: Premium Mockup & Floating Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          {/* Main Glass Card */}
          <div className="hero-float relative rounded-3xl border border-slate-200/80 bg-white/70 p-3 shadow-2xl shadow-slate-200/80 backdrop-blur-xl ring-1 ring-slate-900/5">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-7 shadow-sm">
              
              {/* Scanning Laser Animation Effect */}
              <div className="hero-scan-line pointer-events-none absolute left-0 right-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-violet-600 to-transparent shadow-[0_0_12px_2px_rgba(124,58,237,0.5)]" />

              {/* Card Header Bar */}
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1.5 rounded-md border border-violet-200 bg-violet-50 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                  <Zap size={12} className="animate-pulse text-violet-600" />
                  <span>AI Optimizer Active</span>
                </div>
              </div>

              {/* Resume Skeleton Preview */}
              <div className="space-y-6">
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 p-0.5 shadow-md">
                    <div className="h-full w-full rounded-full bg-slate-50 flex items-center justify-center font-bold text-violet-700 text-sm">
                      JD
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-40 rounded-md bg-slate-800" />
                    <div className="h-3 w-28 rounded-md bg-slate-300" />
                  </div>
                </div>

                {/* Experience Block */}
                <div className="space-y-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-28 rounded bg-violet-600" />
                    <div className="h-2.5 w-12 rounded bg-slate-300" />
                  </div>
                  <div className="h-2 w-full rounded bg-slate-200" />
                  <div className="h-2 w-4/5 rounded bg-slate-200" />
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-left">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Impact Score</p>
                    <p className="text-sm font-bold text-emerald-600">+142% Revenue</p>
                  </div>
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-left">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Keyword Density</p>
                    <p className="text-sm font-bold text-violet-700">Optimal (98%)</p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Executive Leadership", "Product Strategy", "React", "Cloud Architecture"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Widget 1: ATS Score */}
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

          {/* Floating Widget 2: Salary/Interview Impact */}
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

export { Hero };