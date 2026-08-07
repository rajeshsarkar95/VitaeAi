import { Schema, model, models, type Document, type Types } from "mongoose";

export interface INotification extends Document {
  userId: Types.ObjectId;
  type: "system" | "interview_reminder" | "subscription" | "ai_credit";
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

const NotificationSchema = new Schema<INotification>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    type: { type: String, default: "system" },
    title: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

export default models.Notification || model<INotification>("Notification", NotificationSchema);
