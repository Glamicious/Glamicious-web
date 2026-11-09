import { NextResponse } from "next/server";
import { redis, redisConfigured } from "@/lib/redis";

export const dynamic = "force-dynamic";

const WAITLIST_KEY = "waitlist";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: unknown; locale?: unknown; source?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }
  const locale = body.locale === "my" ? "my" : "en";
  const source = typeof body.source === "string" ? body.source.slice(0, 40) : "";

  if (!redisConfigured()) {
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const entry = JSON.stringify({
      locale,
      source,
      signed_up_at: new Date().toISOString(),
    });
    const added = await redis<number>(["HSETNX", WAITLIST_KEY, email, entry]);
    return NextResponse.json({ ok: true, stored: true, new: added === 1 });
  } catch {
    return NextResponse.json({ ok: false, error: "storage_failed" }, { status: 502 });
  }
}
