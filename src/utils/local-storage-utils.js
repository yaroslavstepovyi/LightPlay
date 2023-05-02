const setItemInLocalStorage = (key, encryptedUser = null) => {
    if (encryptedUser) {
        localStorage.setItem(key, JSON.stringify(encryptedUser))
    } else {
        localStorage.removeItem(key)
    }
}

const removeFromLocalStorage = (key) => localStorage.removeItem(key)

export { setItemInLocalStorage, removeFromLocalStorage}