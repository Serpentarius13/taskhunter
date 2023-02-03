import { describe, it, expect, beforeEach } from 'vitest';
import { clearAuthCookie, getAuthCookie, setAuthCookie } from './cookies';

describe('cookies', () => {
  beforeEach(() => {
    clearAuthCookie();
  });
  it('should be null at the beginning', () => {
    expect(getAuthCookie()).toBe(null);
  });
  it('should change value with setAuth', () => {
    expect(getAuthCookie()).toBe(null);
    setAuthCookie('test');

    expect(getAuthCookie()).toBe('test');
  });
  it('should clear itself with clearAuth', () => {
    expect(getAuthCookie()).toBe(null);
    setAuthCookie('test');
    clearAuthCookie();
    expect(getAuthCookie()).toBe(null);
  });
});
