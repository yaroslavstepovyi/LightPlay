import CryptoJS from "crypto-js";

//encryption Game
const encryptGame = (GameObject) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(GameObject),
    "secret game key"
  ).toString();
}

//decryption Game
const decryptGame = (encryptedGames) => {
  try {
    const decrypted = CryptoJS
      .AES
      .decrypt(encryptedGames, "secret game key")
      .toString(CryptoJS.enc.Utf8);

    return JSON.parse(decrypted);
  } catch (err) {
    console.error("Error decrypting games", err);
    return null;
  }
}

export {
  encryptGame,
  decryptGame,
}