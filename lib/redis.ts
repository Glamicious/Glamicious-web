/**
 * Minimal Upstash Redis REST client (no SDK dependency).
 * Reads UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN — the env vars the
 * Vercel Marketplace Upstash integration sets automatically.
 */

export function redisConfigured(): boolean {
  return !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

export async function redis<T = unknown>(command: (string | number)[]): Promise<T> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) throw new Error("Redis is not configured");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Redis request failed: ${res.status}`);
  }
  const data = (await res.json()) as { result?: T; error?: string };
  if (data.error) throw new Error(`Redis error: ${data.error}`);
  return data.result as T;
}
