export function getFromLocalStorage(key, defaultValue = []) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
}

export function setInLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
