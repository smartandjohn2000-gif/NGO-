import { contactSchema } from "@/lib/schemas";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.parse(body);
    const supabase = getSupabaseAdminClient();

    if (supabase) {
      const { error } = await supabase.from("contact_messages").insert({
        full_name: parsed.fullName,
        email: parsed.email,
        subject: parsed.subject,
        message: parsed.message,
      });

      if (error) {
        throw error;
      }
    }

    return Response.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to send message";
    return Response.json({ ok: false, message }, { status: 400 });
  }
}
