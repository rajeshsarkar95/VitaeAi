import { Schema, model, models, type Document, type Types } from "mongoose";

export interface ICoverLetter extends Document {
  userId: Types.ObjectId;
  resumeId?: Types.ObjectId;
  companyName: string;
  hiringManager?: string;
  jobTitle: string;
  content: string;
  tone: "professional" | "friendly" | "executive" | "enthusiastic";
  createdAt: Date;
  updatedAt: Date;
}

const CoverLetterSchema = new Schema<ICoverLetter>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    resumeId: { type: Schema.Types.ObjectId, ref: "Resume" },
    companyName: { type: String, required: true },
    hiringManager: String,
    jobTitle: { type: String, required: true },
    content: { type: String, required: true },
    tone: { type: String, default: "professional" },
  },
  { timestamps: true },
);

export default models.CoverLetter || model<ICoverLetter>("CoverLetter", CoverLetterSchema);
