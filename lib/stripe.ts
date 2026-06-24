import Stripe from "stripe";

/**
 * Returns a configured Stripe client, or null when the secret key is not set.
 * The secret key is read from the STRIPE_SECRET_KEY environment variable and is
 * never hardcoded. Card processing is handled entirely by Stripe's hosted
 * Checkout, so no card data ever touches this site.
 */
export function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return null;
  }
  return new Stripe(secretKey);
}

export function getStripeClientOrThrow() {
  const client = getStripeClient();
  if (!client) {
    throw new Error(
      "Stripe is not configured. Set STRIPE_SECRET_KEY in the environment.",
    );
  }
  return client;
}
