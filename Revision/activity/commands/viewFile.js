let fs = require("fs");
let path = require("path");
module.exports.view = function () {
    let src = arguments[0];
    let mode = arguments[1];
    if (mode == "-t") {
        viewAsTree(src, "");
    }
    else if (mode == "-f") {
        viewAsFlatFile(src, path.basename(src));
    }
    else {
        console.log("Wrong mode");
    }
}
function viewAsTree(src, indent) {
    let isFile = fs.lstatSync(src).isFile();
    if (isFile == true) {
        console.log(indent + path.basename(src) + "*");
    }
    else {
        console.log(indent + path.basename(src));
        //children => content read
        let childrens = fs.readdirSync(src);
        for (let i = 0; i < childrens.length; i++) {
            let child = childrens[i];
            let childPath = path.join(src, child);
            //d10/d20
            viewAsTree(childPath, indent + "\t");
        }
        //children => viewAsTree
    }
}

function viewAsFlatFile(src, toprint) {
    let isFile = fs.lstatSync(src).isFile();
    if (isFile == true) {
        console.log(toprint + "*");
    }
    else {
        console.log(toprint);
        //children => content read
        let childrens = fs.readdirSync(src);
        for (let i = 0; i < childrens.length; i++) {
            let child = childrens[i];
            let childPath = path.join(src, child);
            //d10/d20
            viewAsFlatFile(childPath, path.join(toprint, child));
        }
        //children => viewAsFlatFile
    }
}