let fs = require("fs");
console.log("Before");
console.log("start")
//async way => to work serially => callback inside call
// async work => serially => callback inside callback  
// serial
// fs.readFile("f1.html", function (err, content) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(content + "");

//     fs.readFile("f2.html", function (err, f2Content) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(f2Content);
//       }
//     })
//     // fs.readFile()
//   }
//   console.log("finish")
// })
fs.readFile("f1.html", function (err, content) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(content + "");

   
    // fs.readFile()
  }
  console.log("finish")
})
fs.readFile("f2.html", function (err, f2Content) {
  if (err) {
    console.log(err);
  } else {
    console.log(f2Content);
  }
})

console.log("After");