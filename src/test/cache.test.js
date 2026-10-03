import { describe, expect, it, vi } from "vitest";
import { readCache, writeCache } from "@/services/cache";

describe("cache", () => {
  it("stores and reads data before one hour", () => {
    writeCache("test", { products: [1, 2] });
    expect(readCache("test")).toEqual({ products: [1, 2] });
  });

  it("invalidates expired data", () => {
    vi.spyOn(Date, "now").mockReturnValue(1_000_000);
    writeCache("test", { products: [1] });
    vi.spyOn(Date, "now").mockReturnValue(1_000_000 + 60 * 60 * 1000);

    expect(readCache("test")).toBeNull();
    vi.restoreAllMocks();
  });
});
