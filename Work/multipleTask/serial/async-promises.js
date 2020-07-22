let fs = require("fs");

let data1 = fs.promises.readFile("../../f1.txt");

data1.then(function (data11) {
    console.log("F1's Data " + data11.byteLength);
    let data2 = fs.promises.readFile("../../f2.txt");
    return data2;

}).then(function (data22) {
    console.log("F2's Data " + data22.byteLength);
    let data3 = fs.promises.readFile("../../f1.txt");
    return data3;

}).then(function (data33) {
    console.log("F3's Data " + data33.byteLength);

}).catch(function(err) {
    console.log(err);
})