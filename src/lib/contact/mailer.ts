import type { ContactPayload } from "@/lib/contact/types";

type SendContactResult =
  | {
      ok: true;
      mode: "sent" | "dry-run";
    }
  | {
      ok: false;
      error: string;
    };

export async function sendContactEmail(payload: ContactPayload): Promise<SendContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return { ok: true, mode: "dry-run" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `Portfolio contact - ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Company: ${payload.company || "-"}`,
        "",
        payload.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return { ok: false, error: "Email provider rejected the message." };
  }

  return { ok: true, mode: "sent" };
}
