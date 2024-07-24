/*
    array.map, filter, sort....
*/

let arr = [
  { username: "choi", dept: "개발", sal: 2000 },
  { username: "park", dept: "인사", sal: 1000 },
  { username: "kim", dept: "개발", sal: 1500 },
];

// 이름이 박인 사원
let findResult = arr.find((emp) => emp.username == "park");
console.log("park find : ", findResult);

//1.sal 1500 이상인 사원 조회 filter
// let filterResult = arr.filter(emp => emp.sal >= 1500);

let filterResult = arr.filter(function (emp) {
  return emp.sal >= 1500;
});

console.log("sal > 1500 :", filterResult);

//2. 급여순으로 오름 차순
arr.sort(function (a, b) {
  return a.sal - b.sal;
});
console.log("sort", arr);

// arr.sort((a,b) => a.sal - b.sal);
// console.log("sal sort : ", arr);

// arr.sort((a,b) => a.username == b.username? 0 : a.username == b.username? 1:-1);
// arr.sort((a,b)=>{if(a.username == b.username) return 0
//                  else if(a.username > b.username) return 1
//                  else return -1
// });

arr.sort(function (a, b) {
  if (a.username == b.username) {
    return 0;
  } else if (a.username > b.username) {
    return 1;
  } else {
    return -1;
  }
});
console.log("sal sort: ", arr);

//3. 급여 합계
var resutl = arr.reduce((total, emp) => (total += emp.sal), 0);

console.log("sal total: ", resutl);
//

var resutl2 = arr.reduce(function (total, emp) {
  //console.log(emp.sal);
  //console.log(total);
  total += emp.sal;
  return total;
}, 0);

console.log("sal2 total: ", resutl2);

//4. 모든 사원의 급여를 500인상 (map ,for 구문처럼 반복문)

// let mapResult1 = arr.map((emp) => (emp.sal += 500));

// console.log("급여 인상: ", mapResult1);

// let mapResult2 = arr.map((emp) => {
//   emp.sal += 500;
//   return emp;
// });

// console.log("급여 인상: ", mapResult2);
//완전 복사 이후 출력
let mapResult3 = arr.map((emp) => {
  return {...emp, sal : emp.sal += 500};
});// 덮어 사용하지 않고 새로 만들어짐.

console.log("급여 인상: ", arr);
console.log("급여 인상: ", mapResult3);

//5. ['kim','choi']
//4번이 완전복사에서 작업했기 때문에 5번에 영향이 없음
let fillterMapresult = arr.filter(emp => emp.sal> 1500).map(emp => emp.username);
console.log("sal> 1500 이상인 사원명 ", fillterMapresult)

