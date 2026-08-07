"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  Eye,
  ArrowRight,
  ShieldCheck,
  Star,
  Layers,
  LayoutGrid,
} from "lucide-react";

export function Templates() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Executive", "Tech & Code", "Creative", "New Grads"];

  const templates = [
    {
      id: "modern",
      name: "Modern Executive",
      category: "Executive",
      tag: "Most Popular",
      atsScore: 99,
      color: "from-violet-600 to-indigo-600",
      layoutType: "sidebar",
    },
    {
      id: "minimal",
      name: "Minimalist Slate",
      category: "Executive",
      tag: "Highest ATS",
      atsScore: 100,
      color: "from-slate-700 to-slate-900",
      layoutType: "standard",
    },
    {
      id: "professional",
      name: "Professional Lead",
      category: "Executive",
      tag: "Classic",
      atsScore: 98,
      color: "from-blue-600 to-indigo-700",
      layoutType: "standard",
    },
    {
      id: "developer",
      name: "DevOps & Engineering",
      category: "Tech & Code",
      tag: "GitHub Integrated",
      atsScore: 97,
      color: "from-emerald-600 to-teal-700",
      layoutType: "compact",
    },
    {
      id: "designer",
      name: "Creative Portfolio",
      category: "Creative",
      tag: "Visual Design",
      atsScore: 95,
      color: "from-purple-600 to-pink-600",
      layoutType: "grid",
    },
    {
      id: "marketing",
      name: "Growth & Marketing",
      category: "Creative",
      tag: "Metrics-Driven",
      atsScore: 96,
      color: "from-amber-500 to-orange-600",
      layoutType: "sidebar",
    },
    {
      id: "corporate",
      name: "Corporate Standard",
      category: "Executive",
      tag: "Fortune 500",
      atsScore: 99,
      color: "from-slate-800 to-slate-950",
      layoutType: "standard",
    },
    {
      id: "student",
      name: "Academic Entry",
      category: "New Grads",
      tag: "First Role",
      atsScore: 98,
      color: "from-sky-500 to-blue-600",
      layoutType: "standard",
    },
    {
      id: "startup",
      name: "Startup Founder",
      category: "Tech & Code",
      tag: "Agile",
      atsScore: 96,
      color: "from-violet-500 to-fuchsia-600",
      layoutType: "compact",
    },
    {
      id: "hybrid",
      name: "Product & Operations",
      category: "Tech & Code",
      tag: "Versatile",
      atsScore: 98,
      color: "from-indigo-600 to-blue-600",
      layoutType: "sidebar",
    },
  ];

  const filteredTemplates =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <section id="templates" className="relative overflow-hidden bg-slate-50 py-24 text-slate-900 lg:py-32">
      {/* Light Ambient Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 opacity-60 blur-[140px]">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-200 via-indigo-100 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700 shadow-sm backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-violet-600" />
            <span>Tested Against Fortune 500 Parsers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-sans text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            A layout engineered for{" "}
            <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              every ambition.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Every template passes rigorous 100% ATS readability checks before shipping. Choose a structure tailored to your seniority level.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Templates Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {filteredTemplates.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: (index % 5) * 0.04 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                {/* Resume Card Preview Screen */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-50/80 p-4 select-none">
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-700 shadow-sm">
                      <CheckCircle2 size={10} className="text-emerald-600" /> {item.atsScore}% ATS
                    </span>
                    <span className="rounded-full bg-white/90 border border-slate-200 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-slate-500 shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Dynamic Structural Wireframe Layouts */}
                  <div className="mt-4 h-full space-y-2.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.layoutType === "sidebar" && (
                      <div className="grid grid-cols-12 gap-2 h-full">
                        <div className="col-span-4 rounded-md bg-slate-200/80 p-1.5 space-y-1.5">
                          <div className="h-2 w-full rounded bg-slate-400" />
                          <div className="h-1 w-3/4 rounded bg-slate-300" />
                          <div className="mt-3 h-1 w-full rounded bg-slate-300" />
                          <div className="h-1 w-full rounded bg-slate-300" />
                        </div>
                        <div className="col-span-8 space-y-2 pt-1">
                          <div className={`h-2.5 w-3/4 rounded bg-gradient-to-r ${item.color}`} />
                          <div className="h-1.5 w-full rounded bg-slate-200" />
                          <div className="h-1.5 w-5/6 rounded bg-slate-200" />
                          <div className="mt-2 h-1.5 w-full rounded bg-slate-200" />
                          <div className="h-1.5 w-2/3 rounded bg-slate-200" />
                        </div>
                      </div>
                    )}

                    {item.layoutType === "standard" && (
                      <div className="space-y-2 pt-1">
                        <div className={`h-3 w-1/2 mx-auto rounded bg-gradient-to-r ${item.color}`} />
                        <div className="h-1 w-1/3 mx-auto rounded bg-slate-300" />
                        <div className="mt-4 space-y-1.5">
                          <div className="h-1.5 w-full rounded bg-slate-200" />
                          <div className="h-1.5 w-full rounded bg-slate-200" />
                          <div className="h-1.5 w-4/5 rounded bg-slate-200" />
                        </div>
                        <div className="mt-3 space-y-1.5">
                          <div className="h-1.5 w-full rounded bg-slate-200" />
                          <div className="h-1.5 w-2/3 rounded bg-slate-200" />
                        </div>
                      </div>
                    )}

                    {item.layoutType === "compact" && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center pb-1 border-b border-slate-200">
                          <div className={`h-2.5 w-1/3 rounded bg-gradient-to-r ${item.color}`} />
                          <div className="h-1.5 w-1/4 rounded bg-slate-300" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="h-1.5 rounded bg-slate-200" />
                          <div className="h-1.5 rounded bg-slate-200" />
                        </div>
                        <div className="space-y-1 mt-2">
                          <div className="h-1.5 w-full rounded bg-slate-200" />
                          <div className="h-1.5 w-full rounded bg-slate-200" />
                          <div className="h-1.5 w-3/4 rounded bg-slate-200" />
                        </div>
                      </div>
                    )}

                    {item.layoutType === "grid" && (
                      <div className="space-y-2">
                        <div className={`h-3 w-2/3 rounded bg-gradient-to-r ${item.color}`} />
                        <div className="grid grid-cols-3 gap-1.5 mt-3">
                          <div className="h-8 rounded bg-slate-200/80" />
                          <div className="h-8 rounded bg-slate-200/80" />
                          <div className="h-8 rounded bg-slate-200/80" />
                        </div>
                        <div className="space-y-1.5 mt-2">
                          <div className="h-1.5 w-full rounded bg-slate-200" />
                          <div className="h-1.5 w-4/5 rounded bg-slate-200" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover Actions Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-slate-900/60 p-4 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <button className="w-full rounded-xl bg-violet-600 px-3.5 py-2.5 text-xs font-bold text-white shadow-lg shadow-violet-600/30 transition-transform hover:scale-105 active:scale-95">
                      Use Template
                    </button>
                    <button className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20">
                      <Eye size={13} /> Preview
                    </button>
                  </div>
                </div>

                {/* Footer Label */}
                <div className="border-t border-slate-100 bg-white p-3.5 text-center">
                  <p className="font-sans text-sm font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                    {item.name}
                  </p>
                  <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 sm:flex-row lg:p-10"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 sm:text-lg">
                Need custom formatting for a niche role?
              </h3>
              <p className="text-xs text-slate-500 sm:text-sm">
                Our layout engine automatically reformats structure without breaking ATS parsing rules.
              </p>
            </div>
          </div>

          <button className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-white transition-all hover:bg-violet-700">
            <span>Explore All Layouts</span>
            <ArrowRight size={14} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}