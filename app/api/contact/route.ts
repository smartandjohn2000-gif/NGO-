import { contactSchema } from "@/lib/schemas";
import { getSupabaseAdminClientOrThrow } from "@/lib/supabase/admin";
import { sendSubmissionNotification } from "@/lib/email";
import { insertNotificationLog } from "@/lib/form-notifications";
import { getDepartmentByKey, getDepartmentRecipientList } from "@/lib/contact-routing";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.parse(body);
    const supabase = getSupabaseAdminClientOrThrow();
    const selectedDepartment = getDepartmentByKey(parsed.inquiryType);
    const recipients = getDepartmentRecipientList(parsed.inquiryType);

    const { data: submission, error: insertError } = await supabase
      .from("contact_messages")
      .insert({
        inquiry_type: parsed.inquiryType,
        full_name: parsed.fullName,
        email: parsed.email,
        subject: parsed.subject,
        message: parsed.message,
        routed_email: selectedDepartment.email,
      })
      .select("id")
      .single();

    if (insertError) {
      throw insertError;
    }

    try {
      const providerMessageId = await sendSubmissionNotification({
        formType: "contact_message",
        subject: `[${selectedDepartment.title}] New contact form submission: ${parsed.subject}`,
        replyTo: parsed.email,
        recipients,
        fields: {
          inquiry_type: selectedDepartment.title,
          routed_email: selectedDepartment.email,
          full_name: parsed.fullName,
          email: parsed.email,
          subject: parsed.subject,
          message: parsed.message,
        },
      });

      await insertNotificationLog({
        form_type: "contact_message",
        submission_table: "contact_messages",
        submission_id: submission.id,
        payload: parsed,
        delivery_status: "sent",
        provider_message_id: providerMessageId,
      });
    } catch (emailError) {
      await insertNotificationLog({
        form_type: "contact_message",
        submission_table: "contact_messages",
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
    const message = error instanceof Error ? error.message : "Unable to send message";
    return Response.json({ ok: false, message }, { status: 400 });
  }
}
