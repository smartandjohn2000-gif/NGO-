import { memberRegistrationSchema } from "@/lib/schemas";
import { getSupabaseAdminClientOrThrow } from "@/lib/supabase/admin";
import { sendSubmissionNotification } from "@/lib/email";
import { insertNotificationLog } from "@/lib/form-notifications";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = memberRegistrationSchema.parse(body);
    const supabase = getSupabaseAdminClientOrThrow();

    const { data: submission, error: insertError } = await supabase
      .from("member_registrations")
      .insert({
        full_name: parsed.fullName,
        email: parsed.email,
      })
      .select("id")
      .single();

    if (insertError) {
      throw insertError;
    }

    try {
      const providerMessageId = await sendSubmissionNotification({
        formType: "member_registration",
        subject: "New membership registration",
        replyTo: parsed.email,
        fields: {
          full_name: parsed.fullName,
          email: parsed.email,
        },
      });

      await insertNotificationLog({
        form_type: "member_registration",
        submission_table: "member_registrations",
        submission_id: submission.id,
        payload: parsed,
        delivery_status: "sent",
        provider_message_id: providerMessageId,
      });
    } catch (emailError) {
      await insertNotificationLog({
        form_type: "member_registration",
        submission_table: "member_registrations",
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
    const message =
      error instanceof Error ? error.message : "Unable to process registration notification";
    return Response.json({ ok: false, message }, { status: 400 });
  }
}
