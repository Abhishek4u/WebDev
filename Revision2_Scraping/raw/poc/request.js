let request = require("request");
let fs = require("fs");
console.log("Before");

request("https://www.amazon.in/",function(err,res,html) {
    if(err === null && res.statusCode === 200) {
        //fs.writeFile("index.html",html,function(err) {
            // console.log("Written file to disk");
        // })

        fs.writeFileSync("index.html", html);
        console.log("Written file to disk");
    } else if(res.statusCode === 404) {
        console.error.log("Invalid URL");
    } else {
        console.log(err);
        console.log(res.statusCode);
    }
})
console.log("After");