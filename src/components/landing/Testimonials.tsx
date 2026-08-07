"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Award,
} from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Maya Chen",
      role: "Product Designer",
      company: "Northwind Labs",
      quote:
        "The AI rewrite turned my flat bullet points into results-driven statements. I had three interviews booked within a week of updating my resume.",
      metric: "3 Interviews in 1 Wk",
      avatarBg: "from-violet-600 to-indigo-600",
      initials: "MC",
    },
    {
      name: "Daniel Osei",
      role: "Recent Graduate",
      company: "Kingsley University",
      quote:
        "I had zero idea how to format a resume properly for ATS scanners. The built-in ATS checker caught structural issues I never would have noticed on my own.",
      metric: "100% ATS Approved",
      avatarBg: "from-blue-600 to-indigo-700",
      initials: "DO",
    },
    {
      name: "Priya Nair",
      role: "Senior Backend Engineer",
      company: "Arclight Systems",
      quote:
        "Imported my LinkedIn profile, picked the Developer template, and had a polished, recruiter-ready PDF export in under ten minutes.",
      metric: "10-Min PDF Export",
      avatarBg: "from-emerald-600 to-teal-700",
      initials: "PN",
    },
    {
      name: "Alex Rivera",
      role: "Engineering Manager",
      company: "ScaleGrid",
      quote:
        "Bypassed top-funnel recruiter screenings with zero hassle. The keyword harmonizer aligned my resume perfectly with senior leadership requirements.",
      metric: "Land Executive Role",
      avatarBg: "from-purple-600 to-pink-600",
      initials: "AR",
    },
    {
      name: "Sofia Rossi",
      role: "UX Researcher",
      company: "Designify",
      quote:
        "The quantification engine turned my routine task descriptions into high-impact metric statements. Recruiter responses doubled almost immediately.",
      metric: "2x Response Rate",
      avatarBg: "from-amber-500 to-orange-600",
      initials: "SR",
    },
  ];

  // Duplicate items for infinite seamless scroll loop
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-50 py-24 text-slate-900 lg:py-32">
      {/* Light-Leak Radial Backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 opacity-60 blur-[140px]">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-200/80 via-indigo-100/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700 shadow-sm backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-violet-600 fill-violet-200" />
            <span>Candidate Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-sans text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Loved by ambitious job seekers{" "}
            <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              worldwide.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Discover how professionals across engineering, design, and executive leadership landed their dream roles faster.
          </motion.p>
        </div>

      </div>

      {/* INFINITE SCROLLING TICKER CONTAINER */}
      <div className="relative mt-16 flex w-full overflow-hidden py-4">
        {/* Left & Right Vignette Overlay Masks for Fade Effect */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-16 bg-gradient-to-r from-slate-50 to-transparent sm:w-32 lg:w-48" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-slate-50 to-transparent sm:w-32 lg:w-48" />

        <motion.div
          className="flex gap-6 pr-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {infiniteTestimonials.map((item, index) => (
            <figure
              key={`${item.name}-${index}`}
              className="group relative flex w-[350px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white/90 p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-500/10 sm:w-[400px]"
            >
              {/* Background Decorative Quote Mark */}
              <Quote
                size={70}
                className="pointer-events-none absolute -right-3 -top-3 text-slate-100 opacity-60 transition-colors group-hover:text-violet-100/80"
              />

              <div className="relative z-10">
                {/* Top Rating & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-700">
                    <TrendingUp size={11} /> {item.metric}
                  </span>
                </div>

                {/* Quote Body */}
                <blockquote className="mt-5 text-sm font-medium leading-relaxed text-slate-700">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Footer */}
              <figcaption className="relative z-10 mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.avatarBg} text-xs font-bold text-white shadow-md`}
                >
                  {item.initials}
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <p className="font-sans text-sm font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                      {item.name}
                    </p>
                    <CheckCircle2 size={13} className="text-blue-500 shrink-0" />
                  </div>
                  <p className="truncate text-xs font-medium text-slate-500 mt-0.5 flex items-center gap-1">
                    <span>{item.role}</span>
                    <span>•</span>
                    <span className="font-semibold text-slate-700">{item.company}</span>
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>

      {/* Social Proof Verification Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-slate-200/80 bg-white/70 px-8 py-4 shadow-sm text-xs font-semibold text-slate-500"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span>100% Verified Candidate Reviews</span>
          </div>
          <div className="hidden h-3 w-px bg-slate-200 sm:block" />
          <div className="flex items-center gap-2">
            <Award size={16} className="text-violet-600" />
            <span>Rated 4.9/5 Across 12,000+ Resumes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}