// 1. 변수 선언
const username = "realhomie"; //상수(변할수 없는 값)
console.log("🚀 ~ username:", username);

let usermbti = "ISTJ"; //변수(변할수 있는 값)
console.log("🚀 ~ usermbti:", usermbti);

usermbti = "ENFP"; //수정
console.log("🚀 ~ 변경된 usermbti:", usermbti);

// username = "newhomie"; //오류발생
// console.log("🚀 ~ 변경된 username:", username);

// 2. 데이터 타입
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

console.log("-------------------------------");

// 3. 함수

// 함수 정의/선언
// function greeting() {
//   // 문자열 연결
//   // console.log("반갑습니다.!" + username + "님" + "당신의 MBTI는" + usermbti + "이군요!");
//   // 백틱
//   console.log(`반갑습니다.! ${username}님, 당신의 MBTI는 ${usermbti}이군요!`);
// }

// 화살표 함수
const greeting = () => {
  console.log(`반갑습니다.! ${username}님, 당신의 MBTI는 ${usermbti}이군요!`);
};

// 함수 호출/실행
greeting();

// 4. 함수의 인자와 매개변수 (파라미터), return
const sum = (num1, num2) => {
  //실행할 로직
  const result = num1 + num2;
  // console.log("🚀 ~ sum ~ result:", result);
  return result;
  console.log("이 코드는 실행되지 않습니다."); // return 이후에는 함수가 종료되기 때문
};

const double = (num) => {
  return num * 2;
};

const exit = () => {
  console.log("함수를 종료합니다.");
  return; //undefined 반환
};

const add = sum(3, 5); //8
console.log("🚀 ~ add:", add);

const doubleresult = double(add); //16
console.log("🚀 ~ doubleresult:", doubleresult);

// sayHello 함수 만들기
// (사용자 이름을 받아서 "반갑습니다. 000님"라는 텍스트를 console에 출력하는 기능을 만들기)
const sayHello = (name) => {
  console.log(`반갑습니다. ${name}님`);
};
sayHello("전종민");
