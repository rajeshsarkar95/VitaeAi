import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { connectDB } from "@/lib/db";
import Subscription from "@/models/Subscription";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") as string;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET as string);
  } catch (err) {
    console.error("[STRIPE_WEBHOOK_SIGNATURE_ERROR]", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  await connectDB();

  switch (event.type) {
    case "checkout.session.completed":
    case "customer.subscription.updated": {
      const sub = event.data.object as any;
      await Subscription.findOneAndUpdate(
        { providerCustomerId: sub.customer },
        {
          provider: "stripe",
          providerCustomerId: sub.customer,
          providerSubscriptionId: sub.id ?? sub.subscription,
          status: sub.status ?? "active",
          currentPeriodEnd: sub.current_period_end ? new Date(sub.current_period_end * 1000) : undefined,
        },
        { upsert: true },
      );
      break;
    }
    case "customer.subscription.deleted": {
      const sub = event.data.object as any;
      await Subscription.findOneAndUpdate({ providerCustomerId: sub.customer }, { status: "canceled", plan: "free" });
      await User.findOneAndUpdate({ email: sub.customer_email }, { plan: "free" });
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
