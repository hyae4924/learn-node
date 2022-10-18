const os = require("os");

// mac에서의 줄바꿈
console.log(os.EOL === "\n");

// 토탈 메모리
console.log("------total meomries:", os.totalmem());
console.log("------free memories", os.freemem());
console.log("------cpu information", os.cpus());
console.log("------os type:", os.type());
console.log("------userInfo:", os.userInfo());
console.log("------hostname:", os.hostname());
console.log("------homedir:", os.homedir());
