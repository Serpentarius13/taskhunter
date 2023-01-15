//@ts-nocheck
import cookie from "vue-cookies";

class Cookies {
  /**
   * Достает куку по ключу
   *
   * @param key Ключ куки
   * @returns Значение куки или null
   */
  getCookie(key: string): string | null {
    return cookie.get(key);
  }
  /**
   * Добавить куку
   *
   * @param key Ключ куки
   * @param value Значение куки
   * @param expire Время жизни куки в секундах
   */
  setCookie(key: string, value: string, expire: number | null = null): void {
    if (expire) {
      cookie.set(key, value, expire);
    } else {
      cookie.set(key, value);
    }
  }

  /**
   * Удалить куку
   *
   * @param key Ключ куки
   */
  removeCookie(key: string): void {
    cookie.remove(key);
  }

  /**
   * Проверяет, существует ли кука
   *
   * @param key Ключ куки
   * @returns
   */
  isCookieExist(key: string): boolean {
    return cookie.isKey(key);
  }

  /**
   * Получает куку токена авторизации
   *
   * @returns Возвращает значение куки auth_token или null
   */
  getAuthCookie(): string | null {
    return this.getCookie("auth_token");
  }

  /**
   * Устанавливает куку токена авторизации
   *
   * @param value Токен авторизации
   * @param expire Время жизни токена в секундах
   */
  setAuthCookie(value: string, expire: number | null = null): void {
    if (expire) {
      this.setCookie("auth_token", value, expire);
    } else {
      this.setCookie("auth_token", value);
    }
  }
  /**
   * Удаляет куку токена авторизации
   */
  clearAuthCookie(): void {
    this.removeCookie("auth_token");
  }
}

const cookies = new Cookies();

export default cookies;

/**
 * Получает куку токена авторизации
 *
 * @returns Возвращает значение куки auth_token
 */
export const getAuth = () => cookies.getAuthCookie();
/**
 * Устанавливает куку токена авторизации
 *
 * @param value Токен авторизации
 * @param expire Время жизни токена в секундах
 */
export const setAuth = (value: string, expire: number | null = null) =>
  cookies.setAuthCookie(value, expire);
/**
 * Удаляет куку токена авторизации
 */
export const clearAuth = () => cookies.clearAuthCookie();
