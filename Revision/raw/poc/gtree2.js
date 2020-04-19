let root = {
    data: "d10",
    children: [
        {
            data: "d20",
            children: [
                {
                    data: "d50",
                    children: []
                },
                {
                    data: "d60",
                    children: []
                }
            ]
        },
        {
            data: "d30",
            children: [
                {
                    data: "d70",
                    children: []
                }
            ]
        },
        {
            data: "d40",
            children: [
                {
                    data: "d80",
                    children: []
                },
                {
                    data: "d90",
                    children: []
                }
            ]
        }
    ]
}

function supposed(node) {
    let printing = node.data + " => ";
    for(let i = 0;i<node.children.length;i++) {
        let child = node.children[i];
        printing += child.data +", ";
    }
    console.log(printing);
    for(let i = 0;i<node.children.length;i++) {
        let childCalling = node.children[i];
        supposed(childCalling);
    }
}

supposed(root);