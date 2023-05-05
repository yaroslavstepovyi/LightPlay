import CryptoJS from 'crypto-js'
import { getItemFromLocalStorage } from './localStorageUtils'

const encryptUser = (userObject) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(userObject),
    process.env.REACT_APP_ENCRYPT_KEY_USER,
  ).toString()
}

const decryptUser = () => {
  const encryptedUser = getItemFromLocalStorage('user')

  if (encryptedUser) {
    const decrypted = CryptoJS.AES.decrypt(
      encryptedUser,
      process.env.REACT_APP_ENCRYPT_KEY_USER,
    )
    try {
      return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
    } catch (err) {
      console.error('error decrypt user', err)
    }
  }

  return null
}

export { encryptUser, decryptUser }
