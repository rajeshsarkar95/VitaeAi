import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { connectDB } from "@/lib/db";
import Subscription from "@/models/Subscription";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err) {
    console.error("[STRIPE_WEBHOOK_SIGNATURE_ERROR]", err);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  await connectDB();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      await Subscription.findOneAndUpdate(
        { providerCustomerId: session.customer as string },
        {
          provider: "stripe",
          providerCustomerId: session.customer,
          providerSubscriptionId: session.subscription,
          status: "active",
        },
        { upsert: true }
      );
      break;
    }

    case "customer.subscription.updated": {
      const sub = event.data.object as Stripe.Subscription;

      await Subscription.findOneAndUpdate(
        { providerCustomerId: sub.customer as string },
        {
          provider: "stripe",
          providerCustomerId: sub.customer,
          providerSubscriptionId: sub.id,
          status: sub.status,
          currentPeriodEnd: sub.current_period_end
            ? new Date(sub.current_period_end * 1000)
            : undefined,
        },
        { upsert: true }
      );
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;

      await Subscription.findOneAndUpdate(
        { providerCustomerId: sub.customer as string },
        {
          status: "canceled",
          plan: "free",
        }
      );

      break;
    }

    default:
      break;
  }

  return NextResponse.json({ received: true });
}