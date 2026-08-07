import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Resume from "@/models/Resume";
import { requireAuth } from "@/lib/require-auth";
import { calcAtsScore } from "@/lib/ats";

interface Params {
  params: { id: string };
}

export async function GET(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  await connectDB();
  const resume = await Resume.findOne({ _id: params.id, userId: auth.userId });
  if (!resume) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ resume });
}

export async function PATCH(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  const updates = await req.json();
  await connectDB();

  const resume = await Resume.findOne({ _id: params.id, userId: auth.userId });
  if (!resume) return NextResponse.json({ error: "Not found" }, { status: 404 });

  Object.assign(resume, updates);
  resume.atsScore = calcAtsScore(resume).score;
  resume.version += 1;
  await resume.save();

  return NextResponse.json({ resume });
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req);
  if (auth instanceof NextResponse) return auth;

  await connectDB();
  const result = await Resume.deleteOne({ _id: params.id, userId: auth.userId });
  if (result.deletedCount === 0) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ success: true });
}
