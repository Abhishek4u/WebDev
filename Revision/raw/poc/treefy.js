let path = require("path");
let fs = require("fs");
function treefy(src, dest, node) {
    if (node.isFile === true) {
        //file copy
        let srcPath = path.join(src, node.newName);
        let destPath = path.join(dest, node.oldName);
        fs.copyFileSync(srcPath, destPath);
    } else {
        //create directiory
        let dirPath = path.join(dest, node.name);
        fs.mkdirSync(dirPath);

        //children
        let children = node.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            let parentPath = dirPath;
            treefy(src, parentPath, child);
        }
    }
}

let src = process.argv[2];
let dest = process.argv[3];
let root = require(path.join(src, "metadata.json"));
treefy(src, dest, root);