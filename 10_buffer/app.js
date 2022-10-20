// 버퍼생성

const buf1 = Buffer.from("Hi");
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);

// 버퍼 읽기
console.log(buf1);
console.log(buf1.length);
console.log(buf1[0]);
console.log(buf1[1]);
console.log(buf1.toString());
console.log(buf2);
console.log(buf3);

// 버퍼 값할당 ,복사
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2);
buf2.copy(buf3);
console.log(buf3);

// 버퍼 병합
const newBuf = Buffer.concat([buf1, buf2, buf3]);
console.log(newBuf.toString());
