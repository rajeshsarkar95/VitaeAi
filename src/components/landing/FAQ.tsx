"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  return (
    <section id="faq" className="relative overflow-hidden bg-slate-50/80 py-24 text-slate-900 lg:py-32">
      {/* Light-Leak Radial Backdrops */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 opacity-60 blur-[140px]">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-200/80 via-indigo-100/50 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700 shadow-sm backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-violet-600 fill-violet-200" />
            <span>Got Questions?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-sans text-4xl font-black tracking-tight text-slate-900 sm:text-5xl"
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
            Have questions about templates, ATS compatibility, or billing? Find answers below.
          </motion.p>
        </div>

        {/* Premium Accordion List */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

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
                  onClick={() => setOpenIndex(isOpen ? null : index)}
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

        {/* Executive Support Banner */}
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
              <p className="text-xs font-medium text-slate-500">Our support team is ready to assist you with custom requirements.</p>
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
  );
}