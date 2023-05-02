import CryptoJS from 'crypto-js'

const encryptGame = (GameObject) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(GameObject),
    'secret game key',
  ).toString()
}

const decryptGame = (encryptedGames) => {
  try {
    const decrypted = CryptoJS.AES.decrypt(
      encryptedGames,
      'secret game key',
    ).toString()

    return JSON.parse(decrypted)
  } catch (err) {
    console.error('Error decrypting games', err)
    return null
  }
}

export { encryptGame, decryptGame }
