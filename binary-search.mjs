import MergeSort from "./merge-sort.mjs";

function Node() {
    let root, left, right;

    return {
        root,
        left,
        right
    };
};

/**
 * Creates a node tree.
 * @param {Array} arr 
 */
export default function NodeTree(arr) {
    let root;
    const sortedArr = RemoveDuplicates(MergeSort(arr));

    console.log(`Original Arr: ${arr}`);
    console.log(`Sorted Arr: ${sortedArr}`);

    /**
     * 
     * @param {Array} arr 
     */
    function tree(arr, start, end) {
        if (start > end) return null;

        const midpoint = Math.ceil((start + end) / 2);
        const root = arr[midpoint];
        const node = Node();

        node.root = root;
        node.left = tree(arr, start, midpoint - 1);
        node.right = tree(arr, midpoint + 1, end);

        return node;
    };

    function print(node, prefix, isLeft) {
        if (node === null) return;

        if (node.right !== null) {
            print(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        };

        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.root}`);

        if (node.left !== null) {
            print(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        };

    };

    const buildTree = () => {
        root = tree(sortedArr, 0, sortedArr.length - 1);

        return root;
    };

    const prettyPrint = () => {
        print(root, '', true);
    };


    return {
        prettyPrint,
        buildTree
    };
};


function RemoveDuplicates(arr) {
    const sortedArr = [];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === arr[index + 1]) {
            index++;

            for (let jndex = index; jndex < arr.length - 1; jndex++) {
                if (arr[index] === arr[jndex + 1]) index = jndex + 1;
            };
        };

        sortedArr.push(arr[index]);
    };

    return sortedArr;
};