import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Resume from "@/models/Resume";
import { requireAuth } from "@/lib/require-auth";

// GET /api/resumes — list the current user's resumes
export async function GET(req: NextRequest) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  await connectDB();
  const resumes = await Resume.find({ userId: auth.userId }).sort({ updatedAt: -1 });
  return NextResponse.json({ resumes });
}

// POST /api/resumes — create a new resume
export async function POST(req: NextRequest) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const body = await req.json();
  await connectDB();

  const resume = await Resume.create({
    userId: auth.userId,
    title: body.title ?? "Untitled resume",
    template: body.template ?? "modern",
  });

  return NextResponse.json({ resume }, { status: 201 });
}
