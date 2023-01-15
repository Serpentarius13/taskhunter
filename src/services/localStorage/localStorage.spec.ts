import { describe, expect, it } from "vitest";
import storage from "./localStorage";

describe("localStorage", () => {
  const key = "test";
  it("should be null at the beginning", () => {
    expect(storage.getFromLocalStorage(key)).toBe(null);
  });
  it("should not exist at the beginning", () => {
    expect(storage.isKeyExistInLocalStorage(key)).toBe(false);
  });
  it("should add to local storage", () => {
    storage.setToLocalStorage(key, "test");
    expect(storage.getFromLocalStorage(key)).toBe("test");
  });
  it("should be removable", () => {
    storage.removeFromLocalStorage(key);
    expect(storage.getFromLocalStorage(key)).toBe(null);
  });
});
