// export default function total(fst,...arr){
//     var resutl = arr.reduce(function(total,idx){
//         total += idx;
//         return total;
//     })
//     return resutl;
// }

export function total(fst,...arr){
    var resutl = arr.reduce(function(total,idx){
        total += idx;
        return total;
    })
    return resutl;
}
// function total1(fst,...arr){
//     return arr.reduce((total,ele) => (total ++ ele), fst);
// }

// export function findNum(num, ...arr){
//     return arr.find(function(idx){
//         if(idx == num){
//             return num;
//         }       
//     })
// }

export function findNum(num, arr){
    return arr.find(idx => 
        idx == num);
}

export function filterNum(num,arr){
    return arr.filter(ele => 
        ele>num);
}

