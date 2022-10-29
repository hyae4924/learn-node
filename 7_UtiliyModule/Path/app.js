// unix(max,linux) :'User'/temp/myfile.html'
// windows: 'c:\\temp\mtfile.html'

// 디렉토리,파일 경로(절대경로)
console.log("__dirname =>", __dirname); //해당 디렉토리경로
console.log("__filename =>", __filename); //해당 파일 경로

const path = require("path");

console.log("path.sep =>", path.sep); // 경로 구분자
console.log("path.delimiter =>", path.delimiter); // 환경변수 구분자

// basename() onlyFileName
console.log("path.basename(__filename) :", path.basename(__filename)); //파일명+확장자명
console.log("path.basename(,'js') :", path.basename(__filename, "js")); //파일명

// dirame() onlyDirName
console.log("path.dirname(__filename) => ", path.dirname(__filename)); //디렉토리명

// extension() onlyExtensionName
console.log("path.extname(__filename) => ", path.extname(__filename)); //확장자명

// parse <=> string
const parsed = path.parse(__filename); //스트링형식의 경로를 오브젝트형식으로
console.log("parsed => ", parsed);
const string = path.format(parsed); //오브젝트형식의 경로를 스트링으로
console.log("string => ", string);

// isAbsolute  절대경로인지 확인
console.log("isAbsolute? : ", path.isAbsolute(__dirname)); //true
console.log("isAbsolute? : ", path.isAbsolute("../")); //false

// normalize  이상한부분을 수정해줌
console.log("path.normalize :", path.normalize("/foler/////sub")); // return "folder/sub"

// join   경로조합 스트링리턴
console.log(__dirname + "/" + "image"); //bad way
console.log(__dirname + path.sep + "image"); //not bad way
console.log(path.join(__dirname, "image")); //good way
