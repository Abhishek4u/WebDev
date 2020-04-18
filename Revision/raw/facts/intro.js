let num = 21;
for(let div = 2;div*div<=num;div++) {
    if(num%div==0) {
        console.log("Not Prime");
        return;
    }
}
console.log("Prime");

