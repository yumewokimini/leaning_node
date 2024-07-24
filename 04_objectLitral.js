// objectLiteral.js
// 객체 상수

let username = 'hello';
//템프럴 리트럴
let temp = ``; 

let getName = function(){};

//이름이 동일할 경우 축약형으로 가능 username
let obj = { username , hobby:[], addr: {zip:50001, si:'대구'}, getName: function(){} };

//객체 구조 분해
// obj.addr.zip =>
let {addr, hobby} = obj; 
// let addr = obj.addr;
// let hobby = obj.hobby; 

console.log(addr.zip);

//배열 구조분해(... => rest 연산자)
let score = [90,80,100,50,70];
score[0];
let [fst,snd,...rest] = score;
console.log(fst,snd,rest);


// 객체 복사 spread 연산자
//얕은 복사
let copyScore = score;
copyScore[0] = 10;
console.log(score[0] , copyScore[0]);

// 배열 깊은 복사 : spread 연산자 사용
let deepCopyScore = [...score] // [...score ...score2] 배열 2개를 합쳐서 하나로 만듬
deepCopyScore[0] = 50;
console.log(score[0],deepCopyScore[0]);

//객체 얕은 복사
let emp = {username : 'choi',dept : '개발' , sal :5000};
let copyemp = emp;
copyemp.sal = 1000;
console.log(emp , copyemp);
//객체 깊은 복사
let copyemp2 = {...emp};
copyemp2.sal = 5000;
//한줄
let deepCopyemp = {...emp, sal :3000}
console.log(emp, copyemp2 , deepCopyemp);


//



















