import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken, type JwtPayload } from "@/lib/auth";

/**
 * Reads the Bearer token from the Authorization header, verifies it,
 * and returns the decoded payload — or a 401 NextResponse to return directly.
 *
 * Usage:
 *   const auth = await requireAuth(req);
 *   if (auth instanceof NextResponse) return auth;
 *   // auth.userId is now available
 */
export async function requireAuth(req: NextRequest): Promise<JwtPayload | NextResponse> {
  const header = req.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    return verifyAccessToken(token);
  } catch {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }
}
