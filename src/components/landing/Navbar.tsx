import React from "react";
import { FileText,Moon, Menu, Sparkles, ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="border-b border-white/10 bg-background/60 backdrop-blur-2xl backdrop-saturate-150 transition-all">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <a
            href="#"
            className="group flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90"
          >
            <span className="relative flex h-9 w-9 items-center justify-between rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-105">
              <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-background/10 backdrop-blur-sm">
                <FileText size={17} className="text-white drop-shadow-sm" />
              </span>
            </span>
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent font-bold tracking-tight">
             Vitae<span className="text-indigo-500">Ai</span>
            </span>
          </a>
          <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-muted/40 p-1.5 backdrop-blur-md md:flex">
            {["Features", "Templates", "Pricing", "FAQ"].map((item, index) => (
              <li key={item}>
                <a
                  href="#"
                  className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                    index === 0
                      ? "bg-background/80 text-foreground shadow-sm border border-white/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                  }`}
                >
                  {item}
                  {item === "Templates" && (
                    <span className="rounded-full bg-indigo-500/10 px-1.5 py-0.5 text-[10px] font-bold text-indigo-400 border border-indigo-500/20">
                      NEW
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="relative grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-muted/30 text-muted-foreground transition-all duration-200 hover:border-indigo-500/40 hover:bg-muted/60 hover:text-foreground hover:shadow-sm"
            >
              <Moon size={16} />
            </button>

            <a
              href="#"
              className="px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </a>
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-[1px] font-semibold shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-indigo-500/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="inline-flex h-full w-full items-center gap-2 rounded-full bg-background/10 px-4 py-2 text-xs text-white backdrop-blur-xl transition-all duration-300 group-hover:bg-transparent">
                <Sparkles size={14} className="text-indigo-200 animate-pulse" />
                <span>Create Resume Free</span>
              </span>
            </a>
          </div>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-muted/30 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
        </nav>
      </div>
    </header>
  );
}