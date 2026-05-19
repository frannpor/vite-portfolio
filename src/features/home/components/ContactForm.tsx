"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import type { PortfolioContent } from "@/features/home/data/portfolio";
import styles from "@/features/home/home.module.css";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

type ContactFormProps = {
  form: PortfolioContent["contact"]["form"];
};

export function ContactForm({ form: copy }: ContactFormProps) {
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "submitting", message: copy.sending });

    const formElement = event.currentTarget;
    let response: Response;
    let result: { ok: boolean; error?: string; mode?: "sent" | "dry-run" };

    try {
      response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(formElement),
      });
      result = (await response.json()) as { ok: boolean; error?: string; mode?: "sent" | "dry-run" };
    } catch {
      setState({ status: "error", message: copy.genericError });
      return;
    }

    if (!response.ok || !result.ok) {
      setState({ status: "error", message: result.error ?? copy.genericError });
      return;
    }

    formElement.reset();
    setState({
      status: "success",
      message: result.mode === "dry-run" ? copy.dryRunSuccess : copy.success,
    });
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <input className={styles.honeypot} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className={styles.formGroup}>
        <span>{copy.name}</span>
        <input name="name" type="text" autoComplete="name" minLength={2} maxLength={80} placeholder=" " required />
      </label>
      <label className={styles.formGroup}>
        <span>{copy.email}</span>
        <input name="email" type="email" autoComplete="email" maxLength={120} placeholder=" " required />
      </label>
      <label className={styles.formGroup}>
        <span>{copy.company}</span>
        <input name="company" type="text" autoComplete="organization" maxLength={100} placeholder=" " />
      </label>
      <label className={styles.formGroup}>
        <span>{copy.message}</span>
        <textarea name="message" rows={6} minLength={20} maxLength={1600} placeholder=" " required />
      </label>
      <button type="submit" disabled={state.status === "submitting"}>
        <Send size={17} />
        {state.status === "submitting" ? copy.submitting : copy.submit}
      </button>
      <p className={state.status === "error" ? styles.formError : styles.formMessage} aria-live="polite">
        {state.message}
      </p>
    </form>
  );
}
