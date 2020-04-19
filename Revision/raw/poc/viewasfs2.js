// file ,directory
// directiory -> content
let fs = require("fs");
let path = require("path");

function viewAsFlatFile(src) {
    let isFile = fs.lstatSync(src).isFile();
    if (isFile == true) {
        console.log(src + "*");
    }
    else {
        console.log(src);
        //children => content read
        let childrens = fs.readdirSync(src); //returns array of children
        for (let i = 0; i < childrens.length; i++) {
            let child = childrens[i];
            let childPath = path.join(src, child);
            //d10/d20
            viewAsFlatFile(childPath);
        }
        //children =>viewAsFlatFile
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
        //children =>viewAsTree
    }
}
viewAsTree(process.argv[2], "");

// viewAsFlatFile(process.argv[2]);