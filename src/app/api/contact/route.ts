import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().optional().or(z.literal("")),
  subject: z.string().min(2),
  message: z.string().min(20),
});

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }

  const data = parsed.data;

  if (isSupabaseConfigured()) {
    try {
      const supabase = await createSupabaseServerClient();
      await supabase.from("contact_messages").insert({
        name: data.name,
        email: data.email,
        organization: data.organization || null,
        subject: data.subject,
        message: data.message,
      });
    } catch {
      // log only
    }
  } else {
    console.info("[contact] message received:", { ...data });
  }

  return NextResponse.json({ ok: true });
}
