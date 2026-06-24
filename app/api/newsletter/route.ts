import { newsletterSchema } from "@/lib/schemas";
import { getSupabaseAdminClientOrThrow } from "@/lib/supabase/admin";
import { sendSubmissionNotification } from "@/lib/email";
import { insertNotificationLog } from "@/lib/form-notifications";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.parse(body);
    const supabase = getSupabaseAdminClientOrThrow();

    const { data: submission, error: upsertError } = await supabase
      .from("newsletter_subscriptions")
      .upsert({ email: parsed.email, source: "website_blog_form" }, { onConflict: "email" })
      .select("id")
      .single();

    if (upsertError) {
      throw upsertError;
    }

    try {
      const providerMessageId = await sendSubmissionNotification({
        formType: "newsletter_subscription",
        subject: "New newsletter subscription",
        replyTo: parsed.email,
        fields: {
          email: parsed.email,
          source: "website_blog_form",
        },
      });

      await insertNotificationLog({
        form_type: "newsletter_subscription",
        submission_table: "newsletter_subscriptions",
        submission_id: submission.id,
        payload: parsed,
        delivery_status: "sent",
        provider_message_id: providerMessageId,
      });
    } catch (emailError) {
      await insertNotificationLog({
        form_type: "newsletter_subscription",
        submission_table: "newsletter_subscriptions",
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
      error instanceof Error ? error.message : "Unable to subscribe to newsletter";
    return Response.json({ ok: false, message }, { status: 400 });
  }
}
