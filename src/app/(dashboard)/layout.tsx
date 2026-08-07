import Link from "next/link";
import {
  LayoutDashboard, FileText, Sparkles, Mail, Globe, FileCheck2,
  Briefcase, BarChart3, Bell, CreditCard, Settings,
} from "lucide-react";

const NAV = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/resumes", label: "My Resumes", icon: FileText },
  { href: "/resumes/new", label: "AI Resume Builder", icon: Sparkles },
  { href: "/cover-letters", label: "Cover Letters", icon: Mail },
  { href: "/portfolio", label: "Portfolio", icon: Globe },
  { href: "/ats-checker", label: "ATS Checker", icon: FileCheck2 },
  { href: "/job-tracker", label: "Job Tracker", icon: Briefcase },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/billing", label: "Billing", icon: CreditCard },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:flex w-60 flex-col border-r border-border bg-muted/40 px-3 py-6">
        <div className="px-3 mb-6 flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
            <Sparkles size={12} className="text-ink" />
          </div>
          <span className="font-display text-[15px] font-semibold">Polish</span>
        </div>
        <nav className="flex flex-col gap-0.5">
          {NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <Icon size={15} />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
