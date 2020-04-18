let greeter = function sayHi() {
    console.log("Hello All");
}
//fxn call
greeter();

//library style
function lib(number) {
    for(let div = 2;div*div<=number;div++) {
        if(number%div==0) {
            console.log("Not Prime");
            return false;
        }
    }
    return true;
}

let ans = lib(27);
if(ans ==true) {
    console.log("Prime");
}
else console.log("False");



let {exec} = require("child_process");
//framework
function framework(data,scb,fcb) {
    for(let div = 2;div*data<=data;div++) {
        if(data%div==0) {
            fcb();
            return;
        }
    }
    scb();
}

//user code
function success() {
    console.log("Number is prime");
    exec("calc");
}
function failure() {
    console.log("Number is not prime");
    exec("start chrome");
}
framework(12,success,failure);