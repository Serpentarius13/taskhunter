import { describe, it, expect, beforeEach } from "vitest";
import { getAuth, clearAuth, setAuth } from "./cookies";

describe("cookies", () => {
  beforeEach(() => {
    clearAuth();
  });
  it("should be null at the beginning", () => {
    expect(getAuth()).toBe(null);
  });
  it("should change value with setAuth", () => {
    expect(getAuth()).toBe(null);
    setAuth("test");

    expect(getAuth()).toBe("test");
  });
  it("should clear itself with clearAuth", () => {
    expect(getAuth()).toBe(null);
    setAuth("test");
    clearAuth();
    expect(getAuth()).toBe(null);
  });
});
