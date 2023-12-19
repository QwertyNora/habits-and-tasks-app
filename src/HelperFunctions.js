import React from "react";

const HelperFunctions = () => {
  function getFromLocalStorage(key, defaultValue = null) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  }

  function setInLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  return getFromLocalStorage || setInLocalStorage;
};

export default HelperFunctions;
