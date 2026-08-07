import { Schema, model, models, type Document, type Types } from "mongoose";

export interface ISubscription extends Document {
  userId: Types.ObjectId;
  plan: "free" | "pro" | "enterprise";
  provider: "stripe" | "razorpay";
  providerCustomerId?: string;
  providerSubscriptionId?: string;
  status: "active" | "canceled" | "past_due" | "trialing";
  currentPeriodEnd?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const SubscriptionSchema = new Schema<ISubscription>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    plan: { type: String, enum: ["free", "pro", "enterprise"], default: "free" },
    provider: { type: String, enum: ["stripe", "razorpay"] },
    providerCustomerId: String,
    providerSubscriptionId: String,
    status: { type: String, enum: ["active", "canceled", "past_due", "trialing"], default: "active" },
    currentPeriodEnd: Date,
  },
  { timestamps: true },
);

export default models.Subscription || model<ISubscription>("Subscription", SubscriptionSchema);
