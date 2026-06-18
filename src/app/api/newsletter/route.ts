import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.log("[DEV] Newsletter subscription:", body);
      return NextResponse.json({ success: true });
    }
    const supabase = await createClient();
    const { error } = await supabase.from("newsletter_subscriptions").insert({ email: body.email });
    if (error && error.code !== "23505") throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }
}
