import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

async function trySupabaseInsert(table: string, data: Record<string, unknown>) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.log(`[DEV] ${table} submission:`, data);
    return { success: true, dev: true };
  }
  const supabase = await createClient();
  const { error } = await supabase.from(table).insert(data);
  if (error) throw error;
  return { success: true };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await trySupabaseInsert("volunteer_submissions", {
      full_name: body.full_name,
      email: body.email,
      phone: body.phone,
      country: body.country,
      skills: body.skills || null,
      interests: body.interests || null,
      availability: body.availability || null,
      motivation: body.motivation,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Volunteer submission error:", error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
