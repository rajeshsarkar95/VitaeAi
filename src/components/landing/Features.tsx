"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ScanSearch,
  LayoutTemplate,
  Download,
  FileEdit,
  Linkedin,
  Briefcase,
  BarChart3,
  SpellCheck2,
  Globe,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  ShieldCheck,
  Check,
  Search,
} from "lucide-react";

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
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[700px] w-full max-w-7xl -translate-x-1/2 opacity-60 blur-[140px]">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-200 via-indigo-100 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-violet-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-800 shadow-sm backdrop-blur-xl">
            <Sparkles size={14} className="text-violet-600" />
            <span>Next-Generation Career Tools</span>
          </div>
          <h2 className="mt-6 font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Everything required to secure your{" "}
            <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
              dream offer.
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            A comprehensive suite of recruitment intelligence tools designed to outsmart applicant tracking systems and captivate hiring managers.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/50 lg:col-span-7 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-violet-600">Core Engine</span>
                <h3 className="mt-1 text-2xl font-extrabold text-slate-900">AI Resume Copilot</h3>
              </div>
              <div className="flex rounded-xl bg-slate-100 p-1 text-xs font-semibold">
                {(["ai", "ats", "letter"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-3.5 py-2 transition-all duration-200 ${
                      activeTab === tab
                        ? "bg-white text-violet-700 shadow-sm font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {tab === "ai" && "Bullet Optimization"}
                    {tab === "ats" && "ATS Keyword Scan"}
                    {tab === "letter" && "Cover Letter"}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5 backdrop-blur-md min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === "ai" && (
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                      <span>BEFORE (WEAK)</span>
                      <span className="text-rose-500">Impression Rate: 12%</span>
                    </div>
                    <div className="rounded-lg border border-rose-200/60 bg-rose-50/40 p-3 text-xs text-slate-600">
                      "Responsible for managing backend APIs and increasing performance."
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-violet-700 pt-2">
                      <span className="flex items-center gap-1.5">
                        <Zap size={14} className="text-violet-600" /> AI OPTIMIZED (STRONG)
                      </span>
                      <span className="text-emerald-600 font-bold">Impression Rate: 96%</span>
                    </div>
                    <div className="rounded-lg border border-violet-200 bg-white p-3.5 text-xs font-medium text-slate-800 shadow-sm">
                      "Architected high-throughput Node.js microservices, reducing API latency by <span className="font-bold text-violet-700">42%</span> and supporting <span className="font-bold text-violet-700">2.5M+</span> daily active users."
                    </div>
                  </motion.div>
                )}

                {activeTab === "ats" && (
                  <motion.div
                    key="ats"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Search size={16} className="text-violet-600" />
                        <span className="text-xs font-bold text-slate-800">Job Title Match: Senior Product Engineer</span>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-800">98% Match</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-[11px] font-bold text-slate-500">DETECTED KEYWORDS</div>
                      <div className="flex flex-wrap gap-1.5">
                        {["TypeScript", "Distributed Systems", "CI/CD Pipelines", "GraphQL", "System Design"].map((kw) => (
                          <span key={kw} className="inline-flex items-center gap-1 rounded-md bg-emerald-50 border border-emerald-200 px-2 py-1 text-[11px] font-semibold text-emerald-800">
                            <Check size={12} /> {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "letter" && (
                  <motion.div
                    key="letter"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span className="flex items-center gap-1.5">
                        <FileEdit size={14} className="text-violet-600" /> Executive Cover Letter Preview
                      </span>
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
              Our language model evaluates industry-specific metric impact, verbs, and keywords against thousands of verified job descriptions.
            </p>
          </div>

          {/* Bento Card 2: Executive Layouts Studio (5 Cols) */}
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
                Designed alongside fortune-500 recruiters. Formatted to pass ATS parsing checks while maintaining executive visual elegance.
              </p>
            </div>

            {/* Template Card Showcase Mockup */}
            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
              <div className="space-y-2">
                <div className="h-3 w-1/3 rounded bg-slate-800" />
                <div className="h-2 w-2/3 rounded bg-violet-400" />
                <div className="my-3 border-t border-slate-200" />
                <div className="h-2 w-full rounded bg-slate-300" />
                <div className="h-2 w-4/5 rounded bg-slate-300" />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-bold text-violet-700">
                <span>Minimal, Executive, Creative & Tech</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>

        </div>

        {/* Supporting Secondary Features Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {standardFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 transition-colors duration-300 group-hover:border-violet-200 group-hover:bg-violet-50 group-hover:text-violet-700">
                <f.icon size={20} />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">{f.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export { Features };