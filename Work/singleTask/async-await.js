let fs = require("fs");

async function file() {
    let file = await fs.promises.readFile("../f1.txt");
    console.log("File accessed");
    console.log(file.byteLength);
}
file()