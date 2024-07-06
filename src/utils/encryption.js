import CryptoJS from "crypto-js";

const secretKey = "your-secret-key";

export const encryptMessage = (message) => {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
};

export const decryptMessage = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};