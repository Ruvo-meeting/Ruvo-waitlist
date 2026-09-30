"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "done" | "error";

export default function WaitlistForm({ variant = "inline" }: { variant?: "inline" | "stacked" }) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company, source: variant }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("done");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className={`flex items-center gap-3 rounded-2xl border border-mint/30 bg-mint/10 px-5 py-4 text-sm font-medium text-ink ${
          variant === "stacked" ? "mx-auto max-w-md justify-center" : "max-w-md"
        }`}
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-mint text-white">✓</span>
        You&apos;re on the list. We&apos;ll email you when your invite is ready.
      </div>
    );
  }

  const stacked = variant === "stacked";

  return (
    <form onSubmit={onSubmit} className={stacked ? "mx-auto w-full max-w-md" : "w-full max-w-md"} noValidate>
      <div
        className={
          stacked
            ? "flex flex-col items-center gap-3"
            : "flex flex-col gap-2 rounded-full sm:flex-row sm:border sm:border-line sm:bg-white sm:p-1.5 sm:shadow-card"
        }
      >
        {/* Honeypot: hidden from real users, bots often fill every field. */}
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        />
        <label htmlFor={`email-${variant}`} className="sr-only">
          Work email
        </label>
        <input
          id={`email-${variant}`}
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? `err-${variant}` : undefined}
          className={
            stacked
              ? "w-full rounded-full border border-line bg-white px-5 py-3.5 text-center text-[15px] outline-none transition placeholder:text-muted/70 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
              : "min-w-0 flex-1 rounded-full border border-line bg-white px-5 py-3.5 text-[15px] outline-none transition placeholder:text-muted/70 focus:border-brand-400 focus:ring-4 focus:ring-brand-100 sm:border-0 sm:py-2.5 sm:focus:ring-0"
          }
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-ruvo rounded-full px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_20px_-6px_rgba(251,33,111,.55)] transition hover:brightness-110 disabled:opacity-60 sm:py-2.5"
        >
          {status === "loading" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      {status === "error" && (
        <p id={`err-${variant}`} className={`mt-2 text-sm text-red-600 ${stacked ? "text-center" : "pl-5"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
