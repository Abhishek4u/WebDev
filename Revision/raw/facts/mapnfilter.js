let arr = [4,14,17,23,48,66];

let newArr = arr.map(function(num){
    if(num%2==0) return num+1;
    else return num-1;
})

function prime(number) {
    for(let div = 2;div*div<=number;div++) {
        if(number%div==0) {
            return false;
        }
    }
    return true;
}

console.log(newArr.filter(prime));