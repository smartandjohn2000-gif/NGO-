"use server";

import { insertRecord } from "@/lib/supabase";

type ActionState = {
  ok: boolean;
  message: string;
};

function value(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

async function submitTo(table: string, formData: FormData, fields: string[]): Promise<ActionState> {
  const payload = fields.reduce<Record<string, string>>((acc, field) => {
    acc[field] = value(formData, field);
    return acc;
  }, {});

  const result = await insertRecord(table, payload);
  return {
    ok: result.ok,
    message: result.offline
      ? "Saved in demo mode. Add Supabase credentials to persist submissions."
      : result.message
  };
}

export async function submitContact(_: ActionState, formData: FormData) {
  return submitTo("contact_messages", formData, ["name", "email", "subject", "message"]);
}

export async function submitVolunteer(_: ActionState, formData: FormData) {
  return submitTo("volunteer_applications", formData, [
    "full_name",
    "email",
    "phone",
    "country",
    "skills",
    "interests",
    "availability",
    "motivation"
  ]);
}

export async function submitNewsletter(_: ActionState, formData: FormData) {
  return submitTo("newsletter_subscribers", formData, ["email"]);
}

export async function submitEventRsvp(_: ActionState, formData: FormData) {
  return submitTo("event_rsvps", formData, ["event_title", "full_name", "email", "phone"]);
}

export async function submitMemberProfile(_: ActionState, formData: FormData) {
  return submitTo("member_profiles", formData, ["full_name", "email", "country", "skills", "bio"]);
}

export async function submitBeneficiaryRecord(_: ActionState, formData: FormData) {
  return submitTo("beneficiary_records", formData, [
    "reference_code",
    "full_name",
    "program",
    "country",
    "case_status",
    "case_notes"
  ]);
}
