import { donationSchema } from "@/lib/schemas";
import { getSupabaseAdminClientOrThrow } from "@/lib/supabase/admin";
import { getStripeClientOrThrow } from "@/lib/stripe";
import { SITE_CONFIG } from "@/lib/constants";

const CURRENCY = "cad";

function resolveOrigin(request: Request) {
  const headerOrigin = request.headers.get("origin");
  if (headerOrigin) {
    return headerOrigin;
  }
  const forwardedHost = request.headers.get("x-forwarded-host");
  if (forwardedHost) {
    const proto = request.headers.get("x-forwarded-proto") ?? "https";
    return `${proto}://${forwardedHost}`;
  }
  if (process.env.URL) {
    return process.env.URL;
  }
  return SITE_CONFIG.url;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = donationSchema.parse(body);

    const stripe = getStripeClientOrThrow();
    const supabase = getSupabaseAdminClientOrThrow();

    const amountCents = Math.round(parsed.amount * 100);
    const designation = parsed.designation?.trim() || null;
    const donorName = parsed.fullName?.trim() || null;

    const { data: donation, error: insertError } = await supabase
      .from("donations")
      .insert({
        donor_name: donorName,
        donor_email: parsed.email,
        amount_cents: amountCents,
        currency: CURRENCY,
        frequency: parsed.frequency,
        designation,
        provider: "stripe",
        status: "pending",
      })
      .select("id")
      .single();

    if (insertError) {
      throw insertError;
    }

    const isMonthly = parsed.frequency === "monthly";
    const origin = resolveOrigin(request);

    const session = await stripe.checkout.sessions.create({
      mode: isMonthly ? "subscription" : "payment",
      customer_email: parsed.email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            unit_amount: amountCents,
            product_data: {
              name: isMonthly
                ? "Monthly donation to World Impact Initiative"
                : "Donation to World Impact Initiative",
              description: designation
                ? `Designated for: ${designation}`
                : "General support for community-driven programs.",
            },
            ...(isMonthly ? { recurring: { interval: "month" as const } } : {}),
          },
        },
      ],
      metadata: {
        donation_id: donation.id,
        frequency: parsed.frequency,
        designation: designation ?? "",
      },
      success_url: `${origin}/donate?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate?status=cancelled`,
    });

    await supabase
      .from("donations")
      .update({ stripe_session_id: session.id })
      .eq("id", donation.id);

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL.");
    }

    return Response.json({ ok: true, url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to start donation.";
    return Response.json({ ok: false, message }, { status: 400 });
  }
}
