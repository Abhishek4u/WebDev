// file => copy file's data with new unique name

let uniqid = require("uniqid");
let fs = require("fs");
let path = require("path");

function checkPathIsDirectoryorNot(src) {
    let ans = fs.lstatSync(src).isFile();
    return ans;
}

function childrenReader(src) {
    let childrens = fs.readdirSync(src);
    return childrens;
}

function untreefy(src, dest, node) {
    let isFile = checkPathIsDirectoryorNot(src);
    if (isFile === true) {
        // src => file
        // copy data
        let newFileName = uniqid();
        let destPath = path.join(dest, newFileName);
        fs.copyFileSync(src, destPath);
        //store information
        node.isFile = true;
        node.oldName = path.basename(src);
        node.newName = newFileName;
    } else {
        //store information
        node.isFile = false;
        node.name = path.basename(src);
        node.children = [];
        //get content
        let childrens = childrenReader(src);
        //childrens loop
        for (let i = 0; i < childrens.length; i++) {
            let cpath = path.join(src, childrens[i]);
            let chobj = {};
            untreefy(cpath, dest, chobj);
            node.children.push(chobj);
        }
    }
}
let root = {};
untreefy(process.argv[2], process.argv[3], root);
fs.writeFileSync(path.join(process.argv[3], "metadata.json"), JSON.stringify(root));