"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  Layout,
  Globe,
  Star,
  Sparkles,
} from "lucide-react";

export function Stats() {
  const stats = [
    {
      value: "100K+",
      label: "Resumes Created",
      subtext: "Generated for global talent",
      icon: FileText,
      color: "from-violet-600 to-indigo-600",
    },
    {
      value: "95%",
      label: "ATS Pass Rate",
      subtext: "Verified by enterprise parsers",
      icon: CheckCircle2,
      color: "from-emerald-600 to-teal-600",
    },
    {
      value: "50+",
      label: "Bespoke Layouts",
      subtext: "Architected for every seniority",
      icon: Layout,
      color: "from-blue-600 to-indigo-600",
    },
    {
      value: "150+",
      label: "Countries Reached",
      subtext: "Used across international markets",
      icon: Globe,
      color: "from-purple-600 to-pink-600",
    },
    {
      value: "4.9/5",
      label: "Average Rating",
      subtext: "Based on 12,000+ candidate reviews",
      icon: Star,
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 text-slate-900 lg:py-28">
      {/* Soft Light-Leak Backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 opacity-60 blur-[130px]">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-200 via-indigo-100 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-300 hover:bg-white hover:shadow-2xl hover:shadow-violet-500/10"
              >
                {/* Background Hover Accent Glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-xl" />

                <div>
                  {/* Top Row: Icon Badge & Sparkle */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100/80 text-slate-700 border border-slate-200/60 transition-colors duration-300 group-hover:bg-violet-50 group-hover:text-violet-700 group-hover:border-violet-200">
                      <Icon size={18} />
                    </div>
                    <Sparkles size={14} className="text-slate-300 transition-colors group-hover:text-violet-400" />
                  </div>

                  {/* Value Header */}
                  <div className="mt-5">
                    <p className={`font-sans text-3xl font-black tracking-tight sm:text-4xl bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-900 group-hover:text-violet-900 transition-colors">
                      {item.label}
                    </p>
                  </div>
                </div>

                {/* Subtext Footer */}
                <div className="mt-4 border-t border-slate-100 pt-3">
                  <p className="text-[11px] font-medium text-slate-400 leading-tight">
                    {item.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}