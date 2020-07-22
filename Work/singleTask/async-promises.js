let fs = require("fs");

let file = fs.promises.readFile("../f1.txt");

file.then(function(data) {
    console.log("File accessed");
    console.log(data.byteLength);
    
}).catch(function(err) {
    console.log(err);
})