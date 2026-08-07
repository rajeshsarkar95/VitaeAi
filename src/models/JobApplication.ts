import { Schema, model, models, type Document, type Types } from "mongoose";

export interface IJobApplication extends Document {
  userId: Types.ObjectId;
  company: string;
  jobTitle: string;
  status: "saved" | "applied" | "interview" | "offer" | "rejected";
  applicationUrl?: string;
  notes?: string;
  deadline?: Date;
  appliedDate?: Date;
  resumeId?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const JobApplicationSchema = new Schema<IJobApplication>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    company: { type: String, required: true },
    jobTitle: { type: String, required: true },
    status: { type: String, enum: ["saved", "applied", "interview", "offer", "rejected"], default: "saved" },
    applicationUrl: String,
    notes: String,
    deadline: Date,
    appliedDate: Date,
    resumeId: { type: Schema.Types.ObjectId, ref: "Resume" },
  },
  { timestamps: true },
);

export default models.JobApplication || model<IJobApplication>("JobApplication", JobApplicationSchema);
