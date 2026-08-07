"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Sparkles,
  HelpCircle,
  Plus,
  Minus,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Zap,
  LayoutTemplate,
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const currentYear = new Date().getFullYear();

  const faqs = [
    {
      q: "Is ResumeForge really free to use?",
      a: "Yes — the Free plan lets you build one complete resume with a basic ATS score check and standard PDF download without entering any credit card details.",
    },
    {
      q: "Will my resume actually pass ATS software?",
      a: "Every template is rigorously tested against major ATS parsers like Greenhouse, Lever, and Workday. Our built-in scanner flags unreadable formatting and provides line-by-line fixes.",
    },
    {
      q: "Can I import my LinkedIn profile?",
      a: "Yes, simply connect your LinkedIn account or paste your profile URL. We'll automatically structure your work experience, education, and skills into your chosen template.",
    },
    {
      q: "How does the AI content suggestion work?",
      a: "You describe your role or draft raw bullet points; our fine-tuned AI converts them into action-oriented, metrics-driven bullet points tailored to your target job title.",
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Absolutely. Pro and Business plans are cancel-anytime with zero hidden fees. You will retain full access to all premium features until the end of your current billing cycle.",
    },
    {
      q: "Do you support multiple languages?",
      a: "You can create and translate resumes into over 20 languages. The AI writing assistant fully supports multi-lingual optimization and localized formatting.",
    },
  ];

  const footerColumns = [
    {
      title: "Product",
      links: [
        { label: "Templates", href: "#templates" },
        { label: "Resume Builder", href: "#builder" },
        { label: "ATS Checker", href: "#ats-check" },
        { label: "Cover Letters", href: "#cover-letter" },
        { label: "Pricing Tiers", href: "#pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Career Blog", href: "#blog" },
        { label: "Resume Tips", href: "#tips" },
        { label: "Interview Prep", href: "#interview" },
        { label: "ATS Guide", href: "#ats-guide" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Contact Sales", href: "#contact" },
        { label: "Careers", href: "#careers" },
        { label: "Press Kit", href: "#press" },
      ],
    },
    {
      title: "Legal & Privacy",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Cookie Settings", href: "#cookies" },
        { label: "Security Overview", href: "#security" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className="w-full bg-slate-50/80 font-sans text-slate-900 antialiased selection:bg-violet-500 selection:text-white">
      
      {/* ---------------- SECTION 1: HERO / BANNER ---------------- */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Radial Light Leaks */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 opacity-60 blur-[140px]">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-200/80 via-indigo-100/50 to-transparent" />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/90 p-8 shadow-2xl shadow-slate-200/60 backdrop-blur-xl lg:p-14"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600" />

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
              
              {/* Left Column: Content */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 shadow-sm"
                >
                  <Sparkles size={14} className="fill-violet-300 text-violet-600" />
                  <span>Executive Career Engine</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 font-sans text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                >
                  Start building your resume{" "}
                  <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    today.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  Join over 100,000+ job seekers who built ATS-optimized resumes and landed interviews at top companies.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <a
                    href="#"
                    className="group relative inline-flex items-center justify-center gap-2.5 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-violet-700 hover:shadow-violet-500/25"
                  >
                    <span>Create Resume Free</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#templates"
                    className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-100"
                  >
                    <LayoutTemplate size={18} className="text-slate-500" />
                    <span>Browse Templates</span>
                  </a>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 flex flex-wrap items-center gap-6 border-t border-slate-100 pt-6 text-xs font-semibold text-slate-500"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>100% ATS Parser Safe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>Instant PDF Download</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Visual Interactive Widget */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-xl"
                >
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                        <FileText size={20} />
                      </div>
                      <div>
                        <p className="font-sans text-xs font-bold text-slate-900">Senior_Software_Engineer.pdf</p>
                        <p className="text-[11px] font-medium text-slate-500">Live Optimization Active</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-extrabold text-emerald-800">
                      <Zap size={11} className="fill-emerald-600 text-emerald-600" />
                      Optimal
                    </span>
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                          ATS Score
                        </span>
                        <p className="mt-1 font-sans text-3xl font-black text-slate-900">
                          98<span className="text-lg font-bold text-slate-400">/100</span>
                        </p>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/80">
                        <TrendingUp size={24} />
                      </div>
                    </div>

                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-violet-600 to-emerald-500" />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-xl bg-violet-50/80 px-4 py-2.5 border border-violet-100 text-xs font-bold text-violet-900">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-violet-600" />
                      <span>Tested against Greenhouse & Lever</span>
                    </div>
                    <span className="text-violet-600">Verified</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- SECTION 2: FAQ ACCORDION ---------------- */}
      <section id="faq" className="relative overflow-hidden py-20 lg:py-28 border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700 shadow-sm backdrop-blur-xl"
            >
              <HelpCircle size={14} className="text-violet-600" />
              <span>Got Questions?</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-sans text-3xl font-black tracking-tight text-slate-900 sm:text-5xl"
            >
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                know.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Have questions about templates, ATS software compatibility, or billing? Find answers below.
            </motion.p>
          </div>

          {/* Accordion Cards */}
          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isOpen
                      ? "border-violet-300 bg-white shadow-xl shadow-violet-500/5 ring-1 ring-violet-400/20"
                      : "border-slate-200/90 bg-white/80 shadow-md shadow-slate-200/40 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none sm:p-7"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-sans text-base font-bold transition-colors sm:text-lg ${
                        isOpen ? "text-violet-950" : "text-slate-800"
                      }`}
                    >
                      {faq.q}
                    </span>

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl transition-all duration-200 ${
                        isOpen
                          ? "bg-violet-600 text-white shadow-md shadow-violet-500/25"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }`}
                    >
                      {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="border-t border-slate-100 px-6 pb-6 pt-3 sm:px-7 sm:pb-7">
                          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Support Banner Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl sm:p-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 border border-violet-200/80 shadow-sm">
                <MessageSquare size={22} />
              </div>
              <div>
                <h3 className="font-sans text-base font-bold text-slate-900">Still have unanswered questions?</h3>
                <p className="text-xs font-medium text-slate-500">Our support team is on standby to help you with custom needs.</p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-xs font-bold text-white shadow-lg transition-all hover:bg-violet-700 hover:shadow-violet-500/25"
            >
              <span>Contact Support</span>
              <ArrowRight size={14} />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ---------------- SECTION 3: FOOTER ---------------- */}
      <footer className="relative overflow-hidden border-t border-slate-200/90 bg-slate-50/80 pt-16 lg:pt-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8 pb-16">
            
            <div className="lg:col-span-2">
              <a href="#" className="inline-flex items-center gap-2.5 font-sans text-xl font-bold tracking-tight text-slate-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-700 via-indigo-600 to-purple-600 text-white shadow-md shadow-violet-500/20">
                  <FileText size={18} />
                </span>
                ResumeForge
              </a>

              <p className="mt-4 max-w-xs text-xs font-medium leading-relaxed text-slate-500">
                AI-powered resumes that pass the scan and land the interview. Built for modern professionals.
              </p>

              {/* Status Indicator */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>All Systems Operational</span>
              </div>

              {/* Socials */}
              <div className="mt-6 flex gap-2.5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Grid */}
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-900">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs font-medium text-slate-500 transition-colors hover:text-violet-700"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-200/90 py-8">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-center sm:text-left">
                <p className="text-xs font-semibold text-slate-500">
                  © {currentYear} ResumeForge Inc. All rights reserved.
                </p>
                <span className="hidden text-slate-300 sm:inline">•</span>
                <p className="text-xs font-medium text-slate-400">
                  Accelerating software engineering and tech careers.
                </p>
              </div>

              {/* Email Form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full max-w-md items-center gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-1.5 text-xs font-medium text-slate-900 placeholder-slate-400 outline-none"
                />
                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:bg-violet-700"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>

            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}