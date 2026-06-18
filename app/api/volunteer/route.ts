import { volunteerApplicationSchema } from "@/lib/schemas";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = volunteerApplicationSchema.parse(body);
    const supabase = getSupabaseAdminClient();

    if (supabase) {
      const { error } = await supabase.from("volunteer_applications").insert({
        full_name: parsed.fullName,
        email: parsed.email,
        phone: parsed.phone,
        country: parsed.country,
        skills: parsed.skills,
        interests: parsed.interests,
        availability: parsed.availability,
        motivation: parsed.motivation,
      });

      if (error) {
        throw error;
      }
    }

    return Response.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to submit application";
    return Response.json({ ok: false, message }, { status: 400 });
  }
}
