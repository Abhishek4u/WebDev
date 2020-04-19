module.exports.help = function () {
    console.log();
    console.log("1. View ==> This command is to view the files and directories in tree or flat type format. eg. {Type {node tpp view src mode} where 2 modes are available {-t treeview, -f flatfile view} } ");
    console.log();
    console.log("2. Treefy ==> This Command is for creating directory structure using metadata.json file eg. {node tpp treefy src dest} src contains metadata file");
    console.log();
    console.log("3. Untreefy ==> This cmd is for copying files with their directories to new dest with unique name of files and creates metadata file for staoring original name and structure eg: {node tpp untreefy src dest}");
    console.log();
}