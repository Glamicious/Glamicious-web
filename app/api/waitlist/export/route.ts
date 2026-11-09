import { NextResponse } from "next/server";
import { redis, redisConfigured } from "@/lib/redis";

export const dynamic = "force-dynamic";

const WAITLIST_KEY = "waitlist";

function csvField(value: string): string {
  return /[",\n\r]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
}

export async function GET(request: Request) {
  const expected = process.env.WAITLIST_EXPORT_KEY;
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "WAITLIST_EXPORT_KEY is not configured" },
      { status: 503 },
    );
  }
  const url = new URL(request.url);
  const provided = url.searchParams.get("key") ?? request.headers.get("x-export-key") ?? "";
  if (provided !== expected) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  if (!redisConfigured()) {
    return NextResponse.json({ ok: false, error: "redis_not_configured" }, { status: 503 });
  }

  let flat: string[];
  try {
    flat = await redis<string[]>(["HGETALL", WAITLIST_KEY]);
  } catch {
    return NextResponse.json({ ok: false, error: "storage_failed" }, { status: 502 });
  }

  const rows: string[] = ["email,locale,source,signed_up_at"];
  for (let i = 0; i + 1 < flat.length; i += 2) {
    const email = flat[i];
    let locale = "";
    let source = "";
    let signedUpAt = "";
    try {
      const meta = JSON.parse(flat[i + 1]) as {
        locale?: string;
        source?: string;
        signed_up_at?: string;
      };
      locale = meta.locale ?? "";
      source = meta.source ?? "";
      signedUpAt = meta.signed_up_at ?? "";
    } catch {
      // value was not JSON; export the email alone
    }
    rows.push([email, locale, source, signedUpAt].map(csvField).join(","));
  }

  return new NextResponse(rows.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="waitlist.csv"',
      "Cache-Control": "no-store",
    },
  });
}
