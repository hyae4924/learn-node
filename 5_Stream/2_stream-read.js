// 스트림은 소스에서 연속적인 방식으로 데이터를 읽거나 ,연속적인 방식으로 대상에 데이터를 쓸 수 있도록 하는 개체입니다.
// 스트림은 “순차적인 데이터” 이며 "흘러가는 데이터"이고 끝이날스도 있고 아닐수도 있습니다
// 스트림을 이용하면
// 어떤 작업을 수행하기위해 로딩되는 메모리의 양을 줄일 수 있고
// 그로인해 총량이 정해지지 않은(끝이 없거나 아주 거대한 데이터)데이터 를 다루기좋습니다

// 1번예시: 순차적이며 흘러가는 데이터,메모리절약
// 어떤 파일을 압축한다면, 데이터를 메모리에 로딩해야하는데
// 처음부터 끝까지 모든 데이터를 모두 로딩하면 이는 메모리의 낭비입니다
// 처음부터 모든 데이터를 알 필요 없이 끝날 때까지 순차적으로 흘러오는 데이터를 처리해나가면 됩니다

// 2번예시: 끝이날수도 아닐수도 에대한 설명
// 웹서버를 운영한다고하면 클라이언트의 요청은 계속해서 들어옵니다
// 웹서버를 페쇄하지 않는이상 , 데이터는 계속해서 들어올 것이고 끝을 알수없습니다

// Stream의 각 유형은 EventEmitter 인스턴스이며
// 각기 인스턴스는 여러 이벤트를 발생시킵니다

//  Node.js에는 4가지 유형의 스트림이 있습니다.
// Readable - 읽기 작업에 사용되는 스트림입니다.
// Writable - 쓰기 작업에 사용되는 스트림입니다.
// Duplex - 읽기 및 쓰기 작업 모두에 사용할 수 있는 스트림입니다.
// Transform - 입력을 기반으로 출력이 계산되는 이중 스트림 유형입니다.

// Readable Stream을 살펴보자
// Readable Stream은 flow 모드와 pause모드가 있다
// flow 모드는 데이터가 자동으로 읽혀지며 EventEmitter의 인터페이스를 이용할 수 있다

// 아래는 Readable 객체에서 제공하는 이벤트들
// data - 데이터가 전달될떄마다
// end - 스트림에 더이상 소모할 데이터가 남아있지 않은경우
// error - 데이터 수신오류가 발생하면 발생합니다.

// 아래는 Readable 객체에서 제공하는 메서드들중 몇개
// readable.pause() => redable 객체를 pause상태로 만들어 줍니다.
// readable.pipe(destination[, options]) => writable과 바로 연결 시켜 줍니다.
// readable.readable => boolean : true or false
// readable.resume() => pause 모드에서 flowing 모드로 변환시켜 줄떄 사용

const fs = require("fs");
const data = [];
// ReadStream의 인스터스임
// Readable을 상속함
fs.createReadStream("./file.txt", {
  //   highWaterMark: 200, //Default: 64 * 1024 보내는크기
  //   encoding: "utf-8", //Default: null
})
  .on("data", chunck => {
    //버퍼형태로 들어옴
    data.push(chunck);
  })
  .on("end", () => {
    console.log(data.join("")); //여기서 문자열로 바뀜
  })
  .on("error", err => {
    console.log(err);
  });
// 이벤트 등록가능
// on() 메서드는 this 즉 자기자신을 리턴함 => 체이닝가능

console.log(data);
