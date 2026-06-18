import type { Database } from "@/types/database";
import { getSupabaseAdminClientOrThrow } from "@/lib/supabase/admin";

type NotificationLogInput = {
  form_type: Database["public"]["Tables"]["form_notification_logs"]["Insert"]["form_type"];
  submission_table: string;
  submission_id: string | null;
  payload: Record<string, unknown>;
  delivery_status: "sent" | "failed";
  provider_message_id?: string | null;
  error_message?: string | null;
};

export async function insertNotificationLog(input: NotificationLogInput) {
  const supabase = getSupabaseAdminClientOrThrow();
  const { error } = await supabase.from("form_notification_logs").insert({
    form_type: input.form_type,
    submission_table: input.submission_table,
    submission_id: input.submission_id,
    payload: input.payload,
    delivery_status: input.delivery_status,
    provider_message_id: input.provider_message_id ?? null,
    error_message: input.error_message ?? null,
  });

  if (error) {
    throw new Error(error.message);
  }
}
