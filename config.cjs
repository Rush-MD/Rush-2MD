// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"uMjH6RXrDiCKd4rXeY6mMPVeSgHjZZdjJCDKYpkPyV8="},"public":{"type":"Buffer","data":"pZYNlcoHbx8z3IZySW9d3lGXqPPwvemcruyRrtprlCQ="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"kBivPE4tzXNRnfJAUbJawnYtL5IKtuMKiKw3fsDiwkU="},"public":{"type":"Buffer","data":"YtelBW2hFMdhUORBlzYaEBrq7UZ96VX7CriTqHehr3o="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"ON9UojwyD2MDb86mSchRMNwUJjM4WTXFHK24twX0s3U="},"public":{"type":"Buffer","data":"MDQXzV5kvt02XU56Y+X0ILkrxGlNmU/B5kBxE7XrLV4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"iMSrR8eqh7ARGBxt9qxrkrZjDnzb2Avd7mT3tpROin8="},"public":{"type":"Buffer","data":"qfIWuFxeHIJ2hi675DT5TfF2cKFac1YDRaivLmAQpDc="}},"signature":{"type":"Buffer","data":"OED4L5/c+OcDJGRcdmkKYg+S6Jhm8wLlZdxwwTHAkRAuvIWL27hMriR1n7Be1HJPvu/QcYLyXC5hQJH185gFhg=="},"keyId":1},"registrationId":214,"advSecretKey":"3BGBy5pIN6cUtEvTsDRXJITRQTVAia2c3dvfdBG1hhM=","processedHistoryMessages":[{"key":{"remoteJid":"94783664044@s.whatsapp.net","fromMe":true,"id":"4D1E23687DC68B4A4A00A821F578A815"},"messageTimestamp":1720179372},{"key":{"remoteJid":"94783664044@s.whatsapp.net","fromMe":true,"id":"CBAB7011DBAC4A5C375CF8066B105428"},"messageTimestamp":1720179372}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"zo388dPVRF6ilxPpG_hVUQ","phoneId":"e17e67ad-f2c8-4caa-aff4-f8fea0cc833d","identityId":{"type":"Buffer","data":"d89iNY0eClU0GES5irvXluQgOho="},"registered":true,"backupToken":{"type":"Buffer","data":"gIXHly6BKpRazQenk6Nsw18Wgjs="},"registration":{},"pairingCode":"4A9GJGFH","me":{"id":"94783664044:47@s.whatsapp.net","name":"web security"},"account":{"details":"CITnzuUHEKO1n7QGGAEgACgA","accountSignatureKey":"RJ2hFddTrCmBkWFmYBFs2/Y7NsoGYPlApG90cgmSzWg=","accountSignature":"K0hbMEHo04VM9OFllU6317eF3VJMsnzScpHV5++8KrpjReR9Cq2zZf1vV4An5xniZkF/4OOlWkExYJqD57Y1DA==","deviceSignature":"D4X7GTuYNr9lMxJ04bXwf/zGUKC0KqtBoxe5+9VtZff46Zk93q/eA2j2dFxA+LRtD6yDIKQssyEUqXIAZl4zhA=="},"signalIdentities":[{"identifier":{"name":"94783664044:47@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUSdoRXXU6wpgZFhZmARbNv2OzbKBmD5QKRvdHIJks1o"}}],"platform":"android","lastAccountSyncTimestamp":1720179367,"myAppStateKeyId":"AAAAAMbR"}",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Rushhide",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94761111112",
  GEMINI_KEY: process.env.GEMINI_KEY || "",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
