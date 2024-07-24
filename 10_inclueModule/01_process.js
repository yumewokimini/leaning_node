//명령행 인수
//node aaa.js 실행이후 뒤에 10,20 또는 /a 같은 조건을 붙어서 사용가능함

import {argv,env} from 'node:process';

argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

// for(let i = 0; i<env.path.length; i++){
//     if(env.path[i] == ';'){

//     }else 
//     console.log(env.path[i]);
// }

