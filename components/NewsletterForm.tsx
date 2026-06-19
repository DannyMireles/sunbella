"use client";

import { FormEvent, useState } from "react";

type NewsletterFormProps = {
  accent?: "purple" | "orange";
};

export function NewsletterForm({ accent = "purple" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to subscribe.");
      }
      setEmail("");
      setStatus("success");
      setMessage("Thank you.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to subscribe.");
    }
  }

  return (
    <form className={`newsletter-form accent-${accent}`} onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor={`newsletter-email-${accent}`}>
        Enter your email
      </label>
      <input
        id={`newsletter-email-${accent}`}
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting" : "Submit"}
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
