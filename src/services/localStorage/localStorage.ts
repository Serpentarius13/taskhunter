class LocalStorage {
  /**
   * Добавляет что-то в локальное хранилище
   *
   * @param key Ключ локального хранилища
   * @param value Значение для ключа
   */
  setToLocalStorage = (key: string, value: any): void => {
    localStorage.setItem(key, value);
  };

  /**
   * Достает что-то из локального хранилища
   *
   * @param key Ключ локального хранилища
   * @returns значение из локального хранилища или null
   */
  getFromLocalStorage = (key: string): any | null => {
    return localStorage.getItem(key);
  };

  /**
   * Удаляет что-то из локального хранилища
   *
   * @param key Ключ локального хранилища
   */
  removeFromLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
  };

  /**
   * Проверяет, существует ли ключ в локальном хранилище
   * 
   * @param key Ключ локального хранилища
   * @returns true если ключ существует в локальном хранилище, иначе false
   */
  isKeyExistInLocalStorage = (key: string) => {
    return localStorage.getItem(key) ? true : false;
  };
}

export default new LocalStorage();