let arr = [4,14,17,23,48,66];

//Own implementation of map
Array.prototype.myMap = function(cb) {
    let newarr = [];
    for(let i = 0;i<this.length;i++) {
        newarr[i] = cb(this[i]);
    }
    return newarr;
}

//Own implementation of filter
Array.prototype.myFilter = function(cb) {
    let newarr = [];
    for(let i = 0;i<this.length;i++) {
        let val = cb(this[i]);
        if(val==true) newarr.push(this[i]);
    }
    return newarr;
}
function sample1(num) {
    if(num%2==0) return num+1;
    else return num-1;
}
function prime(number) {
    for(let div = 2;div*div<=number;div++) {
        if(number%div==0) {
            return false;
        }
    }
    return true;
}


let newelt = arr.myMap(sample1);
console.log(newelt.myFilter(prime));