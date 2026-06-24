import { redirect } from "next/navigation";
import type { UserRole } from "@/types/database";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export type CurrentUserProfile = {
  id: string;
  email: string;
  role: UserRole;
  full_name: string | null;
};

export async function getCurrentUserProfile(): Promise<CurrentUserProfile | null> {
  try {
    const supabase = await getSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return null;
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("id, email, role, full_name")
      .eq("id", user.id)
      .single();

    if (!profile) {
      return {
        id: user.id,
        email: user.email ?? "",
        role: "member",
        full_name: null,
      };
    }

    return profile;
  } catch {
    return null;
  }
}

export async function requireAuth() {
  const profile = await getCurrentUserProfile();
  if (!profile) {
    redirect("/membership/login");
  }
  return profile;
}

export async function requireRole(allowedRoles: UserRole[]) {
  const profile = await requireAuth();
  if (!allowedRoles.includes(profile.role)) {
    redirect("/membership/dashboard?error=insufficient_role");
  }
  return profile;
}

export const ADMIN_ALLOWED_ROLES: UserRole[] = [
  "super_admin",
  "program_manager",
  "content_editor",
  "volunteer_coordinator",
];
