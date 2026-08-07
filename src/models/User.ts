import { Schema, model, models, type Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  avatarUrl?: string;
  provider: "credentials" | "google" | "github";
  role: "user" | "admin";
  emailVerified: boolean;
  plan: "free" | "pro" | "enterprise";
  aiCreditsUsed: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, select: false },
    avatarUrl: { type: String },
    provider: { type: String, enum: ["credentials", "google", "github"], default: "credentials" },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    emailVerified: { type: Boolean, default: false },
    plan: { type: String, enum: ["free", "pro", "enterprise"], default: "free" },
    aiCreditsUsed: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default models.User || model<IUser>("User", UserSchema);
