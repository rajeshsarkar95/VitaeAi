"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Sparkles,
  Zap,
  ShieldCheck,
  ArrowRight,
  Building2,
  Users,
} from "lucide-react";

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  const tiers = [
    {
      name: "Free",
      desc: "Essential tools for basic resume building.",
      monthly: 0,
      yearly: 0,
      highlight: false,
      ctaText: "Get Started Free",
      badge: null,
      features: [
        "1 active resume draft",
        "3 ATS-standard templates",
        "Standard PDF export",
        "Basic ATS scan score",
      ],
    },
    {
      name: "Pro",
      desc: "Everything you need to land top-tier interviews faster.",
      monthly: 12,
      yearly: 8,
      highlight: true,
      ctaText: "Start 7-Day Free Trial",
      badge: "Most Popular",
      features: [
        "Unlimited resumes & cover letters",
        "All 50+ executive & tech templates",
        "Full AI content generator & rewrite engine",
        "Complete ATS score + line-by-line fixes",
        "LinkedIn profile auto-import",
        "Priority PDF & Word exports",
      ],
    },
    {
      name: "Business",
      desc: "Ideal for career coaches, universities, & small teams.",
      monthly: 29,
      yearly: 22,
      highlight: false,
      ctaText: "Upgrade to Business",
      badge: "Team Growth",
      features: [
        "Everything in Pro",
        "5 team collaborator seats",
        "Shared template library & branding",
        "Bulk ATS resume scanner",
        "Priority email & live chat support",
      ],
    },
    {
      name: "Enterprise",
      desc: "Custom solutions for large institutions & bootcamps.",
      monthly: null,
      yearly: null,
      highlight: false,
      ctaText: "Contact Enterprise Sales",
      badge: "Custom Scale",
      features: [
        "Unlimited team seats & admin controls",
        "SAML SSO & enterprise security",
        "Custom domain & branded portal",
        "Dedicated account manager",
        "Custom API integrations",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden bg-slate-50 py-24 text-slate-900 lg:py-32">
      {/* Light-Leak Radial Backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 opacity-60 blur-[140px]">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-200/80 via-indigo-100/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700 shadow-sm backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-violet-600 fill-violet-200" />
            <span>Transparent Investment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-sans text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Simple pricing,{" "}
            <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              cancel anytime.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Unlock the power of enterprise career AI. Choose the plan that fits your career goals.
          </motion.p>

          {/* Billing Switcher Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white p-1.5 shadow-md"
          >
            <button
              onClick={() => setYearly(false)}
              className={`relative rounded-full px-5 py-2 text-xs font-bold transition-colors ${
                !yearly ? "text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {!yearly && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 z-0 rounded-full bg-slate-900 shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">Monthly Billing</span>
            </button>

            <button
              onClick={() => setYearly(true)}
              className={`relative flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-colors ${
                yearly ? "text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {yearly && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">Yearly Billing</span>
              <span
                className={`relative z-10 rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                  yearly ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-800"
                }`}
              >
                SAVE 30%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
          {tiers.map((tier, index) => {
            const price = yearly ? tier.yearly : tier.monthly;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 ${
                  tier.highlight
                    ? "border-2 border-violet-600 bg-white shadow-2xl shadow-violet-500/15 scale-[1.03] z-10"
                    : "border border-slate-200/90 bg-white/80 shadow-lg shadow-slate-200/50 hover:border-violet-300 hover:bg-white"
                }`}
              >
                {/* Highlight Top Tag */}
                {tier.badge && (
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider ${
                        tier.highlight
                          ? "bg-violet-100 text-violet-800 border border-violet-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {tier.highlight && <Zap size={12} className="fill-violet-600 text-violet-600" />}
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Description */}
                  <h3 className="font-sans text-xl font-bold text-slate-900">{tier.name}</h3>
                  <p className="mt-2 min-h-[36px] text-xs font-medium text-slate-500 leading-relaxed">
                    {tier.desc}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 border-b border-slate-100 pb-6">
                    <AnimatePresence mode="wait">
                      {price === null ? (
                        <motion.div
                          key="custom"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="font-sans text-4xl font-black text-slate-900"
                        >
                          Custom
                        </motion.div>
                      ) : (
                        <motion.div
                          key={yearly ? "yearly" : "monthly"}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="flex items-baseline gap-1"
                        >
                          <span className="font-sans text-4xl font-black text-slate-900 sm:text-5xl">
                            ${price}
                          </span>
                          <span className="text-xs font-bold text-slate-400">/ month</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {yearly && price !== null && price > 0 && (
                      <p className="mt-1 text-[11px] font-semibold text-emerald-600">
                        Billed annually (${price * 12}/yr)
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="mt-6 space-y-3.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs font-medium text-slate-600">
                        <div
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            tier.highlight ? "bg-violet-100 text-violet-700" : "bg-emerald-50 text-emerald-600"
                          }`}
                        >
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4">
                  <a
                    href="#"
                    className={`group/btn relative flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-bold transition-all duration-200 ${
                      tier.highlight
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25 hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-500/35"
                        : "border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 hover:border-slate-300"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise Bottom Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 border border-violet-200/80">
              <Building2 size={22} />
            </div>
            <div>
              <p className="font-sans text-sm font-bold text-slate-900">Hiring or Managing a Team?</p>
              <p className="text-xs text-slate-500">Get volume licensing, custom API access, and dedicated onboarding for your institution.</p>
            </div>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50"
          >
            <span>Learn About Team Plans</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}