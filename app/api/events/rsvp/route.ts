import { eventRsvpSchema } from "@/lib/schemas";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = eventRsvpSchema.parse(body);
    const supabase = getSupabaseAdminClient();

    if (supabase) {
      const { error } = await supabase.from("event_rsvps").insert({
        event_id: parsed.eventId,
        full_name: parsed.fullName,
        email: parsed.email,
        attendees: parsed.attendees,
        notes: parsed.notes ?? null,
      });
      if (error) {
        throw error;
      }
    }

    return Response.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to RSVP";
    return Response.json({ ok: false, message }, { status: 400 });
  }
}
