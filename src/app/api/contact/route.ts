import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.log("[DEV] Contact submission:", body);
      return NextResponse.json({ success: true });
    }
    const supabase = await createClient();
    const { error } = await supabase.from("contact_submissions").insert({
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
    });
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
