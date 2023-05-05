const updateItemInLocalStorage = (key, encryptedUser = null) => {
  if (encryptedUser) {
    localStorage.setItem(key, JSON.stringify(encryptedUser))
  } else {
    localStorage.removeItem(key)
  }
}

const setItemLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getItemFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key))

const removeFromLocalStorage = (key) => localStorage.removeItem(key)

export {
  updateItemInLocalStorage,
  removeFromLocalStorage,
  getItemFromLocalStorage,
  setItemLocalStorage,
}
