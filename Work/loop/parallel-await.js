let fs = require("fs");


// let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt", "../f5.txt"];
// readFiles();

// async function readFiles() {
//   for (let i = 0; i < files.length; i++) {
//     await fs.readFile(files[i], function (err, data) {
//       console.log(`File no ${i + 1} data`);
//       console.log(data.byteLength);
//     });
//   }
// }

let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt", "../f5.txt"];

readFiles(0)
async function readFiles(i) {
    if (i == files.length) {
      return;
    }

    await fs.readFile(files[i], function (err, data) {
      console.log(`Data of file${i + 1} : ${data.byteLength}`);
    })
    readFiles(i + 1);     //   didn't wait for current file to load and make a call
  }