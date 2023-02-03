// @ts-nocheck
import cookie from 'vue-cookies';

/**
 * Достает куку по ключу
 *
 * @param key Ключ куки
 * @returns Значение куки или null
 */
const getCookie = (key: string): string | null => cookie.get(key);

/**
 * Добавить куку
 *
 * @param key Ключ куки
 * @param value Значение куки
 * @param expire Время жизни куки в секундах
 */

const setCookie = (
  key: string,
  value: string,
  expire: number | null = null,
): void => {
  if (expire) {
    cookie.set(key, value, expire);
  } else {
    cookie.set(key, value);
  }
};

/**
 * Удалить куку
 *
 * @param key Ключ куки
 */
const removeCookie = (key: string): void => {
  cookie.remove(key);
};

/**
 * Проверяет, существует ли кука
 *
 * @param key Ключ куки
 * @returns
 */
const isCookieExist = (key: string): boolean => cookie.isKey(key);

/**
 * Получает куку токена авторизации
 *
 * @returns Возвращает значение куки auth_token или null
 */
const getAuthCookie = (): string | null => getCookie('auth_token');

/**
 * Устанавливает куку токена авторизации
 *
 * @param value Токен авторизации
 * @param expire Время жизни токена в секундах
 */
const setAuthCookie = (value: string, expire: number | null = null): void => {
  if (expire) {
    setCookie('auth_token', value, expire);
  } else {
    setCookie('auth_token', value);
  }
};

/**
 * Удаляет куку токена авторизации
 */
const clearAuthCookie = (): void => {
  removeCookie('auth_token');
};

export {
  clearAuthCookie,
  setAuthCookie,
  getAuthCookie,
  getCookie,
  setCookie,
  removeCookie,
  isCookieExist,
};
