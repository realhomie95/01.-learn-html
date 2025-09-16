// 1. 배열 선언
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

// 2. 객체 선언 (키와 값의 쌍으로 이루어진 데이터 집합)
const person = {
  // key: value
  name: "전종민",
  isMale: true,
  mbti: "ISTJ",
};
console.log("🚀 ~ person:", person);
console.log("🚀 ~ 이름:", person["name"]);
console.log("🚀 ~ 남성여부:", person.isMale);
