//비동기식
import fs from 'fs';
// fs.readFile('C:/Temp/examcopy.js','utf8',(err,data)=>{
//     if(err){ throw err;}
//     // console.log(data);
// })


// console.log('2. the end');

// //동기식
// let data = fs.readFileSync('C:/Temp/examcopy.js','utf-8')
// console.log(data.toString());

fs.writeFile("C:/Temp/text.txt",'hello world', err=>{
    if(err){
        throw err;
    }else{
        console.log('file write complete');
    }
})