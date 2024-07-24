//filename : promise.js
//비동기 처리

//반복실행
// setInterval();

//한번 실행
function delay(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('time out');
        },4000);
        
    });//실행과 실패했을때
}

// 1. then
// delay()
// .then(result => console.log(result));

// 2.await: 익명함수 오류
let result = async function(){
    return await delay();
}
console.log(result())

// 3.이름있는 함수 => 호출
// async function delayAwait(){
//     let result = await delay();
//     console.log(result);
// }
// delayAwait();










