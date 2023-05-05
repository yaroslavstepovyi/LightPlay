import CryptoJS from 'crypto-js'

const encryptGame = (GameObject) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(GameObject),
    process.env.REACT_APP_ENCRYPt_KEY_GAMES,
  ).toString()
}

const decryptGame = (encryptedGames) => {
  try {
    const decrypted = CryptoJS.AES.decrypt(
      encryptedGames,
      process.env.REACT_APP_ENCRYPt_KEY_GAMES,
    ).toString()

    return JSON.parse(decrypted)
  } catch (err) {
    console.error('Error decrypting games', err)
    return null
  }
}

export { encryptGame, decryptGame }
