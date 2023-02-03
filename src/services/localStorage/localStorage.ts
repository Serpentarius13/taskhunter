/**
 * Проверяет, существует ли ключ в локальном хранилище
 *
 * @param key Ключ локального хранилища
 * @returns true если ключ существует в локальном хранилище, иначе false
 */
const isKeyExistInLocalStorage = (key: string) => localStorage.getItem(key);

/**
 * Удаляет что-то из локального хранилища
 *
 * @param key Ключ локального хранилища
 */
const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

/**
 * Добавляет что-то в локальное хранилище
 *
 * @param key Ключ локального хранилища
 * @param value Значение для ключа
 */
const setToLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, value);
};

/**
 * Достает что-то из локального хранилища
 *
 * @param key Ключ локального хранилища
 * @returns значение из локального хранилища или null
 */
const getFromLocalStorage = (key: string): any | null =>
  localStorage.getItem(key);

export {
  setToLocalStorage,
  removeFromLocalStorage,
  getFromLocalStorage,
  isKeyExistInLocalStorage,
};
