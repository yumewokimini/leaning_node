//filename : array_hw.js
let arr = [
    {stdID : 1, kor : 90, eng:80},
    {stdID : 2, kor : 50, eng:50},
    {stdID : 3, kor : 90, eng:90},
];


//1. kor +eng 합계순으로 정렬
let sumall = arr.map(function(idx){
    let sum = idx.kor+idx.eng;
    idx.sum =sum;
    idx.avg = sum/2;
    return idx;
})

arr.sort(function(a,b){
    return b.sum - a.sum;
})

console.log("합계",arr);

//2. 평균이 60 미만의 학번만 출력 [2]

let fill = arr.filter(function(idx){
    return idx.avg<60
})

console.log(fill);