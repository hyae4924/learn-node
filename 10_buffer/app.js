"use strict";
// 1. 버퍼는 메모리상에서 고정된 사이즈의 메모리 덩어리이다
//      (Fixed-size chuck of memory)
// 2. 숫자 배열의 형태이고 메모리에 있는 데이터 자체를 가르킨다
//      (array of intefers, byte of data)
const { Buffer } = require("node:buffer");
const buf = Buffer.from("Hi");
console.log(buf); // <Buffer 48 69>  <= 유니코드리턴
console.log(buf.length); //2
console.log(buf[0]); //72  <=아스키코드리턴
console.log(buf[1]); //105 <=아스키코드리턴
console.log(buf.toString()); //'Hi' <= 스트링리턴 ,encoding 전달가능 default urf-8

// create and copy
const buf2 = Buffer.alloc(2); //allocation =>할당 == 생성  => 길이가 2인 버퍼 생성 (메모리중 사용가능한 부분을 찾아 초기화 시켜줌)
const buf3 = Buffer.allocUnsafe(2); //allocation =>할당 == 생성  => 길이가 2인 버퍼 생성 (기존에 다른데이터가 들어있으나, 사용되지 않는 메모리라면 공간을 확보하고 초기화하지 않음, 속도는 초기화하지 않기떄문에 더빠르지만 데이터가 이미 들어있을수도 있음)
console.log(buf2);
console.log(buf3);
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2);
buf2.copy(buf3);
console.log(buf3);

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());

// <Buffer 유니코드>   /     buf[0] => 아스키코드 리턴
