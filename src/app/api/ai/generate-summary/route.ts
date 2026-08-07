import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/require-auth";
import { checkAndConsumeCredit } from "@/lib/redis";
import { generateText, PROMPTS } from "@/lib/ai";

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const { jobTitle, skills = [], yearsExperience = 3 } = await req.json();

  const allowed = await checkAndConsumeCredit(auth.userId, 20 /* daily free-tier limit */);
  if (!allowed) {
    return NextResponse.json({ error: "Daily AI credit limit reached. Upgrade to Pro for unlimited generation." }, { status: 429 });
  }

  try {
    const summary = await generateText(PROMPTS.summary(jobTitle, skills, yearsExperience));
    return NextResponse.json({ summary: summary.trim() });
  } catch (err) {
    console.error("[AI_SUMMARY_ERROR]", err);
    return NextResponse.json({ error: "AI generation failed" }, { status: 502 });
  }
}
