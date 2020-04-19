let path = require("path");
let fs = require("fs");
let uniqid = require("uniqid");

module.exports.untreefy = function () {

    let root = {};
    let source = arguments[0];
    let destination = arguments[1];
    untreefying(source, destination, root);
    fs.writeFileSync(path.join(destination, "metadata.json"), JSON.stringify(root));
}

function untreefying(src, dest, node) {
    let isFile = fs.lstatSync(src).isFile();
    if (isFile === true) {
        let newFileName = uniqid();
        fs.copyFileSync(src, path.join(dest, newFileName));
        node.isFile = true;
        node.oldName = path.basename(src);
        node.newName = newFileName;
    } else {
        node.isFile = false;
        node.name = path.basename(src);
        node.children = [];
        let childrens = fs.readdirSync(src);
        for (let i = 0; i < childrens.length; i++) {
            let child = childrens[i];
            let childObj = {};
            untreefying(path.join(src, child), dest, childObj);
            node.children.push(childObj);
        }
    }

}