import type { ContactPayload, ContactValidationResult } from "@/lib/contact/types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactForm(formData: FormData): ContactValidationResult {
  const payload: ContactPayload = {
    name: clean(formData.get("name")),
    email: clean(formData.get("email")),
    company: clean(formData.get("company")),
    message: clean(formData.get("message")),
    website: clean(formData.get("website")),
  };

  if (payload.website) {
    return { ok: false, error: "Invalid submission." };
  }

  if (payload.name.length < 2 || payload.name.length > 80) {
    return { ok: false, error: "Name must be between 2 and 80 characters." };
  }

  if (!emailPattern.test(payload.email) || payload.email.length > 120) {
    return { ok: false, error: "Enter a valid email address." };
  }

  if (payload.company && payload.company.length > 100) {
    return { ok: false, error: "Company name is too long." };
  }

  if (payload.message.length < 20 || payload.message.length > 1600) {
    return { ok: false, error: "Message must be between 20 and 1600 characters." };
  }

  return { ok: true, data: payload };
}
