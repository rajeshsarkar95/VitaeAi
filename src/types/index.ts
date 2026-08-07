export interface ResumeExperience {
  id: string;
  title: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface ResumeEducation {
  id: string;
  school: string;
  degree: string;
  field?: string;
  start: string;
  end: string;
}

export interface ResumeData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  summary: string;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: string[];
  projects: { id: string; name: string; description: string }[];
  certifications: { id: string; name: string; issuer: string; date: string }[];
}

export type SubscriptionPlan = "free" | "pro" | "enterprise";
