import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export const runtime = "nodejs";

const schema = z.object({ email: z.string().email() });

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") ?? "";
  let payload: { email?: string } = {};
  try {
    if (contentType.includes("application/json")) {
      payload = (await req.json()) as { email?: string };
    } else {
      const fd = await req.formData();
      payload = { email: String(fd.get("email") ?? "") };
    }
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.redirect(new URL("/?subscribed=error", req.url), 303);
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = await createSupabaseServerClient();
      await supabase.from("newsletter_subscribers").upsert(
        { email: parsed.data.email },
        { onConflict: "email" }
      );
    } catch {
      // log only
    }
  } else {
    console.info("[newsletter] subscribed:", parsed.data.email);
  }

  if (contentType.includes("application/json")) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.redirect(new URL("/?subscribed=ok", req.url), 303);
}
