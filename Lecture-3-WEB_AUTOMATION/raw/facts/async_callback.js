let fs = require("fs");
console.log("Before");
console.log("start");
//async way => to work serially => callback inside call
fs.readFile("f1.html",function (err,content) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(content+" ");
        
        fs.readFile("f2.html",function(){});
    }
    console.log("finish");
})
console.log("After");