import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  event: z.string().min(2),
  guests: z.coerce.number().int().min(1).max(10).default(1),
  phone: z.string().optional().or(z.literal("")),
  notes: z.string().optional().or(z.literal("")),
});

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") ?? "";
  let payload: Record<string, unknown> = {};
  try {
    if (contentType.includes("application/json")) {
      payload = (await req.json()) as Record<string, unknown>;
    } else {
      const fd = await req.formData();
      payload = Object.fromEntries(fd.entries());
    }
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }

  const data = parsed.data;

  if (isSupabaseConfigured()) {
    try {
      const supabase = await createSupabaseServerClient();
      await supabase.from("event_rsvps").insert({
        name: data.name,
        email: data.email,
        event_slug: data.event,
        guests: data.guests,
        phone: data.phone || null,
        notes: data.notes || null,
      });
    } catch {
      // log only
    }
  } else {
    console.info("[rsvp] received:", data);
  }

  return NextResponse.redirect(new URL("/events?rsvp=ok", req.url), 303);
}
