import { volunteerApplicationSchema } from "@/lib/schemas";
import { getSupabaseAdminClientOrThrow } from "@/lib/supabase/admin";
import { sendSubmissionNotification } from "@/lib/email";
import { insertNotificationLog } from "@/lib/form-notifications";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = volunteerApplicationSchema.parse(body);
    const supabase = getSupabaseAdminClientOrThrow();

    const { data: submission, error: insertError } = await supabase
      .from("volunteer_applications")
      .insert({
        full_name: parsed.fullName,
        email: parsed.email,
        phone: parsed.phone,
        country: parsed.country,
        skills: parsed.skills,
        interests: parsed.interests,
        availability: parsed.availability,
        motivation: parsed.motivation,
      })
      .select("id")
      .single();

    if (insertError) {
      throw insertError;
    }

    try {
      const providerMessageId = await sendSubmissionNotification({
        formType: "volunteer_application",
        subject: "New volunteer application submission",
        replyTo: parsed.email,
        fields: {
          full_name: parsed.fullName,
          email: parsed.email,
          phone: parsed.phone,
          country: parsed.country,
          skills: parsed.skills,
          interests: parsed.interests,
          availability: parsed.availability,
          motivation: parsed.motivation,
        },
      });

      await insertNotificationLog({
        form_type: "volunteer_application",
        submission_table: "volunteer_applications",
        submission_id: submission.id,
        payload: parsed,
        delivery_status: "sent",
        provider_message_id: providerMessageId,
      });
    } catch (emailError) {
      await insertNotificationLog({
        form_type: "volunteer_application",
        submission_table: "volunteer_applications",
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
      error instanceof Error ? error.message : "Unable to submit application";
    return Response.json({ ok: false, message }, { status: 400 });
  }
}
