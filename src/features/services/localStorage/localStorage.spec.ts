import { describe, expect, it } from 'vitest';
import {
  getFromLocalStorage,
  isKeyExistInLocalStorage,
  setToLocalStorage,
  removeFromLocalStorage,
} from './localStorage';

describe('localStorage', () => {
  const key = 'test';
  it('should be null at the beginning', () => {
    expect(getFromLocalStorage(key)).toBe(null);
  });
  it('should not exist at the beginning', () => {
    expect(isKeyExistInLocalStorage(key)).toBe(false);
  });
  it('should add to local storage', () => {
    setToLocalStorage(key, 'test');
    expect(getFromLocalStorage(key)).toBe('test');
  });
  it('should be removable', () => {
    removeFromLocalStorage(key);
    expect(getFromLocalStorage(key)).toBe(null);
  });
});
