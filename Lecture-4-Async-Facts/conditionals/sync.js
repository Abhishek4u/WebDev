let fs = require("fs");

let f1 = fs.readFileSync("../f1.txt");
let f2 = fs.readFileSync("../f2.txt");
let f3 = fs.readFileSync("../f3.txt");
let f4 = fs.readFileSync("../f4.txt");
let f5 = fs.readFileSync("./f5.txt");
let f6 = fs.readFileSync("./f6.txt");
let f7 = fs.readFileSync("./f7.txt");

console.log("File f1");
if (f1.byteLength > 20) {
    console.log("File f2");
    if (f2.byteLength > 40) {
        console.log("File f6");
    }
    else {
        console.log("File f7");
    }
}
else {
    console.log("File f3");
    if (f3.byteLength < 30) {
        console.log("File f4");
    }
    else {
        console.log("File f5");
    }
}