let num1 = 15;
let num2 = 20;
let total = 25;

function NumSum(){
    return new Promise(function(result,err){
        if(num1+num2 == total){
            result("입력값이 같음");
        }else{
            err("입력값이 다름");
        }
    })
}

// NumSum()
// .then(result => console.log(result))
// .catch(err => console.log(err));



async function sumAwait(){
    let result = await NumSum().catch(err => err);
    console.log(result);
}
sumAwait();

