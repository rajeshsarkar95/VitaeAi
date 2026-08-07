"use client";

import React from "react";

function LogoCloud() {
  const companies = [
    {
      name: "Google",
      svg: (
        <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
      ),
    },
    {
      name: "Microsoft",
      svg: (
        <svg className="h-5 w-auto" viewBox="0 0 23 23" fill="currentColor">
          <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
        </svg>
      ),
    },
    {
      name: "Amazon",
      svg: (
        <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.92 11.23c-1.33.27-2.61.56-3.88.88-1.52.38-2.35.95-2.35 1.96 0 1.19 1.12 1.81 2.82 1.81 1.7 0 3.01-.67 3.41-1.79v-2.86zm1.75 6.07c-.49.27-1.25.43-2.14.43-1.74 0-2.8-.75-2.8-2.02 0-1.42 1.05-2.28 3.09-2.66l1.85-.35v4.6zm5.82 2.6c-.23-.19-.52-.16-.72.08-1.2 1.4-2.84 2.14-4.8 2.14-3.56 0-5.74-2.1-5.74-5.28 0-3.35 2.45-5.32 6.64-5.32h3.12V8.4c0-2.13-1.39-3.35-3.8-3.35-1.95 0-3.48.72-4.18 1.95-.12.22-.38.31-.62.2l-1.31-.65c-.23-.11-.31-.38-.21-.61C8.89 3.86 11.19 2.7 14.12 2.7c3.85 0 6.07 1.92 6.07 5.56v7.35c0 1.54.49 2.12 1.19 2.12.33 0 .73-.13 1.02-.33.22-.15.51-.08.64.15l.69 1.25c.13.23.05.52-.17.67-.65.46-1.56.78-2.58.78-1.35 0-2.19-.62-2.48-1.85z" />
        </svg>
      ),
    },
    {
      name: "Meta",
      svg: (
        <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.82 2.25c-2.38 0-4.57 1.19-6.82 3.51C7.75 3.44 5.56 2.25 3.18 2.25 1.17 2.25 0 3.73 0 6.22c0 3.74 3.03 7.82 6.54 11.38 2.06 2.09 4.19 4.15 5.46 4.15 1.27 0 3.4-2.06 5.46-4.15 3.51-3.56 6.54-7.64 6.54-11.38 0-2.49-1.17-3.97-3.18-3.97z" />
        </svg>
      ),
    },
    {
      name: "Adobe",
      svg: (
        <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.966 22H24V2h-10.034zM0 2v20h10.034zM8.88 12.833h3.587l-2.023-4.992z" />
        </svg>
      ),
    },
    {
      name: "Netflix",
      svg: (
        <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.398 0v24l4.572-1.378V0zm9.204 0v22.622l4.572 1.378V0zM9.97 0l4.632 12.924L9.97 24z" />
        </svg>
      ),
    },
    {
      name: "Spotify",
      svg: (
        <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.841c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50/50 py-4">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">
          Trusted by professionals hired at leading companies
        </p>
        <div className="mt-8 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={`${company.name}-${idx}`}
                className="group flex items-center gap-2.5 text-slate-400 transition-all duration-300 hover:text-slate-900 hover:scale-105"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {company.svg}
                </div>
                <span className="font-sans text-base font-bold tracking-tight opacity-90 transition-opacity group-hover:opacity-100">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export { LogoCloud };