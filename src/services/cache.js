const ONE_HOUR = 60 * 60 * 1000;

export const CACHE_KEYS = {
  PRODUCTS: "itx:products",
};

export function readCache(key, maxAge = ONE_HOUR) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    const entry = JSON.parse(raw);
    if (!entry?.timestamp || Date.now() - entry.timestamp >= maxAge) {
      localStorage.removeItem(key);
      return null;
    }

    return entry.data;
  } catch {
    return null;
  }
}

export function writeCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data }));
  } catch {
    // No-op.
  }
}

export function clearCache(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // No-op.
  }
}
