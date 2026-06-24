import { eventRsvpSchema } from "@/lib/schemas";
import { getSupabaseAdminClientOrThrow } from "@/lib/supabase/admin";
import { sendSubmissionNotification } from "@/lib/email";
import { insertNotificationLog } from "@/lib/form-notifications";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = eventRsvpSchema.parse(body);
    const supabase = getSupabaseAdminClientOrThrow();

    const { data: submission, error: insertError } = await supabase
      .from("event_rsvps")
      .insert({
        event_id: parsed.eventId,
        full_name: parsed.fullName,
        email: parsed.email,
        attendees: parsed.attendees,
        notes: parsed.notes ?? null,
      })
      .select("id")
      .single();

    if (insertError) {
      throw insertError;
    }

    try {
      const providerMessageId = await sendSubmissionNotification({
        formType: "event_rsvp",
        subject: `New event RSVP submission (${parsed.eventId})`,
        replyTo: parsed.email,
        fields: {
          event_id: parsed.eventId,
          full_name: parsed.fullName,
          email: parsed.email,
          attendees: parsed.attendees,
          notes: parsed.notes ?? "",
        },
      });

      await insertNotificationLog({
        form_type: "event_rsvp",
        submission_table: "event_rsvps",
        submission_id: submission.id,
        payload: parsed,
        delivery_status: "sent",
        provider_message_id: providerMessageId,
      });
    } catch (emailError) {
      await insertNotificationLog({
        form_type: "event_rsvp",
        submission_table: "event_rsvps",
        submission_id: submission.id,
        payload: parsed,
        delivery_status: "failed",
        error_message:
          emailError instanceof Error ? emailError.message : "Notification failed",
      });
      throw emailError;
    }

    return Response.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to RSVP";
    return Response.json({ ok: false, message }, { status: 400 });
  }
}
