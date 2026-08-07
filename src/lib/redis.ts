import Redis from "ioredis";

declare global {
  // eslint-disable-next-line no-var
  var __redis: Redis | undefined;
}

export const redis = global.__redis ?? new Redis(process.env.REDIS_URL as string);
if (process.env.NODE_ENV !== "production") global.__redis = redis;

/** Simple helper for rate-limiting AI credit usage per user, per day. */
export async function checkAndConsumeCredit(userId: string, limit: number) {
  const key = `ai-credits:${userId}:${new Date().toISOString().slice(0, 10)}`;
  const used = await redis.incr(key);
  if (used === 1) await redis.expire(key, 60 * 60 * 24);
  return used <= limit;
}
