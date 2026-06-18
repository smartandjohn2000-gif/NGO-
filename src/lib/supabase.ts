import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function getSupabaseAdmin() {
  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export async function insertRecord(table: string, payload: Record<string, unknown>) {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return {
      ok: true,
      offline: true,
      message:
        "Supabase environment variables are not configured yet. The form is wired and ready for production."
    };
  }

  const { error } = await supabase.from(table).insert(payload);

  if (error) {
    return { ok: false, offline: false, message: error.message };
  }

  return { ok: true, offline: false, message: "Submission received." };
}
