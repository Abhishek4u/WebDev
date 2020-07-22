let fs = require("fs");

(async function () {
    let data1 = await fs.promises.readFile("../../f1.txt");
    let data2 = await fs.promises.readFile("../../f2.txt");
    let data3 = await fs.promises.readFile("../../f3.txt");

    console.log("F1's Data " + data1.length);

    console.log("F2's Data " + data2.length);

    console.log("F3's Data " + data3.length)
})()