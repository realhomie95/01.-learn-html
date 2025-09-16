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

console.log("-------------------------------");

// 5. 조건문
const score = 59;
if (score >= 60) {
  // 조건식이 true일 때 실행되는 코드
  console.log("합격");
} else {
  // 조건식이 false일 때 실행되는 코드
  console.log("불합격");
}
console.log("if문 종료");
let grade = "";

if (score >= 90) {
  grade = "A등급";
} else if (score >= 80) {
  grade = "B등급";
} else if (score >= 70) {
  grade = "C등급";
} else {
  grade = "D등급";
}

console.log("🚀 ~ grade:", grade);

// 6. 삼항연산자
// 여기에 orderSandwich 함수를 작성하세요
// function orderSandwich(type) {
//   if (type === "vegan") {
//     return "🥖 + 🥬 + 🍅 + 🥑 + 🥒";
//   }
//   return "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
// }

// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다
const orderSandwich = (type = "basic") => {
  return type === "vegan" ? "🥖 + 🥬 + 🍅 + 🥑 + 🥒" : "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
};

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich("basic"));
console.log("비건 샌드위치 주문: " + orderSandwich("vegan"));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/

// * 3항 연산자 미션 : age 값이 18세 이상이면 adultype의 값은 "성인" , 18세 미만이면 "미성년자"가 되도록 코드를 작성하세요
const age = 20;
const adultype = age >= 18 ? "성인" : "미성년자";
console.log("🚀 ~ adultype:", adultype);

if (0) {
  console.log("true입니다!");
} else {
  console.log("false입니다!");
}
const userInput = "text";

// if (userInput) {
//   alert("입력해주셔서 감사합니다");
// } else {
//   alert("입력값을 작성해주세요");
// }

// 7. 배열
const daysOFWeek = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
console.log("🚀 ~ daysOFWeek:", daysOFWeek);
console.log("오늘의 요일 :", daysOFWeek[2]);

const idol = ["장원영", "안유진", "리즈", "레이", "가을", "이서"];
console.log("🚀 ~ idol:", idol);
console.log("🚀 ~ 최애의 아이돌:", idol[1]);
console.log("🚀 ~ 마지막 아이돌:", idol[5]);

console.log("🚀 ~ 아이돌의 수:", idol.length);
console.log("🚀 ~ 마지막 아이돌:", idol[idol.length - 1]);
