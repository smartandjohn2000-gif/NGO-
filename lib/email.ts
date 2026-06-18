import { Resend } from "resend";
import { SITE_CONFIG } from "@/lib/constants";

type NotificationPayload = {
  formType:
    | "volunteer_application"
    | "contact_message"
    | "event_rsvp"
    | "newsletter_subscription"
    | "member_registration";
  subject: string;
  replyTo?: string;
  fields: Record<string, string | number | null | undefined>;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildFieldsTable(fields: NotificationPayload["fields"]) {
  return Object.entries(fields)
    .map(([key, value]) => {
      const safeKey = escapeHtml(key);
      const safeValue = escapeHtml(value === null || value === undefined ? "—" : String(value));
      return `<tr><td style="padding:8px 10px;font-weight:600;border:1px solid #e2e8f0;">${safeKey}</td><td style="padding:8px 10px;border:1px solid #e2e8f0;">${safeValue}</td></tr>`;
    })
    .join("");
}

export async function sendSubmissionNotification(payload: NotificationPayload) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.NOTIFICATION_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    throw new Error(
      "Missing email configuration. Set RESEND_API_KEY and NOTIFICATION_FROM_EMAIL.",
    );
  }

  const resend = new Resend(resendApiKey);
  const submittedAt = new Date().toISOString();

  const html = `
    <div style="font-family:Arial,sans-serif;color:#1e293b;">
      <h2 style="color:#0F4C81;margin-bottom:8px;">New ${escapeHtml(payload.formType)} submission</h2>
      <p style="margin:0 0 14px 0;">A new form submission was received on ${escapeHtml(
        SITE_CONFIG.domain,
      )}.</p>
      <table style="border-collapse:collapse;width:100%;max-width:680px;">
        <tbody>
          ${buildFieldsTable(payload.fields)}
          <tr>
            <td style="padding:8px 10px;font-weight:600;border:1px solid #e2e8f0;">submitted_at</td>
            <td style="padding:8px 10px;border:1px solid #e2e8f0;">${escapeHtml(submittedAt)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [SITE_CONFIG.email],
    subject: payload.subject,
    html,
    replyTo: payload.replyTo,
  });

  if (error) {
    throw new Error(error.message || "Email notification failed.");
  }

  return data?.id ?? null;
}
