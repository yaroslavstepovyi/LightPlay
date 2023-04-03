import CryptoJS from "crypto-js";

//encryption logged in user
const encryptUser = (userObject) => {
    return CryptoJS.AES.encrypt(
        JSON.stringify(userObject),
        "secret key"
    ).toString();
}

//decryption logged in user
function decryptUser() {
  const encryptedUser = JSON.parse(localStorage.getItem("user"));
  let decryptedUser = null;

  if (encryptedUser) {
    const decrypted = CryptoJS.AES.decrypt(encryptedUser, "secret key");
    try {
      decryptedUser = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    } catch (e) {
      console.error("Error parsing decrypted user object", e);
    }
  }
  
  return decryptedUser;
}

export {
    encryptUser,
    decryptUser
}