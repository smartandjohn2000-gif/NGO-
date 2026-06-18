import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export const runtime = "nodejs";

const schema = z.object({
  full_name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().or(z.literal("")),
  country: z.string().min(2),
  skills: z.string().optional().or(z.literal("")),
  interests: z.array(z.string()).optional().default([]),
  availability: z.string().min(2),
  motivation: z.string().min(20),
  consent: z.union([z.literal("on"), z.boolean()]).optional(),
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
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;

  if (isSupabaseConfigured()) {
    try {
      const supabase = await createSupabaseServerClient();
      const { error } = await supabase.from("volunteer_submissions").insert({
        full_name: data.full_name,
        email: data.email,
        phone: data.phone || null,
        country: data.country,
        skills: data.skills || null,
        interests: data.interests,
        availability: data.availability,
        motivation: data.motivation,
        consent: Boolean(data.consent),
        status: "pending",
      });
      if (error) {
        return NextResponse.json(
          { error: "Failed to save submission" },
          { status: 500 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Failed to save submission" },
        { status: 500 }
      );
    }
  } else {
    console.info("[volunteer] (no DB configured) submission:", {
      ...data,
      motivation: data.motivation.slice(0, 80) + "…",
    });
  }

  return NextResponse.json({ ok: true });
}
