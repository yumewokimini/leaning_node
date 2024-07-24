function total(fst,...arr){
    var resutl = arr.reduce(function(total,idx){
        total += idx;
        return total;
    })
    return resutl;
}

module.exports = total;
