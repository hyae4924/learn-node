const process = require("process");

// node 위치
console.log("-------process.execPath", process.execPath);
// node version
console.log("-------process.version", process.version);
// PID(Process ID)는 운영체제에서 프로세스를 식별하기 위해 프로세스에 부여하는 번호를 의미한다.
console.log("-------process.pid", process.pid);
// PPID(Parent Process ID)는 부모 프로세스의 PID를 의미한다.
console.log("-------process.ppid", process.ppid);
// 해당 노드 프로세스의 환경변수
console.log("-------process.env", process.env);
// 해당노드 프로세스 가동시간
console.log("-------process.uptime", process.uptime());
// 해당 노드 프로세스의 경로
console.log("-------process.cwd", process.cwd());
// 해당 노드 프로세스의 cpu사용량
console.log("-------process.cpuUsage", process.cpuUsage());
