import type Stripe from "stripe";
import { getStripeClient } from "@/lib/stripe";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

/**
 * Receives Stripe events and marks donations as completed once payment
 * succeeds. Configure the endpoint URL (/api/stripe/webhook) in the Stripe
 * dashboard and set STRIPE_WEBHOOK_SECRET so signatures can be verified.
 */
export async function POST(request: Request) {
  const stripe = getStripeClient();
  const supabase = getSupabaseAdminClient();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe || !supabase || !webhookSecret) {
    return Response.json(
      { ok: false, message: "Stripe webhook is not configured." },
      { status: 503 },
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return Response.json(
      { ok: false, message: "Missing Stripe signature." },
      { status: 400 },
    );
  }

  const payload = await request.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      payload,
      signature,
      webhookSecret,
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Invalid Stripe signature.";
    return Response.json({ ok: false, message }, { status: 400 });
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    const session = event.data.object as Stripe.Checkout.Session;
    const paymentIntentId =
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : (session.payment_intent?.id ?? null);

    await supabase
      .from("donations")
      .update({
        status: "completed",
        stripe_payment_intent_id: paymentIntentId,
      })
      .eq("stripe_session_id", session.id);
  } else if (event.type === "checkout.session.async_payment_failed") {
    const session = event.data.object as Stripe.Checkout.Session;
    await supabase
      .from("donations")
      .update({ status: "failed" })
      .eq("stripe_session_id", session.id);
  }

  return Response.json({ ok: true, received: true });
}
