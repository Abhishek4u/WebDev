let fs = require("fs");

let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt","../f5.txt"];
readFiles();

async function readFiles() {
    for(let i = 0;i<files.length;i++) {
        let data = await fs.promises.readFile(files[i])
            console.log(`File no ${i+1} data`);
            console.log(data.byteLength);    
    }
}