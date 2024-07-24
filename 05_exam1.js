let arr1 = [50,60,70];
let arr2 = [20,30,40];
let arr3 = [arr1,...arr2];
let arr4 = [...arr1, arr2]
//50출력

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

console.log(arr3[0][0]);
console.log(arr3[1]);

console.log(arr4[0]);
console.log(arr4[3][0]);

