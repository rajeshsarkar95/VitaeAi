import { NextResponse, type NextRequest } from "next/server";

const PROTECTED_PREFIXES = [
  "/dashboard", "/resumes", "/cover-letters", "/portfolio",
  "/ats-checker", "/job-tracker", "/analytics", "/billing", "/settings", "/notifications",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));
  if (!isProtected) return NextResponse.next();

  const token = req.cookies.get("polish_access_token")?.value;
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*", "/resumes/:path*", "/cover-letters/:path*", "/portfolio/:path*",
    "/ats-checker/:path*", "/job-tracker/:path*", "/analytics/:path*", "/billing/:path*",
    "/settings/:path*", "/notifications/:path*",
  ],
};
