//import total from "./01_totalModule.js";
// 디폴드 있으면 * 사용 불가
import * as mymath from "./01_totalModule.js";

//1.
//npm init
console.log(mymath.total(10,20,30,40));
console.log(mymath.total(5,6,7));  

// 2.
let arr = [1,2,3,4];
console.log(mymath.findNum(2,arr));

// 3.
console.log(mymath.filterNum(2,arr));

