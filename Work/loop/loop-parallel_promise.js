let fs = require("fs");
function promiseMultiFileReader() {
  let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt", "../f5.txt"];
 
  for (let i = 0; i < files.length;) {
    let nextFile = fs.promises.readFile(files[i++]);  //   didn't wait for current file to load and make a call
    nextFile.then(function (data) {
      console.log(`Data of file ${i}`);
    })
    nextFile.catch(function (err) {
      console.log(err)
    })
  }
}
promiseMultiFileReader()