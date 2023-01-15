import { describe, it, expect } from "vitest";
import { getAuth, clearAuth, setAuth } from "./cookies";

describe("cookies", () => {
  it("should be null at the beginning", () => {
    expect(getAuth()).toBe(null);
  });
  it("should change value with setAuth", () => {
    setAuth("test");
    expect(getAuth()).toBe("test");
  });
  it("should clear itself with clearAuth", () => {
    setAuth("test");
    clearAuth();
    expect(getAuth()).toBe(null);
  });
});
