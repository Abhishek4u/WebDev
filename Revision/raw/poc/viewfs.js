// file ,directory
// directiory -> content
let fs = require("fs");
let path = require("path");

function checkPathIsDirectoryornot(src) {
    let ans = fs.lstatSync(src).isFile();
    return ans;
}

function childrenReader(src) {
    let childrens = fs.readdirSync(src);
    return childrens;
}
function viewAsFlatFile(src) {
    let isFile = checkPathIsDirectoryornot(src);
    if (isFile == true) {
        console.log(src + "*");
    }
    else {
        console.log(src);
        //children => content read
        let childrens = childrenReader(src);
        for (let i = 0; i < childrens.length; i++) {
            let child = childrens[i];
            let childPath = path.join(src, child);
            //d10/d20
            viewAsFlatFile(childPath);
        }
        //children =>viewAsFlatFile
    }
}

viewAsFlatFile(process.argv[2]);