import type { Metadata } from "next";
import { requireAuth } from "@/lib/auth";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { ProfileForm } from "@/components/forms/profile-form";

export const metadata: Metadata = {
  title: "Membership Profile",
  description: "Manage your membership profile details and update personal information.",
  alternates: { canonical: "/membership/profile" },
};

export default async function MembershipProfilePage() {
  const profile = await requireAuth();

  let profileData = {
    full_name: profile.full_name ?? "",
    country: "",
    profession: "",
    bio: "",
  };

  try {
    const supabase = await getSupabaseServerClient();
    const { data } = await supabase
      .from("profiles")
      .select("full_name, country, profession, bio")
      .eq("id", profile.id)
      .single();

    if (data) {
      profileData = {
        full_name: data.full_name ?? "",
        country: data.country ?? "",
        profession: data.profession ?? "",
        bio: data.bio ?? "",
      };
    }
  } catch {
    // Graceful fallback keeps page functional without env config.
  }

  return (
    <section className="container-shell py-14 md:py-20">
      <div className="mx-auto max-w-2xl">
        <ProfileForm userId={profile.id} defaultValues={profileData} />
      </div>
    </section>
  );
}
