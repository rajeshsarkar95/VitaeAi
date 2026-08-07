import { Schema, model, models, type Document, type Types } from "mongoose";

interface IExperience {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  bullets: string[];
}

interface IEducation {
  school: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate?: string;
}

export interface IResume extends Document {
  userId: Types.ObjectId;
  title: string;
  template: "modern" | "minimal" | "executive" | "creative" | "corporate";
  personal: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone?: string;
    location?: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
    photoUrl?: string;
  };
  summary: string;
  experience: IExperience[];
  education: IEducation[];
  skills: string[];
  softSkills: string[];
  projects: { name: string; description: string; link?: string }[];
  certifications: { name: string; issuer: string; date: string }[];
  languages: { name: string; level: string }[];
  isPublic: boolean;
  publicSlug?: string;
  passwordProtected: boolean;
  atsScore: number;
  version: number;
  createdAt: Date;
  updatedAt: Date;
}

const ResumeSchema = new Schema<IResume>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    title: { type: String, required: true, default: "Untitled resume" },
    template: { type: String, default: "modern" },
    personal: {
      fullName: String,
      jobTitle: String,
      email: String,
      phone: String,
      location: String,
      linkedin: String,
      github: String,
      portfolio: String,
      photoUrl: String,
    },
    summary: { type: String, default: "" },
    experience: [
      {
        title: String,
        company: String,
        location: String,
        startDate: String,
        endDate: String,
        current: { type: Boolean, default: false },
        bullets: [String],
      },
    ],
    education: [
      {
        school: String,
        degree: String,
        field: String,
        startDate: String,
        endDate: String,
      },
    ],
    skills: [String],
    softSkills: [String],
    projects: [{ name: String, description: String, link: String }],
    certifications: [{ name: String, issuer: String, date: String }],
    languages: [{ name: String, level: String }],
    isPublic: { type: Boolean, default: false },
    publicSlug: { type: String, unique: true, sparse: true },
    passwordProtected: { type: Boolean, default: false },
    atsScore: { type: Number, default: 0 },
    version: { type: Number, default: 1 },
  },
  { timestamps: true },
);

export default models.Resume || model<IResume>("Resume", ResumeSchema);
