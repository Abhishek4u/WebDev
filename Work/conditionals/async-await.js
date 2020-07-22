let fs = require("fs");

(async function() {
    let f1 = await fs.promises.readFile("../f1.txt")
    console.log("File F1");
    if(f1.byteLength > 20) {
        let f2 = await fs.promises.readFile("../f2.txt");
        console.log("File F2");
        if(f2.byteLength > 40) {
            let f6 = await fs.promises.readFile("../f6.txt");
            console.log("File F6");
        }
        else {
            let f7 = await fs.promises.readFile("../f7.txt");
            console.log("File F7");
        }
    }
    else {
        let f3 = await fs.promises.readFile("../f3.txt");
        console.log("File F3");
        if(f3.byteLength < 30) {
            let f4 = fs.promises.readFile("../f4.txt");
            console.log("File F4");
        }
        else {
            let f5 = fs.promises.readFile("../f5.txt");
            console.log("File F5");
        }
    }
})();
    