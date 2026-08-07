interface ResumeLike {
  personal?: { fullName?: string; jobTitle?: string; email?: string; phone?: string };
  summary?: string;
  experience?: { bullets?: string[] }[];
  education?: unknown[];
  skills?: string[];
  projects?: unknown[];
  certifications?: unknown[];
}

export interface AtsCheck {
  label: string;
  pass: boolean;
}

export interface AtsResult {
  score: number;
  checks: AtsCheck[];
}

/**
 * Mirrors the scoring logic used in the frontend prototype so the
 * real API and the UI never disagree about what "82/100" means.
 */
export function calcAtsScore(resume: ResumeLike): AtsResult {
  const checks: AtsCheck[] = [];
  let score = 0;

  const personalFilled = Boolean(
    resume.personal?.fullName && resume.personal?.jobTitle && resume.personal?.email && resume.personal?.phone,
  );
  checks.push({ label: "Contact details complete", pass: personalFilled });
  if (personalFilled) score += 15;

  const summaryOk = (resume.summary ?? "").trim().length >= 60;
  checks.push({ label: "Summary is substantial (60+ chars)", pass: summaryOk });
  if (summaryOk) score += 15;

  const bulletCount = (resume.experience ?? []).reduce((n, e) => n + (e.bullets?.filter((b) => b.trim()).length ?? 0), 0);
  const expOk = (resume.experience?.length ?? 0) >= 1 && bulletCount >= 3;
  checks.push({ label: "3+ experience bullet points", pass: expOk });
  if (expOk) score += 20;

  const eduOk = (resume.education?.length ?? 0) >= 1;
  checks.push({ label: "Education section present", pass: eduOk });
  if (eduOk) score += 10;

  const skillsOk = (resume.skills?.length ?? 0) >= 5;
  checks.push({ label: "5+ skills listed", pass: skillsOk });
  if (skillsOk) score += 15;

  const extraOk = (resume.projects?.length ?? 0) > 0 || (resume.certifications?.length ?? 0) > 0;
  checks.push({ label: "Projects or certifications added", pass: extraOk });
  if (extraOk) score += 10;

  const titleWords = (resume.personal?.jobTitle ?? "").toLowerCase().split(/\s+/).filter((w) => w.length > 3);
  const haystack = `${resume.summary ?? ""} ${(resume.experience ?? []).flatMap((e) => e.bullets ?? []).join(" ")}`.toLowerCase();
  const hits = titleWords.filter((w) => haystack.includes(w));
  const kwOk = titleWords.length > 0 && hits.length >= Math.ceil(titleWords.length / 2);
  checks.push({ label: "Title keywords echoed in content", pass: kwOk });
  if (kwOk) score += 15;

  return { score: Math.min(score, 100), checks };
}
