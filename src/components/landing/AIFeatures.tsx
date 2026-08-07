"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Repeat,
  TrendingUp,
  FolderKanban,
  KeyRound,
  Award,
  Gauge,
  Mail,
  Sparkles,
  Bot,
  CheckCircle2,
  Wand2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function AIFeatures() {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      icon: FileText,
      title: "Generate Summary",
      desc: "Instant executive summary tailored to your target industry.",
      tag: "10x Velocity",
      badge: "High Impact",
      demo: {
        label: "AI Executive Summary Generator",
        input: "Targeting Senior Product Lead roles in FinTech...",
        output: "Results-driven Product Leader with 8+ years scaling high-throughput payment architectures. Led cross-functional engineering teams driving $14M ARR expansion with 99.99% system reliability.",
        metrics: "+45% Recruiter Response Rate",
      },
    },
    {
      icon: Repeat,
      title: "Rewrite Experience",
      desc: "Turn routine duties into high-impact, quantified achievements.",
      tag: "Core AI",
      badge: "Quantified",
      demo: {
        label: "Impact-Driven Transformation Engine",
        input: "Managed backend APIs and fixed system bugs.",
        output: "Architected event-driven microservices reducing end-to-end API latency by 42% for 2.5M+ active users, eliminating $120k in annual infrastructure overhead.",
        metrics: "+68% Metric Conversion",
      },
    },
    {
      icon: TrendingUp,
      title: "Improve Skills",
      desc: "Surface technical and soft skills recruiters are actively querying.",
      tag: "Market Sync",
      badge: "Recruiter Match",
      demo: {
        label: "Market-Aligned Keyword Injector",
        input: "Analyzing top 50 Senior Frontend Engineer postings...",
        output: "Injected critical missing competencies: React 19, Micro-Frontends, Web Vitals, Performance Optimization, GraphQL, CI/CD Pipeline Design.",
        metrics: "98% Target Keyword Match",
      },
    },
    {
      icon: FolderKanban,
      title: "Generate Projects",
      desc: "Frame side projects the way hiring managers evaluate senior talent.",
      tag: "Portfolio",
      badge: "Architect Level",
      demo: {
        label: "Project Contextualizer",
        input: "Built an open-source AI content analyzer app.",
        output: "Engineered full-stack distributed AI summarization pipeline leveraging LLM function calling and Redis vector caching; processed 100k+ monthly document requests.",
        metrics: "Featured Portfolio Quality",
      },
    },
    {
      icon: KeyRound,
      title: "Optimize Keywords",
      desc: "Match exact phrasing from target job descriptions automatically.",
      tag: "ATS Optimization",
      badge: "Semantic AI",
      demo: {
        label: "Job Description Alignment Engine",
        input: "Job ID: Lead DevOps Architect #9401",
        output: "Harmonized terminology with Job Description: Automated Multi-Cloud Governance, Terraform, Kubernetes, Zero-Trust Architecture, FinOps.",
        metrics: "+94% Parsing Accuracy",
      },
    },
    {
      icon: Award,
      title: "Suggest Certifications",
      desc: "Targeted recommendations based on your next desired role level.",
      tag: "Career Path",
      badge: "Strategic",
      demo: {
        label: "Executive Career Qualification Map",
        input: "Target Career Arc: Enterprise Security Officer",
        output: "Recommended High-Leverage Certifications: CISSP, AWS Certified Security Specialist, CISM. Added strategic learning timeline to resume layout.",
        metrics: "Top 5% Resume Profile",
      },
    },
    {
      icon: Gauge,
      title: "Improve ATS Score",
      desc: "Targeted structural and content fixes ranked by ATS score impact.",
      tag: "Instant Fix",
      badge: "ATS Ready",
      demo: {
        label: "Automated Resume Parser & Fixer",
        input: "Initial Resume ATS Readiness: 68/100",
        output: "Resolved 4 formatting conflicts, corrected section header taxonomy, and structured bullet hierarchy. Score boosted to 96/100.",
        metrics: "96/100 ATS Guarantee",
      },
    },
    {
      icon: Mail,
      title: "Generate Cover Letter",
      desc: "A tailored letter in your authentic voice, generated in one click.",
      tag: "1-Click Export",
      badge: "Bespoke",
      demo: {
        label: "Dynamic Cover Letter Generator",
        input: "Role: Staff Software Engineer at Stripe",
        output: "Having scaled cloud infrastructure handling $50M+ annual transaction volume, I was immediately drawn to Stripe’s relentless focus on developer-first payments infrastructure...",
        metrics: "Sub-Second Generation",
      },
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 text-slate-900 lg:py-32">
      {/* Light-Leak Radial Gradients */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[700px] w-full max-w-7xl -translate-x-1/2 opacity-70 blur-[130px]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-violet-200/80 via-indigo-100/50 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 rounded-full border border-violet-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700 shadow-sm backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-violet-600 fill-violet-200" />
            <span>Enterprise Career Intelligence</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-sans text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Your AI career strategist,{" "}
            <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              built for top 1% talent.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Trained on elite executive resumes. Elevate your narrative, land high-compensation offers, and bypass recruiter screeners with precision.
          </motion.p>
        </div>

        {/* Bento Showcase Workbench */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          
          {/* Interactive Live Playground Card (Hero Col) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-2xl shadow-slate-200/80 lg:col-span-7 lg:p-9"
          >
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-500/20">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {features[activeFeature].demo.label}
                    </h3>
                    <p className="text-xs font-medium text-slate-400">Live AI Synthesis Engine</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 border border-violet-200/80 px-3 py-1 text-xs font-bold text-violet-700">
                  <Zap size={13} className="fill-violet-600 text-violet-600" />
                  {features[activeFeature].badge}
                </span>
              </div>

              {/* Dynamic Preview Section */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 space-y-5"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                      <span>BEFORE (UNOPTIMIZED)</span>
                      <span className="text-slate-400">RAW INPUT</span>
                    </div>
                    <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 text-xs font-mono text-slate-600 shadow-inner">
                      "{features[activeFeature].demo.input}"
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-violet-700">
                      <span className="flex items-center gap-1.5">
                        <Wand2 size={13} className="text-violet-600" /> AI OPTIMIZED OUTPUT
                      </span>
                      <span className="flex items-center gap-1 text-emerald-600 font-bold">
                        <CheckCircle2 size={13} /> ATS Verified
                      </span>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/40 p-5 text-xs font-medium leading-relaxed text-slate-900 shadow-md">
                      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-violet-300/20 blur-xl" />
                      {features[activeFeature].demo.output}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Proof Metrics Strip */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>Enterprise Privacy & Encryption Safe</span>
              </div>
              <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                {features[activeFeature].demo.metrics}
              </div>
            </div>
          </motion.div>

          {/* Quick Selection Feature Grid (Right Col - 5 Cols) */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {features.slice(0, 4).map((item, index) => {
              const Icon = item.icon;
              const isActive = activeFeature === index;

              return (
                <button
                  key={item.title}
                  onClick={() => setActiveFeature(index)}
                  className={`group relative flex items-center justify-between rounded-2xl p-4.5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-2 border-violet-600 bg-white shadow-xl shadow-violet-500/10 scale-[1.01]"
                      : "border border-slate-200/80 bg-white/80 hover:border-violet-300 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
                          : "bg-slate-100 text-slate-600 group-hover:bg-violet-50 group-hover:text-violet-700"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="line-clamp-1 text-xs text-slate-500 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className={`shrink-0 transition-transform ${
                      isActive ? "text-violet-600 translate-x-0.5 -translate-y-0.5" : "text-slate-300 group-hover:text-slate-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>

        </div>

        {/* Secondary Capabilities 4-Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.slice(4).map((item, idx) => {
            const actualIndex = idx + 4;
            const Icon = item.icon;
            const isActive = activeFeature === actualIndex;

            return (
              <motion.button
                key={item.title}
                onClick={() => setActiveFeature(actualIndex)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`group relative flex flex-col justify-between rounded-2xl p-5 text-left transition-all duration-300 ${
                  isActive
                    ? "border-2 border-violet-600 bg-white shadow-xl shadow-violet-500/10 scale-[1.02]"
                    : "border border-slate-200/80 bg-white/80 hover:border-slate-300 hover:bg-white hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
                          : "bg-slate-100 text-slate-600 group-hover:bg-violet-50 group-hover:text-violet-700"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="mt-4 text-sm font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] font-bold text-slate-400">
                  <span>Explore Feature</span>
                  <ArrowUpRight size={14} className={`transition-transform ${isActive ? "text-violet-600 translate-x-0.5 -translate-y-0.5" : "text-slate-300"}`} />
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
}