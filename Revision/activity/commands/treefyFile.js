let path = require("path");
let fs = require("fs");
module.exports.treefy = function treefy() {

    let src = arguments[0];
    let dest = arguments[1];

    //requiring metadata file for structure creation
    let root = require(path.join(src, "metadata.json"));

    treefying(src, dest, root);
}

function treefying(src, dest, node) {
    let isFile = node.isFile;

    if (isFile === true) {
        //file copying
        let srcPath = path.join(src, node.newName);
        let destPath = path.join(dest, node.oldName);

        fs.copyFileSync(srcPath, destPath);
        
    } else {


        //create directory
        parentPath = path.join(dest, node.name);
        fs.mkdirSync(parentPath);

        //call For childrens
        let children = node.children;
        for (let i = 0; i < children.length; i++) {
            let currentChild = node.children[i];
            treefying(src, parentPath, currentChild);
        }
    }
}