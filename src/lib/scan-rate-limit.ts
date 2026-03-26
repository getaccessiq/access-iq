import { redis } from "@/lib/redis";

export const FREE_SCAN_DAILY_LIMIT = 3;
export const FREE_SCAN_WINDOW_MS = 24 * 60 * 60 * 1000;
const FREE_SCAN_WINDOW_SECONDS = 24 * 60 * 60;

function getKey(ip: string) {
  return `scan_limit:${ip}`;
}

function toSafeNumber(value: unknown, fallback = 0) {
  const num =
    typeof value === "number"
      ? value
      : typeof value === "string"
      ? Number(value)
      : fallback;

  return Number.isFinite(num) ? num : fallback;
}

function buildResetTimeFromTtl(ttlSeconds: unknown) {
  const ttl = toSafeNumber(ttlSeconds, -1);

  if (ttl > 0) {
    return Date.now() + ttl * 1000;
  }

  return Date.now() + FREE_SCAN_WINDOW_MS;
}

export function formatRemainingTime(ms: number) {
  const safeMs = Number.isFinite(ms) ? ms : FREE_SCAN_WINDOW_MS;
  const totalSeconds = Math.max(0, Math.ceil(safeMs / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  if (hours <= 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  if (minutes === 0) {
    return `${hours} hour${hours === 1 ? "" : "s"}`;
  }

  return `${hours}h ${minutes}m`;
}

export async function getRateLimitStatus(ip: string) {
  const key = getKey(ip);

  const usedRaw = await redis.get(key);
  const ttlRaw = await redis.ttl(key);

  const used = toSafeNumber(usedRaw, 0);
  const resetTime = buildResetTimeFromTtl(ttlRaw);

  return {
    allowed: used < FREE_SCAN_DAILY_LIMIT,
    limit: FREE_SCAN_DAILY_LIMIT,
    remaining: Math.max(FREE_SCAN_DAILY_LIMIT - used, 0),
    used,
    resetTime,
  };
}

export async function consumeFreeScan(ip: string) {
  const key = getKey(ip);

  const currentRaw = await redis.get(key);
  const current = toSafeNumber(currentRaw, 0);

  if (current === 0) {
    await redis.set(key, 1, { ex: FREE_SCAN_WINDOW_SECONDS });

    return {
      allowed: true,
      limit: FREE_SCAN_DAILY_LIMIT,
      remaining: FREE_SCAN_DAILY_LIMIT - 1,
      used: 1,
      resetTime: Date.now() + FREE_SCAN_WINDOW_MS,
    };
  }

  const ttlRaw = await redis.ttl(key);
  const ttlSeconds = toSafeNumber(ttlRaw, -1);
  const resetTime = buildResetTimeFromTtl(ttlSeconds);

  if (current >= FREE_SCAN_DAILY_LIMIT) {
    return {
      allowed: false,
      limit: FREE_SCAN_DAILY_LIMIT,
      remaining: 0,
      used: current,
      resetTime,
    };
  }

  const nextValue = current + 1;

  await redis.set(key, nextValue, {
    ex: ttlSeconds > 0 ? ttlSeconds : FREE_SCAN_WINDOW_SECONDS,
  });

  return {
    allowed: true,
    limit: FREE_SCAN_DAILY_LIMIT,
    remaining: FREE_SCAN_DAILY_LIMIT - nextValue,
    used: nextValue,
    resetTime,
  };
}