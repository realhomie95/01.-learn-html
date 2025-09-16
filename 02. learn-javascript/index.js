const username = "realhomie"; //상수(변할수 없는 값)
console.log("🚀 ~ username:", username);

let usermbti = "IsTJ"; //변수(변할수 있는 값)
console.log("🚀 ~ usermbti:", usermbti);

usermbti = "ENFP"; //수정
console.log("🚀 ~ 변경된 usermbti:", usermbti);

// username = "newhomie"; //오류발생
// console.log("🚀 ~ 변경된 username:", username);

// 데이터 타입
const num = 12;
const str = "텍스트";
const bool = true; //false
let empty; //null
const empty2 = null;

console.log("num", typeof num);
console.log("str", typeof str);
console.log("bool", typeof bool);
console.log("empty", typeof empty);

/* null과 undefined의 차이
null: 개발가자 의도를 가지고 값이 비어있음을 명시적으로 나타냄
undefined: 개발자 의도와 상관 없이 값이 할당되지 않음
*/
