import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, country, skills, interests, availability, motivation } = body;

    if (!fullName || !email || !country || !availability || !motivation) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, save to Supabase
    // const supabase = createSupabaseAdminClient();
    // await supabase.from("volunteers").insert({
    //   full_name: fullName, email, phone, country, skills, interests, availability, motivation,
    // });

    console.log("Volunteer application:", { fullName, email, country });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Volunteer form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
