import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { waitlistSignups } from "@/lib/db/schema";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  let email = "";
  let source = "unknown";
  try {
    const body = await req.json();
    // Honeypot: real users never fill this hidden field. Bots that do get a
    // fake success so they don't learn to avoid the field next time.
    if (String(body?.company ?? "").trim() !== "") {
      return NextResponse.json({ ok: true });
    }
    email = String(body?.email ?? "").trim().toLowerCase();
    source = String(body?.source ?? "unknown").trim() || "unknown";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // No database configured: accept and log (useful for local dev).
  if (!db) {
    console.log(`[waitlist] new signup: ${email} (source: ${source})`);
    return NextResponse.json({ ok: true });
  }

  try {
    await db
      .insert(waitlistSignups)
      .values({ email, source })
      .onConflictDoNothing({ target: waitlistSignups.email });
  } catch (err) {
    console.error("[waitlist] database error", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
