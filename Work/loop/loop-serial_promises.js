let fs = require("fs");

function multiFileReader() {
  let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt", "../f5.txt"];

  let file1 = fs.promises.readFile(files[0]);
  for (let i = 1; i < files.length; i++) {
    file1 = file1.then(function (data) {
      console.log(`File no ${i} printed`)
      let nfp = fs.promises.readFile(files[i]);
      return nfp;
    })

  }
  return file1;
}
multiFileReader().then(function (data) {
  console.log("File no 5 will be printed\n");
  console.log(data);
})
