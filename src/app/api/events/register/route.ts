import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.log("[DEV] Event registration:", body);
      return NextResponse.json({ success: true });
    }
    const supabase = await createClient();
    const { error } = await supabase.from("event_registrations").insert({
      event_id: body.event_id,
      full_name: body.full_name,
      email: body.email,
      phone: body.phone || null,
      guests: parseInt(body.guests) || 1,
    });
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Event registration error:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
