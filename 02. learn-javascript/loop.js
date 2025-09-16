// 1. 반복문
const numbers = [341, 233, 356, 479];
console.log("🚀 ~ numbers:", numbers);

for (let i = 0; i < numbers.length; i++) {
  // 반복해서 실행할 로직
  console.log(`💕 ${i}: ${numbers[i]}`);
}
console.log("==============================");

// forEach : 향상된 for문
numbers.forEach((value, index) => {
  console.log(`🔥 ${index}: ${value}`);
});

console.log("==============================");
// debugger;

// 2. 반복문 2
const ingredientList = ["🍳", "🥬", "🍅", "🥩"];
let sandwitch = "🍞";

// 각 재료들을 샌드위치에 추가하기
ingredientList.forEach((item) => {
  console.log("🚀 ~ item:", item);
  sandwitch += item;
  console.log("🚀 ~ sandwitch:", sandwitch);
  console.log("==============================");
});

// console.log("🚀 ~ sandwitch:", sandwitch);

//  3. map (기존 배열을 조작하여 새로운 배열을 리턴)
const students = ["alice", "bob", "charlie"];
const upperStudents = students.map(
  (student) => student.toUpperCase() // 모두 대문자로 변경
);
console.log("🚀 ~ upperStudents:", upperStudents);
console.log("🚀 ~ students:", students); // 원본 배열에는 영향이 없음
console.log("==============================");

// 4. filter (특정 조건에 맞는 요소들만 추출하여 새로운 배열을 리턴)
// 조건에 부합하는 요소가 없을 경우 빈 배열 [] 반환
students.filter((student) => student.length >= 4);
const longNameStudents = students.filter((student) => student.length >= 4);
console.log("🚀 ~ longNameStudents:", longNameStudents);

// 5. find (특정 조건에 맞는 요소들 중 첫번째 요소만 리턴)
const filterdStudent = students.find((student) => student.length >= 4);
console.log("🚀 ~ filterdStudent:", filterdStudent);

console.findStudent = students.find((student) => student.length >= 6);
console.log("🚀 ~ findStudent:", console.findStudent);
console.log("==============================");

// 6. some, every
// some (특정 조건에 맞는 요소가 배열에 하나라도 존재하는지 여부를 true/false로 리턴)
const someStudent = students.some((student) => student.startsWith("a"));
console.log("🚀 ~ someStudent:", someStudent);

// every (특정 조건에 맞는 요소가 배열의 모든 요소가 부합하는지 여부를 true/false로 리턴)
const everyStudent = students.every((student) => student.startsWith("a"));
console.log("🚀 ~ everyStudent:", everyStudent);
