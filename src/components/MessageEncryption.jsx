import CryptoJS from 'crypto-js';

export const encryptMessage = (message, secretKey) => {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
};

export const decryptMessage = (ciphertext, secretKey) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};