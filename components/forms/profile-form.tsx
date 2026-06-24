"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileUpdateSchema } from "@/lib/schemas";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type ProfileFormValues = {
  full_name: string;
  country: string;
  profession: string;
  bio: string;
};

type ProfileFormProps = {
  userId: string;
  defaultValues: ProfileFormValues;
};

const inputClass =
  "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/20";

export function ProfileForm({ userId, defaultValues }: ProfileFormProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues,
  });

  const onSubmit = (values: ProfileFormValues) => {
    startTransition(async () => {
      try {
        const supabase = getSupabaseBrowserClient();
        const { error } = await supabase
          .from("profiles")
          .update(values)
          .eq("id", userId);

        if (error) throw error;
        setMessage("Profile updated successfully.");
      } catch (error) {
        setMessage(error instanceof Error ? error.message : "Update failed.");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold text-[#0F4C81]">Profile management</h2>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="profile-name">
          Full Name
        </label>
        <input id="profile-name" {...register("full_name")} className={inputClass} />
        {errors.full_name ? <p className="mt-1 text-xs text-red-600">{errors.full_name.message}</p> : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="profile-country">
          Country
        </label>
        <input id="profile-country" {...register("country")} className={inputClass} />
        {errors.country ? <p className="mt-1 text-xs text-red-600">{errors.country.message}</p> : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="profile-profession">
          Profession
        </label>
        <input id="profile-profession" {...register("profession")} className={inputClass} />
        {errors.profession ? <p className="mt-1 text-xs text-red-600">{errors.profession.message}</p> : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="profile-bio">
          Bio
        </label>
        <textarea id="profile-bio" rows={5} {...register("bio")} className={inputClass} />
        {errors.bio ? <p className="mt-1 text-xs text-red-600">{errors.bio.message}</p> : null}
      </div>
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-[#0F4C81] px-5 py-2.5 text-sm font-semibold text-white"
      >
        {pending ? "Saving..." : "Save Profile"}
      </button>
      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </form>
  );
}
