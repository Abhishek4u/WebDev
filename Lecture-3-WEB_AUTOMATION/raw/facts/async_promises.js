let fs = require("fs");
console.log("Before");
console.log("start");
let fileWillBeReadPromise = fs.promises.readFile("f1.html");
console.log(fileWillBeReadPromise);

fileWillBeReadPromise.then(function (content) {
    console.log(content + " ");
    console.log("finish");
})
fileWillBeReadPromise.catch(function (err) {
    console.log(err);
})
console.log("After");
console.log("I will execute")