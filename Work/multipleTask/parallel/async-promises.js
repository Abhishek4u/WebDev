let fs = require("fs");

let data1 = fs.promises.readFile("../../f1.txt");
let data2 = fs.promises.readFile("../../f2.txt");
let data3 = fs.promises.readFile("../../f3.txt");

let allPromise = Promise.all([data1, data2, data3]);

allPromise.then(function (data) {
    console.log("F1's Data " + data[0].byteLength);
    console.log("F2's Data " + data[1].byteLength);
    console.log("F3's Data " + data[2].byteLength)
})
