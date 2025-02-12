const fs = require("fs");
const Wallet = require("ethereumjs-wallet").default;

// Đường dẫn tới file keystore của bạn
const keystoreFile = "node1/data/keystore/UTC--2025-02-11T08-22-42.144222200Z--83b4f0d6ea0a3a981d35215a81466ac03845d10c";
const keystore = fs.readFileSync(keystoreFile, "utf8");
const password = "12345678"; // thay bằng mật khẩu thực

Wallet.fromV3(keystore, password, true)
  .then(wallet => {
    console.log("Private Key:", wallet.getPrivateKey().toString("hex"));
  })
  .catch(err => {
    console.error("Error decrypting wallet:", err);
  });
