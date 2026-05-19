const hits = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();

  for (const [hitKey, hit] of hits) {
    if (hit.resetAt <= now) {
      hits.delete(hitKey);
    }
  }

  const current = hits.get(key);

  if (!current || current.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  hits.set(key, current);

  return current.count > limit;
}
