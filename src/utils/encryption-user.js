import CryptoJS from 'crypto-js'

const encryptUser = (userObject) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(userObject),
    'secret key',
  ).toString()
}

const decryptUser = () => {
  const encryptedUser = JSON.parse(localStorage.getItem('user'))
  let decryptedUser = null

  if (encryptedUser) {
    const decrypted = CryptoJS.AES.decrypt(encryptedUser, 'secret key')
    try {
      decryptedUser = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
    } catch (err) {
      console.error('error decrypt user', err)
    }
  }

  return decryptedUser
}

export { encryptUser, decryptUser }
