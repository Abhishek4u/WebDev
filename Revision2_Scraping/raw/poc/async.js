let fs = require("fs");
console.log("Before");
//work start
//shown speed speed decreasing -> in this direction in above line
// newtwork, database, fileSystem => js  
fs.readFile("index.html",function(err,content){
    //later
    console.log(content+"");

})
//move on
console.log("After");