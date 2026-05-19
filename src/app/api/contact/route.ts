import { NextResponse, type NextRequest } from "next/server";
import { isRateLimited } from "@/lib/contact/rate-limit";
import { sendContactEmail } from "@/lib/contact/mailer";
import { validateContactForm } from "@/lib/contact/validation";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many messages. Try again in a minute." }, { status: 429 });
  }

  const formData = await request.formData();
  const validation = validateContactForm(formData);

  if (!validation.ok) {
    return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
  }

  const sent = await sendContactEmail(validation.data);

  if (!sent.ok) {
    return NextResponse.json({ ok: false, error: sent.error }, { status: 502 });
  }

  return NextResponse.json({ ok: true, mode: sent.mode });
}
