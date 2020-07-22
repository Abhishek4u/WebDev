let fs = require("fs");

let f1 = fs.promises.readFile("../f1.txt");
f1.then(function(f11) {
    console.log("File F1");
    if(f11.byteLength > 20) {
        let f2 = fs.promises.readFile("../f2.txt");
        console.log("File F2");
        f2.then(function(f22) {
            if(f22.byteLength > 40) {
                let f6 = fs.promises.readFile("../f6.txt");
                console.log("File F6");
            }
            else {
                let f7 = fs.promises.readFile("../f7.txt");
                console.log("File F7");
            }
        })
    }
    else {
        let f3 = fs.promises.readFile("../f3.txt");
        console.log("File F3");
        f3.then(function(f33) {
            if(f33.byteLength < 30) {
                let f4 = fs.promises.readFile("../f4.txt");
                console.log("File F4");
            }
            else {
                let f5 = fs.promises.readFile("../f5.txt");
                console.log("File F5");
            }
        })
    }
})