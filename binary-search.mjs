import MergeSort from "./merge-sort.mjs";

/**
 * NOTE IN FUNCTION INSERT
 * # THE FUNCTION DOES NOT INSERT 
 * # THE NEW VALUE IN THE ARRAY.  
 */
///

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

    const prettyPrint = () => {
        print(root, '', true);
    };

    const buildTree = () => {
        root = tree(sortedArr, 0, sortedArr.length - 1);

        return root;
    };

    const insert = (value) => {
        InsertNode(root, value);
    };

    const deleteItem = (value) => {
        const nodeToBeDeleted = find(value);

        if (!nodeToBeDeleted) return null;

        const lowestNode = FindLowestNode(nodeToBeDeleted);
        const lowestNodeParent = FindParentNode(nodeToBeDeleted, lowestNode);

        nodeToBeDeleted.root = lowestNode.root;

        if (lowestNodeParent.left && lowestNodeParent.left.root === lowestNode.root) lowestNodeParent.left = null;
        if (lowestNodeParent.right && lowestNodeParent.right.root === lowestNode.root) lowestNodeParent.right = null;

        prettyPrint();
    };

    const find = (value) => {
        return FindNode(root, value);
    };

    return {
        prettyPrint,
        buildTree,
        insert,
        deleteItem,
        find,
        
    };
};

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

function InsertNode(node, value) {
    if (node === null) {
        const newNode = Node();
        newNode.root = value;
        newNode.left = null;
        newNode.right = null;

        return newNode;
    };

    if (node.root > value) node.left = InsertNode(node.left, value);
    else node.right = InsertNode(node.right, value);

    return node;
};

function FindNode(node, value) {
    if (node === null) return null;
    if (node.root === value) return node;
    if (node.root > value) return FindNode(node.left, value);
    return FindNode(node.right, value);
};

function FindLowestNode(node) {
    let left, right;

    if (node.left) left = FindLowestNode(node.left);
    if (node.right) right = FindLowestNode(node.right);

    if (left && right) return left > right ? right : left;
    if (left) return left;
    if (right) return right;
    
    return node;
};

function FindParentNode(parent, node) {
    if (parent.left && parent.left.root === node.root) return parent;
    if (parent.right && parent.right.root === node.root) return parent;

    if (parent.left) return FindParentNode(parent.left, node);
    if (parent.right) return FindParentNode(parent.right, node);
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