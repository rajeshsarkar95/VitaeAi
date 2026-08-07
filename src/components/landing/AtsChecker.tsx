"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  KeyRound,
  AlignLeft,
  ListChecks,
  UploadCloud,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Wand2,
  ShieldCheck,
  FileType,
  ArrowRight,
  TrendingUp,
  FileCheck,
  Zap,
} from "lucide-react";

export function AtsChecker() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "issues">("overview");

  const checks = [
    {
      icon: KeyRound,
      label: "Keyword Density Match",
      value: 88,
      status: "Strong Match",
      desc: "Matches 18/22 critical terms from Senior Tech Lead postings.",
    },
    {
      icon: AlignLeft,
      label: "ATS Layout & Parsing Integrity",
      value: 96,
      status: "Optimized",
      desc: "Passed all structural line-break and font-embedding checks.",
    },
    {
      icon: ListChecks,
      label: "Hard Skills & Qualification Index",
      value: 91,
      status: "High Impact",
      desc: "Key frameworks & cloud infrastructure competencies detected.",
    },
  ];

  const priorityFixes = [
    {
      type: "high",
      title: "Missing Quantified Achievements",
      impact: "+7% ATS Score",
      description: "Add 2+ metric-driven results to your Experience section (e.g., $ revenue, % latency reduction).",
    },
    {
      type: "medium",
      title: "Section Title Standard",
      impact: "+3% ATS Score",
      description: "Rename 'Work Snapshot' to 'Professional Experience' for Taleo & Workday parser compliance.",
    },
  ];

  return (
    <section id="ats" className="relative overflow-hidden bg-slate-50 py-24 text-slate-900 lg:py-32">
      {/* Soft Ambient Light Gradient */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[650px] w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 opacity-70 blur-[130px]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-200/80 via-indigo-100/50 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Value Proposition & Upload CTA */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700 shadow-sm backdrop-blur-xl"
            >
              <Sparkles size={14} className="text-violet-600 fill-violet-200" />
              <span>Real-Time Parser Simulation</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-sans text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              See your resume through the{" "}
              <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                scanner's lens.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Upload any document format and receive a line-by-line diagnostic breakdown. Instantly pinpoint missing keywords, parsing bottlenecks, and high-impact rewrites.
            </motion.p>

            {/* Interactive Upload Dropzone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`group relative flex flex-col items-center justify-center rounded-3xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
                  isHovered
                    ? "border-violet-600 bg-violet-50/50 shadow-xl shadow-violet-500/10 scale-[1.01]"
                    : "border-slate-300 bg-white shadow-md shadow-slate-200/50 hover:border-violet-400"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 shadow-sm group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  <UploadCloud size={28} />
                </div>

                <div className="mt-4">
                  <p className="text-sm font-bold text-slate-900">
                    <span className="text-violet-600 underline underline-offset-4">Click to upload</span> or drag and drop
                  </p>
                  <p className="mt-1 text-xs text-slate-400">PDF, DOCX, or TXT (Max size 10MB)</p>
                </div>

                {/* File Format Support Pill Tags */}
                <div className="mt-5 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">
                    <FileType size={12} /> PDF
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">
                    <FileType size={12} /> DOCX
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 text-emerald-700 px-2.5 py-1 text-[10px] font-bold">
                    <ShieldCheck size={12} /> Privacy Encrypted
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Compatibility Strip */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-200/80 pt-5">
              <span className="text-xs font-semibold text-slate-400">Verified Compatible With:</span>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                <span>Workday</span>
                <span>•</span>
                <span>Greenhouse</span>
                <span>•</span>
                <span>Lever</span>
                <span>•</span>
                <span>Taleo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live ATS Diagnostic Workbench Screen */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 shadow-2xl shadow-slate-200/80 lg:p-8"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-sm">
                    <FileCheck size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Senior_Product_Architect.pdf</h3>
                    <p className="text-xs font-medium text-slate-400">Target Role: Senior Product Lead</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 text-xs font-extrabold text-emerald-700 shadow-sm">
                  <TrendingUp size={14} /> 92 / 100
                </span>
              </div>

              {/* View Toggle Tabs */}
              <div className="mt-6 flex rounded-xl bg-slate-100 p-1">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                    activeTab === "overview"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Score Breakdown
                </button>
                <button
                  onClick={() => setActiveTab("issues")}
                  className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                    activeTab === "issues"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Priority Fixes (2)
                </button>
              </div>

              {/* Dynamic Content Panels */}
              <AnimatePresence mode="wait">
                {activeTab === "overview" ? (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-6 space-y-6"
                  >
                    {checks.map(({ icon: Icon, label, value, status, desc }) => (
                      <div key={label} className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-2 font-bold text-slate-800">
                            <Icon size={16} className="text-violet-600" />
                            {label}
                          </span>
                          <span className="font-extrabold text-slate-900">{value}%</span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 p-0.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600"
                          />
                        </div>

                        <p className="text-[11px] text-slate-500 leading-normal">{desc}</p>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="issues"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-6 space-y-4"
                  >
                    {priorityFixes.map((fix) => (
                      <div
                        key={fix.title}
                        className="rounded-2xl border border-amber-200/80 bg-amber-50/40 p-4 transition-all hover:bg-amber-50/80"
                      >
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
                            <AlertCircle size={14} className="text-amber-600" />
                            {fix.title}
                          </span>
                          <span className="rounded-full bg-amber-100 border border-amber-200 px-2 py-0.5 text-[10px] font-extrabold text-amber-800">
                            {fix.impact}
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed">{fix.description}</p>
                        <button className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-violet-700 hover:text-violet-900">
                          <Wand2 size={12} /> Apply AI Recommendation <ArrowRight size={12} />
                        </button>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Smart AI Recommendation Banner */}
              <div className="mt-8 flex items-center justify-between rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50/80 to-indigo-50/50 p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-500/20">
                    <Zap size={18} />
                  </div>
                  <p className="text-xs font-medium text-slate-700 leading-relaxed">
                    Automated optimization ready. Score can be lifted to <span className="font-extrabold text-violet-700">97/100</span> in 1-click.
                  </p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}