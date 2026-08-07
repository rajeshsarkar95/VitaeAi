"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, LayoutTemplate, Sparkles, Star, CheckCircle2 } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-indigo-600 to-purple-800 p-8 shadow-2xl shadow-indigo-900/30 sm:p-16 lg:p-20"
        >
          {/* Ambient Lighting & Glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl"
          />

          {/* Background Grid Pattern Overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:3rem_3rem]"
          />

          {/* Content Container */}
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-inner backdrop-blur-md"
            >
              <Sparkles size={14} className="text-amber-300 fill-amber-300" />
              <span>Free Forever Plan Available</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 font-sans text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Start building your resume{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-white bg-clip-text text-transparent">
                today.
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-indigo-100/90 sm:text-lg"
            >
              Join over 100,000+ job seekers who built ATS-optimized resumes and landed interviews at top tech companies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="#"
                className="group relative inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-violet-950 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-2xl sm:w-auto"
              >
                <span>Create Resume Free</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#templates"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20 sm:w-auto"
              >
                <LayoutTemplate size={18} />
                <span>Explore Templates</span>
              </a>
            </motion.div>

            {/* Trust Footer Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/15 pt-8 text-xs font-semibold text-indigo-100/80"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-300" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-300" />
                <span>Instant PDF Download</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-300" />
                  ))}
                </div>
                <span className="ml-1 text-white">4.9/5 Rating</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}