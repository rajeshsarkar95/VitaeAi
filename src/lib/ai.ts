/**
 * Thin abstraction over the AI provider so the rest of the app doesn't
 * care whether we're calling Gemini or OpenAI. Switch with AI_PROVIDER.
 */
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";

const PROVIDER = process.env.AI_PROVIDER ?? "gemini";

const gemini = process.env.GOOGLE_GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY)
  : null;

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export async function generateText(prompt: string, system?: string): Promise<string> {
  if (PROVIDER === "openai") {
    if (!openai) throw new Error("OPENAI_API_KEY is not set");
    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        ...(system ? [{ role: "system" as const, content: system }] : []),
        { role: "user" as const, content: prompt },
      ],
    });
    return res.choices[0]?.message?.content ?? "";
  }

  if (!gemini) throw new Error("GOOGLE_GEMINI_API_KEY is not set");
  const model = gemini.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(system ? `${system}\n\n${prompt}` : prompt);
  return result.response.text();
}

export const PROMPTS = {
  summary: (title: string, skills: string[], years: number) =>
    `Write a 2-3 sentence professional resume summary for a ${title} with ${years} years of experience. Key skills: ${skills.join(", ")}. Keep it specific and free of clichés like "hard-working" or "team player".`,
  bullet: (role: string, context: string) =>
    `Rewrite this resume bullet point for a ${role} in strong, active language with a plausible quantified outcome if none is present. Keep it under 25 words. Original: "${context}"`,
  atsKeywords: (jobDescription: string) =>
    `Extract the 15 most important ATS keywords and skills from this job description, as a comma-separated list:\n\n${jobDescription}`,
};
