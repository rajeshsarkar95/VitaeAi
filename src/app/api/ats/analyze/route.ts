import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/require-auth";
import { calcAtsScore } from "@/lib/ats";

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const resumeData = await req.json();
  const result = calcAtsScore(resumeData);

  return NextResponse.json(result);
}
