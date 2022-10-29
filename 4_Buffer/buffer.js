// - 버퍼 도입전에는 javascript에서 바이너리 데이터 처리할 방법이 마땅하지 않았고, 속도가 느렸다.
// - 바이너리를 처리할 전문적인 도구가 없기때문에 string 타입 같은 것들은 raw value를 그대로 사용했다.
// - 버퍼는 비트와 바이트를 조금 더 쉽고, 빠르고 편하게 조작할 수 있도록 하는 도구이다.
// - node.js에서 buffer는 raw 바이너리 데이터를 저장할 수 있는 특수 유형 객체이다(배열과 비슷함) /힙이아닌 원시메모리에 할당됨
// - Nodejs는 버퍼클래스를 전역 스코프에 expose 하므로 import나 require를 할 필요가 없다.
// - 버퍼 클래스를 활용하면 raw 바이너리를 조작할 수 있는 함수와 추상화등을 사용할 수 있다
// - streaming 동안에 자동으로 버퍼가 만들어지고 ,또 직접 버퍼를 만들수도 있다
//  While dealing with TCP streams or the file system,
// Buffer is necessary to handle octet streams.
// Node provides Buffer class which provides instances to store raw data similar to an array of integers
//  but corresponds to a raw memory allocation outside the V8 heap.
// Buffer class is a global class that can be accessed in an application without importing the buffer module.

// 버퍼생성
const buf1 = Buffer.from("Hi");
const buf2 = Buffer.alloc(2); // 데이터는 채우지않고 크기만 정해 버퍼생성
const buf3 = Buffer.alloc(7); // 데이터는 채우지않고 크기만 정해 버퍼생성

// 버퍼쓰기
buf3.write("yceffort");

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

// 버퍼순회
buf3.forEach(item => console.log(item));

// 이외에 많은 api가 있으니 필요에따라 찾아보기
